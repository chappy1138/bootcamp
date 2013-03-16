define(['view/Basic'], function (Basic) {
        return Basic.extend({
                name: 'Greeting',
                id: '#greeting',
                elSelector: "#greeting",
                elAppendToSelector: ".appBody",
                tagName: "div"
            }
        );
    }
);
