define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;

        return superclass.extend({
                constructor: function (items) {
                    var typesHash = {}, typesArray;
                    items.forEach(function (item) { typesHash[item.type] = true; });
                    typesArray = Object.keys(typesHash);
                    typesArray.sort();
                    superclass.prototype.constructor.call(this, {
                            types: typesArray
                        }
                    );
                }
            }
        );
    }
);