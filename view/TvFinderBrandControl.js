define(['jQuery', 'underscore', 'view/DropdownControl'], function ($, _, DropdownControlView) {
        var superclass = DropdownControlView;
        return superclass.extend({
                name: 'TvFinderBrandControl',
                tagName: "li",
                className: "tvFinderBrandPrompt",
                initialize: function (options) {
                    _.bindAll(this, 'updateMenuItems');
                    this.productOffersModel = options.productOffersModel;
                    this.productOffersModel.bind('change', this.updateMenuItems);
                },
                updateMenuItems: function () {
                    var id = this.productOffersModel.get("id"),
                        sizeSelector = this.productOffersModel.get("sizeSelector"),
                        typeSelector = this.productOffersModel.get("typeSelector"),
                        $items = $('#' + id).find(sizeSelector + typeSelector);
                    superclass.prototype.$menuItems.call(this).each(function () {
                            var $this = $(this), value = $this.text().trim();
                            if (value !== 'Any') {
                                if ($items.filter('[data-brand="' + value + '"]').length === 0) {
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
