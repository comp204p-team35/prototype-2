"use strict";function quoteAttributeValueForBrowser(e){return'"'+escapeTextContentForBrowser(e)+'"'}var escapeTextContentForBrowser=require("./escapeTextContentForBrowser");module.exports=quoteAttributeValueForBrowser;