define(['jQuery', 'view/Base'], function ($, BaseView) {
        return BaseView.extend({
                name: 'SiteHeader',
                tagName: "nav",
                className: "siteHeaderContent"
            }
        );
    }
);