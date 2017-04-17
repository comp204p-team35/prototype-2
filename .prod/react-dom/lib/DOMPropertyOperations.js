"use strict";function isAttributeNameSafe(e){if(validatedAttributeNameCache.hasOwnProperty(e)){return!0}if(illegalAttributeNameCache.hasOwnProperty(e)){return!1}if(VALID_ATTRIBUTE_NAME_REGEX.test(e)){validatedAttributeNameCache[e]=!0;return!0}illegalAttributeNameCache[e]=!0;return!1}function shouldIgnoreValue(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&t<1||e.hasOverloadedBooleanValue&&t===!1}var DOMProperty=require("./DOMProperty"),ReactDOMComponentTree=require("./ReactDOMComponentTree"),ReactInstrumentation=require("./ReactInstrumentation"),quoteAttributeValueForBrowser=require("./quoteAttributeValueForBrowser"),warning=require("fbjs/lib/warning"),VALID_ATTRIBUTE_NAME_REGEX=new RegExp("^["+DOMProperty.ATTRIBUTE_NAME_START_CHAR+"]["+DOMProperty.ATTRIBUTE_NAME_CHAR+"]*$"),illegalAttributeNameCache={},validatedAttributeNameCache={},DOMPropertyOperations={createMarkupForID:function(e){return DOMProperty.ID_ATTRIBUTE_NAME+"="+quoteAttributeValueForBrowser(e)},setAttributeForID:function(e,t){e.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME,t)},createMarkupForRoot:function(){return DOMProperty.ROOT_ATTRIBUTE_NAME+'=""'},setAttributeForRoot:function(e){e.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME,"")},createMarkupForProperty:function(e,t){var r=DOMProperty.properties.hasOwnProperty(e)?DOMProperty.properties[e]:null;if(r){if(shouldIgnoreValue(r,t)){return""}var o=r.attributeName;return r.hasBooleanValue||r.hasOverloadedBooleanValue&&t===!0?o+'=""':o+"="+quoteAttributeValueForBrowser(t)}return DOMProperty.isCustomAttribute(e)?null==t?"":e+"="+quoteAttributeValueForBrowser(t):null},createMarkupForCustomAttribute:function(e,t){return isAttributeNameSafe(e)&&null!=t?e+"="+quoteAttributeValueForBrowser(t):""},setValueForProperty:function(e,t,r){var o=DOMProperty.properties.hasOwnProperty(t)?DOMProperty.properties[t]:null;if(o){var u=o.mutationMethod;if(u){u(e,r)}else{if(shouldIgnoreValue(o,r)){this.deleteValueForProperty(e,t);return}if(o.mustUseProperty){e[o.propertyName]=r}else{var a=o.attributeName,i=o.attributeNamespace;i?e.setAttributeNS(i,a,""+r):o.hasBooleanValue||o.hasOverloadedBooleanValue&&r===!0?e.setAttribute(a,""):e.setAttribute(a,""+r)}}}else{if(DOMProperty.isCustomAttribute(t)){DOMPropertyOperations.setValueForAttribute(e,t,r);return}}},setValueForAttribute:function(e,t,r){if(isAttributeNameSafe(t)){null==r?e.removeAttribute(t):e.setAttribute(t,""+r)}},deleteValueForAttribute:function(e,t){e.removeAttribute(t)},deleteValueForProperty:function(e,t){var r=DOMProperty.properties.hasOwnProperty(t)?DOMProperty.properties[t]:null;if(r){var o=r.mutationMethod;if(o){o(e,void 0)}else{if(r.mustUseProperty){var u=r.propertyName;r.hasBooleanValue?e[u]=!1:e[u]=""}else{e.removeAttribute(r.attributeName)}}}else{DOMProperty.isCustomAttribute(t)&&e.removeAttribute(t)}}};module.exports=DOMPropertyOperations;