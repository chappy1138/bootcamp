define(['model/ProductPrice', 'underscore'], function (ProductPriceModel, _) {
        var superclass = ProductPriceModel;

        return superclass.extend({
                constructor: function (productOffers) {
                    productOffers = productOffers.slice(0);
                    var min, max;
                    productOffers.forEach(function (productOffer, index) {
                            min = Math.min(min || productOffer.size, productOffer.size);
                            max = Math.max(max || productOffer.size, productOffer.size);
                            productOffers[index] = _.extend({
                                    ratingWidth: ratingWidth(productOffer.rating),
                                    ratingDisplay: ratingDisplay(productOffer.rating),
                                    dollars: superclass.prototype.dollars(productOffer.price),
                                    cents: superclass.prototype.cents(productOffer.price)
                                },
                                productOffer
                            );
                        }
                    );
                    superclass.prototype.constructor.call(this, {
                            productOffers: productOffers,
                            lowMax: max,
                            topMin: min,
                            type: 'Any',
                            brand: 'Any',
                            sort: 'Featured'
                        }
                    );
                }
            }
        );

        function ratingWidth(rating) {
            var ratingWidth = Math.round(rating * 12.0);
            return ratingWidth;
        }

        function ratingDisplay(rating) {
            var ratingDisplay = Math.round(rating) === rating ? rating : rating.toFixed(1);
            return ratingDisplay;
        }
    }
);