define(['jQuery', 'underscore', 'http', 'fs', 'lib/environment'], function ($, _, http, fs, environment) {

        var qTelevisions = $.Deferred(), startTime = new Date(), televisions = [],
            brandMap = {
                'VIZIO': 'Vizio', 'SANYO': 'Sanyo', 'SCEPTRE': 'Sceptre', 'HANNspree': 'Hannspree'
            };

        if (environment.useJsonTelevisions) {
            fs.readFile(environment.televisionsJsonPathname, 'ascii', function (error, json) {
                    if (error) {
                        qTelevisions.reject(error);
                        qTelevisions = null;
                    }
                    else {
                        var elapsed = (new Date()) - startTime,
                            televisions = JSON.parse(json),
                            index, tv;
                        for (index = 0; index < televisions.length; index++) {
                            tv = televisions[index];
                            _.extend(televisions[index], {
                                    item_id: tv.url.match(/([^\/]*\/)*([^\/][0-9]*)/, '$2')[2],
                                    featured: index,
                                    ratingWidth: ratingWidth(tv.rating),
                                    ratingDisplay: ratingDisplay(tv.rating),
                                    dollars: dollars(tv.price),
                                    cents: cents(tv.price)
                                }
                            );
                        }
                        qTelevisions.resolve(televisions);
                        qTelevisions = null;
                    }
                }
            );
        }
        else {
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
        }

        return qTelevisions.promise();

        function normalizeTelevisions(televisions) {
            var index, tv;
            for (index = 0; index < televisions.length; index++) {
                tv = televisions[index];
                televisions[index] = {
                    item_id: item_id(tv),
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
                };
            }
            return televisions;
        }

        // normalize the television shelf data

        function item_id(tv) {
            var item_id = tv.id;
            return item_id;
        }

        function brand(tv) {
            var brandValue = tv.brand || tv.title.match(/^[^ ]*/)[0],
                brand = brandMap[brandValue] || brandValue;
            return brand;
        }

        function description(tv) {
            var description = tv.shelf_description.match(/^</) ? tv.shelf_description : tv.shelf_description.match(/<li>.*/i)[0];
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
            var sizeInches = tv.title.match(/[0-9.]*"/)
                , size = sizeInches ? parseInt(sizeInches[0].match(/^[^"]*/)[0]) : 40
            return size;
        }

        function type(tv) {
            var type = (tv.title.match(/(LED-LCD)|(LED)|(LCD)|(Plasma)|(DLP)/) || ["LCD"])[0];
            return type;
        }
    }
);