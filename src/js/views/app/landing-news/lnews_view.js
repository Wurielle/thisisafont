var NewsView = Backbone.View.extend({
   events: {
        'click': 'expand'
    },
    initialize: function() {
        this.listener = {};
        _.extend(this.listener, Backbone.Events);

        this.render();
        this.isExpanded = false;
        this.selector = this.$el.find('.landing-news');
        this.wrapper = this.selector.find('.wrapper');
        this.background = this.selector.find('.background-text');
        this.title = this.selector.find('.background-text h2');
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

    },
    expand: function(){
        if (this.isExpanded === false) {
            this.expandAnimation();
        } else if (this.isExpanded === true) {
            this.unexpandAnimation();
        }
    },
    expandAnimation: function(){
        this.undelegateEvents()
        this.selector.removeClass('animate');
        TweenLite.to(this.wrapper, 1, {top: '0', ease: Expo.easeInOut});
        TweenLite.to(this.selector, 1, {top: '0', ease: Expo.easeInOut, onComplete: this.toggleState, onCompleteScope: this});
        TweenLite.to(this.title, 1, {opacity: '0', ease: Expo.easeInOut});
    },
    unexpandAnimation: function(){
        this.undelegateEvents()
        this.background.removeClass('fixed');
        TweenLite.to(this.wrapper, 1, {top: '-200px', ease: Expo.easeInOut});
        TweenLite.to(this.selector, 1, {top: '100%', ease: Expo.easeInOut, onComplete: this.toggleState, onCompleteScope: this});
        TweenLite.to(this.title, 1, {opacity: '1', ease: Expo.easeInOut});
    },
    toggleState: function(){
        if (this.isExpanded === false) {
            this.isExpanded = true;
            this.background.addClass('fixed');
            this.listener.trigger('expanded');
        } else if (this.isExpanded === true) {
            this.isExpanded = false;
            this.selector.addClass('animate');
            this.listener.trigger('unexpanded');
        } else {
            console.log("There was an error when toggling the news");
        }
        this.delegateEvents()
    }
});
module.exports = NewsView;
