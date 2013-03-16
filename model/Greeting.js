define(['Backbone'], function (Backbone) {
        return Backbone.Model.extend({
                defaults: {
                    greeting: "Hello"
                }
            }
        );
    }
);