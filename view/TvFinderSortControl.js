define(['view/DropdownControl'], function (DropdownControlView) {
        var superclass = DropdownControlView;
        return superclass.extend({
                name: 'TvFinderSortControl',
                tagName: "li",
                className: "tvFinderSortPrompt",
                attributeName: 'sortBy'
            }
        );
    }
);
