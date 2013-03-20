define(['Backbone', 'view/FilterDropdownControl'], function (Backbone, FilterDropdownControl) {
        var superclass = FilterDropdownControl;
        return superclass.extend({
                name: 'TvFinderTypeControl',
                tagName: 'li',
                className: 'tvFinderTypePrompt',
                attributeName: 'typeFilter',
                initialize: function (options) {
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.tvFinderAppModel.on('change:brandFilter', this.updateMenuItems, this);
                    var types = {};
                    this.tvFinderAppModel.get('tvOfferCollection').models.forEach(function (tvOffer) {
                            types[tvOffer.get('type')] = true;
                        }
                    );
                    this.model = new Backbone.Model({ items: Object.keys(types).sort() });
                    superclass.prototype.initialize.apply(this, arguments);
                },
                filterIterator: function (tvOffer) {
                    var size = tvOffer.get('size'),
                        type = tvOffer.get('type'),
                        brand = tvOffer.get('brand');
                    return this.minSizeFilter <= size
                        && size <= this.maxSizeFilter
                        && this.menuItemValue === type
                        && (this.brandFilter === '*' || this.brandFilter === brand);
                }
            }
        );
    }
);
