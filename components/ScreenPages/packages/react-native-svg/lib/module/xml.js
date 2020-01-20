import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import _regeneratorRuntime from"@babel/runtime/regenerator";import _extends from"@babel/runtime/helpers/extends";var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/xml.tsx";import React,{Component,useEffect,useMemo,useState}from'react';import Rect from'./elements/Rect';import Circle from'./elements/Circle';import Ellipse from'./elements/Ellipse';import Polygon from'./elements/Polygon';import Polyline from'./elements/Polyline';import Line from'./elements/Line';import Svg from'./elements/Svg';import Path from'./elements/Path';import G from'./elements/G';import Text from'./elements/Text';import TSpan from'./elements/TSpan';import TextPath from'./elements/TextPath';import Use from'./elements/Use';import Image from'./elements/Image';import Symbol from'./elements/Symbol';import Defs from'./elements/Defs';import LinearGradient from'./elements/LinearGradient';import RadialGradient from'./elements/RadialGradient';import Stop from'./elements/Stop';import ClipPath from'./elements/ClipPath';import Pattern from'./elements/Pattern';import Mask from'./elements/Mask';import Marker from'./elements/Marker';export var tags={svg:Svg,circle:Circle,ellipse:Ellipse,g:G,text:Text,tspan:TSpan,textPath:TextPath,path:Path,polygon:Polygon,polyline:Polyline,line:Line,rect:Rect,use:Use,image:Image,symbol:Symbol,defs:Defs,linearGradient:LinearGradient,radialGradient:RadialGradient,stop:Stop,clipPath:ClipPath,pattern:Pattern,mask:Mask,marker:Marker};function missingTag(){return null;}export function SvgAst(_ref){var ast=_ref.ast,override=_ref.override;if(!ast){return null;}var props=ast.props,children=ast.children;return React.createElement(Svg,_extends({},props,override,{__source:{fileName:_jsxFileName,lineNumber:98}}),children);}export function SvgXml(props){var xml=props.xml,override=props.override;var ast=useMemo(function(){return xml!==null?_parse(xml):null;},[xml]);return React.createElement(SvgAst,{ast:ast,override:override||props,__source:{fileName:_jsxFileName,lineNumber:109}});}export function fetchText(uri){var response;return _regeneratorRuntime.async(function fetchText$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regeneratorRuntime.awrap(fetch(uri));case 2:response=_context.sent;_context.next=5;return _regeneratorRuntime.awrap(response.text());case 5:return _context.abrupt("return",_context.sent);case 6:case"end":return _context.stop();}}});}export var err=console.error.bind(console);export function SvgUri(props){var uri=props.uri;var _useState=useState(null),_useState2=_slicedToArray(_useState,2),xml=_useState2[0],setXml=_useState2[1];useEffect(function(){uri?fetchText(uri).then(setXml).catch(err):setXml(null);},[uri]);return React.createElement(SvgXml,{xml:xml,override:props,__source:{fileName:_jsxFileName,lineNumber:129}});}export var SvgFromXml=function(_Component){_inherits(SvgFromXml,_Component);function SvgFromXml(){var _getPrototypeOf2;var _this;_classCallCheck(this,SvgFromXml);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(SvgFromXml)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={ast:null};return _this;}_createClass(SvgFromXml,[{key:"componentDidMount",value:function componentDidMount(){this.parse(this.props.xml);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var xml=this.props.xml;if(xml!==prevProps.xml){this.parse(xml);}}},{key:"parse",value:function parse(xml){try{this.setState({ast:xml?_parse(xml):null});}catch(e){console.error(e);}}},{key:"render",value:function render(){var props=this.props,ast=this.state.ast;return React.createElement(SvgAst,{ast:ast,override:props.override||props,__source:{fileName:_jsxFileName,lineNumber:157}});}}]);return SvgFromXml;}(Component);export var SvgFromUri=function(_Component2){_inherits(SvgFromUri,_Component2);function SvgFromUri(){var _getPrototypeOf3;var _this2;_classCallCheck(this,SvgFromUri);for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_this2=_possibleConstructorReturn(this,(_getPrototypeOf3=_getPrototypeOf(SvgFromUri)).call.apply(_getPrototypeOf3,[this].concat(args)));_this2.state={xml:null};return _this2;}_createClass(SvgFromUri,[{key:"componentDidMount",value:function componentDidMount(){this.fetch(this.props.uri);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var uri=this.props.uri;if(uri!==prevProps.uri){this.fetch(uri);}}},{key:"fetch",value:function fetch(uri){return _regeneratorRuntime.async(function fetch$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.t0=this;if(!uri){_context2.next=8;break;}_context2.next=5;return _regeneratorRuntime.awrap(fetchText(uri));case 5:_context2.t1=_context2.sent;_context2.next=9;break;case 8:_context2.t1=null;case 9:_context2.t2=_context2.t1;_context2.t3={xml:_context2.t2};_context2.t0.setState.call(_context2.t0,_context2.t3);_context2.next=17;break;case 14:_context2.prev=14;_context2.t4=_context2["catch"](0);console.error(_context2.t4);case 17:case"end":return _context2.stop();}}},null,this,[[0,14]]);}},{key:"render",value:function render(){var props=this.props,xml=this.state.xml;return React.createElement(SvgFromXml,{xml:xml,override:props,__source:{fileName:_jsxFileName,lineNumber:184}});}}]);return SvgFromUri;}(Component);var upperCase=function upperCase(_match,letter){return letter.toUpperCase();};export var camelCase=function camelCase(phrase){return phrase.replace(/[:-]([a-z])/g,upperCase);};export function getStyle(string){var style={};var declarations=string.split(';');var length=declarations.length;for(var i=0;i<length;i++){var declaration=declarations[i];if(declaration.length!==0){var split=declaration.split(':');var _property=split[0];var value=split[1];style[camelCase(_property.trim())]=value.trim();}}return style;}export function astToReact(value,index){if(typeof value==='object'){var Tag=value.Tag,props=value.props,children=value.children;return React.createElement(Tag,_extends({key:index},props,{__source:{fileName:_jsxFileName,lineNumber:218}}),children.map(astToReact));}return value;}function repeat(str,i){var result='';while(i--){result+=str;}return result;}var toSpaces=function toSpaces(tabs){return repeat('  ',tabs.length);};function locate(source,i){var lines=source.split('\n');var nLines=lines.length;var column=i;var line=0;for(;line<nLines;line++){var length=lines[line].length;if(column>=length){column-=length;}else{break;}}var before=source.slice(0,i).replace(/^\t+/,toSpaces);var beforeExec=/(^|\n).*$/.exec(before);var beforeLine=beforeExec&&beforeExec[0]||'';var after=source.slice(i);var afterExec=/.*(\n|$)/.exec(after);var afterLine=afterExec&&afterExec[0];var pad=repeat(' ',beforeLine.length);var snippet=""+beforeLine+afterLine+"\n"+pad+"^";return{line:line,column:column,snippet:snippet};}var validNameCharacters=/[a-zA-Z0-9:_-]/;var whitespace=/[\s\t\r\n]/;var quotemarks=/['"]/;function _parse(source,middleware){var length=source.length;var currentElement=null;var state=metadata;var children=null;var root;var stack=[];function error(message){var _locate=locate(source,i),line=_locate.line,column=_locate.column,snippet=_locate.snippet;throw new Error(message+" ("+line+":"+column+"). If this is valid SVG, it's probably a bug. Please raise an issue\n\n"+snippet);}function metadata(){while(i+1<length&&(source[i]!=='<'||!validNameCharacters.test(source[i+1]))){i++;}return neutral();}function neutral(){var text='';var char;while(i<length&&(char=source[i])!=='<'){text+=char;i+=1;}if(/\S/.test(text)){children.push(text);}if(source[i]==='<'){return openingTag;}return neutral;}function openingTag(){var char=source[i];if(char==='?'){return neutral;}if(char==='!'){var start=i+1;if(source.slice(start,i+3)==='--'){return comment;}var end=i+8;if(source.slice(start,end)==='[CDATA['){return cdata;}if(/doctype/i.test(source.slice(start,end))){return neutral;}}if(char==='/'){return closingTag;}var tag=getName();var props={};var element={tag:tag,props:props,children:[],parent:currentElement,Tag:tags[tag]||missingTag};if(currentElement){children.push(element);}else{root=element;}getAttributes(props);var style=props.style;if(typeof style==='string'){element.styles=style;props.style=getStyle(style);}var selfClosing=false;if(source[i]==='/'){i+=1;selfClosing=true;}if(source[i]!=='>'){error('Expected >');}if(!selfClosing){currentElement=element;children=element.children;stack.push(element);}return neutral;}function comment(){var index=source.indexOf('-->',i);if(!~index){error('expected -->');}i=index+2;return neutral;}function cdata(){var index=source.indexOf(']]>',i);if(!~index){error('expected ]]>');}children.push(source.slice(i+7,index));i=index+2;return neutral;}function closingTag(){var tag=getName();if(!tag){error('Expected tag name');}if(currentElement&&tag!==currentElement.tag){error("Expected closing tag </"+tag+"> to match opening tag <"+currentElement.tag+">");}if(source[i]!=='>'){error('Expected >');}stack.pop();currentElement=stack[stack.length-1];if(currentElement){var _currentElement=currentElement;children=_currentElement.children;}return neutral;}function getName(){var name='';var char;while(i<length&&validNameCharacters.test(char=source[i])){name+=char;i+=1;}return name;}function getAttributes(props){while(i<length){if(!whitespace.test(source[i])){return;}allowSpaces();var name=getName();if(!name){return;}var value=true;allowSpaces();if(source[i]==='='){i+=1;allowSpaces();value=getAttributeValue();if(!isNaN(+value)&&value.trim()!==''){value=+value;}}props[camelCase(name)]=value;}}function getAttributeValue(){return quotemarks.test(source[i])?getQuotedAttributeValue():getUnquotedAttributeValue();}function getUnquotedAttributeValue(){var value='';do{var char=source[i];if(char===' '||char==='>'||char==='/'){return value;}value+=char;i+=1;}while(i<length);return value;}function getQuotedAttributeValue(){var quotemark=source[i++];var value='';var escaped=false;while(i<length){var char=source[i++];if(char===quotemark&&!escaped){return value;}if(char==='\\'&&!escaped){escaped=true;}value+=escaped?"\\"+char:char;escaped=false;}return value;}function allowSpaces(){while(i<length&&whitespace.test(source[i])){i+=1;}}var i=0;while(i<length){if(!state){error('Unexpected character');}state=state();i+=1;}if(state!==neutral){error('Unexpected end of input');}if(root){var xml=(middleware?middleware(root):root)||root;var _ast=xml.children.map(astToReact);var jsx=xml;jsx.children=_ast;return jsx;}return null;}export{_parse as parse};
//# sourceMappingURL=xml.js.map