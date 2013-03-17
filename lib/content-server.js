define(function () {
        return {
            escape: function (html) {
                html = html.replace(/<script/g, '<!--#script');
                html = html.replace(/<\/script>/g, '</script#-->');
                html = html.replace(/&([^;]*;)/g, '#amp#$1');
                return html;
            },
            unescape: function (html) {
                html = html.replace(/<!--#script/g, '<script');
                html = html.replace(/<\/script#-->/g, '</script>');
                html = html.replace(/#amp#(.*;)/g, '&$1');
                return html;
            }
        };
    }
);