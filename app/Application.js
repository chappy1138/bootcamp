define(['app/ApplicationView', 'Backbone', 'jQuery', 'handlebars', 'app/templates'],
    function (ApplicationView, Backbone, $, Handlebars) {

        var Application = {};

        $('html').html("<div id='tvFinderSiteHeaderId'></div>");

        var greetingModel = new Backbone.Model({
                    greeting: 'Hello'
                }
            ),
            greetingView = new ApplicationView({
                    el: $("#tvFinderSiteHeaderId")[0],
                    name: 'greetings',
                    model: greetingModel
                }
            );

        greetingView.render();
        return Application;
    }
);
