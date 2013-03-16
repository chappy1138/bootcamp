define(['jQuery', 'view/Basic'], function ($, Basic) {
        return Basic.extend({
                name: 'SiteHeader',
                elSelector: ".tvFinderTopNav",
                elAppendToSelector: ".appHeader",
                tagName: "nav",
                className: "tvFinderTopNav"
            }
        );
    }
);