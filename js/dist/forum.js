module.exports=function(t){var a={};function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=t,o.c=a,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=26)}([function(t,a){t.exports=flarum.core.compat.app},function(t,a){t.exports=flarum.core.compat.Model},function(t,a,o){"use strict";function e(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a}o.d(a,"a",(function(){return e}))},function(t,a){t.exports=flarum.core.compat.extend},function(t,a){t.exports=flarum.core.compat["components/Button"]},function(t,a,o){"use strict";function e(){return(e=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}o.d(a,"a",(function(){return e}))},function(t,a,o){"use strict";var e=o(5),s=o(2),n=o(1),r=o.n(n),i=function(t){function a(){return t.apply(this,arguments)||this}return Object(s.a)(a,t),a}(r.a);Object(e.a)(i.prototype,{type:r.a.attribute("type"),reason:r.a.attribute("reason"),reasonDetail:r.a.attribute("reasonDetail"),createdAt:r.a.attribute("createdAt",r.a.transformDate),dismissedAt:r.a.attribute("dismissedAt",r.a.transformDate),post:r.a.hasOne("post"),user:r.a.hasOne("user"),dismisser:r.a.hasOne("dismisser")}),a.a=i},function(t,a){t.exports=flarum.core.compat["helpers/avatar"]},function(t,a){t.exports=flarum.core.compat["helpers/username"]},function(t,a){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,a){t.exports=flarum.core.compat["components/Post"]},function(t,a){t.exports=flarum.core.compat["components/Page"]},function(t,a){t.exports=flarum.core.compat.Component},function(t,a){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,a){t.exports=flarum.core.compat["components/Modal"]},function(t,a){t.exports=flarum.core.compat["utils/ItemList"]},function(t,a){t.exports=flarum.core},function(t,a){t.exports=flarum.core.compat["utils/PostControls"]},,function(t,a){t.exports=flarum.core.compat["helpers/icon"]},function(t,a){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,a){t.exports=flarum.core.compat["components/NotificationsDropdown"]},function(t,a){t.exports=flarum.core.compat["utils/humanTime"]},,,,function(t,a,o){"use strict";o.r(a);var e=o(5),s=o(0),n=o.n(s),r=o(1),i=o.n(r),l=o(6),c=o(2),p=o(11),u=o.n(p),f=o(12),d=o.n(f),g=o(13),h=o.n(g),b=o(7),v=o.n(b),_=o(8),y=o.n(_),x=o(19),N=o.n(x),F=o(9),w=o.n(F),O=function(t){function a(){return t.apply(this,arguments)||this}Object(c.a)(a,t);var o=a.prototype;return o.init=function(){this.loading=!1},o.view=function(){var t=app.cache.flags||[];return m("div",{className:"NotificationList FlagList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},app.translator.trans("flarum-flags.forum.flagged_posts.title"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length?t.map((function(t){var a=t.post();return m("li",null,m("a",{href:app.route.post(a),className:"Notification Flag",config:function(t,o){m.route.apply(this,arguments),o||$(t).on("click",(function(){return app.cache.flagIndex=a}))}},v()(a.user()),N()("fas fa-flag",{className:"Notification-icon"}),m("span",{className:"Notification-content"},app.translator.trans("flarum-flags.forum.flagged_posts.item_text",{username:y()(a.user()),em:m("em",null),discussion:a.discussion().title()})),w()(t.createdAt()),m("div",{className:"Notification-excerpt"},a.contentPlain())))})):this.loading?h.a.component({className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},app.translator.trans("flarum-flags.forum.flagged_posts.empty_text")))))},o.load=function(){var t=this;app.cache.flags&&!app.session.user.attribute("newFlagCount")||(this.loading=!0,m.redraw(),app.store.find("flags").then((function(t){app.session.user.pushAttributes({newFlagCount:0}),app.cache.flags=t.sort((function(t,a){return a.createdAt()-t.createdAt()}))})).catch((function(){})).then((function(){t.loading=!1,m.redraw()})))},a}(d.a),A=function(t){function a(){return t.apply(this,arguments)||this}Object(c.a)(a,t);var o=a.prototype;return o.init=function(){t.prototype.init.call(this),app.history.push("flags"),this.list=new O,this.list.load(),this.bodyClass="App--flags"},o.view=function(){return m("div",{className:"FlagsPage"},this.list.render())},a}(u.a),j=o(3),P=o(17),k=o.n(P),D=o(4),C=o.n(D),M=o(14),B=function(t){function a(){return t.apply(this,arguments)||this}Object(c.a)(a,t);var o=a.prototype;return o.init=function(){t.prototype.init.call(this),this.success=!1,this.reason=m.prop(""),this.reasonDetail=m.prop("")},o.className=function(){return"FlagPostModal Modal--medium"},o.title=function(){return app.translator.trans("flarum-flags.forum.flag_post.title")},o.content=function(){if(this.success)return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("flarum-flags.forum.flag_post.confirmation_message")),m("div",{className:"Form-group"},m(C.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("flarum-flags.forum.flag_post.dismiss_button")))));var t=app.forum.attribute("guidelinesUrl");return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"off_topic"===this.reason(),value:"off_topic",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_text"),"off_topic"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"inappropriate"===this.reason(),value:"inappropriate",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_text",{a:t?m("a",{href:t,target:"_blank"}):void 0}),"inappropriate"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"spam"===this.reason(),value:"spam",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_spam_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_spam_text"),"spam"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"other"===this.reason(),value:"other",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_other_label")),"other"===this.reason()?m("textarea",{className:"FormControl",value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""))),m("div",{className:"Form-group"},m(C.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading,disabled:!this.reason()},app.translator.trans("flarum-flags.forum.flag_post.submit_button")))))},o.onsubmit=function(t){var a=this;t.preventDefault(),this.loading=!0,app.store.createRecord("flags").save({reason:"other"===this.reason()?null:this.reason(),reasonDetail:this.reasonDetail(),relationships:{user:app.session.user,post:this.props.post}},{errorHandler:this.onerror.bind(this)}).then((function(){return a.success=!0})).catch((function(){})).then(this.loaded.bind(this))},a}(o.n(M).a),L=function(){Object(j.extend)(k.a,"userControls",(function(t,a){!a.isHidden()&&"comment"===a.contentType()&&a.canFlag()&&t.add("flag",m(C.a,{icon:"fas fa-flag",onclick:function(){return n.a.modal.show(new B({post:a}))}},n.a.translator.trans("flarum-flags.forum.post_controls.flag_button")))}))},T=o(20),I=o.n(T),S=o(21),E=function(t){function a(){return t.apply(this,arguments)||this}Object(c.a)(a,t),a.initProps=function(a){a.label=a.label||app.translator.trans("flarum-flags.forum.flagged_posts.tooltip"),a.icon=a.icon||"fas fa-flag",t.initProps.call(this,a)};var o=a.prototype;return o.init=function(){t.prototype.init.call(this),this.list=new O},o.goToRoute=function(){m.route(app.route("flags"))},o.getUnreadCount=function(){return app.cache.flags?app.cache.flags.length:app.forum.attribute("flagCount")},o.getNewCount=function(){return app.session.user.attribute("newFlagCount")},a}(o.n(S).a),H=function(){Object(j.extend)(I.a.prototype,"items",(function(t){n.a.forum.attribute("canViewFlags")&&t.add("flags",m(E,null),15)}))},R=o(10),U=o.n(R),G=o(15),q=o.n(G),z=o(22),V=o.n(z),J=function(){Object(j.extend)(U.a.prototype,"attrs",(function(t){this.props.post.flags().length&&(t.className+=" Post--flagged")})),U.a.prototype.dismissFlag=function(t){var a=this.props.post;return delete a.data.relationships.flags,this.subtree.invalidate(),n.a.cache.flags&&n.a.cache.flags.some((function(t,o){if(t.post()===a){if(n.a.cache.flags.splice(o,1),n.a.cache.flagIndex===a){var e=n.a.cache.flags[o];if(e||(e=n.a.cache.flags[0]),e){var s=e.post();n.a.cache.flagIndex=s,m.route(n.a.route.post(s))}}return!0}})),n.a.request({url:n.a.forum.attribute("apiUrl")+a.apiEndpoint()+"/flags",method:"DELETE",data:t})},U.a.prototype.flagActionItems=function(){var t=this,a=new q.a,o=k.a.destructiveControls(this.props.post);return Object.keys(o.items).forEach((function(a){var e=o.get(a).props;e.className="Button",Object(j.extend)(e,"onclick",(function(){return t.dismissFlag()}))})),a.add("controls",m("div",{className:"ButtonGroup"},o.toArray())),a.add("dismiss",m(C.a,{className:"Button",icon:"far fa-eye-slash",onclick:this.dismissFlag.bind(this)},n.a.translator.trans("flarum-flags.forum.post.dismiss_flag_button")),-100),a},Object(j.extend)(U.a.prototype,"content",(function(t){var a=this,o=this.props.post,e=o.flags();e.length&&(o.isHidden()&&(this.revealContent=!0),t.unshift(m("div",{className:"Post-flagged"},m("div",{className:"Post-flagged-flags"},e.map((function(t){return m("div",{className:"Post-flagged-flag"},a.flagReason(t))}))),m("div",{className:"Post-flagged-actions"},this.flagActionItems().toArray()))))})),U.a.prototype.flagReason=function(t){if("user"===t.type()){var a=t.user(),o=t.reason(),e=t.reasonDetail(),s=V()(t.createdAt());return[n.a.translator.trans(o?"flarum-flags.forum.post.flagged_by_with_reason_text":"flarum-flags.forum.post.flagged_by_text",{time:s,user:a,reason:o}),e?m("span",{className:"Post-flagged-detail"},e):""]}}},K={"flags/addFlagsToPosts":J,"flags/addFlagControl":L,"flags/addFlagsDropdown":H,"flags/models/Flag":l.a,"flags/components/FlagList":O,"flags/components/FlagPostModal":B,"flags/components/FlagsPage":A,"flags/components/FlagsDropdown":E},Q=o(16);n.a.initializers.add("flarum-flags",(function(){n.a.store.models.posts.prototype.flags=i.a.hasMany("flags"),n.a.store.models.posts.prototype.canFlag=i.a.attribute("canFlag"),n.a.store.models.flags=l.a,n.a.routes.flags={path:"/flags",component:m(A,null)},L(),H(),J()})),Object(e.a)(Q.compat,K)}]);
//# sourceMappingURL=forum.js.map