define(['view/Base', 'handlebars', 'underscore'], function (BaseView, Handlebars, _) {
        return BaseView.extend({
                name: 'TvFinderPov',
                tagName: "header",
                render: function () {
                    var template = Handlebars.templates[this.name],
                        attributes = this.model ? this.model.attributes : {},
                        content = template(attributes);
                    this.$el.html(content);
                    return this;
                }
            }
        );
    }
);
