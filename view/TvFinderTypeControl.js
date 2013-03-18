define(['view/Base'], function (BaseView) {
        return BaseView.extend({
                name: 'TvFinderTypeControl',
                tagName: "li",
                className: "tvFinderTypePrompt",
                start: function () {
                    var self = this;
                    require(['lib/bootstrap'], function () {
                            self.$el.find('.dropdown-toggle').dropdown();
                        }
                    );
                }
            }
        );
    }
);
