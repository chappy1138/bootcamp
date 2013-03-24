define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductMedia',
                tagName: 'div',
                className: 'productMedia',
                initialize: function () {
                    _.bindAll(this, 'initializeCarousel', 'itemLoadCallback');
                    superclass.prototype.initialize.apply(this, arguments);
                },
                start: function () {
                    var self = this;
                    requirejs(['lib/jquery.jcarousel'], function () {
                            var alternateImageData = self.model.get('baseItem').alternateImageData;
                            self.$el.jcarousel({
                                    scroll: 1,
                                    initCallback: self.initializeCarousel,
                                    visible: 1
//                                    size: alternateImageData.length,
//                                    itemFallbackDimension: 500,
//                                    itemLoadCallback: self.itemLoadCallback
                                    // This tells jCarousel NOT to autobuild prev/next buttons
//                                buttonNextHTML: null,
//                                buttonPrevHTML: null
                                }
                            );
                        }
                    );
                },
                initializeCarousel: function (carousel) {
                    $('.productMediaGotoPage a').bind('click', function () {
                            carousel.scroll($.jcarousel.intval($(this).text()));
                            return false;
                        }
                    );
                },
                itemLoadCallback: function (carousel, state) {
                    console.log('enter itemLoadCallback', carousel.first, carousel.last);
                    var alternateImageData = this.model.get('baseItem').alternateImageData;
                    for (var index = carousel.first; index <= carousel.last; index++) {
                        if (!carousel.has(index)) {
                            carousel.add(index, '<img width="500" height="500" src="'
                            + alternateImageData[index].lgImageSrc
                            + '" alt=""/>');
                        }
                    }
                }
            }
        );
    }
);