import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Placeholder from 'flarum/components/Placeholder';
import FlagsListItem from './FlagsListItem';

export default class FlagsTable extends Component {
  init() {
    super.init();
    this.loading = true;
    this.flags = [];
    this.refresh();
  }

  refresh() {
    return app.store.find('flags/dismissed').then(
      results => {
        this.flags = [];
        this.parseResults(results);
      },
      () => {
        this.loading = false;
        m.redraw();
      }
    );
  }

  parseResults(results) {
    [].push.apply(this.flags, results);
    this.loading = false;
    m.lazyRedraw();

    return results;
  }

  view() {
    if (this.loading) {
      return <div className="FlagsList-loading">{LoadingIndicator.component()}</div>;
    }

    if (this.flags.length === 0) {
      const text = app.translator.trans('flarum-flags.admin.flags.list.empty_text');
      return Placeholder.component({ text });
    }


    return (
      <div className="FlagList">
        <table className="FlagList-results">
          <thead>
            <tr>
              <th>{app.translator.trans('flarum-flags.admin.flags.name_label')}</th>
              <th>{app.translator.trans('flarum-flags.admin.flags.regex_label')}</th>
              <th>{app.translator.trans('flarum-flags.admin.flags.replacement_label')}</th>
              <th>{app.translator.trans('flarum-flags.admin.flags.flag_label')}</th>
              {/*leave blank for the action buttons*/}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.flags.map(flag => {
              return FlagsListItem.component({ flag });
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
