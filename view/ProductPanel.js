define(['view/Base', 'app/ProductApp'], function (BaseView, ProductApp) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductPanel',
                tagName: "div",
                className: "productPanel",
                initialize: function (options) {
                    _.bindAll(this, 'showProductPanel');
                    this.tvFinderAppModel = options.tvFinderAppModel;
                    this.tvFinderAppModel.on('change:item_id', this.showProductPanel);
                    superclass.prototype.initialize.apply(this, arguments);
                },
                showProductPanel: function() {
                    var self = this, item_id = this.tvFinderAppModel.get('item_id');
                    ProductApp({
                            base_item_id: item_id,
                            appendTo: self.el
                        }
                    ).then(
                        function (productApp) {
                            productApp.start();
                        },
                        function (error) {
                            console.log(error);
                        }
                    );
                }
            }
        );
    }
);
