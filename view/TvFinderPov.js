define(['Backbone', 'view/Base'], function (Backbone, BaseView) {
        superclass = BaseView;
        return superclass.extend({
                name: 'TvFinderPov',
                tagName: "header",
                className: "tvFinderPov",
                initialize: function (options) {
                    var tvOffers = options.tvFinderAppModel.get('tvOfferCollection').models.slice(0);
                    tvOffers.sort(function (a, b) {
                            return a.get('price') - b.get('price')
                        }
                    );
                    var minIndex = 0,
                        medianIndex,
                        maxIndex = tvOffers.length - 1,
                        minPriceItem = tvOffers[minIndex],
                        medianPriceItem,
                        maxPriceItem = tvOffers[maxIndex];
                    while (!minPriceItem.get('price') && minIndex < maxIndex) {
                        minPriceItem = tvOffers[++minIndex];
                    }
                    medianIndex = minIndex + Math.floor((maxIndex - minIndex) / 2);
                    medianPriceItem = tvOffers[medianIndex];
                    this.model = new Backbone.Model({
                            minPrice: minPriceItem.attributes,
                            medianPrice: medianPriceItem.attributes,
                            maxPrice: maxPriceItem.attributes
                        }
                    );
                    superclass.prototype.initialize.apply(this, arguments);
                }
            }
        );
    }
);
