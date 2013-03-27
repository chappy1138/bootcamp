define(['jQuery', 'Backbone'], function ($, Backbone) {
        var qCart = $.Deferred();
        qCart.resolve(new Backbone.Collection()); // empty
        return qCart.promise();
    }
);