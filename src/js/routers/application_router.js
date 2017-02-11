var App = require('../views/app_view');
require('../../datas/datas.json');

var ApplicationRouter = Backbone.Router.extend({
    routes: {
        "*actions": "defaultRoute",
      },
      initialize: function() {
        this.listener = {};
        _.extend(this.listener, Backbone.Events);

        this.json = require('../../datas/datas.json');

        this.app = new App({el: $('#app')});
        this.app.render(this.json.pages[0]);
    },
});
module.exports = ApplicationRouter;
