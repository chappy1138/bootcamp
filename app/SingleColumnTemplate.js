define(['app/ApplicationView', 'jQuery'],
    function (ApplicationView, $) {
        return new ApplicationView({
                el: $('body'),
                name: 'SingleColumnTemplate'
            }
        );
    }
);
