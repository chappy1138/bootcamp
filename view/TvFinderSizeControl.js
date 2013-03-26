define(['jQuery', 'underscore', 'Backbone', 'view/Base'], function ($, _, Backbone, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'TvFinderSizeControl',
                tagName: "li",
                className: "tvFinderSizePrompt",
                initialize: function (options) {
                    _.bindAll(this, 'sizeFilterUpdate');
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.televisions = options.televisions;
                    this.listenTo(options.tvFinderAppModel, 'change:minSizeFilter', this.updateLowMaxTopMin);
                    this.listenTo(options.tvFinderAppModel, 'change:maxSizeFilter', this.updateLowMaxTopMin);
                    this.listenTo(options.tvFinderAppModel, 'change:typeFilter', this.updateLowMaxTopMin);
                    this.listenTo(options.tvFinderAppModel, 'change:brandFilter', this.updateLowMaxTopMin);
                    this.listenTo(options.tvFinderAppModel, 'reset', this.reset);
                    var minSize, maxSize;
                    _.each(options.televisions, function (tv) {
                            var size = tv.size;
                            minSize = Math.min(minSize || size, size);
                            maxSize = Math.max(maxSize || size, size);
                        }
                    );
                    this.tvFinderAppModel.set(
                        { minSizeFilter: minSize, maxSizeFilter: maxSize },
                        { silent: true }
                    );
                    var self = this;
                    superclass.prototype.initialize.apply(this, arguments);
                },
                start: function () {
                    var self = this;
                    require(['lib/jquery.ui.sliderX'], function () {
                            var minSize = self.tvFinderAppModel.get('minSizeFilter'),
                                maxSize = self.tvFinderAppModel.get('maxSizeFilter');
                            self.$sizeSlider = self.$el.find('div').slider({
                                    change: self.sizeFilterUpdate,
                                    animate: "fast",
                                    range: true,
                                    min: minSize,
                                    max: maxSize,
                                    minRangeSize: 1,
                                    maxRangeSize: maxSize - minSize,
                                    lowMax: maxSize,
                                    topMin: minSize,
                                    autoShift: true,
                                    values: [ minSize, maxSize ]
                                }
                            );
                            self.$sizeSlider.find('.ui-slider-handle').each(function (index) {
                                    $(this).append('<span class="tvFinderSizeSliderLabel">'
                                        + sizeSliderLabel(self.$sizeSlider.slider("values")[index])
                                        + '</span>'
                                    );
                                }
                            );
                            self.$sizeSlider.slider("option", "slide", function (evt, ui) {
                                    $(ui.handle).find('.tvFinderSizeSliderLabel').html(sizeSliderLabel(ui.value));
                                }
                            );
                        }
                    );
                },
                sizeFilterUpdate: function (e, ui) {
                    this.tvFinderAppModel.set({ minSizeFilter: ui.values[0], maxSizeFilter: ui.values[1] });
                },
                updateLowMaxTopMin: function () {
                    var minSizeFilter = this.tvFinderAppModel.get('minSizeFilter'),
                        maxSizeFilter = this.tvFinderAppModel.get('maxSizeFilter'),
                        typeFilter = this.tvFinderAppModel.get('typeFilter'),
                        brandFilter = this.tvFinderAppModel.get('brandFilter'),
                        lowMax, topMin;
                    _.each(this.televisions, function (tv) {
                            var size = tv.size, type = tv.type, brand = tv.brand;
                            if ((typeFilter === '*' || typeFilter === type)
                                && (brandFilter === '*' || brandFilter === brand)) {
                                if (minSizeFilter === '*' || minSizeFilter <= size) {
                                    topMin = Math.min(topMin || size, size);
                                }
                                if (maxSizeFilter === '*' || size <= maxSizeFilter) {
                                    lowMax = Math.max(lowMax || size, size);
                                }
                            }
                        }
                    );
                    this.$sizeSlider.slider('option', 'lowMax', lowMax);
                    this.$sizeSlider.slider('option', 'topMin', topMin);
                },
                reset: function () {
                    var values = [
                        this.$sizeSlider.slider('option', 'min'),
                        this.$sizeSlider.slider('option', 'max')
                    ];
                    this.$sizeSlider
                        .slider("values", values)
                        .find('.tvFinderSizeSliderLabel')
                        .each(function (index) {
                            $(this).html(sizeSliderLabel(values[index]));
                        }
                    );
                    this.tvFinderAppModel.set(
                        { minSizeFilter: values[0], maxSizeFilter: values[1] }
                    );
                }
            }
        );

        function sizeSliderLabel(value) {
            return Math.floor(value) + '&rdquo;'
        }
    }
);
