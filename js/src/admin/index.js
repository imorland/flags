import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';
import Flag from '../common/models/Flag';
import FlagsSettingsModal from './components/FlagsSettingsModal';
import addFlagsPane from './addFlagsPane';

app.initializers.add('flarum-flags', () => {
  app.extensionSettings['flarum-flags'] = () => app.modal.show(new FlagsSettingsModal());

  app.store.models.flags = Flag;

  extend(PermissionGrid.prototype, 'moderateItems', items => {
    items.add('viewFlags', {
      icon: 'fas fa-flag',
      label: app.translator.trans('flarum-flags.admin.permissions.view_flags_label'),
      permission: 'discussion.viewFlags'
    }, 65);
  });

  extend(PermissionGrid.prototype, 'replyItems', items => {
    items.add('flagPosts', {
      icon: 'fas fa-flag',
      label: app.translator.trans('flarum-flags.admin.permissions.flag_posts_label'),
      permission: 'discussion.flagPosts'
    }, 70);
  });

  addFlagsPane();
});

// Expose compat API
import flagsCompat from './compat';
import { compat } from '@flarum/core/admin';

Object.assign(compat, flagsCompat);
