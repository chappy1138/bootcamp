define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;
        return superclass.extend({
                urlRoot: '/product',
                idAttribute: 'base_item_id',
                parse: function (response) {
                    return {
                        items: response
                    }
                }
            }
        );
    }
);