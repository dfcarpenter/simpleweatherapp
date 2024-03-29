define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/about',
    'app/views/dash'
    
], function ($, _, Backbone, AboutView, DashView) {
    'use strict';

    var AppView = Backbone.View.extend({
        id: 'app-view',

        html: [
            '<div class="navbar navbar-default">',
                '<a class="navbar-brand" href="#">Weather Watcher</a>',
                '<ul class="nav navbar-nav">',
                    '<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
                    '<li id="nav-about"><a href="#about">About</a></li>',
                '</ul>',
                '<p class="navbar-text pull-right"></p>',
            '</div>',
            '<div id="content"></div>'
        ].join(''),

        events: {
            
        },

        views: {},

        initialize: function() {

            this.listenTo(this.model, 'change', this.render);

            this.views['about'] = new AboutView({
                id: 'page-about',
                className: 'page-view'
            });

            this.views['dash'] = new DashView({
                id: 'page-dash',
                className: 'page-view'
            });
           
            this.$el.append(this.html);
            this.$('#content').append(this.views['about'].render().el);
            this.$('#content').append(this.views['dash'].render().el);

            
        },

       render: function() {
            this.$el.css('background-color', this.model.get('backgroundColor'));
            this.$('.navbar-text').html(this.model.get('welcomeMessage'));
            return this;
        },

        setPage: function(page, param) {
            this.$('.nav li').removeClass('active');
            this.$('.page-view').hide();
            this.$('#page-'+page).show();
            this.$('#nav-'+page).addClass('active');

            this.model.set('welcomeMessage', 'Welcome to the ' + page);
        },


    });

    return AppView;
});