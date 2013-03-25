define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;
        return superclass.extend({
                idAttribute: 'base_item_id',
                parse: function (response) {
                    return {
                        items: response
                    }
                },
                sync: function (method, model, options) {
                    if (method === 'read') {
                        model.url = '../json/product/item-' + model.get('base_item_id') + '.json';
                    }
                    return superclass.prototype.sync.apply(this, arguments);
                }
            }
        );
    }
);