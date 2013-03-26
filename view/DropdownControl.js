define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                events: {
                    'click .dropdown-menu a': 'click'
                },
                initialize: function (options) {
                    superclass.prototype.initialize.apply(this, arguments);
                    _.bindAll(this, 'updateTitle');
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.listenTo(options.tvFinderAppModel, 'change:' + this.attributeName, this.updateTitle);
                },
                start: function () {
                    var self = this;
                    require(['lib/bootstrap'], function () {
                            self.$button().dropdown();
                        }
                    );
                },
                click: function (event) {
                    var $menuItem = $(event.target);
                    if (!$menuItem.parent().hasClass('disabled')) {
                        this.$button().dropdown('toggle');
                        this.tvFinderAppModel.set(this.attributeName, $menuItem.attr('data-value'));
                    }
                    return false;
                },
                updateTitle: function () {
                    var value = this.tvFinderAppModel.get(this.attributeName);
                    var title = this.$menuItems().filter(function () {
                            return $(this).attr('data-value') === value;
                        }
                    ).eq(0).text();
                    this.$title().replaceWith(title + ' ');
                },
                $button: function () {
                    return this.$el.find('.dropdown-toggle');
                },
                $title: function () {
                    return this.$button().contents().eq(0);
                },
                $menuItems: function () {
                    return this.$el.find('.dropdown-menu a');
                }
            }
        );
    }
);
