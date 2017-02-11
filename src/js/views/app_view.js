NavView = require('./app/header/nav_view');
LleftView = require('./app/landing-left/lleft_view');
LrightView = require('./app/landing-right/lright_view');
LnewsView = require('./app/landing-news/lnews_view');

var AppView = Backbone.View.extend({
    initialize: function() {

    },
    render: function(json){
        this.json = json;

        // on ajouter le template html
        var template = require('../../templates/app.html');
        var html = template({homepage: this.json});
        this.$el.append(html);

        this.nav = new NavView({el: $('#navigation')})
        this.leftView = new LleftView({el: $('#content')})
        this.rightView = new LrightView({el: $('#content')})
        this.newsView = new LnewsView({el: $('#content')})
    },
    show: function(){

    },
    hide: function(){

    }
});
module.exports = AppView;
