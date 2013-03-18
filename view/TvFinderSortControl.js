define(['view/DropdownControl'], function (DropdownControlView) {
        var superclass = DropdownControlView;
        return superclass.extend({
                name: 'TvFinderSortControl',
                tagName: "li",
                className: "tvFinderSortPrompt",
                click: function (event) {
                    superclass.prototype.click.call(this, event);
                    var $menuItem = $(event.target), ascending = $menuItem.attr('data-asc') === 'true';
                    this.model.set({ ascending: ascending }, { silent: true });
                    return false;
                }
            }
        );
    }
);
