import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/helpers/humanTime';

export default class DismissedFlagsTable extends Component {
  init() {
    this.data = [];
    this.loading = true;

    app.store.find('flags', { dismissed: true, sort: 'dismissedAt' }).then(res => {
      this.data = res.payload.data;
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
            <td>{app.translator.trans('flarum-flags.admin.dismissed.fields.username')}</td>
            <td>{app.translator.trans('flarum-flags.admin.dismissed.fields.discussion')}</td>
            <td>{app.translator.trans('flarum-flags.admin.dismissed.fields.reason')}</td>
            <td>{app.translator.trans('flarum-flags.admin.dismissed.fields.reason_detail')}</td>
            <td>{app.translator.trans('flarum-flags.admin.dismissed.fields.created_at')}</td>
            <td>{app.translator.trans('flarum-flags.admin.dismissed.fields.dismissed_at')}</td>
            <td>{app.translator.trans('flarum-flags.admin.dismissed.fields.dismissed_by')}</td>
          </thead>
          <tbody>
            {this.data.map(data => {
              const flag = app.store.getById('flags', data.id);

              return (
                <tr>
                  <td>{flag.post().user().username()}</td>
                  <td>{flag.post().discussion().title()}</td>
                  <td>{flag.reason()}</td>
                  <td>{flag.reasonDetail()}</td>
                  <td>{humanTime(flag.createdAt())}</td>
                  <td>{humanTime(flag.dismissedAt())}</td>
                  <td>{flag.dismisser().username()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
