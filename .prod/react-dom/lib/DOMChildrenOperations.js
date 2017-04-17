"use strict";function getNodeAfter(e,t){Array.isArray(t)&&(t=t[1]);return t?t.nextSibling:e.firstChild}function insertLazyTreeChildAt(e,t,r){DOMLazyTree.insertTreeBefore(e,t,r)}function moveChild(e,t,r){Array.isArray(t)?moveDelimitedText(e,t[0],t[1],r):insertChildAt(e,t,r)}function removeChild(e,t){if(Array.isArray(t)){var r=t[1];t=t[0];removeDelimitedText(e,t,r);e.removeChild(r)}e.removeChild(t)}function moveDelimitedText(e,t,r,i){for(var n=t;;){var o=n.nextSibling;insertChildAt(e,n,i);if(n===r){break}n=o}}function removeDelimitedText(e,t,r){for(;;){var i=t.nextSibling;if(i===r){break}e.removeChild(i)}}function replaceDelimitedText(e,t,r){var i=e.parentNode,n=e.nextSibling;if(n===t){r&&insertChildAt(i,document.createTextNode(r),n)}else{if(r){setTextContent(n,r);removeDelimitedText(i,n,t)}else{removeDelimitedText(i,e,t)}}}var DOMLazyTree=require("./DOMLazyTree"),Danger=require("./Danger"),ReactDOMComponentTree=require("./ReactDOMComponentTree"),ReactInstrumentation=require("./ReactInstrumentation"),createMicrosoftUnsafeLocalFunction=require("./createMicrosoftUnsafeLocalFunction"),setInnerHTML=require("./setInnerHTML"),setTextContent=require("./setTextContent"),insertChildAt=createMicrosoftUnsafeLocalFunction(function(e,t,r){e.insertBefore(t,r)}),dangerouslyReplaceNodeWithMarkup=Danger.dangerouslyReplaceNodeWithMarkup,DOMChildrenOperations={dangerouslyReplaceNodeWithMarkup:dangerouslyReplaceNodeWithMarkup,replaceDelimitedText:replaceDelimitedText,processUpdates:function(e,t){for(var r=0;r<t.length;r++){var i=t[r];switch(i.type){case"INSERT_MARKUP":insertLazyTreeChildAt(e,i.content,getNodeAfter(e,i.afterNode));break;case"MOVE_EXISTING":moveChild(e,i.fromNode,getNodeAfter(e,i.afterNode));break;case"SET_MARKUP":setInnerHTML(e,i.content);break;case"TEXT_CONTENT":setTextContent(e,i.content);break;case"REMOVE_NODE":removeChild(e,i.fromNode)}}}};module.exports=DOMChildrenOperations;