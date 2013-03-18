define(['view/DropdownControl'], function (DropdownControlView) {
        var superclass = DropdownControlView;
        return superclass.extend({
                name: 'TvFinderBrandControl',
                tagName: "li",
                className: "tvFinderBrandPrompt"
            }
        );
    }
);
