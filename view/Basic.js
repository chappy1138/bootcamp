define(['Backbone', 'handlebars', 'target/templates'], function (Backbone, Handlebars) {

    return Backbone.View.extend({

        render: function () {
            var model = this.model ? this.model.attributes : {},
                templateName = this.name,
                template = Handlebars.templates[templateName],
                content = template(model);
            this.$el.html(content);
            return this;
        },

        appendTo: function (selector) {
            this.$el.appendTo(selector);
            return this;
        }
    });
});
