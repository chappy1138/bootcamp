define(['view/Base'], function (BaseView) {
        return BaseView.extend({
                name: 'TvFinderBrandControl',
                tagName: "li",
                className: "tvFinderBrandPrompt",
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
