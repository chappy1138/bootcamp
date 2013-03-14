define([
    'jQuery',
    'Backbone',
    'view/SingleColumnTemplate',
    'view/SiteHeader',
    'view/Greeting'],
    function ($, Backbone, SingleColumnTemplate, SiteHeader, Greeting) {
        return Backbone.View.extend({
            initialize: function () {
                // create slots
                new SingleColumnTemplate({ el: $('body'), model: this.model }).render();

                // populate slots
                this.options.views = [];
                this.options.views.push(new SiteHeader({ model: this.model }).appendTo('.appHeader'));
                this.options.views.push(new Greeting({ model: this.model }).appendTo('.appBody'));
            },
            render: function () {
                this.options.views.forEach(function (view) { view.render(); });
            }
        });
    }
);
