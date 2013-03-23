define(['view/Base'], function (BaseView) {
        var superclass = BaseView;
        return superclass.extend({
                name: 'TvFinderControls',
                tagName: "ul",
                className: "tvFinderControls"
            }
        );
    }
);
