define(['Backbone', 'model/CartItem', 'lib/backbone.localstorage'], function (Backbone, CartItemModel) {
        var superclass = Backbone.Collection;
        return superclass.extend({
                localStorage: new Backbone.LocalStorage("Cart"),
                model: CartItemModel,
                addCartItem: function (item_id, quantity) {
                    var cartItem = this.find(function (cartItem) {
                            return cartItem.get('item_id') === item_id;
                        }
                    );
                    if (cartItem) {
                        cartItem.set('quantity', parseInt(cartItem.get('quantity')) + quantity);
                    }
                    else {
                        cartItem = new CartItemModel({ item_id: item_id, quantity: quantity });
                        this.add(cartItem);
                    }
                    cartItem.save();
                }
            }
        );
    }
);