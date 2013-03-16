define(['jQuery', 'Backbone', 'handlebars', 'target/templates'], function ($, Backbone, Handlebars) {

    return Backbone.View.extend({

        el: function () {
            this.$el = $(this.elSelector);
            if (this.$el.length === 0) {
                this.$el = $('<' + this.tagName + '/>');
                if (this.id) {
                    this.$el.attr('id', this.id);
                }
                if (this.className) {
                    this.$el.addClass(this.className);
                }
                if (this.elAppendToSelector) {
                    this.$el.appendTo($(this.elAppendToSelector));
                }
                this.render();
            }
            return this.$el[0];
        },

        render: function () {
            var template = Handlebars.templates[this.name],
                model = this.model ? this.model.attributes : {},
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
