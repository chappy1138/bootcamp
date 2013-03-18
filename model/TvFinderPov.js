define(['model/ProductPrice'], function (ProductPriceModel) {
        var superclass = ProductPriceModel;

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

        function PriceObject(item) {
            this.dollars = superclass.prototype.dollars(item.price);
            this.cents = superclass.prototype.cents(item.price);
            this.size = item.size;
        }
    }
);