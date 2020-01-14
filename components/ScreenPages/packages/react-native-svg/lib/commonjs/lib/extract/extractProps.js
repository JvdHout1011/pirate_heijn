var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.propsAndStyles=propsAndStyles;exports.default=extractProps;exports.extract=extract;exports.withoutXY=withoutXY;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _extractFill=_interopRequireDefault(require("./extractFill"));var _extractStroke=_interopRequireDefault(require("./extractStroke"));var _extractTransform=require("./extractTransform");var _extractResponder=_interopRequireDefault(require("./extractResponder"));var _extractOpacity=_interopRequireDefault(require("./extractOpacity"));var _util=require("../util");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var clipRules={evenodd:0,nonzero:1};function propsAndStyles(props){var style=props.style;return!style?props:_objectSpread({},Array.isArray(style)?Object.assign.apply(Object,[{}].concat((0,_toConsumableArray2.default)(style))):style,{},props);}function getMarker(marker){if(!marker){return undefined;}var matched=marker.match(_util.idPattern);return matched?matched[1]:undefined;}function extractProps(props,ref){var id=props.id,opacity=props.opacity,onLayout=props.onLayout,clipPath=props.clipPath,clipRule=props.clipRule,display=props.display,mask=props.mask,marker=props.marker,_props$markerStart=props.markerStart,markerStart=_props$markerStart===void 0?marker:_props$markerStart,_props$markerMid=props.markerMid,markerMid=_props$markerMid===void 0?marker:_props$markerMid,_props$markerEnd=props.markerEnd,markerEnd=_props$markerEnd===void 0?marker:_props$markerEnd,transform=props.transform;var styleProperties=[];var transformProps=(0,_extractTransform.props2transform)(props);var matrix=(0,_extractTransform.transformToMatrix)(transformProps,transform);var extracted=_objectSpread({matrix:matrix},transformProps,{propList:styleProperties,opacity:(0,_extractOpacity.default)(opacity)},(0,_extractResponder.default)(props,ref),{},(0,_extractFill.default)(props,styleProperties),{},(0,_extractStroke.default)(props,styleProperties),{display:display==='none'?'none':undefined});if(onLayout){extracted.onLayout=onLayout;}if(markerStart){extracted.markerStart=getMarker(markerStart);}if(markerMid){extracted.markerMid=getMarker(markerMid);}if(markerEnd){extracted.markerEnd=getMarker(markerEnd);}if(id){extracted.name=String(id);}if(clipRule){extracted.clipRule=clipRules[clipRule]===0?0:1;}if(clipPath){var matched=clipPath.match(_util.idPattern);if(matched){extracted.clipPath=matched[1];}else{console.warn('Invalid `clipPath` prop, expected a clipPath like "#id", but got: "'+clipPath+'"');}}if(mask){var _matched=mask.match(_util.idPattern);if(_matched){extracted.mask=_matched[1];}else{console.warn('Invalid `mask` prop, expected a mask like "#id", but got: "'+mask+'"');}}return extracted;}function extract(instance,props){return extractProps(propsAndStyles(props),instance);}function withoutXY(instance,props){return extractProps(_objectSpread({},propsAndStyles(props),{x:null,y:null}),instance);}
//# sourceMappingURL=extractProps.js.map