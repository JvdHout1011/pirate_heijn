var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.RNSVGUse=exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _extractProps=require("../lib/extract/extractProps");var _util=require("../lib/util");var _Shape2=_interopRequireDefault(require("./Shape"));var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/elements/Use.tsx";var Use=function(_Shape){(0,_inherits2.default)(Use,_Shape);function Use(){(0,_classCallCheck2.default)(this,Use);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Use).apply(this,arguments));}(0,_createClass2.default)(Use,[{key:"render",value:function render(){var props=this.props;var children=props.children,x=props.x,y=props.y,width=props.width,height=props.height,xlinkHref=props.xlinkHref,_props$href=props.href,href=_props$href===void 0?xlinkHref:_props$href;var matched=href&&href.match(_util.idPattern);var match=matched&&matched[1];if(!match){console.warn('Invalid `href` prop for `Use` element, expected a href like "#id", but got: "'+href+'"');}return _react.default.createElement(RNSVGUse,(0,_extends2.default)({ref:this.refMethod},(0,_extractProps.withoutXY)(this,props),{href:match,x:x,y:y,width:width,height:height,__source:{fileName:_jsxFileName,lineNumber:49}}),children);}}]);return Use;}(_Shape2.default);exports.default=Use;Use.displayName='Use';Use.defaultProps={x:0,y:0,width:0,height:0};var RNSVGUse=(0,_reactNative.requireNativeComponent)('RNSVGUse');exports.RNSVGUse=RNSVGUse;
//# sourceMappingURL=Use.js.map