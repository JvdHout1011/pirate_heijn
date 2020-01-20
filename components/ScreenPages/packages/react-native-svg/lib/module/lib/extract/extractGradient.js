import React,{Children}from'react';import extractColor from'./extractColor';import extractOpacity from'./extractOpacity';import extractTransform from'./extractTransform';import units from'../units';var percentReg=/^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/;function percentToFloat(percent){if(typeof percent==='number'){return percent;}if(typeof percent==='object'&&typeof percent.__getAnimatedValue==='function'){return percent.__getAnimatedValue();}var matched=typeof percent==='string'&&percent.match(percentReg);if(!matched){console.warn("\""+percent+"\" is not a valid number or percentage string.");return 0;}return matched[2]?+matched[1]/100:+matched[1];}var offsetComparator=function offsetComparator(object,other){return object[0]-other[0];};export default function extractGradient(props,parent){var id=props.id,children=props.children,gradientTransform=props.gradientTransform,transform=props.transform,gradientUnits=props.gradientUnits;if(!id){return null;}var stops=[];var childArray=children?Children.map(children,function(child){return React.cloneElement(child,{parent:parent});}):[];var l=childArray.length;for(var i=0;i<l;i++){var _childArray$i$props=childArray[i].props,style=_childArray$i$props.style,_childArray$i$props$o=_childArray$i$props.offset,offset=_childArray$i$props$o===void 0?style&&style.offset:_childArray$i$props$o,_childArray$i$props$s=_childArray$i$props.stopColor,stopColor=_childArray$i$props$s===void 0?style&&style.stopColor||'#000':_childArray$i$props$s,_childArray$i$props$s2=_childArray$i$props.stopOpacity,stopOpacity=_childArray$i$props$s2===void 0?style&&style.stopOpacity:_childArray$i$props$s2;var offsetNumber=percentToFloat(offset||0);var color=stopColor&&extractColor(stopColor);if(typeof color!=='number'||isNaN(offsetNumber)){console.warn("\""+stopColor+"\" is not a valid color or \""+offset+"\" is not a valid offset");continue;}var alpha=Math.round(extractOpacity(stopOpacity)*255);stops.push([offsetNumber,color&0x00ffffff|alpha<<24]);}stops.sort(offsetComparator);var gradient=[];var k=stops.length;for(var j=0;j<k;j++){var s=stops[j];gradient.push(s[0],s[1]);}return{name:id,gradient:gradient,children:childArray,gradientUnits:gradientUnits&&units[gradientUnits]||0,gradientTransform:extractTransform(gradientTransform||transform||props)};}
//# sourceMappingURL=extractGradient.js.map