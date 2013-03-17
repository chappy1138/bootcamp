define([
    'jQuery',
    'Backbone',
    'model/TvFinderPov',
    'model/BreadcrumbLine',
    'view/SiteHeader',
    'view/BreadcrumbLine',
    'view/TvFinderPov',
    'televisions'],
    function ($, Backbone, TvFinderPovModel, BreadcrumbLineModel, SiteHeaderView, BreadcrumbLineView, TvFinderPovView, televisionsPromise) {
        var qTvFinderApp = $.Deferred();
        televisionsPromise.then(
            function (televisions) {
                var tvSampleOffersModel = new TvFinderPovModel(televisions.items);
                var breadcrumbLineModel = new BreadcrumbLineModel({
                        crumbs: [
                            { name: 'Departments', href: '/cp/All-Departments/121828' },
                            { name: 'Electronics', href: '/cp/Electronics/3944' },
                            { name: 'TV\'s', href: '/cp/televisions-video/1060825' }
                        ]
                    }
                );
                var siteHeaderView = new SiteHeaderView({
                        appendTo: ".appHeader"
                    }
                );
                new BreadcrumbLineView({
                        appendTo: siteHeaderView.el,
                        model: breadcrumbLineModel
                    }
                );
                new TvFinderPovView({
                        appendTo: ".appBody",
                        model: tvSampleOffersModel
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
