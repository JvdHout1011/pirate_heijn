import _extends from"@babel/runtime/helpers/extends";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/elements/Line.tsx";import React from'react';import{requireNativeComponent}from'react-native';import{extract}from'../lib/extract/extractProps';import Shape from'./Shape';var Line=function(_Shape){_inherits(Line,_Shape);function Line(){_classCallCheck(this,Line);return _possibleConstructorReturn(this,_getPrototypeOf(Line).apply(this,arguments));}_createClass(Line,[{key:"render",value:function render(){var props=this.props;var x1=props.x1,y1=props.y1,x2=props.x2,y2=props.y2;return React.createElement(RNSVGLine,_extends({ref:this.refMethod},extract(this,props),{x1:x1,y1:y1,x2:x2,y2:y2,__source:{fileName:_jsxFileName,lineNumber:26}}));}}]);return Line;}(Shape);Line.displayName='Line';Line.defaultProps={x1:0,y1:0,x2:0,y2:0};export{Line as default};export var RNSVGLine=requireNativeComponent('RNSVGLine');
//# sourceMappingURL=Line.js.map