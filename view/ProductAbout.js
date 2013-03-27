define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductAbout',
                tagName: "div",
                className: "productAbout",
                events: {
                    'click .productQuantityControl .dropdown-menu a': 'selectQuantity',
                    'click .productAddToCart': 'addToCart'
                },
                initialize: function (options) {
                    this.cart = options.cart;
                    superclass.prototype.initialize.apply(this, arguments);
                },
                start: function () {
                    var self = this;
                    require(['lib/bootstrap'], function () {
                            self.$quantityButton().dropdown();
                        }
                    );
                },
                selectQuantity: function (event) {
                    var $menuItem = $(event.target), $quantityButton = this.$quantityButton();
                    this.quantity = parseInt($menuItem.text());
                    $quantityButton.contents().eq(0).replaceWith(this.quantity + ' ');
                    $quantityButton.dropdown('toggle');
                    this.$addToCartButton().removeClass('disabled');
                    return false;
                },
                addToCart: function (event) {
                    this.cart.addCartItem(this.model.get('baseItem').id, this.quantity);
                },
                $quantityButton: function () {
                    return this.$('.productQuantityControl .dropdown-toggle');
                },
                $addToCartButton: function () {
                    return this.$('.productAddToCart');
                }
            }
        );
    }
);