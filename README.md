Orren's Bootcamp
================

Goals for this week (assignment 2):
-----------------------------------
 * fully render page on server for SEO compliance
 * use the same Bootstrap Models/Views/Events on server and client

Strategy
--------
 * Use Node to create server and dynamically retrieve data as needed
 * Use jQuery / Jsdom to render content on the server
 * Use Bootstrap Models to maintain the data
 * Use Bootstrap Views to render the page on the server
 * Use Bootstrap Events to coordinate updates on Views and Models
 * use RequireJS to manage the various Bootstrap components
 * use RequireJS' r.js utility to minify/rollup Javascript

Challenges
----------
 * Jsdom on the serverside converts SGML entities into UTF8 characters but doesn't convert them back when serializing the DOM for output to the client
 * JQuery automatically processes SCRIPT tags