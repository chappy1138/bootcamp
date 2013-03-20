define(['jQuery', 'underscore', 'Backbone', 'handlebars', 'content', 'target/templates'],
    function ($, _, Backbone, Handlebars, content) {
        var superclass = Backbone.View;
        return superclass.extend({
                isRendered: true,
                el: function () {
                    if (this.id) {
                        this.$el = $('#' + this.id);
                    }
                    if ((!this.$el || this.$el.length === 0) && this.className) {
                        this.$el = $('.' + this.className);
                    }
                    if (!this.$el || this.$el.length === 0) {
                        this.isRendered = false;
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
                    }
                    return this.$el[0];
                },
                initialize: function () {
                    _.bindAll(this, 'context');
                    if (!this.isRendered) {
                        this.render();
                    }
                },
                render: function () {
                    var template = Handlebars.templates[this.name],
                        context = this.context(),
                        html = template(context);
                    this.html(html);
                    this.isRendered = true;
                    return this;
                },
                html: function (html) {
                    var escapedContent = content.escape(html);
                    return this.$el.html(escapedContent);
                },
                context: function () {
                    if (this.collection) {
                        var context = [];
                        _.each(this.collection.models, function (model) {
                            context.push(model.attributes);
                        });
                        return context;
                    }
                    else if (this.model) {
                        return this.model.attributes
                    }
                    else {
                        return {};
                    }
                },
                start: function () {
                }
            }
        );
    }
);
