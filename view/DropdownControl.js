define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        return BaseView.extend({
                events: {
                    'click .dropdown-menu a': 'click'
                },
                start: function () {
                    var self = this;
                    require(['lib/bootstrap'], function () {
                            self.$button().dropdown();
                        }
                    );
                },
                click: function (event) {
                    var $menuItem = $(event.target), value = $menuItem.text().trim(),
                        $button = this.$button(), $title = this.$title(), title = $title.text().trim();
                    $button.dropdown('toggle');
                    if (value !== title) {
                        $title.replaceWith(value + ' ');
                        this.model.set('selected', value);
                    }
                    return false;
                },
                $button: function () {
                    return this.$el.find('.dropdown-toggle');
                },
                $title: function () {
                    return this.$button().contents().eq(0);
                }
            }
        );
    }
);
