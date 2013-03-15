define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['Greeting.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  foundHelper = helpers.greeting;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " world!";
  return buffer;});
templates['SingleColumnTemplate.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<article class=\"appContent\">\n    <header class=\"appHeader\"></header>\n    <section class=\"appBody\"></section>\n    <footer class=\"appFooter\"></footer>\n</article>\n<!--#script>\n    var module = {};\n</script#-->\n<!--#script src=\"index.js\"></script#-->\n";});
templates['SiteHeader.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<nav class=\"tvFinderTopNav\">\n    <ul class=\"tvFinderWalmartNav\">\n        <li class=\"walmartLogoCell\"><a class=\"walmartLogoLink\" href=\"http://www.walmart.com/\"\n                                       title=\"Go To Walmart.com\">Walmart</a></li>\n        <li class=\"walmartSearchCell\">\n            <form class=\"walmartSearchForm\" action=\"http://www.walmart.com/search/\">\n                <button class=\"walmartSearchSubmit\" type=\"submit\" title=\"Search\">Search</button>\n                <input class=\"walmartSearchInput\" type=\"text\" name=\"q\" placeholder=\"Search\"/>\n            </form>\n        </li>\n        <li class=\"walmartCreateCell\"><a class=\"walmartCreateLink\" href=\"#\" title=\"Create a new wishlist\">Create</a>\n\n            <div class=\"walmartCreateText\">a new wishlist</div>\n        </li>\n        <li class=\"walmartSignInCell\"><a class=\"walmartSignInLink\" href=\"#\" title=\"Sign In to your account\">Sign\n            In</a>\n\n            <div class=\"walmartSignInText\">to your account</div>\n        </li>\n        <li class=\"walmartCartCell\"><a class=\"walmartCartLink\" href=\"#\" title=\"View the 0 items in your cart\">0\n            Items</a>\n\n            <div class=\"walmartCartText\">in your cart</div>\n        </li>\n    </ul>\n    <ul class=\"tvFinderBreadcrumbLine\">\n        <li class=\"tvFinderHomeBreadcrumb\"><a class=\"tvFinderHomeLink\" href=\"#\" title=\"home\">Home</a></li>\n        <li class=\"tvFinderBreadcrumb\"><a class=\"tvFinderBreadcrumbLink\" href=\"#\" title=\"Departments\">Deparments</a>\n        </li>\n        <li class=\"tvFinderBreadcrumb\"><a class=\"tvFinderBreadcrumbLink\" href=\"#\"\n                                          title=\"Electronics\">Electronics</a></li>\n        <li class=\"tvFinderBreadcrumb\"><a class=\"tvFinderBreadcrumbLink\" href=\"#\" title=\"TV's\">TV's</a></li>\n    </ul>\n</nav>\n";});
});