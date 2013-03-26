define(['Backbone', 'underscore', 'view/FilterDropdownControl'], function (Backbone, _, FilterDropdownControl) {
        var superclass = FilterDropdownControl;
        return superclass.extend({
                name: 'TvFinderBrandControl',
                tagName: 'li',
                className: 'tvFinderBrandPrompt',
                attributeName: 'brandFilter',
                initialize: function (options) {
                    this.listenTo(options.tvFinderAppModel, 'change:typeFilter', this.updateMenuItems);
                    var brands = {};
                    _.each(options.televisions, function (tv) {
                            brands[tv.brand] = true;
                        }
                    );
                    this.attributes = Object.keys(brands).sort();
                    superclass.prototype.initialize.apply(this, arguments);
                },
                filterIterator: function (tv) {
                    return this.minSizeFilter <= tv.size
                        && tv.size <= this.maxSizeFilter
                        && (this.typeFilter === '*' || this.typeFilter === tv.type)
                        && this.menuItemValue === tv.brand;
                }
            }
        );
    }
);
