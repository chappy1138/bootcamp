define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductOffers',
                id: 'tvFinderOfferContainerId',
                tagName: "section",
                className: "tvFinderOfferContainer",
                initialize: function (options) {
                    _.bindAll(this, 'filter', 'sort', 'click');
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.tvFinderAppModel.bind('change:minSizeFilter', this.filter);
                    this.tvFinderAppModel.bind('change:maxSizeFilter', this.filter);
                    this.tvFinderAppModel.bind('change:typeFilter', this.filter);
                    this.tvFinderAppModel.bind('change:brandFilter', this.filter);
                    this.tvFinderAppModel.bind('change:sortBy', this.sort);
                    this.collection = this.tvFinderAppModel.get('tvOfferCollection');
                    superclass.prototype.initialize.apply(this, arguments);
                },
                start: function () {
                    var self = this;
                    this.$el.click(this.click);
                    requirejs(['lib/jquery.deferredImage', 'lib/jquery.isotope'], function () {
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
                click: function (event) {
                    var $product = $(event.target), item_id;
                    while ($product[0] != this.$el[0]) {
                        item_id = $product.attr('data-item_id');
                        if (item_id) {
                            this.tvFinderAppModel.set('item_id', item_id);
                            break;
                        }
                        $product = $product.parent();
                    }
                    return false;
                },
                filter: function () {
                    var self = this,
                        minSizeFilter = this.tvFinderAppModel.get('minSizeFilter'),
                        maxSizeFilter = this.tvFinderAppModel.get('maxSizeFilter'),
                        typeFilter = this.tvFinderAppModel.get('typeFilter'),
                        brandFilter = this.tvFinderAppModel.get('brandFilter'),
                        sizeSelector = '[data-in-size-range=true]',
                        typeSelector = filterSelector('type', typeFilter),
                        brandSelector = filterSelector('brand', brandFilter),
                        selector = 'article' + sizeSelector + typeSelector + brandSelector;
                    this.$el.find('article').each(function () {
                            this.setAttribute('data-in-size-range', isInSizeRange(this, minSizeFilter, maxSizeFilter));
                        }
                    );
                    requirejs(['lib/jquery.isotope'], function () {
                            self.$el.isotope({ filter: selector });
                        }
                    );
                },
                sort: function () {
                    var self = this;
                    requirejs(['lib/jquery.isotope'], function () {
                            var sortData = self.tvFinderAppModel.get('sortBy'),
                                sortValues = sortData.split('-'),
                                sortBy = sortValues[0], sortAscending = sortValues[1] === 'asc'
                            self.$el.isotope({ sortBy: sortBy, sortAscending: sortAscending });
                        }
                    );
                }
            }
        );

        function isInSizeRange(el, minSizeFilter, maxSizeFilter) {
            var size = getSize(el);
            return (minSizeFilter === '*' || minSizeFilter <= size)
                && (maxSizeFilter === '*' || size <= maxSizeFilter);
        }

        function getSize(el) {
            return parseInt(el.getAttribute('data-size'));
        }

        function filterSelector(attr, value) {
            return value === '*' ? '' : '[data-' + attr + '="' + value + '"]';
        }
    }
);
