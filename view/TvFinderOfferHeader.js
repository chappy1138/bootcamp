define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'TvFinderOfferHeader',
                tagName: "header",
                className: "tvFinderOfferHeader",
                initialize: function (options) {
                    superclass.prototype.initialize.apply(this, arguments);
                    _.bindAll(this, 'click', 'updateCount', 'render');
                    this.options.productOffersView.model.bind('change', this.updateCount);
                },
                render: function () {
                    superclass.prototype.render.call(this);
                    this.updateCount();
                },
                start: function () {
                    superclass.prototype.start.call(this);
                    $('#tvFinderClearFiltersId').click(this.click);
                },
                click: function () {
                    this.options.resetFiltersEvent.trigger('reset', true);
                },
                updateCount: function () {
                    var count = this.options.productOffersView.model.get('count'),
                        text = count === 1 ? "1 match" : count + " matches";
                    $('#tvFinderMatchOfferCountId').text(text);
                }
            }
        );
    }
);
