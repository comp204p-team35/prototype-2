"use strict";function forceUpdateIfMounted(){this._rootNodeID&&ReactDOMTextarea.updateWrapper(this)}function _handleChange(e){var a=this._currentElement.props,t=LinkedValueUtils.executeOnChange(a,e);ReactUpdates.asap(forceUpdateIfMounted,this);return t}var _prodInvariant=require("./reactProdInvariant"),_assign=require("object-assign"),LinkedValueUtils=require("./LinkedValueUtils"),ReactDOMComponentTree=require("./ReactDOMComponentTree"),ReactUpdates=require("./ReactUpdates"),invariant=require("fbjs/lib/invariant"),warning=require("fbjs/lib/warning"),didWarnValueLink=!1,didWarnValDefaultVal=!1,ReactDOMTextarea={getHostProps:function(e,a){null!=a.dangerouslySetInnerHTML?_prodInvariant("91"):void 0;var t=_assign({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue,onChange:e._wrapperState.onChange});return t},mountWrapper:function(e,a){var t=LinkedValueUtils.getValue(a),n=t;if(null==t){var r=a.defaultValue,i=a.children;if(null!=i){null!=r?_prodInvariant("92"):void 0;if(Array.isArray(i)){i.length<=1?void 0:_prodInvariant("93");i=i[0]}r=""+i}null==r&&(r="");n=r}e._wrapperState={initialValue:""+n,listeners:null,onChange:_handleChange.bind(e)}},updateWrapper:function(e){var a=e._currentElement.props,t=ReactDOMComponentTree.getNodeFromInstance(e),n=LinkedValueUtils.getValue(a);if(null!=n){var r=""+n;r!==t.value&&(t.value=r);null==a.defaultValue&&(t.defaultValue=r)}null!=a.defaultValue&&(t.defaultValue=a.defaultValue)},postMountWrapper:function(e){var a=ReactDOMComponentTree.getNodeFromInstance(e),t=a.textContent;t===e._wrapperState.initialValue&&(a.value=t)}};module.exports=ReactDOMTextarea;