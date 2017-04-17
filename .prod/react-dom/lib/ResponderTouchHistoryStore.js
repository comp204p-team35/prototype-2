"use strict";function timestampForTouch(e){return e.timeStamp||e.timestamp}function createTouchRecord(e){return{touchActive:!0,startPageX:e.pageX,startPageY:e.pageY,startTimeStamp:timestampForTouch(e),currentPageX:e.pageX,currentPageY:e.pageY,currentTimeStamp:timestampForTouch(e),previousPageX:e.pageX,previousPageY:e.pageY,previousTimeStamp:timestampForTouch(e)}}function resetTouchRecord(e,t){e.touchActive=!0;e.startPageX=t.pageX;e.startPageY=t.pageY;e.startTimeStamp=timestampForTouch(t);e.currentPageX=t.pageX;e.currentPageY=t.pageY;e.currentTimeStamp=timestampForTouch(t);e.previousPageX=t.pageX;e.previousPageY=t.pageY;e.previousTimeStamp=timestampForTouch(t)}function getTouchIdentifier(e){var t=e.identifier;null==t?_prodInvariant("138"):void 0;return t}function recordTouchStart(e){var t=getTouchIdentifier(e),r=touchBank[t];r?resetTouchRecord(r,e):touchBank[t]=createTouchRecord(e);touchHistory.mostRecentTimeStamp=timestampForTouch(e)}function recordTouchMove(e){var t=touchBank[getTouchIdentifier(e)];if(t){t.touchActive=!0;t.previousPageX=t.currentPageX;t.previousPageY=t.currentPageY;t.previousTimeStamp=t.currentTimeStamp;t.currentPageX=e.pageX;t.currentPageY=e.pageY;t.currentTimeStamp=timestampForTouch(e);touchHistory.mostRecentTimeStamp=timestampForTouch(e)}else{console.error("Cannot record touch move without a touch start.\nTouch Move: %s\n","Touch Bank: %s",printTouch(e),printTouchBank())}}function recordTouchEnd(e){var t=touchBank[getTouchIdentifier(e)];if(t){t.touchActive=!1;t.previousPageX=t.currentPageX;t.previousPageY=t.currentPageY;t.previousTimeStamp=t.currentTimeStamp;t.currentPageX=e.pageX;t.currentPageY=e.pageY;t.currentTimeStamp=timestampForTouch(e);touchHistory.mostRecentTimeStamp=timestampForTouch(e)}else{console.error("Cannot record touch end without a touch start.\nTouch End: %s\n","Touch Bank: %s",printTouch(e),printTouchBank())}}function printTouch(e){return JSON.stringify({identifier:e.identifier,pageX:e.pageX,pageY:e.pageY,timestamp:timestampForTouch(e)})}function printTouchBank(){var e=JSON.stringify(touchBank.slice(0,MAX_TOUCH_BANK));touchBank.length>MAX_TOUCH_BANK&&(e+=" (original size: "+touchBank.length+")");return e}var _prodInvariant=require("./reactProdInvariant"),EventPluginUtils=require("./EventPluginUtils"),invariant=require("fbjs/lib/invariant"),warning=require("fbjs/lib/warning"),isEndish=EventPluginUtils.isEndish,isMoveish=EventPluginUtils.isMoveish,isStartish=EventPluginUtils.isStartish,MAX_TOUCH_BANK=20,touchBank=[],touchHistory={touchBank:touchBank,numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0},ResponderTouchHistoryStore={recordTouchTrack:function(e,t){if(isMoveish(e)){t.changedTouches.forEach(recordTouchMove)}else{if(isStartish(e)){t.changedTouches.forEach(recordTouchStart);touchHistory.numberActiveTouches=t.touches.length;1===touchHistory.numberActiveTouches&&(touchHistory.indexOfSingleActiveTouch=t.touches[0].identifier)}else{if(isEndish(e)){t.changedTouches.forEach(recordTouchEnd);touchHistory.numberActiveTouches=t.touches.length;if(1===touchHistory.numberActiveTouches){for(var r=0;r<touchBank.length;r++){var o=touchBank[r];if(null!=o&&o.touchActive){touchHistory.indexOfSingleActiveTouch=r;break}}}}}}},touchHistory:touchHistory};module.exports=ResponderTouchHistoryStore;