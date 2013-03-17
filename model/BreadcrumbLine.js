define(['Backbone'], function (Backbone) {
        return Backbone.Model.extend({
                defaults: {
                    home: { name: "walmart.com", href: "/" },
                    crumbs: []
                }
            }
        );
    }
);