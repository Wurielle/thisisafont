var NewsView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    render: function(json){
        this.json = json;

        // on ajouter le template html
        var template = require('../../../../templates/landing-news/landing-news.html');
        var html = template({homepage: this.json});
        this.$el.append(html);
    },
    show: function(){

    },
    hide: function(){

    }
});
module.exports = NewsView;
