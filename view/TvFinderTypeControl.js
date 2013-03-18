define(['view/DropdownControl'], function (DropdownControlView) {
        var superclass = DropdownControlView;
        return superclass.extend({
                name: 'TvFinderTypeControl',
                tagName: "li",
                className: "tvFinderTypePrompt"
            }
        );
    }
);
