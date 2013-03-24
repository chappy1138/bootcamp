define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductTop',
                tagName: "div",
                className: "productTop",
                initialize: function (options) {
                    this.close = options.close;
                    superclass.prototype.initialize.apply(this, arguments);
                },
                start: function () {
                    this.$('.productCloseBox').click(this.close);
                }
            }
        );
    }
);