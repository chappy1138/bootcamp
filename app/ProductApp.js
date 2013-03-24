define([
    'jQuery',
    'underscore',
    'Backbone',
    'lib/products',
    'lib/reviews',
    'televisions',
    'view/ProductTop'],
    function ($, _, Backbone, products, reviews, qTelevisions, ProductTopView) {
        var productAppModel = new Backbone.Model();
        return function (options) {
            var qGetSpecificData = $.Deferred(),
                productPromise = products.getOrFetch(options.base_item_id),
                reviewsPromise = reviews.getOrFetch(options.base_item_id);
            $.when(productPromise, reviewsPromise, qTelevisions).then(
                function (products, reviews, televisions) {
                    // display the product
                    options = _.extend({
                            appendTo: $('appBody')[0]
                        },
                        options
                    );
                    var ratingWidthValue = 0, ratingDisplayValue = undefined;
                    _.any(televisions, function (tv) {
                            if (tv.item_id === products.attributes.base_item_id) {
                                ratingWidthValue = ratingWidth(tv.rating);
                                ratingDisplayValue = ratingDisplay(tv.rating);
                                return true;
                            }
                            return false;
                        }
                    );
                    productAppModel.set({
                            product: products,
                            baseItem: products.attributes.items[0],
                            reviews: reviews,
                            ratingWidth: ratingWidthValue,
                            ratingDisplay: ratingDisplayValue,
                            reviewsCount:
                                reviews.attributes.entries.length === 1
                                ? '1 review'
                                : reviews.attributes.entries.length + ' reviews'
                        }
                    );
                    var productTopView = new ProductTopView({
                                appendTo: options.appendTo,
                                model: productAppModel
                            }
                        );
                    qGetSpecificData.resolve({
                            start: function () {
                                productTopView.start();
                            }
                        }
                    );
                },
                function (error) {
                    console.log(error);
                }
            );
            return qGetSpecificData.promise();
        };

        function ratingWidth(ratingValue) {
            var ratingWidth = ratingValue ? Math.round(ratingValue * 12.0) : 0;
            return ratingWidth;
        }

        function ratingDisplay(ratingValue) {
            var ratingDisplay = ratingValue
                ? (Math.round(ratingValue) === ratingValue ? ratingValue : ratingValue.toFixed(1)) : 0;
            return ratingDisplay;
        }
    }
);

