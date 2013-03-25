define(['jQuery', 'underscore', 'handlebars', 'lib/cutstring'], function ($, _, Handlebars, CutString) {
        Handlebars.registerHelper('formattedText', function (maxCount, options) {
                var html = options.fn(this),
                    cutHtml = new CutString(html, maxCount, '&hellip; ' + options.inverse(this)).cut();
                return new Handlebars.SafeString(cutHtml);
            }
        );
    }
);