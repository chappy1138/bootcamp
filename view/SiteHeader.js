define(['jQuery', 'view/Base'], function ($, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'SiteHeader',
                tagName: "nav",
                className: "siteHeaderContent"
            }
        );
    }
);