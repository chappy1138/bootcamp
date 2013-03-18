define(['jQuery', 'underscore', 'view/DropdownControl'], function ($, _, DropdownControlView) {
        var superclass = DropdownControlView;
        return superclass.extend({
                name: 'TvFinderTypeControl',
                tagName: "li",
                className: "tvFinderTypePrompt",
                initialize: function (options) {
                    _.bindAll(this, 'updateMenuItems', 'reset');
                    this.options.productOffersModel.bind('change', this.updateMenuItems);
                    this.options.resetFiltersEvent.bind('reset', this.reset);
                },
                updateMenuItems: function () {
                    var id = this.options.productOffersModel.get("id"),
                        sizeSelector = this.options.productOffersModel.get("sizeSelector"),
                        brandSelector = this.options.productOffersModel.get("brandSelector"),
                        $items = $('#' + id).find(sizeSelector + brandSelector);
                    superclass.prototype.$menuItems.call(this).each(function () {
                            var $this = $(this), value = $this.text().trim();
                            if (value !== 'Any') {
                                if ($items.filter('[data-type="' + value + '"]').length === 0) {
                                    $this.parent().addClass('disabled');
                                }
                                else {
                                    $this.parent().removeClass('disabled');
                                }
                            }
                        }
                    );
                },
                reset: function () {
                    var $button = superclass.prototype.$button.call(this),
                        $title = superclass.prototype.$title.call(this),
                        title = $title.text().trim();
                    if ('Any' !== title) {
                        $title.replaceWith('Any' + ' ');
                        this.model.set('selected', 'Any');
                    }
                }
            }
        );
    }
);
