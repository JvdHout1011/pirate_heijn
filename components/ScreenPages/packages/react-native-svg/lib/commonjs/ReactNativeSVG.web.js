var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.Pattern=exports.Marker=exports.ForeignObject=exports.Mask=exports.Use=exports.TextPath=exports.TSpan=exports.Text=exports.Symbol=exports.Svg=exports.Stop=exports.Rect=exports.RadialGradient=exports.Polyline=exports.Polygon=exports.Path=exports.LinearGradient=exports.Line=exports.Image=exports.G=exports.Ellipse=exports.Defs=exports.ClipPath=exports.Circle=exports.WebShape=void 0;var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _SvgTouchableMixin=_interopRequireDefault(require("./lib/SvgTouchableMixin"));var _resolve=require("./lib/resolve");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var prepare=function prepare(self){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:self.props;var translate=props.translate,scale=props.scale,rotation=props.rotation,skewX=props.skewX,skewY=props.skewY,originX=props.originX,originY=props.originY,fontFamily=props.fontFamily,fontSize=props.fontSize,fontWeight=props.fontWeight,fontStyle=props.fontStyle,style=props.style,forwardedRef=props.forwardedRef,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,onLongPress=props.onLongPress,rest=(0,_objectWithoutProperties2.default)(props,["translate","scale","rotation","skewX","skewY","originX","originY","fontFamily","fontSize","fontWeight","fontStyle","style","forwardedRef","onPress","onPressIn","onPressOut","onLongPress"]);var hasTouchableProperty=onPress||onPressIn||onPressOut||onLongPress;var clean=_objectSpread({},hasTouchableProperty?{onStartShouldSetResponder:self.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:self.touchableHandleResponderTerminationRequest,onResponderGrant:self.touchableHandleResponderGrant,onResponderMove:self.touchableHandleResponderMove,onResponderRelease:self.touchableHandleResponderRelease,onResponderTerminate:self.touchableHandleResponderTerminate}:null,{},rest);var transform=[];if(originX!=null||originY!=null){transform.push("translate("+(originX||0)+", "+(originY||0)+")");}if(translate!=null){transform.push("translate("+translate+")");}if(scale!=null){transform.push("scale("+scale+")");}if(rotation!=null){transform.push("rotate("+rotation+")");}if(skewX!=null){transform.push("skewX("+skewX+")");}if(skewY!=null){transform.push("skewY("+skewY+")");}if(originX!=null||originY!=null){transform.push("translate("+(-originX||0)+", "+(-originY||0)+")");}if(transform.length){clean.transform=transform.join(' ');}if(forwardedRef){clean.ref=forwardedRef;}var styles={};if(fontFamily!=null){styles.fontFamily=fontFamily;}if(fontSize!=null){styles.fontSize=fontSize;}if(fontWeight!=null){styles.fontWeight=fontWeight;}if(fontStyle!=null){styles.fontStyle=fontStyle;}clean.style=(0,_resolve.resolve)(style,styles);return clean;};var getBoundingClientRect=function getBoundingClientRect(node){if(node){var isElement=node.nodeType===1;if(isElement&&typeof node.getBoundingClientRect==='function'){return node.getBoundingClientRect();}}};var measureLayout=function measureLayout(node,callback){var relativeNode=node&&node.parentNode;if(relativeNode){setTimeout(function(){var relativeRect=getBoundingClientRect(relativeNode);var _getBoundingClientRec=getBoundingClientRect(node),height=_getBoundingClientRec.height,left=_getBoundingClientRec.left,top=_getBoundingClientRec.top,width=_getBoundingClientRec.width;var x=left-relativeRect.left;var y=top-relativeRect.top;callback(x,y,width,height,left,top);},0);}};function remeasure(){var tag=this.state.touchable.responderID;if(tag==null){return;}measureLayout(tag,this._handleQueryLayout);}var WebShape=function(_React$Component){(0,_inherits2.default)(WebShape,_React$Component);function WebShape(props,context){var _this;(0,_classCallCheck2.default)(this,WebShape);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(WebShape).call(this,props,context));(0,_SvgTouchableMixin.default)((0,_assertThisInitialized2.default)(_this));_this._remeasureMetricsOnActivation=remeasure.bind((0,_assertThisInitialized2.default)(_this));return _this;}return WebShape;}(React.Component);exports.WebShape=WebShape;var Circle=function(_WebShape){(0,_inherits2.default)(Circle,_WebShape);function Circle(){(0,_classCallCheck2.default)(this,Circle);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Circle).apply(this,arguments));}(0,_createClass2.default)(Circle,[{key:"render",value:function render(){return(0,_reactNative.createElement)('circle',prepare(this));}}]);return Circle;}(WebShape);exports.Circle=Circle;var ClipPath=function(_WebShape2){(0,_inherits2.default)(ClipPath,_WebShape2);function ClipPath(){(0,_classCallCheck2.default)(this,ClipPath);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ClipPath).apply(this,arguments));}(0,_createClass2.default)(ClipPath,[{key:"render",value:function render(){return(0,_reactNative.createElement)('clipPath',prepare(this));}}]);return ClipPath;}(WebShape);exports.ClipPath=ClipPath;var Defs=function(_WebShape3){(0,_inherits2.default)(Defs,_WebShape3);function Defs(){(0,_classCallCheck2.default)(this,Defs);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Defs).apply(this,arguments));}(0,_createClass2.default)(Defs,[{key:"render",value:function render(){return(0,_reactNative.createElement)('defs',prepare(this));}}]);return Defs;}(WebShape);exports.Defs=Defs;var Ellipse=function(_WebShape4){(0,_inherits2.default)(Ellipse,_WebShape4);function Ellipse(){(0,_classCallCheck2.default)(this,Ellipse);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Ellipse).apply(this,arguments));}(0,_createClass2.default)(Ellipse,[{key:"render",value:function render(){return(0,_reactNative.createElement)('ellipse',prepare(this));}}]);return Ellipse;}(WebShape);exports.Ellipse=Ellipse;var G=function(_WebShape5){(0,_inherits2.default)(G,_WebShape5);function G(){(0,_classCallCheck2.default)(this,G);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(G).apply(this,arguments));}(0,_createClass2.default)(G,[{key:"render",value:function render(){var _this$props=this.props,x=_this$props.x,y=_this$props.y,rest=(0,_objectWithoutProperties2.default)(_this$props,["x","y"]);if((x||y)&&!rest.translate){rest.translate=(x||0)+", "+(y||0);}return(0,_reactNative.createElement)('g',prepare(this,rest));}}]);return G;}(WebShape);exports.G=G;var Image=function(_WebShape6){(0,_inherits2.default)(Image,_WebShape6);function Image(){(0,_classCallCheck2.default)(this,Image);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Image).apply(this,arguments));}(0,_createClass2.default)(Image,[{key:"render",value:function render(){return(0,_reactNative.createElement)('image',prepare(this));}}]);return Image;}(WebShape);exports.Image=Image;var Line=function(_WebShape7){(0,_inherits2.default)(Line,_WebShape7);function Line(){(0,_classCallCheck2.default)(this,Line);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Line).apply(this,arguments));}(0,_createClass2.default)(Line,[{key:"render",value:function render(){return(0,_reactNative.createElement)('line',prepare(this));}}]);return Line;}(WebShape);exports.Line=Line;var LinearGradient=function(_WebShape8){(0,_inherits2.default)(LinearGradient,_WebShape8);function LinearGradient(){(0,_classCallCheck2.default)(this,LinearGradient);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(LinearGradient).apply(this,arguments));}(0,_createClass2.default)(LinearGradient,[{key:"render",value:function render(){return(0,_reactNative.createElement)('linearGradient',prepare(this));}}]);return LinearGradient;}(WebShape);exports.LinearGradient=LinearGradient;var Path=function(_WebShape9){(0,_inherits2.default)(Path,_WebShape9);function Path(){(0,_classCallCheck2.default)(this,Path);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Path).apply(this,arguments));}(0,_createClass2.default)(Path,[{key:"render",value:function render(){return(0,_reactNative.createElement)('path',prepare(this));}}]);return Path;}(WebShape);exports.Path=Path;var Polygon=function(_WebShape10){(0,_inherits2.default)(Polygon,_WebShape10);function Polygon(){(0,_classCallCheck2.default)(this,Polygon);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Polygon).apply(this,arguments));}(0,_createClass2.default)(Polygon,[{key:"render",value:function render(){return(0,_reactNative.createElement)('polygon',prepare(this));}}]);return Polygon;}(WebShape);exports.Polygon=Polygon;var Polyline=function(_WebShape11){(0,_inherits2.default)(Polyline,_WebShape11);function Polyline(){(0,_classCallCheck2.default)(this,Polyline);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Polyline).apply(this,arguments));}(0,_createClass2.default)(Polyline,[{key:"render",value:function render(){return(0,_reactNative.createElement)('polyline',prepare(this));}}]);return Polyline;}(WebShape);exports.Polyline=Polyline;var RadialGradient=function(_WebShape12){(0,_inherits2.default)(RadialGradient,_WebShape12);function RadialGradient(){(0,_classCallCheck2.default)(this,RadialGradient);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(RadialGradient).apply(this,arguments));}(0,_createClass2.default)(RadialGradient,[{key:"render",value:function render(){return(0,_reactNative.createElement)('radialGradient',prepare(this));}}]);return RadialGradient;}(WebShape);exports.RadialGradient=RadialGradient;var Rect=function(_WebShape13){(0,_inherits2.default)(Rect,_WebShape13);function Rect(){(0,_classCallCheck2.default)(this,Rect);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Rect).apply(this,arguments));}(0,_createClass2.default)(Rect,[{key:"render",value:function render(){return(0,_reactNative.createElement)('rect',prepare(this));}}]);return Rect;}(WebShape);exports.Rect=Rect;var Stop=function(_WebShape14){(0,_inherits2.default)(Stop,_WebShape14);function Stop(){(0,_classCallCheck2.default)(this,Stop);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Stop).apply(this,arguments));}(0,_createClass2.default)(Stop,[{key:"render",value:function render(){return(0,_reactNative.createElement)('stop',prepare(this));}}]);return Stop;}(WebShape);exports.Stop=Stop;var Svg=function(_WebShape15){(0,_inherits2.default)(Svg,_WebShape15);function Svg(){(0,_classCallCheck2.default)(this,Svg);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Svg).apply(this,arguments));}(0,_createClass2.default)(Svg,[{key:"render",value:function render(){return(0,_reactNative.createElement)('svg',prepare(this));}}]);return Svg;}(WebShape);exports.Svg=Svg;var Symbol=function(_WebShape16){(0,_inherits2.default)(Symbol,_WebShape16);function Symbol(){(0,_classCallCheck2.default)(this,Symbol);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Symbol).apply(this,arguments));}(0,_createClass2.default)(Symbol,[{key:"render",value:function render(){return(0,_reactNative.createElement)('symbol',prepare(this));}}]);return Symbol;}(WebShape);exports.Symbol=Symbol;var Text=function(_WebShape17){(0,_inherits2.default)(Text,_WebShape17);function Text(){(0,_classCallCheck2.default)(this,Text);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Text).apply(this,arguments));}(0,_createClass2.default)(Text,[{key:"render",value:function render(){return(0,_reactNative.createElement)('text',prepare(this));}}]);return Text;}(WebShape);exports.Text=Text;var TSpan=function(_WebShape18){(0,_inherits2.default)(TSpan,_WebShape18);function TSpan(){(0,_classCallCheck2.default)(this,TSpan);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TSpan).apply(this,arguments));}(0,_createClass2.default)(TSpan,[{key:"render",value:function render(){return(0,_reactNative.createElement)('tspan',prepare(this));}}]);return TSpan;}(WebShape);exports.TSpan=TSpan;var TextPath=function(_WebShape19){(0,_inherits2.default)(TextPath,_WebShape19);function TextPath(){(0,_classCallCheck2.default)(this,TextPath);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TextPath).apply(this,arguments));}(0,_createClass2.default)(TextPath,[{key:"render",value:function render(){return(0,_reactNative.createElement)('textPath',prepare(this));}}]);return TextPath;}(WebShape);exports.TextPath=TextPath;var Use=function(_WebShape20){(0,_inherits2.default)(Use,_WebShape20);function Use(){(0,_classCallCheck2.default)(this,Use);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Use).apply(this,arguments));}(0,_createClass2.default)(Use,[{key:"render",value:function render(){return(0,_reactNative.createElement)('use',prepare(this));}}]);return Use;}(WebShape);exports.Use=Use;var Mask=function(_WebShape21){(0,_inherits2.default)(Mask,_WebShape21);function Mask(){(0,_classCallCheck2.default)(this,Mask);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Mask).apply(this,arguments));}(0,_createClass2.default)(Mask,[{key:"render",value:function render(){return(0,_reactNative.createElement)('mask',prepare(this));}}]);return Mask;}(WebShape);exports.Mask=Mask;var ForeignObject=function(_WebShape22){(0,_inherits2.default)(ForeignObject,_WebShape22);function ForeignObject(){(0,_classCallCheck2.default)(this,ForeignObject);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ForeignObject).apply(this,arguments));}(0,_createClass2.default)(ForeignObject,[{key:"render",value:function render(){return(0,_reactNative.createElement)('foreignObject',prepare(this));}}]);return ForeignObject;}(WebShape);exports.ForeignObject=ForeignObject;var Marker=function(_WebShape23){(0,_inherits2.default)(Marker,_WebShape23);function Marker(){(0,_classCallCheck2.default)(this,Marker);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Marker).apply(this,arguments));}(0,_createClass2.default)(Marker,[{key:"render",value:function render(){return(0,_reactNative.createElement)('marker',prepare(this));}}]);return Marker;}(WebShape);exports.Marker=Marker;var Pattern=function(_WebShape24){(0,_inherits2.default)(Pattern,_WebShape24);function Pattern(){(0,_classCallCheck2.default)(this,Pattern);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Pattern).apply(this,arguments));}(0,_createClass2.default)(Pattern,[{key:"render",value:function render(){return(0,_reactNative.createElement)('pattern',prepare(this));}}]);return Pattern;}(WebShape);exports.Pattern=Pattern;var _default=Svg;exports.default=_default;
//# sourceMappingURL=ReactNativeSVG.web.js.map