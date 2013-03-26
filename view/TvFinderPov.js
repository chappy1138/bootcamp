define(['Backbone', 'view/Base'], function (Backbone, BaseView) {
        superclass = BaseView;
        return superclass.extend({
                name: 'TvFinderPov',
                tagName: "header",
                className: "tvFinderPov",
                initialize: function (options) {
                    var televisions = options.televisions.slice(0);
                    televisions.sort(function (a, b) {
                            return a.price - b.price
                        }
                    );
                    var minIndex = 0,
                        medianIndex,
                        maxIndex = televisions.length - 1,
                        minPriceItem = televisions[minIndex],
                        medianPriceItem,
                        maxPriceItem = televisions[maxIndex];
                    while (!minPriceItem.price && minIndex < maxIndex) {
                        minPriceItem = televisions[++minIndex];
                    }
                    medianIndex = minIndex + Math.floor((maxIndex - minIndex) / 2);
                    medianPriceItem = televisions[medianIndex];
                    this.attributes = {
                        minPrice: minPriceItem,
                        medianPrice: medianPriceItem,
                        maxPrice: maxPriceItem
                    };
                    superclass.prototype.initialize.apply(this, arguments);
                }
            }
        );
    }
);
