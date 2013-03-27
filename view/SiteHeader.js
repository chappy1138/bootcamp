define(['jQuery', 'view/Base'], function ($, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'SiteHeader',
                tagName: "nav",
                className: "siteHeaderContent",
                initialize: function (options) {
                    this.cart = options.cart;
                    this.listenTo(this.cart, 'change', this.updateCartItemCount);
                    superclass.prototype.initialize.apply(this, arguments);
                },
                start: function () {
                    this.updateCartItemCount();
                },
                updateCartItemCount: function () {
                    var count = 0, $plural, text;
                    this.cart.each(function (cartItem) {
                            count += cartItem.get('quantity');
                        }
                    );
                    $plural = this.$('.walmartCartLink span.plural');
                    if (count !== 1) {
                        text = $plural.text();
                        text = text.replace(/[0-9]*(.*)/, count + '$1');
                        $plural.text(text);
                    }
                    $plural.toggle(count !== 1);
                    this.$('.walmartCartLink span.singular').toggle(count === 1);
                }
            }
        );
    }
);