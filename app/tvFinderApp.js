define([
    'jQuery',
    'Backbone',
    'model/Greeting',
    'view/SiteHeader',
    'view/Greeting'],
    function ($, Backbone, GreetingModel, SiteHeaderView, GreetingView) {
        var greetingModel = new GreetingModel();
        new SiteHeaderView({
                id: "#tvFinderTopNavId",
                className: "tvFinderTopNav",
                appendTo: ".appHeader"
            }
        );
        new GreetingView({
                id: '#greeting',
                className: "tvFinderGreeting",
                appendTo: ".appBody",
                model: greetingModel
            }
        );
    }
);
