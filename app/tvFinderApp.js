define([
    'jQuery',
    'Backbone',
    'model/BreadcrumbLine',
    'view/SiteHeader',
    'view/BreadcrumbLine',
    'view/TvFinderPov'],
    function ($, Backbone, BreadcrumbLineModel, SiteHeaderView, BreadcrumbLineView, TvFinderPovView) {
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
                appendTo: ".appBody"
            }
        );
    }
);
