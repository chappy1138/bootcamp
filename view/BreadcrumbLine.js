define(['view/Base', 'handlebars', 'underscore'], function (BaseView, Handlebars, _) {
        return BaseView.extend({
                name: 'BreadcrumbLine',
                tagName: "ul",
                className: "breadcrumbLine",
                render: function () {
                    var template = Handlebars.templates[this.name],
                        attributes = this.model ? this.model.attributes : {},
                        crumbs = [],
                        crumb,
                        index,
                        content;
                    // normalize the breadcrumbs
                    if (attributes.home) {
                        crumb = _.extend({
                                title: attributes.home.name,
                                className: "breadcrumbHome"
                            },
                            attributes.home
                        );
                        crumbs.push(crumb);
                    }
                    for (index = 0; index < attributes.crumbs.length; index++) {
                        crumb = _.extend({
                                title: attributes.crumbs[index].name,
                                className: "breadcrumb"
                            },
                            attributes.crumbs[index]
                        );
                        crumbs.push(crumb);
                    }
                    content = template(crumbs);
                    this.$el.html(content);
                    return this;

                }
            }
        );
    }
);
