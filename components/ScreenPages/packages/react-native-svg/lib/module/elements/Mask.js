import _extends from"@babel/runtime/helpers/extends";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/elements/Mask.tsx";import React from'react';import{requireNativeComponent}from'react-native';import extractTransform from'../lib/extract/extractTransform';import{withoutXY}from'../lib/extract/extractProps';import units from'../lib/units';import Shape from'./Shape';var Mask=function(_Shape){_inherits(Mask,_Shape);function Mask(){_classCallCheck(this,Mask);return _possibleConstructorReturn(this,_getPrototypeOf(Mask).apply(this,arguments));}_createClass(Mask,[{key:"render",value:function render(){var props=this.props;var maskTransform=props.maskTransform,transform=props.transform,x=props.x,y=props.y,width=props.width,height=props.height,maskUnits=props.maskUnits,maskContentUnits=props.maskContentUnits,children=props.children;return React.createElement(RNSVGMask,_extends({ref:this.refMethod},withoutXY(this,props),{x:x,y:y,width:width,height:height,maskTransform:extractTransform(maskTransform||transform||props),maskUnits:maskUnits!==undefined?units[maskUnits]:0,maskContentUnits:maskContentUnits!==undefined?units[maskContentUnits]:1,__source:{fileName:_jsxFileName,lineNumber:42}}),children);}}]);return Mask;}(Shape);Mask.displayName='Mask';Mask.defaultProps={x:'0%',y:'0%',width:'100%',height:'100%'};export{Mask as default};export var RNSVGMask=requireNativeComponent('RNSVGMask');
//# sourceMappingURL=Mask.js.map