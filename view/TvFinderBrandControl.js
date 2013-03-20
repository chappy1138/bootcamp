define(['Backbone', 'view/FilterDropdownControl'], function (Backbone, FilterDropdownControl) {
        var superclass = FilterDropdownControl;
        return superclass.extend({
                name: 'TvFinderBrandControl',
                tagName: 'li',
                className: 'tvFinderBrandPrompt',
                attributeName: 'brandFilter',
                initialize: function (options) {
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.tvFinderAppModel.on('change:typeFilter', this.updateMenuItems, this);
                    var brands = {};
                    this.tvFinderAppModel.get('tvOfferCollection').models.forEach(function (tvOffer) {
                            brands[tvOffer.get('brand')] = true;
                        }
                    );
                    this.model = new Backbone.Model({ items: Object.keys(brands).sort() });
                    superclass.prototype.initialize.apply(this, arguments);
                },
                filterIterator: function (tvOffer) {
                    var size = tvOffer.get('size'),
                        type = tvOffer.get('type'),
                        brand = tvOffer.get('brand');
                    return this.minSizeFilter <= size
                        && size <= this.maxSizeFilter
                        && (this.typeFilter === '*' || this.typeFilter === type)
                        && this.menuItemValue === brand;
                }
            }
        );
    }
);
