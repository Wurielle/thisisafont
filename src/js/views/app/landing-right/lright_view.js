var RightView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    render: function(json){
        this.json = json;

        // on ajouter le template html
        var template = require('../../../../templates/landing-right/landing-right.html');
        var html = template({homepage: this.json});
        this.$el.append(html);
    },
    show: function(){

    },
    hide: function(){

    }
});
module.exports = RightView;
