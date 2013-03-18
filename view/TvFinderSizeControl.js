define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {

        return BaseView.extend({
                name: 'TvFinderSizeControl',
                tagName: "li",
                className: "tvFinderSizePrompt",
                initialize: function (options) {
                    _.bindAll(this, 'sizeFilterUpdate', 'updateLowMaxTopMin');
                    this.productOffersModel = options.productOffersModel;
                    this.productOffersModel.bind('change', this.updateLowMaxTopMin);
                },
                start: function () {
                    var self = this;
                    require(['lib/jquery.ui.sliderX'], function () {
                            var min = self.model.get('min'),
                                max = self.model.get('max');
                            self.$sizeSlider = self.$el.find('div').slider({
                                    change: self.sizeFilterUpdate,
                                    animate: "fast",
                                    range: true,
                                    min: min,
                                    max: max,
                                    minRangeSize: 1,
                                    maxRangeSize: max - min,
                                    lowMax: max,
                                    topMin: min,
                                    autoShift: true,
                                    values: [min, max]
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
                    this.model.set({ min: ui.values[0], max: ui.values[1] });
                },
                updateLowMaxTopMin: function () {
                    var id = this.productOffersModel.get("id"),
                        selector = this.productOffersModel.get("selector"),
                        $items = $('#' + id).find(selector), min, max;
                    $items.each(function () {
                            var size = getSize(this);
                            min = Math.min(min || size, size);
                            max = Math.max(max || size, size);
                        }
                    );
                    this.$sizeSlider.slider("option", "lowMax", max);
                    this.$sizeSlider.slider("option", "topMin", min);
                }
            }
        );

        function getSize(el) {
            return parseInt(el.getAttribute('data-size'));
        }

        function sizeSliderLabel(value) {
            return Math.floor(value) + '&rdquo;'
        }
    }
);
