define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;
        return superclass.extend({
                urlRoot: '/review',
                idAttribute: 'base_item_id',
                parse: function (response) {
                    return {
                        entries: response
                    }
                }
            }
        );
    }
);