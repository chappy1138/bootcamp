define(['view/Base', 'handlebars', 'underscore'], function (BaseView, Handlebars, _) {
        return BaseView.extend({
                name: 'TvFinderPov',
                tagName: "header",
                className: "tvFinderPov",
                render: function () {
                    var template = Handlebars.templates[this.name],
                        attributes = this.model ? this.model.attributes : {},
                        content = template(attributes);
                    this.html(content);
                    return this;
                }
            }
        );
    }
);
