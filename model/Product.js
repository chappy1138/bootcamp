define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;
        return superclass.extend({
                urlRoot: '/product',
                idAttribute: 'item_id'
            }
        );
    }
);