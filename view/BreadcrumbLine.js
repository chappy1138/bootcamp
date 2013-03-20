define(['underscore', 'Backbone', 'view/Base', 'environment'],
    function (_, Backbone, BaseView, environment) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'BreadcrumbLine',
                tagName: "ul",
                className: "breadcrumbLine",
                initialize: function (options) {
                    var crumbs = [];
                    _.each(options.crumbs, function (crumb) {
                            crumb = _.extend({
                                    title: crumb.name,
                                    className: "breadcrumb",
                                    isSecure: false
                                },
                                crumb,
                                {
                                    href: makeAbsolute(crumb.href, crumb.isSecure)
                                }
                            );
                            crumbs.push(crumb);
                        }
                    );
                    this.collection = new Backbone.Collection(crumbs);
                    superclass.prototype.initialize.apply(this, arguments);
                }
            }
        );

        function makeAbsolute(href, isSecure) {
            if (/^\//.test(href)) {
                return (isSecure ? environment.secure_www : environment.www) + href;
            }
            else {
                return href;
            }
        }
    }
);
