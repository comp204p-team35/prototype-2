"use strict";function warnNoop(e,t){}var warning=require("fbjs/lib/warning"),ReactNoopUpdateQueue={isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){warnNoop(e,"forceUpdate")},enqueueReplaceState:function(e,t){warnNoop(e,"replaceState")},enqueueSetState:function(e,t){warnNoop(e,"setState")}};module.exports=ReactNoopUpdateQueue;