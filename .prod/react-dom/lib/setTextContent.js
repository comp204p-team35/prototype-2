"use strict";var ExecutionEnvironment=require("fbjs/lib/ExecutionEnvironment"),escapeTextContentForBrowser=require("./escapeTextContentForBrowser"),setInnerHTML=require("./setInnerHTML"),setTextContent=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t};ExecutionEnvironment.canUseDOM&&("textContent"in document.documentElement||(setTextContent=function(e,t){3!==e.nodeType?setInnerHTML(e,escapeTextContentForBrowser(t)):e.nodeValue=t}));module.exports=setTextContent;