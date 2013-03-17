define(['view/Base', 'handlebars', 'underscore', 'environment'], function (BaseView, Handlebars, _, environment) {
        function makeAbsolute(href, isSecure) {
            if (/^\//.test(href)) {
                console.log(((isSecure) ? environment.secure_www : environment.www) + href);
                return ((isSecure) ? environment.secure_www : environment.www) + href;
            }
            else {
                return href;
            }
        }
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
                                className: "breadcrumbHome",
                                isSecure: false
                            },
                            attributes.home,
                            {
                                href: makeAbsolute(attributes.home.href, attributes.home.isSecure)
                            }
                        );
                        crumbs.push(crumb);
                    }
                    for (index = 0; index < attributes.crumbs.length; index++) {
                        crumb = _.extend({
                                title: attributes.crumbs[index].name,
                                className: "breadcrumb",
                                isSecure: false
                            },
                            attributes.crumbs[index],
                            {
                                href: makeAbsolute(attributes.crumbs[index].href, attributes.crumbs[index].isSecure)
                            }
                        );
                        crumbs.push(crumb);
                    }
                    content = template(crumbs);
                    this.html(content);
                    return this;

                }
            }
        );
    }
);
