define(['jQuery', 'handlebars', 'escapeEntities', 'target/templates'], function ($, Handlebars, escapeEntities) {
        var content, escapedContent;
        content = Handlebars.templates['Head']();
        escapedContent = escapeEntities(content);
        $('head').html(escapedContent);
        content = Handlebars.templates['SingleColumnTemplate']();
        escapedContent = escapeEntities(content);
        $('body').html(escapedContent);
    }
);