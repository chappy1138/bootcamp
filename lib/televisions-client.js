define(['jQuery', 'lib/environment'], function ($, environment) {
        var televisions = [], qTelevisions = $.Deferred();
        $("#tvFinderOfferContainerId").find('article').each(function () {
                var $this = $(this),
                    television = {
                        item_id: $this.attr('data-item_id'),
                        name: $this.attr('data-type'),
                        featured: parseInt($this.attr('data-featured')),
                        type: $this.attr('data-type'),
                        brand: $this.attr('data-brand'),
                        price: parseFloat($this.attr('data-price')),
                        rating: parseFloat($this.attr('data-rating')),
                        size: parseInt($this.attr('data-size'))
                    };
                televisions.push(television);
            }
        );
        qTelevisions.resolve(televisions);
        return qTelevisions.promise();
    }
);