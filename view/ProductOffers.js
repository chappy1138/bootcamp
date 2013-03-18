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
                        selector = 'article[data-in-size-range=true]'
                            + filterSelector('type', type)
                            + filterSelector('brand', brand);
                    this.$el.find('article').each(function () {
                            this.setAttribute('data-in-size-range', isInSizeRange(this, min, max));
                        }
                    );
                    requirejs(['lib/jquery.isotope'], function () {
                            console.log(selector);
                            self.$el.isotope({ filter: selector }, function ($items) {
                                    var min, max;
                                    $items.each(function () {
                                            var size = getSize(this);
                                            min = Math.min(min || size, size);
                                            max = Math.max(max || size, size);
                                        }
                                    );
                                    self.model.set({
                                            lowMax: max,
                                            topMin: min,
                                            type: type,
                                            brand: brand
                                        }
                                    );
                                }
                            );
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
