define(['jQuery', 'handlebars', 'content', 'target/templates'], function ($, Handlebars, content) {
        var html, escapedContent;
        html = Handlebars.templates['Head']();
        escapedContent = content.escape(html);
        $('head').html(escapedContent);
        html = Handlebars.templates['SingleColumnTemplate']();
        escapedContent = content.escape(html);
        $('body').html(escapedContent);
    }
);