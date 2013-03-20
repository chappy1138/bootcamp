define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'TvFinderOfferHeader',
                tagName: "header",
                className: "tvFinderOfferHeader",
                initialize: function (options) {
                    _.bindAll(this, 'click', 'updateCount');
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.tvFinderAppModel.bind('change', this.updateCount);
                    superclass.prototype.initialize.apply(this, arguments);
                },
                render: function () {
                    superclass.prototype.render.call(this);
                    this.updateCount();
                },
                start: function () {
                    superclass.prototype.start.call(this);
                    $('#tvFinderClearFiltersId').click(this.click);
                },
                click: function () {
                    this.tvFinderAppModel.trigger('reset', true);
                },
                updateCount: function () {
                    var tvOffers = this.tvFinderAppModel.get('tvOfferCollection').models,
                        minSizeFilter = this.tvFinderAppModel.get('minSizeFilter'),
                        maxSizeFilter = this.tvFinderAppModel.get('maxSizeFilter'),
                        typeFilter = this.tvFinderAppModel.get('typeFilter'),
                        brandFilter = this.tvFinderAppModel.get('brandFilter'),
                        count = _.filter(tvOffers,function (tvOffer) {
                                var size = tvOffer.get('size'), type = tvOffer.get('type'), brand = tvOffer.get('brand');
                                return (minSizeFilter === '*' || minSizeFilter <= size)
                                    && (maxSizeFilter === '*' || size <= maxSizeFilter)
                                    && (typeFilter === '*' || typeFilter === type)
                                    && (brandFilter === '*' || brandFilter === brand);
                            }
                        ).length, text = count === 1 ? "1 match" : count + " matches";
                    $('#tvFinderMatchOfferCountId').text(text);
                }
            }
        );
    }
);
