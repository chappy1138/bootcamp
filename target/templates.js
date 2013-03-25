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
templates['ProductAbout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1, stack2;
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.baseItem),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  }

function program3(depth0,data) {
  
  
  return "<a href=\"#\" title=\"Continue Reading\">Continue Reading</a>";
  }

  buffer += "About\n<div class=\"productAboutLeft\">";
  options = {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.formattedText),stack1 ? stack1.call(depth0, 300, options) : helperMissing.call(depth0, "formattedText", 300, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n<div class=\"productAboutRight\"></div>\n<hr>";
  return buffer;
  });
templates['ProductMedia'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\"/></li>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li><a href=\"#\">"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n                ";
  return buffer;
  }

  buffer += "<div class=\"carousel\">\n    <div class=\"goLeft\"></div>\n    <div class=\"clipping\">\n        <ul>\n            ";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.baseItem),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </ul>\n    </div>\n    <div class=\"goRight\"></div>\n</div>\n<div class=\"centered-block-outer\">\n    <div class=\"centered-block-middle\">\n        <div class=\"centered-block-inner\">\n            <ul class=\"pages\">\n                ";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.baseItem),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </ul>\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['ProductOffers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <article class=\"tvFinderOffer\" data-featured=\""
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-type=\"";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"\n             data-brand=\"";
  if (stack2 = helpers.brand) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.brand; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-price=\"";
  if (stack2 = helpers.price) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.price; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-name=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"\n             data-rating=\"";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-size=\"";
  if (stack2 = helpers.size) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.size; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-item_id=\"";
  if (stack2 = helpers.item_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.item_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n        <header>\n            <h1><a href=\"#\" title=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                <i data-img\n                   data-src=\"";
  if (stack2 = helpers.image) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.image; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"\n                   data-alt=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></i>\n\n                <div class=\"tvFinderProductName\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n            </a></h1>\n        </header>\n        <ul class=\"tvFinderProductDetails\">";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</ul>\n        <p class=\"tvFinderProductPrice\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formattedPrice),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "formattedPrice", depth0.price, options)))
    + "</p>\n        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formattedRating),stack1 ? stack1.call(depth0, depth0.rating, options) : helperMissing.call(depth0, "formattedRating", depth0.rating, options)))
    + "\n    </article>\n";
  return buffer;
  }

  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });
templates['ProductPanel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"productPanelFloating\"></div>\n<div class=\"productPanelBackground\"></div>\n";
  });
templates['ProductTop'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "1 review";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.reviews),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " reviews";
  return buffer;
  }

  buffer += "<div class=\"productTopLeft\">\n    <div class=\"productTopTitle\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.baseItem),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n    <div>\n        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formattedRating),stack1 ? stack1.call(depth0, depth0.rating, options) : helperMissing.call(depth0, "formattedRating", depth0.rating, options)))
    + "\n        <p><a href=\"#\" title=\"go to reviews\">";
  stack2 = helpers['if'].call(depth0, depth0.oneReview, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a> | <a href=\"#\" title=\"Write a Review\">Write a\n            Review</a>\n            | <a href=\"#\" title=\"Ask a Question\">Ask a Question</a></p>\n\n    </div>\n    <p>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formattedPrice),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.baseItem),stack1 == null || stack1 === false ? stack1 : stack1.sellers)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice), options) : helperMissing.call(depth0, "formattedPrice", ((stack1 = ((stack1 = ((stack1 = depth0.baseItem),stack1 == null || stack1 === false ? stack1 : stack1.sellers)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice), options)))
    + "</p>\n</div>\n<div class=\"productCloseBox\"><a href=\"#\" title=\"close\">close</a></div>";
  return buffer;
  });
