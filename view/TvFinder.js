define([
    'jQuery',
    'Backbone',
    'view/SingleColumnTemplate',
    'view/SiteHeader',
    'view/Greeting'],
    function ($, Backbone, SingleColumnTemplate, SiteHeader, Greeting) {
        return Backbone.View.extend({
            initialize: function () {
                new SingleColumnTemplate({ el: $('body'), model: this.model }).render();
                new SiteHeader({ model: this.model }).render().appendTo('.appHeader');
                new Greeting({ model: this.model }).render().appendTo('.appBody');
            }
        });
    }
);
