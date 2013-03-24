define([
    'jQuery',
    'underscore',
    'Backbone',
    'lib/products',
    'lib/reviews',
    'televisions',
    'view/ProductTop',
    'view/ProductMedia'],
    function ($, _, Backbone, products, reviews, qTelevisions, ProductTopView, ProductMediaView) {
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
                    var rating;
                    _.any(televisions, function (tv) {
                            if (tv.item_id === products.attributes.base_item_id) {
                                rating = tv.rating;
                                return true;
                            }
                            return false;
                        }
                    );
                    productAppModel.set({
                            product: products,
                            baseItem: products.attributes.items[0],
                            reviews: reviews,

                            rating: rating,
                            reviewsCount: reviews.attributes.entries.length === 1
                                ? '1 review'
                                : reviews.attributes.entries.length + ' reviews'
                        }
                    );
                    var productTopView = new ProductTopView({
                                appendTo: options.appendTo,
                                model: productAppModel
                            }
                        ),
                        productMediaView = new ProductMediaView({
                                appendTo: options.appendTo,
                                model: productAppModel
                            }
                        );
                    qGetSpecificData.resolve({
                            start: function () {

                                var totalMargins = $(window).width() - 1024,
                                    leftMargin = totalMargins / 2,
                                    rightMargin = leftMargin + 1024,
                                    panelWidth = 768,
                                    left = rightMargin - panelWidth,
                                    offset = options.appendTo.parent().offset(),
                                    windowScrollTop = $(window).scrollTop(),
                                    top = windowScrollTop + 20 - offset.top;

                                options.appendTo.css({
                                        'position': 'absolute',
                                        'left': left + 'px',
                                        'top': top + 'px',
                                        'display': 'block',
                                        'z-index': 2
                                    }
                                );
                                productTopView.start();
                                productMediaView.start();
                            },
                            stop: function () {
                                options.appendTo.css({
                                    'display': 'none'
                                });
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
    }
);

