import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/helpers/humanTime';

export default class DismissedFlagsTable extends Component {
  init() {
    this.loading = true;

    app.store.find('flags', { dismissed: true }).then(() => {
      this.loading = false;

      m.redraw();
    });
  }

  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="DismissedFlagsTable">
        <table>
          <thead>
            <td>Username</td>
            <td>Discussion</td>
            <td>Reason</td>
            <td>Detail</td>
            <td>Created</td>
            <td>Dismissed</td>
          </thead>
          <tbody>
            {app.store.all('flags').map(flag => (
              <tr>
                <td>{flag.user().username()}</td>
                <td>{flag.post().discussion().title()}</td>
                <td>{flag.reason()}</td>
                <td>{flag.reasonDetail()}</td>
                <td>{humanTime(flag.createdAt())}</td>
                <td>{humanTime(flag.dismissedAt())}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
