/*!
 * minicart
 * The Mini Cart is a great way to improve your PayPal shopping cart integration.
 *
 * @version 3.0.6
 * @author Jeff Harrell <https://github.com/jeffharrell/>
 * @url http://www.minicartjs.com/
 * @license MIT <https://github.com/jeffharrell/minicart/raw/master/LICENSE.md>
 */
(function e$$0(k,c,a){function d(b,g){if(!c[b]){if(!k[b]){var e="function"==typeof require&&require;if(!g&&e)return e(b,!0);if(h)return h(b,!0);throw Error("Cannot find module '"+b+"'");}e=c[b]={exports:{}};k[b][0].call(e.exports,function(a){var e=k[b][1][a];return d(e?e:a)},e,e.exports,e$$0,k,c,a)}return c[b].exports}for(var h="function"==typeof require&&require,l=0;l<a.length;l++)d(a[l]);return d})({1:[function(f,k,c){function a(a){return"[object Array]"===e.call(a)}function d(a,e){var b;if(null===
a)b={__proto__:null};else{if("object"!==typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");b=function(){};b.prototype=a;b=new b;b.__proto__=a}"undefined"!==typeof e&&Object.defineProperties&&Object.defineProperties(b,e);return b}function h(a){return"object"!=typeof a&&"function"!=typeof a||null===a}function l(a){if(h(a))throw new TypeError("Object.keys called on a non-object");var e=[],b;for(b in a)p.call(a,b)&&e.push(b);return e}function b(a){if(h(a))throw new TypeError("Object.getOwnPropertyNames called on a non-object");
var e=l(a);c.isArray(a)&&-1===c.indexOf(a,"length")&&e.push("length");return e}function g(a,e){return{value:a[e]}}var e=Object.prototype.toString,p=Object.prototype.hasOwnProperty;c.isArray="function"===typeof Array.isArray?Array.isArray:a;c.indexOf=function(a,e){if(a.indexOf)return a.indexOf(e);for(var b=0;b<a.length;b++)if(e===a[b])return b;return-1};c.filter=function(a,e){if(a.filter)return a.filter(e);for(var b=[],g=0;g<a.length;g++)e(a[g],g,a)&&b.push(a[g]);return b};c.forEach=function(a,e,b){if(a.forEach)return a.forEach(e,
b);for(var g=0;g<a.length;g++)e.call(b,a[g],g,a)};c.map=function(a,e){if(a.map)return a.map(e);for(var b=Array(a.length),g=0;g<a.length;g++)b[g]=e(a[g],g,a);return b};c.reduce=function(a,e,b){if(a.reduce)return a.reduce(e,b);var g,c=!1;2<arguments.length&&(g=b,c=!0);for(var d=0,h=a.length;h>d;++d)a.hasOwnProperty(d)&&(c?g=e(g,a[d],d,a):(g=a[d],c=!0));return g};"b"!=="ab".substr(-1)?c.substr=function(a,e,b){0>e&&(e=a.length+e);return a.substr(e,b)}:c.substr=function(a,e,b){return a.substr(e,b)};c.trim=
function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")};c.bind=function(){var a=Array.prototype.slice.call(arguments),e=a.shift();if(e.bind)return e.bind.apply(e,a);var b=a.shift();return function(){e.apply(b,a.concat([Array.prototype.slice.call(arguments)]))}};c.create="function"===typeof Object.create?Object.create:d;var q="function"===typeof Object.keys?Object.keys:l,m="function"===typeof Object.getOwnPropertyNames?Object.getOwnPropertyNames:b;if(Error().hasOwnProperty("description")){var r=
function(a,b){"[object Error]"===e.call(a)&&(b=c.filter(b,function(a){return"description"!==a&&"number"!==a&&"message"!==a}));return b};c.keys=function(a){return r(a,q(a))};c.getOwnPropertyNames=function(a){return r(a,m(a))}}else c.keys=q,c.getOwnPropertyNames=m;if("function"===typeof Object.getOwnPropertyDescriptor)try{Object.getOwnPropertyDescriptor({a:1},"a"),c.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor}catch(v){c.getOwnPropertyDescriptor=function(a,e){try{return Object.getOwnPropertyDescriptor(a,
e)}catch(b){return g(a,e)}}}else c.getOwnPropertyDescriptor=g},{}],2:[function(f,k,c){},{}],3:[function(f,k,c){function a(a,e){for(var b=0,d=a.length-1;0<=d;d--){var c=a[d];"."===c?a.splice(d,1):".."===c?(a.splice(d,1),b++):b&&(a.splice(d,1),b--)}if(e)for(;b--;b)a.unshift("..");return a}var d=f("__browserify_process"),h=f("util"),l=f("_shims"),b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;c.resolve=function(){for(var b="",e=!1,c=arguments.length-1;-1<=c&&!e;c--){var q=0<=c?arguments[c]:
d.cwd();if(!h.isString(q))throw new TypeError("Arguments to path.resolve must be strings");q&&(b=q+"/"+b,e="/"===q.charAt(0))}b=a(l.filter(b.split("/"),function(a){return!!a}),!e).join("/");return(e?"/":"")+b||"."};c.normalize=function(b){var e=c.isAbsolute(b),d="/"===l.substr(b,-1);(b=a(l.filter(b.split("/"),function(a){return!!a}),!e).join("/"))||e||(b=".");b&&d&&(b+="/");return(e?"/":"")+b};c.isAbsolute=function(a){return"/"===a.charAt(0)};c.join=function(){var a=Array.prototype.slice.call(arguments,
0);return c.normalize(l.filter(a,function(a,b){if(!h.isString(a))throw new TypeError("Arguments to path.join must be strings");return a}).join("/"))};c.relative=function(a,b){function d(a){for(var b=0;b<a.length&&""===a[b];b++);for(var e=a.length-1;0<=e&&""===a[e];e--);return b>e?[]:a.slice(b,e-b+1)}a=c.resolve(a).substr(1);b=c.resolve(b).substr(1);for(var h=d(a.split("/")),l=d(b.split("/")),f=Math.min(h.length,l.length),v=f,x=0;x<f;x++)if(h[x]!==l[x]){v=x;break}f=[];for(x=v;x<h.length;x++)f.push("..");
f=f.concat(l.slice(v));return f.join("/")};c.sep="/";c.delimiter=":";c.dirname=function(a){var e=b.exec(a).slice(1);a=e[0];e=e[1];if(!a&&!e)return".";e&&(e=e.substr(0,e.length-1));return a+e};c.basename=function(a,e){var d=b.exec(a).slice(1)[2];e&&d.substr(-1*e.length)===e&&(d=d.substr(0,d.length-e.length));return d};c.extname=function(a){return b.exec(a).slice(1)[3]}},{__browserify_process:8,_shims:1,util:4}],4:[function(f,k,c){function a(a,e){var g={seen:[],stylize:h};3<=arguments.length&&(g.depth=
arguments[2]);4<=arguments.length&&(g.colors=arguments[3]);r(e)?g.showHidden=e:e&&c._extend(g,e);t(g.showHidden)&&(g.showHidden=!1);t(g.depth)&&(g.depth=2);t(g.colors)&&(g.colors=!1);t(g.customInspect)&&(g.customInspect=!0);g.colors&&(g.stylize=d);return b(g,a,g.depth)}function d(b,e){var d=a.styles[e];return d?"\u001b["+a.colors[d][0]+"m"+b+"\u001b["+a.colors[d][1]+"m":b}function h(a,b){return a}function l(a){var b={};y.forEach(a,function(a,e){b[a]=!0});return b}function b(a,d,h){if(a.customInspect&&
d&&E(d.inspect)&&d.inspect!==c.inspect&&(!d.constructor||d.constructor.prototype!==d)){var f=d.inspect(h);x(f)||(f=b(a,f,h));return f}if(f=g(a,d))return f;var v=y.keys(d),k=l(v);a.showHidden&&(v=y.getOwnPropertyNames(d));if(0===v.length){if(E(d))return a.stylize("[Function"+(d.name?": "+d.name:"")+"]","special");if(D(d))return a.stylize(RegExp.prototype.toString.call(d),"regexp");if(F(d))return a.stylize(Date.prototype.toString.call(d),"date");if(G(d))return"["+Error.prototype.toString.call(d)+"]"}var f=
"",t=!1,r=["{","}"];m(d)&&(t=!0,r=["[","]"]);E(d)&&(f=" [Function"+(d.name?": "+d.name:"")+"]");D(d)&&(f=" "+RegExp.prototype.toString.call(d));F(d)&&(f=" "+Date.prototype.toUTCString.call(d));G(d)&&(f=" "+("["+Error.prototype.toString.call(d)+"]"));if(0===v.length&&(!t||0==d.length))return r[0]+f+r[1];if(0>h)return D(d)?a.stylize(RegExp.prototype.toString.call(d),"regexp"):a.stylize("[Object]","special");a.seen.push(d);v=t?e(a,d,h,k,v):v.map(function(b){return p(a,d,h,k,b,t)});a.seen.pop();return q(v,
f,r)}function g(a,b){if(t(b))return a.stylize("undefined","undefined");if(x(b)){var e="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(e,"string")}if(v(b))return a.stylize(""+b,"number");if(r(b))return a.stylize(""+b,"boolean");if(null===b)return a.stylize("null","null")}function e(a,b,e,d,c){for(var g=[],h=0,l=b.length;h<l;++h)Object.prototype.hasOwnProperty.call(b,String(h))?g.push(p(a,b,e,d,String(h),!0)):g.push("");y.forEach(c,function(c){c.match(/^\d+$/)||
g.push(p(a,b,e,d,c,!0))});return g}function p(a,e,d,c,g,h){var l,f;e=y.getOwnPropertyDescriptor(e,g)||{value:e[g]};e.get?f=e.set?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):e.set&&(f=a.stylize("[Setter]","special"));Object.prototype.hasOwnProperty.call(c,g)||(l="["+g+"]");f||(0>y.indexOf(a.seen,e.value)?(f=null===d?b(a,e.value,null):b(a,e.value,d-1),-1<f.indexOf("\n")&&(f=h?f.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+f.split("\n").map(function(a){return"   "+
a}).join("\n"))):f=a.stylize("[Circular]","special"));if(t(l)){if(h&&g.match(/^\d+$/))return f;l=JSON.stringify(""+g);l.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(l=l.substr(1,l.length-2),l=a.stylize(l,"name")):(l=l.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),l=a.stylize(l,"string"))}return l+": "+f}function q(a,b,e){var d=0;return 60<y.reduce(a,function(a,b){d++;0<=b.indexOf("\n")&&d++;return a+b.replace(/\u001b\[\d\d?m/g,"").length+1},0)?e[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+
" "+e[1]:e[0]+b+" "+a.join(", ")+" "+e[1]}function m(a){return y.isArray(a)}function r(a){return"boolean"===typeof a}function v(a){return"number"===typeof a}function x(a){return"string"===typeof a}function t(a){return void 0===a}function D(a){return B(a)&&"[object RegExp]"===Object.prototype.toString.call(a)}function B(a){return"object"===typeof a&&a}function F(a){return B(a)&&"[object Date]"===Object.prototype.toString.call(a)}function G(a){return B(a)&&"[object Error]"===Object.prototype.toString.call(a)}
function E(a){return"function"===typeof a}function A(a){return 10>a?"0"+a.toString(10):a.toString(10)}function u(){var a=new Date,b=[A(a.getHours()),A(a.getMinutes()),A(a.getSeconds())].join(":");return[a.getDate(),C[a.getMonth()],b].join(" ")}var y=f("_shims"),w=/%[sdj%]/g;c.format=function(b){if(!x(b)){for(var e=[],d=0;d<arguments.length;d++)e.push(a(arguments[d]));return e.join(" ")}for(var d=1,g=arguments,c=g.length,e=String(b).replace(w,function(a){if("%%"===a)return"%";if(d>=c)return a;switch(a){case "%s":return String(g[d++]);
case "%d":return Number(g[d++]);case "%j":try{return JSON.stringify(g[d++])}catch(b){return"[Circular]"}default:return a}}),h=g[d];d<c;h=g[++d])e=null!==h&&B(h)?e+(" "+a(h)):e+(" "+h);return e};c.inspect=a;a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};a.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",
date:"magenta",regexp:"red"};c.isArray=m;c.isBoolean=r;c.isNull=function(a){return null===a};c.isNullOrUndefined=function(a){return null==a};c.isNumber=v;c.isString=x;c.isSymbol=function(a){return"symbol"===typeof a};c.isUndefined=t;c.isRegExp=D;c.isObject=B;c.isDate=F;c.isError=G;c.isFunction=E;c.isPrimitive=function(a){return null===a||"boolean"===typeof a||"number"===typeof a||"string"===typeof a||"symbol"===typeof a||"undefined"===typeof a};c.isBuffer=function(a){return a&&"object"===typeof a&&
"function"===typeof a.copy&&"function"===typeof a.fill&&"function"===typeof a.binarySlice};var C="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");c.log=function(){console.log("%s - %s",u(),c.format.apply(c,arguments))};c.inherits=function(a,b){a.super_=b;a.prototype=y.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})};c._extend=function(a,b){if(!b||!B(b))return a;for(var e=y.keys(b),d=e.length;d--;)a[e[d]]=b[e[d]];return a}},{_shims:1}],5:[function(f,
k,c){function a(a){return a.substr(1).split("|").reduce(function(a,b){var e=b.split(":"),d=e.shift();(e=e.join(":")||"")&&(e=", "+e);return"filters."+d+"("+a+e+")"})}function d(a,b,e,d){b=b.split("\n");var g=Math.max(d-3,0),c=Math.min(b.length,d+3);b=b.slice(g,c).map(function(a,b){var e=b+g+1;return(e==d?" >> ":"    ")+e+"| "+a}).join("\n");a.path=e;a.message=(e||"ejs")+":"+d+"\n"+b+"\n\n"+a.message;throw a;}var h=f("./utils");k=f("path");var l=k.dirname,b=k.extname,g=k.join,e=f("fs"),p=e.readFileSync,
q=c.filters=f("./filters"),m={};c.clearCache=function(){m={}};c.parse=function(e,d){d=d||{};var h=d.open||c.open||"<%",f=d.close||c.close||"%>",q=d.filename,k=!1!==d.compileDebug,m;m="var buf = [];";!1!==d._with&&(m+="\nwith (locals || {}) { (function(){ ");m+="\n buf.push('";for(var r=1,A=!1,u=0,y=e.length;u<y;++u){var w=e[u];if(e.slice(u,h.length+u)==h){var u=u+h.length,C,w=(k?"__stack.lineno=":"")+r;switch(e[u]){case "=":w="', escape(("+w+", ";C=")), '";++u;break;case "-":w="', ("+w+", ";C="), '";
++u;break;default:w="');"+w+";",C="; buf.push('"}var I=e.indexOf(f,u),n=e.substring(u,I),J=u,z=null,H=0;"-"==n[n.length-1]&&(n=n.substring(0,n.length-2),A=!0);if(0==n.trim().indexOf("include")){z=n.trim().slice(7).trim();if(!q)throw Error("filename option is required for includes");n=g(l(q),z);b(z)||(n+=".ejs");z=p(n,"utf8");z=c.parse(z,{filename:n,_with:!1,open:h,close:f,compileDebug:k});m+="' + (function(){"+z+"})() + '";n=""}for(;~(H=n.indexOf("\n",H));)H++,r++;":"==n.substr(0,1)&&(n=a(n));n&&
(n.lastIndexOf("//")>n.lastIndexOf("\n")&&(n+="\n"),m+=w,m+=n,m+=C);u+=I-J+f.length-1}else"\\"==w?m+="\\\\":"'"==w?m+="\\'":"\r"!=w&&("\n"==w?A?A=!1:(m+="\\n",r++):m+=w)}return m=!1!==d._with?m+"'); })();\n} \nreturn buf.join('');":m+"');\nreturn buf.join('');"};var r=c.compile=function(a,b){b=b||{};var e=b.escape||h.escape,g=JSON.stringify(a),l=!1!==b.compileDebug,f=b.client,m=b.filename?JSON.stringify(b.filename):"undefined";a=l?["var __stack = { lineno: 1, input: "+g+", filename: "+m+" };",d.toString(),
"try {",c.parse(a,b),"} catch (err) {\n  rethrow(err, __stack.input, __stack.filename, __stack.lineno);\n}"].join("\n"):c.parse(a,b);b.debug&&console.log(a);f&&(a="escape = escape || "+e.toString()+";\n"+a);try{var p=new Function("locals, filters, escape, rethrow",a)}catch(k){throw"SyntaxError"==k.name&&(k.message+=b.filename?" in "+m:" while compiling ejs"),k;}return f?p:function(a){return p.call(this,a,q,e,d)}};c.render=function(a,b){var e;b=b||{};if(b.cache)if(b.filename)e=m[b.filename]||(m[b.filename]=
r(a,b));else throw Error('"cache" option requires "filename".');else e=r(a,b);b.__proto__=b.locals;return e.call(b.scope,b)};c.renderFile=function(a,b,e){var d=a+":string";"function"==typeof b&&(e=b,b={});b.filename=a;var g;try{g=b.cache?m[d]||(m[d]=p(a,"utf8")):p(a,"utf8")}catch(h){e(h);return}e(null,c.render(g,b))};c.__express=c.renderFile;f.extensions?f.extensions[".ejs"]=function(a,b){b=b||a.filename;var d={filename:b,client:!0},g=e.readFileSync(b).toString(),d=r(g,d);a._compile("module.exports = "+
d.toString()+";",b)}:f.registerExtension&&f.registerExtension(".ejs",function(a){return r(a,{})})},{"./filters":6,"./utils":7,fs:2,path:3}],6:[function(f,k,c){c.first=function(a){return a[0]};c.last=function(a){return a[a.length-1]};c.capitalize=function(a){a=String(a);return a[0].toUpperCase()+a.substr(1,a.length)};c.downcase=function(a){return String(a).toLowerCase()};c.upcase=function(a){return String(a).toUpperCase()};c.sort=function(a){return Object.create(a).sort()};c.sort_by=function(a,d){return Object.create(a).sort(function(a,
c){a=a[d];c=c[d];return a>c?1:a<c?-1:0})};c.size=c.length=function(a){return a.length};c.plus=function(a,d){return Number(a)+Number(d)};c.minus=function(a,d){return Number(a)-Number(d)};c.times=function(a,d){return Number(a)*Number(d)};c.divided_by=function(a,d){return Number(a)/Number(d)};c.join=function(a,d){return a.join(d||", ")};c.truncate=function(a,d,c){a=String(a);a.length>d&&(a=a.slice(0,d),c&&(a+=c));return a};c.truncate_words=function(a,d){a=String(a);return a.split(/ +/).slice(0,d).join(" ")};
c.replace=function(a,d,c){return String(a).replace(d,c||"")};c.prepend=function(a,d){return Array.isArray(a)?[d].concat(a):d+a};c.append=function(a,d){return Array.isArray(a)?a.concat(d):a+d};c.map=function(a,d){return a.map(function(a){return a[d]})};c.reverse=function(a){return Array.isArray(a)?a.reverse():String(a).split("").reverse().join("")};c.get=function(a,d){return a[d]};c.json=function(a){return JSON.stringify(a)}},{}],7:[function(f,k,c){c.escape=function(a){return String(a).replace(/&(?!#?[a-zA-Z0-9]+;)/g,
"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")}},{}],8:[function(f,k,c){f=k.exports={};f.nextTick=function(){if("undefined"!==typeof window&&window.setImmediate)return function(a){return window.setImmediate(a)};if("undefined"!==typeof window&&window.postMessage&&window.addEventListener){var a=[];window.addEventListener("message",function(d){var c=d.source;c!==window&&null!==c||"process-tick"!==d.data||(d.stopPropagation(),0<a.length&&a.shift()())},
!0);return function(d){a.push(d);window.postMessage("process-tick","*")}}return function(a){setTimeout(a,0)}}();f.title="browser";f.browser=!0;f.env={};f.argv=[];f.binding=function(a){throw Error("process.binding is not supported");};f.cwd=function(){return"/"};f.chdir=function(a){throw Error("process.chdir is not supported");}},{}],9:[function(f,k,c){function a(a,d){var g,c,f;this._items=[];this._settings={bn:b.BN};h.call(this);l.call(this,a,d);if(g=this.load()){c=g.items;if(g=g.settings)this._settings=
g;if(c)for(f=0,g=c.length;f<g;f++)this.add(c[f])}}var d=f("./product"),h=f("./util/pubsub"),l=f("./util/storage"),b=f("./constants"),g=f("./util/currency");f=f("./util/mixin");f(a.prototype,h.prototype);f(a.prototype,l.prototype);a.prototype.add=function(a){var g=this,c=this.items(),h=!1,l=!1,f,k,t;for(k in a)b.SETTINGS.test(k)&&(this._settings[k]=a[k],delete a[k]);t=0;for(k=c.length;t<k;t++)if(c[t].isEqual(a)){f=c[t];f.set("quantity",f.get("quantity")+(parseInt(a.quantity,10)||1));h=t;l=!0;break}f||
(f=new d(a),f.isValid()&&(h=this._items.push(f)-1,f.on("change",function(a,b){g.save();g.fire("change",h,a,b)}),this.save()));f&&this.fire("add",h,f,l);return h};a.prototype.items=function(a){return"number"===typeof a?this._items[a]:this._items};a.prototype.settings=function(a){return a?this._settings[a]:this._settings};a.prototype.discount=function(a){var b=parseFloat(this.settings("discount_amount_cart"))||0;b||(b=(parseFloat(this.settings("discount_rate_cart"))||0)*this.subtotal()/100);a=a||{};
a.currency=this.settings("currency_code");return g(b,a)};a.prototype.subtotal=function(a){var b=this.items(),d=0,c,h;c=0;for(h=b.length;c<h;c++)d+=b[c].total();a=a||{};a.currency=this.settings("currency_code");return g(d,a)};a.prototype.total=function(a){var b;b=0+this.subtotal();b-=this.discount();a=a||{};a.currency=this.settings("currency_code");return g(b,a)};a.prototype.remove=function(a){var b=this._items.splice(a,1);0===this._items.length&&this.destroy();b&&(this.save(),this.fire("remove",a,
b[0]));return!!b.length};a.prototype.save=function(){var a=this.items(),b=this.settings(),d=[],g,c;g=0;for(c=a.length;g<c;g++)d.push(a[g].get());l.prototype.save.call(this,{items:d,settings:b})};a.prototype.checkout=function(a){this.fire("checkout",a)};a.prototype.destroy=function(){l.prototype.destroy.call(this);this._items=[];this._settings={bn:b.BN};this.fire("destroy")};k.exports=a},{"./constants":11,"./product":13,"./util/currency":15,"./util/mixin":18,"./util/pubsub":19,"./util/storage":20}],
10:[function(f,k,c){var a=f("./util/mixin"),d=k.exports={name:"PPMiniCart",parent:"undefined"!==typeof document?document.body:null,action:"https://www.paypal.com/cgi-bin/webscr",target:"",duration:30,template:'<% var items = cart.items(); var settings = cart.settings(); var hasItems = !!items.length; var priceFormat = {    format: true,    currency: cart.settings("currency_code")  }; var totalFormat = {    format: true,    showCode: true  }; %> <div class="overlay closer"></div><button type="button" class="minicart-closer closer">&times;</button><form method="post" class="<% if (!hasItems) { %>minicart-empty<% } %>" action="<%= config.action %>" target="<%= config.target %>">    <h6>Your Order:</h6>    <hr>    <ul>        <% for (var i= 0, idx = i + 1, len = items.length; i < len; i++, idx++) { %>        <li class="minicart-item">            <div class="minicart-details-name">                <a class="minicart-name" href="<%= items[i].get("href") %>"> <%= items[i].get("item_name") %> </a>                <ul class="minicart-attributes">                    <% if (items[i].get("item_number")) { %>                    <li>                        <%= items[i].get("item_number") %>                        <input type="hidden" name="item_number_<%= idx %>" value="<%= items[i].get("item_number") %>" />                    </li>                    <% } %>                    <% if (items[i].discount()) { %>                    <li>                        <%= config.strings.discount %> <%= items[i].discount(priceFormat) %>                        <input type="hidden" name="discount_amount_<%= idx %>" value="<%= items[i].discount() %>" />                    </li>                    <% } %>                    <% for (var options = items[i].options(), j = 0, len2 = options.length; j < len2; j++) { %>                        <li>                            <%= options[j].key %>: <%= options[j].value %>                            <input type="hidden" name="on<%= j %>_<%= idx %>" value="<%= options[j].key %>" />                            <input type="hidden" name="os<%= j %>_<%= idx %>" value="<%= options[j].value %>" />                        </li>                    <% } %>                </ul>            </div>            <div class="minicart-details-quantity">                <span  data-minicart-idx="<%= i %>" name="quantity_minus_<%= idx %>" class="minicart-minus">&minus;</span>                <input class="minicart-quantity" data-minicart-idx="<%= i %>" name="quantity_<%= idx %>" type="text" pattern="[0-9]*" value="<%= items[i].get("quantity") %>" autocomplete="off" />                <span  data-minicart-idx="<%= i %>" name="quantity_minus_<%= idx %>" class="minicart-plus">&plus;</span>            </div>            <div class="minicart-details-price">                <span class="minicart-price"><%= items[i].total(priceFormat) %></span>            </div>            <div class="minicart-details-remove">                <span class="minicart-remove" data-minicart-idx="<%= i %>"></span>            </div>            <input type="hidden" name="item_name_<%= idx %>" value="<%= items[i].get("item_name") %>" />            <input type="hidden" name="amount_<%= idx %>" value="<%= items[i].amount() %>" />            <input type="hidden" name="shipping_<%= idx %>" value="<%= items[i].get("shipping") %>" />            <input type="hidden" name="shipping2_<%= idx %>" value="<%= items[i].get("shipping2") %>" />        </li>        <% } %>    </ul>    <hr>    <div class="minicart-footer">        <% if (hasItems) { %>            <div class="minicart-subtotal">                <%= config.strings.subtotal %> <b><%= cart.total(totalFormat) %></b>            </div>            <button class="minicart-submit" type="submit" data-minicart-alt="<%= config.strings.buttonAlt %>"><%- config.strings.button %></button>        <% } else { %>            <p class="minicart-empty-text"><%= config.strings.empty %></p>        <% } %>    </div>    <input type="hidden" name="cmd" value="_cart" />    <input type="hidden" name="upload" value="1" />    <% for (var key in settings) { %>        <input type="hidden" name="<%= key %>" value="<%= settings[key] %>" />    <% } %></form>',
styles:'.minicart-showing #PPMiniCart {    display: flex;}#PPMiniCart {    display: none;    justify-content: center;    align-items: center;    position: fixed;    left: 0;    top: 0;    right:0;    bottom:0;}#PPMiniCart form {    position: relative;    width: 600px;    padding: 2rem;    background: #fbfbfb;    font-size: 1rem;    color: #222;}@media(max-width:767px) {    #PPMiniCart form {        padding: 1rem;        width:100%;    }}#PPMiniCart form.minicart-empty {    padding-bottom: 10px;    font-size: 16px;    font-weight: bold;}#PPMiniCart ul {    width: 100%;    margin-bottom: 1.2rem;    padding: 0rem;    list-style-type: none;}#PPMiniCart .minicart-empty ul {    display: none;}#PPMiniCart .minicart-closer {    position: absolute;    top:10px;    right: 10px;    margin: 0;    background: 0;    border: 0;    padding: 10px;    font-size: 28px;    line-height: 28px;    cursor: pointer;    color: #fff;}#PPMiniCart .minicart-item {    display:flex;    align-items: center;    padding: 12px 0;    min-height: 25px;}#PPMiniCart .minicart-item a {    color: #333;    text-decoration: none;}#PPMiniCart .minicart-details-name {    flex: 0 0 40%;}#PPMiniCart .minicart-details-quantity {    display: flex;    flex: 1 1 100%;}#PPMiniCart .minicart-details-price {    flex: 1 1 100%;}#PPMiniCart .minicart-details-remove {    flex: 0 1 auto;}#PPMiniCart .minicart-attributes {    margin: 0;    padding: 0;    background: transparent;    border: 0;    border-radius: 0;    box-shadow: none;    color: #999;    font-size: 12px;    line-height: 22px;}#PPMiniCart .minicart-attributes li {    display: inline;}#PPMiniCart .minicart-attributes li:after {    content: ",";}#PPMiniCart .minicart-attributes li:last-child:after {    content: "";}#PPMiniCart .minicart-quantity {    z-index: 1;    width: 35px;    height: 25px;    padding: 2px 4px;    border: 1px solid #ccc;    font-size: 15px;    text-align: right;    transition: border linear 0.2s, box-shadow linear 0.2s;    -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;    -moz-transition: border linear 0.2s, box-shadow linear 0.2s;}#PPMiniCart .minicart-quantity:hover {    border-color: #0078C1;}#PPMiniCart .minicart-quantity:focus {    border-color: #0078C1;    outline: 0;    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 3px rgba(0, 120, 193, 0.4);}#PPMiniCart .minicart-remove:hover::after {    opacity:1;}#PPMiniCart .minicart-remove:after {    display:flex;    align-items: center;    justify-content:center;    border-radius: 50%;    content: "\\00d7";    font-size:1rem;    color: #a3a3a3;    background: transparent;    border: 1px solid #a3a3a3;    cursor: pointer;    opacity: 0.70;    height: 25px;    width:25px;}#PPMiniCart .minicart-remove {    display:block;}#PPMiniCart .minicart-remove:after:hover {    opacity: 1;}#PPMiniCart .minicart-footer {    text-align: right}#PPMiniCart .minicart-subtotal {    padding-left: 6px;    font-size: 16px;}#PPMiniCart .minicart-submit {    width:auto;    margin-left:auto;    padding: 12px 24px;    border: none;    cursor: pointer;    background: #ffc439;    color: #333;    font-weight: bold;    font-size: 14px;    outline: none;    margin-top:2rem;}#PPMiniCart .minicart-submit:hover {    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.05);}#PPMiniCart .minicart-submit img {    vertical-align: bottom;    width:65px;}#PPMiniCart .overlay {    width: 100%;    height: 100%;    position: absolute;    background: #000;    opacity: 0.4;}#PPMiniCart .minicart-plus,#PPMiniCart .minicart-minus {    cursor: pointer;    display: flex;    justify-content: center;    align-items: center;    width: 25px;    height: 25px;    border: 1px solid #ccc;    transition: border linear 0.2s, box-shadow linear 0.2s;    -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;    -moz-transition: border linear 0.2s, box-shadow linear 0.2s;}#PPMiniCart .minicart-plus {    margin-left:-1px;}#PPMiniCart .minicart-minus {    margin-right:-1px;}',
strings:{button:'Check Out with <img src="//cdnjs.cloudflare.com/ajax/libs/minicart/3.0.1/paypal_65x18.png" width="65" height="18" alt="PayPal" />',subtotal:"Total:",discount:"Discount:",empty:"Your shopping cart is empty"}};k.exports.load=function(c){return a(d,c)}},{"./util/mixin":18}],11:[function(f,k,c){k.exports={COMMANDS:{_cart:!0,_xclick:!0,_donations:!0},SETTINGS:/^(?:business|currency_code|lc|paymentaction|no_shipping|cn|no_note|invoice|handling_cart|weight_cart|weight_unit|tax_cart|discount_amount_cart|discount_rate_cart|page_style|image_url|cpp_|cs|cbt|return|cancel_return|notify_url|rm|custom|charset)/,
BN:"MiniCart_AddToCart_WPS_US",KEYUP_TIMEOUT:500,SHOWING_CLASS:"minicart-showing",REMOVE_CLASS:"minicart-remove",CLOSER_CLASS:"closer",QUANTITY_CLASS:"minicart-quantity",QUANTITY_CLASS_PLUS:"minicart-plus",QUANTITY_CLASS_MINUS:"minicart-minus",ITEM_CLASS:"minicart-item",ITEM_CHANGED_CLASS:"minicart-item-changed",SUBMIT_CLASS:"minicart-submit",DATA_IDX:"data-minicart-idx"}},{}],12:[function(f,k,c){var a=f("./cart"),d=f("./view"),h=f("./config"),l={},b,g,e;l.render=function(c){g=l.config=h.load(c);
b=l.cart=new a(g.name,g.duration);e=l.view=new d({config:g,cart:b});b.on("add",e.addItem,e);b.on("change",e.changeItem,e);b.on("remove",e.removeItem,e);b.on("destroy",e.hide,e)};l.reset=function(){b.destroy();e.hide();e.redraw()};"undefined"===typeof window?k.exports=l:(window.paypal||(window.paypal={}),window.paypal.minicart=l)},{"./cart":9,"./config":10,"./view":22}],13:[function(f,k,c){function a(a){a.quantity=l.quantity(a.quantity);a.amount=l.amount(a.amount);a.href=l.href(a.href);this._data=
a;this._total=this._amount=this._discount=this._options=null;h.call(this)}var d=f("./util/currency"),h=f("./util/pubsub"),l={quantity:function(a){a=parseInt(a,10);if(isNaN(a)||!a)a=1;return a},amount:function(a){return parseFloat(a)||0},href:function(a){return a?a:"undefined"!==typeof window?window.location.href:null}};f("./util/mixin")(a.prototype,h.prototype);a.prototype.get=function(a){return a?this._data[a]:this._data};a.prototype.set=function(a,d){var e=l[a];this._data[a]=e?e(d):d;this._total=
this._amount=this._discount=this._options=null;this.fire("change",a)};a.prototype.options=function(){var a,d,e,c,h,f;if(!this._options){a=[];for(h=0;d=this.get("on"+h);){e=this.get("os"+h);for(f=c=0;"undefined"!==typeof this.get("option_select"+f);){if(this.get("option_select"+f)===e){c=l.amount(this.get("option_amount"+f));break}f++}a.push({key:d,value:e,amount:c});h++}this._options=a}return this._options};a.prototype.discount=function(a){var c,e,h,f;this._discount||(h=0,e=parseInt(this.get("discount_num"),
10)||0,e=Math.max(e,this.get("quantity")-1),void 0!==this.get("discount_amount")?(c=l.amount(this.get("discount_amount")),h=h+c+l.amount(this.get("discount_amount2")||c)*e):void 0!==this.get("discount_rate")&&(c=l.amount(this.get("discount_rate")),f=this.amount(),h+=c*f/100,h+=l.amount(this.get("discount_rate2")||c)*f*e/100),this._discount=h);return d(this._discount,a)};a.prototype.amount=function(a){var c,e,h,f;if(!this._amount){c=this.get("amount");e=this.options();f=0;for(h=e.length;f<h;f++)c+=
e[f].amount;this._amount=c}return d(this._amount,a)};a.prototype.total=function(a){var c;this._total||(c=this.get("quantity")*this.amount(),c-=this.discount(),this._total=l.amount(c));return d(this._total,a)};a.prototype.isEqual=function(b){var d=!1;b instanceof a&&(b=b._data);if(this.get("item_name")===b.item_name&&this.get("item_number")===b.item_number&&this.get("amount")===l.amount(b.amount))for(var e=0,d=!0;"undefined"!==typeof b["os"+e];){if(this.get("os"+e)!==b["os"+e]){d=!1;break}e++}return d};
a.prototype.isValid=function(){return this.get("item_name")&&0<this.amount()};a.prototype.destroy=function(){this._data=[];this.fire("destroy",this)};k.exports=a},{"./util/currency":15,"./util/mixin":18,"./util/pubsub":19}],14:[function(f,k,c){k.exports.add=function(a,d){var c;if(!a)return!1;a&&a.classList&&a.classList.add?a.classList.add(d):(c=new RegExp("\\b"+d+"\\b"),c.test(a.className)||(a.className+=" "+d))};k.exports.remove=function(a,d){var c;if(!a)return!1;a.classList&&a.classList.add?a.classList.remove(d):
(c=new RegExp("\\b"+d+"\\b"),c.test(a.className)&&(a.className=a.className.replace(c,"")))};k.exports.inject=function(a,d){var c;if(!a)return!1;d&&(c=document.createElement("style"),c.type="text/css",c.styleSheet?c.styleSheet.cssText=d:c.appendChild(document.createTextNode(d)),a.appendChild(c))}},{}],15:[function(f,k,c){var a={AED:{before:"\u062c"},ANG:{before:"\u0192"},ARS:{before:"$",code:!0},AUD:{before:"$",code:!0},AWG:{before:"\u0192"},BBD:{before:"$",code:!0},BGN:{before:"\u043b\u0432"},BMD:{before:"$",
code:!0},BND:{before:"$",code:!0},BRL:{before:"R$"},BSD:{before:"$",code:!0},CAD:{before:"$",code:!0},CHF:{before:"",code:!0},CLP:{before:"$",code:!0},CNY:{before:"\u00a5"},COP:{before:"$",code:!0},CRC:{before:"\u20a1"},CZK:{before:"Kc"},DKK:{before:"kr"},DOP:{before:"$",code:!0},EEK:{before:"kr"},EUR:{before:"\u20ac"},GBP:{before:"\u00a3"},GTQ:{before:"Q"},HKD:{before:"$",code:!0},HRK:{before:"kn"},HUF:{before:"Ft"},IDR:{before:"Rp"},ILS:{before:"\u20aa"},INR:{before:"Rs."},ISK:{before:"kr"},JMD:{before:"J$"},
JPY:{before:"\u00a5"},KRW:{before:"\u20a9"},KYD:{before:"$",code:!0},LTL:{before:"Lt"},LVL:{before:"Ls"},MXN:{before:"$",code:!0},MYR:{before:"RM"},NOK:{before:"kr"},NZD:{before:"$",code:!0},PEN:{before:"S/"},PHP:{before:"Php"},PLN:{before:"z"},QAR:{before:"\ufdfc"},RON:{before:"lei"},RUB:{before:"\u0440\u0443\u0431"},SAR:{before:"\ufdfc"},SEK:{before:"kr"},SGD:{before:"$",code:!0},THB:{before:"\u0e3f"},TRY:{before:"TL"},TTD:{before:"TT$"},TWD:{before:"NT$"},UAH:{before:"\u20b4"},USD:{before:"$",
code:!0},UYU:{before:"$U"},VEF:{before:"Bs"},VND:{before:"\u20ab"},XCD:{before:"$",code:!0},ZAR:{before:"R"}};k.exports=function(d,c){var f=c&&c.currency||"USD",b=a[f],g=b.before||"",e=b.after||"",k=b.length||2,b=b.code&&c&&c.showCode,q=d;c&&c.format&&(q=g+q.toFixed(k)+e);b&&(q+=" "+f);return q}},{}],16:[function(f,k,c){k.exports=function(a,d){var c=[];if(d){if(d.addEventListener)return{add:function(a,b,d,e){e=e||a;var f=function(a){d.call(e,a)};a.addEventListener(b,f,!1);c.push([a,b,d,f])},remove:function(a,
b,d){var e,f=c.length,k;for(k=0;k<f;k++)if(e=c[k],e[0]===a&&e[1]===b&&e[2]===d&&(e=e[3]))return a.removeEventListener(b,e,!1),c=c.slice(k),!0}};if(d.attachEvent)return{add:function(d,b,f,e){e=e||d;var k=function(){var b=a.event;b.target=b.target||b.srcElement;b.preventDefault=function(){b.returnValue=!1};f.call(e,b)};d.attachEvent("on"+b,k);c.push([d,b,f,k])},remove:function(a,b,d){var e,f=c.length,k;for(k=0;k<f;k++)if(e=c[k],e[0]===a&&e[1]===b&&e[2]===d&&(e=e[3]))return a.detachEvent("on"+b,e),c=
c.slice(k),!0}}}else return{add:function(){},remove:function(){}}}("undefined"===typeof window?null:window,"undefined"===typeof document?null:document)},{}],17:[function(f,k,c){var a=k.exports={parse:function(d){d=d.elements;var c={},f,b,g,e;g=0;for(e=d.length;g<e;g++)if(f=d[g],b=a.getInputValue(f))c[f.name]=b;return c},getInputValue:function(a){var c=a.tagName.toLowerCase();return"select"===c?a.options[a.selectedIndex].value:"textarea"===c?a.innerText:"radio"===a.type?a.checked?a.value:null:"checkbox"===
a.type?a.checked?a.value:null:a.value}}},{}],18:[function(f,k,c){k.exports=function d(c,f){var b,g;for(g in f)(b=f[g])&&b.constructor===Object?c[g]?d(c[g]||{},b):c[g]=b:c[g]=b;return c}},{}],19:[function(f,k,c){function a(){this._eventCache={}}a.prototype.on=function(a,c,f){var b=this._eventCache[a];b||(b=this._eventCache[a]=[]);b.push([c,f])};a.prototype.off=function(a,c){var f=this._eventCache[a],b,g;if(f)for(b=0,g=f.length;b<g;b++)f[b]===c&&(f=f.splice(b,1))};a.prototype.fire=function(a){var c=
this._eventCache[a],f,b,g,e;if(c)for(f=0,b=c.length;f<b;f++)g=c[f][0],e=c[f][1]||this,"function"===typeof g&&g.apply(e,Array.prototype.slice.call(arguments,1))};k.exports=a},{}],20:[function(f,k,c){f=(k.exports=function(a,c){this._name=a;this._duration=c||30}).prototype;f.load=function(){if("object"===typeof window&&window.localStorage){var a=window.localStorage.getItem(this._name),c,f;a&&(a=JSON.parse(decodeURIComponent(a)));if(a&&a.expires&&(c=new Date,f=new Date(a.expires),c>f)){this.destroy();
return}return a&&a.value}};f.save=function(a){if("object"===typeof window&&window.localStorage){var c=new Date;c.setTime(c.getTime()+864E5*this._duration);a={value:a,expires:c.toGMTString()};window.localStorage.setItem(this._name,encodeURIComponent(JSON.stringify(a)))}};f.destroy=function(){"object"===typeof window&&window.localStorage&&window.localStorage.removeItem(this._name)}},{}],21:[function(f,k,c){var a=f("ejs");k.exports=function(c,f){return a.render(c,f)};String.prototype.trim||(String.prototype.trim=
function(){return this.replace(/^\s+|\s+$/g,"")})},{ejs:5}],22:[function(f,k,c){function a(a){var b;this.el=b=document.createElement("div");this.model=a;this.isShowing=!1;b.id=d.name;d.parent.appendChild(b);g.inject(document.getElementsByTagName("head")[0],d.styles);h.add(document,"ontouchstart"in window?"touchstart":"click",e.click,this);h.add(document,"keyup",e.keyup,this);h.add(document,"readystatechange",e.readystatechange,this);h.add(window,"pageshow",e.pageshow,this)}var d=f("./config"),h=f("./util/events"),
l=f("./util/template"),b=f("./util/forms"),g=f("./util/css"),e=f("./viewevents"),p=f("./constants");a.prototype.redraw=function(){h.remove(this.el.querySelector("form"),"submit",this.model.cart.checkout,this.model.cart);this.el.innerHTML=l(d.template,this.model);h.add(this.el.querySelector("form"),"submit",this.model.cart.checkout,this.model.cart)};a.prototype.show=function(){this.isShowing||(g.add(document.body,p.SHOWING_CLASS),this.isShowing=!0)};a.prototype.hide=function(){this.isShowing&&(g.remove(document.body,
p.SHOWING_CLASS),this.isShowing=!1)};a.prototype.toggle=function(){this[this.isShowing?"hide":"show"]()};a.prototype.bind=function(a){var c=this;if(!p.COMMANDS[a.cmd.value]||a.hasMinicart)return!1;a.hasMinicart=!0;a.display?h.add(a,"submit",function(a){a.preventDefault();c.show()}):h.add(a,"submit",function(e){e.preventDefault(e);c.model.cart.add(b.parse(a))});return!0};a.prototype.addItem=function(a,b){this.redraw();this.show();var c=this.el.querySelectorAll("."+p.ITEM_CLASS);g.add(c[a],p.ITEM_CHANGED_CLASS)};
a.prototype.changeItem=function(a,b){this.redraw();this.show();var c=this.el.querySelectorAll("."+p.ITEM_CLASS);g.add(c[a],p.ITEM_CHANGED_CLASS)};a.prototype.removeItem=function(a){this.redraw()};k.exports=a},{"./config":10,"./constants":11,"./util/css":14,"./util/events":16,"./util/forms":17,"./util/template":21,"./viewevents":23}],23:[function(f,k,c){var a=f("./constants"),d=f("./util/events"),h;k.exports=h={click:function(c){var b=c.target,d=b.className;c=this.model.cart;if(this.isShowing)if(-1!=
d.search(a.CLOSER_CLASS))this.hide();else if(-1!=d.search(a.REMOVE_CLASS))this.model.cart.remove(b.getAttribute(a.DATA_IDX));else if(-1!=d.search(a.QUANTITY_CLASS))b[b.setSelectionRange?"setSelectionRange":"select"](0,999);else if(-1!=d.search(a.QUANTITY_CLASS_PLUS))b=b.getAttribute("data-minicart-idx"),c=c._items[b],b=c.get("quantity")+1,c.set("quantity",b);else if(-1!=d.search(a.QUANTITY_CLASS_MINUS))b=b.getAttribute("data-minicart-idx"),c=c._items[b],1<=c.get("quantity")&&(b=c.get("quantity")-
1,c.set("quantity",b));else if(!/input|button|select|option|span/i.test(b.tagName)){for(;1===b.nodeType;){if(b===this.el)return;b=b.parentNode}this.hide()}},keyup:function(c){var b=this,d=c.target;console.log(this);d.className===a.QUANTITY_CLASS&&setTimeout(function(){var c=parseInt(d.getAttribute(a.DATA_IDX),10),f=b.model.cart,h=f.items(c),k=parseInt(d.value,10);h&&(0<k?h.set("quantity",k):0===k&&f.remove(c))},a.KEYUP_TIMEOUT)},readystatechange:function(){if(/interactive|complete/.test(document.readyState)){var c,
b,f,e;c=document.getElementsByTagName("form");f=0;for(e=c.length;f<e;f++)b=c[f],b.cmd&&a.COMMANDS[b.cmd.value]&&this.bind(b);this.redraw();d.remove(document,"readystatechange",h.readystatechange)}},pageshow:function(a){a.persisted&&(this.redraw(),this.hide())}}},{"./constants":11,"./util/events":16}]},{},[9,10,12,14,11,15,17,13,19,16,18,22,21,20,23]);
