define(['jQuery', 'underscore', 'view/Base', 'app/ProductApp'], function ($, _, BaseView, ProductApp) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductPanel',
                tagName: "div",
                className: "productPanel",
                initialize: function (options) {
                    _.bindAll(this, 'showProductPanel', 'closePanel', 'resize');
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.cart = options.cart;
                    this.listenTo(this.tvFinderAppModel, 'change:item_id', this.showProductPanel);
                    superclass.prototype.initialize.apply(this, arguments);
                },
                start: function () {
                    this.$('.productPanelBackground').click(this.closePanel);
                    this.resize();
                    $(window).resize(this.resize);
                },
                showProductPanel: function () {
                    this.$('.productPanelBackground').css({ display: 'block' });
                    var self = this, item_id = this.tvFinderAppModel.get('item_id');
                    ProductApp({
                            base_item_id: item_id,
                            cart: this.cart,
                            appendTo: self.$('.productPanelFloating'),
                            close: self.closePanel
                        }
                    ).then(
                        function (productApp) {
                            self.$('.productPanelFloating').css({ display: 'block' });
                            productApp.start();
                        },
                        function (error) {
                            console.log(error);
                        }
                    );
                },
                closePanel: function () {
                    this.$('.productPanelFloating').html('').css({ display: 'none' });
                    this.$('.productPanelBackground').css({ display: 'none' });
                    this.tvFinderAppModel.set({ 'item_id': 0 }, { silent: true });
                    return false;
                },
                resize: function () {
                    var $document = $(document),
                        $background = this.$('.productPanelBackground'),
                        offset = $background.parent().offset();
                    $background.css({
                            width: $document.width(),
                            height: $document.height(),
                            top: -offset.top + 'px',
                            left: -offset.left + 'px'
                        }
                    );
                }
            }
        );
    }
);
