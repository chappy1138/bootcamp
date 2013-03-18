define(['jQuery', 'underscore', 'view/DropdownControl'], function ($, _, DropdownControlView) {
        var superclass = DropdownControlView;
        return superclass.extend({
                name: 'TvFinderTypeControl',
                tagName: "li",
                className: "tvFinderTypePrompt",
                initialize: function (options) {
                    _.bindAll(this, 'updateMenuItems');
                    this.productOffersModel = options.productOffersModel;
                    this.productOffersModel.bind('change', this.updateMenuItems);
                },
                updateMenuItems: function () {
                    var id = this.productOffersModel.get("id"),
                        sizeSelector = this.productOffersModel.get("sizeSelector"),
                        brandSelector = this.productOffersModel.get("brandSelector"),
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
                }
            }
        );
    }
);
