define(['jQuery', 'Backbone', 'handlebars', 'target/templates'], function ($, Backbone, Handlebars) {

    return Backbone.View.extend({

        el: function () {
            if (this.id) {
                this.$el = $('#' + this.id);
            }
            if ((!this.$el || this.$el.length === 0) && this.className) {
                this.$el = $('.' + this.className);
            }
            if (!this.$el || this.$el.length === 0) {
                var tagName = this.tagName || 'div';
                this.$el = $('<' + tagName + '/>');
                if (this.id) {
                    this.$el.attr('id', this.id);
                }
                if (this.className) {
                    this.$el.addClass(this.className);
                }
                if (this.options.appendTo) {
                    var $parent = $(this.options.appendTo);
                    this.$el.appendTo($parent);
                }
                this.render();
            }
            return this.$el[0];
        },

        render: function () {
            var template = Handlebars.templates[this.name],
                attributes = this.model ? this.model.attributes : {},
                content = template(attributes);
            this.$el.html(content);
            return this;
        }
    });
});
