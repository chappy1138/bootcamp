define(['jQuery', 'http', 'environment'], function ($, http, environment) {

        var qTelevisions = $.Deferred(), startTime = new Date(), televisions = [],
            brandMap = {
                'VIZIO': 'Vizio', 'SANYO': 'Sanyo', 'SCEPTRE': 'Sceptre', 'HANNspree': 'Hannspree'
            };

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
                            televisions = result.response.items;
                        normalizeTelevisions(televisions);
                        qTelevisions.resolve(televisions);
                        qTelevisions = null;
                    }
                );
            }
        ).on('error',function (error) {
                qTelevisions.reject(error);
                qTelevisions = null;
            }
        ).end();

        return qTelevisions.promise();

        function normalizeTelevisions(televisions) {
            var index, tv;
            for (index = 0; index < televisions.length; index++) {
                tv = televisions[index];
                televisions[index] = {
                    name: tv.title,
                    featured: index,
                    brand: brand(tv),
                    price: price(tv),
                    rating: rating(tv),
                    size: size(tv),
                    type: type(tv),
                    url: tv.url,
                    image: image(tv),
                    description: description(tv),
                    ratingWidth: ratingWidth(tv),
                    ratingDisplay: ratingDisplay(tv),
                    dollars: dollars(tv),
                    cents: cents(tv)
                };
            }
            return televisions;
        }

        // normalize the television shelf data

        function brand(tv) {
            var brandValue = tv.brand || tv.title.match(/^[^ ]*/)[0],
                brand = brandMap[brandValue] || brandValue;
            return brand;
        }

        function description(tv) {
            var description = tv.shelf_description.match(/^</) ? tv.shelf_description : tv.shelf_description.match(/<li>.*/)[0];
            return description;
        }

        function image(tv) {
            var image = tv.images[0].url;
            return image;
        }

        function price(tv) {
            var price = tv.prices ? parseFloat(tv.prices.current.amount) : 0;
            return price;
        }

        function rating(tv) {
            var rating = tv.customer_rating ? parseFloat(tv.customer_rating) : 0;
            return rating;
        }

        function size(tv) {
            var sizeInches = tv.title.match(/[0-9]*"/)
                , size = sizeInches ? parseInt(sizeInches[0].match(/^[^"]*/)[0]) : 40
            return size;
        }

        function type(tv) {
            var type = (tv.title.match(/(LED-LCD)|(LED)|(LCD)|(Plasma)|(DLP)/) || ["LCD"])[0];
            return type;
        }

        function dollars(tv) {
            var priceValue = price(tv);
            return priceValue ? '$' + Math.floor(priceValue) : priceValue;
        }

        function cents(tv) {
            var priceValue = price(tv);
            return priceValue ? priceValue.toFixed(2).slice(-3) : priceValue;
        }

        function ratingWidth(tv) {
            var ratingValue = rating(tv), ratingWidth = ratingValue ? Math.round(ratingValue * 12.0) : 0;
            return ratingWidth;
        }

        function ratingDisplay(tv) {
            var ratingValue = rating(tv),
                ratingDisplay = ratingValue
                    ? (Math.round(ratingValue) === ratingValue ? ratingValue : ratingValue.toFixed(1)) : 0;
            return ratingDisplay;
        }
    }
);