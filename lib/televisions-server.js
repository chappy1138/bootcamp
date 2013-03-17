define(['jQuery', 'http', 'environment'], function ($, http, environment) {

        // fetch the television shelf

        var qTelevisions;

        function getTelevisions() {
            if (!qTelevisions) {
                qTelevisions = $.Deferred();
                var startTime = new Date();
                http.request({
                        host: environment.searchHost,
                        path: environment.searchPath
                    },
                    function (response) {
                        var json = '';
                        response.on('data', function (chunk) {
                                json += chunk;
                            }
                        );
                        response.on('end', function () {
                                var elapsed = (new Date()) - startTime,
                                    result = JSON.parse(json),
                                    items = result.response.items,
                                    televisions = normalizeTelevisions(items);
                                qTelevisions.resolve(televisions);
                                qTelevisions = undefined;
                            }
                        );
                    }
                ).on('error', function(error) {
                        qTelevisions.reject(error);
                        qTelevisions = undefined;
                    }
                ).end();
            }
            return qTelevisions.promise();
        }

        // normalize the television shelf data

        function normalizeTelevisions(items) {
            var brandMap = {
                    'VIZIO': 'Vizio', 'SANYO': 'Sanyo', 'SCEPTRE': 'Sceptre', 'HANNspree': 'Hannspree'
                }, tvs = [],
                brands = {}, types = {}, index, medianIndex, medianItem, televisions = {};
            televisions.items = [];
            for (index = 0; index < items.length; index++) {
                var item = items[index]
                    , listPrice = item.prices ? parseFloat((item.prices.base_suggested || item.prices.base || item.prices.current).amount) : 0
                    , price = item.prices ? parseFloat(item.prices.current.amount) : 0
                    , amount = price.toFixed(2)
                    , dollars = item.prices ? '$' + amount.match(/[^.]*/)[0] : ""
                    , cents = item.prices ? amount.match(/\..*/)[0] : ""
                    , sizeInches = item.title.match(/[0-9]*"/)
                    , size = sizeInches ? parseInt(sizeInches[0].match(/^[^"]*/)[0]) : 40
                    , brandValue = item.brand || item.title.match(/^[^ ]*/)[0]
                    , brand = brandMap[brandValue] || brandValue
                    , type = (item.title.match(/(LED-LCD)|(LED)|(LCD)|(Plasma)|(DLP)/) || ["LCD"])[0]
                    , rating = item.customer_rating ? parseFloat(item.customer_rating) : 0
                    , tv = {
                        url: item.url,
                        name: item.title,
                        size: size,
                        listPrice: listPrice,
                        price: price,
                        image: item.images[0].url,
                        description: item.shelf_description.match(/^</) ? item.shelf_description : item.shelf_description.match(/<li>.*/)[0],
                        type: type,
                        brand: brand,
                        rating: rating,
                        ratingWidth: Math.round(rating * 12.0),
                        ratingDisplay: Math.round(rating) == rating ? rating : rating.toFixed(1),
                        dollars: dollars,
                        cents: cents
                    }
                    ;
                brands[brand] = true;
                types[type] = true;
                televisions.items.push(tv);
                if ((televisions.minPrice || price) >= price) {
                    televisions.minPrice = price;
                    televisions.minPriceSize = size;
                }
                if ((televisions.maxPrice || price) <= price) {
                    televisions.maxPrice = price;
                    televisions.maxPriceSize = size;
                }
                televisions.minSize = Math.min(size, televisions.minSize || size);
                televisions.maxSize = Math.max(size, televisions.maxSize || size);
            }
            televisions.brands = [];
            for (var brand in brands) {
                televisions.brands.push(brand);
            }
            televisions.brands.sort();
            televisions.types = [];
            for (var type in types) {
                televisions.types.push(type);
            }
            televisions.types.sort();
            return televisions;
        }

        return getTelevisions(); // promise
    }
);