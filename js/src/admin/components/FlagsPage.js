import Page from 'flarum/components/Page';
import FlagsTable from './FlagsTable';

export default class FlagsPage extends Page {
  init() {

  }

  view() {
    return (
      <div className="FlagsPage">
        <div className="FlagsPage-header">
          <div className="container">
            <p>
              {app.translator.trans('flarum-flags.admin.flags.about_flags_text')}
            </p>
          </div>
        </div>
        <div className="FlagsPage-list">
          <div className="container">
            {FlagsTable.component()}
          </div>
        </div>
      </div>
    );
  }
}
