define(['Backbone', 'underscore', 'view/FilterDropdownControl'], function (Backbone, _, FilterDropdownControl) {
        var superclass = FilterDropdownControl;
        return superclass.extend({
                name: 'TvFinderTypeControl',
                tagName: 'li',
                className: 'tvFinderTypePrompt',
                attributeName: 'typeFilter',
                initialize: function (options) {
                    this.listenTo(options.tvFinderAppModel, 'change:brandFilter', this.updateMenuItems);
                    var types = {};
                    _.each(options.televisions, function (tv) {
                            types[tv.type] = true;
                        }
                    );
                    this.attributes = Object.keys(types).sort();
                    superclass.prototype.initialize.apply(this, arguments);
                },
                filterIterator: function (tv) {
                    return this.minSizeFilter <= tv.size
                        && tv.size <= this.maxSizeFilter
                        && this.menuItemValue === tv.type
                        && (this.brandFilter === '*' || this.brandFilter === tv.brand);
                }
            }
        );
    }
);
