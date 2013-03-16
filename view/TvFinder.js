define([
    'Backbone',
    'view/SiteHeader',
    'view/Greeting'],
    function (Backbone, SiteHeader, Greeting) {
        return Backbone.View.extend({
            initialize: function () {
                // populate slots
                var views = [], view, model;
                this.options.views = views;

                // site header
                view = new SiteHeader();
                views.push(view);

                // greeting
                var model = new Backbone.Model({
                        greeting: 'Hello'
                    }
                );
                view = new Greeting({ model: model });
                views.push(view);
            },
            render: function () {
                this.options.views.forEach(function (view) { view.render(); });
            }
        });
    }
);
