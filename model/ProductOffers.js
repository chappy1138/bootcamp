define(['model/ProductPrice', 'underscore'], function (ProductPriceModel, _) {
        var superclass = ProductPriceModel;

        return superclass.extend({
                constructor: function (productOffers) {
                    productOffers = productOffers.slice(0);
                    productOffers.forEach(function (productOffer, index) {
                            productOffers[index] = _.extend({
                                    ratingWidth: ratingWidth(productOffer),
                                    ratingDisplay: ratingDisplay(productOffer),
                                    dollars: superclass.prototype.dollars(productOffer.price),
                                    cents: superclass.prototype.cents(productOffer.price)
                                },
                                productOffer
                            );

                        }
                    );
                    superclass.prototype.constructor.call(this, { productOffers: productOffers });
                }
            }
        );

        function ratingWidth(productOffer) {
            var ratingWidth = Math.round(productOffer.rating * 12.0);
            return ratingWidth;
        }

        function ratingDisplay(productOffer) {
            var ratingDisplay = Math.round(productOffer.rating) === productOffer.rating
                ? productOffer.rating : productOffer.rating.toFixed(1);
            return ratingDisplay;
        }
    }
);