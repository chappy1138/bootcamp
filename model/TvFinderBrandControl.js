define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;

        return superclass.extend({
                constructor: function (items) {
                    var brandsHash = {}, brandsArray;
                    items.forEach(function (item) { brandsHash[item.brand] = true; });
                    brandsArray = Object.keys(brandsHash);
                    brandsArray.sort();
                    superclass.prototype.constructor.call(this, {
                            brands: brandsArray
                        }
                    );
                }
            }
        );
    }
);