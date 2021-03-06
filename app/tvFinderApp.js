define([
    'jQuery',
    'Backbone',
    'televisions',
    'cart',
    'view/SiteHeader',
    'view/BreadcrumbLine',
    'view/TvFinderPov',
    'view/TvFinderControls',
    'view/TvFinderSizeControl',
    'view/TvFinderTypeControl',
    'view/TvFinderBrandControl',
    'view/TvFinderSortControl',
    'view/TvFinderOfferHeader',
    'view/ProductOffers',
    'view/ProductPanel'],
    function ($, Backbone, qTelevisions, qCart, SiteHeaderView, BreadcrumbLineView, TvFinderPovView, TvFinderControlsView, TvFinderSizeControlView, TvFinderTypeControlView, TvFinderBrandControlView, TvFinderSortControlView, TvFinderOfferHeaderView, ProductOffersView, ProductPanelView) {
        return function () {
            var qTvFinderApp = $.Deferred();
            $.when(qTelevisions, qCart).then(
                function (televisions, cart) {
                    tvFinderAppModel = new Backbone.Model({
                            minSizeFilter: '*',
                            maxSizeFilter: '*',
                            typeFilter: '*',
                            brandFilter: '*',
                            sortBy: '*'
                        }
                    );
                    var siteHeaderView = new SiteHeaderView({
                                appendTo: ".appHeader",
                                cart: cart
                            }
                        ),
                        breadcrumbLineView = new BreadcrumbLineView({
                                appendTo: siteHeaderView.el,
                                crumbs: [
                                    { name: 'walmart.com', href: '/', className: 'breadcrumbHome' },
                                    { name: 'Departments', href: '/cp/All-Departments/121828' },
                                    { name: 'Electronics', href: '/cp/Electronics/3944' },
                                    { name: 'TV\'s', href: '/cp/televisions-video/1060825' }
                                ]
                            }
                        ),
                        tvFinderPovView = new TvFinderPovView({
                                appendTo: ".appBody",
                                tvFinderAppModel: tvFinderAppModel,
                                televisions: televisions
                            }
                        ),
                        tvFinderControlsView = new TvFinderControlsView({
                                appendTo: tvFinderPovView.el
                            }
                        ),
                        tvFinderSizeControlView = new TvFinderSizeControlView({
                                appendTo: tvFinderControlsView.el,
                                tvFinderAppModel: tvFinderAppModel,
                                televisions: televisions
                            }
                        ),
                        tvFinderTypeControlView = new TvFinderTypeControlView({
                                appendTo: tvFinderControlsView.el,
                                tvFinderAppModel: tvFinderAppModel,
                                televisions: televisions
                            }
                        ),
                        tvFinderBrandControlView = new TvFinderBrandControlView({
                                appendTo: tvFinderControlsView.el,
                                tvFinderAppModel: tvFinderAppModel,
                                televisions: televisions
                            }
                        ),
                        tvFinderSortControlView = new TvFinderSortControlView({
                                appendTo: tvFinderControlsView.el,
                                tvFinderAppModel: tvFinderAppModel
                            }
                        ),
                        tvFinderOfferHeaderView = new TvFinderOfferHeaderView({
                                appendTo: tvFinderControlsView.$el.parent(),
                                tvFinderAppModel: tvFinderAppModel,
                                televisions: televisions
                            }
                        ),
                        productOffersView = new ProductOffersView({
                                id: 'tvFinderOfferContainerId',
                                appendTo: tvFinderControlsView.$el.parent().parent(),
                                tvFinderAppModel: tvFinderAppModel,
                                televisions: televisions
                            }
                        ),
                        productPanelView = new ProductPanelView({
                                appendTo: $('body'),
                                tvFinderAppModel: tvFinderAppModel,
                                cart: cart
                            }
                        );
                    qTvFinderApp.resolve({
                            start: function () {
                                siteHeaderView.start();
                                breadcrumbLineView.start();
                                tvFinderPovView.start();
                                tvFinderControlsView.start();
                                tvFinderSizeControlView.start();
                                tvFinderTypeControlView.start();
                                tvFinderBrandControlView.start();
                                tvFinderSortControlView.start();
                                tvFinderOfferHeaderView.start();
                                productOffersView.start();
                                productPanelView.start();
                            }
                        }
                    );
                },
                function (error) {
                    qTvFinderApp.reject(error);
                }
            );
            return qTvFinderApp.promise();
        }
    }
);
