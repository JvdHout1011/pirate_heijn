import _extends from"@babel/runtime/helpers/extends";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/elements/Pattern.tsx";import React from'react';import{requireNativeComponent}from'react-native';import extractTransform from'../lib/extract/extractTransform';import extractViewBox from'../lib/extract/extractViewBox';import units from'../lib/units';import Shape from'./Shape';var Pattern=function(_Shape){_inherits(Pattern,_Shape);function Pattern(){_classCallCheck(this,Pattern);return _possibleConstructorReturn(this,_getPrototypeOf(Pattern).apply(this,arguments));}_createClass(Pattern,[{key:"render",value:function render(){var props=this.props;var patternTransform=props.patternTransform,transform=props.transform,id=props.id,x=props.x,y=props.y,width=props.width,height=props.height,patternUnits=props.patternUnits,patternContentUnits=props.patternContentUnits,children=props.children,viewBox=props.viewBox,preserveAspectRatio=props.preserveAspectRatio;var matrix=extractTransform(patternTransform||transform||props);return React.createElement(RNSVGPattern,_extends({ref:this.refMethod,name:id,x:x,y:y,width:width,height:height,matrix:matrix,patternTransform:matrix,patternUnits:patternUnits&&units[patternUnits]||0,patternContentUnits:patternContentUnits?units[patternContentUnits]:1},extractViewBox({viewBox:viewBox,preserveAspectRatio:preserveAspectRatio}),{__source:{fileName:_jsxFileName,lineNumber:49}}),children);}}]);return Pattern;}(Shape);Pattern.displayName='Pattern';Pattern.defaultProps={x:'0%',y:'0%',width:'100%',height:'100%'};export{Pattern as default};export var RNSVGPattern=requireNativeComponent('RNSVGPattern');
//# sourceMappingURL=Pattern.js.map