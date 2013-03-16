define(['jQuery', 'handlebars', 'target/templates'], function ($, Handlebars) {
        $('head').html(Handlebars.templates['Head']);
        $('body').html(Handlebars.templates['SingleColumnTemplate']);
    }
);