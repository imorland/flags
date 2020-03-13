import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';
import FlagsPage from './components/FlagsPage';

export default function() {
    app.routes.flags = { path: 'flags', component: FlagsPage.component() };

    extend(AdminNav.prototype, 'items', items => {
        items.add(
            'flags-manager',
            AdminLinkButton.component({
                href: app.route('flags'),
                icon: 'fas fa-flag',
                children: app.translator.trans('flarum-flags.admin.nav.flags_button'),
                description: app.translator.trans('flarum-flags.admin.nav.flags_text'),
            })
        );
    });
}
