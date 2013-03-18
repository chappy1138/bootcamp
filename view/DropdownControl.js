define(['view/Base'], function (BaseView) {
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
                    var $menuItem = $(event.target), value = $menuItem.text(), $button = this.$button();
                    $button
                        .dropdown('toggle') // close
                        .contents()
                        .eq(0)
                        .replaceWith(value + ' ');
                    this.model.set('selected', value);
                    return false;
                },
                $button: function () {
                    return this.$el.find('.dropdown-toggle');
                }
            }
        );
    }
);
