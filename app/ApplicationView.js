define(['Backbone', 'handlebars', 'app/templates'], function (Backbone, Handlebars) {

    return Backbone.View.extend({

        render: function () {
            var model = this.model ? this.model.attributes : {},
                templateName = this.options.name + '.hbs'
                template = Handlebars.templates[templateName],
                content = template(model);
            this.$el.html(content);
        }
    });
});
