define(['jQuery', 'model/GetOrFetchCollection', 'model/Review'], function ($, GetOrFetchCollection, ReviewModel) {
        var superclass = GetOrFetchCollection;
        return superclass.extend({
                model: ReviewModel
            }
        );
    }
);