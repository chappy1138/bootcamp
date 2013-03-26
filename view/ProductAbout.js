define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductAbout',
                tagName: "div",
                className: "productAbout",
                events: {
                    'click .productQuantityControl .dropdown-menu a': 'clickQuantity'
                },
                start: function () {
                    var self = this;
                    require(['lib/bootstrap'], function () {
                            self.$quantityButton().dropdown();
                        }
                    );
                },
                clickQuantity: function (event) {
                    console.log(this.$quantityButton().length);
                    var $menuItem = $(event.target), title = $menuItem.text(), $quantityButton = this.$quantityButton();
                    $quantityButton.contents().eq(0).replaceWith(title + ' ');
                    $quantityButton.dropdown('toggle');
                    return false;
                },
                $quantityButton: function () {
                    return this.$el.find('.productQuantityControl .dropdown-toggle');
                }
            }
        );
    }
);