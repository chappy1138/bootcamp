define(['jQuery', 'Backbone', 'model/Product'], function ($, Backbone, ProductModel) {
        var superclass = Backbone.Collection;
        return superclass.extend({
                model: ProductModel,
                getOrFetch: function (base_item_id) {
                    var self = this, qGetOrFetch = $.Deferred(), product = this.get(base_item_id);
                    if (product) {
                        qGetOrFetch.resolve(product);
                    }
                    else {
                        product = new ProductModel({ base_item_id: base_item_id });
                        product.fetch().then(
                            function (data, textStatus, jqXHR) {
                                qGetOrFetch.resolve(product);
                            },
                            function (jqXHR, textStatus, errorThrown) {
                                console.log(textStatus, errorThrown);
                                qGetOrFetch.reject(errorThrown);
                            }
                        );
                    }
                    return qGetOrFetch;
                }
            }
        );
    }
);