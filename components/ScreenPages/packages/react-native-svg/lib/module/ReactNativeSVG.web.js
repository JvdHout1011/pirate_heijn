import _createClass from"@babel/runtime/helpers/createClass";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _assertThisInitialized from"@babel/runtime/helpers/assertThisInitialized";import _inherits from"@babel/runtime/helpers/inherits";import _defineProperty from"@babel/runtime/helpers/defineProperty";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}import*as React from'react';import{createElement}from'react-native';import SvgTouchableMixin from'./lib/SvgTouchableMixin';import{resolve}from'./lib/resolve';var prepare=function prepare(self){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:self.props;var translate=props.translate,scale=props.scale,rotation=props.rotation,skewX=props.skewX,skewY=props.skewY,originX=props.originX,originY=props.originY,fontFamily=props.fontFamily,fontSize=props.fontSize,fontWeight=props.fontWeight,fontStyle=props.fontStyle,style=props.style,forwardedRef=props.forwardedRef,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,onLongPress=props.onLongPress,rest=_objectWithoutProperties(props,["translate","scale","rotation","skewX","skewY","originX","originY","fontFamily","fontSize","fontWeight","fontStyle","style","forwardedRef","onPress","onPressIn","onPressOut","onLongPress"]);var hasTouchableProperty=onPress||onPressIn||onPressOut||onLongPress;var clean=_objectSpread({},hasTouchableProperty?{onStartShouldSetResponder:self.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:self.touchableHandleResponderTerminationRequest,onResponderGrant:self.touchableHandleResponderGrant,onResponderMove:self.touchableHandleResponderMove,onResponderRelease:self.touchableHandleResponderRelease,onResponderTerminate:self.touchableHandleResponderTerminate}:null,{},rest);var transform=[];if(originX!=null||originY!=null){transform.push("translate("+(originX||0)+", "+(originY||0)+")");}if(translate!=null){transform.push("translate("+translate+")");}if(scale!=null){transform.push("scale("+scale+")");}if(rotation!=null){transform.push("rotate("+rotation+")");}if(skewX!=null){transform.push("skewX("+skewX+")");}if(skewY!=null){transform.push("skewY("+skewY+")");}if(originX!=null||originY!=null){transform.push("translate("+(-originX||0)+", "+(-originY||0)+")");}if(transform.length){clean.transform=transform.join(' ');}if(forwardedRef){clean.ref=forwardedRef;}var styles={};if(fontFamily!=null){styles.fontFamily=fontFamily;}if(fontSize!=null){styles.fontSize=fontSize;}if(fontWeight!=null){styles.fontWeight=fontWeight;}if(fontStyle!=null){styles.fontStyle=fontStyle;}clean.style=resolve(style,styles);return clean;};var getBoundingClientRect=function getBoundingClientRect(node){if(node){var isElement=node.nodeType===1;if(isElement&&typeof node.getBoundingClientRect==='function'){return node.getBoundingClientRect();}}};var measureLayout=function measureLayout(node,callback){var relativeNode=node&&node.parentNode;if(relativeNode){setTimeout(function(){var relativeRect=getBoundingClientRect(relativeNode);var _getBoundingClientRec=getBoundingClientRect(node),height=_getBoundingClientRec.height,left=_getBoundingClientRec.left,top=_getBoundingClientRec.top,width=_getBoundingClientRec.width;var x=left-relativeRect.left;var y=top-relativeRect.top;callback(x,y,width,height,left,top);},0);}};function remeasure(){var tag=this.state.touchable.responderID;if(tag==null){return;}measureLayout(tag,this._handleQueryLayout);}export var WebShape=function(_React$Component){_inherits(WebShape,_React$Component);function WebShape(props,context){var _this;_classCallCheck(this,WebShape);_this=_possibleConstructorReturn(this,_getPrototypeOf(WebShape).call(this,props,context));SvgTouchableMixin(_assertThisInitialized(_this));_this._remeasureMetricsOnActivation=remeasure.bind(_assertThisInitialized(_this));return _this;}return WebShape;}(React.Component);export var Circle=function(_WebShape){_inherits(Circle,_WebShape);function Circle(){_classCallCheck(this,Circle);return _possibleConstructorReturn(this,_getPrototypeOf(Circle).apply(this,arguments));}_createClass(Circle,[{key:"render",value:function render(){return createElement('circle',prepare(this));}}]);return Circle;}(WebShape);export var ClipPath=function(_WebShape2){_inherits(ClipPath,_WebShape2);function ClipPath(){_classCallCheck(this,ClipPath);return _possibleConstructorReturn(this,_getPrototypeOf(ClipPath).apply(this,arguments));}_createClass(ClipPath,[{key:"render",value:function render(){return createElement('clipPath',prepare(this));}}]);return ClipPath;}(WebShape);export var Defs=function(_WebShape3){_inherits(Defs,_WebShape3);function Defs(){_classCallCheck(this,Defs);return _possibleConstructorReturn(this,_getPrototypeOf(Defs).apply(this,arguments));}_createClass(Defs,[{key:"render",value:function render(){return createElement('defs',prepare(this));}}]);return Defs;}(WebShape);export var Ellipse=function(_WebShape4){_inherits(Ellipse,_WebShape4);function Ellipse(){_classCallCheck(this,Ellipse);return _possibleConstructorReturn(this,_getPrototypeOf(Ellipse).apply(this,arguments));}_createClass(Ellipse,[{key:"render",value:function render(){return createElement('ellipse',prepare(this));}}]);return Ellipse;}(WebShape);export var G=function(_WebShape5){_inherits(G,_WebShape5);function G(){_classCallCheck(this,G);return _possibleConstructorReturn(this,_getPrototypeOf(G).apply(this,arguments));}_createClass(G,[{key:"render",value:function render(){var _this$props=this.props,x=_this$props.x,y=_this$props.y,rest=_objectWithoutProperties(_this$props,["x","y"]);if((x||y)&&!rest.translate){rest.translate=(x||0)+", "+(y||0);}return createElement('g',prepare(this,rest));}}]);return G;}(WebShape);export var Image=function(_WebShape6){_inherits(Image,_WebShape6);function Image(){_classCallCheck(this,Image);return _possibleConstructorReturn(this,_getPrototypeOf(Image).apply(this,arguments));}_createClass(Image,[{key:"render",value:function render(){return createElement('image',prepare(this));}}]);return Image;}(WebShape);export var Line=function(_WebShape7){_inherits(Line,_WebShape7);function Line(){_classCallCheck(this,Line);return _possibleConstructorReturn(this,_getPrototypeOf(Line).apply(this,arguments));}_createClass(Line,[{key:"render",value:function render(){return createElement('line',prepare(this));}}]);return Line;}(WebShape);export var LinearGradient=function(_WebShape8){_inherits(LinearGradient,_WebShape8);function LinearGradient(){_classCallCheck(this,LinearGradient);return _possibleConstructorReturn(this,_getPrototypeOf(LinearGradient).apply(this,arguments));}_createClass(LinearGradient,[{key:"render",value:function render(){return createElement('linearGradient',prepare(this));}}]);return LinearGradient;}(WebShape);export var Path=function(_WebShape9){_inherits(Path,_WebShape9);function Path(){_classCallCheck(this,Path);return _possibleConstructorReturn(this,_getPrototypeOf(Path).apply(this,arguments));}_createClass(Path,[{key:"render",value:function render(){return createElement('path',prepare(this));}}]);return Path;}(WebShape);export var Polygon=function(_WebShape10){_inherits(Polygon,_WebShape10);function Polygon(){_classCallCheck(this,Polygon);return _possibleConstructorReturn(this,_getPrototypeOf(Polygon).apply(this,arguments));}_createClass(Polygon,[{key:"render",value:function render(){return createElement('polygon',prepare(this));}}]);return Polygon;}(WebShape);export var Polyline=function(_WebShape11){_inherits(Polyline,_WebShape11);function Polyline(){_classCallCheck(this,Polyline);return _possibleConstructorReturn(this,_getPrototypeOf(Polyline).apply(this,arguments));}_createClass(Polyline,[{key:"render",value:function render(){return createElement('polyline',prepare(this));}}]);return Polyline;}(WebShape);export var RadialGradient=function(_WebShape12){_inherits(RadialGradient,_WebShape12);function RadialGradient(){_classCallCheck(this,RadialGradient);return _possibleConstructorReturn(this,_getPrototypeOf(RadialGradient).apply(this,arguments));}_createClass(RadialGradient,[{key:"render",value:function render(){return createElement('radialGradient',prepare(this));}}]);return RadialGradient;}(WebShape);export var Rect=function(_WebShape13){_inherits(Rect,_WebShape13);function Rect(){_classCallCheck(this,Rect);return _possibleConstructorReturn(this,_getPrototypeOf(Rect).apply(this,arguments));}_createClass(Rect,[{key:"render",value:function render(){return createElement('rect',prepare(this));}}]);return Rect;}(WebShape);export var Stop=function(_WebShape14){_inherits(Stop,_WebShape14);function Stop(){_classCallCheck(this,Stop);return _possibleConstructorReturn(this,_getPrototypeOf(Stop).apply(this,arguments));}_createClass(Stop,[{key:"render",value:function render(){return createElement('stop',prepare(this));}}]);return Stop;}(WebShape);export var Svg=function(_WebShape15){_inherits(Svg,_WebShape15);function Svg(){_classCallCheck(this,Svg);return _possibleConstructorReturn(this,_getPrototypeOf(Svg).apply(this,arguments));}_createClass(Svg,[{key:"render",value:function render(){return createElement('svg',prepare(this));}}]);return Svg;}(WebShape);export var Symbol=function(_WebShape16){_inherits(Symbol,_WebShape16);function Symbol(){_classCallCheck(this,Symbol);return _possibleConstructorReturn(this,_getPrototypeOf(Symbol).apply(this,arguments));}_createClass(Symbol,[{key:"render",value:function render(){return createElement('symbol',prepare(this));}}]);return Symbol;}(WebShape);export var Text=function(_WebShape17){_inherits(Text,_WebShape17);function Text(){_classCallCheck(this,Text);return _possibleConstructorReturn(this,_getPrototypeOf(Text).apply(this,arguments));}_createClass(Text,[{key:"render",value:function render(){return createElement('text',prepare(this));}}]);return Text;}(WebShape);export var TSpan=function(_WebShape18){_inherits(TSpan,_WebShape18);function TSpan(){_classCallCheck(this,TSpan);return _possibleConstructorReturn(this,_getPrototypeOf(TSpan).apply(this,arguments));}_createClass(TSpan,[{key:"render",value:function render(){return createElement('tspan',prepare(this));}}]);return TSpan;}(WebShape);export var TextPath=function(_WebShape19){_inherits(TextPath,_WebShape19);function TextPath(){_classCallCheck(this,TextPath);return _possibleConstructorReturn(this,_getPrototypeOf(TextPath).apply(this,arguments));}_createClass(TextPath,[{key:"render",value:function render(){return createElement('textPath',prepare(this));}}]);return TextPath;}(WebShape);export var Use=function(_WebShape20){_inherits(Use,_WebShape20);function Use(){_classCallCheck(this,Use);return _possibleConstructorReturn(this,_getPrototypeOf(Use).apply(this,arguments));}_createClass(Use,[{key:"render",value:function render(){return createElement('use',prepare(this));}}]);return Use;}(WebShape);export var Mask=function(_WebShape21){_inherits(Mask,_WebShape21);function Mask(){_classCallCheck(this,Mask);return _possibleConstructorReturn(this,_getPrototypeOf(Mask).apply(this,arguments));}_createClass(Mask,[{key:"render",value:function render(){return createElement('mask',prepare(this));}}]);return Mask;}(WebShape);export var ForeignObject=function(_WebShape22){_inherits(ForeignObject,_WebShape22);function ForeignObject(){_classCallCheck(this,ForeignObject);return _possibleConstructorReturn(this,_getPrototypeOf(ForeignObject).apply(this,arguments));}_createClass(ForeignObject,[{key:"render",value:function render(){return createElement('foreignObject',prepare(this));}}]);return ForeignObject;}(WebShape);export var Marker=function(_WebShape23){_inherits(Marker,_WebShape23);function Marker(){_classCallCheck(this,Marker);return _possibleConstructorReturn(this,_getPrototypeOf(Marker).apply(this,arguments));}_createClass(Marker,[{key:"render",value:function render(){return createElement('marker',prepare(this));}}]);return Marker;}(WebShape);export var Pattern=function(_WebShape24){_inherits(Pattern,_WebShape24);function Pattern(){_classCallCheck(this,Pattern);return _possibleConstructorReturn(this,_getPrototypeOf(Pattern).apply(this,arguments));}_createClass(Pattern,[{key:"render",value:function render(){return createElement('pattern',prepare(this));}}]);return Pattern;}(WebShape);export default Svg;
//# sourceMappingURL=ReactNativeSVG.web.js.map