define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {

        return BaseView.extend({
                name: 'TvFinderSizeControl',
                tagName: "li",
                className: "tvFinderSizePrompt",
                start: function () {
                    var self = this;
                    _.bindAll(this, 'sizeFilterUpdate');
                    require(['lib/jquery.ui.sliderX'], function () {
                            var min = self.model.get('min'),
                                max = self.model.get('max'),
                                $sizeSlider = self.$el.find('div').slider({
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

                            $sizeSlider.find('.ui-slider-handle').each(function (index) {
                                    $(this).append('<span class="tvFinderSizeSliderLabel">'
                                        + sizeSliderLabel($sizeSlider.slider("values")[index])
                                        + '</span>'
                                    );
                                }
                            );

                            $sizeSlider.slider("option", "slide", function (evt, ui) {
                                    $(ui.handle).find('.tvFinderSizeSliderLabel').html(sizeSliderLabel(ui.value));
                                }
                            );
                        }
                    );
                },
                sizeFilterUpdate: function (e, ui) {
                    this.model.set('min', ui.values[0]);
                    this.model.set('max', ui.values[1]);
                }
            }
        );

        function sizeSliderLabel(value) {
            return Math.floor(value) + '&rdquo;'
        }
    }
);
