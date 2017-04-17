"use strict";function validateProperty(e,r,n){if(warnedProperties.hasOwnProperty(r)&&warnedProperties[r]){return!0}if(rARIA.test(r)){var t=r.toLowerCase(),o=DOMProperty.getPossibleStandardName.hasOwnProperty(t)?DOMProperty.getPossibleStandardName[t]:null;if(null==o){warnedProperties[r]=!0;return!1}if(r!==o){warnedProperties[r]=!0;return!0}}return!0}function warnInvalidARIAProps(e,r){var n=[];for(var t in r.props){var o=validateProperty(r.type,t,e);o||n.push(t)}n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length||n.length>1}function handleElement(e,r){null!=r&&"string"==typeof r.type&&(r.type.indexOf("-")>=0||r.props.is||warnInvalidARIAProps(e,r))}var DOMProperty=require("./DOMProperty"),ReactComponentTreeHook=require("react/lib/ReactComponentTreeHook"),warning=require("fbjs/lib/warning"),warnedProperties={},rARIA=new RegExp("^(aria)-["+DOMProperty.ATTRIBUTE_NAME_CHAR+"]*$"),ReactDOMInvalidARIAHook={onBeforeMountComponent:function(e,r){},onBeforeUpdateComponent:function(e,r){}};module.exports=ReactDOMInvalidARIAHook;