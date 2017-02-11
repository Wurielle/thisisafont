$(function() {

    require('../styl/main.styl');
    require('../styl/misc/_mobile.styl');
    require('../styl/misc/_toold.styl');
    require('gsap');

    var ApplicationRouter = require('./routers/application_router');
    var router = new ApplicationRouter();
    Backbone.history.start();
});
