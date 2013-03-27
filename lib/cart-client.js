define(['jQuery', 'model/Cart', 'lib/environment'], function ($, Cart, environment) {
        var qCart = $.Deferred(), cart = new Cart();
        cart.fetch().then(
            function () {
                if (environment.clearCart) {
                    cart.each(function (cartItem) {
                            cartItem.destroy({wait: true});
                        }
                    );
                }
                qCart.resolve(cart);
            }
        )
        return qCart.promise();
    }
);