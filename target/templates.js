define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['BreadcrumbLine'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"";
  if (stack1 = helpers.className) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = helpers['if'].call(depth0, depth0.href, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a href=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>";
  return buffer;
  }

  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });
templates['Greeting'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ", world!";
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
  


  return "<article class=\"appContent\">\n    <header class=\"appHeader\"></header>\n    <section class=\"appBody\"></section>\n    <footer class=\"appFooter\"></footer>\n</article>\n<script src=\"/usr/local/lib/node_modules/requirejs/require.js\"></script>\n<script>\n    require.config({\n        \"paths\": {\n            //\"index\": \"js/TvFinderApp\", // uncomment to get individuall\n            \"handlebars\": \"lib/handlebars.runtime\",\n            \"Backbone\": \"/usr/local/lib/node_modules/backbone/backbone\",\n            \"jQuery\": \"lib/jquery-1.7.2\",\n            \"underscore\": \"/usr/local/lib/node_modules/underscore/underscore\"\n        },\n        \"shim\": {\n            \"Backbone\": {\n                \"deps\": [\n                    \"underscore\",\n                    \"jQuery\"\n                ],\n                \"exports\": \"Backbone\"\n            },\n            \"jQuery\": {\n                \"exports\": \"$\"\n            },\n            \"underscore\": {\n                \"exports\": \"_\"\n            },\n            \"handlebars\": {\n                \"exports\": \"Handlebars\"\n            }\n        }\n    });\n    var tvFinder = require([\"index\"]);\n</script>\n";
  });
templates['SiteHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<ul class=\"tvFinderWalmartNav\">\n    <li class=\"walmartLogoCell\"><a class=\"walmartLogoLink\" href=\"http://www.walmart.com/\"\n                                   title=\"Go To Walmart.com\">Walmart</a></li>\n    <li class=\"walmartSearchCell\">\n        <form class=\"walmartSearchForm\" action=\"http://www.walmart.com/search/\">\n            <button class=\"walmartSearchSubmit\" type=\"submit\" title=\"Search\">Search</button>\n            <input class=\"walmartSearchInput\" type=\"text\" name=\"q\" placeholder=\"Search\"/>\n        </form>\n    </li>\n    <li class=\"walmartCreateCell\"><a class=\"walmartCreateLink\" href=\"#\" title=\"Create a new wishlist\">Create</a>\n\n        <div class=\"walmartCreateText\">a new wishlist</div>\n    </li>\n    <li class=\"walmartSignInCell\"><a class=\"walmartSignInLink\" href=\"#\" title=\"Sign In to your account\">Sign\n        In</a>\n\n        <div class=\"walmartSignInText\">to your account</div>\n    </li>\n    <li class=\"walmartCartCell\"><a class=\"walmartCartLink\" href=\"#\" title=\"View the 0 items in your cart\">0\n        Items</a>\n\n        <div class=\"walmartCartText\">in your cart</div>\n    </li>\n</ul>\n";
  });
templates['TvFinderPov'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>Get More, For Less</h1>\n\n<h2>Find the perfect Television with our new <a class=\"tvFinderLink\" href=\"#\"\n                                                title=\"TVFinder\">TVFinder&trade;</a>\n</h2>\n\n<div class=\"tvFinderOffers\">\n    <div class=\"tvFinderMinPrice\"><span class=\"tvFinderUsDollars\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.minPrice),stack1 == null || stack1 === false ? stack1 : stack1.dollars)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span\n            class=\"tvFinderUsCents\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.minPrice),stack1 == null || stack1 === false ? stack1 : stack1.cents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n    <div class=\"tvFinderMinSize\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.minPrice),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&rdquo;</div>\n    <div class=\"tvFinderMedianPrice\"><span class=\"tvFinderUsDollars\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.medianPrice),stack1 == null || stack1 === false ? stack1 : stack1.dollars)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span\n            class=\"tvFinderUsCents\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.medianPrice),stack1 == null || stack1 === false ? stack1 : stack1.cents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n    <div class=\"tvFinderMedianSize\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.medianPrice),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&rdquo;</div>\n    <div class=\"tvFinderMaxPrice\"><span class=\"tvFinderUsDollars\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.maxPrice),stack1 == null || stack1 === false ? stack1 : stack1.dollars)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span\n            class=\"tvFinderUsCents\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.maxPrice),stack1 == null || stack1 === false ? stack1 : stack1.cents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n    <div class=\"tvFinderMaxSize\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.maxPrice),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&rdquo;</div>\n</div>\n";
  return buffer;
  });
});