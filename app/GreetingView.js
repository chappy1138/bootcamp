define(['app/ApplicationView', 'jQuery', 'Backbone'],
    function (ApplicationView, $, Backbone) {

        var model = new Backbone.Model({
                    greeting: 'Hello'
                }
            );

        return new ApplicationView({
                    el: $(".appBody")[0],
                    name: 'GreetingView',
                    model: model
                }
            );
    }
);
