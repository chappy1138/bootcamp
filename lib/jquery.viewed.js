define(['jQuery'], function (jQuery) {
    !function ($, undefined) {
        $.fn.viewed = function (handler) {
            if (typeof handler == "function") {
                var $window = $(window)
                    ;
                return this.each(function () {
                        handler.call(this);
                    }
                );
            }
            return this;
        };
    }(jQuery);

});