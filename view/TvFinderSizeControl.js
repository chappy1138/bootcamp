define(['jQuery', 'view/Base'], function ($, BaseView) {

        function sizeFilterUpdate(e, ui) {
            this.model.set('min', ui.values[0]);
            this.model.set('max', ui.values[1]);
        }

        return BaseView.extend({
                name: 'TvFinderSizeControl',
                tagName: "li",
                className: "tvFinderSizePrompt",
                start: function () {
                    var self = this;
                    require(['lib/jquery.ui.sliderX'], function () {
                            var min = self.model.get('min'),
                                max = self.model.get('max');
                            self.$el.find('div').slider({
                                    change: $.proxy(self, sizeFilterUpdate),
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
                        }
                    );
                }
            }
        );
    }
);
