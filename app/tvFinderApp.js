define([
    'jQuery',
    'Backbone',
    'televisions',
    'view/SiteHeader',
    'view/BreadcrumbLine',
    'view/TvFinderPov',
    'view/TvFinderControls',
    'view/TvFinderSizeControl',
    'view/TvFinderTypeControl',
    'view/TvFinderBrandControl',
    'view/TvFinderSortControl',
    'view/TvFinderOfferHeader',
    'view/ProductOffers'],
    function ($, Backbone, qTelevisions, SiteHeaderView, BreadcrumbLineView, TvFinderPovView, TvFinderControlsView, TvFinderSizeControlView, TvFinderTypeControlView, TvFinderBrandControlView, TvFinderSortControlView, TvFinderOfferHeaderView, ProductOffersView) {
        var qTvFinderApp = $.Deferred();
        qTelevisions.then(
            function (televisions) {
                qTvFinderApp.resolve(function () {
                        var tvFinderAppModel = new Backbone.Model({
                                minSizeFilter: '*',
                                maxSizeFilter: '*',
                                typeFilter: '*',
                                brandFilter: '*',
                                sortBy: '*',
                                tvOfferCollection: new Backbone.Collection(televisions)
                            }
                        );
                        var siteHeaderView = new SiteHeaderView({
                                    appendTo: ".appHeader"
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
                                    tvFinderAppModel: tvFinderAppModel
                                }
                            ),
                            tvFinderControlsView = new TvFinderControlsView({
                                    appendTo: tvFinderPovView.el
                                }
                            ),
                            productOffersView = new ProductOffersView({
                                    id: 'tvFinderOfferContainerId',
                                    appendTo: tvFinderControlsView.$el.parent().parent(),
                                    tvFinderAppModel: tvFinderAppModel
                                }
                            ),
                            tvFinderSizeControlView = new TvFinderSizeControlView({
                                    appendTo: tvFinderControlsView.el,
                                    tvFinderAppModel: tvFinderAppModel
                                }
                            ),
                            tvFinderTypeControlView = new TvFinderTypeControlView({
                                    appendTo: tvFinderControlsView.el,
                                    tvFinderAppModel: tvFinderAppModel
                                }
                            ),
                            tvFinderBrandControlView = new TvFinderBrandControlView({
                                    appendTo: tvFinderControlsView.el,
                                    tvFinderAppModel: tvFinderAppModel
                                }
                            ),
                            tvFinderSortControlView = new TvFinderSortControlView({
                                    appendTo: tvFinderControlsView.el,
                                    tvFinderAppModel: tvFinderAppModel
                                }
                            ),
                            tvFinderOfferHeaderView = new TvFinderOfferHeaderView({
                                    appendTo: tvFinderControlsView.$el.parent(),
                                    tvFinderAppModel: tvFinderAppModel
                                }
                            );
                        return {
                            start: function () {
                                siteHeaderView.start();
                                breadcrumbLineView.start();
                                tvFinderPovView.start();
                                tvFinderControlsView.start();
                                productOffersView.start();
                                tvFinderSizeControlView.start();
                                tvFinderTypeControlView.start();
                                tvFinderBrandControlView.start();
                                tvFinderSortControlView.start();
                                tvFinderOfferHeaderView.start();
                            }
                        };
                    }
                );
            },
            function (error) {
                qTvFinderApp.reject(error);
            }
        );
        return qTvFinderApp.promise();
    }
);
