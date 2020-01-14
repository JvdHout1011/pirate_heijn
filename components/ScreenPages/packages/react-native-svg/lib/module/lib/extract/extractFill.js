import extractBrush from'./extractBrush';import extractOpacity from'./extractOpacity';import{colorNames,integerColor}from'./extractColor';var fillRules={evenodd:0,nonzero:1};var black=colorNames.black;var defaultFill=[0,integerColor(black)];export default function extractFill(props,styleProperties){var fill=props.fill,fillRule=props.fillRule,fillOpacity=props.fillOpacity;if(fill!=null){styleProperties.push('fill');}if(fillOpacity!=null){styleProperties.push('fillOpacity');}if(fillRule!=null){styleProperties.push('fillRule');}return{fill:!fill&&typeof fill!=='number'?defaultFill:extractBrush(fill),fillRule:fillRule&&fillRules[fillRule]===0?0:1,fillOpacity:extractOpacity(fillOpacity)};}
//# sourceMappingURL=extractFill.js.map