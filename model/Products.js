define(['jQuery', 'Backbone', 'model/Product'], function ($, Backbone, ProductModel) {
        var superclass = Backbone.Collection;
        return superclass.extend({
                model: ProductModel,
                getOrFetch: function (item_id) {
                    var self = this, qGetOrFetch = $.Deferred(), product = this.get(item_id);
                    if (product) {
                        qGetOrFetch.resolve(product);
                    }
                    else {
                        product = new ProductModel({ item_id: item_id });
                        product.fetch().then(
                            function (data, textStatus, jqXHR) {
                                self.add(product);
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