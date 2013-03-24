define(['handlebars'], function (Handlebars) {
        Handlebars.registerHelper('formattedPrice', function (priceValue) {
            var html
                = '<span class="tvFinderUsDollars">'
                + dollars(priceValue)
                + '</span><span class="tvFinderUsCents">'
                + cents(priceValue)
                + '</span>';
            return new Handlebars.SafeString(html);
        });

        function dollars(priceValue) {
            var dollars = priceValue ? '$' + Math.floor(priceValue) : priceValue;
            return dollars;
        }

        function cents(priceValue) {
            var cents = priceValue ? priceValue.toFixed(2).slice(-3) : priceValue;
            return cents;
        }
    }
);