define(['view/Base'], function (BaseView) {
        return BaseView.extend({
                name: 'TvFinderSortControl',
                tagName: "li",
                className: "tvFinderSortPrompt",
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
