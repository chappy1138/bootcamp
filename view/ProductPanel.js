define(['view/Base', 'app/ProductApp'], function (BaseView, ProductAppPromise) {
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
                    var item_id = this.tvFinderAppModel.get('item_id');
                    ProductAppPromise.then(
                        function (ProductApp) {
                            ProductApp(item_id).start();
                        }
                    );
                }
            }
        );
    }
);
