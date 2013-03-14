define([
    'jQuery',
    'Backbone',
    'app/SingleColumnTemplate',
    'app/GreetingView'],
    function ($, Backbone, SingleColumnTemplate, GreetingView) {

        var Application = {};

        // create locations within the DOM

        new SingleColumnTemplate({ el: $('body') }).render();


        // add greeting to appBody

        var model = new Backbone.Model({
                greeting: 'Hello'
            }
        );

        new GreetingView({ model: model }).render().appendTo('.appBody');

        return Application;
    }
);
