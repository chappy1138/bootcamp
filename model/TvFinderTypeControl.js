define(['Backbone'], function (Backbone) {
        var superclass = Backbone.Model;

        return superclass.extend({
                constructor: function (televisions) {
                    var typesHash = {}, typesArray;
                    televisions.forEach(function (television) { typesHash[television.type] = true; });
                    typesArray = Object.keys(typesHash);
                    typesArray.sort();
                    superclass.prototype.constructor.call(this, {
                            selected: 'Any',
                            types: typesArray
                        }
                    );
                }
            }
        );
    }
);