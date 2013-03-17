define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;

        function dollars(price) {
            return price ? '$' + Math.floor(price) : price;
        }

        function cents(price) {
            return price ? price.toFixed(2).slice(-3) : price;
        }

        function PriceObject(item) {
            this.dollars = dollars(item.price);
            this.cents = cents(item.price);
            this.size = item.size;
        }

        return superclass.extend({
                constructor: function (items) {
                    items = items.slice(0);
                    items.sort(function (a, b) {
                            return a.price - b.price
                        }
                    );
                    var minIndex = 0,
                        medianIndex,
                        maxIndex = items.length - 1,
                        minPriceItem = items[minIndex],
                        medianPriceItem,
                        maxPriceItem = items[maxIndex];
                    while (!minPriceItem.price && minIndex < maxIndex) {
                        minPriceItem = items[++minIndex];
                    }
                    medianIndex = minIndex + Math.floor((maxIndex - minIndex) / 2);
                    medianPriceItem = items[medianIndex];
                    superclass.prototype.constructor.call(this, {
                            minPrice: new PriceObject(minPriceItem),
                            medianPrice: new PriceObject(medianPriceItem),
                            maxPrice: new PriceObject(maxPriceItem)
                        }
                    );
                }
            }
        );
    }
);