templates['SingleColumnTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<article class=\"appContent\">\n    <header class=\"appHeader\"></header>\n    <section class=\"appBody\"></section>\n    <footer class=\"appFooter\"></footer>\n</article>\n<script src=\"../node_modules/requirejs/require.js\"></script>\n<script>\n    require.config({\n        \"paths\": {\n            \"app/TvFinderApp\": \"tvFinderApp-client\", // comment to get components individually\n            \"handlebars\": \"../node_modules/handlebars/dist/handlebars.runtime\",\n            \"Backbone\": \"../node_modules/backbone/backbone\",\n            \"underscore\": \"../node_modules/underscore/underscore\",\n            \"jQuery\": \"lib/jquery-1.8.3\",\n            \"content\": \"lib/content-client\",\n            \"televisions\": \"lib/televisions-client\"\n        },\n        \"shim\": {\n            \"Backbone\": {\n                \"deps\": [\n                    \"underscore\",\n                    \"jQuery\"\n                ],\n                \"exports\": \"Backbone\"\n            },\n            \"jQuery\": {\n                \"exports\": \"$\"\n            },\n            \"underscore\": {\n                \"exports\": \"_\"\n            },\n            \"handlebars\": {\n                \"exports\": \"Handlebars\"\n            },\n            \"lib/jquery.ui.sliderX\": {\n                \"deps\": [\n                    \"lib/jquery.ui.slider\"\n                ]\n            },\n            \"lib/jquery.ui.slider\": {\n                \"deps\": [\n                    \"lib/jquery.ui.widget\",\n                    \"lib/jquery.ui.mouse\"\n                ]\n            },\n            \"lib/jquery.ui.mouse\": {\n                \"deps\": [\n                    \"lib/jquery.ui.widget\"\n                ]\n            },\n            \"lib/jquery.ui.widget\": {\n                \"deps\": [\n                    \"lib/jquery.ui.core\"\n                ]\n            },\n            \"lib/cutstring\": {\n                \"exports\": \"CutString\"\n            }\n        }\n    });\n    require(['app/TvFinderApp'], function (tvFinderApp) {\n                tvFinderApp().then(\n                        function(tvFinder) {\n                            tvFinder.start();\n                        },\n                        function (error) {\n                            console.log(error);\n                        }\n                );\n            }\n    );\n</script>\n";
  });
templates['SiteHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<ul class=\"tvFinderWalmartNav\">\n    <li class=\"walmartLogoCell\"><a class=\"walmartLogoLink\" href=\"http://www.walmart.com/\"\n                                   title=\"Go To Walmart.com\">Walmart</a></li>\n    <li class=\"walmartSearchCell\">\n        <form class=\"walmartSearchForm\" action=\"http://www.walmart.com/search/\">\n            <button class=\"walmartSearchSubmit\" type=\"submit\" title=\"Search\">Search</button>\n            <input class=\"walmartSearchInput\" type=\"text\" name=\"q\" placeholder=\"Search\"/>\n        </form>\n    </li>\n    <li class=\"walmartCreateCell\"><a class=\"walmartCreateLink\" href=\"#\" title=\"Create a new wishlist\">Create</a>\n\n        <div class=\"walmartCreateText\">a new wishlist</div>\n    </li>\n    <li class=\"walmartSignInCell\"><a class=\"walmartSignInLink\" href=\"#\" title=\"Sign In to your account\">Sign\n        In</a>\n\n        <div class=\"walmartSignInText\">to your account</div>\n    </li>\n    <li class=\"walmartCartCell\"><a class=\"walmartCartLink\" href=\"#\" title=\"View the 0 items in your cart\">0\n        Items</a>\n\n        <div class=\"walmartCartText\">in your cart</div>\n    </li>\n</ul>\n";
  });
templates['TvFinderBrandControl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n            <li class=\"tvFinderMenuChoice\"><a href=\"#\" data-value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a></li>\n        ";
  return buffer;
  }

  buffer += "Brand\n<div class=\"btn-group tvFinderControl\">\n    <a class=\"btn btn-large dropdown-toggle\" data-toggle=\"dropdown\" data-value=\"*\" href=\"#\">\n        Any\n        <span class=\"caret\"></span>\n    </a>\n    <ul class=\"dropdown-menu\" data-role=\"filter\" data-attr=\"Brand\">\n        <li class=\"tvFinderMenuChoice\"><a data-value=\"*\" href=\"#\">Any</a></li>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>\n";
  return buffer;
  });
templates['TvFinderControls'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<li><a class=\"tvFinderLogoLink\" href=\"#\" title=\"Go to the TV Finder\">TV Finder</a></li>\n";
  });
