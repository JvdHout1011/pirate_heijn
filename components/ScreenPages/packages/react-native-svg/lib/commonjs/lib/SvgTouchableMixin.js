var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _reactNative=require("react-native");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};var Mixin=_reactNative.Touchable.Mixin;var _touchableHandleStartShouldSetResponder=Mixin.touchableHandleStartShouldSetResponder,_touchableHandleResponderTerminationRequest=Mixin.touchableHandleResponderTerminationRequest,_touchableHandleResponderGrant=Mixin.touchableHandleResponderGrant,_touchableHandleResponderMove=Mixin.touchableHandleResponderMove,_touchableHandleResponderRelease=Mixin.touchableHandleResponderRelease,_touchableHandleResponderTerminate=Mixin.touchableHandleResponderTerminate,touchableGetInitialState=Mixin.touchableGetInitialState;var SvgTouchableMixin=_objectSpread({},Mixin,{touchableHandleStartShouldSetResponder:function touchableHandleStartShouldSetResponder(e){var onStartShouldSetResponder=this.props.onStartShouldSetResponder;if(onStartShouldSetResponder){return onStartShouldSetResponder(e);}else{return _touchableHandleStartShouldSetResponder.call(this,e);}},touchableHandleResponderTerminationRequest:function touchableHandleResponderTerminationRequest(e){var onResponderTerminationRequest=this.props.onResponderTerminationRequest;if(onResponderTerminationRequest){return onResponderTerminationRequest(e);}else{return _touchableHandleResponderTerminationRequest.call(this,e);}},touchableHandleResponderGrant:function touchableHandleResponderGrant(e){var onResponderGrant=this.props.onResponderGrant;if(onResponderGrant){return onResponderGrant(e);}else{return _touchableHandleResponderGrant.call(this,e);}},touchableHandleResponderMove:function touchableHandleResponderMove(e){var onResponderMove=this.props.onResponderMove;if(onResponderMove){return onResponderMove(e);}else{return _touchableHandleResponderMove.call(this,e);}},touchableHandleResponderRelease:function touchableHandleResponderRelease(e){var onResponderRelease=this.props.onResponderRelease;if(onResponderRelease){return onResponderRelease(e);}else{return _touchableHandleResponderRelease.call(this,e);}},touchableHandleResponderTerminate:function touchableHandleResponderTerminate(e){var onResponderTerminate=this.props.onResponderTerminate;if(onResponderTerminate){return onResponderTerminate(e);}else{return _touchableHandleResponderTerminate.call(this,e);}},touchableHandlePress:function touchableHandlePress(e){var onPress=this.props.onPress;onPress&&onPress(e);},touchableHandleActivePressIn:function touchableHandleActivePressIn(e){var onPressIn=this.props.onPressIn;onPressIn&&onPressIn(e);},touchableHandleActivePressOut:function touchableHandleActivePressOut(e){var onPressOut=this.props.onPressOut;onPressOut&&onPressOut(e);},touchableHandleLongPress:function touchableHandleLongPress(e){var onLongPress=this.props.onLongPress;onLongPress&&onLongPress(e);},touchableGetPressRectOffset:function touchableGetPressRectOffset(){var pressRetentionOffset=this.props.pressRetentionOffset;return pressRetentionOffset||PRESS_RETENTION_OFFSET;},touchableGetHitSlop:function touchableGetHitSlop(){var hitSlop=this.props.hitSlop;return hitSlop;},touchableGetHighlightDelayMS:function touchableGetHighlightDelayMS(){var delayPressIn=this.props.delayPressIn;return delayPressIn||0;},touchableGetLongPressDelayMS:function touchableGetLongPressDelayMS(){var delayLongPress=this.props.delayLongPress;return delayLongPress===0?0:delayLongPress||500;},touchableGetPressOutDelayMS:function touchableGetPressOutDelayMS(){var delayPressOut=this.props.delayPressOut;return delayPressOut||0;}});var touchKeys=Object.keys(SvgTouchableMixin);var touchVals=touchKeys.map(function(key){return SvgTouchableMixin[key];});var numTouchKeys=touchKeys.length;var _default=function _default(target){for(var i=0;i<numTouchKeys;i++){var key=touchKeys[i];var val=touchVals[i];if(typeof val==='function'){target[key]=val.bind(target);}else{target[key]=val;}}target.state=touchableGetInitialState();};exports.default=_default;
//# sourceMappingURL=SvgTouchableMixin.js.map