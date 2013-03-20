define(['jQuery', 'underscore', 'Backbone'], function ($, _, Backbone, TvOfferCollection) {
        var superclass = Backbone.Model;
        return superclass.extend({
                defaults: {
                    minSizeFilter: '*',
                    maxSizeFilter: '*',
                    typeFilter: '*',
                    brandFilter: '*',
                    sortBy: '*-*'
                },
                resetFilters: function (options) {
                    this.set({
                            minSizeFilter: '*',
                            maxSizeFilter: '*',
                            typeFilter: '*',
                            brandFilter: '*'
                        },
                        options
                    );
                }
            }
        );
    }
);