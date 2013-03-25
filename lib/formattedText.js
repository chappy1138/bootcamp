define(['jQuery', 'handlebars'], function ($, Handlebars) {
        Handlebars.registerHelper('formattedText', function (count, options) {
                var html = options.fn(this),
                    $html = $(html),
                    text = $html.text();
                if (text.length > count) {
                    html = text.substr(0, count) + '&hellip; ' + options.inverse(this);
                }
                return new Handlebars.SafeString(html);
            }
        );
    }
);