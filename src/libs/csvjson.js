// js/csvjson/json2-mod.js
(function(){'use strict';var JSON2_mod={};function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,keyable=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"',"'":"\\'",'\\':'\\\\'},rep;function quote(string,quoteType){escapable.lastIndex=0;var surroundingQuote='"';if(quoteType==='single'){surroundingQuote="'";}
return escapable.test(string)?surroundingQuote+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+surroundingQuote:surroundingQuote+string+surroundingQuote;}
function condQuoteKey(string,quoteType){return keyable.test(string)?string:quote(string,quoteType);}
function str(key,holder,dropQuotesOnKeys,quoteType){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value,quoteType);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value,dropQuotesOnKeys,quoteType)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value,dropQuotesOnKeys,quoteType);if(v){partial.push((dropQuotesOnKeys?condQuoteKey(k,quoteType):quote(k,quoteType))+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value,dropQuotesOnKeys,quoteType);if(v){partial.push((dropQuotesOnKeys?condQuoteKey(k,quoteType):quote(k,quoteType))+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON2_mod.stringify!=='function'){JSON2_mod.stringify=function(value,replacer,space,dropQuotesOnKeys,quoteType){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value},dropQuotesOnKeys,quoteType);};}
if(typeof JSON2_mod.parse!=='function'){JSON2_mod.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}
if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=JSON2_mod;}
exports.JSON2_mod=JSON2_mod;}else{this.JSON2_mod=JSON2_mod;}}.call(this));
// js/csvjson/jsonlint.js
var jsonlint=(function(){var parser={trace:function trace(){},yy:{},symbols_:{"error":2,"JSONString":3,"STRING":4,"JSONNumber":5,"NUMBER":6,"JSONNullLiteral":7,"NULL":8,"JSONBooleanLiteral":9,"TRUE":10,"FALSE":11,"JSONText":12,"JSONValue":13,"EOF":14,"JSONObject":15,"JSONArray":16,"{":17,"}":18,"JSONMemberList":19,"JSONMember":20,":":21,",":22,"[":23,"]":24,"JSONElementList":25,"$accept":0,"$end":1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 1:this.$=yytext.replace(/\\(\\|")/g,"$"+"1").replace(/\\n/g,'\n').replace(/\\r/g,'\r').replace(/\\t/g,'\t').replace(/\\v/g,'\v').replace(/\\f/g,'\f').replace(/\\b/g,'\b');break;case 2:this.$=Number(yytext);break;case 3:this.$=null;break;case 4:this.$=true;break;case 5:this.$=false;break;case 6:return this.$=$$[$0-1];break;case 13:this.$={};break;case 14:this.$=$$[$0-1];break;case 15:this.$=[$$[$0-2],$$[$0]];break;case 16:this.$={};this.$[$$[$0][0]]=$$[$0][1];break;case 17:this.$=$$[$0-2];$$[$0-2][$$[$0][0]]=$$[$0][1];break;case 18:this.$=[];break;case 19:this.$=$$[$0-1];break;case 20:this.$=[$$[$0]];break;case 21:this.$=$$[$0-2];$$[$0-2].push($$[$0]);break;}},table:[{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],defaultActions:{16:[2,6]},parseError:function parseError(str,hash){throw new Error(str);},parse:function parse(input){var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext='',yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(input);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=='undefined')
this.lexer.yylloc={};var yyloc=this.lexer.yylloc;lstack.push(yyloc);if(typeof this.yy.parseError==='function')
this.parseError=this.yy.parseError;function popStack(n){stack.length=stack.length-2*n;vstack.length=vstack.length-n;lstack.length=lstack.length-n;}
function lex(){var token;token=self.lexer.lex()||1;if(typeof token!=='number'){token=self.symbols_[token]||token;}
return token;}
var symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;while(true){state=stack[stack.length-1];if(this.defaultActions[state]){action=this.defaultActions[state];}else{if(symbol==null)
symbol=lex();action=table[state]&&table[state][symbol];}
_handle_error:if(typeof action==='undefined'||!action.length||!action[0]){if(!recovering){expected=[];for(p in table[state])if(this.terminals_[p]&&p>2){expected.push("'"+this.terminals_[p]+"'");}
var errStr='';if(this.lexer.showPosition){errStr='Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ')+", got '"+this.terminals_[symbol]+"'";}else{errStr='Parse error on line '+(yylineno+1)+": Unexpected "+
(symbol==1?"end of input":("'"+(this.terminals_[symbol]||symbol)+"'"));}
this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected});}
if(recovering==3){if(symbol==EOF){throw new Error(errStr||'Parsing halted.');}
yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;symbol=lex();}
while(1){if((TERROR.toString())in table[state]){break;}
if(state==0){throw new Error(errStr||'Parsing halted.');}
popStack(1);state=stack[stack.length-1];}
preErrorSymbol=symbol;symbol=TERROR;state=stack[stack.length-1];action=table[state]&&table[state][TERROR];recovering=3;}
if(action[0]instanceof Array&&action.length>1){throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);}
switch(action[0]){case 1:stack.push(symbol);vstack.push(this.lexer.yytext);lstack.push(this.lexer.yylloc);stack.push(action[1]);symbol=null;if(!preErrorSymbol){yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;if(recovering>0)
recovering--;}else{symbol=preErrorSymbol;preErrorSymbol=null;}
break;case 2:len=this.productions_[action[1]][1];yyval.$=vstack[vstack.length-len];yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column};r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack);if(typeof r!=='undefined'){return r;}
if(len){stack=stack.slice(0,-1*len*2);vstack=vstack.slice(0,-1*len);lstack=lstack.slice(0,-1*len);}
stack.push(this.productions_[action[1]][0]);vstack.push(yyval.$);lstack.push(yyval._$);newState=table[stack[stack.length-2]][stack[stack.length-1]];stack.push(newState);break;case 3:return true;}}
return true;}};var lexer=(function(){var lexer=({EOF:1,parseError:function parseError(str,hash){if(this.yy.parseError){this.yy.parseError(str,hash);}else{throw new Error(str);}},setInput:function(input){this._input=input;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match='';this.conditionStack=['INITIAL'];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this;},input:function(){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.match+=ch;this.matched+=ch;var lines=ch.match(/\n/);if(lines)this.yylineno++;this._input=this._input.slice(1);return ch;},unput:function(ch){this._input=ch+this._input;return this;},more:function(){this._more=true;return this;},less:function(n){this._input=this.match.slice(n)+this._input;},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?'...':'')+past.substr(-20).replace(/\n/g,"");},upcomingInput:function(){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length);}
return(next.substr(0,20)+(next.length>20?'...':'')).replace(/\n/g,"");},showPosition:function(){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^";},next:function(){if(this.done){return this.EOF;}
if(!this._input)this.done=true;var token,match,tempMatch,index,col,lines;if(!this._more){this.yytext='';this.match='';}
var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(!this.options.flex)break;}}
if(match){lines=match[0].match(/\n.*/g);if(lines)this.yylineno+=lines.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-1:this.yylloc.last_column+match[0].length}
this.yytext+=match[0];this.match+=match[0];this.yyleng=this.yytext.length;this._more=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,rules[index],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(token)return token;else return;}
if(this._input===""){return this.EOF;}else{this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),{text:"",token:null,line:this.yylineno});}},lex:function lex(){var r=this.next();if(typeof r!=='undefined'){return r;}else{return this.lex();}},begin:function begin(condition){this.conditionStack.push(condition);},popState:function popState(){return this.conditionStack.pop();},_currentRules:function _currentRules(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;},topState:function(){return this.conditionStack[this.conditionStack.length-2];},pushState:function begin(condition){this.begin(condition);}});lexer.options={};lexer.performAction=function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){var YYSTATE=YY_START
switch($avoiding_name_collisions){case 0:break;case 1:return 6
break;case 2:yy_.yytext=yy_.yytext.substr(1,yy_.yyleng-2);return 4
break;case 3:return 17
break;case 4:return 18
break;case 5:return 23
break;case 6:return 24
break;case 7:return 22
break;case 8:return 21
break;case 9:return 10
break;case 10:return 11
break;case 11:return 8
break;case 12:return 14
break;case 13:return'INVALID'
break;}};lexer.rules=[/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/];lexer.conditions={"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}};;return lexer;})()
parser.lexer=lexer;return parser;})();if(typeof require!=='undefined'&&typeof exports!=='undefined'){exports.parser=jsonlint;exports.parse=function(){return jsonlint.parse.apply(jsonlint,arguments);}
exports.main=function commonjsMain(args){if(!args[1])
throw new Error('Usage: '+args[0]+' FILE');if(typeof process!=='undefined'){var source=require('fs').readFileSync(require('path').join(process.cwd(),args[1]),"utf8");}else{var cwd=require("file").path(require("file").cwd());var source=cwd.join(args[1]).read({charset:"utf-8"});}
return exports.parser.parse(source);}
if(typeof module!=='undefined'&&require.main===module){exports.main(typeof process!=='undefined'?process.argv.slice(1):require("system").args);}}
// js/csvjson/csv2json.js
(function(){var errorDetectingSeparator="We could not detect the separator.",errorNotWellFormed="CSV is not well formed",errorEmpty="Please upload a file or type in something.",errorEmptyHeader="Could not detect header. Ensure first row cotains your column headers.",separators=[",",";","\t"],pegjsSeparatorNames={",":"comma",";":"semicolon","\t":"tab"};function detectSeparator(csv){var counts={},sepMax;separators.forEach(function(sep,i){var re=new RegExp(sep,'g');counts[sep]=(csv.match(re)||[]).length;sepMax=!sepMax||counts[sep]>counts[sepMax]?sep:sepMax;});return sepMax;}
function zip(){var args=[].slice.call(arguments);var longest=args.reduce(function(a,b){return a.length>b.length?a:b;},[]);return longest.map(function(_,i){return args.map(function(array){return array[i];});});}
function uniquify(keys){var counts={};for(var i=0;i<keys.length;i++){var key=keys[i];if(counts[key]===undefined){counts[key]=0;}else{counts[key]++;}}
var result=[];for(var i=keys.length-1;i>=0;i--){var key=keys[i];if(counts[key]>0)key=key+'__'+counts[key]--;result.unshift(key);}
return result;}
function convert(csv,options){options||(options={});if(csv.length==0)throw errorEmpty;var separator=options.separator||detectSeparator(csv);if(!separator)throw errorDetectingSeparator;var a=[];try{var a=csvParser.parse(csv,pegjsSeparatorNames[separator]);}catch(error){var start=csv.lastIndexOf('\n',error.offset),end=csv.indexOf('\n',error.offset),line=csv.substring(start>=-1?start:0,end>-1?end:csv.length);throw error.message+' On line '+error.line+' and column '+error.column+'.\n'+line;}
if(options.transpose)a=zip.apply(this,a);var keys=a.shift();if(keys.length==0)throw errorEmptyHeader;keys=keys.map(function(key){return key.trim().replace(/(^")|("$)/g,'');});keys=uniquify(keys);var json=options.hash?{}:[];for(var l=0;l<a.length;l++){var row={},hashKey;for(var i=0;i<keys.length;i++){var value=(a[l][i]||'').trim().replace(/(^")|("$)/g,'');var number=value===""?NaN:value-0;if(options.hash&&i==0){hashKey=value;}
else{if(options.parseJSON||options.parseNumbers&&!isNaN(number)){try{row[keys[i]]=JSON.parse(value);}catch(error){row[keys[i]]=value;}}
else{row[keys[i]]=value;}}}
if(options.hash)
json[hashKey]=row;else
json.push(row);}
return json;};var csvParser=(function(){function quote(s){return'"'+s.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\x08/g,'\\b').replace(/\t/g,'\\t').replace(/\n/g,'\\n').replace(/\f/g,'\\f').replace(/\r/g,'\\r').replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)
+'"';}
var result={parse:function(input,startRule){var parseFunctions={"comma":parse_comma,"semicolon":parse_semicolon,"tab":parse_tab,"sv":parse_sv,"line":parse_line,"field":parse_field,"char":parse_char};if(startRule!==undefined){if(parseFunctions[startRule]===undefined){throw new Error("Invalid rule name: "+quote(startRule)+".");}}else{startRule="comma";}
var pos=0;var reportFailures=0;var rightmostFailuresPos=0;var rightmostFailuresExpected=[];function padLeft(input,padding,length){var result=input;var padLength=length-input.length;for(var i=0;i<padLength;i++){result=padding+result;}
return result;}
function escape(ch){var charCode=ch.charCodeAt(0);var escapeChar;var length;if(charCode<=0xFF){escapeChar='x';length=2;}else{escapeChar='u';length=4;}
return'\\'+escapeChar+padLeft(charCode.toString(16).toUpperCase(),'0',length);}
function matchFailed(failure){if(pos<rightmostFailuresPos){return;}
if(pos>rightmostFailuresPos){rightmostFailuresPos=pos;rightmostFailuresExpected=[];}
rightmostFailuresExpected.push(failure);}
function parse_comma(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;result0=(function(offset){return separator=',';})(pos)?"":null;if(result0!==null){result1=parse_sv();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}
if(result0!==null){result0=(function(offset,sv){return sv;})(pos0,result0[1]);}
if(result0===null){pos=pos0;}
return result0;}
function parse_semicolon(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;result0=(function(offset){return separator=';';})(pos)?"":null;if(result0!==null){result1=parse_sv();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}
if(result0!==null){result0=(function(offset,sv){return sv;})(pos0,result0[1]);}
if(result0===null){pos=pos0;}
return result0;}
function parse_tab(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;result0=(function(offset){return separator='\t';})(pos)?"":null;if(result0!==null){result1=parse_sv();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}
if(result0!==null){result0=(function(offset,sv){return sv;})(pos0,result0[1]);}
if(result0===null){pos=pos0;}
return result0;}
function parse_sv(){var result0,result1,result2,result3,result4;var pos0,pos1,pos2,pos3;pos0=pos;pos1=pos;result0=[];if(/^[\n\r]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[\\n\\r]");}}
while(result1!==null){result0.push(result1);if(/^[\n\r]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[\\n\\r]");}}}
if(result0!==null){result1=parse_line();if(result1!==null){result2=[];pos2=pos;pos3=pos;if(/^[\n\r]/.test(input.charAt(pos))){result4=input.charAt(pos);pos++;}else{result4=null;if(reportFailures===0){matchFailed("[\\n\\r]");}}
if(result4!==null){result3=[];while(result4!==null){result3.push(result4);if(/^[\n\r]/.test(input.charAt(pos))){result4=input.charAt(pos);pos++;}else{result4=null;if(reportFailures===0){matchFailed("[\\n\\r]");}}}}else{result3=null;}
if(result3!==null){result4=parse_line();if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos3;}}else{result3=null;pos=pos3;}
if(result3!==null){result3=(function(offset,data){return data;})(pos2,result3[1]);}
if(result3===null){pos=pos2;}
while(result3!==null){result2.push(result3);pos2=pos;pos3=pos;if(/^[\n\r]/.test(input.charAt(pos))){result4=input.charAt(pos);pos++;}else{result4=null;if(reportFailures===0){matchFailed("[\\n\\r]");}}
if(result4!==null){result3=[];while(result4!==null){result3.push(result4);if(/^[\n\r]/.test(input.charAt(pos))){result4=input.charAt(pos);pos++;}else{result4=null;if(reportFailures===0){matchFailed("[\\n\\r]");}}}}else{result3=null;}
if(result3!==null){result4=parse_line();if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos3;}}else{result3=null;pos=pos3;}
if(result3!==null){result3=(function(offset,data){return data;})(pos2,result3[1]);}
if(result3===null){pos=pos2;}}
if(result2!==null){result3=[];if(/^[\n\r]/.test(input.charAt(pos))){result4=input.charAt(pos);pos++;}else{result4=null;if(reportFailures===0){matchFailed("[\\n\\r]");}}
while(result4!==null){result3.push(result4);if(/^[\n\r]/.test(input.charAt(pos))){result4=input.charAt(pos);pos++;}else{result4=null;if(reportFailures===0){matchFailed("[\\n\\r]");}}}
if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}
if(result0!==null){result0=(function(offset,first,rest){rest.unshift(first);return rest;})(pos0,result0[1],result0[2]);}
if(result0===null){pos=pos0;}
return result0;}
function parse_line(){var result0,result1,result2,result3,result4;var pos0,pos1,pos2,pos3;pos0=pos;pos1=pos;result0=parse_field();if(result0!==null){result1=[];pos2=pos;pos3=pos;if(input.length>pos){result2=input.charAt(pos);pos++;}else{result2=null;if(reportFailures===0){matchFailed("any character");}}
if(result2!==null){result3=(function(offset,char){return char==separator;})(pos,result2)?"":null;if(result3!==null){result4=parse_field();if(result4!==null){result2=[result2,result3,result4];}else{result2=null;pos=pos3;}}else{result2=null;pos=pos3;}}else{result2=null;pos=pos3;}
if(result2!==null){result2=(function(offset,char,text){return text;})(pos2,result2[0],result2[2]);}
if(result2===null){pos=pos2;}
while(result2!==null){result1.push(result2);pos2=pos;pos3=pos;if(input.length>pos){result2=input.charAt(pos);pos++;}else{result2=null;if(reportFailures===0){matchFailed("any character");}}
if(result2!==null){result3=(function(offset,char){return char==separator;})(pos,result2)?"":null;if(result3!==null){result4=parse_field();if(result4!==null){result2=[result2,result3,result4];}else{result2=null;pos=pos3;}}else{result2=null;pos=pos3;}}else{result2=null;pos=pos3;}
if(result2!==null){result2=(function(offset,char,text){return text;})(pos2,result2[0],result2[2]);}
if(result2===null){pos=pos2;}}
if(result1!==null){result2=(function(offset,first,rest){return!!first||rest.length;})(pos,result0,result1)?"":null;if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}
if(result0!==null){result0=(function(offset,first,rest){rest.unshift(first);return rest;})(pos0,result0[0],result0[1]);}
if(result0===null){pos=pos0;}
return result0;}
function parse_field(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===34){result0="\"";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"\\\"\"");}}
if(result0!==null){result1=[];result2=parse_char();while(result2!==null){result1.push(result2);result2=parse_char();}
if(result1!==null){if(input.charCodeAt(pos)===34){result2="\"";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"\\\"\"");}}
if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}
if(result0!==null){result0=(function(offset,text){return text.join('');})(pos0,result0[1]);}
if(result0===null){pos=pos0;}
if(result0===null){pos0=pos;result0=[];pos1=pos;pos2=pos;if(/^[^\n\r]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[^\\n\\r]");}}
if(result1!==null){result2=(function(offset,char){return char!=separator;})(pos,result1)?"":null;if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}
if(result1!==null){result1=(function(offset,char){return char;})(pos1,result1[0]);}
if(result1===null){pos=pos1;}
while(result1!==null){result0.push(result1);pos1=pos;pos2=pos;if(/^[^\n\r]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[^\\n\\r]");}}
if(result1!==null){result2=(function(offset,char){return char!=separator;})(pos,result1)?"":null;if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}
if(result1!==null){result1=(function(offset,char){return char;})(pos1,result1[0]);}
if(result1===null){pos=pos1;}}
if(result0!==null){result0=(function(offset,text){return text.join('');})(pos0,result0);}
if(result0===null){pos=pos0;}}
return result0;}
function parse_char(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===34){result0="\"";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"\\\"\"");}}
if(result0!==null){if(input.charCodeAt(pos)===34){result1="\"";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"\\\"\"");}}
if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}
if(result0!==null){result0=(function(offset){return'"';})(pos0);}
if(result0===null){pos=pos0;}
if(result0===null){if(/^[^"]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[^\"]");}}}
return result0;}
function cleanupExpected(expected){expected.sort();var lastExpected=null;var cleanExpected=[];for(var i=0;i<expected.length;i++){if(expected[i]!==lastExpected){cleanExpected.push(expected[i]);lastExpected=expected[i];}}
return cleanExpected;}
function computeErrorPosition(){var line=1;var column=1;var seenCR=false;for(var i=0;i<Math.max(pos,rightmostFailuresPos);i++){var ch=input.charAt(i);if(ch==="\n"){if(!seenCR){line++;}
column=1;seenCR=false;}else if(ch==="\r"||ch==="\u2028"||ch==="\u2029"){line++;column=1;seenCR=true;}else{column++;seenCR=false;}}
return{line:line,column:column};}
var separator=',';var result=parseFunctions[startRule]();if(result===null||pos!==input.length){var offset=Math.max(pos,rightmostFailuresPos);var found=offset<input.length?input.charAt(offset):null;var errorPosition=computeErrorPosition();throw new this.SyntaxError(cleanupExpected(rightmostFailuresExpected),found,offset,errorPosition.line,errorPosition.column);}
return result;},toSource:function(){return this._source;}};result.SyntaxError=function(expected,found,offset,line,column){function buildMessage(expected,found){var expectedHumanized,foundHumanized;switch(expected.length){case 0:expectedHumanized="end of input";break;case 1:expectedHumanized=expected[0];break;default:expectedHumanized=expected.slice(0,expected.length-1).join(", ")
+" or "
+expected[expected.length-1];}
foundHumanized=found?quote(found):"end of input";return"Expected "+expectedHumanized+" but "+foundHumanized+" found.";}
this.name="SyntaxError";this.expected=expected;this.found=found;this.message=buildMessage(expected,found);this.offset=offset;this.line=line;this.column=column;};result.SyntaxError.prototype=Error.prototype;return result;})();if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=convert;}
exports.csv2json=convert;}else{this.CSVJSON||(this.CSVJSON={});this.CSVJSON.csv2json=convert;}}).call(this);
// js/csvjson/json2csv.js
(function(){var errorMissingSeparator='Missing separator option.',errorEmpty='JSON is empty.',errorEmptyHeader='Could not detect header. Ensure first row contains your column headers.',errorNotAnArray='Your JSON must be an array or an object.',errorItemNotAnObject='Item in array is not an object: {0}';function flattenArray(array,ancestors){ancestors||(ancestors=[]);function combineKeys(a,b){var result=a.slice(0);if(!Array.isArray(b))return result;for(var i=0;i<b.length;i++)
if(result.indexOf(b[i])===-1)result.push(b[i]);return result;}
function extend(target,source){target=target||{};for(var prop in source){if(typeof source[prop]==='object'){target[prop]=extend(target[prop],source[prop]);}else{target[prop]=source[prop];}}
return target;}
var rows=[];for(var i=0;i<array.length;i++){var o=array[i],row={},orows={},count=1;if(o!==undefined&&o!==null&&(!isObject(o)||Array.isArray(o)))
throw errorItemNotAnObject.replace('{0}',JSON.stringify(o));var keys=getKeys(o);for(var k=0;k<keys.length;k++){var value=o[keys[k]],keyChain=combineKeys(ancestors,[keys[k]]),key=keyChain.join('.');if(Array.isArray(value)){orows[key]=flattenArray(value,keyChain);count+=orows[key].length;}else{row[key]=value;}}
if(count==1){rows.push(row);}else{var keys=getKeys(orows);for(var k=0;k<keys.length;k++){var key=keys[k];for(var r=0;r<orows[key].length;r++){rows.push(extend(extend({},row),orows[key][r]));}}}}
return rows;}
function isObject(o){return o&&typeof o=='object';}
function getKeys(o){if(!isObject(o))return[];return Object.keys(o);}
function convert(data,options){options||(options={});if(!isObject(data))throw errorNotAnArray;if(!Array.isArray(data))data=[data];var separator=options.separator||',';if(!separator)throw errorMissingSeparator;var flatten=options.flatten||false;if(flatten)data=flattenArray(data);var allKeys=[],allRows=[];for(var i=0;i<data.length;i++){var o=data[i],row={};if(o!==undefined&&o!==null&&(!isObject(o)||Array.isArray(o)))
throw errorItemNotAnObject.replace('{0}',JSON.stringify(o));var keys=getKeys(o);for(var k=0;k<keys.length;k++){var key=keys[k];if(allKeys.indexOf(key)===-1)allKeys.push(key);var value=o[key];if(value===undefined&&value===null)continue;if(typeof value=='string'){row[key]='"'+value.replace(/"/g,options.output_csvjson_variant?'\\"':'""')+'"';if(options.output_csvjson_variant)row[key]=row[key].replace(/\n/g,'\\n');}else{row[key]=JSON.stringify(value);if(!options.output_csvjson_variant&&(isObject(value)||Array.isArray(value)))
row[key]='"'+row[key].replace(/"/g,'\\"').replace(/\n/g,'\\n')+'"';}}
allRows.push(row);}
keyValues=[];for(var i=0;i<allKeys.length;i++){keyValues.push('"'+allKeys[i].replace(/"/g,options.output_csvjson_variant?'\\"':'""')+'"');}
var csv=keyValues.join(separator)+'\n';for(var r=0;r<allRows.length;r++){var row=allRows[r],rowArray=[];for(var k=0;k<allKeys.length;k++){var key=allKeys[k];rowArray.push(row[key]||(options.output_csvjson_variant?'null':''));}
csv+=rowArray.join(separator)+(r<allRows.length-1?'\n':'');}
return csv;}
if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=convert;}
exports.json2csv=convert;}else{this.CSVJSON||(this.CSVJSON={});this.CSVJSON.json2csv=convert;}}).call(this);
// js/csvjson/sql2json.js
(function(){var errorEmpty="Please upload a file or type in something.",inQuotes=new RegExp(/(^`.*`$)|(^'.*'$)|(^".*"$)/);function convert(sql){if(sql.length==0)throw errorEmpty;var matches=[];sql=sql.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm,'$1').replace(/^--.*[\r\n]/gm,"").replace(/^\s*[\r\n]/gm,"").replace(/;\s*[\r\n]/gm,";;").replace(/[\r\n]/gm," ").replace(/;;\s?/gm,";\n").replace(/(["'])(?:(?=(\\?))\2.)*?\1/g,function(m){matches.push(_.trim(m,"'\""));return"'{{"+(matches.length-1)+"}}'";});var lines=_.lines(sql);if(lines.length==0)throw errorEmpty;var tables={},l,line;try{for(l=0;l<lines.length;l++){line=lines[l],words=_.words(line);if(!words.length)continue;if(words.length>=3&&words[0].toUpperCase()=='CREATE'&&words[1].toUpperCase()=='TABLE'){var i=2;while(!words[i].match(inQuotes)&&i<words.length)i++;if(i>=words.length)throw"Cannot find table name in CREATE TABLE statement.";var name=_.trim(words[i],"`'\"");tables[name]={header:[],values:[]};var values=_(line).chain().strRight("(").strLeftBack(")").words(",").value();tables[name].header=_.reduce(values,function(result,value){var words=_.words(value);if(!words.length)
throw"Cannot find columns for table "+name;var first=_.trim(words[0]);if(_.startsWith(first,"'")||_.startsWith(first,"`")||_.startsWith(first,'"'))
result.push(_.trim(first,"`'\""));return result;},[]);if(!tables[name].header.length)throw"No columns found for table "+name;}
else if(words.length>=4&&words[0].toUpperCase()=='INSERT'&&words[1].toUpperCase()=='INTO'&&words[2].match(inQuotes)&&words[3].toUpperCase()=='VALUES'){var name=_.trim(words[2],"`'\"");if(!tables[name])
throw"Table "+name+" was not defined in a CREATE TABLE.";var table=tables[name];var i=3;while(words[i].toUpperCase()!='VALUES'&&i<words.length)i++;if(i==words.length||words[i].toUpperCase()!='VALUES')
throw"Error parsing INSERT INTO statement. Cannot find VALUES."
i+=1;if(i==words.length)
throw"Error parsing INSERT INTO statement. No values found after VALUES.";var records=_.trim(words.slice(i).join(" ")).replace(/(\))\s*,\s*(\()/g,"),(").replace(/^\(/,"").replace(/\)\s*;?$/,"").replace(/\(\s*(NULL)\s*/gi,'({{NULL}}').replace(/,\s*(NULL)\s*/gi,',{{NULL}}').split("),(");_.each(records,function(str){var values=_.words(str,",");tables[name].values.push(_.map(values,function(value){return _.trim(value," `'\"");}));});}
else if(words.length>=4&&words[0].toUpperCase()=='INSERT'&&words[1].toUpperCase()=='INTO'&&words[2].match(inQuotes)&&_.startsWith(words[3],"(")){var name=_.trim(words[2],"`'\"");if(!tables[name])
throw"Table "+name+" was not defined in a CREATE TABLE.";var table=tables[name];var i=3;while(words[i].toUpperCase()!='VALUES'&&i<words.length)i++;if(i==words.length||words[i].toUpperCase()!='VALUES')
throw"Error parsing INSERT INTO statement. Cannot find VALUES."
var cols=_.map(words.slice(3,i),function(value){return _.trim(value,"\(\), `'\"");});if(!cols.length)
throw"Error parsing INSERT INTO statement. No column names found for table "+name+" in "+words[3];words[3]
i+=1;if(i==words.length)
throw"Error parsing INSERT INTO statement. No values found after VALUES.";var records=_.trim(words.slice(i).join(" ")).replace(/(\))\s*,\s*(\()/g,"),(").replace(/^\(/,"").replace(/\)\s*;?$/,"").replace(/\(\s*(NULL)\s*/gi,'({{NULL}}').replace(/,\s*(NULL)\s*/gi,',{{NULL}}').split("),(");_.each(records,function(str){var values=_.words(str,",");if(values.length!=cols.length)
throw"Error parsing INSERT INTO statement. Values "+str+" does not have the same number of items as columns "+words[3];var record={};_.each(tables[name].header,function(col){var index=_.indexOf(cols,col),value=index!=-1?_.trim(values[index]," `'\""):null;record[col]=value;});tables[name].values.push(_.values(record));});}}}catch(error){throw"Error: "+error+"\n..."+line;}
var objects={};_.each(tables,function(table,name){var keys=table.header;objects[name]=_.map(table.values,function(values){var o={};for(var k=0;k<keys.length;k++){o[keys[k]]=typeof values[k]=='string'?values[k].replace(/^{{([0-9]+)}}$/,function(m,i){return matches[i];}):values[k];if(o[keys[k]]=='{{NULL}}')o[keys[k]]=null;}
return o;});});return objects;}
this.CSVJSON||(this.CSVJSON={});this.CSVJSON.sql2json=convert;}).call(this);
// js/csvjson/json_beautifier.js
(function(){function walkObjectAndDropQuotesOnNumbers(object){if(!isObject(object))return;var keys=Object.keys(object);if(!keys)return;keys.forEach(function(key){var value=object[key];if(typeof value=='string'){var number=value-0;object[key]=isNaN(number)?value:number;}else if(isObject(value)||Array.isArray(value)){walkObjectAndDropQuotesOnNumbers(value);}});}
function isObject(o){return o&&typeof o=='object';}
function inlineShortArraysInResult(result,width){width||(width=80);if(typeof width!='number'||width<20){throw"Invalid width '"+width+"'. Expecting number equal or larger than 20."}
var list=result.split('\n'),i=0,start=null,content=[];while(i<list.length){var startMatch=!!list[i].match(/\[/),endMatch=!!list[i].match(/\],?/);if(startMatch&&!endMatch){content=[list[i]];start=i;}else if(endMatch&&!startMatch&&start){content.push((list[i]||'').trim());var inline=content.join(' ');if(inline.length<width){list.splice(start,i-start+1,inline);i=start;}
start=null;content=[];}else{if(start)content.push((list[i]||'').trim());}
i+=1;}
return list.join('\n');}
function convert(object,options){var space=options.space||2,dropQuotesOnKeys=options.dropQuotesOnKeys||false,dropQuotesOnNumbers=options.dropQuotesOnNumbers||false,inlineShortArrays=options.inlineShortArrays||false,inlineShortArraysDepth=options.inlineShortArraysDepth||1,quoteType=options.quoteType||'double',minify=options.minify||false;if(dropQuotesOnNumbers)walkObjectAndDropQuotesOnNumbers(object);var result=JSON2_mod.stringify(object,null,minify?undefined:space,dropQuotesOnKeys,quoteType);if(inlineShortArrays&&!minify){var width=typeof inlineShortArrays=='number'?inlineShortArrays:80;var newResult=inlineShortArraysInResult(result,width);if(inlineShortArraysDepth>1){for(var i=1;i<inlineShortArraysDepth;i++){result=newResult;newResult=inlineShortArraysInResult(result,width);if(newResult==result)break;}}
result=newResult;}
return result;};var JSON2_mod;if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=convert;}
JSON2_mod=require('json2-mod');exports.json_beautifier=convert;}else{JSON2_mod=window.JSON2_mod;this.CSVJSON||(this.CSVJSON={});this.CSVJSON.json_beautifier=convert;}}).call(this);
// js/csvjson/csvjson2json.js
(function(){var errorEmpty="Please upload a file or type in something.",errorEmptyHeader="Could not detect header. Ensure first row cotains your column headers.";function convert(csv,options){options||(options={});if(csv.length==0)throw errorEmpty;var lines=csv.split(/\r?\n/),a=[];for(var l=0;l<lines.length;l++){try{var line=JSON.parse('['+lines[l]+']');}catch(error){throw'Malformed JSON on line '+l+': '+error+'\n'+lines[l];}
a.push(line)}
var keys=a.shift(),noHeaderKeysUseIndex=false,indices=[];if(keys.length==0)throw errorEmptyHeader;for(var i=0;i<keys.length;i++){if(!_.isString(keys[i]))noHeaderKeysUseIndex=true;indices.push(i);}
if(noHeaderKeysUseIndex){a.unshift(keys);keys=indices;options.noHeaderKeysUseIndex=true;}
var json=[];for(var l=0;l<a.length;l++){var row={};for(var i=0;i<keys.length;i++){row[keys[i]]=a[l][i];}
json.push(row);}
return json;};this.CSVJSON||(this.CSVJSON={});this.CSVJSON.csvjson2json=convert;}).call(this);