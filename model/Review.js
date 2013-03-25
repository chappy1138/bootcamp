define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;
        return superclass.extend({
                urlRoot: '../json/review',
                idAttribute: 'base_item_id',
                parse: function (response) {
                    return {
                        entries: response
                    }
                },
                sync: function (method, model, options) {
                    if (method === 'read') {
                        model.url = '../json/reviews.json';
                    }
                    return superclass.prototype.sync.apply(this, arguments);
                }
            }
        );
    }
);