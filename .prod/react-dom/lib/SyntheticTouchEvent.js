"use strict";function SyntheticTouchEvent(e,t,n,c){return SyntheticUIEvent.call(this,e,t,n,c)}var SyntheticUIEvent=require("./SyntheticUIEvent"),getEventModifierState=require("./getEventModifierState"),TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState};SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface);module.exports=SyntheticTouchEvent;