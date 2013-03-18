define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;

        return superclass.extend({
                constructor: function () {
                    superclass.prototype.constructor.call(this, {
                            selected: 'Featured',
                            ascending: true
                        }
                    );
                }
            }
        );
    }
);