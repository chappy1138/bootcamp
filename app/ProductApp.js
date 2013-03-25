define([
    'jQuery',
    'underscore',
    'Backbone',
    'lib/products',
    'lib/reviews',
    'televisions',
    'view/ProductTop',
    'view/ProductMedia',
    'view/ProductAbout'],
    function ($, _, Backbone, products, reviews, qTelevisions, ProductTopView, ProductMediaView, ProductAboutView) {
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
                    var self = this, rating;
                    _.any(televisions, function (tv) {
                            if (tv.item_id === products.attributes.base_item_id) {
                                rating = tv.rating;
                                return true;
                            }
                            return false;
                        }
                    );
                    var productAppModel = new Backbone.Model({
                            isOpen: true,
                            product: products,
                            baseItem: products.attributes.items[0],
                            reviews: reviews,
                            rating: rating,
                            oneReview: reviews.attributes.entries.length === 1
                        }
                    );
                    var productTopView = new ProductTopView({
                                appendTo: options.appendTo,
                                close: options.close,
                                model: productAppModel
                            }
                        ),
                        productMediaView = new ProductMediaView({
                                appendTo: options.appendTo,
                                model: productAppModel
                            }
                        ),
                        productAboutView = new ProductAboutView({
                                appendTo: options.appendTo,
                                model: productAppModel
                            }
                        );
                    productAppModel.on('change:isOpen', function () {
                            options.appendTo
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
                                    top = windowScrollTop + 40 - offset.top;
                                options.appendTo.css({
                                        'left': left + 'px',
                                        'top': top + 'px',
                                        'display': 'block'
                                    }
                                );
                                productTopView.start();
                                productMediaView.start();
                                productAboutView.start();
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

