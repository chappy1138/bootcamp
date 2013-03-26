define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'TvFinderOfferHeader',
                tagName: "header",
                className: "tvFinderOfferHeader",
                events: {
                    'click #tvFinderClearFiltersId': 'click'
                },
                initialize: function (options) {
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.televisions = options.televisions;
                    this.listenTo(this.tvFinderAppModel, 'change', this.updateCount);
                    superclass.prototype.initialize.apply(this, arguments);
                },
                render: function () {
                    superclass.prototype.render.call(this);
                    this.updateCount();
                },
                click: function () {
                    this.tvFinderAppModel.trigger('reset', true);
                },
                updateCount: function () {
                    var televisions = this.televisions,
                        minSizeFilter = this.tvFinderAppModel.get('minSizeFilter'),
                        maxSizeFilter = this.tvFinderAppModel.get('maxSizeFilter'),
                        typeFilter = this.tvFinderAppModel.get('typeFilter'),
                        brandFilter = this.tvFinderAppModel.get('brandFilter'),
                        count = _.filter(televisions, function (tv) {
                                var size = tv.size, type = tv.type, brand = tv.brand;
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
