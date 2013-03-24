define(['jQuery', 'Backbone'], function ($, Backbone) {
        var superclass = Backbone.Collection;
        return superclass.extend({
                getOrFetch: function (id) {
                    var self = this, qGetOrFetch = $.Deferred(), element = this.get(id);
                    if (element) {
                        qGetOrFetch.resolve(element);
                    }
                    else {
                        var options = {};
                        options[this.model.prototype.idAttribute] = id;
                        element = new this.model(options);
                        element.fetch().then(
                            function (data, textStatus, jqXHR) {
                                qGetOrFetch.resolve(element);
                            },
                            function (jqXHR, textStatus, errorThrown) {
                                console.log(textStatus, errorThrown);
                                qGetOrFetch.reject(errorThrown);
                            }
                        );
                    }
                    return qGetOrFetch.promise();
                }
            }
        );
    }
);