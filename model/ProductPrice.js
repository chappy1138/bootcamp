define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;

        return superclass.extend({
                dollars: function (price) {
                    return price ? '$' + Math.floor(price) : price;
                },
                cents: function (price) {
                    return price ? price.toFixed(2).slice(-3) : price;
                }
            }
        );
    }
);