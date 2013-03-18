define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductOffers',
                id: 'tvFinderOfferContainerId',
                tagName: "section",
                className: "tvFinderOfferContainer",
                initialize: function (options) {
                    superclass.prototype.initialize.apply(this, arguments);
                    _.bindAll(this, 'filter', 'sort');
                    this.tvFinderSizeControlModel = options.tvFinderSizeControlModel;
                    this.tvFinderTypeControlModel = options.tvFinderTypeControlModel;
                    this.tvFinderBrandControlModel = options.tvFinderBrandControlModel;
                    this.tvFinderSortControlModel = options.tvFinderSortControlModel;
                    this.tvFinderSizeControlModel.bind('change', this.filter);
                    this.tvFinderTypeControlModel.bind('change', this.filter);
                    this.tvFinderBrandControlModel.bind('change', this.filter);
                    this.tvFinderSortControlModel.bind('change', this.sort);
                },
                start: function () {
                    var self = this;
                    requirejs(['lib/jquery.deferredImage', 'lib/jquery.isotope'], function () {
                            superclass.prototype.start.call(self);
                            self.$el
                                .deferredImage()
                                .isotope({
                                    itemSelector: 'article',
                                    layoutMode: 'fitRows',
                                    getSortData: {
                                        Featured: function ($elem) {
                                            return parseInt($elem.attr('data-featured'));
                                        },
                                        Price: function ($elem) {
                                            return parseFloat($elem.attr('data-price'));
                                        },
                                        Rating: function ($elem) {
                                            return parseFloat($elem.attr('data-rating'));
                                        },
                                        Name: function ($elem) {
                                            return $elem.attr('data-name');
                                        },
                                        Size: function ($elem) {
                                            return parseInt($elem.attr('data-size'));
                                        }
                                    }
                                }
                            );
                        }
                    );
                },
                filter: function () {
                    var self = this,
                        min = this.tvFinderSizeControlModel.get('min'),
                        max = this.tvFinderSizeControlModel.get('max'),
                        type = this.tvFinderTypeControlModel.get('selected'),
                        brand = this.tvFinderBrandControlModel.get('selected'),
                        sizeSelector = '[data-in-size-range=true]',
                        typeSelector = filterSelector('type', type),
                        brandSelector = filterSelector('brand', brand),
                        selector = 'article' + sizeSelector + typeSelector + brandSelector;
                    console.log(min, max, type, brand);
                    this.$el.find('article').each(function () {
                            this.setAttribute('data-in-size-range', isInSizeRange(this, min, max));
                        }
                    );
                    self.model.set({
                            id: self.$el.attr('id'),
                            count: self.$el.find(selector).length,
                            min: min,
                            max: max,
                            sizeSelector: sizeSelector,
                            typeSelector: typeSelector,
                            brandSelector: brandSelector,
                            selector: selector
                        }
                    );
                    requirejs(['lib/jquery.isotope'], function () {
                            self.$el.isotope({ filter: selector });
                        }
                    );
                },
                sort: function () {
                    var self = this,
                        brand = this.tvFinderSortControlModel.get('selected'),
                        ascending = this.tvFinderSortControlModel.get('ascending') === 'true';
                    requirejs(['lib/jquery.isotope'], function () {
                            self.$el.isotope({ sortBy: brand, sortAscending: ascending });
                        }
                    );
                }
            }
        );

        function isInSizeRange(el, min, max) {
            var value = getSize(el);
            return min <= value && value <= max;
        }

        function getSize(el) {
            return parseInt(el.getAttribute('data-size'));
        }

        function filterSelector(attr, value) {
            return value === 'Any' ? '' : '[data-' + attr + '="' + value + '"]';
        }
    }
);
