define(function () {
        return function (content) {
            content = content.replace(/<script/g, '<!--#script');
            content = content.replace(/<\/script>/g, '</script#-->');
            content = content.replace(/&([^;]*;)/g, '&amp;$1');
            return content;
        };
    }
);