templates['TvFinderOfferHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span id=\"tvFinderMatchOfferCountId\" class=\"tvFinderMatchOfferCount\"></span>\n<span>for televisions fitting that criteria</span>\n<button id=\"tvFinderClearFiltersId\" class=\"btn tvFinderClearFilters\">Clear Filters</button>\n";
  });
templates['TvFinderPov'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<h1>Get More, For Less</h1>\n\n<h2>Find the perfect Television with our new <a class=\"tvFinderLink\" href=\"#\"\n                                                title=\"TVFinder\">TVFinder&trade;</a>\n</h2>\n\n<div class=\"tvFinderOffers\">\n    <div class=\"tvFinderMinPrice\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formattedPrice),stack1 ? stack1.call(depth0, ((stack1 = depth0.minPrice),stack1 == null || stack1 === false ? stack1 : stack1.price), options) : helperMissing.call(depth0, "formattedPrice", ((stack1 = depth0.minPrice),stack1 == null || stack1 === false ? stack1 : stack1.price), options)))
    + "</div>\n    <div class=\"tvFinderMinSize\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.minPrice),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&rdquo;</div>\n    <div class=\"tvFinderMedianPrice\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formattedPrice),stack1 ? stack1.call(depth0, ((stack1 = depth0.medianPrice),stack1 == null || stack1 === false ? stack1 : stack1.price), options) : helperMissing.call(depth0, "formattedPrice", ((stack1 = depth0.medianPrice),stack1 == null || stack1 === false ? stack1 : stack1.price), options)))
    + "</div>\n    <div class=\"tvFinderMedianSize\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.medianPrice),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&rdquo;</div>\n    <div class=\"tvFinderMaxPrice\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formattedPrice),stack1 ? stack1.call(depth0, ((stack1 = depth0.maxPrice),stack1 == null || stack1 === false ? stack1 : stack1.price), options) : helperMissing.call(depth0, "formattedPrice", ((stack1 = depth0.maxPrice),stack1 == null || stack1 === false ? stack1 : stack1.price), options)))
    + "</div>\n    <div class=\"tvFinderMaxSize\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.maxPrice),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&rdquo;</div>\n</div>\n";
  return buffer;
  });
templates['TvFinderSizeControl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Size\n<div id=\"tvFinderSizeSlider\" class=\"tvFinderControl\"></div>\n\n";
  });
templates['TvFinderSortControl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Sort\n<div class=\"btn-group tvFinderControl\">\n    <a class=\"btn btn-large dropdown-toggle\" data-toggle=\"dropdown\" data-value=\"Featured-asc\" href=\"#\">\n        Featured\n        <span class=\"caret\"></span>\n    </a>\n    <ul class=\"dropdown-menu\" data-role=\"sort\">\n        <li class=\"tvFinderMenuChoice\"><a href=\"#\" data-value=\"Featured-asc\">Featured</a></li>\n        <li class=\"tvFinderMenuChoice\"><a href=\"#\" data-value=\"Price-asc\">Price</a></li>\n        <li class=\"tvFinderMenuChoice\"><a href=\"#\" data-value=\"Rating-des\">Rating</a></li>\n        <li class=\"tvFinderMenuChoice\"><a href=\"#\" data-value=\"Name-asc\">Name</a></li>\n        <li class=\"tvFinderMenuChoice\"><a href=\"#\" data-value=\"Size-asc\">Size</a></li>\n    </ul>\n</div>\n";
  });
templates['TvFinderTypeControl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n            <li class=\"tvFinderMenuChoice\"><a href=\"#\" data-value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a></li>\n        ";
  return buffer;
  }

  buffer += "Type\n<div class=\"btn-group tvFinderControl\">\n    <a class=\"btn btn-large dropdown-toggle\" data-toggle=\"dropdown\" data-value=\"*\" href=\"#\">\n        Any\n        <span class=\"caret\"></span>\n    </a>\n    <ul class=\"dropdown-menu\" data-role=\"filter\" data-attr=\"Type\">\n        <li class=\"tvFinderMenuChoice\"><a href=\"#\" data-value=\"*\">Any</a></li>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>\n";
  return buffer;
  });
});