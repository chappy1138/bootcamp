define(['jQuery', 'underscore', 'view/Base'], function ($, _, BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'ProductMedia',
                tagName: 'div',
                className: 'productMedia',
                initialize: function () {
                    _.bindAll(this, 'clickArrow', 'clickPage');
                    superclass.prototype.initialize.apply(this, arguments);
                },
                currentPage: 0,
                start: function () {
                    var alternateImageData = this.model.get('baseItem').alternateImageData;
                    if (alternateImageData.length > 1) {
                        this.$goRight = this.$('.goRight').toggleClass('active').click(this.clickArrow);
                        this.$goLeft = this.$('.goLeft').click(this.clickArrow);
                    }
                    this.$pages = this.$('.pages li').click(this.clickPage);
                    this.$pages.eq(0).addClass('active');
                },
                clickArrow: function (event) {
                    var $arrow = $(event.target),
                        isGoRight = this.$goRight[0] === event.target,
                        isActive = $arrow.hasClass('active'),
                        alternateImageData = this.model.get('baseItem').alternateImageData;
                    if (isActive) {
                        this.$pages.eq(this.currentPage).toggleClass('active');
                        this.currentPage += isGoRight ? 1 : -1;
                        this.$pages.eq(this.currentPage).toggleClass('active');
                        repositionList.call(this);
                    }
                },
                clickPage: function (event) {
                    var $page = $(event.target),
                        isActive = $page.hasClass('active');
                    if (!isActive) {
                        this.$pages.eq(this.currentPage).toggleClass('active');
                        this.currentPage = parseInt($page.text());
                        this.$pages.eq(this.currentPage).toggleClass('active');
                        repositionList.call(this);
                    }
                    return false;
                }
            }
        );

        function repositionList() {
            var alternateImageData = this.model.get('baseItem').alternateImageData;
            this.$('.carousel ul').css({'left': (this.currentPage * -500) + 'px' });
            if (0 < this.currentPage) {
                this.$goLeft.addClass('active');
            }
            else {
                this.$goLeft.removeClass('active');
            }
            if (this.currentPage < alternateImageData.length - 1) {
                this.$goRight.addClass('active');
            }
            else {
                this.$goRight.removeClass('active');
            }
        }
    }
);