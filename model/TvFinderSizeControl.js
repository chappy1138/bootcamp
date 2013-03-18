define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;

        return superclass.extend({
                constructor: function (items) {
                    var min, max;
                    items.forEach(function (item) {
                            min = Math.min(min || item.size, item.size);
                            max = Math.max(max || item.size, item.size);
                        }
                    );
                    superclass.prototype.constructor.call(this, {
                            min: min,
                            max: max
                        }
                    );
                }
            }
        );
    }
);