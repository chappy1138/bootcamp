define([
    'jQuery',
    'Backbone',
    'lib/products'],
    function ($, Backbone, products) {
        var qProductApp = $.Deferred();
        qProductApp.resolve(function (item_id) {
                var productPromise = products.getOrFetch(item_id);
                productPromise.then(
                    function (product) {
                        // display the product
                    },
                    function (error) {
                        console.log(error);
                    }
                );
                return {
                    start: function () {
                    }
                };
            }
        );
        return qProductApp.promise();
    }
);

