define(['view/DropdownControl'], function (DropdownControlView) {
        var superclass = DropdownControlView;
        return superclass.extend({
                name: 'TvFinderSortControl',
                tagName: "li",
                className: "tvFinderSortPrompt",
                click: function (event) {
                    var $menuItem = $(event.target), ascending = $menuItem.attr('data-asc') == 'true';
                    this.model.set({ ascending: ascending }, { silent: true });
                    superclass.prototype.click.call(this, event);
                    return false;
                }
            }
        );
    }
);
