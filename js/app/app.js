define([
    
    'app/views/views',
    'app/routers/routers',
    'app/models/app',
    'app/collections/days'


    ], function (AppView, Router, AppModel, DaysCollection) {
        'use strict';

        var initialize = function () {

                var appModel = new AppModel();
                var appView = new AppView({model: appModel});
                $('body').append(appView.el);

                var router = new Router(appView);
                Backbone.history.start();

                window.debug = {
                    settings: appModel
                }

                // var daysCollection = new DaysCollection([], {
                //     url: 'http://api.wunderground.com/api/8fa51cd0ae81c629/forecast/q/CA/San_Francisco.json'
                // });

                // daysCollection.fetch({
                //     success: function(collection, response, options) {
                //         console.log(collection, response);
                //     },
                //     error: function(collection, response, options) {
                //         console.log('error');
                //     }
                // });
        };
        return {
            initialize: initialize  
        }

    });
    