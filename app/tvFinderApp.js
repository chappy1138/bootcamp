define([
    'jQuery',
    'Backbone',
    'model/BreadcrumbLine',
    'model/TvFinderPov',
    'model/TvFinderSizeControl',
    'model/TvFinderTypeControl',
    'model/TvFinderBrandControl',
    'model/TvFinderSortControl',
    'model/ProductOffers',
    'view/SiteHeader',
    'view/BreadcrumbLine',
    'view/TvFinderPov',
    'view/TvFinderControls',
    'view/TvFinderSizeControl',
    'view/TvFinderTypeControl',
    'view/TvFinderBrandControl',
    'view/TvFinderSortControl',
    'view/ProductOffers',
    'televisions'],
    function ($, Backbone, BreadcrumbLineModel, TvFinderPovModel, TvFinderSizeControlModel, TvFinderTypeControlModel, TvFinderBrandControlModel, TvFinderSortControlModel, ProductOffersModel, SiteHeaderView, BreadcrumbLineView, TvFinderPovView, TvFinderControlsView, TvFinderSizeControlView, TvFinderTypeControlView, TvFinderBrandControlView, TvFinderSortControlView, ProductOffersView, qTelevisions) {
        var qTvFinderApp = $.Deferred();
        qTelevisions.then(
            function (televisions) {
                var breadcrumbLineModel = new BreadcrumbLineModel({
                            crumbs: [
                                { name: 'Departments', href: '/cp/All-Departments/121828' },
                                { name: 'Electronics', href: '/cp/Electronics/3944' },
                                { name: 'TV\'s', href: '/cp/televisions-video/1060825' }
                            ]
                        }
                    ),
                    tvFinderPovModel = new TvFinderPovModel(televisions),
                    tvFinderSizeControlModel = new TvFinderSizeControlModel(televisions),
                    tvFinderTypeControlModel = new TvFinderTypeControlModel(televisions),
                    tvFinderBrandControlModel = new TvFinderBrandControlModel(televisions),
                    tvFinderSortControlModel = new TvFinderSortControlModel(),
                    productOffersModel = new ProductOffersModel(televisions),
                    views = [];
                var siteHeaderView = new SiteHeaderView({
                        appendTo: ".appHeader"
                    }
                );
                views.push(siteHeaderView);
                var breadcrumbLineView = new BreadcrumbLineView({
                        appendTo: siteHeaderView.el,
                        model: breadcrumbLineModel
                    }
                );
                views.push(breadcrumbLineView);
                var tvFinderPovView = new TvFinderPovView({
                        appendTo: ".appBody",
                        model: tvFinderPovModel
                    }
                );
                views.push(tvFinderPovView);
                var tvFinderControlsView = new TvFinderControlsView({
                        appendTo: tvFinderPovView.el
                    }
                );
                views.push(tvFinderControlsView);
                var tvFinderSizeControlView = new TvFinderSizeControlView({
                        appendTo: tvFinderControlsView.el,
                        model: tvFinderSizeControlModel
                    }
                );
                views.push(tvFinderSizeControlView);
                var tvFinderTypeControlView = new TvFinderTypeControlView({
                        appendTo: tvFinderControlsView.el,
                        model: tvFinderTypeControlModel
                    }
                );
                views.push(tvFinderTypeControlView);
                var tvFinderBrandControlView = new TvFinderBrandControlView({
                        appendTo: tvFinderControlsView.el,
                        model: tvFinderBrandControlModel
                    }
                );
                views.push(tvFinderBrandControlView);
                var tvFinderSortControlView = new TvFinderSortControlView({
                        appendTo: tvFinderControlsView.el,
                        model: tvFinderSortControlModel
                    }
                );
                views.push(tvFinderSortControlView);
                var productOffersView = new ProductOffersView({
                        id: 'tvFinderOfferContainerId',
                        appendTo: tvFinderControlsView.el,
                        model: productOffersModel
                    }
                );
                views.push(productOffersView);
                qTvFinderApp.resolve({
                        start: function () {
                            views.forEach(function (view) {
                                view.start();
                            });
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
);
