define([
    'app/SingleColumnTemplate',
    'app/GreetingView'],
    function (SingleColumnTemplate, GreetingView) {

        var Application = {};
        SingleColumnTemplate.render();
        GreetingView.render();
        return Application;
    }
);
