define(['jQuery', 'Backbone', 'view/TvFinder'], function ($, Backbone, TvFinder) {
    var model = new Backbone.Model({
            title: 'Walmart.com: Save Money. Live Better.',
            greeting: 'Goodbye'
        }
    );
    return new TvFinder({ model: model });
});
