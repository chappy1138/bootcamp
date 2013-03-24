define(['handlebars'], function (Handlebars) {
        Handlebars.registerHelper('formattedRating', function (ratingValue) {
            var html =
                '<p class="tvFinderProductRating"><span style="width: '
                + ratingWidth(ratingValue)
                + 'px" title="'
                + ratingDisplay(ratingValue)
                + ' out of 5 Stars"></span></p>';
            return new Handlebars.SafeString(html);
        });

        function ratingWidth(ratingValue) {
            var ratingWidth = ratingValue ? Math.round(ratingValue * 12.0) : 0;
            return ratingWidth;
        }

        function ratingDisplay(ratingValue) {
            var ratingDisplay = ratingValue
                ? (Math.round(ratingValue) === ratingValue ? ratingValue : ratingValue.toFixed(1)) : 0;
            return ratingDisplay;
        }
    }
);