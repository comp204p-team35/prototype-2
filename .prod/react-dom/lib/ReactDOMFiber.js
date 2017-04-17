"use strict";function recursivelyAppendChildren(e,n){if(n){if(1===n.nodeType){e.appendChild(n)}else{var r=n;do{recursivelyAppendChildren(e,r.output)}while(r=r.sibling)}}}function warnAboutUnstableUse(){warned=!0}var ReactFiberReconciler=require("./ReactFiberReconciler"),warning=require("fbjs/lib/warning"),DOMRenderer=ReactFiberReconciler({updateContainer:function(e,n){e.innerHTML="";recursivelyAppendChildren(e,n)},createInstance:function(e,n,r){var t=document.createElement(e);recursivelyAppendChildren(t,r);"string"==typeof n.children&&(t.textContent=n.children);return t},prepareUpdate:function(e,n,r,t){return!0},commitUpdate:function(e,n,r,t){e.innerHTML="";recursivelyAppendChildren(e,t);"string"==typeof r.children&&(e.textContent=r.children)},deleteInstance:function(e){},scheduleAnimationCallback:window.requestAnimationFrame,scheduleDeferredCallback:window.requestIdleCallback}),warned=!1,ReactDOM={render:function(e,n){warnAboutUnstableUse();n._reactRootContainer?DOMRenderer.updateContainer(e,n._reactRootContainer):n._reactRootContainer=DOMRenderer.mountContainer(e,n)},unmountComponentAtNode:function(e){warnAboutUnstableUse();var n=e._reactRootContainer;if(n){e._reactRootContainer=null;DOMRenderer.unmountContainer(n)}}};module.exports=ReactDOM;