define(['jQuery', 'underscore', 'view/DropdownControl'], function ($, _, DropdownControl) {
        var superclass = DropdownControl;
        return superclass.extend({
                events: {
                    'click .dropdown-menu a': 'click'
                },
                initialize: function (options) {
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.televisions = options.televisions;
                    this.listenTo(this.tvFinderAppModel, 'change:minSizeFilter', this.updateMenuItems);
                    this.listenTo(this.tvFinderAppModel, 'change:maxSizeFilter', this.updateMenuItems);
                    this.listenTo(this.tvFinderAppModel, 'reset', this.reset);
                    superclass.prototype.initialize.apply(this, arguments);
                },
                updateMenuItems: function () {
                    var context = {
                            minSizeFilter: this.tvFinderAppModel.get('minSizeFilter'),
                            maxSizeFilter: this.tvFinderAppModel.get('maxSizeFilter'),
                            typeFilter: this.tvFinderAppModel.get('typeFilter'),
                            brandFilter: this.tvFinderAppModel.get('brandFilter')
                        },
                        self = this;
                    this.$menuItems()
                        .each(function () {
                            var $this = $(this);
                            context.menuItemValue = $this.attr('data-value');
                            if (context.menuItemValue === '*' ||
                                _.any(self.televisions, self.filterIterator, context)) {
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
