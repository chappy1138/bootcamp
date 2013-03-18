define(['jQuery', 'Backbone', 'handlebars', 'content', 'target/templates'], function ($, Backbone, Handlebars, content) {

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
                html = template(attributes);
            this.html(html);
            return this;
        },

        html: function (html) {
            if (html) {
                var escapedContent = content.escape(html);
                return this.$el.html(escapedContent);
            }
            else {
                return this.$el.html();
            }
        },

        start: function () {}
    });
});
