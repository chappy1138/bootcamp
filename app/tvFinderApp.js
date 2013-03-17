define([
    'jQuery',
    'Backbone',
    'model/BreadcrumbLine',
    'model/TvFinderPov',
    'model/TvFinderSizeControl',
    'model/TvFinderTypeControl',
    'model/TvFinderBrandControl',
    'view/SiteHeader',
    'view/BreadcrumbLine',
    'view/TvFinderPov',
    'view/TvFinderControls',
    'view/TvFinderSizeControl',
    'view/TvFinderTypeControl',
    'view/TvFinderBrandControl',
    'view/TvFinderSortControl',
    'televisions'],
    function ($, Backbone, BreadcrumbLineModel, TvFinderPovModel, TvFinderSizeControlModel, TvFinderTypeControlModel, TvFinderBrandControlModel, SiteHeaderView, BreadcrumbLineView, TvFinderPovView, TvFinderControlsView, TvFinderSizeControlView, TvFinderTypeControlView, TvFinderBrandControlView, TvFinderSortControlView, televisionsPromise) {
        var qTvFinderApp = $.Deferred();
        televisionsPromise.then(
            function (televisions) {
                var breadcrumbLineModel = new BreadcrumbLineModel({
                            crumbs: [
                                { name: 'Departments', href: '/cp/All-Departments/121828' },
                                { name: 'Electronics', href: '/cp/Electronics/3944' },
                                { name: 'TV\'s', href: '/cp/televisions-video/1060825' }
                            ]
                        }
                    ),
                    tvFinderPovModel = new TvFinderPovModel(televisions.items),
                    tvFinderSizeControlModel = new TvFinderSizeControlModel(televisions.items),
                    tvFinderTypeControlModel = new TvFinderTypeControlModel(televisions.items),
                    tvFinderBrandControlModel = new TvFinderBrandControlModel(televisions.items);

                var siteHeaderView = new SiteHeaderView({
                        appendTo: ".appHeader"
                    }
                );
                var breadcrumbLineView = new BreadcrumbLineView({
                        appendTo: siteHeaderView.el,
                        model: breadcrumbLineModel
                    }
                );
                var tvFinderPovView = new TvFinderPovView({
                        appendTo: ".appBody",
                        model: tvFinderPovModel
                    }
                );
                var tvFinderControlsView = new TvFinderControlsView({
                        appendTo: tvFinderPovView.el
                    }
                );
                var tvFinderSizeControlView = new TvFinderSizeControlView({
                        appendTo: tvFinderControlsView.el,
                        model: tvFinderSizeControlModel
                    }
                );
                var tvFinderTypeControlView = new TvFinderTypeControlView({
                        appendTo: tvFinderControlsView.el,
                        model: tvFinderTypeControlModel
                    }
                );
                var tvFinderBrandControlView = new TvFinderBrandControlView({
                        appendTo: tvFinderControlsView.el,
                        model: tvFinderBrandControlModel
                    }
                );
                var tvFinderSortControlView = new TvFinderSortControlView({
                        appendTo: tvFinderControlsView.el
                    }
                );
                qTvFinderApp.resolve();
            },
            function (error) {
                qTvFinderApp.reject(error);
            }
        );
        return qTvFinderApp.promise();
    }
);
