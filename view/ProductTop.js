define(['jQuery', 'view/Base'], function ($, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductTop',
                tagName: "div",
                className: "productTop",
                initialize: function () {
                    this.model.on('change', this.render);
                    superclass.prototype.initialize.apply(this, arguments);
                }
            }
        );
    }
);