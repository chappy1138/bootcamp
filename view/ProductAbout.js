define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductAbout',
                tagName: "div",
                className: "productAbout",
                initialize: function (options) {
                    superclass.prototype.initialize.apply(this, arguments);
                },
                start: function () {
                }
            }
        );
    }
);