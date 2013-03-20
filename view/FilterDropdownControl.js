define(['jQuery', 'underscore', 'view/DropdownControl'], function ($, _, DropdownControl) {
        var superclass = DropdownControl;
        return superclass.extend({
                events: {
                    'click .dropdown-menu a': 'click'
                },
                initialize: function (options) {
                    superclass.prototype.initialize.apply(this, arguments);
                    this.tvFinderAppModel.on('change:minSizeFilter', this.updateMenuItems, this);
                    this.tvFinderAppModel.on('change:maxSizeFilter', this.updateMenuItems, this);
                    this.tvFinderAppModel.on('reset', this.reset, this);
                },
                updateMenuItems: function () {
                    var context = {
                            minSizeFilter: this.tvFinderAppModel.get('minSizeFilter'),
                            maxSizeFilter: this.tvFinderAppModel.get('maxSizeFilter'),
                            typeFilter: this.tvFinderAppModel.get('typeFilter'),
                            brandFilter: this.tvFinderAppModel.get('brandFilter')
                        },
                        tvOffers = this.tvFinderAppModel.get('tvOfferCollection').models,
                        self = this;
                    superclass.prototype.$menuItems.call(this).each(function () {
                            var $this = $(this);
                            context.menuItemValue = $this.attr('data-value');
                            if (context.menuItemValue === '*' || _.any(tvOffers, self.filterIterator, context)) {
                                $this.parent().removeClass('disabled');
                            }
                            else {
                                $this.parent().addClass('disabled');
                            }
                        }
                    );
                },
                reset: function () {
                    this.tvFinderAppModel.set(this.attributeName, '*');
                }
            }
        );
    }
);
