define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['Greeting'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['Head'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<title>Walmart.com: Save Money. Live Better.</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"index.css\"/>\n";
  });
templates['SingleColumnTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<article class=\"appContent\">\n    <header class=\"appHeader\"></header>\n    <section class=\"appBody\"></section>\n    <footer class=\"appFooter\"></footer>\n</article>\n<!--#script src=\"/usr/local/lib/node_modules/requirejs/require.js\"></script#-->\n<!--#script>\n    require.config({\n        \"paths\": {\n            //\"index\": \"js/TvFinderApp\", // uncomment to disable rollup\n            \"handlebars\": \"lib/handlebars.runtime\",\n            \"Backbone\": \"/usr/local/lib/node_modules/backbone/backbone\",\n            \"jQuery\": \"lib/jquery-1.7.2\",\n            \"underscore\": \"/usr/local/lib/node_modules/underscore/underscore\"\n        },\n        \"shim\": {\n            \"Backbone\": {\n                \"deps\": [\n                    \"underscore\",\n                    \"jQuery\"\n                ],\n                \"exports\": \"Backbone\"\n            },\n            \"jQuery\": {\n                \"exports\": \"$\"\n            },\n            \"underscore\": {\n                \"exports\": \"_\"\n            },\n            \"handlebars\": {\n                \"exports\": \"Handlebars\"\n            }\n        }\n    });\n    var tvFinder = require([\"index\"]);\n</script#-->\n";
  });
templates['SiteHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<nav class=\"tvFinderTopNav\">\n    <ul class=\"tvFinderWalmartNav\">\n        <li class=\"walmartLogoCell\"><a class=\"walmartLogoLink\" href=\"http://www.walmart.com/\"\n                                       title=\"Go To Walmart.com\">Walmart</a></li>\n        <li class=\"walmartSearchCell\">\n            <form class=\"walmartSearchForm\" action=\"http://www.walmart.com/search/\">\n                <button class=\"walmartSearchSubmit\" type=\"submit\" title=\"Search\">Search</button>\n                <input class=\"walmartSearchInput\" type=\"text\" name=\"q\" placeholder=\"Search\"/>\n            </form>\n        </li>\n        <li class=\"walmartCreateCell\"><a class=\"walmartCreateLink\" href=\"#\" title=\"Create a new wishlist\">Create</a>\n\n            <div class=\"walmartCreateText\">a new wishlist</div>\n        </li>\n        <li class=\"walmartSignInCell\"><a class=\"walmartSignInLink\" href=\"#\" title=\"Sign In to your account\">Sign\n            In</a>\n\n            <div class=\"walmartSignInText\">to your account</div>\n        </li>\n        <li class=\"walmartCartCell\"><a class=\"walmartCartLink\" href=\"#\" title=\"View the 0 items in your cart\">0\n            Items</a>\n\n            <div class=\"walmartCartText\">in your cart</div>\n        </li>\n    </ul>\n    <ul class=\"tvFinderBreadcrumbLine\">\n        <li class=\"tvFinderHomeBreadcrumb\"><a class=\"tvFinderHomeLink\" href=\"#\" title=\"home\">Home</a></li>\n        <li class=\"tvFinderBreadcrumb\"><a class=\"tvFinderBreadcrumbLink\" href=\"#\" title=\"Departments\">Deparments</a>\n        </li>\n        <li class=\"tvFinderBreadcrumb\"><a class=\"tvFinderBreadcrumbLink\" href=\"#\"\n                                          title=\"Electronics\">Electronics</a></li>\n        <li class=\"tvFinderBreadcrumb\"><a class=\"tvFinderBreadcrumbLink\" href=\"#\" title=\"TV's\">TV's</a></li>\n    </ul>\n</nav>\n";
  });
});