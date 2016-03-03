
/*plugins*/
/*! jQuery v@1.8.1 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.1",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("? ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n=(p._data(this,"events")||{})[c.type]||[],o=n.delegateCount,q=[].slice.call(arguments),r=!c.exclusive&&!c.namespace,s=p.event.special[c.type]||{},t=[];q[0]=c,c.delegateTarget=this;if(s.preDispatch&&s.preDispatch.call(this,c)===!1)return;if(o&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<o;d++)k=n[d],l=k.selector,h[l]===b&&(h[l]=p(l,this).index(f)>=0),h[l]&&j.push(k);j.length&&t.push({elem:f,matches:j})}n.length>o&&t.push({elem:this,matches:n.slice(o)});for(d=0;d<t.length&&!c.isPropagationStopped();d++){i=t[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){k=i.matches[e];if(r||!c.namespace&&!k.namespace||c.namespace_re&&c.namespace_re.test(k.namespace))c.data=k.data,c.handleObj=k,g=((p.event.special[k.origType]||{}).handle||k.handler).apply(i.elem,q),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return s.postDispatch&&s.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function $(a,b,c,d){c=c||[],b=b||q;var e,f,g,j,k=b.nodeType;if(k!==1&&k!==9)return[];if(!a||typeof a!="string")return c;g=h(b);if(!g&&!d)if(e=L.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&i(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return u.apply(c,t.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&X&&b.getElementsByClassName)return u.apply(c,t.call(b.getElementsByClassName(j),0)),c}return bk(a,b,c,d,g)}function _(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function ba(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bb(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bc(a,b,c,d){var e,g,h,i,j,k,l,m,n,p,r=!c&&b!==q,s=(r?"<s>":"")+a.replace(H,"$1<s>"),u=y[o][s];if(u)return d?0:t.call(u,0);j=a,k=[],m=0,n=f.preFilter,p=f.filter;while(j){if(!e||(g=I.exec(j)))g&&(j=j.slice(g[0].length),h.selector=l),k.push(h=[]),l="",r&&(j=" "+j);e=!1;if(g=J.exec(j))l+=g[0],j=j.slice(g[0].length),e=h.push({part:g.pop().replace(H," "),string:g[0],captures:g});for(i in p)(g=S[i].exec(j))&&(!n[i]||(g=n[i](g,b,c)))&&(l+=g[0],j=j.slice(g[0].length),e=h.push({part:i,string:g.shift(),captures:g}));if(!e)break}return l&&(h.selector=l),d?j.length:j?$.error(a):t.call(y(s,k),0)}function bd(a,b,e,f){var g=b.dir,h=s++;return a||(a=function(a){return a===e}),b.first?function(b){while(b=b[g])if(b.nodeType===1)return a(b)&&b}:f?function(b){while(b=b[g])if(b.nodeType===1&&a(b))return b}:function(b){var e,f=h+"."+c,i=f+"."+d;while(b=b[g])if(b.nodeType===1){if((e=b[o])===i)return b.sizset;if(typeof e=="string"&&e.indexOf(f)===0){if(b.sizset)return b}else{b[o]=i;if(a(b))return b.sizset=!0,b;b.sizset=!1}}}}function be(a,b){return a?function(c){var d=b(c);return d&&a(d===!0?c:d)}:b}function bf(a,b,c){var d,e,g=0;for(;d=a[g];g++)f.relative[d.part]?e=bd(e,f.relative[d.part],b,c):e=be(e,f.filter[d.part].apply(null,d.captures.concat(b,c)));return e}function bg(a){return function(b){var c,d=0;for(;c=a[d];d++)if(c(b))return!0;return!1}}function bh(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)$(a,b[e],c,d)}function bi(a,b,c,d,e,g){var h,i=f.setFilters[b.toLowerCase()];return i||$.error(b),(a||!(h=e))&&bh(a||"*",d,h=[],e),h.length>0?i(h,c,g):[]}function bj(a,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s=0,t=a.length,v=S.POS,w=new RegExp("^"+v.source+"(?!"+A+")","i"),x=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(n[a]=b)};for(;s<t;s++){f=a[s],g="",m=e;for(h=0,i=f.length;h<i;h++){j=f[h],k=j.string;if(j.part==="PSEUDO"){v.exec(""),l=0;while(n=v.exec(k)){o=!0,p=v.lastIndex=n.index+n[0].length;if(p>l){g+=k.slice(l,n.index),l=p,q=[c],J.test(g)&&(m&&(q=m),m=e);if(r=O.test(g))g=g.slice(0,-5).replace(J,"$&*"),l++;n.length>1&&n[0].replace(w,x),m=bi(g,n[1],n[2],q,m,r)}g=""}}o||(g+=k),o=!1}g?J.test(g)?bh(g,m||[c],d,e):$(g,c,d,e?e.concat(m):m):u.apply(d,m)}return t===1?d:$.uniqueSort(d)}function bk(a,b,e,g,h){a=a.replace(H,"$1");var i,k,l,m,n,o,p,q,r,s,v=bc(a,b,h),w=b.nodeType;if(S.POS.test(a))return bj(v,b,e,g);if(g)i=t.call(g,0);else if(v.length===1){if((o=t.call(v[0],0)).length>2&&(p=o[0]).part==="ID"&&w===9&&!h&&f.relative[o[1].part]){b=f.find.ID(p.captures[0].replace(R,""),b,h)[0];if(!b)return e;a=a.slice(o.shift().string.length)}r=(v=N.exec(o[0].string))&&!v.index&&b.parentNode||b,q="";for(n=o.length-1;n>=0;n--){p=o[n],s=p.part,q=p.string+q;if(f.relative[s])break;if(f.order.test(s)){i=f.find[s](p.captures[0].replace(R,""),r,h);if(i==null)continue;a=a.slice(0,a.length-q.length)+q.replace(S[s],""),a||u.apply(e,t.call(i,0));break}}}if(a){k=j(a,b,h),c=k.dirruns++,i==null&&(i=f.find.TAG("*",N.test(a)&&b.parentNode||b));for(n=0;m=i[n];n++)d=k.runs++,k(m)&&e.push(m)}return e}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=a.document,r=q.documentElement,s=0,t=[].slice,u=[].push,v=function(a,b){return a[o]=b||!0,a},w=function(){var a={},b=[];return v(function(c,d){return b.push(c)>f.cacheLength&&delete a[b.shift()],a[c]=d},a)},x=w(),y=w(),z=w(),A="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",C=B.replace("w","w#"),D="([*^$|!~]?=)",E="\\["+A+"*("+B+")"+A+"*(?:"+D+A+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+C+")|)|)"+A+"*\\]",F=":("+B+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+E+")|[^:]|\\\\.)*|.*))\\)|)",G=":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",H=new RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g"),I=new RegExp("^"+A+"*,"+A+"*"),J=new RegExp("^"+A+"*([\\x20\\t\\r\\n\\f>+~])"+A+"*"),K=new RegExp(F),L=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,M=/^:not/,N=/[\x20\t\r\n\f]*[+~]/,O=/:not\($/,P=/h\d/i,Q=/input|select|textarea|button/i,R=/\\(?!\\)/g,S={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),NAME:new RegExp("^\\[name=['\"]?("+B+")['\"]?\\]"),TAG:new RegExp("^("+B.replace("w","w*")+")"),ATTR:new RegExp("^"+E),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),POS:new RegExp(G,"ig"),needsContext:new RegExp("^"+A+"*[>+~]|"+G,"i")},T=function(a){var b=q.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},U=T(function(a){return a.appendChild(q.createComment("")),!a.getElementsByTagName("*").length}),V=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),W=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),X=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),Y=T(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",r.insertBefore(a,r.firstChild);var b=q.getElementsByName&&q.getElementsByName(o).length===2+q.getElementsByName(o+0).length;return e=!q.getElementById(o),r.removeChild(a),b});try{t.call(r.childNodes,0)[0].nodeType}catch(Z){t=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}$.matches=function(a,b){return $(a,null,null,b)},$.matchesSelector=function(a,b){return $(b,null,null,[a]).length>0},g=$.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=g(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=g(b);return c},h=$.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},i=$.contains=r.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:r.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},$.attr=function(a,b){var c,d=h(a);return d||(b=b.toLowerCase()),f.attrHandle[b]?f.attrHandle[b](a):W||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},f=$.selectors={cacheLength:50,createPseudo:v,match:S,order:new RegExp("ID|TAG"+(Y?"|NAME":"")+(X?"|CLASS":"")),attrHandle:V?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:e?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:U?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(R,""),a[3]=(a[4]||a[5]||"").replace(R,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||$.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&$.error(a[0]),a},PSEUDO:function(a,b,c){var d,e;if(S.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(d=a[4])K.test(d)&&(e=bc(d,b,c,!0))&&(e=d.indexOf(")",d.length-e)-d.length)&&(d=d.slice(0,e),a[0]=a[0].slice(0,e)),a[2]=d;return a.slice(0,3)}},filter:{ID:e?function(a){return a=a.replace(R,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(R,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(R,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=x[o][a];return b||(b=x(a,new RegExp("(^|"+A+")"+a+"("+A+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=$.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return $.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=s++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[o]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[o]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e,g=f.pseudos[a]||f.pseudos[a.toLowerCase()];return g||$.error("unsupported pseudo: "+a),g[o]?g(b,c,d):g.length>1?(e=[a,a,"",b],function(a){return g(a,0,e)}):g}},pseudos:{not:v(function(a,b,c){var d=j(a.replace(H,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!f.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:v(function(a){return function(b){return(b.textContent||b.innerText||g(b)).indexOf(a)>-1}}),has:v(function(a){return function(b){return $(a,b).length>0}}),header:function(a){return P.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:_("radio"),checkbox:_("checkbox"),file:_("file"),password:_("password"),image:_("image"),submit:ba("submit"),reset:ba("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return Q.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}},k=r.compareDocumentPosition?function(a,b){return a===b?(l=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return l=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bb(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bb(e[j],f[j]);return j===c?bb(a,f[j],-1):bb(e[j],b,1)},[0,0].sort(k),m=!l,$.uniqueSort=function(a){var b,c=1;l=m,a.sort(k);if(l)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},$.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},j=$.compile=function(a,b,c){var d,e,f,g=z[o][a];if(g&&g.context===b)return g;d=bc(a,b,c);for(e=0,f=d.length;e<f;e++)d[e]=bf(d[e],b,c);return g=z(a,bg(d)),g.context=b,g.runs=g.dirruns=0,g},q.querySelectorAll&&function(){var a,b=bk,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=r.matchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||r.oMatchesSelector||r.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+A+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+A+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bk=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return u.apply(f,t.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j,k,l,m=d.getAttribute("id"),n=m||o,p=N.test(a)&&d.parentNode||d;m?n=n.replace(c,"\\$&"):d.setAttribute("id",n),j=bc(a,d,h),n="[id='"+n+"']";for(k=0,l=j.length;k<l;k++)j[k]=n+j[k].selector;try{return u.apply(f,t.call(p.querySelectorAll(j.join(",")),0)),f}catch(i){}finally{m||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push(S.PSEUDO.source,S.POS.source,"!=")}catch(c){}}),f=new RegExp(f.join("|")),$.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!h(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=g.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return $(c,null,null,[b]).length>0})}(),f.setFilters.nth=f.setFilters.eq,f.filters=f.pseudos,$.attr=p.attr,p.find=$,p.expr=$.selectors,p.expr[":"]=p.expr.pseudos,p.unique=$.uniqueSort,p.text=$.getText,p.isXMLDoc=$.isXML,p.contains=$.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{cj=f.href}catch(cy){cj=e.createElement("a"),cj.href="",cj=cj.href}ck=ct.exec(cj.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:cj,isLocal:cn.test(ck[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,ck[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==ck[1]&&i[2]==ck[2]&&(i[3]||(i[1]==="http:"?80:443))==(ck[3]||(ck[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cQ.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=da(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);

/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.23",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),a.curCSS||(a.curCSS=a.css),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.23"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})})(jQuery);;

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){var b=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks){for(var a=b.length;a;){d.event.fixHooks[b[--a]]=d.event.mouseHooks}}d.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=b.length;e;){this.addEventListener(b[--e],c,false)}}else{this.onmousewheel=c}},teardown:function(){if(this.removeEventListener){for(var e=b.length;e;){this.removeEventListener(b[--e],c,false)}}else{this.onmousewheel=null}}};d.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}});function c(j){var h=j||window.event,g=[].slice.call(arguments,1),k=0,i=true,f=0,e=0;j=d.event.fix(h);j.type="mousewheel";if(h.wheelDelta){k=h.wheelDelta/120}if(h.detail){k=-h.detail/3}e=k;if(h.axis!==undefined&&h.axis===h.HORIZONTAL_AXIS){e=0;f=-1*k}if(h.wheelDeltaY!==undefined){e=h.wheelDeltaY/120}if(h.wheelDeltaX!==undefined){f=-1*h.wheelDeltaX/120}g.unshift(j,k,f,e);return(d.event.dispatch||d.event.handle).apply(this,g)}})(jQuery);

/*!
 * jScrollPane - v2.0.0beta12 - 2012-07-24
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var ay,Q=this,Y,aj,v,al,T,Z,y,q,az,aE,au,i,I,h,j,aa,U,ap,X,t,A,aq,af,am,G,l,at,ax,x,av,aH,f,L,ai=true,P=true,aG=false,k=false,ao=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aH=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function ar(aQ){var aL,aN,aM,aJ,aI,aP,aO=false,aK=false;ay=aQ;if(Y===c){aI=D.scrollTop();aP=D.scrollLeft();D.css({overflow:"hidden",padding:0});aj=D.innerWidth()+f;v=D.innerHeight();D.width(aj);Y=b('<div class="jspPane" />').css("padding",aH).append(D.children());al=b('<div class="jspContainer" />').css({width:aj+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aO=ay.stickToBottom&&K();aK=ay.stickToRight&&B();aJ=D.innerWidth()+f!=aj||D.outerHeight()!=v;if(aJ){aj=D.innerWidth()+f;v=D.innerHeight();al.css({width:aj+"px",height:v+"px"})}if(!aJ&&L==T&&Y.outerHeight()==Z){D.width(aj);return}L=T;Y.css("width","");D.width(aj);al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aQ.contentWidth){T=aQ.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/aj;q=Z/v;az=q>1;aE=y>1;if(!(aE||az)){D.removeClass("jspScrollable");Y.css({top:0,width:al.width()-f});n();E();R();w()}else{D.addClass("jspScrollable");aL=ay.maintainPosition&&(I||aa);if(aL){aN=aC();aM=aA()}aF();z();F();if(aL){N(aK?(T-aj):aN,false);M(aO?(Z-v):aM,false)}J();ag();an();if(ay.enableKeyboardNavigation){S()}if(ay.clickOnTrack){p()}C();if(ay.hijackInternalLinks){m()}}if(ay.autoReinitialise&&!av){av=setInterval(function(){ar(ay)},ay.autoReinitialiseDelay)}else{if(!ay.autoReinitialise&&av){clearInterval(av)}}aI&&D.scrollTop(0)&&M(aI,false);aP&&D.scrollLeft(0)&&N(aP,false);D.trigger("jsp-initialised",[aE||az])}function aF(){if(az){al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=al.find(">.jspVerticalBar");ap=U.find(">.jspTrack");au=ap.find(">.jspDrag");if(ay.showArrows){aq=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aD(0,-1)).bind("click.jsp",aB);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aD(0,1)).bind("click.jsp",aB);if(ay.arrowScrollOnHover){aq.bind("mouseover.jsp",aD(0,-1,aq));af.bind("mouseover.jsp",aD(0,1,af))}ak(ap,ay.verticalArrowPositions,aq,af)}t=v;al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});au.hover(function(){au.addClass("jspHover")},function(){au.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);au.addClass("jspActive");var s=aI.pageY-au.position().top;b("html").bind("mousemove.jsp",function(aJ){V(aJ.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});o()}}function o(){ap.height(t+"px");I=0;X=ay.verticalGutter+ap.outerWidth();Y.width(aj-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aE){al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));am=al.find(">.jspHorizontalBar");G=am.find(">.jspTrack");h=G.find(">.jspDrag");if(ay.showArrows){ax=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aD(-1,0)).bind("click.jsp",aB);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aD(1,0)).bind("click.jsp",aB);if(ay.arrowScrollOnHover){ax.bind("mouseover.jsp",aD(-1,0,ax));x.bind("mouseover.jsp",aD(1,0,x))}ak(G,ay.horizontalArrowPositions,ax,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);h.addClass("jspActive");var s=aI.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aJ){W(aJ.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});l=al.innerWidth();ah()}}function ah(){al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aE&&az){var aI=G.outerHeight(),s=ap.outerWidth();t-=aI;b(am).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;aj-=aI;G.parent().append(b('<div class="jspCorner" />').css("width",aI+"px"));o();ah()}if(aE){Y.width((al.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aE){at=Math.ceil(1/y*l);if(at>ay.horizontalDragMaxWidth){at=ay.horizontalDragMaxWidth}else{if(at<ay.horizontalDragMinWidth){at=ay.horizontalDragMinWidth}}h.width(at+"px");j=l-at;ae(aa)}if(az){A=Math.ceil(1/q*t);if(A>ay.verticalDragMaxHeight){A=ay.verticalDragMaxHeight}else{if(A<ay.verticalDragMinHeight){A=ay.verticalDragMinHeight}}au.height(A+"px");i=t-A;ad(I)}}function ak(aJ,aL,aI,s){var aN="before",aK="after",aM;if(aL=="os"){aL=/Mac/.test(navigator.platform)?"after":"split"}if(aL==aN){aK=aL}else{if(aL==aK){aN=aL;aM=aI;aI=s;s=aM}}aJ[aN](aI)[aK](s)}function aD(aI,s,aJ){return function(){H(aI,s,this,aJ);this.blur();return false}}function H(aL,aK,aO,aN){aO=b(aO).addClass("jspActive");var aM,aJ,aI=true,s=function(){if(aL!==0){Q.scrollByX(aL*ay.arrowButtonSpeed)}if(aK!==0){Q.scrollByY(aK*ay.arrowButtonSpeed)}aJ=setTimeout(s,aI?ay.initialDelay:ay.arrowRepeatFreq);aI=false};s();aM=aN?"mouseout.jsp":"mouseup.jsp";aN=aN||b("html");aN.bind(aM,function(){aO.removeClass("jspActive");aJ&&clearTimeout(aJ);aJ=null;aN.unbind(aM)})}function p(){w();if(az){ap.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageY-aO.top-I,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageY-aR.top-A/2,aP=v*ay.scrollPagePercent,aQ=i*aP/(Z-v);if(aM<0){if(I-aQ>aS){Q.scrollByY(-aP)}else{V(aS)}}else{if(aM>0){if(I+aQ<aS){Q.scrollByY(aP)}else{V(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}if(aE){G.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageX-aO.left-aa,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageX-aR.left-at/2,aP=aj*ay.scrollPagePercent,aQ=j*aP/(T-aj);if(aM<0){if(aa-aQ>aS){Q.scrollByX(-aP)}else{W(aS)}}else{if(aM>0){if(aa+aQ<aS){Q.scrollByX(aP)}else{W(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(ap){ap.unbind("mousedown.jsp")}}function aw(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(au){au.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aI){if(!az){return}if(s<0){s=0}else{if(s>i){s=i}}if(aI===c){aI=ay.animateScroll}if(aI){Q.animate(au,"top",s,ad)}else{au.css("top",s);ad(s)}}function ad(aI){if(aI===c){aI=au.position().top}al.scrollTop(0);I=aI;var aL=I===0,aJ=I==i,aK=aI/i,s=-aK*(Z-v);if(ai!=aL||aG!=aJ){ai=aL;aG=aJ;D.trigger("jsp-arrow-change",[ai,aG,P,k])}u(aL,aJ);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aL,aJ]).trigger("scroll")}function W(aI,s){if(!aE){return}if(aI<0){aI=0}else{if(aI>j){aI=j}}if(s===c){s=ay.animateScroll}if(s){Q.animate(h,"left",aI,ae)}else{h.css("left",aI);ae(aI)}}function ae(aI){if(aI===c){aI=h.position().left}al.scrollTop(0);aa=aI;var aL=aa===0,aK=aa==j,aJ=aI/j,s=-aJ*(T-aj);if(P!=aL||k!=aK){P=aL;k=aK;D.trigger("jsp-arrow-change",[ai,aG,P,k])}r(aL,aK);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aL,aK]).trigger("scroll")}function u(aI,s){if(ay.showArrows){aq[aI?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aI,s){if(ay.showArrows){ax[aI?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aI){var aJ=s/(Z-v);V(aJ*i,aI)}function N(aI,s){var aJ=aI/(T-aj);W(aJ*j,s)}function ab(aV,aQ,aJ){var aN,aK,aL,s=0,aU=0,aI,aP,aO,aS,aR,aT;try{aN=b(aV)}catch(aM){return}aK=aN.outerHeight();aL=aN.outerWidth();al.scrollTop(0);al.scrollLeft(0);while(!aN.is(".jspPane")){s+=aN.position().top;aU+=aN.position().left;aN=aN.offsetParent();if(/^body|html$/i.test(aN[0].nodeName)){return}}aI=aA();aO=aI+v;if(s<aI||aQ){aR=s-ay.verticalGutter}else{if(s+aK>aO){aR=s-v+aK+ay.verticalGutter}}if(aR){M(aR,aJ)}aP=aC();aS=aP+aj;if(aU<aP||aQ){aT=aU-ay.horizontalGutter}else{if(aU+aL>aS){aT=aU-aj+aL+ay.horizontalGutter}}if(aT){N(aT,aJ)}}function aC(){return -Y.position().left}function aA(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aA()<10)}function B(){var s=T-aj;return(s>20)&&(s-aC()<10)}function ag(){al.unbind(ac).bind(ac,function(aL,aM,aK,aI){var aJ=aa,s=I;Q.scrollBy(aK*ay.mouseWheelSpeed,-aI*ay.mouseWheelSpeed,false);return aJ==aa&&s==I})}function n(){al.unbind(ac)}function aB(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aI,aK=[];aE&&aK.push(am[0]);az&&aK.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aN){if(aN.target!==this&&!(aK.length&&b(aN.target).closest(aK).length)){return}var aM=aa,aL=I;switch(aN.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aN.keyCode;aJ();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aI=aN.keyCode==s&&aM!=aa||aL!=I;return !aI}).bind("keypress.jsp",function(aL){if(aL.keyCode==s){aJ()}return !aI});if(ay.hideFocus){D.css("outline","none");if("hideFocus" in al[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in al[0]){D.attr("hideFocus",false)}}function aJ(){var aM=aa,aL=I;switch(s){case 40:Q.scrollByY(ay.keyboardSpeed,false);break;case 38:Q.scrollByY(-ay.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*ay.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*ay.scrollPagePercent,false);break;case 39:Q.scrollByX(ay.keyboardSpeed,false);break;case 37:Q.scrollByX(-ay.keyboardSpeed,false);break}aI=aM!=aa||aL!=I;return aI}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aK,aI,aJ=escape(location.hash.substr(1));try{aK=b("#"+aJ+', a[name="'+aJ+'"]')}catch(s){return}if(aK.length&&Y.find(aJ)){if(al.scrollTop()===0){aI=setInterval(function(){if(al.scrollTop()>0){ab(aK,true);b(document).scrollTop(al.position().top);clearInterval(aI)}},50)}else{ab(aK,true);b(document).scrollTop(al.position().top)}}}}function m(){if(b(document.body).data("jspHijack")){return}b(document.body).data("jspHijack",true);b(document.body).delegate("a[href*=#]","click",function(s){var aI=this.href.substr(0,this.href.indexOf("#")),aK=location.href,aO,aP,aJ,aM,aL,aN;if(location.href.indexOf("#")!==-1){aK=location.href.substr(0,location.href.indexOf("#"))}if(aI!==aK){return}aO=escape(this.href.substr(this.href.indexOf("#")+1));aP;try{aP=b("#"+aO+', a[name="'+aO+'"]')}catch(aQ){return}if(!aP.length){return}aJ=aP.closest(".jspScrollable");aM=aJ.data("jsp");aM.scrollToElement(aP,true);if(aJ[0].scrollIntoView){aL=b(a).scrollTop();aN=aP.offset().top;if(aN<aL||aN>aL+b(a).height()){aJ[0].scrollIntoView()}}s.preventDefault()})}function an(){var aJ,aI,aL,aK,aM,s=false;al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aN){var aO=aN.originalEvent.touches[0];aJ=aC();aI=aA();aL=aO.pageX;aK=aO.pageY;aM=false;s=true}).bind("touchmove.jsp",function(aQ){if(!s){return}var aP=aQ.originalEvent.touches[0],aO=aa,aN=I;Q.scrollTo(aJ+aL-aP.pageX,aI+aK-aP.pageY);aM=aM||Math.abs(aL-aP.pageX)>5||Math.abs(aK-aP.pageY)>5;return aO==aa&&aN==I}).bind("touchend.jsp",function(aN){s=false}).bind("click.jsp-touchclick",function(aN){if(aM){aM=false;return false}})}function g(){var s=aA(),aI=aC();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ao.append(Y.children()));ao.scrollTop(s);ao.scrollLeft(aI);if(av){clearInterval(av)}}b.extend(Q,{reinitialise:function(aI){aI=b.extend({},ay,aI);ar(aI)},scrollToElement:function(aJ,aI,s){ab(aJ,aI,s)},scrollTo:function(aJ,s,aI){N(aJ,aI);M(s,aI)},scrollToX:function(aI,s){N(aI,s)},scrollToY:function(s,aI){M(s,aI)},scrollToPercentX:function(aI,s){N(aI*(T-aj),s)},scrollToPercentY:function(aI,s){M(aI*(Z-v),s)},scrollBy:function(aI,s,aJ){Q.scrollByX(aI,aJ);Q.scrollByY(s,aJ)},scrollByX:function(s,aJ){var aI=aC()+Math[s<0?"floor":"ceil"](s),aK=aI/(T-aj);W(aK*j,aJ)},scrollByY:function(s,aJ){var aI=aA()+Math[s<0?"floor":"ceil"](s),aK=aI/(Z-v);V(aK*i,aJ)},positionDragX:function(s,aI){W(s,aI)},positionDragY:function(aI,s){V(aI,s)},animate:function(aI,aL,s,aK){var aJ={};aJ[aL]=s;aI.animate(aJ,{duration:ay.animateDuration,easing:ay.animateEase,queue:false,step:aK})},getContentPositionX:function(){return aC()},getContentPositionY:function(){return aA()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aC()/(T-aj)},getPercentScrolledY:function(){return aA()/(Z-v)},getIsScrollableH:function(){return aE},getIsScrollableV:function(){return az},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:b.noop,destroy:function(){g()}});ar(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);

// Knockout JavaScript library v2.1.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function(window,document,navigator,undefined){
function m(w){throw w;}var n=void 0,p=!0,s=null,t=!1;function A(w){return function(){return w}};function E(w){function B(b,c,d){d&&c!==a.k.r(b)&&a.k.S(b,c);c!==a.k.r(b)&&a.a.va(b,"change")}var a="undefined"!==typeof w?w:{};a.b=function(b,c){for(var d=b.split("."),f=a,g=0;g<d.length-1;g++)f=f[d[g]];f[d[d.length-1]]=c};a.B=function(a,c,d){a[c]=d};a.version="2.1.0";a.b("version",a.version);a.a=new function(){function b(b,c){if("input"!==a.a.o(b)||!b.type||"click"!=c.toLowerCase())return t;var e=b.type;return"checkbox"==e||"radio"==e}var c=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,d={},f={};d[/Firefox\/2/i.test(navigator.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");for(var g in d){var e=d[g];if(e.length)for(var h=0,j=e.length;h<j;h++)f[e[h]]=g}var k={propertychange:p},i=function(){for(var a=3,b=document.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);return 4<a?a:n}();return{Ca:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
v:function(a,b){for(var c=0,e=a.length;c<e;c++)b(a[c])},j:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,e=a.length;c<e;c++)if(a[c]===b)return c;return-1},ab:function(a,b,c){for(var e=0,f=a.length;e<f;e++)if(b.call(c,a[e]))return a[e];return s},ba:function(b,c){var e=a.a.j(b,c);0<=e&&b.splice(e,1)},za:function(b){for(var b=b||[],c=[],e=0,f=b.length;e<f;e++)0>a.a.j(c,b[e])&&c.push(b[e]);return c},T:function(a,b){for(var a=a||[],c=[],
e=0,f=a.length;e<f;e++)c.push(b(a[e]));return c},aa:function(a,b){for(var a=a||[],c=[],e=0,f=a.length;e<f;e++)b(a[e])&&c.push(a[e]);return c},N:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,e=b.length;c<e;c++)a.push(b[c]);return a},extend:function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},ga:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Ab:function(b){for(var b=a.a.L(b),c=document.createElement("div"),e=0,f=b.length;e<f;e++)a.F(b[e]),
c.appendChild(b[e]);return c},X:function(b,c){a.a.ga(b);if(c)for(var e=0,f=c.length;e<f;e++)b.appendChild(c[e])},Na:function(b,c){var e=b.nodeType?[b]:b;if(0<e.length){for(var f=e[0],d=f.parentNode,g=0,h=c.length;g<h;g++)d.insertBefore(c[g],f);g=0;for(h=e.length;g<h;g++)a.removeNode(e[g])}},Pa:function(a,b){0<=navigator.userAgent.indexOf("MSIE 6")?a.setAttribute("selected",b):a.selected=b},w:function(a){return(a||"").replace(c,"")},Ib:function(b,c){for(var e=[],f=(b||"").split(c),g=0,d=f.length;g<
d;g++){var h=a.a.w(f[g]);""!==h&&e.push(h)}return e},Hb:function(a,b){a=a||"";return b.length>a.length?t:a.substring(0,b.length)===b},eb:function(a,b){for(var c="return ("+a+")",e=0;e<b;e++)c="with(sc["+e+"]) { "+c+" } ";return new Function("sc",c)},kb:function(a,b){if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a!=s;){if(a==b)return p;a=a.parentNode}return t},fa:function(b){return a.a.kb(b,b.ownerDocument)},o:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},
n:function(a,c,e){var f=i&&k[c];if(!f&&"undefined"!=typeof jQuery){if(b(a,c))var g=e,e=function(a,b){var c=this.checked;b&&(this.checked=b.fb!==p);g.call(this,a);this.checked=c};jQuery(a).bind(c,e)}else!f&&"function"==typeof a.addEventListener?a.addEventListener(c,e,t):"undefined"!=typeof a.attachEvent?a.attachEvent("on"+c,function(b){e.call(a,b)}):m(Error("Browser doesn't support addEventListener or attachEvent"))},va:function(a,c){(!a||!a.nodeType)&&m(Error("element must be a DOM node when calling triggerEvent"));
if("undefined"!=typeof jQuery){var e=[];b(a,c)&&e.push({fb:a.checked});jQuery(a).trigger(c,e)}else"function"==typeof document.createEvent?"function"==typeof a.dispatchEvent?(e=document.createEvent(f[c]||"HTMLEvents"),e.initEvent(c,p,p,window,0,0,0,0,0,t,t,t,t,0,a),a.dispatchEvent(e)):m(Error("The supplied element doesn't support dispatchEvent")):"undefined"!=typeof a.fireEvent?(b(a,c)&&(a.checked=a.checked!==p),a.fireEvent("on"+c)):m(Error("Browser doesn't support triggering events"))},d:function(b){return a.la(b)?
b():b},Ua:function(b,c,e){var f=(b.className||"").split(/\s+/),g=0<=a.a.j(f,c);if(e&&!g)b.className+=(f[0]?" ":"")+c;else if(g&&!e){e="";for(g=0;g<f.length;g++)f[g]!=c&&(e+=f[g]+" ");b.className=a.a.w(e)}},Qa:function(b,c){var e=a.a.d(c);if(e===s||e===n)e="";"innerText"in b?b.innerText=e:b.textContent=e;9<=i&&(b.style.display=b.style.display)},lb:function(a){if(9<=i){var b=a.style.width;a.style.width=0;a.style.width=b}},Eb:function(b,e){for(var b=a.a.d(b),e=a.a.d(e),c=[],f=b;f<=e;f++)c.push(f);return c},
L:function(a){for(var b=[],e=0,c=a.length;e<c;e++)b.push(a[e]);return b},tb:6===i,ub:7===i,ja:i,Da:function(b,e){for(var c=a.a.L(b.getElementsByTagName("input")).concat(a.a.L(b.getElementsByTagName("textarea"))),f="string"==typeof e?function(a){return a.name===e}:function(a){return e.test(a.name)},g=[],d=c.length-1;0<=d;d--)f(c[d])&&g.push(c[d]);return g},Bb:function(b){return"string"==typeof b&&(b=a.a.w(b))?window.JSON&&window.JSON.parse?window.JSON.parse(b):(new Function("return "+b))():s},sa:function(b,
e,c){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&m(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(a.a.d(b),e,c)},Cb:function(b,e,c){var c=c||{},f=c.params||{},g=c.includeFields||this.Ca,d=b;if("object"==typeof b&&"form"===a.a.o(b))for(var d=b.action,h=g.length-1;0<=h;h--)for(var k=a.a.Da(b,g[h]),
j=k.length-1;0<=j;j--)f[k[j].name]=k[j].value;var e=a.a.d(e),i=document.createElement("form");i.style.display="none";i.action=d;i.method="post";for(var z in e)b=document.createElement("input"),b.name=z,b.value=a.a.sa(a.a.d(e[z])),i.appendChild(b);for(z in f)b=document.createElement("input"),b.name=z,b.value=f[z],i.appendChild(b);document.body.appendChild(i);c.submitter?c.submitter(i):i.submit();setTimeout(function(){i.parentNode.removeChild(i)},0)}}};a.b("utils",a.a);a.b("utils.arrayForEach",a.a.v);
a.b("utils.arrayFirst",a.a.ab);a.b("utils.arrayFilter",a.a.aa);a.b("utils.arrayGetDistinctValues",a.a.za);a.b("utils.arrayIndexOf",a.a.j);a.b("utils.arrayMap",a.a.T);a.b("utils.arrayPushAll",a.a.N);a.b("utils.arrayRemoveItem",a.a.ba);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Ca);a.b("utils.getFormFields",a.a.Da);a.b("utils.postJson",a.a.Cb);a.b("utils.parseJson",a.a.Bb);a.b("utils.registerEventHandler",a.a.n);a.b("utils.stringifyJson",a.a.sa);a.b("utils.range",a.a.Eb);
a.b("utils.toggleDomNodeCssClass",a.a.Ua);a.b("utils.triggerEvent",a.a.va);a.b("utils.unwrapObservable",a.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments),a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={};return{get:function(b,c){var e=a.a.f.getAll(b,t);return e===n?n:e[c]},set:function(b,c,e){e===n&&a.a.f.getAll(b,
t)===n||(a.a.f.getAll(b,p)[c]=e)},getAll:function(a,g){var e=a[c];if(!(e&&"null"!==e)){if(!g)return;e=a[c]="ko"+b++;d[e]={}}return d[e]},clear:function(a){var b=a[c];b&&(delete d[b],a[c]=s)}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.G=new function(){function b(b,c){var f=a.a.f.get(b,d);f===n&&c&&(f=[],a.a.f.set(b,d,f));return f}function c(e){var f=b(e,t);if(f)for(var f=f.slice(0),d=0;d<f.length;d++)f[d](e);a.a.f.clear(e);"function"==typeof jQuery&&"function"==typeof jQuery.cleanData&&
jQuery.cleanData([e]);if(g[e.nodeType])for(f=e.firstChild;e=f;)f=e.nextSibling,8===e.nodeType&&c(e)}var d="__ko_domNodeDisposal__"+(new Date).getTime(),f={1:p,8:p,9:p},g={1:p,9:p};return{wa:function(a,c){"function"!=typeof c&&m(Error("Callback must be a function"));b(a,p).push(c)},Ma:function(c,f){var g=b(c,t);g&&(a.a.ba(g,f),0==g.length&&a.a.f.set(c,d,n))},F:function(b){if(f[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.N(d,b.getElementsByTagName("*"));for(var b=0,j=d.length;b<j;b++)c(d[b])}},
removeNode:function(b){a.F(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.F=a.a.G.F;a.removeNode=a.a.G.removeNode;a.b("cleanNode",a.F);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.wa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.Ma);(function(){a.a.pa=function(b){var c;if("undefined"!=typeof jQuery){if((c=jQuery.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&
b.parentNode.removeChild(b)}}else{var d=a.a.w(b).toLowerCase();c=document.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof window.innerShiv?c.appendChild(window.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.L(c.lastChild.childNodes)}return c};
a.a.Y=function(b,c){a.a.ga(b);if(c!==s&&c!==n)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof jQuery)jQuery(b).html(c);else for(var d=a.a.pa(c),f=0;f<d.length;f++)b.appendChild(d[f])}})();a.b("utils.parseHtmlFragment",a.a.pa);a.b("utils.setHtml",a.a.Y);a.s=function(){function b(){return(4294967296*(1+Math.random())|0).toString(16).substring(1)}function c(b,g){if(b)if(8==b.nodeType){var e=a.s.Ja(b.nodeValue);e!=s&&g.push({jb:b,yb:e})}else if(1==b.nodeType)for(var e=0,d=b.childNodes,j=d.length;e<
j;e++)c(d[e],g)}var d={};return{na:function(a){"function"!=typeof a&&m(Error("You can only pass a function to ko.memoization.memoize()"));var c=b()+b();d[c]=a;return"<\!--[ko_memo:"+c+"]--\>"},Va:function(a,b){var c=d[a];c===n&&m(Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized."));try{return c.apply(s,b||[]),p}finally{delete d[a]}},Wa:function(b,d){var e=[];c(b,e);for(var h=0,j=e.length;h<j;h++){var k=e[h].jb,i=[k];d&&a.a.N(i,d);a.s.Va(e[h].yb,i);k.nodeValue="";k.parentNode&&
k.parentNode.removeChild(k)}},Ja:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:s}}}();a.b("memoization",a.s);a.b("memoization.memoize",a.s.na);a.b("memoization.unmemoize",a.s.Va);a.b("memoization.parseMemoText",a.s.Ja);a.b("memoization.unmemoizeDomNodeAndDescendants",a.s.Wa);a.Ba={throttle:function(b,c){b.throttleEvaluation=c;var d=s;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(b,c){b.equalityComparer="always"==c?A(t):a.m.fn.equalityComparer;
return b}};a.b("extenders",a.Ba);a.Sa=function(b,c,d){this.target=b;this.ca=c;this.ib=d;a.B(this,"dispose",this.A)};a.Sa.prototype.A=function(){this.sb=p;this.ib()};a.R=function(){this.u={};a.a.extend(this,a.R.fn);a.B(this,"subscribe",this.ta);a.B(this,"extend",this.extend);a.B(this,"getSubscriptionsCount",this.ob)};a.R.fn={ta:function(b,c,d){var d=d||"change",b=c?b.bind(c):b,f=new a.Sa(this,b,function(){a.a.ba(this.u[d],f)}.bind(this));this.u[d]||(this.u[d]=[]);this.u[d].push(f);return f},notifySubscribers:function(b,
c){c=c||"change";this.u[c]&&a.a.v(this.u[c].slice(0),function(a){a&&a.sb!==p&&a.ca(b)})},ob:function(){var a=0,c;for(c in this.u)this.u.hasOwnProperty(c)&&(a+=this.u[c].length);return a},extend:function(b){var c=this;if(b)for(var d in b){var f=a.Ba[d];"function"==typeof f&&(c=f(c,b[d]))}return c}};a.Ga=function(a){return"function"==typeof a.ta&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.R);a.b("isSubscribable",a.Ga);a.U=function(){var b=[];return{bb:function(a){b.push({ca:a,Aa:[]})},
end:function(){b.pop()},La:function(c){a.Ga(c)||m(Error("Only subscribable things can act as dependencies"));if(0<b.length){var d=b[b.length-1];0<=a.a.j(d.Aa,c)||(d.Aa.push(c),d.ca(c))}}}}();var G={undefined:p,"boolean":p,number:p,string:p};a.m=function(b){function c(){if(0<arguments.length){if(!c.equalityComparer||!c.equalityComparer(d,arguments[0]))c.I(),d=arguments[0],c.H();return this}a.U.La(c);return d}var d=b;a.R.call(c);c.H=function(){c.notifySubscribers(d)};c.I=function(){c.notifySubscribers(d,
"beforeChange")};a.a.extend(c,a.m.fn);a.B(c,"valueHasMutated",c.H);a.B(c,"valueWillMutate",c.I);return c};a.m.fn={equalityComparer:function(a,c){return a===s||typeof a in G?a===c:t}};var x=a.m.Db="__ko_proto__";a.m.fn[x]=a.m;a.ia=function(b,c){return b===s||b===n||b[x]===n?t:b[x]===c?p:a.ia(b[x],c)};a.la=function(b){return a.ia(b,a.m)};a.Ha=function(b){return"function"==typeof b&&b[x]===a.m||"function"==typeof b&&b[x]===a.h&&b.pb?p:t};a.b("observable",a.m);a.b("isObservable",a.la);a.b("isWriteableObservable",
a.Ha);a.Q=function(b){0==arguments.length&&(b=[]);b!==s&&(b!==n&&!("length"in b))&&m(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var c=a.m(b);a.a.extend(c,a.Q.fn);return c};a.Q.fn={remove:function(a){for(var c=this(),d=[],f="function"==typeof a?a:function(c){return c===a},g=0;g<c.length;g++){var e=c[g];f(e)&&(0===d.length&&this.I(),d.push(e),c.splice(g,1),g--)}d.length&&this.H();return d},removeAll:function(b){if(b===n){var c=this(),
d=c.slice(0);this.I();c.splice(0,c.length);this.H();return d}return!b?[]:this.remove(function(c){return 0<=a.a.j(b,c)})},destroy:function(a){var c=this(),d="function"==typeof a?a:function(c){return c===a};this.I();for(var f=c.length-1;0<=f;f--)d(c[f])&&(c[f]._destroy=p);this.H()},destroyAll:function(b){return b===n?this.destroy(A(p)):!b?[]:this.destroy(function(c){return 0<=a.a.j(b,c)})},indexOf:function(b){var c=this();return a.a.j(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.I(),
this()[d]=c,this.H())}};a.a.v("pop push reverse shift sort splice unshift".split(" "),function(b){a.Q.fn[b]=function(){var a=this();this.I();a=a[b].apply(a,arguments);this.H();return a}});a.a.v(["slice"],function(b){a.Q.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.Q);a.h=function(b,c,d){function f(){a.a.v(v,function(a){a.A()});v=[]}function g(){var a=h.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(e,a)):e()}function e(){if(!l)if(i&&w())u();else{l=
p;try{var b=a.a.T(v,function(a){return a.target});a.U.bb(function(c){var e;0<=(e=a.a.j(b,c))?b[e]=n:v.push(c.ta(g))});for(var e=q.call(c),f=b.length-1;0<=f;f--)b[f]&&v.splice(f,1)[0].A();i=p;h.notifySubscribers(k,"beforeChange");k=e}finally{a.U.end()}h.notifySubscribers(k);l=t}}function h(){if(0<arguments.length)j.apply(h,arguments);else return i||e(),a.U.La(h),k}function j(){"function"===typeof o?o.apply(c,arguments):m(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."))}
var k,i=t,l=t,q=b;q&&"object"==typeof q?(d=q,q=d.read):(d=d||{},q||(q=d.read));"function"!=typeof q&&m(Error("Pass a function that returns the value of the ko.computed"));var o=d.write;c||(c=d.owner);var v=[],u=f,r="object"==typeof d.disposeWhenNodeIsRemoved?d.disposeWhenNodeIsRemoved:s,w=d.disposeWhen||A(t);if(r){u=function(){a.a.G.Ma(r,arguments.callee);f()};a.a.G.wa(r,u);var y=w,w=function(){return!a.a.fa(r)||y()}}var x=s;h.nb=function(){return v.length};h.pb="function"===typeof d.write;h.A=function(){u()};
a.R.call(h);a.a.extend(h,a.h.fn);d.deferEvaluation!==p&&e();a.B(h,"dispose",h.A);a.B(h,"getDependenciesCount",h.nb);return h};a.rb=function(b){return a.ia(b,a.h)};w=a.m.Db;a.h[w]=a.m;a.h.fn={};a.h.fn[w]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.rb);(function(){function b(a,g,e){e=e||new d;a=g(a);if(!("object"==typeof a&&a!==s&&a!==n&&!(a instanceof Date)))return a;var h=a instanceof Array?[]:{};e.save(a,h);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=
d;break;case "object":case "undefined":var i=e.get(d);h[c]=i!==n?i:b(d,g,e)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){var b=[],c=[];this.save=function(e,d){var j=a.a.j(b,e);0<=j?c[j]=d:(b.push(e),c.push(d))};this.get=function(e){e=a.a.j(b,e);return 0<=e?c[e]:n}}a.Ta=function(c){0==arguments.length&&m(Error("When calling ko.toJS, pass the object you want to convert."));return b(c,function(b){for(var c=
0;a.la(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,e){b=a.Ta(b);return a.a.sa(b,c,e)}})();a.b("toJS",a.Ta);a.b("toJSON",a.toJSON);(function(){a.k={r:function(b){switch(a.a.o(b)){case "option":return b.__ko__hasDomDataOptionValue__===p?a.a.f.get(b,a.c.options.oa):b.getAttribute("value");case "select":return 0<=b.selectedIndex?a.k.r(b.options[b.selectedIndex]):n;default:return b.value}},S:function(b,c){switch(a.a.o(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.c.options.oa,
n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.c.options.oa,c),b.__ko__hasDomDataOptionValue__=p,b.value="number"===typeof c?c:""}break;case "select":for(var d=b.options.length-1;0<=d;d--)if(a.k.r(b.options[d])==c){b.selectedIndex=d;break}break;default:if(c===s||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.r);a.b("selectExtensions.writeValue",a.k.S);a.g=function(){function b(a,b){for(var d=
s;a!=d;)d=a,a=a.replace(c,function(a,c){return b[c]});return a}var c=/\@ko_token_(\d+)\@/g,d=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,f=["true","false"];return{D:[],W:function(c){var e=a.a.w(c);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-1));for(var c=[],d=s,f,k=0;k<e.length;k++){var i=e.charAt(k);if(d===s)switch(i){case '"':case "'":case "/":d=k,f=i}else if(i==f&&"\\"!==e.charAt(k-1)){i=e.substring(d,k+1);c.push(i);var l="@ko_token_"+(c.length-
1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k=k-(i.length-l.length),d=s}}f=d=s;for(var q=0,o=s,k=0;k<e.length;k++){i=e.charAt(k);if(d===s)switch(i){case "{":d=k;o=i;f="}";break;case "(":d=k;o=i;f=")";break;case "[":d=k,o=i,f="]"}i===o?q++:i===f&&(q--,0===q&&(i=e.substring(d,k+1),c.push(i),l="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k-=i.length-l.length,d=s))}f=[];e=e.split(",");d=0;for(k=e.length;d<k;d++)q=e[d],o=q.indexOf(":"),0<o&&o<q.length-1?(i=q.substring(o+1),f.push({key:b(q.substring(0,
o),c),value:b(i,c)})):f.push({unknown:b(q,c)});return f},ka:function(b){for(var c="string"===typeof b?a.g.W(b):b,h=[],b=[],j,k=0;j=c[k];k++)if(0<h.length&&h.push(","),j.key){var i;a:{i=j.key;var l=a.a.w(i);switch(l.length&&l.charAt(0)){case "'":case '"':break a;default:i="'"+l+"'"}}j=j.value;h.push(i);h.push(":");h.push(j);l=a.a.w(j);if(0<=a.a.j(f,a.a.w(l).toLowerCase())?0:l.match(d)!==s)0<b.length&&b.push(", "),b.push(i+" : function(__ko_value) { "+j+" = __ko_value; }")}else j.unknown&&h.push(j.unknown);
c=h.join("");0<b.length&&(c=c+", '_ko_property_writers' : { "+b.join("")+" } ");return c},wb:function(b,c){for(var d=0;d<b.length;d++)if(a.a.w(b[d].key)==c)return p;return t},$:function(b,c,d,f,k){if(!b||!a.Ha(b)){if((b=c()._ko_property_writers)&&b[d])b[d](f)}else(!k||b()!==f)&&b(f)}}}();a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.bindingRewriteValidators",a.g.D);a.b("jsonExpressionRewriting.parseObjectLiteral",a.g.W);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",
a.g.ka);(function(){function b(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(e)}function c(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(h)}function d(a,e){for(var d=a,f=1,g=[];d=d.nextSibling;){if(c(d)&&(f--,0===f))return g;g.push(d);b(d)&&f++}e||m(Error("Cannot find closing comment tag to match: "+a.nodeValue));return s}function f(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:s}var g="<\!--test--\>"===document.createComment("test").text,e=g?/^<\!--\s*ko\s+(.*\:.*)\s*--\>$/:
/^\s*ko\s+(.*\:.*)\s*$/,h=g?/^<\!--\s*\/ko\s*--\>$/:/^\s*\/ko\s*$/,j={ul:p,ol:p};a.e={C:{},childNodes:function(a){return b(a)?d(a):a.childNodes},ha:function(c){if(b(c))for(var c=a.e.childNodes(c),e=0,d=c.length;e<d;e++)a.removeNode(c[e]);else a.a.ga(c)},X:function(c,e){if(b(c)){a.e.ha(c);for(var d=c.nextSibling,f=0,g=e.length;f<g;f++)d.parentNode.insertBefore(e[f],d)}else a.a.X(c,e)},Ka:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},
Fa:function(a,c,e){b(a)?a.parentNode.insertBefore(c,e.nextSibling):e.nextSibling?a.insertBefore(c,e.nextSibling):a.appendChild(c)},firstChild:function(a){return!b(a)?a.firstChild:!a.nextSibling||c(a.nextSibling)?s:a.nextSibling},nextSibling:function(a){b(a)&&(a=f(a));return a.nextSibling&&c(a.nextSibling)?s:a.nextSibling},Xa:function(a){return(a=b(a))?a[1]:s},Ia:function(e){if(j[a.a.o(e)]){var d=e.firstChild;if(d){do if(1===d.nodeType){var g;g=d.firstChild;var h=s;if(g){do if(h)h.push(g);else if(b(g)){var o=
f(g,p);o?g=o:h=[g]}else c(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h){h=d.nextSibling;for(o=0;o<g.length;o++)h?e.insertBefore(g[o],h):e.appendChild(g[o])}}while(d=d.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.C);a.b("virtualElements.emptyNode",a.e.ha);a.b("virtualElements.insertAfter",a.e.Fa);a.b("virtualElements.prepend",a.e.Ka);a.b("virtualElements.setDomNodeChildren",a.e.X);(function(){a.J=function(){this.cb={}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind")!=
s;case 8:return a.e.Xa(b)!=s;default:return t}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c):s},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Xa(b);default:return s}},parseBindingsString:function(b,c){try{var d=c.$data,d="object"==typeof d&&d!=s?[d,c]:[c],f=d.length,g=this.cb,e=f+"_"+b,h;if(!(h=g[e])){var j=" { "+a.g.ka(b)+" } ";h=g[e]=a.a.eb(j,f)}return h(d)}catch(k){m(Error("Unable to parse bindings.\nMessage: "+
k+";\nBindings value: "+b))}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(b,d,e){for(var h=a.e.firstChild(d);d=h;)h=a.e.nextSibling(d),c(b,d,e)}function c(c,g,e){var h=p,j=1===g.nodeType;j&&a.e.Ia(g);if(j&&e||a.J.instance.nodeHasBindings(g))h=d(g,s,c,e).Gb;h&&b(c,g,!j)}function d(b,c,e,d){function j(a){return function(){return l[a]}}function k(){return l}var i=0,l,q;a.h(function(){var o=e&&e instanceof a.z?e:new a.z(a.a.d(e)),v=o.$data;d&&a.Ra(b,o);if(l=("function"==
typeof c?c():c)||a.J.instance.getBindings(b,o)){if(0===i){i=1;for(var u in l){var r=a.c[u];r&&8===b.nodeType&&!a.e.C[u]&&m(Error("The binding '"+u+"' cannot be used with virtual elements"));if(r&&"function"==typeof r.init&&(r=(0,r.init)(b,j(u),k,v,o))&&r.controlsDescendantBindings)q!==n&&m(Error("Multiple bindings ("+q+" and "+u+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),q=u}i=2}if(2===i)for(u in l)(r=a.c[u])&&"function"==
typeof r.update&&(0,r.update)(b,j(u),k,v,o)}},s,{disposeWhenNodeIsRemoved:b});return{Gb:q===n}}a.c={};a.z=function(b,c){c?(a.a.extend(this,c),this.$parentContext=c,this.$parent=c.$data,this.$parents=(c.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=[],this.$root=b);this.$data=b};a.z.prototype.createChildContext=function(b){return new a.z(b,this)};a.z.prototype.extend=function(b){var c=a.a.extend(new a.z,this);return a.a.extend(c,b)};a.Ra=function(b,c){if(2==arguments.length)a.a.f.set(b,
"__ko_bindingContext__",c);else return a.a.f.get(b,"__ko_bindingContext__")};a.ya=function(b,c,e){1===b.nodeType&&a.e.Ia(b);return d(b,c,e,p)};a.Ya=function(a,c){(1===c.nodeType||8===c.nodeType)&&b(a,c,p)};a.xa=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&m(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||window.document.body;c(a,b,p)};a.ea=function(b){switch(b.nodeType){case 1:case 8:var c=a.Ra(b);if(c)return c;if(b.parentNode)return a.ea(b.parentNode)}};
a.hb=function(b){return(b=a.ea(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("applyBindings",a.xa);a.b("applyBindingsToDescendants",a.Ya);a.b("applyBindingsToNode",a.ya);a.b("contextFor",a.ea);a.b("dataFor",a.hb)})();a.a.v(["click"],function(b){a.c[b]={init:function(c,d,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},f,g)}}});a.c.event={init:function(b,c,d,f){var g=c()||{},e;for(e in g)(function(){var g=e;"string"==typeof g&&a.a.n(b,g,function(b){var e,i=c()[g];if(i){var l=
d();try{var q=a.a.L(arguments);q.unshift(f);e=i.apply(f,q)}finally{e!==p&&(b.preventDefault?b.preventDefault():b.returnValue=t)}l[g+"Bubble"]===t&&(b.cancelBubble=p,b.stopPropagation&&b.stopPropagation())}})})()}};a.c.submit={init:function(b,c,d,f){"function"!=typeof c()&&m(Error("The value for a submit binding must be a function"));a.a.n(b,"submit",function(a){var e,d=c();try{e=d.call(f,b)}finally{e!==p&&(a.preventDefault?a.preventDefault():a.returnValue=t)}})}};a.c.visible={update:function(b,c){var d=
a.a.d(c()),f="none"!=b.style.display;d&&!f?b.style.display="":!d&&f&&(b.style.display="none")}};a.c.enable={update:function(b,c){var d=a.a.d(c());d&&b.disabled?b.removeAttribute("disabled"):!d&&!b.disabled&&(b.disabled=p)}};a.c.disable={update:function(b,c){a.c.enable.update(b,function(){return!a.a.d(c())})}};a.c.value={init:function(b,c,d){function f(){var e=c(),f=a.k.r(b);a.g.$(e,d,"value",f,p)}var g=["change"],e=d().valueUpdate;e&&("string"==typeof e&&(e=[e]),a.a.N(g,e),g=a.a.za(g));if(a.a.ja&&
("input"==b.tagName.toLowerCase()&&"text"==b.type&&"off"!=b.autocomplete&&(!b.form||"off"!=b.form.autocomplete))&&-1==a.a.j(g,"propertychange")){var h=t;a.a.n(b,"propertychange",function(){h=p});a.a.n(b,"blur",function(){if(h){h=t;f()}})}a.a.v(g,function(c){var e=f;if(a.a.Hb(c,"after")){e=function(){setTimeout(f,0)};c=c.substring(5)}a.a.n(b,c,e)})},update:function(b,c){var d="select"===a.a.o(b),f=a.a.d(c()),g=a.k.r(b),e=f!=g;0===f&&(0!==g&&"0"!==g)&&(e=p);e&&(g=function(){a.k.S(b,f)},g(),d&&setTimeout(g,
0));d&&0<b.length&&B(b,f,t)}};a.c.options={update:function(b,c,d){"select"!==a.a.o(b)&&m(Error("options binding applies only to SELECT elements"));for(var f=0==b.length,g=a.a.T(a.a.aa(b.childNodes,function(b){return b.tagName&&"option"===a.a.o(b)&&b.selected}),function(b){return a.k.r(b)||b.innerText||b.textContent}),e=b.scrollTop,h=a.a.d(c());0<b.length;)a.F(b.options[0]),b.remove(0);if(h){d=d();"number"!=typeof h.length&&(h=[h]);if(d.optionsCaption){var j=document.createElement("option");a.a.Y(j,
d.optionsCaption);a.k.S(j,n);b.appendChild(j)}for(var c=0,k=h.length;c<k;c++){var j=document.createElement("option"),i="string"==typeof d.optionsValue?h[c][d.optionsValue]:h[c],i=a.a.d(i);a.k.S(j,i);var l=d.optionsText,i="function"==typeof l?l(h[c]):"string"==typeof l?h[c][l]:i;if(i===s||i===n)i="";a.a.Qa(j,i);b.appendChild(j)}h=b.getElementsByTagName("option");c=j=0;for(k=h.length;c<k;c++)0<=a.a.j(g,a.k.r(h[c]))&&(a.a.Pa(h[c],p),j++);b.scrollTop=e;f&&"value"in d&&B(b,a.a.d(d.value),p);a.a.lb(b)}}};
a.c.options.oa="__ko.optionValueDomData__";a.c.selectedOptions={Ea:function(b){for(var c=[],b=b.childNodes,d=0,f=b.length;d<f;d++){var g=b[d],e=a.a.o(g);"option"==e&&g.selected?c.push(a.k.r(g)):"optgroup"==e&&(g=a.c.selectedOptions.Ea(g),Array.prototype.splice.apply(c,[c.length,0].concat(g)))}return c},init:function(b,c,d){a.a.n(b,"change",function(){var b=c(),g=a.c.selectedOptions.Ea(this);a.g.$(b,d,"value",g)})},update:function(b,c){"select"!=a.a.o(b)&&m(Error("values binding applies only to SELECT elements"));
var d=a.a.d(c());if(d&&"number"==typeof d.length)for(var f=b.childNodes,g=0,e=f.length;g<e;g++){var h=f[g];"option"===a.a.o(h)&&a.a.Pa(h,0<=a.a.j(d,a.k.r(h)))}}};a.c.text={update:function(b,c){a.a.Qa(b,c())}};a.c.html={init:function(){return{controlsDescendantBindings:p}},update:function(b,c){var d=a.a.d(c());a.a.Y(b,d)}};a.c.css={update:function(b,c){var d=a.a.d(c()||{}),f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);a.a.Ua(b,f,g)}}};a.c.style={update:function(b,c){var d=a.a.d(c()||{}),f;
for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);b.style[f]=g||""}}};a.c.uniqueName={init:function(b,c){c()&&(b.name="ko_unique_"+ ++a.c.uniqueName.gb,(a.a.tb||a.a.ub)&&b.mergeAttributes(document.createElement("<input name='"+b.name+"'/>"),t))}};a.c.uniqueName.gb=0;a.c.checked={init:function(b,c,d){a.a.n(b,"click",function(){var f;if("checkbox"==b.type)f=b.checked;else if("radio"==b.type&&b.checked)f=b.value;else return;var g=c();"checkbox"==b.type&&a.a.d(g)instanceof Array?(f=a.a.j(a.a.d(g),b.value),
b.checked&&0>f?g.push(b.value):!b.checked&&0<=f&&g.splice(f,1)):a.g.$(g,d,"checked",f,p)});"radio"==b.type&&!b.name&&a.c.uniqueName.init(b,A(p))},update:function(b,c){var d=a.a.d(c());"checkbox"==b.type?b.checked=d instanceof Array?0<=a.a.j(d,b.value):d:"radio"==b.type&&(b.checked=b.value==d)}};var F={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.d(c())||{},f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]),e=g===t||g===s||g===n;e&&b.removeAttribute(f);8>=a.a.ja&&
f in F?(f=F[f],e?b.removeAttribute(f):b[f]=g):e||b.setAttribute(f,g.toString())}}};a.c.hasfocus={init:function(b,c,d){function f(b){var e=c();a.g.$(e,d,"hasfocus",b,p)}a.a.n(b,"focus",function(){f(p)});a.a.n(b,"focusin",function(){f(p)});a.a.n(b,"blur",function(){f(t)});a.a.n(b,"focusout",function(){f(t)})},update:function(b,c){var d=a.a.d(c());d?b.focus():b.blur();a.a.va(b,d?"focusin":"focusout")}};a.c["with"]={p:function(b){return function(){var c=b();return{"if":c,data:c,templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c["with"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["with"].p(c),d,f,g)}};a.g.D["with"]=t;a.e.C["with"]=p;a.c["if"]={p:function(b){return function(){return{"if":b(),templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c["if"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["if"].p(c),d,f,g)}};a.g.D["if"]=t;a.e.C["if"]=p;a.c.ifnot={p:function(b){return function(){return{ifnot:b(),templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c.ifnot.p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c.ifnot.p(c),d,f,g)}};a.g.D.ifnot=t;a.e.C.ifnot=p;a.c.foreach={p:function(b){return function(){var c=a.a.d(b());return!c||"number"==typeof c.length?{foreach:c,templateEngine:a.q.K}:{foreach:c.data,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.p(c))},
update:function(b,c,d,f,g){return a.c.template.update(b,a.c.foreach.p(c),d,f,g)}};a.g.D.foreach=t;a.e.C.foreach=p;a.t=function(){};a.t.prototype.renderTemplateSource=function(){m(Error("Override renderTemplateSource"))};a.t.prototype.createJavaScriptEvaluatorBlock=function(){m(Error("Override createJavaScriptEvaluatorBlock"))};a.t.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){var c=c||document,d=c.getElementById(b);d||m(Error("Cannot find template with ID "+b));return new a.l.i(d)}if(1==
b.nodeType||8==b.nodeType)return new a.l.M(b);m(Error("Unknown template type: "+b))};a.t.prototype.renderTemplate=function(a,c,d,f){return this.renderTemplateSource(this.makeTemplateSource(a,f),c,d)};a.t.prototype.isTemplateRewritten=function(a,c){return this.allowTemplateRewriting===t||!(c&&c!=document)&&this.V&&this.V[a]?p:this.makeTemplateSource(a,c).data("isRewritten")};a.t.prototype.rewriteTemplate=function(a,c,d){var f=this.makeTemplateSource(a,d),c=c(f.text());f.text(c);f.data("isRewritten",
p);!(d&&d!=document)&&"string"==typeof a&&(this.V=this.V||{},this.V[a]=p)};a.b("templateEngine",a.t);a.Z=function(){function b(b,c,e){for(var b=a.g.W(b),d=a.g.D,j=0;j<b.length;j++){var k=b[j].key;if(d.hasOwnProperty(k)){var i=d[k];"function"===typeof i?(k=i(b[j].value))&&m(Error(k)):i||m(Error("This template engine does not support the '"+k+"' binding within its templates"))}}b="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+a.g.ka(b)+
" } })()         })";return e.createJavaScriptEvaluatorBlock(b)+c}var c=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,d=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{mb:function(b,c,e){c.isTemplateRewritten(b,e)||c.rewriteTemplate(b,function(b){return a.Z.zb(b,c)},e)},zb:function(a,g){return a.replace(c,function(a,c,d,f,i,l,q){return b(q,c,g)}).replace(d,function(a,c){return b(c,"<\!-- ko --\>",g)})},Za:function(b){return a.s.na(function(c,
e){c.nextSibling&&a.ya(c.nextSibling,b,e)})}}}();a.b("templateRewriting",a.Z);a.b("templateRewriting.applyMemoizedBindingsToNextSibling",a.Z.Za);(function(){a.l={};a.l.i=function(a){this.i=a};a.l.i.prototype.text=function(){var b=a.a.o(this.i),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.i[b];var c=arguments[0];"innerHTML"===b?a.a.Y(this.i,c):this.i[b]=c};a.l.i.prototype.data=function(b){if(1===arguments.length)return a.a.f.get(this.i,"templateSourceData_"+
b);a.a.f.set(this.i,"templateSourceData_"+b,arguments[1])};a.l.M=function(a){this.i=a};a.l.M.prototype=new a.l.i;a.l.M.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.i,"__ko_anon_template__")||{};b.ua===n&&b.da&&(b.ua=b.da.innerHTML);return b.ua}a.a.f.set(this.i,"__ko_anon_template__",{ua:arguments[0]})};a.l.i.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.i,"__ko_anon_template__")||{}).da;a.a.f.set(this.i,"__ko_anon_template__",{da:arguments[0]})};
a.b("templateSources",a.l);a.b("templateSources.domElement",a.l.i);a.b("templateSources.anonymousTemplate",a.l.M)})();(function(){function b(b,c,d){for(var f,c=a.e.nextSibling(c);b&&(f=b)!==c;)b=a.e.nextSibling(f),(1===f.nodeType||8===f.nodeType)&&d(f)}function c(c,d){if(c.length){var f=c[0],g=c[c.length-1];b(f,g,function(b){a.xa(d,b)});b(f,g,function(b){a.s.Wa(b,[d])})}}function d(a){return a.nodeType?a:0<a.length?a[0]:s}function f(b,f,j,k,i){var i=i||{},l=b&&d(b),l=l&&l.ownerDocument,q=i.templateEngine||
g;a.Z.mb(j,q,l);j=q.renderTemplate(j,k,i,l);("number"!=typeof j.length||0<j.length&&"number"!=typeof j[0].nodeType)&&m(Error("Template engine must return an array of DOM nodes"));l=t;switch(f){case "replaceChildren":a.e.X(b,j);l=p;break;case "replaceNode":a.a.Na(b,j);l=p;break;case "ignoreTargetNode":break;default:m(Error("Unknown renderMode: "+f))}l&&(c(j,k),i.afterRender&&i.afterRender(j,k.$data));return j}var g;a.ra=function(b){b!=n&&!(b instanceof a.t)&&m(Error("templateEngine must inherit from ko.templateEngine"));
g=b};a.qa=function(b,c,j,k,i){j=j||{};(j.templateEngine||g)==n&&m(Error("Set a template engine before calling renderTemplate"));i=i||"replaceChildren";if(k){var l=d(k);return a.h(function(){var g=c&&c instanceof a.z?c:new a.z(a.a.d(c)),o="function"==typeof b?b(g.$data):b,g=f(k,i,o,g,j);"replaceNode"==i&&(k=g,l=d(k))},s,{disposeWhen:function(){return!l||!a.a.fa(l)},disposeWhenNodeIsRemoved:l&&"replaceNode"==i?l.parentNode:l})}return a.s.na(function(d){a.qa(b,c,j,d,"replaceNode")})};a.Fb=function(b,
d,g,k,i){function l(a,b){c(b,o);g.afterRender&&g.afterRender(b,a)}function q(c,d){var h="function"==typeof b?b(c):b;o=i.createChildContext(a.a.d(c));o.$index=d;return f(s,"ignoreTargetNode",h,o,g)}var o;return a.h(function(){var b=a.a.d(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.aa(b,function(b){return g.includeDestroyed||b===n||b===s||!a.a.d(b._destroy)});a.a.Oa(k,b,q,g,l)},s,{disposeWhenNodeIsRemoved:k})};a.c.template={init:function(b,c){var d=a.a.d(c());if("string"!=typeof d&&!d.name&&
(1==b.nodeType||8==b.nodeType))d=1==b.nodeType?b.childNodes:a.e.childNodes(b),d=a.a.Ab(d),(new a.l.M(b)).nodes(d);return{controlsDescendantBindings:p}},update:function(b,c,d,f,g){c=a.a.d(c());f=p;"string"==typeof c?d=c:(d=c.name,"if"in c&&(f=f&&a.a.d(c["if"])),"ifnot"in c&&(f=f&&!a.a.d(c.ifnot)));var l=s;"object"===typeof c&&"foreach"in c?l=a.Fb(d||b,f&&c.foreach||[],c,b,g):f?(g="object"==typeof c&&"data"in c?g.createChildContext(a.a.d(c.data)):g,l=a.qa(d||b,g,c,b)):a.e.ha(b);g=l;(c=a.a.f.get(b,"__ko__templateSubscriptionDomDataKey__"))&&
"function"==typeof c.A&&c.A();a.a.f.set(b,"__ko__templateSubscriptionDomDataKey__",g)}};a.g.D.template=function(b){b=a.g.W(b);return 1==b.length&&b[0].unknown||a.g.wb(b,"name")?s:"This template engine does not support anonymous templates nested within its templates"};a.e.C.template=p})();a.b("setTemplateEngine",a.ra);a.b("renderTemplate",a.qa);(function(){a.a.O=function(b,c,d){if(d===n)return a.a.O(b,c,1)||a.a.O(b,c,10)||a.a.O(b,c,Number.MAX_VALUE);for(var b=b||[],c=c||[],f=b,g=c,e=[],h=0;h<=g.length;h++)e[h]=
[];for(var h=0,j=Math.min(f.length,d);h<=j;h++)e[0][h]=h;h=1;for(j=Math.min(g.length,d);h<=j;h++)e[h][0]=h;for(var j=f.length,k,i=g.length,h=1;h<=j;h++){k=Math.max(1,h-d);for(var l=Math.min(i,h+d);k<=l;k++)e[k][h]=f[h-1]===g[k-1]?e[k-1][h-1]:Math.min(e[k-1][h]===n?Number.MAX_VALUE:e[k-1][h]+1,e[k][h-1]===n?Number.MAX_VALUE:e[k][h-1]+1)}d=b.length;f=c.length;g=[];h=e[f][d];if(h===n)e=s;else{for(;0<d||0<f;){j=e[f][d];i=0<f?e[f-1][d]:h+1;l=0<d?e[f][d-1]:h+1;k=0<f&&0<d?e[f-1][d-1]:h+1;if(i===n||i<j-1)i=
h+1;if(l===n||l<j-1)l=h+1;k<j-1&&(k=h+1);i<=l&&i<k?(g.push({status:"added",value:c[f-1]}),f--):(l<i&&l<k?g.push({status:"deleted",value:b[d-1]}):(g.push({status:"retained",value:b[d-1]}),f--),d--)}e=g.reverse()}return e}})();a.b("utils.compareArrays",a.a.O);(function(){function b(a){if(2<a.length){for(var b=a[0],c=a[a.length-1],e=[b];b!==c;){b=b.nextSibling;if(!b)return;e.push(b)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}}function c(c,f,g,e,h){var j=[],c=a.h(function(){var c=f(g,h)||
[];0<j.length&&(b(j),a.a.Na(j,c),e&&e(g,c));j.splice(0,j.length);a.a.N(j,c)},s,{disposeWhenNodeIsRemoved:c,disposeWhen:function(){return 0==j.length||!a.a.fa(j[0])}});return{xb:j,h:c}}a.a.Oa=function(d,f,g,e,h){for(var f=f||[],e=e||{},j=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===n,k=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=a.a.T(k,function(a){return a.$a}),l=a.a.O(i,f),f=[],q=0,o=[],v=0,i=[],u=s,r=0,w=l.length;r<w;r++)switch(l[r].status){case "retained":var y=
k[q];y.qb(v);v=f.push(y);0<y.P.length&&(u=y.P[y.P.length-1]);q++;break;case "deleted":k[q].h.A();b(k[q].P);a.a.v(k[q].P,function(a){o.push({element:a,index:r,value:l[r].value});u=a});q++;break;case "added":for(var y=l[r].value,x=a.m(v),v=c(d,g,y,h,x),C=v.xb,v=f.push({$a:l[r].value,P:C,h:v.h,qb:x}),z=0,B=C.length;z<B;z++){var D=C[z];i.push({element:D,index:r,value:l[r].value});u==s?a.e.Ka(d,D):a.e.Fa(d,D,u);u=D}h&&h(y,C,x)}a.a.v(o,function(b){a.F(b.element)});g=t;if(!j){if(e.afterAdd)for(r=0;r<i.length;r++)e.afterAdd(i[r].element,
i[r].index,i[r].value);if(e.beforeRemove){for(r=0;r<o.length;r++)e.beforeRemove(o[r].element,o[r].index,o[r].value);g=p}}if(!g&&o.length)for(r=0;r<o.length;r++)e=o[r].element,e.parentNode&&e.parentNode.removeChild(e);a.a.f.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",f)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Oa);a.q=function(){this.allowTemplateRewriting=t};a.q.prototype=new a.t;a.q.prototype.renderTemplateSource=function(b){var c=!(9>a.a.ja)&&b.nodes?b.nodes():s;
if(c)return a.a.L(c.cloneNode(p).childNodes);b=b.text();return a.a.pa(b)};a.q.K=new a.q;a.ra(a.q.K);a.b("nativeTemplateEngine",a.q);(function(){a.ma=function(){var a=this.vb=function(){if("undefined"==typeof jQuery||!jQuery.tmpl)return 0;try{if(0<=jQuery.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,f,g){g=g||{};2>a&&m(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));var e=b.data("precompiled");
e||(e=b.text()||"",e=jQuery.template(s,"{{ko_with $item.koBindingContext}}"+e+"{{/ko_with}}"),b.data("precompiled",e));b=[f.$data];f=jQuery.extend({koBindingContext:f},g.templateOptions);f=jQuery.tmpl(e,b,f);f.appendTo(document.createElement("div"));jQuery.fragments={};return f};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){document.write("<script type='text/html' id='"+a+"'>"+b+"<\/script>")};0<a&&(jQuery.tmpl.tag.ko_code=
{open:"__.push($1 || '');"},jQuery.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.ma.prototype=new a.t;var b=new a.ma;0<b.vb&&a.ra(b);a.b("jqueryTmplTemplateEngine",a.ma)})()}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?E(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],E):E(window.ko={});p;
})(window,document,navigator);

/* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);


/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/
(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this); 

/*
 * DC Mega Menu - jQuery mega menu
 * Copyright (c) 2011 Design Chemical
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 */
 
(function($){

	//define the defaults for the plugin and how to call it	
	$.fn.dcMegaMenu = function(options){
		//set default options  
		var defaults = {
			classParent: 'dc-mega',
			classContainer: 'sub-container',
			classSubParent: 'mega-hdr',
			classSubLink: 'mega-hdr',
			classWidget: 'dc-extra',
			rowItems: 5,
			speed: 'fast',
			effect: 'fade',
			event: 'hover',
			fullWidth: false,
			onLoad : function(){},
            beforeOpen : function(){},
			beforeClose: function(){}
		};

		//call in the default otions
		var options = $.extend(defaults, options);
		var $dcMegaMenuObj = this;

		//act upon the element that is passed into the design    
		return $dcMegaMenuObj.each(function(options){

			var clSubParent = defaults.classSubParent;
			var clSubLink = defaults.classSubLink;
			var clParent = defaults.classParent;
			var clContainer = defaults.classContainer;
			var clWidget = defaults.classWidget;
			
			megaSetup();
			
			function megaOver(){
				var subNav = $('.sub',this);
				$(this).addClass('mega-hover');
				if(defaults.effect == 'fade'){
					$(subNav).fadeIn(defaults.speed);
				}
				if(defaults.effect == 'slide'){
					$(subNav).show(defaults.speed);
				}
				// beforeOpen callback;
				defaults.beforeOpen.call(this);
			}
			function megaAction(obj){
				var subNav = $('.sub',obj);
				$(obj).addClass('mega-hover');
				if(defaults.effect == 'fade'){
					$(subNav).fadeIn(defaults.speed);
				}
				if(defaults.effect == 'slide'){
					$(subNav).show(defaults.speed);
				}
				// beforeOpen callback;
				defaults.beforeOpen.call(this);
			}
			function megaOut(){
				var subNav = $('.sub',this);
				$(this).removeClass('mega-hover');
				$(subNav).hide();
				// beforeClose callback;
				defaults.beforeClose.call(this);
			}
			function megaActionClose(obj){
				var subNav = $('.sub',obj);
				$(obj).removeClass('mega-hover');
				$(subNav).hide();
				// beforeClose callback;
				defaults.beforeClose.call(this);
			}
			function megaReset(){
				$('li',$dcMegaMenuObj).removeClass('mega-hover');
				$('.sub',$dcMegaMenuObj).hide();
			}

			function megaSetup(){
				$arrow = '<span class="dc-mega-icon"></span>';
				var clParentLi = clParent+'-li';
				var menuWidth = $dcMegaMenuObj.outerWidth();
				$('> li',$dcMegaMenuObj).each(function(){
					//Set Width of sub
					var $mainSub = $('> ul',this);
					var $primaryLink = $('> a',this);
					if($mainSub.length){
						$primaryLink.addClass(clParent).append($arrow);
						$mainSub.addClass('sub').wrap('<div class="'+clContainer+'" />');
						
						var pos = $(this).position();
						pl = pos.left;
							
						if($('ul',$mainSub).length){
							$(this).addClass(clParentLi);
							$('.'+clContainer,this).addClass('mega');
							$('> li',$mainSub).each(function(){
								if(!$(this).hasClass(clWidget)){
									$(this).addClass('mega-unit');
									if($('> ul',this).length){
										$(this).addClass(clSubParent);
										$('> a',this).addClass(clSubParent+'-a');
									} else {
										$(this).addClass(clSubLink);
										$('> a',this).addClass(clSubLink+'-a');
									}
								}
							});

							// Create Rows
							var hdrs = $('.mega-unit',this);
							rowSize = parseInt(defaults.rowItems);
							/*for(var i = 0; i < hdrs.length; i+=rowSize){
								hdrs.slice(i, i+rowSize).wrapAll('<div class="row" />');
							}*/

							// Get Sub Dimensions & Set Row Height
							$mainSub.show();
							
							// Get Position of Parent Item
							var pw = $(this).width();
							var pr = pl + pw;
							
							// Check available right margin
							var mr = menuWidth - pr;
							
							// // Calc Width of Sub Menu
							var subw = $mainSub.outerWidth();
							var totw = $mainSub.parent('.'+clContainer).outerWidth();
							var cpad = totw - subw;
							
							if(defaults.fullWidth == true){
								var fw = menuWidth - cpad;
								$mainSub.parent('.'+clContainer).css({width: fw+'px'});
								$dcMegaMenuObj.addClass('full-width');
							}
							var iw = $('.mega-unit',$mainSub).outerWidth(true);
							var rowItems = $('.row:eq(0) .mega-unit',$mainSub).length;
							var inneriw = iw * rowItems;
							var totiw = inneriw + cpad;
							
							// Set mega header height
							$('.row',this).each(function(){
								$('.mega-unit:last',this).addClass('last');
								var maxValue = undefined;
								$('.mega-unit > a',this).each(function(){
									var val = parseInt($(this).height());
									if (maxValue === undefined || maxValue < val){
										maxValue = val;
									}
								});
								$('.mega-unit > a',this).css('height',maxValue+'px');
								$(this).css('width',inneriw+'px');
							});
							
							// Calc Required Left Margin incl additional required for right align
							
							if(defaults.fullWidth == true){
								params = {left: 0};
							} else {
								
								var ml = mr < ml ? ml + ml - mr : (totiw - pw)/2;
								var subLeft = pl - ml;

								// If Left Position Is Negative Set To Left Margin
								var params = {left: pl+'px', marginLeft: -ml+'px'};
								
								if(subLeft < 0){
									params = {left: 0};
								}else if(mr < ml){
									params = {right: 0};
								}
							}
							$('.'+clContainer,this).css(params);
							
							// Calculate Row Height
							$('.row',$mainSub).each(function(){
								var rh = $(this).height();
								$('.mega-unit',this).css({height: rh+'px'});
								$(this).parent('.row').css({height: rh+'px'});
							});
							$mainSub.hide();
					
						} else {
							$('.'+clContainer,this).addClass('non-mega').css('left',pl+'px');
						}
					}
				});
				// Set position of mega dropdown to bottom of main menu
				var menuHeight = $('> li > a',$dcMegaMenuObj).outerHeight(true);
				$('.'+clContainer,$dcMegaMenuObj).css({top: menuHeight+'px'}).css('z-index','1000');
				
				if(defaults.event == 'hover'){
					// HoverIntent Configuration
					var config = {
						sensitivity: 7,
						interval: 50,
						over: megaOver,
						timeout: 400,
						out: megaOut
					};
					$('li',$dcMegaMenuObj).hoverIntent(config);
				}
				
				if(defaults.event == 'click'){
				
					$('body').mouseup(function(e){
						if(!$(e.target).parents('.mega-hover').length){
							megaReset();
						}
					});

					$('> li > a.'+clParent,$dcMegaMenuObj).click(function(e){
						var $parentLi = $(this).parent();
						if($parentLi.hasClass('mega-hover')){
							megaActionClose($parentLi);
						} else {
							megaAction($parentLi);
						}
						e.preventDefault();
					});
				}
				
				// onLoad callback;
				defaults.onLoad.call(this);
			}
		});
	};
})(jQuery); 
 /*
/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0}),
 a.slides.eq(b).css({opacity:1}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===
 a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};
 a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=
 setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&!s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=
 function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;
 case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+
 c.animationSpeed/1E3+"s ease"}).eq(a.currentSlide).css({opacity:1}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==
 b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*
 (a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,
 a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<
 a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==
 e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults=
 {namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:8000,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",
 itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),i.start&&i.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;
 case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);

/* Stylish Select 0.4.9 - jQuery plugin to replace a select drop down box with a stylable unordered list
* http://github.com/scottdarby/Stylish-Select
*
* Contributions from Justin Beasley: http://www.harvest.org/ 
* Anatoly Ressin: http://www.artazor.lv/ Wilfred Hughes: https://github.com/Wilfred
* Grigory Zarubin: https://github.com/Craigy-
*
* Dual licensed under the MIT and GPL licenses.
*/

(function($){$('html').addClass('stylish-select');if(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement){if(this===void 0||this===null)throw new TypeError();var t=Object(this);var len=t.length>>>0;if(len===0)return-1;var n=0;if(arguments.length>0){n=Number(arguments[1]);if(n!==n)n=0;else if(n!==0&&n!==(1/0)&&n!==-(1/0))n=(n>0||-1)*Math.floor(Math.abs(n))}if(n>=len)return-1;var k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===searchElement)return k}return-1}}$.fn.extend({getSetSSValue:function(value){if(value){$(this).val(value).change();return this}else{return $(this).find(':selected').val()}},resetSS:function(){var oldOpts=$(this).data('ssOpts');$this=$(this);$this.next().remove();$this.unbind('.sSelect').sSelect(oldOpts)}});$.fn.sSelect=function(options){return this.each(function(){var defaults={defaultText:'Please select',animationSpeed:0,ddMaxHeight:'',containerClass:''};var opts=$.extend(defaults,options),$input=$(this),$containerDivText=$('<div class="selectedTxt"></div>'),$containerDiv=$('<div class="newListSelected '+opts.containerClass+($input.is(':disabled')?'newListDisabled':'')+'"></div>'),$containerDivWrapper=$('<div class="SSContainerDivWrapper" style="visibility:hidden;"></div>'),$newUl=$('<ul class="newList"></ul>'),currentIndex=-1,prevIndex=-1,keys=[],prevKey=false,prevented=false,$newLi;$(this).data('ssOpts',options);$containerDiv.insertAfter($input);$containerDiv.attr("tabindex",$input.attr("tabindex")||"0");$containerDivText.prependTo($containerDiv);$newUl.appendTo($containerDiv);$newUl.wrap($containerDivWrapper);$containerDivWrapper=$newUl.parent();$input.hide();if($input.is(':disabled')){return}$containerDivText.data('ssReRender',!$containerDivText.is(':visible'));function addItem(item,container){var option=$(item).text(),key=$(item).val(),isDisabled=$(item).is(':disabled');if(!isDisabled&&!$(item).parents().is(':disabled')){keys.push(option.charAt(0).toLowerCase())}container.append($('<li><a'+(isDisabled?' class="newListItemDisabled"':'')+' href="JavaScript:void(0);">'+option+'</a></li>').data({'key':key,'selected':$(item).is(':selected')}))}$input.children().each(function(){if($(this).is('option')){addItem(this,$newUl)}else{var optionTitle=$(this).attr('label'),$optGroup=$('<li class="newListOptionTitle '+($(this).is(':disabled')?'newListOptionDisabled':'')+'">'+optionTitle+'</li>'),$optGroupList=$('<ul></ul>');$optGroup.appendTo($newUl);$optGroupList.appendTo($optGroup);$(this).children().each(function(){addItem(this,$optGroupList)})}});$newLi=$newUl.find('li a:not(.newListItemDisabled)').not(function(){return $(this).parents().hasClass('newListOptionDisabled')});$newLi.each(function(i){if($(this).parent().data('selected')){opts.defaultText=$(this).html();currentIndex=prevIndex=i}});var newUlHeight=$newUl.height(),containerHeight=$containerDiv.height(),newLiLength=$newLi.length;if(currentIndex!=-1){navigateList(currentIndex)}else{$containerDivText.text(opts.defaultText)}function newUlPos(){var containerPosY=$containerDiv.offset().top,docHeight=$(window).height(),scrollTop=$(window).scrollTop();if(newUlHeight>parseInt(opts.ddMaxHeight)){newUlHeight=parseInt(opts.ddMaxHeight)}containerPosY=containerPosY-scrollTop;if(containerPosY+newUlHeight>=docHeight){$newUl.css({height:newUlHeight});$containerDivWrapper.css({top:'-'+newUlHeight+'px',height:newUlHeight}).addClass("ontop");$input.onTop=true}else{$newUl.css({height:newUlHeight});$containerDivWrapper.css({top:containerHeight+'px',height:newUlHeight}).removeClass("ontop");$input.onTop=false}}newUlPos();$(window).bind('resize.sSelect scroll.sSelect',newUlPos);function positionFix(){$containerDiv.css('position','relative')}function positionHideFix(){$containerDiv.css({position:'static'})}$containerDivText.bind('click.sSelect',function(event){event.stopPropagation();if($(this).data('ssReRender')){newUlHeight=$newUl.height('').height();$containerDivWrapper.height('');containerHeight=$containerDiv.height();$(this).data('ssReRender',false);newUlPos()}$('.SSContainerDivWrapper').not($(this).next()).hide().parent().css('position','static').removeClass('newListSelFocus');$containerDivWrapper.toggle();positionFix();if(currentIndex==-1)currentIndex=0;try{$newLi.eq(currentIndex).focus()}catch(ex){}});function closeDropDown(fireChange,resetText){if(fireChange==true){prevIndex=currentIndex;$input.change()}if(resetText==true){currentIndex=prevIndex;navigateList(currentIndex)}$containerDivWrapper.hide();positionHideFix()}$newLi.bind('click.sSelect',function(e){var $clickedLi=$(e.target);currentIndex=$newLi.index($clickedLi);prevented=true;navigateList(currentIndex,true);closeDropDown()});$newLi.bind('mouseenter.sSelect',function(e){var $hoveredLi=$(e.target);$hoveredLi.addClass('newListHover')}).bind('mouseleave.sSelect',function(e){var $hoveredLi=$(e.target);$hoveredLi.removeClass('newListHover')});function navigateList(currentIndex,fireChange){if(currentIndex==-1){$containerDivText.text(opts.defaultText);$newLi.removeClass('hiLite')}else{$newLi.removeClass('hiLite').eq(currentIndex).addClass('hiLite');var text=$newLi.eq(currentIndex).text(),val=$newLi.eq(currentIndex).parent().data('key');try{$input.val(val)}catch(ex){$input[0].selectedIndex=currentIndex}$containerDivText.text(text);if(fireChange==true){prevIndex=currentIndex;$input.change()}if($containerDivWrapper.is(':visible')){try{$newLi.eq(currentIndex).focus()}catch(ex){}}}}$input.bind('change.sSelect',function(event){var $targetInput=$(event.target);if(prevented==true){prevented=false;return false}var $currentOpt=$targetInput.find(':selected');currentIndex=$targetInput.find('option').index($currentOpt);navigateList(currentIndex)});function keyPress(element){$(element).unbind('keydown.sSelect').bind('keydown.sSelect',function(e){var keycode=e.which;prevented=true;switch(keycode){case 40:case 39:incrementList();return false;break;case 38:case 37:decrementList();return false;break;case 33:case 36:gotoFirst();return false;break;case 34:case 35:gotoLast();return false;break;case 13:case 27:closeDropDown(true);return false;break;case 9:closeDropDown(true);nextFormElement();return false;break}keyPressed=String.fromCharCode(keycode).toLowerCase();var currentKeyIndex=keys.indexOf(keyPressed);if(typeof currentKeyIndex!='undefined'){++currentIndex;currentIndex=keys.indexOf(keyPressed,currentIndex);if(currentIndex==-1||currentIndex==null||prevKey!=keyPressed){currentIndex=keys.indexOf(keyPressed)}navigateList(currentIndex);prevKey=keyPressed;return false}})}function incrementList(){if(currentIndex<(newLiLength-1)){++currentIndex;navigateList(currentIndex)}}function decrementList(){if(currentIndex>0){--currentIndex;navigateList(currentIndex)}}function gotoFirst(){currentIndex=0;navigateList(currentIndex)}function gotoLast(){currentIndex=newLiLength-1;navigateList(currentIndex)}$containerDiv.bind('click.sSelect',function(e){e.stopPropagation();keyPress(this)});$containerDiv.bind('focus.sSelect',function(){$(this).addClass('newListSelFocus');keyPress(this)});$containerDiv.bind('blur.sSelect',function(){$(this).removeClass('newListSelFocus')});$(document).bind('click.sSelect',function(){$containerDiv.removeClass('newListSelFocus');if($containerDivWrapper.is(':visible')){closeDropDown(false,true)}else{closeDropDown(false)}});function nextFormElement(){var fields=$('body').find('button,input,textarea,select'),index=fields.index($input);if(index>-1&&(index+1)<fields.length){fields.eq(index+1).focus()}return false}$input.focus(function(){$input.next().focus()});$containerDivText.bind('mouseenter.sSelect',function(e){var $hoveredTxt=$(e.target);$hoveredTxt.parent().addClass('newListSelHover')}).bind('mouseleave.sSelect',function(e){var $hoveredTxt=$(e.target);$hoveredTxt.parent().removeClass('newListSelHover')});$containerDivWrapper.css({left:'0',display:'none',visibility:'visible'})})}})(jQuery);

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

/* Lazy Load - jQuery plugin for lazy loading images
 * Copyright (c) 2007-2012 Mika Tuupola
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 * Version:  1.8.0
 */
(function(b,a){var c=b(a);b.fn.lazyload=function(d){var f=this;var g;var e={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:a,data_attribute:"original",skip_invisible:true,appear:null,load:null};function h(){var i=0;f.each(function(){var j=b(this);if(e.skip_invisible&&!j.is(":visible")){return}if(b.abovethetop(this,e)||b.leftofbegin(this,e)){}else{if(!b.belowthefold(this,e)&&!b.rightoffold(this,e)){j.trigger("appear")}else{if(++i>e.failure_limit){return false}}}})}if(d){if(undefined!==d.failurelimit){d.failure_limit=d.failurelimit;delete d.failurelimit}if(undefined!==d.effectspeed){d.effect_speed=d.effectspeed;delete d.effectspeed}b.extend(e,d)}g=(e.container===undefined||e.container===a)?c:b(e.container);if(0===e.event.indexOf("scroll")){g.bind(e.event,function(i){return h()})}this.each(function(){var i=this;var j=b(i);i.loaded=false;j.one("appear",function(){if(!this.loaded){if(e.appear){var k=f.length;e.appear.call(i,k,e)}b("<img />").bind("load",function(){j.hide().attr("src",j.data(e.data_attribute))[e.effect](e.effect_speed);i.loaded=true;var l=b.grep(f,function(n){return !n.loaded});f=b(l);if(e.load){var m=f.length;e.load.call(i,m,e)}}).attr("src",j.data(e.data_attribute))}});if(0!==e.event.indexOf("scroll")){j.bind(e.event,function(k){if(!i.loaded){j.trigger("appear")}})}});c.bind("resize",function(i){h()});h();return this};b.belowthefold=function(e,f){var d;if(f.container===undefined||f.container===a){d=c.height()+c.scrollTop()}else{d=b(f.container).offset().top+b(f.container).height()}return d<=b(e).offset().top-f.threshold};b.rightoffold=function(e,f){var d;if(f.container===undefined||f.container===a){d=c.width()+c.scrollLeft()}else{d=b(f.container).offset().left+b(f.container).width()}return d<=b(e).offset().left-f.threshold};b.abovethetop=function(e,f){var d;if(f.container===undefined||f.container===a){d=c.scrollTop()}else{d=b(f.container).offset().top}return d>=b(e).offset().top+f.threshold+b(e).height()};b.leftofbegin=function(e,f){var d;if(f.container===undefined||f.container===a){d=c.scrollLeft()}else{d=b(f.container).offset().left}return d>=b(e).offset().left+f.threshold+b(e).width()};b.inviewport=function(d,e){return !b.rightofscreen(d,e)&&!b.leftofscreen(d,e)&&!b.belowthefold(d,e)&&!b.abovethetop(d,e)};b.extend(b.expr[":"],{"below-the-fold":function(d){return b.belowthefold(d,{threshold:0})},"above-the-top":function(d){return !b.belowthefold(d,{threshold:0})},"right-of-screen":function(d){return b.rightoffold(d,{threshold:0})},"left-of-screen":function(d){return !b.rightoffold(d,{threshold:0})},"in-viewport":function(d){return !b.inviewport(d,{threshold:0})},"above-the-fold":function(d){return !b.belowthefold(d,{threshold:0})},"right-of-fold":function(d){return b.rightoffold(d,{threshold:0})},"left-of-fold":function(d){return !b.rightoffold(d,{threshold:0})}})})(jQuery,window);

/* jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(b){var a=false;b("a[data-reveal-id]").live("click",function(d){d.preventDefault();var c=b(this).attr("data-reveal-id");b("#"+c).reveal(b(this).data())});b.fn.reveal=function(c){var e=b(document),d={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:true,dismissModalClass:"close-reveal-modal",open:b.noop,opened:b.noop,close:b.noop,closed:b.noop};c=b.extend({},d,c);return this.each(function(){var q=b(this),i=parseInt(q.css("top"),10),l=q.height()+i,k=false,g=b(".reveal-modal-bg"),j={open:{top:0,opacity:0,visibility:"visible",display:"block"},close:{top:i,opacity:1,visibility:"hidden",display:"none"}},f;if(g.length===0){g=b("<div />",{"class":"reveal-modal-bg"}).insertAfter(q);g.fadeTo("fast",0.5)}function m(){k=false}function r(){k=true}function o(){var s=b(".reveal-modal.open");if(s.length===1){a=true;s.trigger("reveal:close")}}function n(){if(!k){r();o();q.addClass("open");if(c.animation==="fadeAndPop"){j.open.top=e.scrollTop()-l;j.open.opacity=0;q.css(j.open);g.fadeIn(c.animationSpeed/2);q.delay(c.animationSpeed/2).animate({top:e.scrollTop()+i+"px",opacity:1},c.animationSpeed,function(){q.trigger("reveal:opened")})}if(c.animation==="fade"){j.open.top=e.scrollTop()+i;j.open.opacity=0;q.css(j.open);g.fadeIn(c.animationSpeed/2);q.delay(c.animationSpeed/2).animate({opacity:1},c.animationSpeed,function(){q.trigger("reveal:opened")})}if(c.animation==="none"){j.open.top=e.scrollTop()+i;j.open.opacity=1;q.css(j.open);g.css({display:"block"});q.trigger("reveal:opened")}}}q.bind("reveal:open.reveal",n);function h(){if(!k){r();q.removeClass("open");if(c.animation==="fadeAndPop"){q.animate({top:e.scrollTop()-l+"px",opacity:0},c.animationSpeed/2,function(){q.css(j.close)});if(!a){g.delay(c.animationSpeed).fadeOut(c.animationSpeed,function(){q.trigger("reveal:closed")})}else{q.trigger("reveal:closed")}a=false}if(c.animation==="fade"){q.animate({opacity:0},c.animationSpeed,function(){q.css(j.close)});if(!a){g.delay(c.animationSpeed).fadeOut(c.animationSpeed,function(){q.trigger("reveal:closed")})}else{q.trigger("reveal:closed")}}if(c.animation==="none"){q.css(j.close);if(!a){g.css({display:"none"})}q.trigger("reveal:closed")}}}function p(){q.unbind(".reveal");g.unbind(".reveal");f.unbind(".reveal");b("body").unbind(".reveal")}q.bind("reveal:close.reveal",h);q.bind("reveal:opened.reveal reveal:closed.reveal",m);q.bind("reveal:closed.reveal",p);q.bind("reveal:open.reveal",c.open);q.bind("reveal:opened.reveal",c.opened);q.bind("reveal:close.reveal",c.close);q.bind("reveal:closed.reveal",c.closed);q.trigger("reveal:open");f=b("."+c.dismissModalClass).bind("click.reveal",function(){q.trigger("reveal:close")});if(c.closeOnBackgroundClick){g.css({cursor:"pointer"});g.bind("click.reveal",function(){q.trigger("reveal:close")})}b("body").bind("keyup.reveal",function(s){if(s.which===27){q.trigger("reveal:close")}})})}}(jQuery));

/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));


/* jQuery imagesLoaded plugin v2.0.1
 * http://github.com/desandro/imagesloaded
 * MIT License. by Paul Irish et al.
 */
(function(a,b){var c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(k){var h=this,m=a.isFunction(a.Deferred)?a.Deferred():0,l=a.isFunction(m.notify),e=h.find("img").add(h.filter("img")),f=[],j=[],g=[];function i(){var n=a(j),o=a(g);if(m){if(g.length){m.reject(e,n,o)}else{m.resolve(e)}}if(a.isFunction(k)){k.call(h,e,n,o)}}function d(n,o){if(n.src===c||a.inArray(n,f)!==-1){return}f.push(n);if(o){g.push(n)}else{j.push(n)}a.data(n,"imagesLoaded",{isBroken:o,src:n.src});if(l){m.notifyWith(a(n),[o,e,a(j),a(g)])}if(e.length===f.length){setTimeout(i);e.unbind(".imagesLoaded")}}if(!e.length){i()}else{e.bind("load.imagesLoaded error.imagesLoaded",function(n){d(n.target,n.type==="error")}).each(function(n,p){var q=p.src;var o=a.data(p,"imagesLoaded");if(o&&o.src===q){d(p,o.isBroken);return}if(p.complete&&p.naturalWidth!==b){d(p,p.naturalWidth===0||p.naturalHeight===0);return}if(p.readyState||p.complete){p.src=c;p.src=q}})}return m?m.promise(h):h}})(jQuery);

var $container = $('.stageGllry');

$container.imagesLoaded( function(){
  //alert("images loaded");
	$(".stageGllry img").each(function() {
		var width = $(this).width();
		var height = $(this).height();
		$(this).parent().css("width", width);
	});
});

function querySt(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("&");
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1];
		}
	}
}

function setCookie(name, value, expires, path, domain, secure){
	var today = new Date();
	today.setTime(today.getTime()); // set time (miliseconds)
	if (expires){
		//expires = expires * sec  * min * h * days;
		expires = expires * 1000 * 60 * 60 * 24; //days
	}
	var expires_date = new Date( today.getTime() + (expires) );
	var curCookie = name + "=" + escape(value) + "; path=/" + 
	((expires) ? "; expires=" + expires_date.toGMTString() : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
	document.cookie = curCookie;
}

function getCookie(name){
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1){
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else {
		begin += 2;
	}
	var end = document.cookie.indexOf(";", begin);
	if (end == -1){
		end = dc.length;
	}
	console.log("cookie: "+name+"="+ unescape(dc.substring(begin + prefix.length, end)));
	return unescape(dc.substring(begin + prefix.length, end));
}

function deleteCookie(name, path, domain){
	if (getCookie(name)){
		document.cookie = name + "=" + "; path=/" + 
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

function winOpen(theURL,winName,features){
	winName = window.open(theURL,winName,features);
	if(winName == null || winName.closed){
		window.open(theURL,winName,features);
	}else{
		winName.location.href = theURL;
	}
	if(!winName.closed){
		winName.focus();
	}
}

/* mobile Weiche
 */
var MobileRules = (function() {
	var isSmallscreenTest = function() {
		//return true;
		/*if(eval(screen.width) < 767 || eval(screen.height) < 767 ){
			return (eval(screen.width) < 767 || eval(screen.height) < 767);
		} else {
			return (eval(screen.width) < 767 || eval(screen.height) < 767);
		}*/
		if(eval(screen.width) < 767 ){
			return (eval(screen.width) < 767);
		} else {
			return (eval(screen.width) < 767);
		}
	};
	return {
		isSmallscreen : function() { return isSmallscreenTest(); }
	};
})();

var debug = false;
if (window.debug) {
	$(document).ready( function() {
		var logList = $('<ul id="debugmsgs"></ul>');
		$("body").append(logList);
		for (var ruleIndex in MobileRules) {
			var logMsg = $("<li>Rule #" +ruleIndex+ " ==> " +MobileRules[ruleIndex]()+ "</li>");
			logList.append(logMsg);
		}
	});
}
$(function(){


  $(".sendselect").click(function(e) {
    e.preventDefault();
    $curr = $(this).prev();
		//console.log($curr.val());
		if($curr.val() != "#"){
			switchSite($curr);
		}
  });



if (MobileRules.isSmallscreen()) {
	var choice = getCookie("version");
	if (choice != "mobile" && choice != "desktop"){
		//$('#mobileModal').reveal({});
		$(".mobilehint").show();
	}
}
});

/* initTabs Function
 */
function initTabs() {
  var tab = querySt("tab");
  if(tab){
	  if(tab.indexOf('.') == -1){
			tab = "1."+tab;
		}
	  var mytab = tab.split('.');
  }
	
  $("div.generate-ui-tab").tabs({ fx: { height: 'toggle', opacity: 'toggle' }} );
  if(tab){
$("div.generate-ui-tab").tabs("select",mytab[1]);
	}
 
  try{
    tableOverflow();
  }
  catch(e){}
}

/* initonAccordion Function
 */
function initonAccordion() {
  var expand = querySt("expand");
  if(expand){
    var myexpands = expand.split('|');
  }
  $.each( $("div.onAccordion > div"), function(i, n){
    //jQuery(n).before("<h2 class='onAccHead'>"+$(n).children("h2:first-child").html()+"</h2>");
    $(n).prev("h2").addClass("onAccHead");
    if ($(n).hasClass('open')) {
      $(n).prev(".onAccHead").addClass("selected");
    } else {
      $(n).addClass("hide");
        if(expand){
          for (j=0;j<myexpands.length;j++){
            if(myexpands[j] == i+1) {
            $(n).prev(".onAccHead").addClass("selected");
            $(n).removeClass("hide");
            
            if(j == 0) {
							var topoffset = $(n).offset().top;
							window.scrollTo(0,topoffset - 50);
            }
          }
        }
      }
    }
  }); 

  $(".onAccHead").click(function(e) {
    e.preventDefault();
    $(this).addClass("current");
    $.each( $(this).parent(".onAccordion").children(".selected:not('.current')"), function(i, n){
      $(n).next("div").animate({ height: 'toggle', opacity: 'toggle'},{duration: "fast",
        complete:function(){ 
          $(n).parent(".onAccordion").children(".onAccHead:not('.current')").removeClass("selected");
      } });
    });
    $(this).next("div").animate({ height: 'toggle', opacity: 'toggle'},{duration: "fast", 
      complete:function(){
        $(this).prev(".onAccHead").toggleClass("selected");  
        $(this).prev(".onAccHead").removeClass("current");
    } });

    try{
      tableOverflow();
    }
    catch(e){}

  });

  $("a[name='closeall']").click(function() {
    var clsall = $(this);
    var topoffsetbefore = $(this).offset().top;
    $(this).parent().parent("div").prevAll().each(function(i){
      if ($(this).hasClass("expands") ){
        var scrollTop= $(window).scrollTop();
        var topoffsetafter = $(clsall).offset().top;
        window.scrollTo(0,scrollTop - (topoffsetbefore - topoffsetafter) );
        return false;
      }
      $(this).children("h2").removeClass("selected").next("div.onAccordionContent, div.open").css("display", "none");
    });
    return false;
  });
  $("a[name='closeall']").addClass("closeall");
}

var lang = "de";

$(function(){
	lang = jQuery("html").attr("lang");


	$("#map-wrapper area").hover(function () {
			var myclass = "."+ $(this).attr("id")+"-img";
			$(myclass).fadeIn(200);
		},
		function () {
			var myclass = "."+ $(this).attr("id")+"-img";
			$(myclass).fadeOut(100);
		});
	$("#map-wrapper area").click(function () {
		var myclass = "."+ $(this).attr("id")+"-img";
		$(myclass).fadeOut(100);
	});



	// Stylish Select init
	$('.no-touch #my-dropdown, .no-touch #my-dropdown2, .no-touch #my-dropdown3').sSelect({ddMaxHeight: '180px'});
	$('.no-touch #my-dropdown4').sSelect({ddMaxHeight: '114px'});

$('.no-touch #my-dropdown, .no-touch #my-dropdown2, .no-touch #my-dropdown3, .no-touch #my-dropdown4').change(function(e) {
		e.preventDefault();
switchSite(this);
});


	initTabs();
	initonAccordion();
	
	$('.scroll-pane').jScrollPane({showArrows: true});

	$("img.lazy").lazyload();

	$(document).on("click", "a.videolink", function(e){
		e.preventDefault();
		var videowidth = $(".page").width() - 40;
		if(videowidth > 720){
			videowidth = 720;
		}
		var videoheight = videowidth/16 * 9 + 25;
		var videourl = $(this).attr("href");
		var videoheadline = $(this).attr("title");
		$('#modal h1').text(videoheadline);
		/*$('#modal .modalbody').html('<iframe style="width:'+videowidth+'px; height:'+videoheight+'px;" class="videoiframe" scrolling="no" frameborder="0" src="'+videourl+'?width='+videowidth+'&amp;height='+videoheight+'&amp;playerskin=21806&amp;qd=4"></iframe>');*/
$('#modal .modalbody').html('<iframe style="width:'+videowidth+'px; height:'+videoheight+'px;" class="videoiframe" scrolling="no" frameborder="0" src="'+videourl+'?width='+videowidth+'&amp;height='+videoheight+'&amp;player=94&amp;scwm=2&amp;chapter=1&amp;overlays=1&amp;cbarPlayPauseFlag=1&amp;cbarTrackFlag=1&amp;cbarTimeTotalFlag=1&amp;cbarTimeDurationFlag=1&amp;cbarvolumeBarFlag=1&amp;cbarFullScreenFlag=1&amp;qs=1&amp;adbtn=0&amp;adbtn5=0&amp;adbtn6=0&amp;bg=f3f3f3&amp;fg=333333&amp;ctcb1=666666&amp;ctcb2=d3d3d3&amp;ctcb3=d3d3d3&amp;ctcb4=eeeeee&amp;ctcb7=c6c6c6&amp;start=0&amp;volume=100&amp;loadtime=0&amp;wmode=opaque&amp;fupdate=1&amp;cwm=0&amp;ctp=0&amp;stillimg=0&amp;plang=default&amp;qd=3&amp;ctp=1"></iframe>');
		$('#modal').reveal({
			closed: function(){$(".modalbody").empty();}
		});
	});

	$('a[data-rel="zoom"]').click(function(e) {
		e.preventDefault();
		if($(this).children(".ir").hasClass("zoomin")){
			var zoomurl = $(this).attr("href");
			$(this).children("img").attr("src", zoomurl);
			$(this).parent("figure").addClass("zoomed");
			$(this).children(".ir").removeClass("zoomin").addClass("zoomout");
			/*var caption = $(this).next("figcaption").html();
			$('#modal .modalbody').html('<figure><img style="width:100%;" src="'+zoomurl+'"><figcaption>'+caption+'</figcaption></figure>');
			$('#modal h1').hide();
			$('#modal').reveal({
				closed: function(){$(".modalbody").empty();$('#modal h1').show();}
			});*/
		} else{
			var ourl = $(this).children("img").attr("data-original");
			$(this).children("img").attr("src", ourl);
			$(this).parent("figure").removeClass("zoomed");
			$(this).children(".ir").removeClass("zoomout").addClass("zoomin");
		}
  });


	$('a[data-rel="choosemobile"]').click(function(e) {
		setCookie("version", "mobile", 60);
	});
	$('a[data-rel="choosedesktop"]').click(function(e) {
		setCookie("version", "desktop", 60);
		e.preventDefault();
$(".mobilehint").hide();
	});

	$("a[href='#print']").click(function (e) {
		e.preventDefault();
		winOpen(window.location.href+'#print','printpreview','location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no,width=661,height=650');
	});
	$("a[href='#share']").click(function (e) {
		e.preventDefault();
		if($('#shareModal').length == 0){
var shareheadline='Share this page on';
if(lang=="de"){
shareheadline='Diese Seite teilen';
}
var closetext='close';
if(lang=="de"){
closetext='schließen';
}
			$("body").append('<div id="shareModal" class="reveal-modal"><h1>'+shareheadline+'</h1><div class="spacer-ten"></div><div class="modalbody smedia"></div><a class="close-reveal-modal">'+closetext+'<span class="close">&#215;</span></a></div>');
		}
		fillsharemodal();
		$('#shareModal').reveal({});
	});
	$(document).on("click", "a[href='#send']", function(e){
		e.preventDefault();
		var url = window.location.href;
		var title = document.title;
		//winOpen('recommend.htm','recommend','location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no,width=768,height=650');
		winOpen("https://secure.bayer.com/bayer-group/emailpage.aspx?lang=" +lang+ "&title=" + encodeURIComponent(title) + '&url=' + encodeURIComponent(url),"recommend","location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no,width=520,height=650");
	});

// RWD switch
	$(".rwdoff a").click(function (e) {
		e.preventDefault();
		$("html").removeClass("rwd");
		$(".rwdon").css("display","inline-block");
		$(".rwdoff").hide();
	});
	$(".rwdon a").click(function (e) {
		e.preventDefault();
		$("html").addClass("rwd");
		$(".rwdon").hide();
		$(".rwdoff").css("display","inline-block");
	});
// RWD switch end

  $(".mega-menu > li").hover(
    function (e){
			$(this).find("img.lazy").each(function (i) {
				$(this).attr("src", $(this).data("original"));
			});
	});
  $(".mega-menu > li > ul li").hover(
    function (e){
			var minheight = $(this).parent(".level2").height();
			$(this).children("ul").each(function (i) {
				$(this).css("min-height", minheight+"px");
			});
	});
  $(".mega-menu > li > ul li > ul li").hover(
    function (e){
			var minheight = $(this).parent("ul").height();
			$(this).children("ul").each(function (i) {
				$(this).css("min-height", minheight+"px");
			});
	});
	
	//$(".touch .active-nav .mega-menu").on("click", ".mega-hover > a", function(e){
/*	$(".mega-menu").on("click", ".mega-hover > a", function(e){
if($("body").hasClass('active-nav')){
		e.preventDefault();
		$(this).parent("li").removeClass("mega-hover");
}
	});
*/


                $(".touch #mega-menu-1 a.haschild").each(function() {
                    var onClick;
                    var firstClick = function() {
                        onClick = secondClick;
                        return false;
                    };
                    var secondClick = function() {
                        onClick = firstClick;
                        return true;
                    };
                    onClick = firstClick;
                    $(this).click(function() {
if($(this).hasClass('firstClick') != true){
  $('#mega-menu-1 a.haschild').removeClass('firstClick');
  $(this).addClass('firstClick');
               onClick = firstClick;
}

                        return onClick();
                    });
                });


  $(".lfthndnavi li.haschildren:not(.selected)").hoverIntent({
     over: function (){
  if($(this).hasClass('selected')!= true ) {
    $(this).addClass("lhhover");
  }
},    
     timeout: 180, 
     out: function (){$(this).removeClass("lhhover");}
	});

                $(".touch .lfthndnavi li.haschildren:not(.selected)").each(function() {
                    var onClick;
                    var firstClick = function() {
                        onClick = secondClick;
                        return false;
                    };
                    var secondClick = function() {
                        onClick = firstClick;
                        return true;
                    };
                    onClick = firstClick;
                    $(this).click(function() {
if($(this).hasClass('firstClick') != true){
  $('.lfthndnavi li.haschildren:not(.selected)').removeClass('firstClick');
  $(this).addClass('firstClick');
               onClick = firstClick;
}

                        return onClick();
                    });
                });



// Start Globale Metanavigation
	$(".showpanel").click(function (e) {
		e.preventDefault();
		$(".showpanel").parent("li").removeClass("hover");
		$(this).parent("li").addClass("hover");

			var panelheight = "380px";
			if($(this).hasClass("sp01")){
				panelheight = "400px";
			} else if($(this).hasClass("sp02")){
				panelheight = "380px";
			} else if($(this).hasClass("sp03")){
				panelheight = "475px";
			}

			if($("div.panel").is(":hidden")){
				$("div.panel").css({height: 0, display:"block"}).animate({ 
					height: panelheight
				}, "slow" );
			} else if($("div.panel").is(":hidden") == false){
				if($(this).hasClass("sp01") && $(".p01").is(":hidden") == false){
					$("div.panel").slideUp("slow");
					$(this).parent("li").removeClass("hover");
				} else if($(this).hasClass("sp02") && $(".p02").is(":hidden") == false){
					$("div.panel").slideUp("slow");
					$(this).parent("li").removeClass("hover");
				} else if($(this).hasClass("sp03") && $(".p03").is(":hidden") == false){
					$("div.panel").slideUp("slow");
					$(this).parent("li").removeClass("hover");
				}
			}

			$(".panel > div").hide();
			$("div.panel").animate({height: panelheight}, "slow" );
			if($(this).hasClass("sp01")){
				$(".p01").css({display: 'block'});
				$(".panel img.lazy").each(function (i) {
					$(this).attr("src", $(this).data("original"));
				});
				//initWebmailViewModel();
			} else if($(this).hasClass("sp02")){
				$(".p02").css({display: 'block'});
				$('.scroll-pane').jScrollPane({showArrows: true});
			} else if($(this).hasClass("sp03")){
				$(".p03").css({display: 'block'});
				$('.scroll-pane').jScrollPane({showArrows: true});
			}
	});
	$("a.closepanel, a.closepaneltop").click(function (e) {
		e.preventDefault();
		$("div.panel").slideUp("slow");
		$(".showpanel").parent("li").removeClass("hover");
	});
// End Globale Metanavigation

	$('#mega-menu-1').dcMegaMenu({

		rowItems: '1',
		speed: 0,
		event: 'hover',
		fullWidth: true
	});

	$("a[href='#stage1']").click(function (e) {
		e.preventDefault();
		$(".stage01").toggle();
		$(".stage02").toggle();
	});
	$(".stageGllry a[href='#']").click(function (e) {
		e.preventDefault();
		$(".cloudlayer").show("fast");
	});
	$(".closecloudlayer").click(function (e) {
		e.preventDefault();
		$(".cloudlayer").hide("fast");
	});

// mobile navigation
	$("a[href='#nav']").click(function (e) {
		e.preventDefault();
$(".mobilenav li").removeClass("selected");
		$("body").removeClass("active-search");
		$("body").toggleClass("active-nav");
		$(".active-nav .mnav").parent("li").toggleClass("selected");
	});
	$("a[href='#search']").click(function (e) {
		e.preventDefault();
$(".mobilenav li").removeClass("selected");
		$("body").removeClass("active-nav");
		$("body").toggleClass("active-search");
		$(".active-search .msearch").parent("li").toggleClass("selected");
	});
// end mobile navigation

	$(".flexfigure .zoomin").on("click", function(e){ 
		e.preventDefault();
			var gid = $( e.target ).prev(".flexslider").attr("id");
			$( e.target ).closest("figure").toggleClass('standardwidth').toggleClass('mrn');
			$( e.target ).prev(".flexslider").toggleClass('iszoomed').resize();
			$( e.target ).toggleClass("zoomout");
			$( e.target ).prev(".flexslider").find("li").each(function(i, elm) {
				if($( e.target ).prev(".flexslider").hasClass('iszoomed')){
					$(elm).find("img").attr("src", eval(gid)[1][i]);
				} else {
					$(elm).find("img").attr("src", eval(gid)[0][i]);
				}
      });
	});

  $(".table:not(.nohover) tr:not(.nohover, .th) td").hover(
    function (){$(this).parent("tr").addClass("betterhover");}, 
    function (){$(this).parent("tr").removeClass("betterhover");}
  );

	
/* responsive tables
 */
  var switched = false;
  var updateTables = function() {
    if (($(window).width() < 767) && !switched ){
      switched = true;
      $("table.responsive").each(function(i, element) {
        splitTable($(element));
      });
      return true;
    } else if (switched && ($(window).width() > 767)) {
      switched = false;
      $("table.responsive").each(function(i, element) {
        unsplitTable($(element));
      });
    }
  };
  $(window).load(updateTables);
  $(window).bind("resize", updateTables);
	function splitTable(original){
		original.wrap("<div class='table-wrapper' />");
		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.removeClass("responsive");
		$("colgroup col:first-child").remove();
		original.closest(".table-wrapper").append(copy);
		copy.wrap("<div class='pinned' />");
		original.wrap("<div class='scrollable' />");
	}
	function unsplitTable(original){
    original.closest(".table-wrapper").find(".pinned").remove();
    original.unwrap();
    original.unwrap();
	}

});


$(function() {

/* TODO */

});

$(window).load(function(){

$('.carousel').flexslider({
	animation: "slide",
	controlNav: false,
	animationLoop: true,
	slideshow: false,
	directionNav: true,
	itemWidth: 278,
	itemMargin: 0/*,
	start: function(slider){
		$(".carousel .flex-prev").addClass("flex-disabled");		
	}*/
});


$('#carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,directionNav: false,itemWidth: 85,itemMargin: 10,asNavFor: '#cslider'});
	
	$('#cslider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: true,
		slideshow: false,
		sync: "#carousel",
		start: function(slider){
			$("body").removeClass("loading");
      $("#carousel li").each(function (i) {
				var tipcount = i+2;
				var tipobj = $("#cslider .slides").children("li:nth-child("+tipcount+")").children(".stageContent");
				var tiptopline = $(tipobj).children(".stagetopline").text();
				var tipheadline = $(tipobj).children("h1").text();
        $(this).attr({
					 "data-placement":"top",
					 "data-rel":"tooltip",
					 "data-original-title":"<strong>"+tiptopline+"</strong><br/>"+tipheadline
				});
      });
			//$("#carousel li").tooltip();
			
		},
			before: function(slider){
				var nextslide = slider.animatingTo + 1;
				var imgobj = $("#cslider > .flex-viewport > ul li:nth-child("+nextslide+") > img");
				$(imgobj).attr("src", $(imgobj).data("original"));
			}

	});
	
	$('#slider').flexslider({
		animation: "slide",
		controlNav: true,
		animationLoop: true,
		slideshow: true,
		start: function(slider){
			$("body").removeClass("loading");
      $(".flex-control-paging li a").each(function (i) {
				var tipcount = i+2;
				var tipobj = $(this).parents(".flexslider").children(".flex-viewport").children(".slides").children("li:nth-child("+tipcount+")").children(".stagetext");
				var tiptopline = $(tipobj).children(".stagetopline").text();
				var tipheadline = $(tipobj).children("h1").text();
        $(this).attr({
					 "data-placement":"top",
					 "data-rel":"tooltip",
					 "data-original-title":tiptopline+"<br/><strong>"+tipheadline+"</strong>"
				});
      });
			$(".no-touch .flex-control-paging li a").tooltip();
			
		},
			before: function(slider){
				var nextslide = slider.animatingTo + 1;
				var imgobj = $("#slider > .flex-viewport > ul li:nth-child("+nextslide+") > img");
				$(imgobj).attr("src", $(imgobj).data("original"));
			}

	});
	$("#slider ul.slides li").css('cursor','pointer').click(function() {
		var firsthref = $(this).find('a:first').attr('href');
		window.location = firsthref;
	});

	$('.inlinegallery').flexslider({
		animation: "slide",
		slideshow: false,
		animationLoop: false,
		start: function(slider){
			var current = slider.currentSlide + 1;
			var gid = slider.attr("id");
			var pager = getLocPagerString(current,eval(gid)[0].length);/*"Image " + current + " of " + eval(gid)[0].length;*/
			slider.nextAll("figcaption").children(".imgcount").html(pager);
		},
		before: function(slider){
			slider.addClass("animated");
		},
		after: function(slider){
			slider.removeClass("animated");
			var nextslide = slider.currentSlide + 1;
			var gid = slider.attr("id");
			//alert(eval(gid)[0] +"_"+ gllry01[0]);
			if(eval(gid)[0].length > nextslide && eval(gid)[0].length > slider.count && nextslide == slider.count){
				var imgarray = 0;
				if( slider.hasClass("iszoomed")){
					imgarray = 1;
				}
				$('.slides').append('<li><img src="'+eval(gid)[imgarray][nextslide]+'" alt="'+eval(gid)[2][nextslide]+'" /></li>');
				slider.addSlide(".step1", nextslide);  
			}
			slider.nextAll("figcaption").children(".caption").text(eval(gid)[3][slider.currentSlide]);

			var current = slider.currentSlide + 1;
			var pager = getLocPagerString(current,eval(gid)[0].length);/*"Image " + current + " of " + eval(gid)[0].length;*/
			slider.nextAll("figcaption").children(".imgcount").html(pager);
		}
		
	});
	$('img[src="img/content/world.png"]').click(function(e) {
		$('#gallerymodal').reveal();

	
$('#mcslider').flexslider({
	animation: "slide",
	controlNav: false,
	animationLoop: true,
	slideshow: false,
	sync: "#mcarousel",
	start: function(slider){
		$("body").removeClass("loading");		
		$("#mcslider .flex-prev").addClass("flex-disabled");		
			var current = slider.currentSlide + 1;
			var pager = getLocPagerString(current,slider.count);/*"Image " + current + " of " + slider.count;*/
			$("#mcslider .imgcount").html(pager);
	},
		before: function(slider){
			/*var nextslide = slider.animatingTo + 1;
			var imgobj = $("#mcslider > .flex-viewport > ul li:nth-child("+nextslide+") > img");
			$(imgobj).attr("src", $(imgobj).data("original"));*/
			if(slider.currentSlide == 0 && slider.animatingTo == 1) {
				//alert(slider.currentSlide);
				$("#mcarousel ul li:nth-child("+1+")").removeClass("flex-active-slide");
				$("#mcarousel ul li:nth-child("+2+")").addClass("flex-active-slide");
			}
			if(slider.atEnd && slider.animatingTo == 0 && slider.count > 6) {
				$('#mcarousel .flex-prev').trigger("click");
				$("#mcarousel ul li:nth-child("+1+")").addClass("flex-active-slide");
				if(slider.count > 12) {
					$('#mcarousel .flex-prev').trigger("click");
				}
				if(slider.count > 18) {
					$('#mcarousel .flex-prev').trigger("click");
				}
				if(slider.count > 24) {
					$('#mcarousel .flex-prev').trigger("click");
				}
			}
	},
		after: function(slider){
			var current = slider.currentSlide + 1;
			var pager = getLocPagerString(current,slider.count); /*"Image " + current + " of " + slider.count;*/
			$("#mcslider .imgcount").html(pager);
		}
});
$('#mcarousel').flexslider({
	animation: "slide",
	controlNav: false,
	animationLoop: true,
	slideshow: false,
	directionNav: true,
	itemWidth: 125,
	itemMargin: 0,
	asNavFor: '#mcslider',
	start: function(slider){
		$("#mcarousel .flex-prev").addClass("flex-disabled");		
	}
});


	});
	
function getLocPagerString(currentL,maxL) {

  if (lang == 'de') {
	return "Bild " + currentL + " von " + maxL;
  } else {
	return "Image " + currentL + " of " + maxL;
  }

  return "Image " + currentL + " of " + maxL;;
}

	
	// socialmedia tooltips
	$(".socialmediablock").tooltip({
		selector: "a[data-rel=tooltip]"
	})

$(".download:even").addClass("odd");

 if(window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    if(hash == "webworlwide"){
      $(".sp03").trigger('click');
    }
    if(hash == "print"){
      $("html").removeClass("rwd");
      $("head").append('<link rel="stylesheet" href="http://www.bayer.com/styles/print.css">');
      $("body").append('<div class="disableclick"></div>');
      var timeout = setTimeout(function() {
        $(".disableclick").height($(document).height());
        print();
      }, 2000);
    }
  }


	$('a[data-rel=modal]').click(function(e) {
		e.preventDefault();
		//var fwidth = $(".page").width() - 40;
		//if(fwidth > 720){
		//	fwidth = 720;
		//}
		var fwidth = $(this).attr("data-mwidth");
		var fheight = $(this).attr("data-mheight");
if($(this).attr("data-addclass")){
		$('#modal').addClass($(this).attr("data-addclass"));
}


		var furl = $(this).attr("href");
		$('#modal h1').text('');
		$('#modal .modalbody').html('<iframe style="width:'+fwidth+'px; height:'+fheight+'px;" class="videoiframe" scrolling="no" frameborder="0" src="'+furl+'"></iframe>');
		$('#modal').reveal({
			closed: function(){$(".modalbody").empty(); $("#modal").attr("class", "reveal-modal");}
		});
	});


if($('#countrycontacs').length != 0){
	hideContact();
}

	$('.fvidlink').click(function(e) {
		e.preventDefault();
		var fvidarray = $(this).attr("id");
		var videowidth = $(".page").width() - 40;
		if(videowidth > 720){
			videowidth = 720;
		}
		var videoheight = videowidth/16 * 9 + 25;
		$(this).attr("id", 'fvidtemp');
		$('#modal h1').text('Video');
		$('#modal .modalbody').html('<div id="'+fvidarray+'"></div>');
		$('#modal').reveal({
			closed: function(){
				$(".modalbody").empty();
				$("#fvidtemp").attr("id", fvidarray);
			}
		});
		activateFvid(fvidarray, videowidth, videoheight);
	});

  $.each( $("div.jwp"), function(i, n){
		var fvidarray = $(n).attr("id");
		activateFvid(fvidarray, eval(fvidarray)[0]["fvidwidth"], eval(fvidarray)[0]["fvidheight"]);
  }); 

});
function activateFvid(fvidarray, fvidwidth, fvidheight) {
    jwplayer(fvidarray).setup({
			width: fvidwidth,
			height: fvidheight,
			'controlbar.position': 'bottom',
			image: eval(fvidarray)[0]["fvidimage"],
'autostart': 'false',
			modes: [
				{ type: "flash", 
					src: "/swf/player.swf", 
					config: {
						file: eval(fvidarray)[0]["fvidflv"]
					}
				},
				{ type: "html5",
					config: {
						file: eval(fvidarray)[0]["fvidmp4"]
					}
				},
				{ type: "download" }
			]
		});
}

/* ===========================================================
 * bootstrap-tooltip.js v2.2.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (this.options.trigger != 'manual') {
        eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })
          .insertAfter(this.$element)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .offset(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)
      self[self.tip().hasClass('in') ? 'hide' : 'show']()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  , html: true
  }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.2.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content > *')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = $e.attr('data-content')
        || (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'top'
  , trigger: 'manual'
  , content: ''
  , html: true
  , template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><div></div></div></div></div>'
  })

}(window.jQuery);


var popoverishovered = false;
function closepopover () {
  if (popoverishovered == false) {
		$(".popover").remove();
	}
}


// social media layer
function Site(id, name, url) {
  this.id = id;
  this.name = name;
  this.url = url;
	this.linkInList = "";
}

function buildLink(site, url, title, lang) {
	var nurl = site.url.replace(/{u}/, encodeURIComponent(url)).replace(/{t}/, encodeURIComponent(title));
	link = '<li><a href="'+nurl+'" target="_blank"><span class="ir '+site.id+'"></span>'+site.name+'</a></li>';
	return link;
}

function fillsharemodal() {
	var target = $("#shareModal .smedia");
	var url = window.location.href;
	var title = document.title;
	var recommendText = "Recommend this page via e-mail";
	if (lang == 'de') {
		recommendText = "Diese Seite per E-Mail weiterempfehlen";
	}
	var sites = [];
		
	sites[0] = new Site("facebook","Facebook","http://www.facebook.com/sharer.php?u={u}&amp;t={t}");
	sites[1]= new Site("linkedin","LinkedIn","http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary=&amp;source=");
	sites[2] = new Site("xing","Xing","https://www.xing.com/app/user?op=share;url=h{u};title={t}");
	sites[3] = new Site("googleplus","Google+","https://plus.google.com/share?url={u}");
	sites[4] = new Site("foursquare","Foursquare","hrfe{u}{t}");
	sites[5] = new Site("pinterest","Pinterest","http://pinterest.com/pin/create/button/?url={u}&amp;title={t}");
	
	sites[6] = new Site("twitter","Twitter","http://twitter.com/home?status={t}++{u}");
	sites[7] = new Site("blogger","Blogger","http://www.blogger.com/blog_this.pyra?t&amp;u={u}&amp;n={t}&amp;pli=1");
	sites[8] = new Site("wordpress","WordPress","hrfe{u}{t}");
	
	sites[9] = new Site("newsvine","Newsvine","http://www.newsvine.com/_tools/seed?popoff=0&u={u}");
	sites[10] = new Site("digg","Digg","http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}");
	sites[11] = new Site("reddit","Reddit","http://reddit.com/submit?url={u}&title={t}");
	sites[12] = new Site("webnews","Webnews","http://www.webnews.de/einstellen?url={u}");
	
	sites[13] = new Site("delicious","Delicious","http://del.icio.us/post?url={u}&amp;title={t}");
	sites[14] = new Site("googleshare","Google","http://www.google.com/bookmarks/mark?op=edit&amp;bkmk={u}&amp;title={t}");
	sites[15] = new Site("misterwong","Mr. Wong","http://www.mister-wong.com/index.php?action=addurl&amp;bm_url={u}&amp;bm_description={t}");
	sites[16] = new Site("stumbleupon","StumbleUpon","http://www.stumbleupon.com/submit?url={u}&title={t}");
	sites[17] = new Site("oneview","Oneview","http://oneview.com/link/quickadd/?URL=&title={u}{t}");
	sites[18] = new Site("yigg","Yigg","http://yigg.de/neu?exturl={u}&title={t}");
	sites[19] = new Site("recommend",recommendText ,"#send");
		
	for (var i = 0; i < sites.length; i++) {
		sites[i].linkInList = buildLink(sites[i], url, title, lang);
	}
	//TODO Language and Serverside Stuff
	var schließenText = "";
	if (lang == 'de') {
		schließenText = "schließen";
	} else {
		schließenText = "close";
	}
	
	var list1 = sites[0].linkInList + sites[1].linkInList + sites[2].linkInList + sites[3].linkInList + sites[4].linkInList + sites[5].linkInList;
	var list2 = sites[6].linkInList + sites[7].linkInList + sites[8].linkInList;
	var list3 = sites[9].linkInList + sites[10].linkInList + sites[11].linkInList + sites[12].linkInList;
	var list4 = sites[13].linkInList + sites[14].linkInList + sites[15].linkInList + sites[16].linkInList + sites[17].linkInList + sites[18].linkInList;

var grouphead1 = "Communities";
var grouphead2 = "Blogs and Microblogs";
var grouphead3 = "News";
var grouphead4 = "Bookmark Services";
if (lang == 'de') {
  grouphead1 = "Communities";
  grouphead2 = "Blogs und Microblogs";
  grouphead3 = "Nachrichten";
  grouphead4 = "Bookmark Dienste";
} 
	target.html('<div class="line"><div class="size1of4 unit"><div class="greybg"><h3>'+grouphead1+'</h3><ul class="nobulls">'+list1+'</ul></div></div><div class="size1of4 unit"><div class="greybg"><h3>'+grouphead2+'</h3><ul class="nobulls">'+list2+'</ul></div></div><div class="size1of4 unit"><div class="greybg"><h3>'+grouphead3+'</h3><ul class="nobulls">'+list3+'</ul></div></div><div class="size1of4 unit lastUnit"><div class="greybg"><h3>'+grouphead4+'</h3><ul class="nobulls">'+list4+'</ul></div></div></div><div class="spacer-fivteen"></div><div class="line"><div class="greybg"><ul class="nobulls">'+sites[19].linkInList+'</ul></div></div>');

};
// end social media layer
var availableTags = [
"150 Jahre Bayer","Abfall","Access to Medicine","Adalat™","Advantage™","Advantix™","Advocate™","Agrar","Agrarwirtschaft","Ägypten","Akquisition","Aktie","Aktien","Aktionäre","Aktionärsbrief","Aktren™","Aleve™","Alka-Seltzer™","Alumni","Anfahrt","Anti-Korruption","App-Übersicht","Arbeitssicherheit","Argentinien","Arzneimittel","Arzneimittelfälschung","Aspirin protect™","Aspirin™","Aufsichtsrat","Ausbildung","Australien","Auszeichnungen","Avelox™","Bahrain","Baumann","Bayarena","Baycusan™","Bayer","Bayer 04","Bayer Innovation GmbH","Bayer magazin","Bayer Real Estate","Bayer-Websites","Baykomm","Belgien","Bepanthen™","Bepanthol™","Berocca™","Betaferon™ / Betaseron™","Bienen","Bienengesundheit","Bildung","Bildungschancen","Biotechnologie","Blutzucker","Bolivien","Brasilien","Bulgarien","Canesten™","Carbon Disclosure","Chemie","Chemiepark","Chemieparks","Chile","China","Compliance","Contour™","Corporate Governance","Costa Rica","Currenta","Dänemark","de Win","Dekkers","Desmophen","Diabetes","Diabetiker","Diagnostika","Dialog","Dividende","Dominikanische Republik","Drontal™","Ecuador","Ehrenamt","Einladung","El Salvador","Elastomere","Elevit™","Emissionen","employment","Erkältung","Estland","Facebook","Fakten","Familie-Hansen-Preis","Famulatur","Finanzbericht","Finanzberichte","Finnland","Förderung","Forschung","Fortbildung","Frankreich","Fungizid","Fungizide","Fußball","Gadovist™","Gentechnik","Geschäftsbericht","Geschäftsentwicklung","Geschichte","Gesellschaft","Gesellschaftliches Engagement","Gesundheit","Global","Glucometer","Glucose","Google+","GRI Global Reporting Initiative","Griechenland","Guatemala","Hauptversammlung","Herbizid","Herbizide","Honduras","HSEQ Kennzahlen","Image Film","Imagefilm","Imidacloprid","Indien","Indonesien","Innovation","Innovationen","Insektizid","Insektizide","Integrierte Berichterstattung","Internationalität","Investoren","Irak","Irland","Israel","Italien","Jahresabschluss","Japan","Job","Jobs","Jordanien","Kanada","Karriere","Kasachstan","Kasino","Kautschuke","Kennzahlen","Ketostix","Klima","Klimaprogramm","Klimaschutz","Kogenate™","Kolumbien","Kommunikation","Kommunikationszentrum","Konzern","Korea","Kosmetik","Koenig","König","Krebs","Krebsforschung","Kroatien","Kultur","Kulturarbeit","Kulturförderung","Kunststoff","Kunststoffe","Kuratorium","Kuwait","Lagebericht","LANXESS","Leberkrebs","Lefax™","Lehramt","Leitbild","Lettland","Leverkusen","Levitra™","Libanon","Lieferantenmanagment","LinkedIn","Litauen","Magnevist™","Makrolon™","Malaria","Management","Meilensteine","Menschenrechte","Mexiko","Mirena™","Mitarbeiter","Mobil","Moxifloxacin","MSDS","Multistix","Nachhaltigkeit","Nachhaltigkeitsbericht","Nachhaltigkeitsprogramm","Nachrichten","Nanotechnologie","Navigation","Nebido™","Neuseeland","Nexavar™","Nicaragua","Niederlande","Oman","Organigramm","Organisation","Organisationsstruktur","Österreich","Otto-Bayer-Preis","Pakistan","Pallas","Panama","Paraguay","Personal","Peru","Pflanzenschutz","Pinnwand","Plischke","Podcast","Polen","polycarbonate","Polyurethane","Portugal","Praktikum","Preis","Preise","Preisträger","Primovist™","Priorin™","Procurement","Produkte","Produktsicherheit","Produktverantwortung","Profender™","Profil","Publikationen","Quartal","Real Estate","Rennie™","research","Risikomanagement","RSS Feed","Rumänien","Russland","Schering","Schneider","Schule","Schulförderung","Schulprogramm","Schulprogramme","Schulprojekt","Schulprojekte","Schweden","Schweiz","Senior Experten","Serbien","Sicherheitsdatenblätter","Slovakei","Slovenien","Social Media","Spanien","Spielzeit","Sport","Sportförderung","Standorte","Stellenangebote","Stiftung","Stiftungen","Stipendiat","Stipendiaten","Stipendien","Stipendium","strips","Südafrika","Sudan","Supradyn™","Taiwan","Talcid™","Teilkonzern","Thailand","Tickets","Tickets","Tiergesundheit","Tierversuche","Tochtergesellschaft","Tschechische Republik","TUNZA","Türkei","Twitter","Ukraine","Ultravist™","Umsatz","Umweltbotschafter","Umweltschutz","UN Global Compact","UNEP-Bayer-Partnerschaft","Ungarn","Unkraut","Unkrautvernichter","Unternehmensfilm","Unternehmensgeschichte","Unternehmensnachrichten","Unternehmensstruktur","Uruguay","Venezuela","Verantwortungsvolles Marketing","Verein","Vereine","Video","Vielfalt","Vietnam","Vietnam","Vital","Volunteering","Vorstand","Vorstandsvorsitzender","Wasser","Water Disclosure","Wegbeschreibung","weltweit","Wenning","Win","Xarelto™","Yasminelle™","Yasmin™","Yaz™","Yemen","Youtube","Zertifizierungen","Zwischenbericht","Zypern"
];
var availableTagsEN = [
"150 Years of Bayer","Access to Medicine","Adalat™","Advantage™","Advantix™","Advocate™","Agriculture","Aleve™","Alka-Seltzer™","Alumni","Animal Health","Animal Studies","annual report","Anti-Corruption","App Overview","Argentina","Aspirin Cardio™","Aspirin™","Australia","Austria","Avelox™","Bahrain","Baumann","Baycusan™","Bayer","Bayer 04","Bayer Group","Bayer Innovation GmbH","Bayer magazine","Bayer Real Estate","Bayer´s Internet Websites","Baykomm","Baytril™","bee","bee care","Belgium","Bepanthen™","Berocca™","Betaferon™ / Betaseron™","Biotechnology","Board of Management","Bolivia","Brazil","Bulgaria","Canada","Cancer","Canesten™","Carbon Disclosure","Care","career","Career","careers","Certifications","Chairman","Chemicals","Chile","China","climate","Climate program","climate protection","Colombia","Communication Center","Compliance","Contour™","Corporate","Corporate Governance","Cosmetics","Costa Rica","Croatia","Cultural affairs","Culture","Culture Promotion","Currenta","Cyprus","Czech Republic","de Win","Dekkers","Denmark","Desmophen","Diabetes","Dialogue","Diversity","Dominican Republic","Drontal™","Ecuador","Egypt","El Salvador","elastomers","Elevit™","Emissions","employees","employment","Environment","Environmental Envoys","Environmental protection","Estonia","Facebook","Fantasia™","Fellowship","financial report","financial reports","Financial Statements","Finland","Foundations","France","fungicide","fungicides","Gadovist™","Gene technology","Getting to Bayer","Global","Glucobay™","Glucometer","Glucose","Google+","Grants","Greece","GRI Global Reporting Initiative","Group","Guatemala","Health Care","herbicide","herbicides","History","Honduras","HSEQ Key Data","Human Rights","Hungary","Image Film","Imidacloprid","India","Indonesia","Innovation","insecticide","insecticides","Integrated Reporting","Internationality","internship","internships","Investors","Iraq","Ireland","Israel","Italy","Japan","Job","Jobs","Jordan","Kazakhstan","Ketostix","Kogenate™","Kommunikationszentrum","Korea","Koenig","König","Kuwait","LANXESS","Latvia","Lebanon","Leverkusen","Levitra™","Lithuania","Locations in Germany","Magnevist™","Makrolon™","Malaria","Management","Medicines","meter","Mexico","Milestones","Mirena™","Mobile","Moxifloxacin","MSDS","Nanotechnology","Nebido™","Netherlands","New Zealand","News","Nexavar™","Nexavar™","Nicaragua","Norway","Occupational Safety","Oman","One-A-Day™","Organigram","Organization","Organizational Structure","Pakistan","Pallas","Panama","Paraguay","Peru","Phone","plastic","Plastics","Plischke","Podcast","Poland","polycarbonate","Polymer","Polyurethane","Polyurethanes","Portugal","Premise","Primovist™","Priorin™","Procurement","product","Product Safety","Product Stewardship","products","Profender™","Profile","Publications","Real Estate","research","research magazine","Responsible Marketing","Risk Management","Romania","Rompun™","RSS Feed","Rubber","Russia","Sativex","Saudi Arabia","Schneider","Scholars","Scholarships","School support","Season","Serbia","sinpulgas","Slovakia","Slovenia","Soccer","Social Commitment","Social Media","Society","South Africa","Spain","Sports","Sports Promotion","stock","Stock","Stockholders","Stockholders Meeting","stockholders newsletter","strips","Sudan","Supervisory Board","Supplier management","Supradyn™","Sustainability","Sustainable Development","Sustainable Development Report","Sweden","Switzerland","Taiwan","Tempo","Thailand","thrombosis","Tickets","Training","Training Program","TUNZA International Youth Conferences","Turkey","Twitter","Ukraine","Ultravist™","UN Global Compact","UNEP Bayer Partnership","United Arab Emirates","United Kingdom","USA","USA","Venezuela","Verein","Vereine","Video","Volunteering","Waste","Water","Water Disclosure","Wenning","Win","worldwide","Xarelto™","Yemen","Youtube"
];

$(function() {

var saytArray = "availableTags";
if(lang == "en"){
	saytArray = "availableTagsEN";
}
	$( "#searchfield").autocomplete({
		source: function(req, responseFn) {
			var re = $.ui.autocomplete.escapeRegex(req.term);
			var matcher = new RegExp( "^" + re, "i" );
			var a = $.grep( eval(saytArray), function(item,index){
					return matcher.test(item);
			});
			responseFn( a );
		},
		open: function( event, ui ) {
			$(this).autocomplete('widget').css('z-index', 100);
			$("body").addClass("acstandard");
			$("body").removeClass("acblue");
			$("body").removeClass("acwhite");
		},
		select: function( event, ui ) {
			$(this).attr("value",ui.item.value);
			$(".searchbtn").trigger('click');
			}
		/*,
		minLength: 2*/
	});
	$( "#searchfield2" ).autocomplete({
		source: function(req, responseFn) {
			var re = $.ui.autocomplete.escapeRegex(req.term);
			var matcher = new RegExp( "^" + re, "i" );
			var a = $.grep(eval(saytArray), function(item,index){
					return matcher.test(item);
			});
			responseFn( a );
		},
		open: function( event, ui ) {
			$(this).autocomplete('widget').css('z-index', 100);
			$("body").addClass("acblue");
			$("body").removeClass("acstandard");
			$("body").removeClass("acwhite");
		},
		select: function( event, ui ) {
			$(this).attr("value",ui.item.value);
			$(".searchbtn").trigger('click');
			}
	});
	$( "#suchfeld, #suchfeld2" ).autocomplete({
		source: function(req, responseFn) {
			var re = $.ui.autocomplete.escapeRegex(req.term);
			var matcher = new RegExp( "^" + re, "i" );
			var a = $.grep(eval(saytArray), function(item,index){
					return matcher.test(item);
			});
			responseFn( a );
		},
		open: function( event, ui ) {
			$(this).autocomplete('widget').css('z-index', 100);
			$("body").addClass("acwhite");
			$("body").removeClass("acstandard");
			$("body").removeClass("acblue");
		},
		select: function( event, ui ) {
			$(this).attr("value",ui.item.value);
			$(".searchbtn").trigger('click');
			}
	});
});

function activateSearch(){

    $('input, textarea').placeholder();

var saytArray = "availableTags";
if(lang == "en"){
	saytArray = "availableTagsEN";
}

	$("#searchfield").autocomplete({
		source: function(req, responseFn) {
			var re = $.ui.autocomplete.escapeRegex(req.term);
			var matcher = new RegExp( "^" + re, "i" );
			var a = $.grep(eval(saytArray), function(item,index){
					return matcher.test(item);
			});

			responseFn( a );
		},
		open: function( event, ui ) {
			$(this).autocomplete('widget').css('z-index', 100);
			$("body").addClass("acstandard");
			$("body").removeClass("acblue");
			$("body").removeClass("acwhite");
		},
		select: function( event, ui ) {
			$(this).attr("value",ui.item.value);
			$(".searchbtn").trigger('click');
			}

		/*,
		minLength: 2*/
	});
	$("#searchfield, #searchfield2, #suchfeld2").keypress(function (e) {
		if (e.which == 13){
			$(".searchbtn").trigger('click');
		}
	});
	$('#searchfield, #suchfeld2').focus(function() {
		$('input[type="search"]').val('');
	});
	$(".searchbtn").click(function(e) {
    e.preventDefault();
		if($('#suchfeld').length > 0) {
			if($('#suchfeld').val()) {
				$('#searchfield').val( $('#suchfeld').val() );
			}
			if($('#suchfeld2').val()) {
				$('#searchfield').val( $('#suchfeld2').val() );
			}
			var asSitesearch = $("input[name='as_sitesearch']");
			if(asSitesearch.length > 0)
			{
				asSitesearch.val('');
			}
		}
		if($('#searchfield').closest("form").length == 0) {
				$('.fastsearch').wrap('<form class="fl" id="aspnetForm" action="http://www.bayer.de/de/google-search.aspx" method="post"/>');
		}

		submitSearch();
	});

}


function submitSearch(){
	var page = "google-search.aspx";
	var folder = lang;
		if(lang == "de"){
			folder="http://www.bayer.de/de";
		} else {
			folder="http://www.bayer.com/en";
		}
	if (folder)
			page = folder + "/" + page;
	document.forms.aspnetForm.action = page;
	document.forms.aspnetForm.m2.value = '';
	var states = document.getElementsByName("__VIEWSTATE");
	for (i = 0; i < states.length; i++)
			states[i].value = '';

  if(window.location.protocol == 'https:'){
	document.location.href = page + '?query='+$("#searchfield").val();
  } else {
	document.forms.aspnetForm.submit();
  }
}
function switchSite(dropDown){
	if (dropDown != null){
		var href = $(dropDown).val();
		if (href == ''){return;}
		if(href.indexOf(".currenta.") > 0){
			currentaDisclaimer();
		} else {
			document.location.href = href;
		}
	}
}
function switchSiteAlternate(dropDown){
	if (dropDown != null){
		var href = $(dropDown).val();
		if (href == ''){return;}
		if (href.indexOf("http://") < 0){
			document.location.href = href;
		} else {
			window.open($(dropDown).val(),"","toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
		}
	}
} 
var countdownValue= 10;
var countdownInterval = 0;

function countDown(){
  if(countdownValue > 0){
    countdownValue -= 1;
    $("#cntdwn").html(countdownValue);
  }
  if(countdownValue == 0){
    $("#cntdwn").html("0");
    clearInterval (countdownInterval);
    if ($("body").hasClass("de")){
      window.location = "http://www.currenta.de/";
    } else {
      window.location = "http://www.currenta.com/";
    }
  }
}
function currentaDisclaimer(){
    if ( $("body").hasClass("de") ){
      $("#modal .modalbody").append('<img src="/img/sys/currenta-de.png" alt="CURRENTA" class="clogo" /><p id="dsclmrdescription"><strong>CURRENTA betreibt als mehrheitlich zur Bayer AG geh&ouml;rende Servicegesellschaft den CHEMPARK an den Standorten Leverkusen, Dormagen und Krefeld-Uerdingen.</strong><br/><br/>In <span id="cntdwn">10</span> Sekunden werden Sie automatisch auf die Website <a href="http://www.currenta.de">http://www.currenta.de</a> weitergeleitet.</p>');
    } else {
      $("#modal .modalbody").append('<img src="/img/sys/currenta-en.png" alt="CURRENTA" class="clogo" /><p id="dsclmrdescription"><strong>The service company CURRENTA, in which Bayer AG owns a majority stake, is the manager and operator of CHEMPARK, with sites in Leverkusen, Dormagen and Krefeld-Uerdingen. </strong><br/><br/>You will be forwarded automatically to <a href="http://www.currenta.com">http://www.currenta.com</a> in <span id="cntdwn">10</span> seconds.</p>');
    }
		$('#modal').reveal({
			closed: function(){
      if ( $("body").hasClass("de") ){
        window.location = "http://www.currenta.de/";
      } else {
        window.location = "http://www.currenta.com/";
      }

}

		});
    countdownInterval = setInterval( "countDown()", 1000 );

}
/*jQuery(function(){
  $("body.homepage a[href*='www.currenta']").click(function() {
    currentaDisclaimer();
    return false;
  });
});*/


var checked = 'false';
	function isChecked(val) {
	checked = val;
}
var celDay = false;

$(function() {
	if ($('.n2.dc-mega-li a.selected').length > 0 && window.location.protocol != 'https:' ) {
var hf_de='PGRpdiBjbGFzcz0iaGRyZGZpZnR5YngiIHN0eWxlPSIiPjxhIGhyZWY9Imh0dHA6Ly9pbnRyYW5ldC5jbmIvZGIvdWsvSG9sZGluZ1BvcnRhbC5uc2YvaWQvREVfMTUwX1llYXJzIiBjbGFzcz0iIiBzdHlsZT0iIj48c3Ryb25nPkFrdGlvbmVuIGb8ciBNaXRhcmJlaXRlcjwvc3Ryb25nPjxicj48c3BhbiBjbGFzcz0ib3JhbmdlLWFycm93IG1vcmUiPmltIEJheWVyLUludHJhbmV0PC9zcGFuPjwvYT48L2Rpdj4=',hf_en='PGRpdiBjbGFzcz0iaGRyZGZpZnR5YngiIHN0eWxlPSIiPjxhIGhyZWY9Imh0dHA6Ly9pbnRyYW5ldC5jbmIvZGIvdWsvSG9sZGluZ1BvcnRhbC5uc2YvaWQvRU5fMTUwX1llYXJzIiBjbGFzcz0iIiBzdHlsZT0iIj48c3Ryb25nPkVtcGxveWVlIEFjdGl2aXRpZXM8L3N0cm9uZz48YnI+PHNwYW4gY2xhc3M9Im9yYW5nZS1hcnJvdyBtb3JlIj5vbiB0aGUgQmF5ZXIgSW50cmFuZXQ8L3NwYW4+PC9hPjwvZGl2Pg==';
        if (celDay) {
hf_de='PGRpdiBjbGFzcz0iaGRyZGZpZnR5YnggZ3JlZW4iPjxhIGhyZWY9IiNwaG90b3MiPjxzdHJvbmc+QWt0aW9uZW4gZvxyIE1pdGFyYmVpdGVyPC9zdHJvbmc+PGJyPjxzcGFuIGNsYXNzPSJncmVlbi1hcnJvdyBtb3JlIj5IaWVyIGZpbmRlbiBTaWUgSWhyZSBHcnVwcGVuZm90b3Mgdm9tIENlbGVicmF0aW9uIERheSB6dW0gRG93bmxvYWQ8L3NwYW4+PC9hPjwvZGl2Pg==';hf_en='PGRpdiBjbGFzcz0iaGRyZGZpZnR5YnggZ3JlZW4iPjxhIGhyZWY9IiNwaG90b3MiPjxzdHJvbmc+QWN0aXZpdGllcyBmb3IgQmF5ZXIgZW1wbG95ZWVzPC9zdHJvbmc+PGJyPjxzcGFuIGNsYXNzPSJncmVlbi1hcnJvdyBtb3JlIj5Eb3dubG9hZCB5b3VyIENlbGVicmF0aW9uIERheSBwaG90b3M8L3NwYW4+PC9hPjwvZGl2Pg==';
        }

	$.ajax({
		url: 'http://www.bayer.com/module/app-service.aspx',
		crossDomain:true,
		dataType: "script",
		success: function(){
			if (checked=='true'){(lang == 'de')?$('.lfthndnavi').after(decodeBase64(hf_de)):$('.lfthndnavi').after(decodeBase64(hf_en));}
		}
	});
    }
});

function playwebvid(_part) {
  var fla='http://www.webvideo.bayer.com/downloads/'+_part+'.flv' ,ht5='http://www.webvideo.bayer.com/downloads/'+_part+'.mp4', 
  videowidth = $(".page").width() - 40;
  if(videowidth > 720){
    videowidth = 720;
  }
  var videoheight = videowidth/16 * 9 + 25;

  $('#modal h1').text('Video');
  $('#modal .modalbody').html('<div id="sfabl_vid"></div>');
  $('#modal').reveal({
    closed: function(){
      $(".modalbody").empty();
    }
  }); 

  jwplayer('sfabl_vid').setup({
    width: videowidth,
    height: videoheight ,
    'controlbar.position': 'bottom',
    'autostart': 'true',
    modes: [
      { type: "flash", src: "/swf/player.swf", config: {file: fla}},
      { type: "html5", config: { file: ht5 }},
      { type: "download" }
    ]
  });
}

$(window).bind("load", function() {
	$('#slider').find("img.lazy").each(function (i) {
		$(this).attr("src", $(this).data("original"));
	});
});

function tableOverflow(){
	$('table').each(function(){
		if ($('tr', this).outerWidth() > 460) {
			$(this).css('display','block');
		} else {
			$(this).css('display','table');
		}
	});
}

$(document).ready(function(){
	tableOverflow();
});

/*globalmeta*/
/* Bayer worldwide v1.0 */

/* jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 * https://github.com/jaubourg/jquery-jsonp
 * Copyright (c) 2012 Julian Aubourg - MIT License */
(function(f){function d(){}function v(F){c=[F]}function o(H,F,G){return H&&H.apply(F.context||F,G)}function n(F){return/\?/.test(F)?"&":"?"}var p="async",t="charset",r="",D="error",u="insertBefore",s="_jqjsp",A="on",g=A+"click",k=A+D,q=A+"load",y=A+"readystatechange",b="readyState",C="removeChild",j="<script>",z="success",B="timeout",e=window,a=f.Deferred,h=f("head")[0]||document.documentElement,x={},m=0,c,l={callback:s,url:location.href},w=e.opera,i=!!f("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;function E(K){K=f.extend({},l,K);var I=K.success,P=K.error,H=K.complete,Y=K.dataFilter,aa=K.callbackParameter,Q=K.callback,Z=K.cache,G=K.pageCache,J=K.charset,L=K.url,ac=K.data,S=K.timeout,O,W=0,U=d,R,N,F,ab,M,V;a&&a(function(ad){ad.done(I).fail(P);I=ad.resolve;P=ad.reject}).promise(K);K.abort=function(){!(W++)&&U()};if(o(K.beforeSend,K,[K])===!1||W){return K}L=L||r;ac=ac?((typeof ac)=="string"?ac:f.param(ac,K.traditional)):r;L+=ac?(n(L)+ac):r;aa&&(L+=n(L)+encodeURIComponent(aa)+"=?");!Z&&!G&&(L+=n(L)+"_"+(new Date()).getTime()+"=");L=L.replace(/=\?(&|$)/,"="+Q+"$1");function X(ad){if(!(W++)){U();G&&(x[L]={s:[ad]});Y&&(ad=Y.apply(K,[ad]));o(I,K,[ad,z,K]);o(H,K,[K,z])}}function T(ad){if(!(W++)){U();G&&ad!=B&&(x[L]=ad);o(P,K,[K,ad]);o(H,K,[K,ad])}}if(G&&(O=x[L])){O.s?X(O.s[0]):T(O)}else{e[Q]=v;ab=f(j)[0];ab.id=s+m++;if(J){ab[t]=J}w&&w.version()<11.6?((M=f(j)[0]).text="document.getElementById('"+ab.id+"')."+k+"()"):(ab[p]=p);if(i){ab.htmlFor=ab.id;ab.event=g}ab[q]=ab[k]=ab[y]=function(ad){if(!ab[b]||!/i/.test(ab[b])){try{ab[g]&&ab[g]()}catch(ae){}ad=c;c=0;ad?X(ad[0]):T(D)}};ab.src=L;U=function(ad){V&&clearTimeout(V);ab[y]=ab[q]=ab[k]=null;h[C](ab);M&&h[C](M)};h[u](ab,(F=h.firstChild));M&&h[u](M,F);V=S>0&&setTimeout(function(){T(B)},S)}return K}E.setup=function(F){f.extend(l,F)};f.jsonp=E})(jQuery);


$(document).ready( function() {
  /*GLOBAL LANGUAGE DEFINITION*/
  var lang = jQuery("html").attr("lang");

	//Default Language, TODO: Ermittlung  [0=ger,1=eng]
	var gm_lang = (lang === 'de')?0:1,
		gm_label = {},
		gm_html_content = {},
		gm_url = {};
  
	gm_label[0] = new Object;
	gm_label[1] = new Object;
	gm_html_content[0] = new Object;
	gm_html_content[1] = new Object;
	gm_url[0] = new Object;
	gm_url[1] = new Object;

	/*Lang <> Labels*/
	gm_label[0].all = 'Region: Alle'; 
	gm_label[1].all = 'Region: All';
	gm_label[0].all_country = 'Land: Alle'; 
	gm_label[1].all_country = 'Country: All';
	gm_label[0].all_org = 'Organisation: Alle'; 
	gm_label[1].all_org = 'Organization: All';
	gm_label[0].all_topic = 'Thema: Alle'; 
	gm_label[1].all_topic = 'Topic: All';
	gm_label[0].all_prod = 'Produkt: Alle'; 
	gm_label[1].all_prod = 'Product: All';
	
	/*Lang <> Url*/
	gm_url[0].org = 'http://www.bayer.de/module/json/contactsjson/rest/lang_de';
	gm_url[1].org = 'http://www.bayer.com/module/json/contactsjson/rest/lang_en';
	gm_url[0].wsearch = 'http://www.bayer.de/module/json/websitesearchform/rest/lang_de/';
	gm_url[1].wsearch = 'http://www.bayer.com/module/json/websitesearchform/rest/lang_en/'; 
	gm_url[0].wresult = 'http://www.bayer.de/module/json/websitesearchresult/rest/lang_de/';
	gm_url[1].wresult = 'http://www.bayer.com/module/json/websitesearchresult/rest/lang_en/';
	gm_url[0].images = (window.location.protocol == 'https:') ? 'getSource.aspx?url='+encodeURIComponent('http://www.bayer.de/img/meta/') : 'http://www.bayer.de/img/meta/';
	gm_url[1].images = (window.location.protocol == 'https:') ? 'getSource.aspx?url='+encodeURIComponent('http://www.bayer.com/img/meta/') : 'http://www.bayer.com/img/meta/';
	
	/* Bayer worldwide - ROOT*/
	gm_html_content[0].worldwide = '<div id="worldwide" class="loadedhtml"><ul class="nobulls"><li><strong>Bayer Weltweit:</strong></li><li><a class="showpanel sp01" href="#">Organisation</a></li><li><a class="showpanel sp02" href="#">Standorte</a></li><li><a class="showpanel sp03" href="#">Websites</a></li><li class="last fastsearch input-append"><label for="searchfield">Suche</label><input type="hidden" name="chkGerman" value="Deutsch" id="chkGermanHidden2"><input type="hidden" value="" name="m2"><input type="search" placeholder="Geben Sie einen Suchbegriff ein" name="suchfeld2" id="searchfield" autocomplete="off" /><button type="button" class="btn searchbtn">Go</button></li></ul></div>';
	gm_html_content[1].worldwide = '<div id="worldwide" class="loadedhtml"><ul class="nobulls"><li><strong>Bayer worldwide:</strong></li><li><a class="showpanel sp01" href="#">Organization</a></li><li><a class="showpanel sp02" href="#">Locations</a></li><li><a class="showpanel sp03" href="#">Websites</a></li><li class="last fastsearch input-append"><label for="searchfield">Search</label><input type="hidden" name="chkGerman" value="Deutsch" id="chkGermanHidden2"><input type="hidden" value="" name="m2"><input type="search" placeholder="Enter your search term" name="suchfeld2" id="searchfield" autocomplete="off" /><button type="button" class="btn searchbtn">Go</button></li></ul></div>';

	/* Bayer worldwide -PANEL 1*/
	gm_html_content[0].panel1 = '<div class="line"><div class="unit size3metarows"><div class="line"><div class="unit size1of3"><h2>Bayer HealthCare</h2><div class="img"><a href="http://www.healthcare.bayer.de"><img src="'+gm_url[0].images+'ph.png" width="235" height="80" data-original="'+gm_url[0].images+'bhc.jpg" alt="" class="lazy" /></a></div><p>Bayer HealthCare gehört zu den weltweit führenden innovativen Unternehmen in der Gesundheitsversorgung mit Arzneimitteln und medizinischen Produkten.</p><p class="lnk pht"><a href="http://www.healthcare.bayer.de">Bayer HealthCare Website</a></p></div><div class="unit size1of3"><h2>Bayer CropScience</h2><div class="img"><a href="http://www.cropscience.bayer.com"><img src="'+gm_url[0].images+'ph.png" width="235" height="80" data-original="'+gm_url[0].images+'bcs.jpg" alt="" class="lazy" /></a></div><p>Bayer CropScience zählt zu den weltweit führenden Crop-Science-Unternehmen im Bereich Saatgut, Pflanzenschutz und Schädlingsbekämpfung.</p><p class="lnk pht"><a href="http://www.cropscience.bayer.com">Bayer CropScience Website</a></p></div><div class="unit size1of3 lastUnit"><h2>Bayer MaterialScience</h2><div class="img"><a href="http://www.materialscience.bayer.com/de.aspx"><img src="'+gm_url[0].images+'ph.png" width="235" height="80" data-original="'+gm_url[0].images+'bms.jpg" alt="" class="lazy" /></a></div><p>Bayer MaterialScience ist ein führender Hersteller von hochwertigen Werkstoffen wie Polyurethane, Polycarbonate, Lacke, Beschichtungen, Kleb- und Dichtstoffe.</p><p class="lnk pht"><a href="http://www.materialscience.bayer.com/de.aspx">Bayer MaterialScience Website</a></p></div></div><hr class="seperator"><div class="line"><div class="unit size1of3"><h2>Bayer Business Services</h2><p>Bayer Business Services ist das globale Kompetenz-Zentrum des Bayer-Konzerns für IT- und Business Services.</p><p class="lnk pht"><a href="http://business-services.bayer.de">Bayer Business Services Website</a></p></div><div class="unit size1of3"><h2>Bayer Technology Services</h2><p>Bayer Technology Services ist das technologische Rückgrat und ein wichtiger Innovationsmotor des Bayer-Konzerns.</p><p class="lnk pht"><a href="http://www.bayertechnology.com">Bayer Technology Services Website</a></p></div><div class="unit size1of3 lastUnit"><h2>Currenta</h2><p>Currenta betreibt als mehrheitlich zur Bayer AG gehörende Servicegesellschaft den Chempark an drei Standorten.</p><p class="lnk pht"><a href="http://www.currenta.de">Currenta Website</a></p></div></div></div><div class="unit size-vl"><div style="height:322px; border-left:1px solid #dcdcdc; margin:0 10px 0 9px;"></div></div><div class="unit size-col-a panelmargi lastUnit"><h1 class="h5">Links</h1><p class="lnk pht"><a href="http://www.bayer.de/organisationsstruktur" target="_blank">Organigramm (PDF, 160&nbsp;KB)</a><br /><a href="http://www.bayer.de/de/vorstand.aspx">Vorstand</a><br /><a href="http://www.bayer.de/de/mitglieder.aspx">Aufsichtsrat</a><br /><a href="http://www.bayer.de/de/profil-und-organisation.aspx">Profil und Organisation</a></p></div></div>';
	gm_html_content[1].panel1 = '<div class="line"><div class="unit size3metarows"><div class="line"><div class="unit size1of3"><h2>Bayer HealthCare</h2><div class="img"><a href="http://healthcare.bayer.com"><img src="'+gm_url[1].images+'ph.png" width="235" height="80" data-original="'+gm_url[1].images+'bhc.jpg" alt="" class="lazy" /></a></div><p>Bayer HealthCare is among the world’s foremost innovators in the field of medical care with pharmaceutical and medical products.</p><p class="lnk pht"><a href="http://www.healthcare.bayer.com">Bayer HealthCare Website</a></p></div><div class="unit size1of3"><h2>Bayer CropScience</h2><div class="img"><a href="http://www.cropscience.bayer.com"><img src="'+gm_url[1].images+'ph.png" width="235" height="80" data-original="'+gm_url[1].images+'bcs.jpg" alt="" class="lazy" /></a></div><p>Bayer CropScience holds global leadership positions in the areas of seeds, crop protection and non-agricultural pest control.</p><p class="lnk pht"><a href="http://www.cropscience.bayer.com">Bayer CropScience Website</a></p></div><div class="unit size1of3 lastUnit"><h2>Bayer MaterialScience</h2><div class="img"><a href="http://www.materialscience.bayer.com/en.aspx"><img src="'+gm_url[1].images+'ph.png" width="235" height="80" data-original="'+gm_url[1].images+'bms.jpg" alt="" class="lazy" /></a></div><p>Bayer MaterialScience is a renowned supplier of high-performance materials such as polycarbonates, polyurethanes and coatings, adhesives and specialties.</p><p class="lnk pht"><a href="http://www.materialscience.bayer.com/en.aspx">Bayer MaterialScience Website</a></p></div></div><hr class="seperator"><div class="line"><div class="unit size1of3"><h2>Bayer Business Services</h2><p>Bayer Business Services is the Bayer Group’s global competence center for IT and business services.</p><p class="lnk pht"><a href="http://business-services.bayer.com">Bayer Business Services Website</a></p></div><div class="unit size1of3"><h2>Bayer Technology Services</h2><p>Bayer Technology Services is the global technological backbone and a major innovation driver of the Bayer Group.</p><p class="lnk pht"><a href="http://www.bayertechnology.com">Bayer Technology Services Website</a></p></div><div class="unit size1of3 lastUnit"><h2>Currenta</h2><p>The service company Currenta, in which Bayer AG owns a majority stake, is the manager and operator of Chempark.</p><p class="lnk pht"><a href="http://www.currenta.com">Currenta Website</a></p></div></div></div><div class="unit size-vl"><div style="height:322px; border-left:1px solid #dcdcdc; margin:0 10px 0 9px;"></div></div><div class="unit size-col-a panelmargi lastUnit"><h1 class="h5">Links</h1><p class="lnk pht"><a href="http://www.bayer.com/organizational-structure" target="_blank">Organization chart (PDF, 160&nbsp;KB)</a><br /><a href="http://www.bayer.com/en/board-of-management.aspx">Board of Management</a><br /><a href="http://www.bayer.com/en/members.aspx">Supervisory Board</a><br /><a href="http://www.bayer.com/en/profile-and-organization.aspx">Profile and Organization</a></p></div></div>';
	gm_html_content[0].panel2 = '<div style="position: absolute; z-index: 2; width: 966px; height: 330px;" class="preloader"></div><div class="unit size-col-a"><h2>Wählen Sie ein Land:</h2><hr><div class="media"><div class="scrollbox scroll-pane" ><!-- LIST START--><ul class="nobulls lnk" data-bind="foreach: countrys"><li><a data-bind="text: country, attr:{ rel: $index, href: \'#\'}, click: $root.viewit"></a><ul data-bind="foreach:subs"><li><a href="#"data-bind="text:title , click: $root.viewit2" ></a></li></ul></li></ul><!-- LIST STOP --></div></div></div><!-- MAP START --><div class="unit size575 world"><div class="scrollbox2 scroll-pane" data-bind="template: {name: \'jsonCountrys\', foreach: $root.subsDetails  }" ></div> </div><!-- MAP STOP --><!-- RIGHT START --><div class="unit size-vl"><div style="height:322px; border-left:1px solid #dcdcdc; margin:0 10px 0 9px;"></div></div><div class="unit size-col-a panelmargi lastUnit"><h1 class="h5" data-bind="text: $root.globalContact().headline"></h1><p><strong class="tel" >+49 214 30-1</strong><br><span data-bind="text: $root.globalContact().name"></span><br><span data-bind="text: $root.globalContact().address1"></span>,<span data-bind="text: $root.globalContact().country"></span><br><a data-bind="attr: {href:$root.globalContact().email}">E-Mail</a></p><div class="spacer"></div><h1 class="h5" data-bind="text: $root.investorContact()"></h1><ul class="nobulls pht lnk" data-bind="foreach: $root.investorContacts"><li><a data-bind="text: label, attr:{ rel: $index, href: value}"></a></li></ul><ul class="nobulls pht lnk" data-bind="foreach: $root.pressContacts"><li><a data-bind="text: label, attr:{ rel: $index, href: value}"></a></li></ul><!-- <select data-bind="options:$root.investorContacts,optionsText:\'label\',optionsValue:\'value\',optionsCaption:\'Please select\'"></select><div class="spacer"></div><h1 class="h5" data-bind="text: $root.pressContact()"></h1><ul class="nobulls pht lnk" data-bind="foreach: $root.pressContacts"><li><a data-bind="text: label, attr:{ rel: $index, href: value}"></a></li></ul>--><!-- <select data-bind="options:$root.pressContacts,optionsText:\'label\',optionsCaption:\'Please select\'"></select> --><div class="spacer"></div></div><!-- RIGHT STOP -->';
	gm_html_content[1].panel2 = '<div style="position: absolute; z-index: 2; width: 966px; height: 330px;" class="preloader"></div><div class="unit size-col-a"><h2>Select a country:</h2><hr><div class="media"><div class="scrollbox scroll-pane" ><!-- LIST START--><ul class="nobulls lnk" data-bind="foreach: countrys"><li><a data-bind="text: country, attr:{ rel: $index, href: \'#\'}, click: $root.viewit"></a><ul data-bind="foreach:subs"><li><a href="#"data-bind="text:title , click: $root.viewit2" ></a></li></ul></li></ul><!-- LIST STOP --></div></div></div><!-- MAP START --><div class="unit size575 world"><div class="scrollbox2 scroll-pane" data-bind="template: {name: \'jsonCountrys\', foreach: $root.subsDetails  }" ></div> </div><!-- MAP STOP --><!-- RIGHT START --><div class="unit size-vl"><div style="height:322px; border-left:1px solid #dcdcdc; margin:0 10px 0 9px;"></div></div><div class="unit size-col-a panelmargi lastUnit"><h1 class="h5" data-bind="text: $root.globalContact().headline"></h1><p><strong class="tel" >+49 214 30-1</span></strong><br><span data-bind="text: $root.globalContact().name"></span><br><span data-bind="text: $root.globalContact().address1"></span>,<span data-bind="text: $root.globalContact().country"></span><br><a data-bind="attr: {href:$root.globalContact().email}">E-mail</a></p><div class="spacer"></div><h1 class="h5" data-bind="text: $root.investorContact()"></h1><ul class="nobulls pht lnk" data-bind="foreach: $root.investorContacts"><li><a data-bind="text: label, attr:{ rel: $index, href: value}"></a></li></ul><ul class="nobulls pht lnk" data-bind="foreach: $root.pressContacts"><li><a data-bind="text: label, attr:{ rel: $index, href: value}"></a></li></ul><!-- <select data-bind="options:$root.investorContacts,optionsText:\'label\',optionsCaption:\'Please select\'"></select><div class="spacer"></div><h1 class="h5" data-bind="text: $root.pressContact()"></h1><ul class="nobulls pht lnk" data-bind="foreach: $root.pressContacts"><li><a data-bind="text: label, attr:{ rel: $index, href: value}"></a></li></ul>--><!-- <select data-bind="options:$root.pressContacts,optionsText:\'label\',optionsCaption:\'Please select\'"></select> --><div class="spacer"></div></div><!-- RIGHT STOP -->';
	gm_html_content[0].panel3 = '<div style="position: absolute; z-index: 2; width: 966px; height: 410px;" class="preloader"></div><h2>Suchen Sie nach Bayer Websites weltweit</h2><hr><div class="line"><div class="unit size-col-a"><label>Region</label><select data-bind="event: { change: changed }, options: availableRegions, optionsText:\'name\', value: selectedRegion, optionsValue:\'id\', optionsCaption:regionsCount()"></select><div class="spacer-ten"></div><label>Country</label><select data-bind="event: { change: changed },options: availableCountrysFiltered, optionsText:\'name\', value: selectedCountry, optionsValue:\'id\', optionsCaption:countrysCount()"></select><div class="spacer-ten"></div></div><div class="unit size-col-a"><label>Organization</label><select data-bind="event: { change: changed },options: availableOrganizations, optionsText:\'name\', value: selectedOrganization, optionsValue:\'id\', optionsCaption:organizationsCount()"></select><div class="spacer-ten"></div><label class="right">Product websites</label><select data-bind="event: { change: changed },options: availableProductsFiltered, optionsText:\'name\', value: selectedProduct, optionsValue:\'id\', optionsCaption:productsCount()"></select><div class="spacer-ten"></div></div><div class="unit size-col-a"><label class="right">Topic &amp; field of activity</label><select data-bind="event: { change: changed },options: availableTopicsFiltered, optionsText:\'name\', value: selectedTopic, optionsValue:\'id\', optionsCaption:topicsCount()"></select><div class="spacer-ten"></div><label>Search</label><form data-bind="submit: siteSearch"><input class="nocomplete" data-bind="value: searchText, watermark: \'Ihr Suchbegriff\', valueUpdate: \'afterkeydown\'" /><!-- button class="btn submit" type="submit">Search</button --></form><div class="spacer-ten"></div></div><div style="width:108px;" class="unit"><button class="btn submit" data-bind="click: siteSearch">Suche</button></div><div class="unit size1of5 lastUnit"><div class="p">Hinweis: Alle Kategorien sind miteinander verknüpft, damit Sie mindestens ein Ergebnis für Ihre Suchanfrage erhalten. Eine Ausnahme bildet die Freitextsuche.</div></div></div><div class="spacer"></div><div class="spacer"></div><!-- Results Start --><div class="line"><h2>Suchergebnis: <span class="green" data-bind="text: websiteCount"></span><span class="green">&nbsp;Website(s) gefunden</span><!-- indicator Start--><span class="loading counter">&nbsp;</span><span class="loading resultcounter">&nbsp;</span><!-- indicator Stop --></h2><hr><!-- Results Stop --><div class="media"><div class="loading results">&nbsp;</div><div class="scroll-pane" style="height:215px;" data-bind="template: {name: \'searchResultsItem\', foreach: searchResults}"></div><!-- Results Stop --><div class="spacer-ten"></div><hr></div></div>';
	gm_html_content[1].panel3 = '<div style="position: absolute; z-index: 2; width: 966px; height: 410px;" class="preloader"></div><h2>Search for Bayer Websites worldwide</h2><hr><div class="line"><div class="unit size-col-a"><label>Region</label><select data-bind="event: { change: changed }, options: availableRegions, optionsText:\'name\', value: selectedRegion, optionsValue:\'id\', optionsCaption:regionsCount()"></select><div class="spacer-ten"></div><label>Country</label><select data-bind="event: { change: changed },options: availableCountrysFiltered, optionsText:\'name\', value: selectedCountry, optionsValue:\'id\', optionsCaption:countrysCount()"></select><div class="spacer-ten"></div></div><div class="unit size-col-a"><label>Organization</label><select data-bind="event: { change: changed },options: availableOrganizations, optionsText:\'name\', value: selectedOrganization, optionsValue:\'id\', optionsCaption:organizationsCount()"></select><div class="spacer-ten"></div><label class="right">Product websites</label><select data-bind="event: { change: changed },options: availableProductsFiltered, optionsText:\'name\', value: selectedProduct, optionsValue:\'id\', optionsCaption:productsCount()"></select><div class="spacer-ten"></div></div><div class="unit size-col-a"><label class="right">Topic &amp; field of activity</label><select data-bind="event: { change: changed },options: availableTopicsFiltered, optionsText:\'name\', value: selectedTopic, optionsValue:\'id\', optionsCaption:topicsCount()"></select><div class="spacer-ten"></div><label>Search</label><form data-bind="submit: siteSearch"><input class="nocomplete" data-bind="value: searchText, watermark: \'Enter your search term\', valueUpdate: \'afterkeydown\'" /><!-- button class="btn submit" type="submit">Search</button --></form><div class="spacer-ten"></div></div><div style="width:108px;" class="unit"><button class="btn submit" data-bind="click: siteSearch">Search</button></div><div class="unit size1of5 lastUnit"><div class="p">Note: all the categories are linked so you will get at least one hit for any query. This does not apply to the free-text search function.</div></div></div><div class="spacer"></div><div class="spacer"></div><!-- Results Start --><div class="line"><h2>Search result: <span class="green" data-bind="text: websiteCount"></span><span class="green">&nbsp;website(s) found</span><!-- indicator Start--><span class="loading counter">&nbsp;</span><span class="loading resultcounter">&nbsp;</span><!-- indicator Stop --></h2><hr><!-- Results Stop --><div class="media"><div class="loading results">&nbsp;</div><div class="scroll-pane" style="height:215px;" data-bind="template: {name: \'searchResultsItem\', foreach: searchResults}"></div><!-- Results Stop --><div class="spacer-ten"></div><hr></div></div>';
	gm_html_content[0].panel = '<div class="panel" style="display:none;"><a class="closepaneltop" href="#" style="background-position:60px -1648px">schließen</a><a class="closepanel" href="#">schließen</a><span class="panelbottom"></span></div>';
	gm_html_content[1].panel = '<div class="panel" style="display:none;"><a class="closepaneltop" href="#">close</a><a class="closepanel" href="#">close</a><span class="panelbottom"></span></div>';

	/*Knockout*/
	var viewTemplates = {
		templates: {
			jsonCountrys: '<div class="line" data-bind="visible: $index() == 0"><div class="unit size1of1" ><h2 data-bind="text: $root.currentCountry.countryname"></h2></div><hr></div><div class="line" data-bind="foreach: $data"><div class="unit size1of2"><h3 data-bind="text: company"></h3><p><span data-bind="html: company2 +\'<br>\', visible: company2"></span><span data-bind="html: address1 +\'<br>\', visible: address1.length>0"></span><span data-bind="html: address2 +\'<br>\', visible: address2.length>0"></span><span data-bind="html: address3 +\'<br>\', visible: address3.length>0"></span><span data-bind="html: address4 +\'<br>\', visible: address4.length>0"></span><span data-bind="html: country +\'<br>\', visible: country.length>0"></span><span data-bind="html: phone +\'<br>\', visible: phone.length>0"></span><span data-bind="html: fax +\'<br>\', visible: fax.length>0"></span><a data-bind="text: link, visible: link.length>0, attr:{href:link}"></a></p></div></div><div class="spacer"></div>',
			searchResultsItem:'<div class="article"><div class="lnk line"><span class="unit size1of4"><a data-bind="attr: {href: url}"><strong data-bind="text: name+\'&nbsp;\'"></strong></a></span><span class="unit size1of4" data-bind="text: organization"></span><span class="unit size1of2 lastUnit" data-bind="template: {name: \'languagesList\', foreach: languages}"></span></div><div style="width:765px; padding:5px 0 5px 7px;" data-bind="text: description"></div></div>',
			languagesList:'<span data-bind="visible: $index() > 0, text:\', \'"></span><span data-bind="text: $data"></span>'
		}
	};
  
	/*Bayer worldwide Navigation JS*/

	/*add new dom node*/
	$('[role="navigation"]').after(gm_html_content[gm_lang].worldwide);
	var gm_panelheight = '380px',gm_lastActivePanel='';
        activateSearch();
	
	/*Show Global Navigation - Start*/
	$('.showpanel').click(function() {

		/*avoid clicks during animation*/
		//if ( $(this).hasClass('disabled')) {return '';}
		/*$(this).addClass('disabled');*/

		/*add dom node if not exist*/
		if ($('.panel').length<1) {
			$('div.page, #videochannel_2515 > #wrapper, #videochannel_2371 > #wrapper').append(gm_html_content[gm_lang].panel);
			ko.setTemplateEngine(createStringTemplateEngine(new ko.nativeTemplateEngine(), viewTemplates.templates));
		}

		$('#worldwide ul li').each(function(){$(this).removeClass('hover')});
		$(this).parent('li').addClass('hover');

		var clicked = $(this).attr('class').split(' ')[1]

		/*show panel*/
		if ($("div.panel").is(":hidden")){
			$("div.panel").css({height: 0, display:"block"});//.animate({height: gm_panelheight}, 'slow',function(){/*$(this).removeClass('disabled');*/} );
		}	
		/*Panel 1-3*/
		switch(clicked) {
		  case 'sp01': 

						/*add dom node if not exist*/
						if ($('.p01').length<1) {$('.panel').append('<div class="p01" style="display:block;">'+gm_html_content[gm_lang].panel1+'</div>');}
						gm_panelheight = '420px';
						
						$('.p01').css({'display':'block'});
						$('.p02,.p03').css({'display':'none'});
						$(".panel img.lazy").each(function (i) {
							$(this).attr("src", $(this).data("original"));
						});
						$("div.panel").animate({height: gm_panelheight}, "slow" );
						
			break;
		  case 'sp02':

						/*add dom node if not exist*/
						if ($('.p02').length<1) {
							$('.panel').append('<div class="p02" style="display:none;">'+gm_html_content[gm_lang].panel2+'</div>');
							
							/*TODO: getElementsByClassName Probleme IE beseitigen (keine Probleme auf DEV Seite)*/
							ko.applyBindings(new LocationListViewModel(),getElementsByClassName('p02')[0]);
						}
						gm_panelheight = '380px';

						$('.p02').css({'display':'block'});
						$('.p01,.p03').css({'display':'none'});
						$("div.panel").animate({height: gm_panelheight}, "slow" );
			break;
		  case 'sp03': 

						/*add dom node if not exist*/
						if ($('.p03').length<1) {
							$('.panel').append('<div class="p03" style="display:none;">'+gm_html_content[gm_lang].panel3+'</div>');
							ko.applyBindings(SitesListModel(),getElementsByClassName('p03')[0]);
						}
						gm_panelheight = '470px';

						$('.p03').css({'display':'block'});
						$('.p01,.p02').css({'display':'none'});
						$('.loading.counter, .loading.resultcounter').css({'display':'none','height':'16px','margin-left':'10px','position':'absolute','width':'16px'});
						$('.loading.results').css({'display':'none','height':'215px','position':'absolute', 'width':'100%'});
						$("div.panel").animate({height: gm_panelheight}, "slow" );
			break;
		  default:  
						gm_panelheight = "380px";			
		}


		/*hide panel*/
		if (clicked === gm_lastActivePanel) {
			//$("div.panel").animate({height: gm_panelheight}, "slow" );
			$("div.panel").slideUp("slow", function(){$(".panel > div").hide(); });
			$(".showpanel").parent("li").removeClass("hover");
			gm_lastActivePanel = '';
		} else {
			/*status*/
			gm_lastActivePanel=clicked;	
		}

		/*enable clicks*/
		//$(this).removeClass('disabled');	

		/*close panel*/
		$("a.closepanel, a.closepaneltop").click(function(e) {
			e.preventDefault();
			$("div.panel").slideUp("slow");
			$(".showpanel").parent("li").removeClass("hover");
			gm_lastActivePanel = '';
		});
 $('html').click(function() {
    $("a.closepanel").trigger("click");
    if($("div.panel").is(':visible')){
      $('.panel, #worldwide, html').off('click');
    }
 });

 $('.panel, #worldwide').click(function(event){
     event.stopPropagation();
 });

	});
	/*Show Global Navigation - Stop*/
  
	/*Knockout -> Locations*/
	function LocationListViewModel() {
		var self = this;
		self.selected = ko.observable(0);
		self.countrys = ko.observableArray([]);
		self.detailLength = ko.observable(0);
		self.currentCountry = ko.observable({countryname:''});
		self.currentLocationDetails = ko.observableArray([]);
		self.subsDetails = ko.observableArray([]);
		self.template = ko.observable('jsonCountryS');
		self.globalContact = ko.observable({});
		self.investorContact = ko.observable('');
		self.investorContacts =	ko.observableArray([]);
		self.pressContact = ko.observable('');
		self.pressContacts = ko.observableArray([]);

		self.viewit = function(item) {
			self.currentCountry = { countryname: this.country()};
			self.subsDetails(buildSubsArray(this.details()));
			self.selected(this);
			$('.locplaceholder').remove();
		}
		
		self.viewit2 = function(item) {
			ko.toJSON(this);
			if (typeof(this.details) === 'function') {
				if (typeof(this.details()) != 'undefined') {
					self.detailLength = this.details().length;
				} 
			}else {
				if (typeof(this.subdetails.length) != 'undefined') {
					self.detailLength = this.subdetails.length;
				}
			}
			
			if (typeof(this.country) === 'function') {
				self.currentCountry = { countryname: this.country()};
			} else {
				self.currentCountry = { countryname: this.country +' - '+ this.title};
				self.currentLocationDetails([]);
				self.subsDetails(this.subsdetails);
			}

			self.selected(this);
			$('.locplaceholder').remove();
		}	

		self.setItem = function(item) { }

		self.getData = function() {

                        var _url = (window.location.host == 'secure.bayer.com') ? 'getSource.aspx?url='+encodeURIComponent(gm_url[gm_lang].org+'/callback_cb.aspx') : gm_url[gm_lang].org+'/callback_cb.aspx';

			$.jsonp({
				url:_url,//gm_url[gm_lang].org+'/callback_cb.aspx',		
				dataType: 'jsonp',
				callback: 'cb',
				cache:true,
				success:function(json) {
					var mappedCountrys = $.map(json.countrys, function(item) { return new Location(item,item.subs) });
					self.countrys(mappedCountrys);
					self.globalContact(json.globalcontact);
					self.investorContact(json.investorcontact.headline)
					self.investorContacts(json.investorcontact.contacts)
					self.pressContact(json.presscontact.headline)
					self.pressContacts(json.presscontact.contacts)
			$('.preloader').remove();

				}
			}); 	
		}

		self.getData();
		self.selected(this);
	}
  
	/*Knockout -> Websitesearch*/
	var RegionModel = function(item) {
		this.regionid = item.id.toString();
		this.regionname = item.name.toString();
	}

	var SitesListModel = function() {
		var self = this,
			queryParams='',
			reqUrl,
			reqUrlSite,
			lastSelRegion=[];		
		
		//selected	
		self.regions  = [];
		self.searchText = ko.observable();
		self.websiteCount = ko.observable();
		self.websiteCountSiteSearch = ko.observable();
		self.selectedRegion = ko.observable();
		self.selectedCountry = ko.observable();
		self.selectedOrganization = ko.observable();
		self.selectedTopic = ko.observable();
		self.selectedProduct = ko.observable();	
		self.searchResults = ko.observableArray([]);
		self.searchText("");
		
		//functions	
		self.throttledValue = ko.computed(self.searchText).extend({ throttle: 400 });
		// Keep a log of the throttled values
		//self.loggedValues = ko.observableArray([]);
		self.throttledValue.subscribe(function (val) {
			//if (val !== '')
				getData(false);
				//this.loggedValues.push(val);
		}, self);

		self.buildQueryString = function(e,type) {
			if (e && typeof(e.id) != 'undefined') {
				return type+'_'+e.id+'/';
			}
				
			if (typeof(e) != 'undefined') {
				return type+'_'+escape(e)+'/';
			} else {
				return '';
			}
		}
		
		self.updateQueryString = ko.computed(function(){
			queryParams = self.buildQueryString(self.selectedRegion(),'intRegion');
			queryParams += self.buildQueryString(self.selectedCountry(),'intCountry');
			queryParams += self.buildQueryString(self.selectedOrganization(),'intOrganization');
			queryParams += self.buildQueryString(self.selectedTopic(),'intTopic');
			queryParams += self.buildQueryString(self.selectedProduct(),'intProduct');
			
			if (self.searchText().length > 0) {
				queryParams += self.buildQueryString(self.searchText(),'stringSearch');
			}
		});
		
		self.filterIt = function(item,filter) {
			if (item == 'countryasdf' && (typeof(filter) != 'undefined')) {
				self.availableRegions([{'id':1,'name':'test'}]);
			} else {
				self.availableRegions(self.regions);
			}
		}
		
		/*regions*/
		self.availableRegions = ko.observableArray([]);
		self.regionsCount = ko.computed(function() {
			if (typeof(self.availableRegions) != 'undefined') {
				return gm_label[gm_lang].all+' ('+ self.availableRegions().length+')';
			} else {
				return gm_label[gm_lang].all+' ('+ self.availableRegions().length+')';
			}
		});
		
		/*countrys*/
		self.availableCountrys = ko.observableArray([]);
		self.countrysCount = ko.computed(function() {
			if (typeof(self.availableCountrysFiltered) != 'undefined') {
				return gm_label[gm_lang].all_country +' ('+self.availableCountrysFiltered().length+')';
			} else {
				return gm_label[gm_lang].all_country+' ('+self.availableCountrys().length +')';
			}
		});
		self.availableCountrysFiltered = ko.computed(function() {
			return self.availableCountrys();
		});
		/*organizations*/
		self.availableOrganizations = ko.observableArray([]);
		self.organizationsCount = ko.computed(function() {
			if (typeof(self.availableOrganizationsFiltered) != 'undefined') {
				return gm_label[gm_lang].all_org+' ('+ self.availableOrganizationsFiltered().length+')';
			} else {
				return gm_label[gm_lang].all_org+' ('+ self.availableOrganizations().length+')';
			}
		});
		self.availableOrganizationsFiltered = ko.computed(function() {
			return self.availableOrganizations();
		});
		
		/*topics*/
		self.availableTopics = ko.observableArray([]);
		self.topicsCount = ko.computed(function() {
			if (typeof(self.availableTopicsFiltered) != 'undefined') {
				return gm_label[gm_lang].all_topic+' ('+ self.availableTopicsFiltered().length+')';
			} else {
				return gm_label[gm_lang].all_topic+' ('+ self.availableTopics().length+')';
			}
		});	
		self.availableTopicsFiltered = ko.computed(function() {
			return self.availableTopics();
		});	
		
		/*products*/
		self.availableProducts = ko.observableArray([]);
		self.productsCount = ko.computed(function() {
			if (typeof(self.availableProductsFiltered) != 'undefined') {
				return gm_label[gm_lang].all_prod+' ('+ self.availableProductsFiltered().length+')';
			} else {
				return gm_label[gm_lang].all_prod+' ('+ self.availableProducts().length+')';
			}
		});	
		self.availableProductsFiltered = ko.computed(function() {
			return self.availableProducts();
		});	
		
		/*filtered Items*/
		self.wasTrigger = true;
		self.changed = function(data,event){
			if (event.isTrigger) {
				self.wasTrigger = true;
			} else {
				self.wasTrigger = false;
			}
			
			if (typeof(event.isTrigger) == 'undefined') {
				self.wasTrigger = false;
			} else {
				self.wasTrigger = true;
			}
		};	
		
		/*Search Results*/		
		self.siteSearch = function() {
	
			reqUrlSite= gm_url[gm_lang].wresult+queryParams+'callback_cb.aspx'; 		
                        var _url = (window.location.host == 'secure.bayer.com') ? 'getSource.aspx?url='+encodeURIComponent(reqUrlSite) : reqUrlSite;

			/*loading indicator*/
			$('.loading.resultcounter, .loading.results').css({'display':'inline-block'});
			$.jsonp({
				url:_url,//reqUrlSite+'callback_cb.aspx', 		
				callback:'cb',
				cache:true,
				error: function(json) {
					b=[];
					self.websiteCountSiteSearch(0);
					self.searchResults(b);
					self.wasTrigger = true;
					$('.loading.resultcounter, .loading.results').css({'display':'none'});
				},
				success: function(json) {
					self.websiteCountSiteSearch(json.count);
					self.searchResults(json.results);
					self.wasTrigger = true;
					$('.loading.resultcounter, .loading.results').css({'display':'none'});
				}
			}); 	
		}
		
		/*Options Data*/ 
		self.getData = function(trigger) {
		
			if (trigger){
			  return '';		  
			}
			
			if (queryParams.length >0){ 
				reqUrl= gm_url[gm_lang].wsearch+queryParams+'callback_cb.aspx';
			} else {
				reqUrl = gm_url[gm_lang].wsearch+'callback_cb.aspx';
			}
			
                        var _url = (window.location.host == 'secure.bayer.com') ? 'getSource.aspx?url='+encodeURIComponent(reqUrl) : reqUrl;
			$('.loading.counter').css({'display':'inline-block'});
			self.wasTrigger = true;

			$.jsonp({
				url:_url,//reqUrl+'callback_cb.aspx', 		
				callback:'cb',
				cache:true,
				error: function() {
					b = [];
					self.availableRegions(b);
					self.regions = b;
					self.availableCountrys(b);
					self.availableOrganizations(b);
					self.availableTopics(b);
					self.availableProducts(b);
					self.selectedRegion(lastSelRegion);
					self.websiteCount(0);
					$('.loading.counter').css({'display':'none'});
                			$('.preloader').remove();
				},
				success: function(json) {
					self.availableRegions(json.region);
					self.regions = json.region;
					self.availableCountrys(json.country);
					self.availableOrganizations(json.organization);
					self.availableTopics(json.topic);
					self.availableProducts(json.product);
					self.selectedRegion(lastSelRegion);
					self.websiteCount(json.count);
					$('.loading.counter').css({'display':'none'});
                			$('.preloader').remove();
				}
			}); 		
		}

		/*change manually? fetch data (true:false)*/
		self.selectedRegion.subscribe(function(val){ 
			if (self.wasTrigger == false) {self.getData(false); self.siteSearch(); }
		});
		self.selectedCountry.subscribe(function(val){ 
			if (self.wasTrigger == false) {self.getData(false); self.siteSearch(); }
		});
		self.selectedOrganization.subscribe(function(val){ 
			if (self.wasTrigger == false) {self.getData(false); self.siteSearch(); }
		});
		self.selectedTopic.subscribe(function(val){ 
			if (self.wasTrigger == false) {self.getData(false); self.siteSearch(); }
		});
		self.selectedProduct.subscribe(function(val){ 
			if (self.wasTrigger == false) {self.getData(false); self.siteSearch(); }
		});
		
		self.getData(false);
	}  
  
});
/*DOM Ready - Stop*/
/*Meta Navigation Helper*/
/*Knockout Helper*/
function Location(data,subs) {
	this.country = ko.observable(data.country);
if (data.details[0].company =='Bayer Middle East Ltd.'){
  data.details[0].country = '';
}
	this.details = ko.observableArray(data.details);
	
	if (subs) {
		for (var i=0,j=subs.length; i<j;i++) {
			subs[i].country = data.country;
			subs[i].subsdetails = buildSubsArray(subs[i].subdetails)
		}
	}
	this.subs = ko.observableArray(subs);
}

function buildSubsArray(details) {
	var tempArray = [],
		itemsPerLine=2, 
		detailsCount = details.length
		oj = ((parseInt(detailsCount/itemsPerLine)) + (detailsCount%itemsPerLine)),
		mod = ((detailsCount%itemsPerLine) > 0) ? true:false,
		currentPosition = 0;

	for (var oi = 0; oi < oj; oi++) {
		var every2nd=[];
		for (var ii = 0; ii < itemsPerLine; ii++) {
			every2nd.push(details[currentPosition]);
			if ((oi+1) == oj && mod) {
				ii++;
			}
			currentPosition++; 
		}
		tempArray.push(every2nd)
	}

	return tempArray;
}

ko.bindingHandlers.watermark = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var defaultWatermark = ko.utils.unwrapObservable(value);
        var $element = $(element);
        
        setTimeout(function() {
            $element.val(defaultWatermark);}, 0);
        
        $element.focus(
            function () {
                if ($element.val() === defaultWatermark) {
                    $element.val("");
                }
            }).blur(function () {
                if ($element.val() === '') {
                    $element.val(defaultWatermark)
                }
            });
    }
};

/*Knockout Template Engine*/
ko.templateSources.stringTemplate = function(template, templates) {
	this.templateName = template;
	this.templates = templates;
}
ko.utils.extend(ko.templateSources.stringTemplate.prototype, {
	data: function(key, value) {
		this.templates._data = this.templates._data || {};
		this.templates._data[this.templateName] = this.templates._data[this.templateName] || {};
		
		if (arguments.length === 1) {
			return this.templates._data[this.templateName][key];
		}
		
		this.templates._data[this.templateName][key] = value;
	},
	text: function(value) {
		if (arguments.length === 0) {
		   return this.templates[this.templateName];
		} 
		this.templates[this.templateName] = value;   
	}
});

function createStringTemplateEngine(templateEngine, templates) {
	templateEngine.makeTemplateSource = function(template) {
		return new ko.templateSources.stringTemplate(template, templates);
	}   
	return templateEngine;
}

/* Standard Helper*/
if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    function str(key, holder) {

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

            return String(value);

        case 'object':

            if (!value) {
                return 'null';
            }

            gap += indent;
            partial = [];

            if (Object.prototype.toString.apply(value) === '[object Array]') {

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

            var i;
            gap = '';
            indent = '';

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

            } else if (typeof space === 'string') {
                indent = space;
            }

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

            return str('', {'': value});
        };
    }

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

            var j;

            function walk(holder, key) {

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                j = eval('(' + text + ')');

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

            throw new SyntaxError('JSON.parse');
        };
    }
}());

/*	Developed by Robert Nyman, http://www.robertnyman.com
	Code/licensing: http://code.google.com/p/getelementsbyclassname/
*/	
var getElementsByClassName = function (className, tag, elm){
	if (document.getElementsByClassName) {
		getElementsByClassName = function (className, tag, elm) {
			elm = elm || document;
			var elements = elm.getElementsByClassName(className),
				nodeName = (tag)? new RegExp("\\b" + tag + "\\b", "i") : null,
				returnElements = [],
				current;
			for(var i=0, il=elements.length; i<il; i+=1){
				current = elements[i];
				if(!nodeName || nodeName.test(current.nodeName)) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	else if (document.evaluate) {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = "",
				xhtmlNamespace = "http://www.w3.org/1999/xhtml",
				namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace)? xhtmlNamespace : null,
				returnElements = [],
				elements,
				node;
			for(var j=0, jl=classes.length; j<jl; j+=1){
				classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
			}
			try	{
				elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
			}
			catch (e) {
				elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
			}
			while ((node = elements.iterateNext())) {
				returnElements.push(node);
			}
			return returnElements;
		};
	}
	else {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = [],
				elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
				current,
				returnElements = [],
				match;
			for(var k=0, kl=classes.length; k<kl; k+=1){
				classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
			}
			for(var l=0, ll=elements.length; l<ll; l+=1){
				current = elements[l];
				match = false;
				for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
					match = classesToCheck[m].test(current.className);
					if (!match) {
						break;
					}
				}
				if (match) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	return getElementsByClassName(className, tag, elm);
};


function Google_ExtSearch()
{
    
	document.forms[0].action="google-search.aspx";
	document.forms[0].m2.value='ext';
	document.forms[0].__VIEWSTATE.value='';
	document.forms[0].submit();
} 


/*magazinapp*/
/**
 * Bayer Javascript Version 0.0.1
 * Configuration and App-Initializiation
 */
var BayerRules = (function() {

	var compatibleAgents = {
		firefox : { major :  3, minor : 6 },
		msie    : { major :  8, minor : 0 },
		chrome  : { major :  9, minor : 0 },
		safari  : { major :  4, minor : 0 },
		opera   : { major : 10, minor : 0 }
	};

	var rVersion = /(\d+)\.(\d+)/;
	
	// Erstmal die PC-Browser (Firefox, Opera, IE, Safari und Chrome)
	var rFirefox = /(firefox)/;
	var rOpera   = /(opera)/;
	var rIE      = /(msie)/;
	var rSafari  = /(safari)\//;
	var rChrome  = /(chrome)\//;
	
	// Render-/Layoutmaschinen:
	var rWebKit = /(webkit)/;
	var rGecko  = /(rv:).*(gecko\/)/;
	var rPresto = /(presto)\//;
	
	// Dann die Plattform: Android (Pad), iPad, sonstige
	var rAndroid = /(android)/;
	var rIPad    = /(ipad)/;
	
	var rFile = /^file:\/\//;	// Variante: Innerhalb der iApp auf "device"
	
	// Die Tests für Browser-Versionen:
	var rChromeVersion	= /chrome\/([\d\.]+)/;
	var rFirefoxVersion = /firefox\/([\d\.]+)/;
	var rIEVersion			= /msie\s([\d\.]+)/;
	var rOperaVersion		= /version\/([\d\.]+)/;
	var rSafariVersion	= /version\/([\d\.]+)/;
	
	// IE compat mode
	var rIE8compat	= /(trident\/4)/;
	var rIE9compat	= /(trident\/5)/;
	var rIEcompat		= /(trident)/;
    // Mac
    var rMac =/(mac)/;
	
	var userAgent = window.navigator.userAgent.toLowerCase();
	
	/**
	 * @deprecated
	 */
	var rawBrowser = function() {
			return /(\w+)\/(\d+\.\d+)$/.exec(userAgent);
	};
	
	var firefoxTest = function() { return rFirefox.test(userAgent); };
	var operaTest   = function() { return rOpera.test(userAgent); };
	var ieTest      = function() { return rIE.test(userAgent); };
	var safariTest  = function() { return rSafari.test(userAgent); };
	var chromeTest  = function() { return rChrome.test(userAgent); };
	var webkitTest  = function() { return rWebKit.test(userAgent); };
	var geckoTest   = function() { return rGecko.test(userAgent); };
	var prestoTest  = function() { return rPresto.test(userAgent); };
	var androidTest = function() { return rAndroid.test(userAgent); };
	var iPadTest    = function() { return rIPad.test(userAgent); };
	var onlineTest  = function() { return window.navigator.onLine; };
	var isLocalTest = function() { return rFile.test(document.baseURI); };
	var isMobileClientTest = function() { return isMobileClient(userAgent); };
	var isNotSupportedAndroidTest = function() { return isNotSupportedAndroid(userAgent); };
	
	var IE8compatTest = function() { return rIE8compat.test(userAgent); };
	var IE9compatTest = function() { return rIE9compat.test(userAgent); };
	var IEcompatTest = function() { return rIEcompat.test(userAgent); };

    var macTest = function() { return rMac.test(userAgent); };
	
	
	var orientationTest = function() {
		var w = $(window);
		
		return (w.width() > w.height()) ? "landscape" : "portrait";
	};
	
	/**
	 * This depends very detailed on the current UserAgent!
	 */
	var uaVersionTest = function() {
		if (firefoxTest()) {
			return rFirefoxVersion.exec(userAgent)[1];
		} else if (ieTest()) {
			return rIEVersion.exec(userAgent)[1];
		} else if (chromeTest()) {
			// before safari because is based on webkit
			return rChromeVersion.exec(userAgent)[1];
		} else if (operaTest()) {
			return rOperaVersion.exec(userAgent)[1];
		} else if (safariTest()) {
			return rSafariVersion.exec(userAgent)[1];
		} else {
			return false;
		}
	};

	var isCompatibleTest = function() {
		// nimm die Version, wenn vorhanden, dann schau im Compat-Objekt für den
		// richtigen Browser nach:
		var uaVersion = uaVersionTest();
		if (uaVersion) {
			var majorVersion = rVersion.exec(uaVersion)[1];
			var minorVersion = rVersion.exec(uaVersion)[2];
			var browserType = "na";
			
			// Vorsicht mit der Reihenfolge hier!
			if (firefoxTest()) {
				browserType = "firefox";
			} else if (ieTest()) {
				browserType = "msie";
			} else if (chromeTest()) {
				browserType = "chrome";
			} else if (operaTest()) {
				browserType = "opera";
			} else if (safariTest()) {
				browserType = "safari";
			} else {
				return false;	// early Exit!
			}
			
			return (compatibleAgents[browserType].major < majorVersion) ||
			(
					(compatibleAgents[browserType].major == majorVersion) &&
					(compatibleAgents[browserType].minor <= minorVersion)
			)
		}
	};
    
	var isScreensizeOkTest = function() {
		if(eval(screen.width) > 640 || eval(screen.height) > 580 ){
			return (eval(screen.width) > 640 || eval(screen.height) > 580);
		} else {
			return (eval(screen.width) > 640 || eval(screen.height) > 580);
		}
	};
	var isScreensizeOkTest2 = function() {
		if(eval(screen.width) >= 800){
			return (eval(screen.width) >= 800);
		} else {
			return (eval(screen.width) >= 800);
		}
	};
	var isResolutionOkTest = function() {
		var w = $(window);
		if (orientationTest() == "landscape") {
			return (w.width() > 975 && w.height() > 731);
		} else {
			return (w.width() > 731) && (w.height() > 975);
		}
	};
	var isMobileClient = function(userAgent) {
		var mobileClients=["midp","240x320","blackberry","netfront","nokia","panasonic","portalmmm", "sharp","sie-","sonyericsson","symbian","windows ce","benq","mda","mot-","opera mini","philips", "pocket pc","sagem","samsung","sda","sgh-","vodafone","xda","iphone","ipod","wap","windows ce","wm5 pie","iemobil","symbian","series60","series70","series80","series90","blackberry","midp","wml","brew","palm","xiino","blazer","pda","nitro","netfront","sonyericsson","ericsson","sec-sgh","docomo","kddi","vodafone"]; 
		try {
			var found = false;
			userAgent=userAgent.toLowerCase(); 
			for (var i=0; i < mobileClients.length; i++) {
				if (userAgent.indexOf(mobileClients[i]) != -1) {
					found = true;
					return true;
				} else {
					found = false;
				}
			}
			return found;
		} catch (e) {
			return false;
		} 
	};
	var isNotSupportedAndroid = function(userAgent) {
		var notSupportedAndroid=["Kindle Fire","Silk"]; 
		try {
			var found = false;
			userAgent=userAgent.toLowerCase(); 
			for (var i=0; i < notSupportedAndroid.length; i++) {
				if (userAgent.indexOf(notSupportedAndroid[i]) != -1) {
					found = true;
					return true;
				} else {
					found = false;
				}
			}
			return found;
		} catch (e) {
			return false;
		} 
	};
	var isIEcompatTest = function() {
		if($.browser.msie){
			$('body').addClass('browserIE' + $.browser.version.substring(0,1));
			if($.browser.version.substring(0,1) == 7){
				return IEcompatTest();
			}
		}
	};
    var isMacTest = function() {
                return macTest();
    };

	return {
		userAgent : function() { return userAgent; },
		isFirefox : function() { return firefoxTest(); },
		isOpera   : function() { return operaTest(); },
		isIE      : function() { return ieTest(); },
		isSafari  : function() { return safariTest(); },
		isChrome  : function() { return chromeTest(); },
		isWebKit  : function() { return webkitTest(); },
		isGecko   : function() { return geckoTest(); },
		isPresto  : function() { return prestoTest(); },
		isAndroid : function() { return androidTest(); },
		isIPad    : function() { return iPadTest(); },
		isMobile  : function() { return (androidTest() || iPadTest()) },
		hasOrientation : function() { return (("orientation" in window) && ("onorientationchange" in window)) },
		isLandscape    : function() { return orientationTest() == "landscape"; },
		isPortrait     : function() { return orientationTest() == "portrait"; },
		isOnline  : function() { return onlineTest(); },
		uaVersion : function() { return uaVersionTest(); },
		isLocal   : function() { return isLocalTest(); },
		isCompatible : function() { return isCompatibleTest(); },
		isResolutionOk : function() { return isResolutionOkTest(); },
		isScreensizeOk : function() { return isScreensizeOkTest(); },
		isScreensizeOk2 : function() { return isScreensizeOkTest2(); },
		isMobileClient : function() { return isMobileClientTest(); },
		isNotSupportedAndroid : function() { return isNotSupportedAndroidTest(); },
		isIEcompat : function() { return isIEcompatTest(); },
        isMac : function() { return isMacTest(); }
	};
})();

var debug = false;
/**
 * Definiere: var debug = true;
 * um dieses Debug zu aktivieren! (danach muss #debugmsgs gestylt/positioniert werden!)
 */
if (window.debug) {
	$(document).ready( function() {
		var logList = $('<ul id="debugmsgs"></ul>');
		$("body").append(logList);
	
		for (var ruleIndex in BayerRules) {
			var logMsg = $("<li>Rule #" +ruleIndex+ " ==> " +BayerRules[ruleIndex]()+ "</li>");
			logList.append(logMsg);
		}
	});
}


var showapp = querySt("showapp");
var checked = 'false';
var forapplang;
function querySt(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("&");
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1];
		}
	}
}

function isChecked(val) {
	checked = val;
}

$(document).ready(function(){
	forapplang = jQuery("html").attr("lang");													 
	if (BayerRules.isCompatible() == false && BayerRules.isIE() && BayerRules.isIEcompat() == false) {
		$("body").append('<script type="text/javascript" src="http://www.bayer.com/module/app-service.aspx"></script>');
	}
													 
	jQuery("a[href*='p-magazine.app.bayer.com']").click(function() {
		callApp(jQuery(this).attr("href"));
		return false;
	});

	jQuery("a[href*='www.magazin.app.bayer.de'], a[href*='www.magazine.app.bayer.com']").click(function() {
		callApp(jQuery(this).attr("href"));
		return false;
	});

	jQuery("a[href*='www.magazin.bayer.de']").click(function() {
		callApp(appurl_de);
		if($(this).hasClass("trackmagkv")){
			$("body").append('<img src="/img/track/clickkvhpmagazin.gif" style="display:none;" />');
		}
		return false;
	});
	
	jQuery("a[href*='www.magazine.bayer.com']").click(function() {
		callApp(appurl_en);
		if($(this).hasClass("trackmagkv")){
			$("body").append('<img src="/img/track/clickkvhpmagazin.gif" style="display:none;" />');
		}
		return false;
	});
	
  jQuery("a.ituneslnk").click(function() {
    $("body").append('<img src="/img/track/clickkvhpmagazinapp.gif" style="display:none;" />');
  });



	

});


	function callApp(appurl) {
		if (BayerRules.isIPad()) {
			//showAppMessage("istore");
					//showAppMessage("ipad");
			if(forapplang == 'de') {
					window.location.href = "http://itunes.apple.com/de/app/id480186733?mt=8&uo=4";
			} else {
					window.location.href = "http://itunes.apple.com/us/app/id480186733?mt=8&uo=4";
			}
		} else {
			if (BayerRules.isScreensizeOk() && BayerRules.isScreensizeOk2() && BayerRules.isMobileClient() == false) {
				if (BayerRules.isAndroid()) {
					/`*showAppMessage("marketplace");*/

if(BayerRules.isNotSupportedAndroid() == false){
					if(forapplang == 'de') {
						window.location.href = "https://market.android.com/details?id=de.bayer.magazinApp&hl=de";
					} else {
						window.location.href = "https://market.android.com/details?id=de.bayer.magazinApp&hl=en";
					}
} else {
							showAppMessage("incompatibletablet");
}

				} else {
					if (BayerRules.isCompatible()) {
						if (BayerRules.isResolutionOk()) {
							showApp(appurl);
						} else {
                            if (BayerRules.isMac()) {
                                showApp(appurl);

                            } else {
                                showApp(appurl);
                                showAppMessage("webappF11");
                            }

						}
					} else if (BayerRules.isCompatible() == false) {
						if (BayerRules.isIE() && BayerRules.isIEcompat()) {
							showAppMessage("compatmode");
						} else if (BayerRules.isIE() && checked == 'true') {
							alert(checked)
							showAppMessage("checked");
						} else {
							showAppMessage("updatebrowser");
						}
					} else if (BayerRules.uaVersion() == false) {
							showApp(appurl);
							showAppMessage("incompatible");
					}
				}
			} else if (BayerRules.isScreensizeOk2() == false && BayerRules.isMobileClient() == false) {
				if (BayerRules.uaVersion() == false) {
							showApp(appurl);
							showAppMessage("incompatibletoosmall");
				} else if (BayerRules.isAndroid()) {
				showAppMessage("nosmartphones");
				} else {
					showApp(appurl);
					showAppMessage("toosmall");
				}
			} else {
				showAppMessage("nosmartphones");
			}
		}
	}


	function showAppMessage(msg) {
		var appmsg;
		var appmsgclass = "appstandard";
	if(forapplang == 'de') {
		switch (msg) {
			case "webappF11":
				appmsg = "Drücken Sie F11, um das Bayer-Magazin im Vollbild&shy;modus zu erleben.</p><p class='txtsmll'>Über ein erneutes Drücken von F11 können Sie den Vollbildmodus wieder deaktivieren.";
				appmsgclass = "appf11"
				break;
			case "nosmartphones":
				appmsg = "Das Bayer magazin ist ein innovatives multimediales Format, das leider von Ihrem Smartphone nicht unterstützt wird.</p><p class='txtsmll'>Sie können das Bayer magazin von Ihrem Desktop PC oder Laptop aus nutzen oder als App für Tablet-PCs herunterladen. Sie finden das Bayer magazin unter <a href='http://www.magazin.bayer.de'>www.magazin.bayer.de</a>. ";
				appmsgclass = "appstandard"
				break;
			case "incompatible":
				appmsg = "Das Bayer magazin ist ein innovatives multimediales Format, das in Ihrem Browser ggf. nur eingeschränkt dargestellt wird.</p><p>Um das Bayer magazin ohne Einschränkungen nutzen zu können, laden Sie sich bitte die aktuellste Version eines der folgenden Browser herunter. Sie finden das Bayer magazin unter <a href='http://www.magazin.bayer.de'>www.magazin.bayer.de</a>.";
				appmsgclass = "appincompatible"
				break;
			case "incompatibletablet":
				appmsg = "Das Bayer magazin ist ein innovatives multimediales Format, das leider von Ihrem Tablet nicht unterstützt wird.</p><p>Sie können das Bayer magazin von Ihrem Desktop PC oder Laptop aus nutzen oder es als iPad-App herunterladen. <a href='http://www.magazin.bayer.de'>www.magazin.bayer.de</a>.";
				appmsgclass = "appincompatible"
				break;
			case "incompatibletoosmall":
				appmsg = "Das Bayer magazin hat eine größere Auflösung als Ihr Monitor, daher wird das Format bei Ihnen nur eingeschränkt dargestellt.</p><p class='txtsmll'>Zudem konnte Ihr Browser nicht identifiziert werden. Um die bestmögliche Darstellungsqualität zu erzielen, laden Sie sich bitte die aktuellste Version eines der folgenden Browser herunter. Sie finden das Bayer magazin unter <a href='http://www.magazin.bayer.de'>www.magazin.bayer.de</a>.";
				appmsgclass = "appincompatible itoosmall"
				break;
			case "updatebrowser":
				appmsg = "Das Bayer magazin ist ein innovatives multimediales Format, das leider nicht von Ihrem Browser unterstützt wird. </p><p class='txtsmll'>Bitte laden Sie sich die aktuellste Version Ihres Browsers herunter. Sie finden das Bayer magazin unter <a href='http://www.magazin.bayer.de'>www.magazin.bayer.de</a>.";
				appmsgclass = "appupdatebrowser"
				break;
			case "checked":
				appmsg = "Das Bayer magazin ist ein innovatives, multimediales Format, das nur von neueren Browsern wie dem Internet Explorer ab Version 8 unterstützt wird.</p><p class='txtsmll'>Sollten Sie noch nicht auf PWP umgestellt sein und Ihnen der Internet Explorer 8 daher noch nicht zur Verfügung stehen, nutzen Sie bitte den Firefox. Dieser sollte auf Ihrem Rechner in der Version 3.6 oder höher installiert sein. Starten Sie bitte den Browser und geben dort manuell die Adresse www.magazin.bayer.de ein.</p><p class='txtsmll'>Können Sie das magazin weiterhin nicht aufrufen, wenden Sie sich bitte an Ihren lokalen IT-Support. Leider kann es abhängig von der lokalen IT-Strategie vorkommen, dass Sie bis zur Umstellung Ihres Rechners auf den PWP-Standard keine Möglichkeit haben, die Multimedia-Version des magazins zu erleben.";
				appmsgclass = "appbig"
				break;
			case "toosmall":
				appmsg = "Das Bayer magazin hat eine größere Auflösung als Ihr Monitor, daher wird das Format bei Ihnen nur eingeschränkt dargestellt.";
				appmsgclass = "appstandard"
				break;
			case "compatmode":
				appmsg = "Bitte schalten Sie den Kompatibilitätsmodus Ihres Browsers aus, um das Bayer magazin erleben zu können.";
				appmsgclass = "appstandard"
				break;
			case "istore":
				appmsg = "Message istore";
				break;
			case "marketplace":
				appmsg = "Das Bayer magazin ist ein innovatives multimediales Format, das in Kürze auch für Android Tablets erhältlich ist.</p><p class='txtsmll'>Bis dahin können Sie das Bayer magazin von Ihrem Desktop PC oder Laptop aus nutzen oder es als iPad-App herunterladen. Sie finden das Bayer magazin unter <a href='http://www.magazin.bayer.de'>www.magazin.bayer.de</a>.";
				appmsgclass = "appstandard"
				break;
			default:
				appmsg = "";
				break;
		}
		jQuery('body').append('<div id="appmessage" class="'+appmsgclass+'"><a href="#" class="appmsgclose">x</a><div class="appmsgtext"><h2>Hinweis</h2><p>'+appmsg+'</p></div><div class="appbrowser"><a href="http://www.mozilla-europe.org/de/" target="_blank"></a><a href="http://www.microsoft.com/downloads/de-de/default.aspx" target="_blank"></a><a href="http://www.google.de/chrome/" target="_blank"></a><a href="http://www.apple.com/de/safari/" target="_blank"></a><a href="http://www.opera.com/download/" target="_blank"></a></div></div>');
	} else {
		//englisch messages
		switch (msg) {
			case "webappF11":
				appmsg = "Press F11 to experience the Bayer magazine in full screen mode. </p><p class='txtsmll'>Press F11 again to deactivate.";
				appmsgclass = "appf11"
				break;
			case "nosmartphones":
				appmsg = "Unfortunately, the Bayer magazine's innovative, multimedia format is not supported by your smartphone. </p><p class='txtsmll'>You can explore the Bayer magazine from your PC or laptop, or download it as an app for tablet PCs. You can find the Bayer magazine here: <a href='http://www.magazine.bayer.com'>www.magazine.bayer.com</a>. ";
				appmsgclass = "appstandard"
				break;
			case "incompatible":
				appmsg = "The browser you are currently using may restrict presentation of the Bayer magazine's innovative, multimedia format. </p><p>To avoid this, please download the latest version of one of the following browsers. You can find the Bayer magazine here: <a href='http://www.magazine.bayer.com'>www.magazine.bayer.com</a>.";
				appmsgclass = "appincompatible"
				break;
			case "incompatibletoosmall":
				appmsg = "The Bayer magazine has a higher resolution than your monitor supports. Format presentation will therefore be limited. </p><p class='txtsmll'>In addition, it has not been possible to identify your browser. To achieve the best possible display quality, please download the most recent version of one of the following browsers. You can find the Bayer magazine here: <a href='http://www.magazine.bayer.com'>www.magazine.bayer.com</a>.";
				appmsgclass = "appincompatible itoosmall"
				break;
			case "updatebrowser":
				appmsg = "Unfortunately, the Bayer magazine's innovative, multimedia format is not supported by your browser. </p><p class='txtsmll'>Please download the latest version of your browser. You can find the Bayer magazine here: <a href='http://www.magazine.bayer.com'>www.magazine.bayer.com</a>.";
				appmsgclass = "appupdatebrowser"
				break;
			case "checked":
				appmsg = "Bayer magazine is an innovative, multimedia format that is only supported by newer browsers such as version 8 and above of Internet Explorer.</p><p class='txtsmll'>If you have not yet been migrated to PWP and therefore do not have Internet Explorer 8, please use Firefox. Version 3.6 or above should be installed on your computer. Start the browser and enter the address <a href='http://www.magazine.bayer.com'>www.magazine.bayer.com</a> manually.</p><p class='txtsmll'>If you are still unable to access the magazine, please consult your local IT Support. Your local IT strategy may mean that you will unfortunately not be able to experience the multimedia version until your computer has been migrated to PWP.";
				appmsgclass = "appbig"
				break;
			case "toosmall":
				appmsg = "The Bayer magazine has a higher resolution than your monitor supports. Format presentation will therefore be limited.";
				appmsgclass = "appstandard"
				break;
			case "compatmode":
				appmsg = "To experience the Bayer magazine, please turn off compatibility mode in your browser.";
				appmsgclass = "appstandard"
				break;
			case "istore":
				appmsg = "Message istore";
				break;
			case "marketplace":
				appmsg = "It will soon be possible to access the Bayer magazine's innovative, multimedia format from Android tablet PCs. </p><p class='txtsmll'>Until then, you can explore the Bayer magazine from your PC or laptop, or download it as an app for your iPad. You can find the Bayer magazine here: <a href='http://www.magazine.bayer.com'>www.magazine.bayer.com</a>.";
				appmsgclass = "appstandard"
				break;
			default:
				appmsg = "";
				break;
		}
		jQuery('body').append('<div id="appmessage" class="'+appmsgclass+'"><a href="#" class="appmsgclose">x</a><div class="appmsgtext"><h2>Information</h2><p>'+appmsg+'</p></div><div class="appbrowser"><a href="http://www.mozilla.org/" target="_blank"></a><a href="http://www.microsoft.com/download/en/default.aspx" target="_blank"></a><a href="https://www.google.com/chrome/?hl=en" target="_blank"></a><a href="http://www.apple.com/safari/" target="_blank"></a><a href="http://www.opera.com/download/" target="_blank"></a></div></div>');
	}

		jQuery('#divfixed').css({'z-index': '3001'});
		jQuery('.appmsgclose').click(function(e) {
			e.preventDefault();
			jQuery("#appmessage").remove();
			jQuery('#divfixed').css({'z-index': '2999'});
		});
	}
			
	function showApp(appurl) {
		var docHeight = $(document).height();
		jQuery('body').append('<div id="divfixed"></div>');
			jQuery('body').append('<div id="appcontainer"></div>');
		if($("#appcontainer").length > 0){
		}
		jQuery('#divfixed').css({"height":docHeight});
		jQuery('#appcontainer').css("top", 0);
		jQuery('#appcontainer').append('<div id="closeframe">x</div>');
		jQuery('#appcontainer').append('<iframe src="'+appurl+'" name="Appframe" id="app" scrolling="no" frameborder="0" height="731"></iframe>');


		//$('#modal .modalbody').html('<iframe src="'+appurl+'" name="Appframe" id="app" scrolling="no" frameborder="0" height="731" width="975"></iframe>');
		//$('#modal .modalbody').css({ "margin-top": "-58px", "margin-left": "-20px", "margin-bottom": "-20px" });

		//$('#modal').reveal({
		//	closed: function(){$(".modalbody").empty();}
		//});
		
		jQuery(document).bind("keyup", function(e){
			if (e.which==27){
				$("#closeframe").trigger('click');
				jQuery(document).unbind("keyup");
			} else if (e.which==122){
				jQuery('#appmsgclose').trigger('click');
			}
		});

		jQuery('#closeframe, #divfixed').click(function() {
			jQuery('#appcontainer').remove();
			jQuery('#divfixed').remove();
			jQuery('#appmessage').remove();
		});
	}

//var appurl_de = "http://www.magazin.app.bayer.de/magazin/2011-01/de/index.html";
//var appurl_en = "http://www.magazine.app.bayer.com/magazin/2011-01/en/index.html";
var appurl_de = "http://www.magazin.app.bayer.de/magazin/2012-02/de/index.html";
var appurl_en = "http://www.magazine.app.bayer.com/magazin/2012-02/en/index.html";

$(window).load(function() {
/*	if(showapp){
		if(showapp == 'true'){
			if(forapplang == 'de') {
				showapp = appurl_de;
			} else {
				showapp = appurl_en;
			}
      callApp(showapp);
		}else if(showapp.indexOf("www.magazin.app.bayer.de") == 7 || showapp.indexOf("www.magazine.app.bayer.com") == 7 ) {
      callApp(showapp);
		}
	}
*/
	if(showapp){
		if(deeplink == 'http://www.magazin.app.bayer.detrue'){
			deeplink = appurl_de;
		} else if (deeplink == 'http://www.magazine.app.bayer.comtrue'){
			deeplink = appurl_en;
		}
    callApp(deeplink);
	}
if(document.location.href.indexOf('timetoact.de')<0 && document.location.href.indexOf('ssl.bayer.com')<0 && document.location.href.indexOf('/vorschau/')<0 && document.location.href.indexOf('.tv-footage')<0 && document.location.href.indexOf('secure.bayer.com')<0 && document.location.href.indexOf('bayer2012')<0 && document.location.href.indexOf('p-bayer')<0 && document.location.href.indexOf('.video-center.')<0 )

{
  if(forapplang == 'de') {
    //document.domain = "bayer.de";
  } else {
    //document.domain = "bayer.com";
  }
}
});



function showCloseBtn() {
  jQuery('#closeframe').show();
}
function hideCloseBtn(){
  jQuery('#closeframe').hide();
}
/*jquery.fitvids*/
/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.youtube-nocookie.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );


        $(".main").fitVids();
        $(".main").fitVids({ customSelector: "iframe[src^='http://www.video-center.bayer']"});  
        $(".main").fitVids({ customSelector: "iframe[src^='http://2371.3706.m.edge-cdn.net']"});  


/*jwplayer*/
if(typeof jwplayer=="undefined"){var jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};var $jw=jwplayer;jwplayer.version="5.7.1896";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(b){b.utils=function(){};b.utils.typeOf=function(d){var c=typeof d;if(c==="object"){if(d){if(d instanceof Array){c="array"}}else{c="null"}}return c};b.utils.extend=function(){var c=b.utils.extend["arguments"];if(c.length>1){for(var e=1;e<c.length;e++){for(var d in c[e]){c[0][d]=c[e][d]}}return c[0]}return null};b.utils.clone=function(f){var c;var d=b.utils.clone["arguments"];if(d.length==1){switch(b.utils.typeOf(d[0])){case"object":c={};for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;case"array":c=[];for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;default:return d[0];break}}return c};b.utils.extension=function(c){if(!c){return""}c=c.substring(c.lastIndexOf("/")+1,c.length);c=c.split("?")[0];if(c.lastIndexOf(".")>-1){return c.substr(c.lastIndexOf(".")+1,c.length).toLowerCase()}return};b.utils.html=function(c,d){c.innerHTML=d};b.utils.wrap=function(c,d){if(c.parentNode){c.parentNode.replaceChild(d,c)}d.appendChild(c)};b.utils.ajax=function(g,f,c){var e;if(window.XMLHttpRequest){e=new XMLHttpRequest()}else{e=new ActiveXObject("Microsoft.XMLHTTP")}e.onreadystatechange=function(){if(e.readyState===4){if(e.status===200){if(f){f(e)}}else{if(c){c(g)}}}};try{e.open("GET",g,true);e.send(null)}catch(d){if(c){c(g)}}return e};b.utils.load=function(d,e,c){d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){if(e){e()}}else{if(c){c()}}}}};b.utils.find=function(d,c){return d.getElementsByTagName(c)};b.utils.append=function(c,d){c.appendChild(d)};b.utils.isIE=function(){return((!+"\v1")||(typeof window.ActiveXObject!="undefined"))};b.utils.isLegacyAndroid=function(){var c=navigator.userAgent.toLowerCase();return(c.match(/android 2.[012]/i)!==null)};b.utils.isIOS=function(d){if(typeof d=="undefined"){d=/iP(hone|ad|od)/i}var c=navigator.userAgent.toLowerCase();return(c.match(d)!==null)};b.utils.isIPad=function(){return b.utils.isIOS(/iPad/i)};b.utils.isIPod=function(){return b.utils.isIOS(/iP(hone|od)/i)};b.utils.getFirstPlaylistItemFromConfig=function(c){var d={};var e;if(c.playlist&&c.playlist.length){e=c.playlist[0]}else{e=c}d.file=e.file;d.levels=e.levels;d.streamer=e.streamer;d.playlistfile=e.playlistfile;d.provider=e.provider;if(!d.provider){if(d.file&&(d.file.toLowerCase().indexOf("youtube.com")>-1||d.file.toLowerCase().indexOf("youtu.be")>-1)){d.provider="youtube"}if(d.streamer&&d.streamer.toLowerCase().indexOf("rtmp://")==0){d.provider="rtmp"}if(e.type){d.provider=e.type.toLowerCase()}}if(d.provider=="audio"){d.provider="sound"}return d};b.utils.getOuterHTML=function(c){if(c.outerHTML){return c.outerHTML}else{try{return new XMLSerializer().serializeToString(c)}catch(d){return""}}};b.utils.setOuterHTML=function(f,e){if(f.outerHTML){f.outerHTML=e}else{var g=document.createElement("div");g.innerHTML=e;var c=document.createRange();c.selectNodeContents(g);var d=c.extractContents();f.parentNode.insertBefore(d,f);f.parentNode.removeChild(f)}};b.utils.hasFlash=function(){if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]!="undefined"){return true}if(typeof window.ActiveXObject!="undefined"){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(c){}}return false};b.utils.getPluginName=function(c){if(c.lastIndexOf("/")>=0){c=c.substring(c.lastIndexOf("/")+1,c.length)}if(c.lastIndexOf("-")>=0){c=c.substring(0,c.lastIndexOf("-"))}if(c.lastIndexOf(".swf")>=0){c=c.substring(0,c.lastIndexOf(".swf"))}if(c.lastIndexOf(".js")>=0){c=c.substring(0,c.lastIndexOf(".js"))}return c};b.utils.getPluginVersion=function(c){if(c.lastIndexOf("-")>=0){if(c.lastIndexOf(".js")>=0){return c.substring(c.lastIndexOf("-")+1,c.lastIndexOf(".js"))}else{if(c.lastIndexOf(".swf")>=0){return c.substring(c.lastIndexOf("-")+1,c.lastIndexOf(".swf"))}else{return c.substring(c.lastIndexOf("-")+1)}}}return""};b.utils.getAbsolutePath=function(j,h){if(!b.utils.exists(h)){h=document.location.href}if(!b.utils.exists(j)){return undefined}if(a(j)){return j}var k=h.substring(0,h.indexOf("://")+3);var g=h.substring(k.length,h.indexOf("/",k.length+1));var d;if(j.indexOf("/")===0){d=j.split("/")}else{var e=h.split("?")[0];e=e.substring(k.length+g.length+1,e.lastIndexOf("/"));d=e.split("/").concat(j.split("/"))}var c=[];for(var f=0;f<d.length;f++){if(!d[f]||!b.utils.exists(d[f])||d[f]=="."){continue}else{if(d[f]==".."){c.pop()}else{c.push(d[f])}}}return k+g+"/"+c.join("/")};function a(d){if(!b.utils.exists(d)){return}var e=d.indexOf("://");var c=d.indexOf("?");return(e>0&&(c<0||(c>e)))}b.utils.pluginPathType={ABSOLUTE:"ABSOLUTE",RELATIVE:"RELATIVE",CDN:"CDN"};b.utils.getPluginPathType=function(d){if(typeof d!="string"){return}d=d.split("?")[0];var e=d.indexOf("://");if(e>0){return b.utils.pluginPathType.ABSOLUTE}var c=d.indexOf("/");var f=b.utils.extension(d);if(e<0&&c<0&&(!f||!isNaN(f))){return b.utils.pluginPathType.CDN}return b.utils.pluginPathType.RELATIVE};b.utils.mapEmpty=function(c){for(var d in c){return false}return true};b.utils.mapLength=function(d){var c=0;for(var e in d){c++}return c};b.utils.log=function(d,c){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(c){console.log(d,c)}else{console.log(d)}}};b.utils.css=function(d,g,c){if(b.utils.exists(d)){for(var e in g){try{if(typeof g[e]==="undefined"){continue}else{if(typeof g[e]=="number"&&!(e=="zIndex"||e=="opacity")){if(isNaN(g[e])){continue}if(e.match(/color/i)){g[e]="#"+b.utils.strings.pad(g[e].toString(16),6)}else{g[e]=Math.ceil(g[e])+"px"}}}d.style[e]=g[e]}catch(f){}}}};b.utils.isYouTube=function(c){return(c.indexOf("youtube.com")>-1||c.indexOf("youtu.be")>-1)};b.utils.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d};b.utils.stretch=function(h,n,m,f,l,g){if(typeof m=="undefined"||typeof f=="undefined"||typeof l=="undefined"||typeof g=="undefined"){return}var d=m/l;var e=f/g;var k=0;var j=0;n.style.overflow="hidden";b.utils.transform(n,"");var c={};switch(h.toUpperCase()){case b.utils.stretching.NONE:c.width=l;c.height=g;break;case b.utils.stretching.UNIFORM:if(d>e){c.width=l*e;c.height=g*e}else{c.width=l*d;c.height=g*d}break;case b.utils.stretching.FILL:if(d>e){c.width=l*d;c.height=g*d}else{c.width=l*e;c.height=g*e}break;case b.utils.stretching.EXACTFIT:b.utils.transform(n,["scale(",d,",",e,")"," translate(0px,0px)"].join(""));c.width=l;c.height=g;break;default:break}c.top=(f-c.height)/2;c.left=(m-c.width)/2;b.utils.css(n,c)};b.utils.stretching={NONE:"NONE",FILL:"FILL",UNIFORM:"UNIFORM",EXACTFIT:"EXACTFIT"};b.utils.deepReplaceKeyName=function(h,e,c){switch(b.utils.typeOf(h)){case"array":for(var g=0;g<h.length;g++){h[g]=b.utils.deepReplaceKeyName(h[g],e,c)}break;case"object":for(var f in h){var d=f.replace(new RegExp(e,"g"),c);h[d]=b.utils.deepReplaceKeyName(h[f],e,c);if(f!=d){delete h[f]}}break}return h};b.utils.isInArray=function(e,d){if(!(e)||!(e instanceof Array)){return false}for(var c=0;c<e.length;c++){if(d===e[c]){return true}}return false};b.utils.exists=function(c){switch(typeof(c)){case"string":return(c.length>0);break;case"object":return(c!==null);case"undefined":return false}return true};b.utils.empty=function(c){if(typeof c.hasChildNodes=="function"){while(c.hasChildNodes()){c.removeChild(c.firstChild)}}};b.utils.parseDimension=function(c){if(typeof c=="string"){if(c===""){return 0}else{if(c.lastIndexOf("%")>-1){return c}else{return parseInt(c.replace("px",""),10)}}}return c};b.utils.getDimensions=function(c){if(c&&c.style){return{x:b.utils.parseDimension(c.style.left),y:b.utils.parseDimension(c.style.top),width:b.utils.parseDimension(c.style.width),height:b.utils.parseDimension(c.style.height)}}else{return{}}};b.utils.timeFormat=function(c){str="00:00";if(c>0){str=Math.floor(c/60)<10?"0"+Math.floor(c/60)+":":Math.floor(c/60)+":";str+=Math.floor(c%60)<10?"0"+Math.floor(c%60):Math.floor(c%60)}return str}})(jwplayer);(function(a){a.events=function(){};a.events.COMPLETE="COMPLETE";a.events.ERROR="ERROR"})(jwplayer);(function(jwplayer){jwplayer.events.eventdispatcher=function(debug){var _debug=debug;var _listeners;var _globallisteners;this.resetEventListeners=function(){_listeners={};_globallisteners=[]};this.resetEventListeners();this.addEventListener=function(type,listener,count){try{if(!jwplayer.utils.exists(_listeners[type])){_listeners[type]=[]}if(typeof(listener)=="string"){eval("listener = "+listener)}_listeners[type].push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeEventListener=function(type,listener){if(!_listeners[type]){return}try{for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){if(_listeners[type][listenerIndex].listener.toString()==listener.toString()){_listeners[type].splice(listenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.addGlobalListener=function(listener,count){try{if(typeof(listener)=="string"){eval("listener = "+listener)}_globallisteners.push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeGlobalListener=function(listener){if(!_globallisteners[type]){return}try{for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){if(_globallisteners[globalListenerIndex].listener.toString()==listener.toString()){_globallisteners.splice(globalListenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.sendEvent=function(type,data){if(!jwplayer.utils.exists(data)){data={}}if(_debug){jwplayer.utils.log(type,data)}if(typeof _listeners[type]!="undefined"){for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){try{_listeners[type][listenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_listeners[type][listenerIndex].listener)}if(_listeners[type][listenerIndex]){if(_listeners[type][listenerIndex].count===1){delete _listeners[type][listenerIndex]}else{if(_listeners[type][listenerIndex].count>0){_listeners[type][listenerIndex].count=_listeners[type][listenerIndex].count-1}}}}}for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){try{_globallisteners[globalListenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_globallisteners[globalListenerIndex].listener)}if(_globallisteners[globalListenerIndex]){if(_globallisteners[globalListenerIndex].count===1){delete _globallisteners[globalListenerIndex]}else{if(_globallisteners[globalListenerIndex].count>0){_globallisteners[globalListenerIndex].count=_globallisteners[globalListenerIndex].count-1}}}}}}})(jwplayer);(function(a){var b={};a.utils.animations=function(){};a.utils.animations.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d;c.style.msTransform=d};a.utils.animations.transformOrigin=function(c,d){c.style.webkitTransformOrigin=d;c.style.MozTransformOrigin=d;c.style.OTransformOrigin=d;c.style.msTransformOrigin=d};a.utils.animations.rotate=function(c,d){a.utils.animations.transform(c,["rotate(",d,"deg)"].join(""))};a.utils.cancelAnimation=function(c){delete b[c.id]};a.utils.fadeTo=function(m,f,e,j,h,d){if(b[m.id]!=d&&a.utils.exists(d)){return}if(m.style.opacity==f){return}var c=new Date().getTime();if(d>c){setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},d-c)}if(m.style.display=="none"){m.style.display="block"}if(!a.utils.exists(j)){j=m.style.opacity===""?1:m.style.opacity}if(m.style.opacity==f&&m.style.opacity!==""&&a.utils.exists(d)){if(f===0){m.style.display="none"}return}if(!a.utils.exists(d)){d=c;b[m.id]=d}if(!a.utils.exists(h)){h=0}var k=(e>0)?((c-d)/(e*1000)):0;k=k>1?1:k;var l=f-j;var g=j+(k*l);if(g>1){g=1}else{if(g<0){g=0}}m.style.opacity=g;if(h>0){b[m.id]=d+h*1000;a.utils.fadeTo(m,f,e,j,0,b[m.id]);return}setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},10)}})(jwplayer);(function(a){a.utils.arrays=function(){};a.utils.arrays.indexOf=function(c,d){for(var b=0;b<c.length;b++){if(c[b]==d){return b}}return -1};a.utils.arrays.remove=function(c,d){var b=a.utils.arrays.indexOf(c,d);if(b>-1){c.splice(b,1)}}})(jwplayer);(function(a){a.utils.extensionmap={"3gp":{html5:"video/3gpp",flash:"video"},"3gpp":{html5:"video/3gpp"},"3g2":{html5:"video/3gpp2",flash:"video"},"3gpp2":{html5:"video/3gpp2"},flv:{flash:"video"},f4a:{html5:"audio/mp4"},f4b:{html5:"audio/mp4",flash:"video"},f4v:{html5:"video/mp4",flash:"video"},mov:{html5:"video/quicktime",flash:"video"},m4a:{html5:"audio/mp4",flash:"video"},m4b:{html5:"audio/mp4"},m4p:{html5:"audio/mp4"},m4v:{html5:"video/mp4",flash:"video"},mp4:{html5:"video/mp4",flash:"video"},rbs:{flash:"sound"},aac:{html5:"audio/aac",flash:"video"},mp3:{html5:"audio/mp3",flash:"sound"},ogg:{html5:"audio/ogg"},oga:{html5:"audio/ogg"},ogv:{html5:"video/ogg"},webm:{html5:"video/webm"},m3u8:{html5:"audio/x-mpegurl"},gif:{flash:"image"},jpeg:{flash:"image"},jpg:{flash:"image"},swf:{flash:"image"},png:{flash:"image"},wav:{html5:"audio/x-wav"}}})(jwplayer);(function(e){e.utils.mediaparser=function(){};var g={element:{width:"width",height:"height",id:"id","class":"className",name:"name"},media:{src:"file",preload:"preload",autoplay:"autostart",loop:"repeat",controls:"controls"},source:{src:"file",type:"type",media:"media","data-jw-width":"width","data-jw-bitrate":"bitrate"},video:{poster:"image"}};var f={};e.utils.mediaparser.parseMedia=function(j){return d(j)};function c(k,j){if(!e.utils.exists(j)){j=g[k]}else{e.utils.extend(j,g[k])}return j}function d(n,j){if(f[n.tagName.toLowerCase()]&&!e.utils.exists(j)){return f[n.tagName.toLowerCase()](n)}else{j=c("element",j);var o={};for(var k in j){if(k!="length"){var m=n.getAttribute(k);if(e.utils.exists(m)){o[j[k]]=m}}}var l=n.style["#background-color"];if(l&&!(l=="transparent"||l=="rgba(0, 0, 0, 0)")){o.screencolor=l}return o}}function h(n,k){k=c("media",k);var l=[];var j=e.utils.selectors("source",n);for(var m in j){if(!isNaN(m)){l.push(a(j[m]))}}var o=d(n,k);if(e.utils.exists(o.file)){l[0]={file:o.file}}o.levels=l;return o}function a(l,k){k=c("source",k);var j=d(l,k);j.width=j.width?j.width:0;j.bitrate=j.bitrate?j.bitrate:0;return j}function b(l,k){k=c("video",k);var j=h(l,k);return j}f.media=h;f.audio=h;f.source=a;f.video=b})(jwplayer);(function(a){a.utils.loaderstatus={NEW:"NEW",LOADING:"LOADING",ERROR:"ERROR",COMPLETE:"COMPLETE"};a.utils.scriptloader=function(c){var d=a.utils.loaderstatus.NEW;var b=new a.events.eventdispatcher();a.utils.extend(this,b);this.load=function(){if(d==a.utils.loaderstatus.NEW){d=a.utils.loaderstatus.LOADING;var e=document.createElement("script");e.onload=function(f){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)};e.onerror=function(f){d=a.utils.loaderstatus.ERROR;b.sendEvent(a.events.ERROR)};e.onreadystatechange=function(){if(e.readyState=="loaded"||e.readyState=="complete"){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)}};document.getElementsByTagName("head")[0].appendChild(e);e.src=c}};this.getStatus=function(){return d}}})(jwplayer);(function(a){a.utils.selectors=function(b,e){if(!a.utils.exists(e)){e=document}b=a.utils.strings.trim(b);var c=b.charAt(0);if(c=="#"){return e.getElementById(b.substr(1))}else{if(c=="."){if(e.getElementsByClassName){return e.getElementsByClassName(b.substr(1))}else{return a.utils.selectors.getElementsByTagAndClass("*",b.substr(1))}}else{if(b.indexOf(".")>0){var d=b.split(".");return a.utils.selectors.getElementsByTagAndClass(d[0],d[1])}else{return e.getElementsByTagName(b)}}}return null};a.utils.selectors.getElementsByTagAndClass=function(e,h,g){var j=[];if(!a.utils.exists(g)){g=document}var f=g.getElementsByTagName(e);for(var d=0;d<f.length;d++){if(a.utils.exists(f[d].className)){var c=f[d].className.split(" ");for(var b=0;b<c.length;b++){if(c[b]==h){j.push(f[d])}}}}return j}})(jwplayer);(function(a){a.utils.strings=function(){};a.utils.strings.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.utils.strings.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.utils.strings.serialize=function(b){if(b==null){return null}else{if(b=="true"){return true}else{if(b=="false"){return false}else{if(isNaN(Number(b))||b.length>5||b.length==0){return b}else{return Number(b)}}}}};a.utils.strings.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c+=Number(b[b.length-2])*60;if(b.length==3){c+=Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.utils.strings.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.utils.strings.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e+'"';break;case"object":if(a.utils.exists(e)){e=a.utils.strings.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}}})(jwplayer);(function(c){var d=new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);c.utils.typechecker=function(g,f){f=!c.utils.exists(f)?b(g):f;return e(g,f)};function b(f){var g=["true","false","t","f"];if(g.toString().indexOf(f.toLowerCase().replace(" ",""))>=0){return"boolean"}else{if(d.test(f)){return"color"}else{if(!isNaN(parseInt(f,10))&&parseInt(f,10).toString().length==f.length){return"integer"}else{if(!isNaN(parseFloat(f))&&parseFloat(f).toString().length==f.length){return"float"}}}}return"string"}function e(g,f){if(!c.utils.exists(f)){return g}switch(f){case"color":if(g.length>0){return a(g)}return null;case"integer":return parseInt(g,10);case"float":return parseFloat(g);case"boolean":if(g.toLowerCase()=="true"){return true}else{if(g=="1"){return true}}return false}return g}function a(f){switch(f.toLowerCase()){case"blue":return parseInt("0000FF",16);case"green":return parseInt("00FF00",16);case"red":return parseInt("FF0000",16);case"cyan":return parseInt("00FFFF",16);case"magenta":return parseInt("FF00FF",16);case"yellow":return parseInt("FFFF00",16);case"black":return parseInt("000000",16);case"white":return parseInt("FFFFFF",16);default:f=f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(f.length==3){f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)}return parseInt(f,16)}return parseInt("000000",16)}})(jwplayer);(function(a){a.utils.parsers=function(){};a.utils.parsers.localName=function(b){if(!b){return""}else{if(b.localName){return b.localName}else{if(b.baseName){return b.baseName}else{return""}}}};a.utils.parsers.textContent=function(b){if(!b){return""}else{if(b.textContent){return b.textContent}else{if(b.text){return b.text}else{return""}}}}})(jwplayer);(function(a){a.utils.parsers.jwparser=function(){};a.utils.parsers.jwparser.PREFIX="jwplayer";a.utils.parsers.jwparser.parseEntry=function(c,d){for(var b=0;b<c.childNodes.length;b++){if(c.childNodes[b].prefix==a.utils.parsers.jwparser.PREFIX){d[a.utils.parsers.localName(c.childNodes[b])]=a.utils.strings.serialize(a.utils.parsers.textContent(c.childNodes[b]))}if(!d.file&&String(d.link).toLowerCase().indexOf("youtube")>-1){d.file=d.link}}return d};a.utils.parsers.jwparser.getProvider=function(c){if(c.type){return c.type}else{if(c.file.indexOf("youtube.com/w")>-1||c.file.indexOf("youtube.com/v")>-1||c.file.indexOf("youtu.be/")>-1){return"youtube"}else{if(c.streamer&&c.streamer.indexOf("rtmp")==0){return"rtmp"}else{if(c.streamer&&c.streamer.indexOf("http")==0){return"http"}else{var b=a.utils.strings.extension(c.file);if(extensions.hasOwnProperty(b)){return extensions[b]}}}}}return""}})(jwplayer);(function(a){a.utils.parsers.mediaparser=function(){};a.utils.parsers.mediaparser.PREFIX="media";a.utils.parsers.mediaparser.parseGroup=function(d,f){var e=false;for(var c=0;c<d.childNodes.length;c++){if(d.childNodes[c].prefix==a.utils.parsers.mediaparser.PREFIX){if(!a.utils.parsers.localName(d.childNodes[c])){continue}switch(a.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"content":if(!e){f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}if(a.utils.strings.xmlAttribute(d.childNodes[c],"duration")){f.duration=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"duration"))}if(a.utils.strings.xmlAttribute(d.childNodes[c],"start")){f.start=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"start"))}if(d.childNodes[c].childNodes&&d.childNodes[c].childNodes.length>0){f=a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f)}if(a.utils.strings.xmlAttribute(d.childNodes[c],"width")||a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate")||a.utils.strings.xmlAttribute(d.childNodes[c],"url")){if(!f.levels){f.levels=[]}f.levels.push({width:a.utils.strings.xmlAttribute(d.childNodes[c],"width"),bitrate:a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate"),file:a.utils.strings.xmlAttribute(d.childNodes[c],"url")})}break;case"title":f.title=a.utils.parsers.textContent(d.childNodes[c]);break;case"description":f.description=a.utils.parsers.textContent(d.childNodes[c]);break;case"keywords":f.tags=a.utils.parsers.textContent(d.childNodes[c]);break;case"thumbnail":f.image=a.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"credit":f.author=a.utils.parsers.textContent(d.childNodes[c]);break;case"player":var b=d.childNodes[c].url;if(b.indexOf("youtube.com")>=0||b.indexOf("youtu.be")>=0){e=true;f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}break;case"group":a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f);break}}}return f}})(jwplayer);(function(b){b.utils.parsers.rssparser=function(){};b.utils.parsers.rssparser.parse=function(f){var c=[];for(var e=0;e<f.childNodes.length;e++){if(b.utils.parsers.localName(f.childNodes[e]).toLowerCase()=="channel"){for(var d=0;d<f.childNodes[e].childNodes.length;d++){if(b.utils.parsers.localName(f.childNodes[e].childNodes[d]).toLowerCase()=="item"){c.push(a(f.childNodes[e].childNodes[d]))}}}}return c};function a(d){var e={};for(var c=0;c<d.childNodes.length;c++){if(!b.utils.parsers.localName(d.childNodes[c])){continue}switch(b.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"enclosure":e.file=b.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"title":e.title=b.utils.parsers.textContent(d.childNodes[c]);break;case"pubdate":e.date=b.utils.parsers.textContent(d.childNodes[c]);break;case"description":e.description=b.utils.parsers.textContent(d.childNodes[c]);break;case"link":e.link=b.utils.parsers.textContent(d.childNodes[c]);break;case"category":if(e.tags){e.tags+=b.utils.parsers.textContent(d.childNodes[c])}else{e.tags=b.utils.parsers.textContent(d.childNodes[c])}break}}e=b.utils.parsers.mediaparser.parseGroup(d,e);e=b.utils.parsers.jwparser.parseEntry(d,e);return new b.html5.playlistitem(e)}})(jwplayer);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,f,e){var d=a.utils.getPluginName(h);if(c[d]){c[d].registerPlugin(h,f,e)}else{a.utils.log("A plugin ("+h+") was registered with the player that was not loaded. Please check your configuration.");for(var g in b){b[g].pluginFailed()}}}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]}}})(jwplayer);(function(a){a.plugins.pluginmodes={FLASH:"FLASH",JAVASCRIPT:"JAVASCRIPT",HYBRID:"HYBRID"};a.plugins.plugin=function(b){var d="http://plugins.longtailvideo.com";var j=a.utils.loaderstatus.NEW;var k;var h;var l;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function e(){switch(a.utils.getPluginPathType(b)){case a.utils.pluginPathType.ABSOLUTE:return b;case a.utils.pluginPathType.RELATIVE:return a.utils.getAbsolutePath(b,window.location.href);case a.utils.pluginPathType.CDN:var n=a.utils.getPluginName(b);var m=a.utils.getPluginVersion(b);return d+"/"+a.version.split(".")[0]+"/"+n+"/"+n+(m!==""?("-"+m):"")+".js"}}function g(m){l=setTimeout(function(){j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)},1000)}function f(m){j=a.utils.loaderstatus.ERROR;c.sendEvent(a.events.ERROR)}this.load=function(){if(j==a.utils.loaderstatus.NEW){if(b.lastIndexOf(".swf")>0){k=b;j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE);return}j=a.utils.loaderstatus.LOADING;var m=new a.utils.scriptloader(e());m.addEventListener(a.events.COMPLETE,g);m.addEventListener(a.events.ERROR,f);m.load()}};this.registerPlugin=function(o,n,m){if(l){clearTimeout(l);l=undefined}if(n&&m){k=m;h=n}else{if(typeof n=="string"){k=n}else{if(typeof n=="function"){h=n}else{if(!n&&!m){k=o}}}}j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)};this.getStatus=function(){return j};this.getPluginName=function(){return a.utils.getPluginName(b)};this.getFlashPath=function(){if(k){switch(a.utils.getPluginPathType(k)){case a.utils.pluginPathType.ABSOLUTE:return k;case a.utils.pluginPathType.RELATIVE:if(b.lastIndexOf(".swf")>0){return a.utils.getAbsolutePath(k,window.location.href)}return a.utils.getAbsolutePath(k,e());case a.utils.pluginPathType.CDN:if(k.indexOf("-")>-1){return k+"h"}return k+"-h"}}return null};this.getJS=function(){return h};this.getPluginmode=function(){if(typeof k!="undefined"&&typeof h!="undefined"){return a.plugins.pluginmodes.HYBRID}else{if(typeof k!="undefined"){return a.plugins.pluginmodes.FLASH}else{if(typeof h!="undefined"){return a.plugins.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(n,m,o){return new h(n,m,o)};this.getURL=function(){return b}}})(jwplayer);(function(a){a.plugins.pluginloader=function(h,e){var g={};var k=a.utils.loaderstatus.NEW;var d=false;var b=false;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function f(){if(!b){b=true;k=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)}}function j(){if(!b){var m=0;for(plugin in g){var l=g[plugin].getStatus();if(l==a.utils.loaderstatus.LOADING||l==a.utils.loaderstatus.NEW){m++}}if(m==0){f()}}}this.setupPlugins=function(n,l,s){var m={length:0,plugins:{}};var p={length:0,plugins:{}};for(var o in g){var q=g[o].getPluginName();if(g[o].getFlashPath()){m.plugins[g[o].getFlashPath()]=l.plugins[o];m.plugins[g[o].getFlashPath()].pluginmode=g[o].getPluginmode();m.length++}if(g[o].getJS()){var r=document.createElement("div");r.id=n.id+"_"+q;r.style.position="absolute";r.style.zIndex=p.length+10;p.plugins[q]=g[o].getNewInstance(n,l.plugins[o],r);p.length++;if(typeof p.plugins[q].resize!="undefined"){n.onReady(s(p.plugins[q],r,true));n.onResize(s(p.plugins[q],r))}}}n.plugins=p.plugins;return m};this.load=function(){k=a.utils.loaderstatus.LOADING;d=true;for(var l in e){if(a.utils.exists(l)){g[l]=h.addPlugin(l);g[l].addEventListener(a.events.COMPLETE,j);g[l].addEventListener(a.events.ERROR,j)}}for(l in g){g[l].load()}d=false;j()};this.pluginFailed=function(){f()};this.getStatus=function(){return k}}})(jwplayer);(function(b){var a=[];b.api=function(d){this.container=d;this.id=d.id;var n={};var s={};var q={};var c=[];var h=undefined;var l=false;var j=[];var p=b.utils.getOuterHTML(d);var r={};var k={};this.getBuffer=function(){return this.callInternal("jwGetBuffer")};this.getContainer=function(){return this.container};function e(u,t){return function(z,v,w,x){if(u.renderingMode=="flash"||u.renderingMode=="html5"){var y;if(v){k[z]=v;y="jwplayer('"+u.id+"').callback('"+z+"')"}else{if(!v&&k[z]){delete k[z]}}h.jwDockSetButton(z,y,w,x)}return t}}this.getPlugin=function(t){var v=this;var u={};if(t=="dock"){return b.utils.extend(u,{setButton:e(v,u),show:function(){v.callInternal("jwDockShow");return u},hide:function(){v.callInternal("jwDockHide");return u},onShow:function(w){v.componentListener("dock",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("dock",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{if(t=="controlbar"){return b.utils.extend(u,{show:function(){v.callInternal("jwControlbarShow");return u},hide:function(){v.callInternal("jwControlbarHide");return u},onShow:function(w){v.componentListener("controlbar",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("controlbar",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{if(t=="display"){return b.utils.extend(u,{show:function(){v.callInternal("jwDisplayShow");return u},hide:function(){v.callInternal("jwDisplayHide");return u},onShow:function(w){v.componentListener("display",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("display",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{return this.plugins[t]}}}};this.callback=function(t){if(k[t]){return k[t]()}};this.getDuration=function(){return this.callInternal("jwGetDuration")};this.getFullscreen=function(){return this.callInternal("jwGetFullscreen")};this.getHeight=function(){return this.callInternal("jwGetHeight")};this.getLockState=function(){return this.callInternal("jwGetLockState")};this.getMeta=function(){return this.getItemMeta()};this.getMute=function(){return this.callInternal("jwGetMute")};this.getPlaylist=function(){var u=this.callInternal("jwGetPlaylist");if(this.renderingMode=="flash"){b.utils.deepReplaceKeyName(u,"__dot__",".")}for(var t=0;t<u.length;t++){if(!b.utils.exists(u[t].index)){u[t].index=t}}return u};this.getPlaylistItem=function(t){if(!b.utils.exists(t)){t=this.getCurrentItem()}return this.getPlaylist()[t]};this.getPosition=function(){return this.callInternal("jwGetPosition")};this.getRenderingMode=function(){return this.renderingMode};this.getState=function(){return this.callInternal("jwGetState")};this.getVolume=function(){return this.callInternal("jwGetVolume")};this.getWidth=function(){return this.callInternal("jwGetWidth")};this.setFullscreen=function(t){if(!b.utils.exists(t)){this.callInternal("jwSetFullscreen",!this.callInternal("jwGetFullscreen"))}else{this.callInternal("jwSetFullscreen",t)}return this};this.setMute=function(t){if(!b.utils.exists(t)){this.callInternal("jwSetMute",!this.callInternal("jwGetMute"))}else{this.callInternal("jwSetMute",t)}return this};this.lock=function(){return this};this.unlock=function(){return this};this.load=function(t){this.callInternal("jwLoad",t);return this};this.playlistItem=function(t){this.callInternal("jwPlaylistItem",t);return this};this.playlistPrev=function(){this.callInternal("jwPlaylistPrev");return this};this.playlistNext=function(){this.callInternal("jwPlaylistNext");return this};this.resize=function(u,t){if(this.renderingMode=="html5"){h.jwResize(u,t)}else{this.container.width=u;this.container.height=t}return this};this.play=function(t){if(typeof t=="undefined"){t=this.getState();if(t==b.api.events.state.PLAYING||t==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPlay",t)}return this};this.pause=function(t){if(typeof t=="undefined"){t=this.getState();if(t==b.api.events.state.PLAYING||t==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPause",t)}return this};this.stop=function(){this.callInternal("jwStop");return this};this.seek=function(t){this.callInternal("jwSeek",t);return this};this.setVolume=function(t){this.callInternal("jwSetVolume",t);return this};this.onBufferChange=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER,t)};this.onBufferFull=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,t)};this.onError=function(t){return this.eventListener(b.api.events.JWPLAYER_ERROR,t)};this.onFullscreen=function(t){return this.eventListener(b.api.events.JWPLAYER_FULLSCREEN,t)};this.onMeta=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_META,t)};this.onMute=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_MUTE,t)};this.onPlaylist=function(t){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,t)};this.onPlaylistItem=function(t){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,t)};this.onReady=function(t){return this.eventListener(b.api.events.API_READY,t)};this.onResize=function(t){return this.eventListener(b.api.events.JWPLAYER_RESIZE,t)};this.onComplete=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,t)};this.onSeek=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_SEEK,t)};this.onTime=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_TIME,t)};this.onVolume=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_VOLUME,t)};this.onBuffer=function(t){return this.stateListener(b.api.events.state.BUFFERING,t)};this.onPause=function(t){return this.stateListener(b.api.events.state.PAUSED,t)};this.onPlay=function(t){return this.stateListener(b.api.events.state.PLAYING,t)};this.onIdle=function(t){return this.stateListener(b.api.events.state.IDLE,t)};this.remove=function(){n={};j=[];if(b.utils.getOuterHTML(this.container)!=p){b.api.destroyPlayer(this.id,p)}};this.setup=function(u){if(b.embed){var t=this.id;this.remove();var v=b(t);v.config=u;return new b.embed(v)}return this};this.registerPlugin=function(v,u,t){b.plugins.registerPlugin(v,u,t)};this.setPlayer=function(t,u){h=t;this.renderingMode=u};this.stateListener=function(t,u){if(!s[t]){s[t]=[];this.eventListener(b.api.events.JWPLAYER_PLAYER_STATE,g(t))}s[t].push(u);return this};function g(t){return function(v){var u=v.newstate,x=v.oldstate;if(u==t){var w=s[u];if(w){for(var y=0;y<w.length;y++){if(typeof w[y]=="function"){w[y].call(this,{oldstate:x,newstate:u})}}}}}}this.componentListener=function(t,u,v){if(!q[t]){q[t]={}}if(!q[t][u]){q[t][u]=[];this.eventListener(u,m(t,u))}q[t][u].push(v);return this};function m(t,u){return function(w){if(t==w.component){var v=q[t][u];if(v){for(var x=0;x<v.length;x++){if(typeof v[x]=="function"){v[x].call(this,w)}}}}}}this.addInternalListener=function(t,u){t.jwAddEventListener(u,'function(dat) { jwplayer("'+this.id+'").dispatchEvent("'+u+'", dat); }')};this.eventListener=function(t,u){if(!n[t]){n[t]=[];if(h&&l){this.addInternalListener(h,t)}}n[t].push(u);return this};this.dispatchEvent=function(v){if(n[v]){var u=f(v,arguments[1]);for(var t=0;t<n[v].length;t++){if(typeof n[v][t]=="function"){n[v][t].call(this,u)}}}};function f(v,t){var x=b.utils.extend({},t);if(v==b.api.events.JWPLAYER_FULLSCREEN&&!x.fullscreen){x.fullscreen=x.message=="true"?true:false;delete x.message}else{if(typeof x.data=="object"){x=b.utils.extend(x,x.data);delete x.data}}var u=["position","duration","offset"];for(var w in u){if(x[u[w]]){x[u[w]]=Math.round(x[u[w]]*1000)/1000}}return x}this.callInternal=function(u,t){if(l){if(typeof h!="undefined"&&typeof h[u]=="function"){if(b.utils.exists(t)){return(h[u])(t)}else{return(h[u])()}}return null}else{j.push({method:u,parameters:t})}};this.playerReady=function(v){l=true;if(!h){this.setPlayer(document.getElementById(v.id))}this.container=document.getElementById(this.id);for(var t in n){this.addInternalListener(h,t)}this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,function(w){r={}});this.eventListener(b.api.events.JWPLAYER_MEDIA_META,function(w){b.utils.extend(r,w.metadata)});this.dispatchEvent(b.api.events.API_READY);while(j.length>0){var u=j.shift();this.callInternal(u.method,u.parameters)}};this.getItemMeta=function(){return r};this.getCurrentItem=function(){return this.callInternal("jwGetPlaylistIndex")};function o(v,x,w){var t=[];if(!x){x=0}if(!w){w=v.length-1}for(var u=x;u<=w;u++){t.push(v[u])}return t}return this};b.api.selectPlayer=function(d){var c;if(!b.utils.exists(d)){d=0}if(d.nodeType){c=d}else{if(typeof d=="string"){c=document.getElementById(d)}}if(c){var e=b.api.playerById(c.id);if(e){return e}else{return b.api.addPlayer(new b.api(c))}}else{if(typeof d=="number"){return b.getPlayers()[d]}}return null};b.api.events={API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem"};b.api.events.state={BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"};b.api.playerById=function(d){for(var c=0;c<a.length;c++){if(a[c].id==d){return a[c]}}return null};b.api.addPlayer=function(c){for(var d=0;d<a.length;d++){if(a[d]==c){return c}}a.push(c);return c};b.api.destroyPlayer=function(g,d){var f=-1;for(var j=0;j<a.length;j++){if(a[j].id==g){f=j;continue}}if(f>=0){var c=document.getElementById(a[f].id);if(document.getElementById(a[f].id+"_wrapper")){c=document.getElementById(a[f].id+"_wrapper")}if(c){if(d){b.utils.setOuterHTML(c,d)}else{var h=document.createElement("div");var e=c.id;if(c.id.indexOf("_wrapper")==c.id.length-8){newID=c.id.substring(0,c.id.length-8)}h.setAttribute("id",e);c.parentNode.replaceChild(h,c)}}a.splice(f,1)}return null};b.getPlayers=function(){return a.slice(0)}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(b){var a=jwplayer.api.playerById(b.id);if(a){a.playerReady(b)}else{jwplayer.api.selectPlayer(b.id).playerReady(b)}if(_userPlayerReady){_userPlayerReady.call(this,b)}};(function(a){a.embed=function(g){var j={width:400,height:300,components:{controlbar:{position:"over"}}};var f=a.utils.mediaparser.parseMedia(g.container);var e=new a.embed.config(a.utils.extend(j,f,g.config),this);var h=a.plugins.loadPlugins(g.id,e.plugins);function c(m,l){for(var k in l){if(typeof m[k]=="function"){(m[k]).call(m,l[k])}}}function d(){if(h.getStatus()==a.utils.loaderstatus.COMPLETE){for(var m=0;m<e.modes.length;m++){if(e.modes[m].type&&a.embed[e.modes[m].type]){var k=e;if(e.modes[m].config){k=a.utils.extend(a.utils.clone(e),e.modes[m].config)}var l=new a.embed[e.modes[m].type](document.getElementById(g.id),e.modes[m],k,h,g);if(l.supportsConfig()){l.embed();c(g,e.events);return g}}}a.utils.log("No suitable players found");new a.embed.logo(a.utils.extend({hide:true},e.components.logo),"none",g.id)}}h.addEventListener(a.events.COMPLETE,d);h.addEventListener(a.events.ERROR,d);h.load();return g};function b(){if(!document.body){return setTimeout(b,15)}var c=a.utils.selectors.getElementsByTagAndClass("video","jwplayer");for(var d=0;d<c.length;d++){var e=c[d];a(e.id).setup({})}}b()})(jwplayer);(function(e){function h(){return[{type:"flash",src:"/jwplayer/player.swf"},{type:"html5"},{type:"download"}]}var a={players:"modes",autoplay:"autostart"};function b(n){var m=n.toLowerCase();var l=["left","right","top","bottom"];for(var k=0;k<l.length;k++){if(m==l[k]){return true}}return false}function c(l){var k=false;k=(l instanceof Array)||(typeof l=="object"&&!l.position&&!l.size);return k}function j(k){if(typeof k=="string"){if(parseInt(k).toString()==k||k.toLowerCase().indexOf("px")>-1){return parseInt(k)}}return k}var g=["playlist","dock","controlbar","logo","display"];function f(k){var n={};switch(e.utils.typeOf(k.plugins)){case"object":for(var m in k.plugins){n[e.utils.getPluginName(m)]=m}break;case"string":var o=k.plugins.split(",");for(var l=0;l<o.length;l++){n[e.utils.getPluginName(o[l])]=o[l]}break}return n}function d(o,n,m,k){if(e.utils.typeOf(o[n])!="object"){o[n]={}}var l=o[n][m];if(e.utils.typeOf(l)!="object"){o[n][m]=l={}}if(k){if(n=="plugins"){var p=e.utils.getPluginName(m);l[k]=o[p+"."+k];delete o[p+"."+k]}else{l[k]=o[m+"."+k];delete o[m+"."+k]}}}e.embed.deserialize=function(l){var m=f(l);for(var k in m){d(l,"plugins",m[k])}for(var p in l){if(p.indexOf(".")>-1){var o=p.split(".");var n=o[0];var p=o[1];if(e.utils.isInArray(g,n)){d(l,"components",n,p)}else{if(m[n]){d(l,"plugins",m[n],p)}}}}return l};e.embed.config=function(k,u){var t=e.utils.extend({},k);var r;if(c(t.playlist)){r=t.playlist;delete t.playlist}t=e.embed.deserialize(t);t.height=j(t.height);t.width=j(t.width);if(typeof t.plugins=="string"){var l=t.plugins.split(",");if(typeof t.plugins!="object"){t.plugins={}}for(var p=0;p<l.length;p++){var q=e.utils.getPluginName(l[p]);if(typeof t[q]=="object"){t.plugins[l[p]]=t[q];delete t[q]}else{t.plugins[l[p]]={}}}}for(var s=0;s<g.length;s++){var o=g[s];if(e.utils.exists(t[o])){if(typeof t[o]!="object"){if(!t.components[o]){t.components[o]={}}if(o=="logo"){t.components[o].file=t[o]}else{t.components[o].position=t[o]}delete t[o]}else{if(!t.components[o]){t.components[o]={}}e.utils.extend(t.components[o],t[o]);delete t[o]}}if(typeof t[o+"size"]!="undefined"){if(!t.components[o]){t.components[o]={}}t.components[o].size=t[o+"size"];delete t[o+"size"]}}if(typeof t.icons!="undefined"){if(!t.components.display){t.components.display={}}t.components.display.icons=t.icons;delete t.icons}for(var n in a){if(t[n]){if(!t[a[n]]){t[a[n]]=t[n]}delete t[n]}}var m;if(t.flashplayer&&!t.modes){m=h();m[0].src=t.flashplayer;delete t.flashplayer}else{if(t.modes){if(typeof t.modes=="string"){m=h();m[0].src=t.modes}else{if(t.modes instanceof Array){m=t.modes}else{if(typeof t.modes=="object"&&t.modes.type){m=[t.modes]}}}delete t.modes}else{m=h()}}t.modes=m;if(r){t.playlist=r}return t}})(jwplayer);(function(a){a.embed.download=function(c,g,b,d,f){this.embed=function(){var k=a.utils.extend({},b);var q={};var j=b.width?b.width:480;if(typeof j!="number"){j=parseInt(j,10)}var m=b.height?b.height:320;if(typeof m!="number"){m=parseInt(m,10)}var u,o,n;var s={};if(b.playlist&&b.playlist.length){s.file=b.playlist[0].file;o=b.playlist[0].image;s.levels=b.playlist[0].levels}else{s.file=b.file;o=b.image;s.levels=b.levels}if(s.file){u=s.file}else{if(s.levels&&s.levels.length){u=s.levels[0].file}}n=u?"pointer":"auto";var l={display:{style:{cursor:n,width:j,height:m,backgroundColor:"#000",position:"relative",textDecoration:"none",border:"none",display:"block"}},display_icon:{style:{cursor:n,position:"absolute",display:u?"block":"none",top:0,left:0,border:0,margin:0,padding:0,zIndex:3,width:50,height:50,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"}},display_iconBackground:{style:{cursor:n,position:"absolute",display:u?"block":"none",top:((m-50)/2),left:((j-50)/2),border:0,width:50,height:50,margin:0,padding:0,zIndex:2,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"}},display_image:{style:{width:j,height:m,display:o?"block":"none",position:"absolute",cursor:n,left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1,border:"none"}}};var h=function(v,x,y){var w=document.createElement(v);if(y){w.id=y}else{w.id=c.id+"_jwplayer_"+x}a.utils.css(w,l[x].style);return w};q.display=h("a","display",c.id);if(u){q.display.setAttribute("href",a.utils.getAbsolutePath(u))}q.display_image=h("img","display_image");q.display_image.setAttribute("alt","Click to download...");if(o){q.display_image.setAttribute("src",a.utils.getAbsolutePath(o))}if(true){q.display_icon=h("div","display_icon");q.display_iconBackground=h("div","display_iconBackground");q.display.appendChild(q.display_image);q.display_iconBackground.appendChild(q.display_icon);q.display.appendChild(q.display_iconBackground)}_css=a.utils.css;_hide=function(v){_css(v,{display:"none"})};function r(v){_imageWidth=q.display_image.naturalWidth;_imageHeight=q.display_image.naturalHeight;t()}function t(){a.utils.stretch(a.utils.stretching.UNIFORM,q.display_image,j,m,_imageWidth,_imageHeight)}q.display_image.onerror=function(v){_hide(q.display_image)};q.display_image.onload=r;c.parentNode.replaceChild(q.display,c);var p=(b.plugins&&b.plugins.logo)?b.plugins.logo:{};q.display.appendChild(new a.embed.logo(b.components.logo,"download",c.id));f.container=document.getElementById(f.id);f.setPlayer(q.display,"download")};this.supportsConfig=function(){if(b){var j=a.utils.getFirstPlaylistItemFromConfig(b);if(typeof j.file=="undefined"&&typeof j.levels=="undefined"){return true}else{if(j.file){return e(j.file,j.provider,j.playlistfile)}else{if(j.levels&&j.levels.length){for(var h=0;h<j.levels.length;h++){if(j.levels[h].file&&e(j.levels[h].file,j.provider,j.playlistfile)){return true}}}}}}else{return true}};function e(j,l,h){if(h){return false}var k=["image","sound","youtube","http"];if(l&&(k.toString().indexOf(l)>-1)){return true}if(!l||(l&&l=="video")){var m=a.utils.extension(j);if(m&&a.utils.extensionmap[m]){return true}}return false}}})(jwplayer);(function(a){a.embed.flash=function(f,g,l,e,j){function m(o,n,p){var q=document.createElement("param");q.setAttribute("name",n);q.setAttribute("value",p);o.appendChild(q)}function k(o,p,n){return function(q){if(n){document.getElementById(j.id+"_wrapper").appendChild(p)}var s=document.getElementById(j.id).getPluginConfig("display");o.resize(s.width,s.height);var r={left:s.x,top:s.y};a.utils.css(p,r)}}function d(p){if(!p){return{}}var r={};for(var o in p){var n=p[o];for(var q in n){r[o+"."+q]=n[q]}}return r}function h(q,p){if(q[p]){var s=q[p];for(var o in s){var n=s[o];if(typeof n=="string"){if(!q[o]){q[o]=n}}else{for(var r in n){if(!q[o+"."+r]){q[o+"."+r]=n[r]}}}}delete q[p]}}function b(q){if(!q){return{}}var t={},s=[];for(var n in q){var p=a.utils.getPluginName(n);var o=q[n];s.push(n);for(var r in o){t[p+"."+r]=o[r]}}t.plugins=s.join(",");return t}function c(p){var n=p.netstreambasepath?"":"netstreambasepath="+encodeURIComponent(window.location.href.split("#")[0])+"&";for(var o in p){if(typeof(p[o])=="object"){n+=o+"="+encodeURIComponent("[[JSON]]"+a.utils.strings.jsonToString(p[o]))+"&"}else{n+=o+"="+encodeURIComponent(p[o])+"&"}}return n.substring(0,n.length-1)}this.embed=function(){l.id=j.id;var y;var q=a.utils.extend({},l);var n=q.width;var w=q.height;if(f.id+"_wrapper"==f.parentNode.id){y=document.getElementById(f.id+"_wrapper")}else{y=document.createElement("div");y.id=f.id+"_wrapper";a.utils.wrap(f,y);a.utils.css(y,{position:"relative",width:n,height:w})}var o=e.setupPlugins(j,q,k);if(o.length>0){a.utils.extend(q,b(o.plugins))}else{delete q.plugins}var r=["height","width","modes","events"];for(var u=0;u<r.length;u++){delete q[r[u]]}var p="opaque";if(q.wmode){p=q.wmode}h(q,"components");h(q,"providers");if(typeof q["dock.position"]!="undefined"){if(q["dock.position"].toString().toLowerCase()=="false"){q.dock=q["dock.position"];delete q["dock.position"]}}var x="#000000";var t;if(a.utils.isIE()){var v='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+x+'" width="100%" height="100%" id="'+f.id+'" name="'+f.id+'" tabindex=0"">';v+='<param name="movie" value="'+g.src+'">';v+='<param name="allowfullscreen" value="true">';v+='<param name="allowscriptaccess" value="always">';v+='<param name="seamlesstabbing" value="true">';v+='<param name="wmode" value="'+p+'">';v+='<param name="flashvars" value="'+c(q)+'">';v+="</object>";a.utils.setOuterHTML(f,v);t=document.getElementById(f.id)}else{var s=document.createElement("object");s.setAttribute("type","application/x-shockwave-flash");s.setAttribute("data",g.src);s.setAttribute("width","100%");s.setAttribute("height","100%");s.setAttribute("bgcolor","#000000");s.setAttribute("id",f.id);s.setAttribute("name",f.id);s.setAttribute("tabindex",0);m(s,"allowfullscreen","true");m(s,"allowscriptaccess","always");m(s,"seamlesstabbing","true");m(s,"wmode",p);m(s,"flashvars",c(q));f.parentNode.replaceChild(s,f);t=s}j.container=t;j.setPlayer(t,"flash")};this.supportsConfig=function(){if(a.utils.hasFlash()){if(l){var o=a.utils.getFirstPlaylistItemFromConfig(l);if(typeof o.file=="undefined"&&typeof o.levels=="undefined"){return true}else{if(o.file){return flashCanPlay(o.file,o.provider)}else{if(o.levels&&o.levels.length){for(var n=0;n<o.levels.length;n++){if(o.levels[n].file&&flashCanPlay(o.levels[n].file,o.provider)){return true}}}}}}else{return true}}return false};flashCanPlay=function(n,p){var o=["video","http","sound","image"];if(p&&(o.toString().indexOf(p<0))){return true}var q=a.utils.extension(n);if(!q){return true}if(a.utils.exists(a.utils.extensionmap[q])&&!a.utils.exists(a.utils.extensionmap[q].flash)){return false}return true}}})(jwplayer);(function(a){a.embed.html5=function(c,g,b,d,f){function e(j,k,h){return function(l){var m=document.getElementById(c.id+"_displayarea");if(h){m.appendChild(k)}var n=m.style;j.resize(parseInt(n.width.replace("px","")),parseInt(n.height.replace("px","")));k.left=n.left;k.top=n.top}}this.embed=function(){if(a.html5){d.setupPlugins(f,b,e);c.innerHTML="";var j=a.utils.extend({screencolor:"0x000000"},b);var h=["plugins","modes","events"];for(var k=0;k<h.length;k++){delete j[h[k]]}if(j.levels&&!j.sources){j.sources=b.levels}if(j.skin&&j.skin.toLowerCase().indexOf(".zip")>0){j.skin=j.skin.replace(/\.zip/i,".xml")}var l=new (a.html5(c)).setup(j);f.container=document.getElementById(f.id);f.setPlayer(l,"html5")}else{return null}};this.supportsConfig=function(){if(!!a.vid.canPlayType){if(b){var j=a.utils.getFirstPlaylistItemFromConfig(b);if(typeof j.file=="undefined"&&typeof j.levels=="undefined"){return true}else{if(j.file){return html5CanPlay(a.vid,j.file,j.provider,j.playlistfile)}else{if(j.levels&&j.levels.length){for(var h=0;h<j.levels.length;h++){if(j.levels[h].file&&html5CanPlay(a.vid,j.levels[h].file,j.provider,j.playlistfile)){return true}}}}}}else{return true}}return false};html5CanPlay=function(k,j,l,h){if(h){return false}if(l&&l=="youtube"){return true}if(l&&l!="video"&&l!="http"&&l!="sound"){return false}var m=a.utils.extension(j);if(!a.utils.exists(m)||!a.utils.exists(a.utils.extensionmap[m])){return true}if(!a.utils.exists(a.utils.extensionmap[m].html5)){return false}if(a.utils.isLegacyAndroid()&&m.match(/m4v|mp4/)){return true}return browserCanPlay(k,a.utils.extensionmap[m].html5)};browserCanPlay=function(j,h){if(!h){return true}if(j.canPlayType(h)){return true}else{if(h=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return j.canPlayType("audio/mpeg")}else{return false}}}}})(jwplayer);(function(a){a.embed.logo=function(m,l,d){var j={prefix:"http://l.longtailvideo.com/"+l+"/",file:"logo.png",link:"http://www.longtailvideo.com/players/jw-flv-player/",margin:8,out:0.5,over:1,timeout:5,hide:false,position:"bottom-left"};_css=a.utils.css;var b;var h;k();function k(){o();c();f()}function o(){if(j.prefix){var q=a.version.split(/\W/).splice(0,2).join("/");if(j.prefix.indexOf(q)<0){j.prefix+=q+"/"}}h=a.utils.extend({},j)}function p(){var s={border:"none",textDecoration:"none",position:"absolute",cursor:"pointer",zIndex:10};s.display=h.hide?"none":"block";var r=h.position.toLowerCase().split("-");for(var q in r){s[r[q]]=h.margin}return s}function c(){b=document.createElement("img");b.id=d+"_jwplayer_logo";b.style.display="none";b.onload=function(q){_css(b,p());e()};if(!h.file){return}if(h.file.indexOf("http://")===0){b.src=h.file}else{b.src=h.prefix+h.file}}if(!h.file){return}function f(){if(h.link){b.onmouseover=g;b.onmouseout=e;b.onclick=n}else{this.mouseEnabled=false}}function n(q){if(typeof q!="undefined"){q.preventDefault();q.stopPropagation()}if(h.link){window.open(h.link,"_blank")}return}function e(q){if(h.link){b.style.opacity=h.out}return}function g(q){if(h.hide){b.style.opacity=h.over}return}return b}})(jwplayer);(function(a){a.html5=function(b){var c=b;this.setup=function(d){a.utils.extend(this,new a.html5.api(c,d));return this};return this}})(jwplayer);(function(b){var d=b.utils;var c=d.css;b.html5.view=function(r,q,f){var u=r;var n=q;var x=f;var w;var g;var C;var s;var D;var p;var A;function z(){w=document.createElement("div");w.id=n.id;w.className=n.className;_videowrapper=document.createElement("div");_videowrapper.id=w.id+"_video_wrapper";n.id=w.id+"_video";c(w,{position:"relative",height:x.height,width:x.width,padding:0,backgroundColor:E(),zIndex:0});function E(){if(u.skin.getComponentSettings("display")&&u.skin.getComponentSettings("display").backgroundcolor){return u.skin.getComponentSettings("display").backgroundcolor}return parseInt("000000",16)}c(n,{width:x.width,height:x.height,top:0,left:0,zIndex:1,margin:"auto",display:"block"});c(_videowrapper,{overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0});d.wrap(n,w);d.wrap(n,_videowrapper);s=document.createElement("div");s.id=w.id+"_displayarea";w.appendChild(s)}function k(){for(var E=0;E<x.plugins.order.length;E++){var F=x.plugins.order[E];if(d.exists(x.plugins.object[F].getDisplayElement)){x.plugins.object[F].height=d.parseDimension(x.plugins.object[F].getDisplayElement().style.height);x.plugins.object[F].width=d.parseDimension(x.plugins.object[F].getDisplayElement().style.width);x.plugins.config[F].currentPosition=x.plugins.config[F].position}}v()}function m(E){c(s,{display:x.getMedia().hasChrome()?"none":"block"})}function v(F){var H=x.getMedia()?x.getMedia().getDisplayElement():null;if(d.exists(H)){if(A!=H){if(A&&A.parentNode){A.parentNode.replaceChild(H,A)}A=H}for(var E=0;E<x.plugins.order.length;E++){var G=x.plugins.order[E];if(d.exists(x.plugins.object[G].getDisplayElement)){x.plugins.config[G].currentPosition=x.plugins.config[G].position}}}j(x.width,x.height)}this.setup=function(){if(x&&x.getMedia()){n=x.getMedia().getDisplayElement()}z();k();u.jwAddEventListener(b.api.events.JWPLAYER_PLAYER_STATE,m);u.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_LOADED,v);u.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_META,function(){y()});var E;if(d.exists(window.onresize)){E=window.onresize}window.onresize=function(F){if(d.exists(E)){try{E(F)}catch(H){}}if(u.jwGetFullscreen()){var G=document.body.getBoundingClientRect();x.width=Math.abs(G.left)+Math.abs(G.right);x.height=window.innerHeight}j(x.width,x.height)}};function h(E){switch(E.keyCode){case 27:if(u.jwGetFullscreen()){u.jwSetFullscreen(false)}break;case 32:if(u.jwGetState()!=b.api.events.state.IDLE&&u.jwGetState()!=b.api.events.state.PAUSED){u.jwPause()}else{u.jwPlay()}break}}function j(H,E){if(w.style.display=="none"){return}var G=[].concat(x.plugins.order);G.reverse();D=G.length+2;if(!x.fullscreen){x.width=H;x.height=E;g=H;C=E;c(s,{top:0,bottom:0,left:0,right:0,width:H,height:E,position:"relative"});c(w,{height:C,width:g});var F=o(t,G);if(F.length>0){D+=F.length;var J=F.indexOf("playlist"),I=F.indexOf("controlbar");if(J>=0&&I>=0){F[J]=F.splice(I,1,F[J])[0]}o(l,F,true)}}else{if(!(navigator&&navigator.vendor&&navigator.vendor.indexOf("Apple")==0)){o(B,G,true)}}y()}function o(J,G,H){var F=[];for(var E=0;E<G.length;E++){var K=G[E];if(d.exists(x.plugins.object[K].getDisplayElement)){if(x.plugins.config[K].currentPosition!=b.html5.view.positions.NONE){var I=J(K,D--);if(!I){F.push(K)}else{x.plugins.object[K].resize(I.width,I.height);if(H){delete I.width;delete I.height}c(x.plugins.object[K].getDisplayElement(),I)}}else{c(x.plugins.object[K].getDisplayElement(),{display:"none"})}}}return F}function t(F,G){if(d.exists(x.plugins.object[F].getDisplayElement)){if(x.plugins.config[F].position&&a(x.plugins.config[F].position)){if(!d.exists(x.plugins.object[F].getDisplayElement().parentNode)){w.appendChild(x.plugins.object[F].getDisplayElement())}var E=e(F);E.zIndex=G;return E}}return false}function l(G,H){if(!d.exists(x.plugins.object[G].getDisplayElement().parentNode)){s.appendChild(x.plugins.object[G].getDisplayElement())}var E=x.width,F=x.height;if(typeof x.width=="string"&&x.width.lastIndexOf("%")>-1){percentage=parseFloat(x.width.substring(0,x.width.lastIndexOf("%")))/100;E=Math.round(window.innerWidth*percentage)}if(typeof x.height=="string"&&x.height.lastIndexOf("%")>-1){percentage=parseFloat(x.height.substring(0,x.height.lastIndexOf("%")))/100;F=Math.round(window.innerHeight*percentage)}return{position:"absolute",width:(E-d.parseDimension(s.style.left)-d.parseDimension(s.style.right)),height:(F-d.parseDimension(s.style.top)-d.parseDimension(s.style.bottom)),zIndex:H}}function B(E,F){return{position:"fixed",width:x.width,height:x.height,zIndex:F}}function y(){if(!d.exists(x.getMedia())){return}s.style.position="absolute";var H=x.getMedia().getDisplayElement();if(H&&H.tagName.toLowerCase()=="video"){H.style.position="absolute";var E,I;if(s.style.width.toString().lastIndexOf("%")>-1||s.style.width.toString().lastIndexOf("%")>-1){var F=s.getBoundingClientRect();E=Math.abs(F.left)+Math.abs(F.right);I=Math.abs(F.top)+Math.abs(F.bottom)}else{E=d.parseDimension(s.style.width);I=d.parseDimension(s.style.height)}if(H.parentNode){H.parentNode.style.left=s.style.left;H.parentNode.style.top=s.style.top}d.stretch(u.jwGetStretching(),H,E,I,H.videoWidth?H.videoWidth:400,H.videoHeight?H.videoHeight:300)}else{var G=x.plugins.object.display.getDisplayElement();if(G){x.getMedia().resize(d.parseDimension(G.style.width),d.parseDimension(G.style.height))}else{x.getMedia().resize(d.parseDimension(s.style.width),d.parseDimension(s.style.height))}}}function e(F){var G={position:"absolute",margin:0,padding:0,top:null};var E=x.plugins.config[F].currentPosition.toLowerCase();switch(E.toUpperCase()){case b.html5.view.positions.TOP:G.top=d.parseDimension(s.style.top);G.left=d.parseDimension(s.style.left);G.width=g-d.parseDimension(s.style.left)-d.parseDimension(s.style.right);G.height=x.plugins.object[F].height;s.style[E]=d.parseDimension(s.style[E])+x.plugins.object[F].height+"px";s.style.height=d.parseDimension(s.style.height)-G.height+"px";break;case b.html5.view.positions.RIGHT:G.top=d.parseDimension(s.style.top);G.right=d.parseDimension(s.style.right);G.width=x.plugins.object[F].width;G.height=C-d.parseDimension(s.style.top)-d.parseDimension(s.style.bottom);s.style[E]=d.parseDimension(s.style[E])+x.plugins.object[F].width+"px";s.style.width=d.parseDimension(s.style.width)-G.width+"px";break;case b.html5.view.positions.BOTTOM:G.bottom=d.parseDimension(s.style.bottom);G.left=d.parseDimension(s.style.left);G.width=g-d.parseDimension(s.style.left)-d.parseDimension(s.style.right);G.height=x.plugins.object[F].height;s.style[E]=d.parseDimension(s.style[E])+x.plugins.object[F].height+"px";s.style.height=d.parseDimension(s.style.height)-G.height+"px";break;case b.html5.view.positions.LEFT:G.top=d.parseDimension(s.style.top);G.left=d.parseDimension(s.style.left);G.width=x.plugins.object[F].width;G.height=C-d.parseDimension(s.style.top)-d.parseDimension(s.style.bottom);s.style[E]=d.parseDimension(s.style[E])+x.plugins.object[F].width+"px";s.style.width=d.parseDimension(s.style.width)-G.width+"px";break;default:break}return G}this.resize=j;this.fullscreen=function(H){if(navigator&&navigator.vendor&&navigator.vendor.indexOf("Apple")===0){if(x.getMedia().getDisplayElement().webkitSupportsFullscreen){if(H){try{x.getMedia().getDisplayElement().webkitEnterFullscreen()}catch(G){}}else{try{x.getMedia().getDisplayElement().webkitExitFullscreen()}catch(G){}}}}else{if(H){document.onkeydown=h;clearInterval(p);var F=document.body.getBoundingClientRect();x.width=Math.abs(F.left)+Math.abs(F.right);x.height=window.innerHeight;var E={position:"fixed",width:"100%",height:"100%",top:0,left:0,zIndex:2147483000};c(w,E);E.zIndex=1;if(x.getMedia()&&x.getMedia().getDisplayElement()){c(x.getMedia().getDisplayElement(),E)}E.zIndex=2;c(s,E)}else{document.onkeydown="";x.width=g;x.height=C;c(w,{position:"relative",height:x.height,width:x.width,zIndex:0})}j(x.width,x.height)}}};function a(e){return([b.html5.view.positions.TOP,b.html5.view.positions.RIGHT,b.html5.view.positions.BOTTOM,b.html5.view.positions.LEFT].toString().indexOf(e.toUpperCase())>-1)}b.html5.view.positions={TOP:"TOP",RIGHT:"RIGHT",BOTTOM:"BOTTOM",LEFT:"LEFT",OVER:"OVER",NONE:"NONE"}})(jwplayer);(function(a){var b={backgroundcolor:"",margin:10,font:"Arial,sans-serif",fontsize:10,fontcolor:parseInt("000000",16),fontstyle:"normal",fontweight:"bold",buttoncolor:parseInt("ffffff",16),position:a.html5.view.positions.BOTTOM,idlehide:false,layout:{left:{position:"left",elements:[{name:"play",type:"button"},{name:"divider",type:"divider"},{name:"prev",type:"button"},{name:"divider",type:"divider"},{name:"next",type:"button"},{name:"divider",type:"divider"},{name:"elapsed",type:"text"}]},center:{position:"center",elements:[{name:"time",type:"slider"}]},right:{position:"right",elements:[{name:"duration",type:"text"},{name:"blank",type:"button"},{name:"divider",type:"divider"},{name:"mute",type:"button"},{name:"volume",type:"slider"},{name:"divider",type:"divider"},{name:"fullscreen",type:"button"}]}}};_utils=a.utils;_css=_utils.css;_hide=function(c){_css(c,{display:"none"})};_show=function(c){_css(c,{display:"block"})};a.html5.controlbar=function(l,V){var k=l;var D=_utils.extend({},b,k.skin.getComponentSettings("controlbar"),V);if(D.position==a.html5.view.positions.NONE||typeof a.html5.view.positions[D.position]=="undefined"){return}if(_utils.mapLength(k.skin.getComponentLayout("controlbar"))>0){D.layout=k.skin.getComponentLayout("controlbar")}var ac;var P;var ab;var E;var v="none";var g;var j;var ad;var f;var e;var y;var Q={};var p=false;var c={};var Y;var h=false;var o;var d;var S=false;var G=false;var W=new a.html5.eventdispatcher();_utils.extend(this,W);function J(){if(!Y){Y=k.skin.getSkinElement("controlbar","background");if(!Y){Y={width:0,height:0,src:null}}}return Y}function N(){ab=0;E=0;P=0;if(!p){var ak={height:J().height,backgroundColor:D.backgroundcolor};ac=document.createElement("div");ac.id=k.id+"_jwplayer_controlbar";_css(ac,ak)}var aj=(k.skin.getSkinElement("controlbar","capLeft"));var ai=(k.skin.getSkinElement("controlbar","capRight"));if(aj){x("capLeft","left",false,ac)}var al={position:"absolute",height:J().height,left:(aj?aj.width:0),zIndex:0};Z("background",ac,al,"img");if(J().src){Q.background.src=J().src}al.zIndex=1;Z("elements",ac,al);if(ai){x("capRight","right",false,ac)}}this.getDisplayElement=function(){return ac};this.resize=function(ak,ai){_utils.cancelAnimation(ac);document.getElementById(k.id).onmousemove=A;e=ak;y=ai;if(G!=k.jwGetFullscreen()){G=k.jwGetFullscreen();d=undefined}var aj=w();A();I({id:k.id,duration:ad,position:j});u({id:k.id,bufferPercent:f});return aj};this.show=function(){if(h){h=false;_show(ac);T()}};this.hide=function(){if(!h){h=true;_hide(ac);aa()}};function q(){var aj=["timeSlider","volumeSlider","timeSliderRail","volumeSliderRail"];for(var ak in aj){var ai=aj[ak];if(typeof Q[ai]!="undefined"){c[ai]=Q[ai].getBoundingClientRect()}}}function A(ai){if(h){return}if(D.position==a.html5.view.positions.OVER||k.jwGetFullscreen()){clearTimeout(o);switch(k.jwGetState()){case a.api.events.state.PAUSED:case a.api.events.state.IDLE:if(!D.idlehide||_utils.exists(ai)){U()}if(D.idlehide){o=setTimeout(function(){z()},2000)}break;default:if(ai){U()}o=setTimeout(function(){z()},2000);break}}}function z(ai){aa();_utils.cancelAnimation(ac);_utils.fadeTo(ac,0,0.1,1,0)}function U(){T();_utils.cancelAnimation(ac);_utils.fadeTo(ac,1,0,1,0)}function H(ai){return function(){if(S&&d!=ai){d=ai;W.sendEvent(ai,{component:"controlbar",boundingRect:O()})}}}var T=H(a.api.events.JWPLAYER_COMPONENT_SHOW);var aa=H(a.api.events.JWPLAYER_COMPONENT_HIDE);function O(){if(D.position==a.html5.view.positions.OVER||k.jwGetFullscreen()){return _utils.getDimensions(ac)}else{return{x:0,y:0,width:0,height:0}}}function Z(am,al,ak,ai){var aj;if(!p){if(!ai){ai="div"}aj=document.createElement(ai);Q[am]=aj;aj.id=ac.id+"_"+am;al.appendChild(aj)}else{aj=document.getElementById(ac.id+"_"+am)}if(_utils.exists(ak)){_css(aj,ak)}return aj}function M(){ah(D.layout.left);ah(D.layout.right,-1);ah(D.layout.center)}function ah(al,ai){var am=al.position=="right"?"right":"left";var ak=_utils.extend([],al.elements);if(_utils.exists(ai)){ak.reverse()}for(var aj=0;aj<ak.length;aj++){C(ak[aj],am)}}function K(){return P++}function C(am,ao){var al,aj,ak,ai,aq;if(am.type=="divider"){x("divider"+K(),ao,true,undefined,undefined,am.width,am.element);return}switch(am.name){case"play":x("playButton",ao,false);x("pauseButton",ao,true);R("playButton","jwPlay");R("pauseButton","jwPause");break;case"prev":x("prevButton",ao,true);R("prevButton","jwPlaylistPrev");break;case"stop":x("stopButton",ao,true);R("stopButton","jwStop");break;case"next":x("nextButton",ao,true);R("nextButton","jwPlaylistNext");break;case"elapsed":x("elapsedText",ao,true);break;case"time":aj=!_utils.exists(k.skin.getSkinElement("controlbar","timeSliderCapLeft"))?0:k.skin.getSkinElement("controlbar","timeSliderCapLeft").width;ak=!_utils.exists(k.skin.getSkinElement("controlbar","timeSliderCapRight"))?0:k.skin.getSkinElement("controlbar","timeSliderCapRight").width;al=ao=="left"?aj:ak;ai=k.skin.getSkinElement("controlbar","timeSliderRail").width+aj+ak;aq={height:J().height,position:"absolute",top:0,width:ai};aq[ao]=ao=="left"?ab:E;var an=Z("timeSlider",Q.elements,aq);x("timeSliderCapLeft",ao,true,an,ao=="left"?0:al);x("timeSliderRail",ao,false,an,al);x("timeSliderBuffer",ao,false,an,al);x("timeSliderProgress",ao,false,an,al);x("timeSliderThumb",ao,false,an,al);x("timeSliderCapRight",ao,true,an,ao=="right"?0:al);X("time");break;case"fullscreen":x("fullscreenButton",ao,false);x("normalscreenButton",ao,true);R("fullscreenButton","jwSetFullscreen",true);R("normalscreenButton","jwSetFullscreen",false);break;case"volume":aj=!_utils.exists(k.skin.getSkinElement("controlbar","volumeSliderCapLeft"))?0:k.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;ak=!_utils.exists(k.skin.getSkinElement("controlbar","volumeSliderCapRight"))?0:k.skin.getSkinElement("controlbar","volumeSliderCapRight").width;al=ao=="left"?aj:ak;ai=k.skin.getSkinElement("controlbar","volumeSliderRail").width+aj+ak;aq={height:J().height,position:"absolute",top:0,width:ai};aq[ao]=ao=="left"?ab:E;var ap=Z("volumeSlider",Q.elements,aq);x("volumeSliderCapLeft",ao,true,ap,ao=="left"?0:al);x("volumeSliderRail",ao,true,ap,al);x("volumeSliderProgress",ao,false,ap,al);x("volumeSliderCapRight",ao,true,ap,ao=="right"?0:al);X("volume");break;case"mute":x("muteButton",ao,false);x("unmuteButton",ao,true);R("muteButton","jwSetMute",true);R("unmuteButton","jwSetMute",false);break;case"duration":x("durationText",ao,true);break}}function x(al,ao,aj,ar,am,ai,ak){if(_utils.exists(k.skin.getSkinElement("controlbar",al))||al.indexOf("Text")>0||al.indexOf("divider")===0){var an={height:J().height,position:"absolute",display:"block",top:0};if((al.indexOf("next")===0||al.indexOf("prev")===0)&&k.jwGetPlaylist().length<2){aj=false;an.display="none"}var at;if(al.indexOf("Text")>0){al.innerhtml="00:00";an.font=D.fontsize+"px/"+(J().height+1)+"px "+D.font;an.color=D.fontcolor;an.textAlign="center";an.fontWeight=D.fontweight;an.fontStyle=D.fontstyle;an.cursor="default";at=14+3*D.fontsize}else{if(al.indexOf("divider")===0){if(ai){if(!isNaN(parseInt(ai))){at=parseInt(ai)}}else{if(ak){var ap=k.skin.getSkinElement("controlbar",ak);if(ap){an.background="url("+ap.src+") repeat-x center left";at=ap.width}}else{an.background="url("+k.skin.getSkinElement("controlbar","divider").src+") repeat-x center left";at=k.skin.getSkinElement("controlbar","divider").width}}}else{an.background="url("+k.skin.getSkinElement("controlbar",al).src+") repeat-x center left";at=k.skin.getSkinElement("controlbar",al).width}}if(ao=="left"){an.left=isNaN(am)?ab:am;if(aj){ab+=at}}else{if(ao=="right"){an.right=isNaN(am)?E:am;if(aj){E+=at}}}if(_utils.typeOf(ar)=="undefined"){ar=Q.elements}an.width=at;if(p){_css(Q[al],an)}else{var aq=Z(al,ar,an);if(_utils.exists(k.skin.getSkinElement("controlbar",al+"Over"))){aq.onmouseover=function(au){aq.style.backgroundImage=["url(",k.skin.getSkinElement("controlbar",al+"Over").src,")"].join("")};aq.onmouseout=function(au){aq.style.backgroundImage=["url(",k.skin.getSkinElement("controlbar",al).src,")"].join("")}}}}}function F(){k.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,B);k.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,s);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER,u);k.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,r);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_TIME,I);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,ag);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_VOLUME,m);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE,L)}function B(){N();M();w();ae()}function s(ai){ad=k.jwGetPlaylist()[ai.index].duration;I({id:k.id,duration:ad,position:0});u({id:k.id,bufferProgress:0})}function ae(){I({id:k.id,duration:k.jwGetDuration(),position:0});u({id:k.id,bufferProgress:0});ag({id:k.id,mute:k.jwGetMute()});r({id:k.id,newstate:a.api.events.state.IDLE});m({id:k.id,volume:k.jwGetVolume()})}function R(ak,al,aj){if(p){return}if(_utils.exists(k.skin.getSkinElement("controlbar",ak))){var ai=Q[ak];if(_utils.exists(ai)){_css(ai,{cursor:"pointer"});if(al=="fullscreen"){ai.onmouseup=function(am){am.stopPropagation();k.jwSetFullscreen(!k.jwGetFullscreen())}}else{ai.onmouseup=function(am){am.stopPropagation();if(_utils.exists(aj)){k[al](aj)}else{k[al]()}}}}}}function X(ai){if(p){return}var aj=Q[ai+"Slider"];_css(Q.elements,{cursor:"pointer"});_css(aj,{cursor:"pointer"});aj.onmousedown=function(ak){v=ai};aj.onmouseup=function(ak){ak.stopPropagation();af(ak.pageX)};aj.onmousemove=function(ak){if(v=="time"){g=true;var al=ak.pageX-c[ai+"Slider"].left-window.pageXOffset;_css(Q.timeSliderThumb,{left:al})}}}function af(aj){g=false;var ai;if(v=="time"){ai=aj-c.timeSliderRail.left+window.pageXOffset;var al=ai/c.timeSliderRail.width*ad;if(al<0){al=0}else{if(al>ad){al=ad-3}}if(k.jwGetState()==a.api.events.state.PAUSED||k.jwGetState()==a.api.events.state.IDLE){k.jwPlay()}k.jwSeek(al)}else{if(v=="volume"){ai=aj-c.volumeSliderRail.left-window.pageXOffset;var ak=Math.round(ai/c.volumeSliderRail.width*100);if(ak<0){ak=0}else{if(ak>100){ak=100}}if(k.jwGetMute()){k.jwSetMute(false)}k.jwSetVolume(ak)}}v="none"}function u(aj){if(_utils.exists(aj.bufferPercent)){f=aj.bufferPercent}if(c.timeSliderRail){var ak=c.timeSliderRail.width;var ai=isNaN(Math.round(ak*f/100))?0:Math.round(ak*f/100);_css(Q.timeSliderBuffer,{width:ai})}}function ag(ai){if(ai.mute){_hide(Q.muteButton);_show(Q.unmuteButton);_hide(Q.volumeSliderProgress)}else{_show(Q.muteButton);_hide(Q.unmuteButton);_show(Q.volumeSliderProgress)}}function r(ai){if(ai.newstate==a.api.events.state.BUFFERING||ai.newstate==a.api.events.state.PLAYING){_show(Q.pauseButton);_hide(Q.playButton)}else{_hide(Q.pauseButton);_show(Q.playButton)}A();if(ai.newstate==a.api.events.state.IDLE){_hide(Q.timeSliderBuffer);_hide(Q.timeSliderProgress);_hide(Q.timeSliderThumb);I({id:k.id,duration:k.jwGetDuration(),position:0})}else{_show(Q.timeSliderBuffer);if(ai.newstate!=a.api.events.state.BUFFERING){_show(Q.timeSliderProgress);_show(Q.timeSliderThumb)}}}function L(ai){u({bufferPercent:0});I(_utils.extend(ai,{position:0,duration:ad}))}function I(al){if(_utils.exists(al.position)){j=al.position}if(_utils.exists(al.duration)){ad=al.duration}var aj=(j===ad===0)?0:j/ad;var am=c.timeSliderRail;if(am){var ai=isNaN(Math.round(am.width*aj))?0:Math.round(am.width*aj);var ak=ai;if(Q.timeSliderProgress){Q.timeSliderProgress.style.width=ai+"px";if(!g){if(Q.timeSliderThumb){Q.timeSliderThumb.style.left=ak+"px"}}}}if(Q.durationText){Q.durationText.innerHTML=_utils.timeFormat(ad)}if(Q.elapsedText){Q.elapsedText.innerHTML=_utils.timeFormat(j)}}function n(){var am,aj;var ak=document.getElementById(ac.id+"_elements");if(!ak){return}var al=ak.childNodes;for(var ai in ak.childNodes){if(isNaN(parseInt(ai,10))){continue}if(al[ai].id.indexOf(ac.id+"_divider")===0&&aj&&aj.id.indexOf(ac.id+"_divider")===0&&al[ai].style.backgroundImage==aj.style.backgroundImage){al[ai].style.display="none"}else{if(al[ai].id.indexOf(ac.id+"_divider")===0&&am&&am.style.display!="none"){al[ai].style.display="block"}}if(al[ai].style.display!="none"){aj=al[ai]}am=al[ai]}}function w(){n();if(k.jwGetFullscreen()){_show(Q.normalscreenButton);_hide(Q.fullscreenButton)}else{_hide(Q.normalscreenButton);_show(Q.fullscreenButton)}var aj={width:e};var ai={};if(D.position==a.html5.view.positions.OVER||k.jwGetFullscreen()){aj.left=D.margin;aj.width-=2*D.margin;aj.top=y-J().height-D.margin;aj.height=J().height}var al=k.skin.getSkinElement("controlbar","capLeft");var ak=k.skin.getSkinElement("controlbar","capRight");ai.left=al?al.width:0;ai.width=aj.width-ai.left-(ak?ak.width:0);var am=!_utils.exists(k.skin.getSkinElement("controlbar","timeSliderCapLeft"))?0:k.skin.getSkinElement("controlbar","timeSliderCapLeft").width;_css(Q.timeSliderRail,{width:(ai.width-ab-E),left:am});if(_utils.exists(Q.timeSliderCapRight)){_css(Q.timeSliderCapRight,{left:am+(ai.width-ab-E)})}_css(ac,aj);_css(Q.elements,ai);_css(Q.background,ai);q();return aj}function m(am){if(_utils.exists(Q.volumeSliderRail)){var ak=isNaN(am.volume/100)?1:am.volume/100;var al=_utils.parseDimension(Q.volumeSliderRail.style.width);var ai=isNaN(Math.round(al*ak))?0:Math.round(al*ak);var an=_utils.parseDimension(Q.volumeSliderRail.style.right);var aj=(!_utils.exists(k.skin.getSkinElement("controlbar","volumeSliderCapLeft")))?0:k.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;_css(Q.volumeSliderProgress,{width:ai,left:aj});if(_utils.exists(Q.volumeSliderCapLeft)){_css(Q.volumeSliderCapLeft,{left:0})}}}function t(){N();M();q();p=true;F();D.idlehide=(D.idlehide.toString().toLowerCase()=="true");if(D.position==a.html5.view.positions.OVER&&D.idlehide){ac.style.opacity=0;S=true}else{setTimeout((function(){S=true;T()}),1)}ae()}t();return this}})(jwplayer);(function(b){var a=["width","height","state","playlist","item","position","buffer","duration","volume","mute","fullscreen"];var c=b.utils;b.html5.controller=function(z,w,h,v){var C=z;var G=h;var g=v;var o=w;var J=true;var e=-1;var A=c.exists(G.config.debug)&&(G.config.debug.toString().toLowerCase()=="console");var m=new b.html5.eventdispatcher(o.id,A);c.extend(this,m);var E=[];var d=false;function r(M){if(d){m.sendEvent(M.type,M)}else{E.push(M)}}function K(M){if(!d){m.sendEvent(b.api.events.JWPLAYER_READY,M);if(b.utils.exists(window.playerReady)){playerReady(M)}if(b.utils.exists(window[h.config.playerReady])){window[h.config.playerReady](M)}while(E.length>0){var O=E.shift();m.sendEvent(O.type,O)}if(h.config.autostart&&!b.utils.isIOS()){t(G.item)}while(p.length>0){var N=p.shift();x(N.method,N.arguments)}d=true}}G.addGlobalListener(r);G.addEventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,function(){G.getMedia().play()});G.addEventListener(b.api.events.JWPLAYER_MEDIA_TIME,function(M){if(M.position>=G.playlist[G.item].start&&e>=0){G.playlist[G.item].start=e;e=-1}});G.addEventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,function(M){setTimeout(s,25)});function u(){try{f(G.item);if(G.playlist[G.item].levels[0].file.length>0){if(J||G.state==b.api.events.state.IDLE){G.getMedia().load(G.playlist[G.item]);J=false}else{if(G.state==b.api.events.state.PAUSED){G.getMedia().play()}}}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function I(){try{if(G.playlist[G.item].levels[0].file.length>0){switch(G.state){case b.api.events.state.PLAYING:case b.api.events.state.BUFFERING:G.getMedia().pause();break}}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function D(M){try{if(G.playlist[G.item].levels[0].file.length>0){if(typeof M!="number"){M=parseFloat(M)}switch(G.state){case b.api.events.state.IDLE:if(e<0){e=G.playlist[G.item].start;G.playlist[G.item].start=M}u();break;case b.api.events.state.PLAYING:case b.api.events.state.PAUSED:case b.api.events.state.BUFFERING:G.seek(M);break}}return true}catch(N){m.sendEvent(b.api.events.JWPLAYER_ERROR,N)}return false}function n(M){if(!c.exists(M)){M=true}try{G.getMedia().stop(M);return true}catch(N){m.sendEvent(b.api.events.JWPLAYER_ERROR,N)}return false}function k(){try{if(G.playlist[G.item].levels[0].file.length>0){if(G.config.shuffle){f(y())}else{if(G.item+1==G.playlist.length){f(0)}else{f(G.item+1)}}}if(G.state!=b.api.events.state.IDLE){var N=G.state;G.state=b.api.events.state.IDLE;m.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:N,newstate:b.api.events.state.IDLE})}u();return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function j(){try{if(G.playlist[G.item].levels[0].file.length>0){if(G.config.shuffle){f(y())}else{if(G.item===0){f(G.playlist.length-1)}else{f(G.item-1)}}}if(G.state!=b.api.events.state.IDLE){var N=G.state;G.state=b.api.events.state.IDLE;m.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:N,newstate:b.api.events.state.IDLE})}u();return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function y(){var M=null;if(G.playlist.length>1){while(!c.exists(M)){M=Math.floor(Math.random()*G.playlist.length);if(M==G.item){M=null}}}else{M=0}return M}function t(N){if(!G.playlist||!G.playlist[N]){return false}try{if(G.playlist[N].levels[0].file.length>0){var O=G.state;if(O!==b.api.events.state.IDLE){if(G.playlist[G.item].provider==G.playlist[N].provider){n(false)}else{n()}}f(N);u()}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function f(M){if(!G.playlist[M]){return}G.setActiveMediaProvider(G.playlist[M]);if(G.item!=M){G.item=M;J=true;m.sendEvent(b.api.events.JWPLAYER_PLAYLIST_ITEM,{index:M})}}function H(N){try{f(G.item);var O=G.getMedia();switch(typeof(N)){case"number":O.volume(N);break;case"string":O.volume(parseInt(N,10));break}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function q(N){try{f(G.item);var O=G.getMedia();if(typeof N=="undefined"){O.mute(!G.mute)}else{if(N.toString().toLowerCase()=="true"){O.mute(true)}else{O.mute(false)}}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function l(N,M){try{G.width=N;G.height=M;g.resize(N,M);m.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:G.width,height:G.height});return true}catch(O){m.sendEvent(b.api.events.JWPLAYER_ERROR,O)}return false}function B(N){try{if(typeof N=="undefined"){G.fullscreen=!G.fullscreen;g.fullscreen(!G.fullscreen)}else{if(N.toString().toLowerCase()=="true"){G.fullscreen=true;g.fullscreen(true)}else{G.fullscreen=false;g.fullscreen(false)}}m.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:G.width,height:G.height});m.sendEvent(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:N});return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function L(M){try{n();G.loadPlaylist(M);f(G.item);return true}catch(N){m.sendEvent(b.api.events.JWPLAYER_ERROR,N)}return false}b.html5.controller.repeatoptions={LIST:"LIST",ALWAYS:"ALWAYS",SINGLE:"SINGLE",NONE:"NONE"};function s(){switch(G.config.repeat.toUpperCase()){case b.html5.controller.repeatoptions.SINGLE:u();break;case b.html5.controller.repeatoptions.ALWAYS:if(G.item==G.playlist.length-1&&!G.config.shuffle){t(0)}else{k()}break;case b.html5.controller.repeatoptions.LIST:if(G.item==G.playlist.length-1&&!G.config.shuffle){n();f(0)}else{k()}break;default:n();break}}var p=[];function F(M){return function(){if(d){x(M,arguments)}else{p.push({method:M,arguments:arguments})}}}function x(O,N){var M=[];for(i=0;i<N.length;i++){M.push(N[i])}O.apply(this,M)}this.play=F(u);this.pause=F(I);this.seek=F(D);this.stop=F(n);this.next=F(k);this.prev=F(j);this.item=F(t);this.setVolume=F(H);this.setMute=F(q);this.resize=F(l);this.setFullscreen=F(B);this.load=F(L);this.playerReady=K}})(jwplayer);(function(a){a.html5.defaultSkin=function(){this.text='<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.0"><settings><setting name="backcolor" value="0xFFFFFF"/><setting name="frontcolor" value="0x000000"/><setting name="lightcolor" value="0x000000"/><setting name="screencolor" value="0x000000"/></settings><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/></settings><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFJJREFUeNrslLENwAAIwxLU/09j5AiOgD5hVQzNAVY8JK4qEfHMIKBnd2+BQlBINaiRtL/aV2rdzYBsM6CIONbI1NZENTr3RwdB2PlnJgJ6BRgA4hwu5Qg5iswAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEhJREFUeNpiYqABYBo1dNRQ+hr6H4jvA3E8NS39j4SpZvh/LJig4YxEGEqy3kET+w+AOGFQRhTJhrEQkGcczfujhg4CQwECDADpTRWU/B3wHQAAAABJRU5ErkJggg=="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiYBgFo2DwA0YC8v/R1P4nRu+ooaOGUtnQUTAKhgIACDAAFCwQCfAJ4gwAAAAASUVORK5CYII="/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEtJREFUeNpiYBgFo2Dog/9QDAPyQHweTYwiQ/2B+D0Wi8g2tB+JTdBQRiIMJVkvEy0iglhDF9Aq9uOpHVEwoE+NJDUKRsFgAAABBgDe2hqZcNNL0AAAAABJRU5ErkJggg=="/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUeNpiYBgFo2Dog/9AfB6I5dHE/lNqKAi/B2J/ahsKw/3EGMpIhKEk66WJoaR6fz61IyqemhEFSlL61ExSo2AUDAYAEGAAiG4hj+5t7M8AAAAASUVORK5CYII="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADxJREFUeNpiYBgFo2AU0Bwwzluw+D8tLWARFhKiqQ9YuLg4aWsBGxs7bS1gZ6e5BWyjSX0UjIKhDgACDABlYQOGh5pYywAAAABJRU5ErkJggg=="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYBgFo2AU0Bww1jc0/aelBSz8/Pw09QELOzs7bS1gY2OjrQWsrKy09gHraFIfBaNgqAOAAAMAvy0DChXHsZMAAAAASUVORK5CYII="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAClJREFUeNpiYBgFo2AU0BwwAvF/WlrARGsfjFow8BaMglEwCugAAAIMAOHfAQunR+XzAAAAAElFTkSuQmCC"/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpiZICA/yCCiQEJUJcDEGAAY0gBD1/m7Q0AAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiYBgFIw3MB+L/5Gj8j6yRiRTFyICJXHfTXyMLAXlGati4YDRFDj8AEGAABk8GSqqS4CoAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYBgFgxz8p7bm+cQa+h8LHy7GhEcjIz4bmAjYykiun/8j0fakGPIfTfPgiSr6aB4FVAcAAQYAWdwR1G1Wd2gAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGpJREFUeNpi/P//PwM9ABMDncCoRYPfIqqDZcuW1UPp/6AUDcNM1DQYKtRAlaAj1mCSLSLXYIIWUctgDItoZfDA5aOoqKhGEANIM9LVR7SymGDQUctikuOIXkFNdhHEOFrDjlpEd4sAAgwAriRMub95fu8AAAAASUVORK5CYII="/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFtJREFUeNpi/P//PwM9ABMDncCoRYPfIlqAeij9H5SiYZiqBqPTlFqE02BKLSLaYFItIttgQhZRzWB8FjENiuRJ7aAbsMQwYMl7wDIsWUUQ42gNO2oR3S0CCDAAKhKq6MLLn8oAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUeNpiYBgFo2DQA0YC8v/xqP1PjDlMRDrEgUgxkgHIlfZoriVGjmzLsLFHAW2D6D8eA/9Tw7L/BAwgJE90PvhPpNgoGAVDEQAEGAAMdhTyXcPKcAAAAABJRU5ErkJggg=="/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEZJREFUeNpiYBgFo2DIg/9UUkOUAf8JiFFsyX88fJyAkcQgYMQjNkzBoAgiezyRbE+tFGSPxQJ7auYBmma0UTAKBhgABBgAJAEY6zON61sAAAAASUVORK5CYII="/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC"/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg=="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNrs1jEOgCAMBVAg7t5/8qaoIy4uoobyXsLCxA+0NCUAAADGUWvdQoQ41x4ixNBB2hBvBskdD3w5ZCkl3+33VqI0kjBBlh9rp+uTcyOP33TnolfsU85XX3yIRpQph8ZQY3wTZtU5AACASA4BBgDHoVuY1/fvOQAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWlJREFUeNrsl+1twjAQhsHq/7BBYQLYIBmBDcoGMAIjtBPQTcII2SDtBDBBwrU6pGsUO7YbO470PtKJkz9iH++d4ywWAAAAAABgljRNsyWr2bZzDuJG1rLdZhcMbTjrBCGDyUKsqQLFciJb9bSvuG/WagRVRUVUI6gqy5HVeKWfSgRyJruKIU//TrZTSn2nmlaXThrloi/v9F2STC1W4+Aw5cBzkquRc09bofFNc6YLxEON0VUZS5FPTftO49vMjRsIF3RhOGr7/D/pJw+FKU+q0vDyq8W42jCunDqI3LC5XxNj2wHLU1XjaRnb0Lhykhqhhd8MtSF5J9tbjCv4mXGvKJz/65FF/qJryyaaIvzP2QRxZTX2nTuXjvV/VPFSwyLnW7mpH99yTh1FEVro6JBSd40/pMrRdV8vPtcKl28T2pT8TnFZ4yNosct3Q0io6JfBiz1FlGdqVQH3VHnepAEAAAAAADDzEGAAcTwB10jWgxcAAAAASUVORK5CYII="/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuhJREFUeNrsWr9rU1EUznuNGqvFQh1ULOhiBx0KDtIuioO4pJuik3FxFfUPaAV1FTdx0Q5d2g4FFxehTnEpZHFoBy20tCIWtGq0TZP4HfkeHB5N8m6Sl/sa74XDybvv3vvOd8/Pe4lXrVZT3dD8VJc0B8QBcUAcEAfESktHGeR5XtMfqFQq/f92zPe/NbtGlKTdCY30kuxrpMGO94BlQCXs+rbh3ONgA6BlzP1p20d80gEI5hmA2A92Qua1Q2PtAFISM+bvjMG8U+Q7oA3rQGASwrYCU6WpNdLGYbA+Pq5jjXIiwi8EEa2UDbQSaKOIuV+SlkcCrfjY8XTI9EpKGwP0C2kru2hLtHqa4zoXtZRWyvi4CLwv9Opr6Hkn6A9HKgEANsQ1iqC3Ub/vRUk2JgmRkatK36kVrnt0qObunwUdUUMXMWYpakJsO5Am8tAw2GBIgwWA+G2S2dMpiw0gDioQRQJoKhRb1QiDwlHZUABYbaXWsm5ae6loTE4ZDxN4CZar8foVzOJ2iyZ2kWF3t7YIevffaMT5yJ70kQb2fQ1sE5SHr2wazs2wgMxgbsEKEAgxAvZUJbQLBGTSBMgNrncJbA6AljtS/eKDJ0Ez+DmrQEzXS2h1Ck25kAg0IZcUOaydCy4sYnN2fOA+2AP16gNoHALlQ+fwH7XO4CxLenUpgj4xr6ugY2roPMbMx+Xs18m/E8CVEIhxsNeg83XWOAN6grG3lGbk8uE5fr4B/WH3cJw+co/l9nTYsSGYCJ/lY5/qv0thn6nrIWmjeJcPSnWOeY++AkF8tpJHIMAUs/MaBBpj3znZfQo5psY+ZrG4gv5HickjEOymKjEeRpgyST6IuZcTcWbnjcgdPi5ghxciRKsl1lDSsgwA1i8fssonJgzmTSqfGUkCENndNdAL7PS6QQ7ZYISTo+1qq0LEWjTWcvY4isa4z+yfQB+7ooyHVg5RI7/i1Ijn/vnggDggDogD4oC00P4KMACd/juEHOrS4AAAAABJRU5ErkJggg=="/></elements></component><component name="dock"><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFBJREFUeNrs0cEJACAQA8Eofu0fu/W6EM5ZSAFDRpKTBs00CQQEBAQEBAQEBAQEBAQEBATkK8iqbY+AgICAgICAgICAgICAgICAgIC86QowAG5PAQzEJ0lKAAAAAElFTkSuQmCC"/></elements></component><component name="playlist"><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNrs2NEJwCAMBcBYuv/CFuIE9VN47WWCR7iocXR3pdWdGPqqwIoMjYfQeAiNh9B4JHc6MHQVHnjggQceeOCBBx77TifyeOY0iHi8DqIdEY8dD5cL094eePzINB5CO/LwcOTptNB4CP25L4TIbZzpU7UEGAA5wz1uF5rF9AAAAABJRU5ErkJggg=="/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAIAAADpFA0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUeNrsy6ENACAMAMHClp2wYxZLAg5Fcu9e3OjuOKqqfTMzbs14CIZhGIZhGIZhGP4VLwEGAK/BBnVFpB0oAAAAAElFTkSuQmCC"/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAIAAADpFA0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNrsy7ENACAMBLE8++8caFFKKiRffU53112SGs3ttOohGIZhGIZhGIZh+Fe8BRgAiaUGde6NOSEAAAAASUVORK5CYII="/></elements></component></components></skin>';this.xml=null;if(window.DOMParser){parser=new DOMParser();this.xml=parser.parseFromString(this.text,"text/xml")}else{this.xml=new ActiveXObject("Microsoft.XMLDOM");this.xml.async="false";this.xml.loadXML(this.text)}return this}})(jwplayer);(function(a){_utils=a.utils;_css=_utils.css;_hide=function(b){_css(b,{display:"none"})};_show=function(b){_css(b,{display:"block"})};a.html5.display=function(k,G){var j={icons:true,showmute:false};var Q=_utils.extend({},j,G);var h=k;var P={};var e;var u;var w;var N;var s;var I;var A;var J=!_utils.exists(h.skin.getComponentSettings("display").bufferrotation)?15:parseInt(h.skin.getComponentSettings("display").bufferrotation,10);var q=!_utils.exists(h.skin.getComponentSettings("display").bufferinterval)?100:parseInt(h.skin.getComponentSettings("display").bufferinterval,10);var z=-1;var t="";var K=true;var d;var g=false;var n=false;var H=new a.html5.eventdispatcher();_utils.extend(this,H);var D={display:{style:{cursor:"pointer",top:0,left:0,overflow:"hidden"},click:m},display_icon:{style:{cursor:"pointer",position:"absolute",top:((h.skin.getSkinElement("display","background").height-h.skin.getSkinElement("display","playIcon").height)/2),left:((h.skin.getSkinElement("display","background").width-h.skin.getSkinElement("display","playIcon").width)/2),border:0,margin:0,padding:0,zIndex:3,display:"none"}},display_iconBackground:{style:{cursor:"pointer",position:"absolute",top:((u-h.skin.getSkinElement("display","background").height)/2),left:((e-h.skin.getSkinElement("display","background").width)/2),border:0,backgroundImage:(["url(",h.skin.getSkinElement("display","background").src,")"]).join(""),width:h.skin.getSkinElement("display","background").width,height:h.skin.getSkinElement("display","background").height,margin:0,padding:0,zIndex:2,display:"none"}},display_image:{style:{display:"none",width:e,height:u,position:"absolute",cursor:"pointer",left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1}},display_text:{style:{zIndex:4,position:"relative",opacity:0.8,backgroundColor:parseInt("000000",16),color:parseInt("ffffff",16),textAlign:"center",fontFamily:"Arial,sans-serif",padding:"0 5px",fontSize:14}}};h.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,p);h.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,p);h.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,p);h.jwAddEventListener(a.api.events.JWPLAYER_ERROR,o);L();function L(){P.display=C("div","display");P.display_text=C("div","display_text");P.display.appendChild(P.display_text);P.display_image=C("img","display_image");P.display_image.onerror=function(R){_hide(P.display_image)};P.display_image.onload=y;P.display_icon=C("div","display_icon");P.display_iconBackground=C("div","display_iconBackground");P.display.appendChild(P.display_image);P.display_iconBackground.appendChild(P.display_icon);P.display.appendChild(P.display_iconBackground);f();setTimeout((function(){n=true;if(Q.icons.toString()=="true"){F()}}),1)}this.getDisplayElement=function(){return P.display};this.resize=function(S,R){_css(P.display,{width:S,height:R});_css(P.display_text,{width:(S-10),top:((R-P.display_text.getBoundingClientRect().height)/2)});_css(P.display_iconBackground,{top:((R-h.skin.getSkinElement("display","background").height)/2),left:((S-h.skin.getSkinElement("display","background").width)/2)});if(e!=S||u!=R){e=S;u=R;d=undefined;F()}c();p({})};this.show=function(){if(g){g=false;r(h.jwGetState())}};this.hide=function(){if(!g){B();g=true}};function y(R){w=P.display_image.naturalWidth;N=P.display_image.naturalHeight;c()}function c(){_utils.stretch(h.jwGetStretching(),P.display_image,e,u,w,N)}function C(R,T){var S=document.createElement(R);S.id=h.id+"_jwplayer_"+T;_css(S,D[T].style);return S}function f(){for(var R in P){if(_utils.exists(D[R].click)){P[R].onclick=D[R].click}}}function m(R){if(typeof R.preventDefault!="undefined"){R.preventDefault()}else{R.returnValue=false}if(h.jwGetState()!=a.api.events.state.PLAYING){h.jwPlay()}else{h.jwPause()}}function O(R){if(A){B();return}P.display_icon.style.backgroundImage=(["url(",h.skin.getSkinElement("display",R).src,")"]).join("");_css(P.display_icon,{width:h.skin.getSkinElement("display",R).width,height:h.skin.getSkinElement("display",R).height,top:(h.skin.getSkinElement("display","background").height-h.skin.getSkinElement("display",R).height)/2,left:(h.skin.getSkinElement("display","background").width-h.skin.getSkinElement("display",R).width)/2});b();if(_utils.exists(h.skin.getSkinElement("display",R+"Over"))){P.display_icon.onmouseover=function(S){P.display_icon.style.backgroundImage=["url(",h.skin.getSkinElement("display",R+"Over").src,")"].join("")};P.display_icon.onmouseout=function(S){P.display_icon.style.backgroundImage=["url(",h.skin.getSkinElement("display",R).src,")"].join("")}}else{P.display_icon.onmouseover=null;P.display_icon.onmouseout=null}}function B(){if(Q.icons.toString()=="true"){_hide(P.display_icon);_hide(P.display_iconBackground);M()}}function b(){if(!g&&Q.icons.toString()=="true"){_show(P.display_icon);_show(P.display_iconBackground);F()}}function o(R){A=true;B();P.display_text.innerHTML=R.error;_show(P.display_text);P.display_text.style.top=((u-P.display_text.getBoundingClientRect().height)/2)+"px"}function E(){P.display_image.style.display="none"}function p(R){if((R.type==a.api.events.JWPLAYER_PLAYER_STATE||R.type==a.api.events.JWPLAYER_PLAYLIST_ITEM)&&A){A=false;_hide(P.display_text)}var S=h.jwGetState();if(S==t){return}t=S;if(z>=0){clearTimeout(z)}if(K||h.jwGetState()==a.api.events.state.PLAYING||h.jwGetState()==a.api.events.state.PAUSED){r(h.jwGetState())}else{z=setTimeout(l(h.jwGetState()),500)}}function l(R){return(function(){r(R)})}function r(R){if(_utils.exists(I)){clearInterval(I);I=null;_utils.animations.rotate(P.display_icon,0)}switch(R){case a.api.events.state.BUFFERING:if(_utils.isIOS()){E();B()}else{if(h.jwGetPlaylist()[h.jwGetItem()].provider=="sound"){v()}s=0;I=setInterval(function(){s+=J;_utils.animations.rotate(P.display_icon,s%360)},q);O("bufferIcon");K=true}break;case a.api.events.state.PAUSED:if(!_utils.isIOS()){if(h.jwGetPlaylist()[h.jwGetItem()].provider!="sound"){_css(P.display_image,{background:"transparent no-repeat center center"})}O("playIcon");K=true}break;case a.api.events.state.IDLE:if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].image){v()}else{E()}O("playIcon");K=true;break;default:if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].provider=="sound"){if(_utils.isIOS()){E();K=false}else{v()}}else{E();K=false}if(h.jwGetMute()&&Q.showmute){O("muteIcon")}else{B()}break}z=-1}function v(){if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].image){_css(P.display_image,{display:"block"});P.display_image.src=_utils.getAbsolutePath(h.jwGetPlaylist()[h.jwGetItem()].image)}}function x(R){return function(){if(!n){return}if(!g&&d!=R){d=R;H.sendEvent(R,{component:"display",boundingRect:_utils.getDimensions(P.display_iconBackground)})}}}var F=x(a.api.events.JWPLAYER_COMPONENT_SHOW);var M=x(a.api.events.JWPLAYER_COMPONENT_HIDE);return this}})(jwplayer);(function(a){_css=a.utils.css;a.html5.dock=function(p,u){function q(){return{align:a.html5.view.positions.RIGHT}}var k=a.utils.extend({},q(),u);if(k.align=="FALSE"){return}var f={};var s=[];var g;var v;var d=false;var t=false;var e={x:0,y:0,width:0,height:0};var r;var j=new a.html5.eventdispatcher();_utils.extend(this,j);var m=document.createElement("div");m.id=p.id+"_jwplayer_dock";p.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,l);this.getDisplayElement=function(){return m};this.setButton=function(A,x,y,z){if(!x&&f[A]){a.utils.arrays.remove(s,A);m.removeChild(f[A].div);delete f[A]}else{if(x){if(!f[A]){f[A]={}}f[A].handler=x;f[A].outGraphic=y;f[A].overGraphic=z;if(!f[A].div){s.push(A);f[A].div=document.createElement("div");f[A].div.style.position="relative";m.appendChild(f[A].div);f[A].div.appendChild(document.createElement("img"));f[A].div.childNodes[0].style.position="absolute";f[A].div.childNodes[0].style.left=0;f[A].div.childNodes[0].style.top=0;f[A].div.childNodes[0].style.zIndex=10;f[A].div.childNodes[0].style.cursor="pointer";f[A].div.appendChild(document.createElement("img"));f[A].div.childNodes[1].style.position="absolute";f[A].div.childNodes[1].style.left=0;f[A].div.childNodes[1].style.top=0;if(p.skin.getSkinElement("dock","button")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","button").src}f[A].div.childNodes[1].style.zIndex=9;f[A].div.childNodes[1].style.cursor="pointer";f[A].div.onmouseover=function(){if(f[A].overGraphic){f[A].div.childNodes[0].src=f[A].overGraphic}if(p.skin.getSkinElement("dock","buttonOver")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","buttonOver").src}};f[A].div.onmouseout=function(){if(f[A].outGraphic){f[A].div.childNodes[0].src=f[A].outGraphic}if(p.skin.getSkinElement("dock","button")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","button").src}};if(f[A].overGraphic){f[A].div.childNodes[0].src=f[A].overGraphic}if(f[A].outGraphic){f[A].div.childNodes[0].src=f[A].outGraphic}if(p.skin.getSkinElement("dock","button")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","button").src}}if(x){f[A].div.onclick=function(B){B.preventDefault();a(p.id).callback(A);if(f[A].overGraphic){f[A].div.childNodes[0].src=f[A].overGraphic}if(p.skin.getSkinElement("dock","button")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","button").src}}}}}h(g,v)};function h(x,J){if(s.length>0){var y=10;var I=y;var F=-1;var G=p.skin.getSkinElement("dock","button").height;var E=p.skin.getSkinElement("dock","button").width;var C=x-E-y;var H,B;if(k.align==a.html5.view.positions.LEFT){F=1;C=y}for(var z=0;z<s.length;z++){var K=Math.floor(I/J);if((I+G+y)>((K+1)*J)){I=((K+1)*J)+y;K=Math.floor(I/J)}var A=f[s[z]].div;A.style.top=(I%J)+"px";A.style.left=(C+(p.skin.getSkinElement("dock","button").width+y)*K*F)+"px";var D={x:a.utils.parseDimension(A.style.left),y:a.utils.parseDimension(A.style.top),width:E,height:G};if(!H||(D.x<=H.x&&D.y<=H.y)){H=D}if(!B||(D.x>=B.x&&D.y>=B.y)){B=D}I+=p.skin.getSkinElement("dock","button").height+y}e={x:H.x,y:H.y,width:B.x-H.x+B.width,height:H.y-B.y+B.height}}if(t!=p.jwGetFullscreen()||g!=x||v!=J){g=x;v=J;t=p.jwGetFullscreen();r=undefined;setTimeout(n,1)}}function b(x){return function(){if(!d&&r!=x&&s.length>0){r=x;j.sendEvent(x,{component:"dock",boundingRect:e})}}}function l(x){if(a.utils.isIOS()){switch(x.newstate){case a.api.events.state.IDLE:o();break;default:c();break}}}var n=b(a.api.events.JWPLAYER_COMPONENT_SHOW);var w=b(a.api.events.JWPLAYER_COMPONENT_HIDE);this.resize=h;var o=function(){_css(m,{display:"block"});if(d){d=false;n()}};var c=function(){_css(m,{display:"none"});if(!d){w();d=true}};this.hide=c;this.show=o;return this}})(jwplayer);(function(a){a.html5.eventdispatcher=function(d,b){var c=new a.events.eventdispatcher(b);a.utils.extend(this,c);this.sendEvent=function(e,f){if(!a.utils.exists(f)){f={}}a.utils.extend(f,{id:d,version:a.version,type:e});c.sendEvent(e,f)}}})(jwplayer);(function(a){var b={prefix:"http://l.longtailvideo.com/html5/",file:"logo.png",link:"http://www.longtailvideo.com/players/jw-flv-player/",margin:8,out:0.5,over:1,timeout:5,hide:true,position:"bottom-left"};_css=a.utils.css;a.html5.logo=function(n,r){var q=n;var u;var d;var t;var h=false;g();function g(){o();c();l()}function o(){if(b.prefix){var v=n.version.split(/\W/).splice(0,2).join("/");if(b.prefix.indexOf(v)<0){b.prefix+=v+"/"}}if(r.position==a.html5.view.positions.OVER){r.position=b.position}d=a.utils.extend({},b)}function c(){t=document.createElement("img");t.id=q.id+"_jwplayer_logo";t.style.display="none";t.onload=function(v){_css(t,k());q.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,j);p()};if(!d.file){return}if(d.file.indexOf("http://")===0){t.src=d.file}else{t.src=d.prefix+d.file}}if(!d.file){return}this.resize=function(w,v){};this.getDisplayElement=function(){return t};function l(){if(d.link){t.onmouseover=f;t.onmouseout=p;t.onclick=s}else{this.mouseEnabled=false}}function s(v){if(typeof v!="undefined"){v.stopPropagation()}if(!h){return}q.jwPause();q.jwSetFullscreen(false);if(d.link){window.open(d.link,"_top")}return}function p(v){if(d.link&&h){t.style.opacity=d.out}return}function f(v){if(d.hide.toString()=="true"&&h){t.style.opacity=d.over}return}function k(){var x={textDecoration:"none",position:"absolute",cursor:"pointer"};x.display=(d.hide.toString()=="true")?"none":"block";var w=d.position.toLowerCase().split("-");for(var v in w){x[w[v]]=d.margin}return x}function m(){if(d.hide.toString()=="true"){t.style.display="block";t.style.opacity=0;a.utils.fadeTo(t,d.out,0.1,parseFloat(t.style.opacity));u=setTimeout(function(){e()},d.timeout*1000)}h=true}function e(){h=false;if(d.hide.toString()=="true"){a.utils.fadeTo(t,0,0.1,parseFloat(t.style.opacity))}}function j(v){if(v.newstate==a.api.events.state.BUFFERING){clearTimeout(u);m()}}return this}})(jwplayer);(function(a){var c={ended:a.api.events.state.IDLE,playing:a.api.events.state.PLAYING,pause:a.api.events.state.PAUSED,buffering:a.api.events.state.BUFFERING};var e=a.utils;var b=e.css;var d=e.isIOS();a.html5.mediavideo=function(h,s){var r={abort:n,canplay:k,canplaythrough:k,durationchange:G,emptied:n,ended:k,error:u,loadeddata:G,loadedmetadata:G,loadstart:k,pause:k,play:n,playing:k,progress:v,ratechange:n,seeked:k,seeking:k,stalled:k,suspend:k,timeupdate:D,volumechange:n,waiting:k,canshowcurrentframe:n,dataunavailable:n,empty:n,load:z,loadedfirstframe:n};var j=new a.html5.eventdispatcher();e.extend(this,j);var y=h,l=s,m,B,A,x,f,H=false,C,p,q;o();this.load=function(J,K){if(typeof K=="undefined"){K=true}x=J;e.empty(m);q=0;if(J.levels&&J.levels.length>0){if(J.levels.length==1){m.src=J.levels[0].file}else{if(m.src){m.removeAttribute("src")}for(var I=0;I<J.levels.length;I++){var L=m.ownerDocument.createElement("source");L.src=J.levels[I].file;m.appendChild(L);q++}}}else{m.src=J.file}if(d){if(J.image){m.poster=J.image}m.controls="controls";m.style.display="block"}C=p=A=false;y.buffer=0;if(!e.exists(J.start)){J.start=0}y.duration=J.duration;j.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED);if((!d&&J.levels.length==1)||!H){m.load()}H=false;if(K){E(a.api.events.state.BUFFERING);j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});this.play()}};this.play=function(){if(B!=a.api.events.state.PLAYING){t();if(p){E(a.api.events.state.PLAYING)}else{E(a.api.events.state.BUFFERING)}m.play()}};this.pause=function(){m.pause();E(a.api.events.state.PAUSED)};this.seek=function(I){if(!(y.duration<=0||isNaN(y.duration))&&!(y.position<=0||isNaN(y.position))){m.currentTime=I;m.play()}};_stop=this.stop=function(I){if(!e.exists(I)){I=true}g();if(I){m.style.display="none";p=false;var J=navigator.userAgent;if(J.match(/chrome/i)){m.src=undefined}else{if(J.match(/safari/i)){m.removeAttribute("src")}else{m.src=""}}m.removeAttribute("controls");m.removeAttribute("poster");e.empty(m);m.load();H=true;if(m.webkitSupportsFullscreen){try{m.webkitExitFullscreen()}catch(K){}}}E(a.api.events.state.IDLE)};this.fullscreen=function(I){if(I===true){this.resize("100%","100%")}else{this.resize(y.config.width,y.config.height)}};this.resize=function(J,I){if(false){b(l,{width:J,height:I})}j.sendEvent(a.api.events.JWPLAYER_MEDIA_RESIZE,{fullscreen:y.fullscreen,width:J,hieght:I})};this.volume=function(I){if(!d){m.volume=I/100;y.volume=I;j.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(I)})}};this.mute=function(I){if(!d){m.muted=I;y.mute=I;j.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE,{mute:I})}};this.getDisplayElement=function(){return m};this.hasChrome=function(){return false};function o(){m=document.createElement("video");B=a.api.events.state.IDLE;for(var I in r){m.addEventListener(I,function(J){if(e.exists(J.target.parentNode)){r[J.type](J)}},true)}m.setAttribute("x-webkit-airplay","allow");if(l.parentNode){l.parentNode.replaceChild(m,l)}if(!m.id){m.id=l.id}}function E(I){if(I==a.api.events.state.PAUSED&&B==a.api.events.state.IDLE){return}if(B!=I){var J=B;y.state=B=I;j.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE,{oldstate:J,newstate:I})}}function n(I){}function v(K){var J;if(e.exists(K)&&K.lengthComputable&&K.total){J=K.loaded/K.total*100}else{if(e.exists(m.buffered)&&(m.buffered.length>0)){var I=m.buffered.length-1;if(I>=0){J=m.buffered.end(I)/m.duration*100}}}if(p===false&&B==a.api.events.state.BUFFERING){j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL);p=true}if(!C){if(J==100){C=true}if(e.exists(J)&&(J>y.buffer)){y.buffer=Math.round(J);j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(J)})}}}function D(J){if(e.exists(J)&&e.exists(J.target)){if(!isNaN(J.target.duration)&&(isNaN(y.duration)||y.duration<1)){if(J.target.duration==Infinity){y.duration=0}else{y.duration=Math.round(J.target.duration*10)/10}}if(!A&&m.readyState>0){m.style.display="block";E(a.api.events.state.PLAYING)}if(B==a.api.events.state.PLAYING){if(!A&&m.readyState>0){A=true;try{if(m.currentTime<x.start){m.currentTime=x.start}}catch(I){}m.volume=y.volume/100;m.muted=y.mute}y.position=y.duration>0?(Math.round(J.target.currentTime*10)/10):0;j.sendEvent(a.api.events.JWPLAYER_MEDIA_TIME,{position:y.position,duration:y.duration});if(y.position>=y.duration&&(y.position>0||y.duration>0)){w()}}}v(J)}function z(I){}function k(I){if(c[I.type]){if(I.type=="ended"){w()}else{E(c[I.type])}}}function G(I){var J={height:I.target.videoHeight,width:I.target.videoWidth,duration:Math.round(I.target.duration*10)/10};if((y.duration===0||isNaN(y.duration))&&I.target.duration!=Infinity){y.duration=Math.round(I.target.duration*10)/10}j.sendEvent(a.api.events.JWPLAYER_MEDIA_META,{metadata:J})}function u(K){if(B==a.api.events.state.IDLE){return}var J="There was an error: ";if((K.target.error&&K.target.tagName.toLowerCase()=="video")||K.target.parentNode.error&&K.target.parentNode.tagName.toLowerCase()=="video"){var I=!e.exists(K.target.error)?K.target.parentNode.error:K.target.error;switch(I.code){case I.MEDIA_ERR_ABORTED:J="You aborted the video playback: ";break;case I.MEDIA_ERR_NETWORK:J="A network error caused the video download to fail part-way: ";break;case I.MEDIA_ERR_DECODE:J="The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";break;case I.MEDIA_ERR_SRC_NOT_SUPPORTED:J="The video could not be loaded, either because the server or network failed or because the format is not supported: ";break;default:J="An unknown error occurred: ";break}}else{if(K.target.tagName.toLowerCase()=="source"){q--;if(q>0){return}J="The video could not be loaded, either because the server or network failed or because the format is not supported: "}else{e.log("An unknown error occurred.  Continuing...");return}}_stop(false);J+=F();_error=true;j.sendEvent(a.api.events.JWPLAYER_ERROR,{error:J});return}function F(){var K="";for(var J in x.levels){var I=x.levels[J];var L=l.ownerDocument.createElement("source");K+=a.utils.getAbsolutePath(I.file);if(J<(x.levels.length-1)){K+=", "}}return K}function t(){if(!e.exists(f)){f=setInterval(function(){v()},100)}}function g(){clearInterval(f);f=null}function w(){if(B!=a.api.events.state.IDLE){_stop(false);j.sendEvent(a.api.events.JWPLAYER_MEDIA_COMPLETE)}}}})(jwplayer);(function(a){var c={ended:a.api.events.state.IDLE,playing:a.api.events.state.PLAYING,pause:a.api.events.state.PAUSED,buffering:a.api.events.state.BUFFERING};var b=a.utils.css;a.html5.mediayoutube=function(j,e){var f=new a.html5.eventdispatcher();a.utils.extend(this,f);var l=j;var h=document.getElementById(e.id);var g=a.api.events.state.IDLE;var n,m;function k(p){if(g!=p){var q=g;l.state=p;g=p;f.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE,{oldstate:q,newstate:p})}}this.getDisplayElement=function(){return h};this.play=function(){if(g==a.api.events.state.IDLE){f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100});f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL);k(a.api.events.state.PLAYING)}else{if(g==a.api.events.state.PAUSED){k(a.api.events.state.PLAYING)}}};this.pause=function(){k(a.api.events.state.PAUSED)};this.seek=function(p){};this.stop=function(p){if(!_utils.exists(p)){p=true}l.position=0;k(a.api.events.state.IDLE);if(p){b(h,{display:"none"})}};this.volume=function(p){l.volume=p;f.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(p)})};this.mute=function(p){h.muted=p;l.mute=p;f.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE,{mute:p})};this.resize=function(q,p){if(q*p>0&&n){n.width=m.width=q;n.height=m.height=p}f.sendEvent(a.api.events.JWPLAYER_MEDIA_RESIZE,{fullscreen:l.fullscreen,width:q,height:p})};this.fullscreen=function(p){if(p===true){this.resize("100%","100%")}else{this.resize(l.config.width,l.config.height)}};this.load=function(p){o(p);b(n,{display:"block"});k(a.api.events.state.BUFFERING);f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});f.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED);this.play()};this.hasChrome=function(){return(g!=a.api.events.state.IDLE)};function o(v){var s=v.levels[0].file;s=["http://www.youtube.com/v/",d(s),"&amp;hl=en_US&amp;fs=1&autoplay=1"].join("");n=document.createElement("object");n.id=h.id;n.style.position="absolute";var u={movie:s,allowfullscreen:"true",allowscriptaccess:"always"};for(var p in u){var t=document.createElement("param");t.name=p;t.value=u[p];n.appendChild(t)}m=document.createElement("embed");n.appendChild(m);var q={src:s,type:"application/x-shockwave-flash",allowfullscreen:"true",allowscriptaccess:"always",width:n.width,height:n.height};for(var r in q){m.setAttribute(r,q[r])}n.appendChild(m);n.style.zIndex=2147483000;if(h!=n&&h.parentNode){h.parentNode.replaceChild(n,h)}h=n}function d(q){var p=q.split(/\?|\#\!/);var s="";for(var r=0;r<p.length;r++){if(p[r].substr(0,2)=="v="){s=p[r].substr(2)}}if(s==""){if(q.indexOf("/v/")>=0){s=q.substr(q.indexOf("/v/")+3)}else{if(q.indexOf("youtu.be")>=0){s=q.substr(q.indexOf("youtu.be/")+9)}else{s=q}}}if(s.indexOf("?")>-1){s=s.substr(0,s.indexOf("?"))}if(s.indexOf("&")>-1){s=s.substr(0,s.indexOf("&"))}return s}this.embed=m;return this}})(jwplayer);(function(jwplayer){var _configurableStateVariables=["width","height","start","duration","volume","mute","fullscreen","item","plugins","stretching"];jwplayer.html5.model=function(api,container,options){var _api=api;var _container=container;var _model={id:_container.id,playlist:[],state:jwplayer.api.events.state.IDLE,position:0,buffer:0,config:{width:480,height:320,item:-1,skin:undefined,file:undefined,image:undefined,start:0,duration:0,bufferlength:5,volume:90,mute:false,fullscreen:false,repeat:"",stretching:jwplayer.utils.stretching.UNIFORM,autostart:false,debug:undefined,screencolor:undefined}};var _media;var _eventDispatcher=new jwplayer.html5.eventdispatcher();var _components=["display","logo","controlbar","playlist","dock"];jwplayer.utils.extend(_model,_eventDispatcher);for(var option in options){if(typeof options[option]=="string"){var type=/color$/.test(option)?"color":null;options[option]=jwplayer.utils.typechecker(options[option],type)}var config=_model.config;var path=option.split(".");for(var edge in path){if(edge==path.length-1){config[path[edge]]=options[option]}else{if(!jwplayer.utils.exists(config[path[edge]])){config[path[edge]]={}}config=config[path[edge]]}}}for(var index in _configurableStateVariables){var configurableStateVariable=_configurableStateVariables[index];_model[configurableStateVariable]=_model.config[configurableStateVariable]}var pluginorder=_components.concat([]);if(jwplayer.utils.exists(_model.plugins)){if(typeof _model.plugins=="string"){var userplugins=_model.plugins.split(",");for(var userplugin in userplugins){if(typeof userplugins[userplugin]=="string"){pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g,""))}}}}if(jwplayer.utils.isIOS()){pluginorder=["display","logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}else{if(_model.config.chromeless){pluginorder=["logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}}_model.plugins={order:pluginorder,config:{},object:{}};if(typeof _model.config.components!="undefined"){for(var component in _model.config.components){_model.plugins.config[component]=_model.config.components[component]}}for(var pluginIndex in _model.plugins.order){var pluginName=_model.plugins.order[pluginIndex];var pluginConfig=!jwplayer.utils.exists(_model.plugins.config[pluginName])?{}:_model.plugins.config[pluginName];_model.plugins.config[pluginName]=!jwplayer.utils.exists(_model.plugins.config[pluginName])?pluginConfig:jwplayer.utils.extend(_model.plugins.config[pluginName],pluginConfig);if(!jwplayer.utils.exists(_model.plugins.config[pluginName].position)){if(pluginName=="playlist"){_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.NONE}else{_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.OVER}}else{_model.plugins.config[pluginName].position=_model.plugins.config[pluginName].position.toString().toUpperCase()}}if(typeof _model.plugins.config.dock!="undefined"){if(typeof _model.plugins.config.dock!="object"){var position=_model.plugins.config.dock.toString().toUpperCase();_model.plugins.config.dock={position:position}}if(typeof _model.plugins.config.dock.position!="undefined"){_model.plugins.config.dock.align=_model.plugins.config.dock.position;_model.plugins.config.dock.position=jwplayer.html5.view.positions.OVER}}function _loadExternal(playlistfile){var loader=new jwplayer.html5.playlistloader();loader.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,function(evt){_model.playlist=new jwplayer.html5.playlist(evt);_loadComplete(true)});loader.addEventListener(jwplayer.api.events.JWPLAYER_ERROR,function(evt){_model.playlist=new jwplayer.html5.playlist({playlist:[]});_loadComplete(false)});loader.load(playlistfile)}function _loadComplete(){if(_model.config.shuffle){_model.item=_getShuffleItem()}else{if(_model.config.item>=_model.playlist.length){_model.config.item=_model.playlist.length-1}else{if(_model.config.item<0){_model.config.item=0}}_model.item=_model.config.item}_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:_model.playlist});_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM,{index:_model.item})}_model.loadPlaylist=function(arg){var input;if(typeof arg=="string"){if(arg.indexOf("[")==0||arg.indexOf("{")=="0"){try{input=eval(arg)}catch(err){input=arg}}else{input=arg}}else{input=arg}var config;switch(jwplayer.utils.typeOf(input)){case"object":config=input;break;case"array":config={playlist:input};break;default:_loadExternal(input);return;break}_model.playlist=new jwplayer.html5.playlist(config);if(jwplayer.utils.extension(_model.playlist[0].file)=="xml"){_loadExternal(_model.playlist[0].file)}else{_loadComplete()}};function _getShuffleItem(){var result=null;if(_model.playlist.length>1){while(!jwplayer.utils.exists(result)){result=Math.floor(Math.random()*_model.playlist.length);if(result==_model.item){result=null}}}else{result=0}return result}function forward(evt){if(evt.type==jwplayer.api.events.JWPLAYER_MEDIA_LOADED){_container=_media.getDisplayElement()}_eventDispatcher.sendEvent(evt.type,evt)}var _mediaProviders={};_model.setActiveMediaProvider=function(playlistItem){if(playlistItem.provider=="audio"){playlistItem.provider="sound"}var provider=playlistItem.provider;var current=_media?_media.getDisplayElement():null;if(provider=="sound"||provider=="http"||provider==""){provider="video"}if(!jwplayer.utils.exists(_mediaProviders[provider])){switch(provider){case"video":_media=new jwplayer.html5.mediavideo(_model,current?current:_container);break;case"youtube":_media=new jwplayer.html5.mediayoutube(_model,current?current:_container);break}if(!jwplayer.utils.exists(_media)){return false}_media.addGlobalListener(forward);_mediaProviders[provider]=_media}else{if(_media!=_mediaProviders[provider]){if(_media){_media.stop()}_media=_mediaProviders[provider]}}return true};_model.getMedia=function(){return _media};_model.seek=function(pos){_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK,{position:_model.position,offset:pos});return _media.seek(pos)};_model.setupPlugins=function(){if(!jwplayer.utils.exists(_model.plugins)||!jwplayer.utils.exists(_model.plugins.order)||_model.plugins.order.length==0){jwplayer.utils.log("No plugins to set up");return _model}for(var i=0;i<_model.plugins.order.length;i++){try{var pluginName=_model.plugins.order[i];if(jwplayer.utils.exists(jwplayer.html5[pluginName])){if(pluginName=="playlist"){_model.plugins.object[pluginName]=new jwplayer.html5.playlistcomponent(_api,_model.plugins.config[pluginName])}else{_model.plugins.object[pluginName]=new jwplayer.html5[pluginName](_api,_model.plugins.config[pluginName])}}else{_model.plugins.order.splice(plugin,plugin+1)}if(typeof _model.plugins.object[pluginName].addGlobalListener=="function"){_model.plugins.object[pluginName].addGlobalListener(forward)}}catch(err){jwplayer.utils.log("Could not setup "+pluginName)}}};return _model}})(jwplayer);(function(a){a.html5.playlist=function(b){var d=[];if(b.playlist&&b.playlist instanceof Array&&b.playlist.length>0){for(var c in b.playlist){if(!isNaN(parseInt(c))){d.push(new a.html5.playlistitem(b.playlist[c]))}}}else{d.push(new a.html5.playlistitem(b))}return d}})(jwplayer);(function(a){var c={size:180,position:a.html5.view.positions.NONE,itemheight:60,thumbs:true,fontcolor:"#000000",overcolor:"",activecolor:"",backgroundcolor:"#f8f8f8",font:"_sans",fontsize:"",fontstyle:"",fontweight:""};var b={_sans:"Arial, Helvetica, sans-serif",_serif:"Times, Times New Roman, serif",_typewriter:"Courier New, Courier, monospace"};_utils=a.utils;_css=_utils.css;_hide=function(d){_css(d,{display:"none"})};_show=function(d){_css(d,{display:"block"})};a.html5.playlistcomponent=function(r,B){var w=r;var e=a.utils.extend({},c,w.skin.getComponentSettings("playlist"),B);if(e.position==a.html5.view.positions.NONE||typeof a.html5.view.positions[e.position]=="undefined"){return}var x;var l;var C;var d;var g;var f;var k=-1;var h={background:undefined,item:undefined,itemOver:undefined,itemImage:undefined,itemActive:undefined};this.getDisplayElement=function(){return x};this.resize=function(F,D){l=F;C=D;if(w.jwGetFullscreen()){_hide(x)}else{var E={display:"block",width:l,height:C};_css(x,E)}};this.show=function(){_show(x)};this.hide=function(){_hide(x)};function j(){x=document.createElement("div");x.id=w.id+"_jwplayer_playlistcomponent";switch(e.position){case a.html5.view.positions.RIGHT:case a.html5.view.positions.LEFT:x.style.width=e.size+"px";break;case a.html5.view.positions.TOP:case a.html5.view.positions.BOTTOM:x.style.height=e.size+"px";break}A();if(h.item){e.itemheight=h.item.height}x.style.backgroundColor="#C6C6C6";w.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,s);w.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,u);w.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,m)}function p(){var D=document.createElement("ul");_css(D,{width:x.style.width,minWidth:x.style.width,height:x.style.height,backgroundColor:e.backgroundcolor,backgroundImage:h.background?"url("+h.background.src+")":"",color:e.fontcolor,listStyle:"none",margin:0,padding:0,fontFamily:b[e.font]?b[e.font]:b._sans,fontSize:(e.fontsize?e.fontsize:11)+"px",fontStyle:e.fontstyle,fontWeight:e.fontweight,overflowY:"auto"});return D}function y(D){return function(){var E=f.getElementsByClassName("item")[D];var F=e.fontcolor;var G=h.item?"url("+h.item.src+")":"";if(D==w.jwGetPlaylistIndex()){if(e.activecolor!==""){F=e.activecolor}if(h.itemActive){G="url("+h.itemActive.src+")"}}_css(E,{color:e.overcolor!==""?e.overcolor:F,backgroundImage:h.itemOver?"url("+h.itemOver.src+")":G})}}function o(D){return function(){var E=f.getElementsByClassName("item")[D];var F=e.fontcolor;var G=h.item?"url("+h.item.src+")":"";if(D==w.jwGetPlaylistIndex()){if(e.activecolor!==""){F=e.activecolor}if(h.itemActive){G="url("+h.itemActive.src+")"}}_css(E,{color:F,backgroundImage:G})}}function q(I){var P=d[I];var O=document.createElement("li");O.className="item";_css(O,{height:e.itemheight,display:"block",cursor:"pointer",backgroundImage:h.item?"url("+h.item.src+")":"",backgroundSize:"100% "+e.itemheight+"px"});O.onmouseover=y(I);O.onmouseout=o(I);var J=document.createElement("div");var F=new Image();var K=0;var L=0;var M=0;if(v()&&(P.image||P["playlist.image"]||h.itemImage)){F.className="image";if(h.itemImage){K=(e.itemheight-h.itemImage.height)/2;L=h.itemImage.width;M=h.itemImage.height}else{L=e.itemheight*4/3;M=e.itemheight}_css(J,{height:M,width:L,"float":"left",styleFloat:"left",cssFloat:"left",margin:"0 5px 0 0",background:"black",overflow:"hidden",margin:K+"px",position:"relative"});_css(F,{position:"relative"});J.appendChild(F);F.onload=function(){a.utils.stretch(a.utils.stretching.FILL,F,L,M,this.naturalWidth,this.naturalHeight)};if(P["playlist.image"]){F.src=P["playlist.image"]}else{if(P.image){F.src=P.image}else{if(h.itemImage){F.src=h.itemImage.src}}}O.appendChild(J)}var E=l-L-K*2;if(C<e.itemheight*d.length){E-=15}var D=document.createElement("div");_css(D,{position:"relative",height:"100%",overflow:"hidden"});var G=document.createElement("span");if(P.duration>0){G.className="duration";_css(G,{fontSize:(e.fontsize?e.fontsize:11)+"px",fontWeight:(e.fontweight?e.fontweight:"bold"),width:"40px",height:e.fontsize?e.fontsize+10:20,lineHeight:24,"float":"right",styleFloat:"right",cssFloat:"right"});G.innerHTML=_utils.timeFormat(P.duration);D.appendChild(G)}var N=document.createElement("span");N.className="title";_css(N,{padding:"5px 5px 0 "+(K?0:"5px"),height:e.fontsize?e.fontsize+10:20,lineHeight:e.fontsize?e.fontsize+10:20,overflow:"hidden","float":"left",styleFloat:"left",cssFloat:"left",width:((P.duration>0)?E-50:E)-10+"px",fontSize:(e.fontsize?e.fontsize:13)+"px",fontWeight:(e.fontweight?e.fontweight:"bold")});N.innerHTML=P?P.title:"";D.appendChild(N);if(P.description){var H=document.createElement("span");H.className="description";_css(H,{display:"block","float":"left",styleFloat:"left",cssFloat:"left",margin:0,paddingLeft:N.style.paddingLeft,paddingRight:N.style.paddingRight,lineHeight:(e.fontsize?e.fontsize+4:16)+"px",overflow:"hidden",position:"relative"});H.innerHTML=P.description;D.appendChild(H)}O.appendChild(D);return O}function s(E){x.innerHTML="";d=w.jwGetPlaylist();if(!d){return}items=[];f=p();for(var F=0;F<d.length;F++){var D=q(F);D.onclick=z(F);f.appendChild(D);items.push(D)}k=w.jwGetPlaylistIndex();o(k)();x.appendChild(f);if(_utils.isIOS()&&window.iScroll){f.style.height=e.itemheight*d.length+"px";var G=new iScroll(x.id)}}function z(D){return function(){w.jwPlaylistItem(D);w.jwPlay(true)}}function n(){f.scrollTop=w.jwGetPlaylistIndex()*e.itemheight}function v(){return e.thumbs.toString().toLowerCase()=="true"}function u(D){if(k>=0){o(k)();k=D.index}o(D.index)();n()}function m(){if(e.position==a.html5.view.positions.OVER){switch(w.jwGetState()){case a.api.events.state.IDLE:_show(x);break;default:_hide(x);break}}}function A(){for(var D in h){h[D]=t(D)}}function t(D){return w.skin.getSkinElement("playlist",D)}j();return this}})(jwplayer);(function(b){b.html5.playlistitem=function(d){var e={author:"",date:"",description:"",image:"",link:"",mediaid:"",tags:"",title:"",provider:"",file:"",streamer:"",duration:-1,start:0,currentLevel:-1,levels:[]};var c=b.utils.extend({},e,d);if(c.type){c.provider=c.type;delete c.type}if(c.levels.length===0){c.levels[0]=new b.html5.playlistitemlevel(c)}if(!c.provider){c.provider=a(c.levels[0])}else{c.provider=c.provider.toLowerCase()}return c};function a(e){if(b.utils.isYouTube(e.file)){return"youtube"}else{var f=b.utils.extension(e.file);var c;if(f&&b.utils.extensionmap[f]){if(f=="m3u8"){return"video"}c=b.utils.extensionmap[f].html5}else{if(e.type){c=e.type}}if(c){var d=c.split("/")[0];if(d=="audio"){return"sound"}else{if(d=="video"){return d}}}}return""}})(jwplayer);(function(a){a.html5.playlistitemlevel=function(b){var d={file:"",streamer:"",bitrate:0,width:0};for(var c in d){if(a.utils.exists(b[c])){d[c]=b[c]}}return d}})(jwplayer);(function(a){a.html5.playlistloader=function(){var c=new a.html5.eventdispatcher();a.utils.extend(this,c);this.load=function(e){a.utils.ajax(e,d,b)};function d(g){var f=[];try{var f=a.utils.parsers.rssparser.parse(g.responseXML.firstChild);c.sendEvent(a.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:new a.html5.playlist({playlist:f})})}catch(h){b("Could not parse the playlist")}}function b(e){c.sendEvent(a.api.events.JWPLAYER_ERROR,{error:e?e:"could not load playlist for whatever reason.  too bad"})}}})(jwplayer);(function(a){a.html5.skin=function(){var b={};var c=false;this.load=function(d,e){new a.html5.skinloader(d,function(f){c=true;b=f;e()},function(){new a.html5.skinloader("",function(f){c=true;b=f;e()})})};this.getSkinElement=function(d,e){if(c){try{return b[d].elements[e]}catch(f){a.utils.log("No such skin component / element: ",[d,e])}}return null};this.getComponentSettings=function(d){if(c){return b[d].settings}return null};this.getComponentLayout=function(d){if(c){return b[d].layout}return null}}})(jwplayer);(function(a){a.html5.skinloader=function(f,p,k){var o={};var c=p;var l=k;var e=true;var j;var n=f;var s=false;function m(){if(typeof n!="string"||n===""){d(a.html5.defaultSkin().xml)}else{a.utils.ajax(a.utils.getAbsolutePath(n),function(t){try{if(a.utils.exists(t.responseXML)){d(t.responseXML);return}}catch(u){h()}d(a.html5.defaultSkin().xml)},function(t){d(a.html5.defaultSkin().xml)})}}function d(y){var E=y.getElementsByTagName("component");if(E.length===0){return}for(var H=0;H<E.length;H++){var C=E[H].getAttribute("name");var B={settings:{},elements:{},layout:{}};o[C]=B;var G=E[H].getElementsByTagName("elements")[0].getElementsByTagName("element");for(var F=0;F<G.length;F++){b(G[F],C)}var z=E[H].getElementsByTagName("settings")[0];if(z&&z.childNodes.length>0){var K=z.getElementsByTagName("setting");for(var P=0;P<K.length;P++){var Q=K[P].getAttribute("name");var I=K[P].getAttribute("value");var x=/color$/.test(Q)?"color":null;o[C].settings[Q]=a.utils.typechecker(I,x)}}var L=E[H].getElementsByTagName("layout")[0];if(L&&L.childNodes.length>0){var M=L.getElementsByTagName("group");for(var w=0;w<M.length;w++){var A=M[w];o[C].layout[A.getAttribute("position")]={elements:[]};for(var O=0;O<A.attributes.length;O++){var D=A.attributes[O];o[C].layout[A.getAttribute("position")][D.name]=D.value}var N=A.getElementsByTagName("*");for(var v=0;v<N.length;v++){var t=N[v];o[C].layout[A.getAttribute("position")].elements.push({type:t.tagName});for(var u=0;u<t.attributes.length;u++){var J=t.attributes[u];o[C].layout[A.getAttribute("position")].elements[v][J.name]=J.value}if(!a.utils.exists(o[C].layout[A.getAttribute("position")].elements[v].name)){o[C].layout[A.getAttribute("position")].elements[v].name=t.tagName}}}}e=false;r()}}function r(){clearInterval(j);if(!s){j=setInterval(function(){q()},100)}}function b(y,x){var w=new Image();var t=y.getAttribute("name");var v=y.getAttribute("src");var A;if(v.indexOf("data:image/png;base64,")===0){A=v}else{var u=a.utils.getAbsolutePath(n);var z=u.substr(0,u.lastIndexOf("/"));A=[z,x,v].join("/")}o[x].elements[t]={height:0,width:0,src:"",ready:false,image:w};w.onload=function(B){g(w,t,x)};w.onerror=function(B){s=true;r();l()};w.src=A}function h(){for(var u in o){var w=o[u];for(var t in w.elements){var x=w.elements[t];var v=x.image;v.onload=null;v.onerror=null;delete x.image;delete w.elements[t]}delete o[u]}}function q(){for(var t in o){if(t!="properties"){for(var u in o[t].elements){if(!o[t].elements[u].ready){return}}}}if(e===false){clearInterval(j);c(o)}}function g(t,v,u){if(o[u]&&o[u].elements[v]){o[u].elements[v].height=t.height;o[u].elements[v].width=t.width;o[u].elements[v].src=t.src;o[u].elements[v].ready=true;r()}else{a.utils.log("Loaded an image for a missing element: "+u+"."+v)}}m()}})(jwplayer);(function(a){a.html5.api=function(c,n){var m={};var f=document.createElement("div");c.parentNode.replaceChild(f,c);f.id=c.id;m.version=a.version;m.id=f.id;var l=new a.html5.model(m,f,n);var j=new a.html5.view(m,f,l);var k=new a.html5.controller(m,f,l,j);m.skin=new a.html5.skin();m.jwPlay=function(o){if(typeof o=="undefined"){e()}else{if(o.toString().toLowerCase()=="true"){k.play()}else{k.pause()}}};m.jwPause=function(o){if(typeof o=="undefined"){e()}else{if(o.toString().toLowerCase()=="true"){k.pause()}else{k.play()}}};function e(){if(l.state==a.api.events.state.PLAYING||l.state==a.api.events.state.BUFFERING){k.pause()}else{k.play()}}m.jwStop=k.stop;m.jwSeek=k.seek;m.jwPlaylistItem=k.item;m.jwPlaylistNext=k.next;m.jwPlaylistPrev=k.prev;m.jwResize=k.resize;m.jwLoad=k.load;function h(o){return function(){return l[o]}}function d(o,q,p){return function(){var r=l.plugins.object[o];if(r&&r[q]&&typeof r[q]=="function"){r[q].apply(r,p)}}}m.jwGetItem=h("item");m.jwGetPosition=h("position");m.jwGetDuration=h("duration");m.jwGetBuffer=h("buffer");m.jwGetWidth=h("width");m.jwGetHeight=h("height");m.jwGetFullscreen=h("fullscreen");m.jwSetFullscreen=k.setFullscreen;m.jwGetVolume=h("volume");m.jwSetVolume=k.setVolume;m.jwGetMute=h("mute");m.jwSetMute=k.setMute;m.jwGetStretching=h("stretching");m.jwGetState=h("state");m.jwGetVersion=function(){return m.version};m.jwGetPlaylist=function(){return l.playlist};m.jwGetPlaylistIndex=m.jwGetItem;m.jwAddEventListener=k.addEventListener;m.jwRemoveEventListener=k.removeEventListener;m.jwSendEvent=k.sendEvent;m.jwDockSetButton=function(r,o,p,q){if(l.plugins.object.dock&&l.plugins.object.dock.setButton){l.plugins.object.dock.setButton(r,o,p,q)}};m.jwControlbarShow=d("controlbar","show");m.jwControlbarHide=d("controlbar","hide");m.jwDockShow=d("dock","show");m.jwDockHide=d("dock","hide");m.jwDisplayShow=d("display","show");m.jwDisplayHide=d("display","hide");m.jwGetLevel=function(){};m.jwGetBandwidth=function(){};m.jwGetLockState=function(){};m.jwLock=function(){};m.jwUnlock=function(){};function b(){if(l.config.playlistfile){l.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.loadPlaylist(l.config.playlistfile)}else{if(typeof l.config.playlist=="string"){l.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.loadPlaylist(l.config.playlist)}else{l.loadPlaylist(l.config);setTimeout(g,25)}}}function g(o){l.removeEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.setupPlugins();j.setup();var o={id:m.id,version:m.version};k.playerReady(o)}if(l.config.chromeless&&!a.utils.isIOS()){b()}else{m.skin.load(l.config.skin,b)}return m}})(jwplayer)};
/*webtrends*/
var l=void 0;
(function(j,i,k,n){function m(a){if(a){if(!a.forEach)a.forEach=function(a,c){for(var f=c||window,d=0,g=this.length;d<g;++d)a.call(f,this[d],d,this)};if(!a.filter)a.filter=function(a,c){for(var f=c||window,d=[],g=0,h=this.length;g<h;++g)a.call(f,this[g],g,this)&&d.push(this[g]);return d};if(!a.indexOf)a.indexOf=function(a){for(var c=0;c<this.length;++c)if(this[c]===a)return c;return-1}}return a}if(!j.xb){var d={d:{},plugins:{},cb:0,f:{},addEventListener:j.addEventListener?function(a,b,c){a.addEventListener&&
a.addEventListener(b,c,!1)}:function(a,b,c){a.attachEvent&&a.attachEvent("on"+b,c,!1)},h:{},version:"10.2.10",p:{},lb:!1,s:25,aa:function(){if(n.search)d.p=d.ma(n.search);if(j.webtrendsAsyncInit&&!j.webtrendsAsyncInit.hasRun)j.webtrendsAsyncInit(),j.webtrendsAsyncInit.hasRun=!0;d.addEventListener(j,"load",function(){d.lb=!0})},g:function(a){return Object.prototype.toString.call(a)==="[object Function]"},nb:function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&a[c]!=""&&a[c]!=l&&typeof a[c]!="function"&&
b.push({k:c,v:a[c]});return b},extend:function(a,b,c){for(key in b)if(c||typeof a[key]==="undefined")a[key]=b[key];return a},find:function(a){if(!d.va)d.va=d.jb();return d.va(a)},jb:function(){var a=/MSIE (\d+)/.exec(k.userAgent),a=a?a[1]:99;if(i.querySelectorAll&&i.body&&a>8){var b=i.body;return function(a){return b.querySelectorAll(a)}}if(j.jQuery)return j.jQuery.find;if(j.Sizzle)return j.Sizzle;if(j.YAHOO&&YAHOO.ya&&YAHOO.ya.za)return YAHOO.ya.za.Ib;if("qwery"in j)return qwery;j.YUI&&YUI().Lb("node",
function(a){return a.all});return i.querySelectorAll?(b=i.body)?function(a){return b.querySelectorAll(a)}:function(){return[]}:function(){return[]}},ma:function(a){var a=a.split(/[&?]/g),b={};try{for(var c=0,f=a.length;c<f;++c){var d=a[c].match(/^([^=]+)(?:=([\s\S]*))?/);if(d&&d[1]){var g=decodeURIComponent(d[1]);b[g]?(b[g]=[b[g]],b[g].push(decodeURIComponent(d[2]))):b[g]=decodeURIComponent(d[2])}}}catch(h){this.H.push(h),this.t(h)}return b},pa:function(a,b,c){arguments.length<2&&(b=!0);s=i.createElement("script");
s.type="text/javascript";s.async=b;s.src=a;s2=i.getElementsByTagName("script")[0];s2.parentNode.insertBefore(s,s2)},X:function(a,b){var c=a.target||a.srcElement;for(typeof b=="string"&&(b[b]=1);c&&c.tagName&&!b[c.tagName.toUpperCase()];)c=c.parentElement||c.parentNode;return c},da:function(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)},ra:function(a){for(var b in d.d)d.d[b].fa(a);return!1},R:function(a,b,c){b||(b="collect");c?d.C("transform."+b,a,c):d.C("transform."+
b,a);return this},C:function(a,b,c){function f(b,c){d.h[a][b.m]||(d.h[a][b.m]=m([]));d.h[a][b.m].push(c)}if(a&&b&&a!=""&&d.g(b)){a==="wtmouseup"&&(a="wtmouse");if(a==="wtmouse"&&!d.sa){var e=/MSIE (\d+)/.exec(k.userAgent);d.addEventListener(i,(e?e[1]:99)>=8?"mousedown":"mouseup",function(b){if(!b)b=window.event;d.Ma(a,{event:b})});d.sa=!0}d.h[a]||(d.h[a]={});if(c)f(c,b);else for(dcsid in d.d)f(d.d[dcsid],b)}},Ma:function(a,b){for(dcsid in d.d)d.fireEvent(a,d.d[dcsid],b)},Aa:function(a,b,c,f){if(typeof b===
"function")return b.onetime?(c.push(b),!0):(b(a,f),!1)},fireEvent:function(a,b,c){var f=m([]);if(d.h[a]&&d.h[a][b.m]){a=d.h[a][b.m];if(!a.length)return;for(var e=a.length-1;e>=0;e--)d.Aa(b,a[e],f,c)&&a.pop()}f.forEach(function(a){a(b,c)})},ba:function(a,b){var c=!1;for(dcsid in d.d){var f=d.d[dcsid];a in f.plugins&&(c=!0,f.ba(a,b))}c||b({Hb:!0})},D:function(){for(dcsid in d.d)d.d[dcsid].D()}},p=d.fireEvent,q=d.C;d.b=function(){this.ka=j.RegExp?/dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)/i:
"";this.ua={};this.plugins=this.plugins={};this.c=this.WT={};this.i=this.DCS={};this.q=this.DCSext={};this.m=this.dcssID="dcsobj_"+d.cb++;this.images=this.images=[];this.H=this.errors=[];this.a=this.FPCConfig={};this.e=this.TPCConfig={};this.images=[];this.J=[];this.zb=[];this.j=[];this.O=[];this.Q="";this.o=0;this.Z=this.la="";this.sa=!1;return this};d.b.prototype={aa:function(a){function b(b,c){return a.hasOwnProperty(b)?a[b]:c}function c(a,b,c){return!a?c:a.hasOwnProperty(b)?a[b]:c}this.Bb=a;this.t=
b("errorlogger",function(){});this.bb=this.dcsid=a.dcsid;this.L=this.queue=b("queue",[]);this.domain=this.domain=b("domain","statse.webtrendslive.com");this.vb=this.timezone=b("timezone",-8);this.enabled=this.enabled=b("enabled",!0);this.$=this.i18n=b("i18n",!0);this.ua=j.RegExp?this.$?{"%25":/\%/g,"%26":/\&/g,"%23":/\#/g}:{"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g,"%22":/\"/g,"%7F":/\x7F/g,"%A0":/\xA0/g}:"";if(a.metanames)this.qa=m(a.metanames.toLowerCase().split(","));
j.webtrendsAsyncLoad&&typeof j.webtrendsAsyncLoad==="function"&&!b("privateFlag",!1)&&d.C("onready",window.webtrendsAsyncLoad,this);this.M=this.vtid=b("vtid",l);this.ta=b("paidsearchparams","gclid");this.tb=this.splitvalue=b("splitvalue","");d.s=a.dcsdelay||d.s;this.eb=this.delayAll=b("delayAll",!1);this.K=this.preserve=b("preserve",!0);this.J=m(b("navigationtag","div,table").toLowerCase().split(","));this.j=b("onsitedoms","");if(!d.g(this.j.test))this.j=m(this.j.toLowerCase().split(",")),this.j.forEach(function(a,
b,c){c[b]=a.replace(/^\s*/,"").replace(/\s*$/,"")});this.O=m(b("downloadtypes","xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip").toLowerCase().split(","));this.O.forEach(function(a,b,c){c[b]=a.replace(/^\s*/,"").replace(/\s*$/,"")});if(b("adimpressions",!1))this.Q=b("adsparam","WT.ac");this.a.enabled=this.FPCConfig.enabled=c(a.FPCConfig,"enabled",!0);this.a.domain=this.FPCConfig.domain=c(a.FPCConfig,"domain",b("fpcdom",""));this.a.name=this.FPCConfig.name=c(a.FPCConfig,"name",b("fpc","WT_FPC"));this.a.u=
this.FPCConfig.expiry=c(a.FPCConfig,"expires",b("cookieexpires",63113851500));this.a.u=this.a.u<63113851500?this.a.u:63113851500;this.a.gb=new Date(this.getTime()+this.a.u);this.a.rb=this.a.u===0;this.e.enabled=this.TPCConfig.enabled=c(a.TPCConfig,"enabled",!b("disablecookie",!1));this.e.S=this.TPCConfig.cfgType=c(a.TPCConfig,"cfgType",!this.e.enabled?"1":"");if(a.cookieTypes)if(a.cookieTypes.toLowerCase()==="none")this.a.enabled=!1,this.e.enabled=!1,this.e.S="1";else if(a.cookieTypes.toLowerCase()===
"firstpartyonly")this.a.enabled=!0,this.e.enabled=!1,this.e.S="1";else if(a.cookieTypes.toLowerCase()==="all")this.a.enabled=!0,this.e.enabled=!0,this.e.S=c(a.TPCConfig,"cfgType","");this.Eb=this.fpc=this.a.name;this.Fb=this.fpcdom=this.a.domain;this.Db=this.cookieExp=this.a.u;m(b("pageEvents",[])).forEach(function(b){this.yb=a[b.toLowerCase()]=!0});b("offsite",!1)&&this.Ja();b("download",!1)&&this.Ha();b("anchor",!1)&&this.Ga();b("javascript",!1)&&this.Ia();b("rightclick",!1)&&this.Ka();b("privateFlag",
!1)||(d.d[this.m]=this);this.plugins=a.plugins||{};this.Ca();d.f[this.domain]||(d.f[this.domain]="");!b("privateFlag",!1)&&this.a.enabled&&this.Ua(this.m);this.T();return this},Ca:function(){for(var a in this.plugins){var b=this.plugins[a];if(!d.plugins[a]){d.plugins[a]=b;var c=b.src;d.g(c)?j.setTimeout(function(a){return function(){a()}}(c),1):d.pa(c,!1)}if(!b.async){var f=this;b.loaded=!1;this.o++;b.timeout&&j.setTimeout(function(a){return function(){if(!a.loaded)a.ub=!0,f.o--,f.T()}}(b),b.timeout)}}},
Va:function(a){if(typeof a!="undefined")!d.f[this.domain]&&a.gTempWtId&&(d.f[this.domain]=a.gTempWtId),this.Z=a.gTempWtId,!d.f[this.domain]&&a.gWtId&&(d.f[this.domain]=a.gWtId),this.la=a.gWtAccountRollup;this.o--;this.T()},Ua:function(a){return i.cookie.indexOf(this.a.name+"=")==-1&&i.cookie.indexOf("WTLOPTOUT=")==-1&&this.e.enabled?(this.enabled&&(d.pa("//"+this.domain+"/"+this.bb+"/wtid.js?callback=Webtrends.dcss."+a+".dcsGetIdCallback",!0),this.o++),!1):!0},ba:function(a,b){var c=this.plugins[a];
if(c)d.g(b)&&(this.mb()?b(this,c):q("onready",function(a,b,c){function d(){a(b,c)}d.onetime=!0;return d}(b,this,c),this)),c.loaded=!0,!c.async&&!c.ub&&this.o--;this.T()},mb:function(){return this.o<=0},T:function(){this.o<=0&&this.sb()},sb:function(){if(!this.Da)p("onready",this),this.kb(),this.qb(),this.Da=!0},kb:function(){for(var a=0;a<this.L.length;a++)this.ia(this.L[a]);this.L=[]},qb:function(){var a=this;this.L.push=function(b){a.ia(b)}},R:function(a,b){d.R(a,b,this)},r:function(a,b){var c=
this,f=d.extend({domEvent:"click",callback:l,argsa:[],args:{},delayTime:l,transform:l,filter:l,actionElems:{A:1,INPUT:1},finish:l},b,!0);q("wtmouse",function(b,g){c.La(c,a,d.extend(g,f,!0))},c);return this},wa:function(a,b,c,f){b.element=c;if(f==="form"||f==="input"||f==="button")b.domEvent="submit";a.ca(b)},La:function(a,b,c){var f=d.find;if(f&&c.event&&c.actionElems){var e=d.X(c.event,c.actionElems),g=e.tagName?e.tagName.toLowerCase():"";if(b.toUpperCase()in c.actionElems&&c.actionElems[g.toUpperCase()])return this.wa(a,
c,e,g);if((b=f(b))&&e&&b&&b.length)for(f=0;f<b.length;f++)if(b[f]===e){this.wa(a,c,e,g);break}}},Y:function(a,b){var c=m(i.cookie.split("; ")).filter(function(b){return b.indexOf(a+"=")!=-1})[0];if(!c||c.length<a.length+1)return!1;m(c.split(a+"=")[1].split(":")).forEach(function(a){a=a.split("=");b[a[0]]=a[1]});return!0},Za:function(a,b,c){var f=[],b=d.nb(b);m(b).forEach(function(a){f.push(a.k+"="+a.v)});f=f.sort().join(":");i.cookie=a+"="+f+c},Wa:function(a,b,c,d){var e={};return this.Y(a,e)?b==
e.id&&c==e.lv&&d==e.ss?0:3:2},Ta:function(){var a={};this.Y(this.a.name,a);return a},Sa:function(){if(i.cookie.indexOf("WTLOPTOUT=")==-1)if(this.a.enabled){var a=this.c,b=this.a.name,c=new Date,f=c.getTimezoneOffset()*6E4+this.vb*36E5;c.setTime(c.getTime()+f);var e=new Date(c.getTime());a.co_f=a.vtid=a.vtvs=a.vt_f=a.vt_f_a=a.vt_f_s=a.vt_f_d=a.vt_f_tlh=a.vt_f_tlv="";var g={};if(this.Y(b,g)){var h=g.id,r=parseInt(g.lv),j=parseInt(g.ss);if(h==null||h=="null"||isNaN(r)||isNaN(j))return;a.co_f=h;h=new Date(r);
a.vt_f_tlh=Math.floor((h.getTime()-f)/1E3);e.setTime(j);if(c.getTime()>h.getTime()+18E5||c.getTime()>e.getTime()+288E5)a.vt_f_tlv=Math.floor((e.getTime()-f)/1E3),e.setTime(c.getTime()),a.vt_f_s="1";if(c.getDate()!=h.getDate()||c.getMonth()!=h.getMonth()||c.getFullYear()!=h.getFullYear())a.vt_f_d="1"}else{if(this.Z.length)a.co_f=d.f[this.domain].length?d.f[this.domain]:this.Z,a.vt_f="1";else if(d.f[this.domain].length)a.co_f=d.f[this.domain];else{a.co_f="2";j=c.getTime().toString();for(h=2;h<=32-j.length;h++)a.co_f+=
Math.floor(Math.random()*16).toString(16);a.co_f+=j;a.vt_f="1"}this.la.length==0&&(a.vt_f_a="1");a.vt_f_s=a.vt_f_d="1";a.vt_f_tlh=a.vt_f_tlv="0"}a.co_f=escape(a.co_f);a.vtid=typeof this.M=="undefined"?a.co_f:this.M||"";a.vtvs=(e.getTime()-f).toString();f=(this.a.rb?"":"; expires="+this.a.gb.toGMTString())+"; path=/"+(this.a.domain!=""?"; domain="+this.a.domain:"");c=c.getTime().toString();e=e.getTime().toString();g.id=a.co_f;g.lv=c;g.ss=e;this.Za(b,g,f);b=this.Wa(b,a.co_f,c,e);if(b!=0)a.co_f=a.vtvs=
a.vt_f_s=a.vt_f_d=a.vt_f_tlh=a.vt_f_tlv="",typeof this.M=="undefined"&&(a.vtid=""),a.vt_f=a.vt_f_a=b}else this.c.vt_f="4",this.c.vtid=this.M?this.M:""},wb:function(){try{var a;arguments&&arguments.length>1?a={argsa:Array.prototype.slice.call(arguments)}:arguments.length===1&&(a=arguments[0]);typeof a==="undefined"&&(a={element:l,event:l,Ab:[]});typeof a.argsa==="undefined"&&(a.argsa=[]);this.ja("collect",a);return this}catch(b){this.H.push(b),this.t(b)}},fa:function(a){a&&a.length>1&&(a={argsa:Array.prototype.slice.call(arguments)});
this.ca(a)},ca:function(a){try{typeof a==="undefined"&&(a={});this.ja("multitrack",a);if(a.delayTime){var b=Number(a.delayTime);this.xa(isNaN(b)?d.s:b)}else this.eb&&this.xa(d.s);return!1}catch(c){this.H.push(c),this.t(c)}},Oa:function(){this.i={};this.c={};this.q={};arguments.length%2==0&&this.W(arguments)},W:function(a){if(a)for(var b=0,c=a.length;b<c;b+=2)a[b].indexOf("WT.")==0?this.c[a[b].substring(3)]=a[b+1]:a[b].indexOf("DCS.")==0?this.i[a[b].substring(4)]=a[b+1]:a[b].indexOf("DCSext.")==0&&
(this.q[a[b].substring(7)]=a[b+1])},$a:function(a){var b,c;if(this.K){this.B=[];for(var d=0,e=a.length;d<e;d+=2)c=a[d],c.indexOf("WT.")==0?(b=c.substring(3),this.B.push(c,this.c[b]||"")):c.indexOf("DCS.")==0?(b=c.substring(4),this.B.push(c,this.i[b]||"")):c.indexOf("DCSext.")==0&&(b=c.substring(7),this.B.push(c,this.q[b]||""))}},Ya:function(){if(this.K)this.W(this.B),this.B=[]},ab:function(){var a=new Date,b=this,c=this.c,f=this.i;c.tz=parseInt(a.getTimezoneOffset()/60*-1)||"0";c.bh=a.getHours()||
"0";c.ul=k.appName=="Netscape"?k.language:k.Mb;if(typeof screen=="object")c.cd=k.appName=="Netscape"?screen.pixelDepth:screen.colorDepth,c.sr=screen.width+"x"+screen.height;typeof k.javaEnabled()=="boolean"&&(c.jo=k.javaEnabled()?"Yes":"No");i.title&&(c.ti=j.RegExp?i.title.replace(RegExp("^"+n.protocol+"//"+n.hostname+"\\s-\\s"),""):i.title);c.js="Yes";c.jv=function(){var a=navigator.userAgent.toLowerCase(),b=parseInt(navigator.appVersion),c=a.indexOf("mac")!=-1,d=a.indexOf("firefox")!=-1,f=a.indexOf("firefox/0.")!=
-1,e=a.indexOf("firefox/1.0")!=-1,g=a.indexOf("firefox/1.5")!=-1,h=a.indexOf("firefox/2.0")!=-1,i=!d&&a.indexOf("mozilla")!=-1&&a.indexOf("compatible")==-1,j=a.indexOf("msie")!=-1&&a.indexOf("opera")==-1,k=j&&b==4&&a.indexOf("msie 4")!=-1,j=j&&!k,m=a.indexOf("opera 5")!=-1||a.indexOf("opera/5")!=-1,n=a.indexOf("opera 6")!=-1||a.indexOf("opera/6")!=-1,a=a.indexOf("opera")!=-1&&!m&&!n,o="1.1";d&&!f&&!e&!g&!h?o="1.8":h?o="1.7":g?o="1.6":f||e||i&&b>=5||a?o="1.5":c&&j||n?o="1.4":j||i&&b==4||m?o="1.3":
k&&(o="1.2");return o}();c.ct="unknown";if(i.body&&i.body.addBehavior)try{i.body.addBehavior("#default#clientCaps"),c.ct=i.body.Cb||"unknown",i.body.addBehavior("#default#homePage"),c.hp=i.body.Gb(location.href)?"1":"0"}catch(e){b.t(e)}var g=0,h=0;if(typeof j.innerWidth=="number")g=j.innerWidth,h=j.innerHeight;else if(i.documentElement&&(i.documentElement.clientWidth||i.documentElement.clientHeight))g=i.documentElement.clientWidth,h=i.documentElement.clientHeight;else if(i.body&&(i.body.clientWidth||
i.body.clientHeight))g=i.body.clientWidth,h=i.body.clientHeight;c.bs=g+"x"+h;c.fv=function(){var a;if(j.ActiveXObject)for(a=15;a>0;a--)try{return new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a),a+".0"}catch(c){b.t(c)}else if(k.plugins&&k.plugins.length)for(a=0;a<k.plugins.length;a++)if(k.plugins[a].name.indexOf("Shockwave Flash")!=-1)return k.plugins[a].description.split(" ")[2];return"Not enabled"}();c.slv=function(){var a="Not enabled";try{k.userAgent.indexOf("MSIE")!=-1?new ActiveXObject("AgControl.AgControl")&&
(a="Unknown"):k.plugins["Silverlight Plug-In"]&&(a="Unknown")}catch(c){b.t(c)}if(a!="Not enabled"){var d,f,e;if(typeof Silverlight=="object"&&typeof Silverlight.oa=="function"){for(d=9;d>0;d--){f=d;if(Silverlight.oa(f+".0"))break;if(a==f)break}for(d=9;d>=0;d--){e=f+"."+d;if(Silverlight.oa(e)){a=e;break}if(a==e)break}}}return a}();this.$&&(c.le=typeof i.defaultCharset=="string"?i.defaultCharset:typeof i.characterSet=="string"?i.characterSet:"unknown");c.tv=d.version;c.sp=this.tb;c.dl="0";if(d.p&&d.p.hb)c.fb_ref=
d.p.hb;if(d.p&&d.p.ib)c.fb_source=d.p.ib;c.ssl=n.protocol.indexOf("https:")==0?"1":"0";f.dcsdat=a.getTime();f.dcssip=n.hostname;f.dcsuri=n.pathname;c.es=f.dcssip+f.dcsuri;if(n.search)f.dcsqry=n.search;if(f.dcsqry){a=f.dcsqry.toLowerCase();g=this.ta.length?this.ta.toLowerCase().split(","):[];for(h=0;h<g.length;h++)if(a.indexOf(g[h]+"=")!=-1){c.srch="1";break}}if(i.referrer!=""&&i.referrer!="-"&&!(k.appName=="Microsoft Internet Explorer"&&parseInt(k.appVersion)<4))f.dcsref=i.referrer;f.dcscfg=this.e.S},
Ra:function(a,b){if(b!=""){if(a===null||a===l)return"";var a=a.toString(),c;for(c in b)b[c]instanceof RegExp&&(a=a.replace(b[c],c));return a}else return escape(a)},U:function(a,b){if(this.$&&this.ka!=""&&!this.ka.test(a))if(a=="dcsqry"){for(var c="",f=b.substring(1).split("&"),e=0;e<f.length;e++){var g=f[e],h=g.indexOf("=");if(h!=-1){var i=g.substring(0,h),g=g.substring(h+1);e!=0&&(c+="&");c+=i+"="+d.da(g)}}b=b.substring(0,1)+c}else b=d.da(b);return"&"+a+"="+this.Ra(b,this.ua)},Pa:function(a,b){if(i.images){var c=
new Image;this.images.push(c);if(arguments.length===2&&b&&d.g(b.callback)){var f=!1,e=b.callback,g=this;c.onload=function(){if(!f)return f=!0,e(g,b),!0};j.setTimeout(function(){if(!f)return f=!0,e(g,b),!0},d.s)}c.src=a}},Xa:function(){var a;i.documentElement?a=i.getElementsByTagName("meta"):i.all&&(a=i.all.Kb("meta"));if(typeof a!="undefined")for(var b=a.length,c=0;c<b;c++){var d=a.item(c).name,e=a.item(c).content;a.item(c);d.length>0&&(d=d.toLowerCase(),d.toUpperCase().indexOf("WT.")==0?this.c[d.substring(3)]=
e:d.toUpperCase().indexOf("DCSEXT.")==0?this.q[d.substring(7)]=e:d.toUpperCase().indexOf("DCS.")==0?this.i[d.substring(4)]=e:this.qa&&this.qa.indexOf(d)!=-1&&(this.q["meta_"+d]=e))}},ga:function(a){if(i.cookie.indexOf("WTLOPTOUT=")==-1){var b=this.c,c=this.i,d=this.q,e=this.i18n,g="http"+(n.protocol.indexOf("https:")==0?"s":"")+"://"+this.domain+(this.dcsid==""?"":"/"+this.dcsid)+"/dcs.gif?";e&&(b.dep="");for(var h in c)c[h]!=""&&c[h]!=l&&typeof c[h]!="function"&&(g+=this.U(h,c[h]));for(h in b)b[h]!=
""&&b[h]!=l&&typeof b[h]!="function"&&(g+=this.U("WT."+h,b[h]));for(h in d)if(d[h]!=""&&d[h]!=l&&typeof d[h]!="function")e&&(b.dep=b.dep.length==0?h:b.dep+";"+h),g+=this.U(h,d[h]);e&&b.dep.length>0&&(g+=this.U("WT.dep",b.dep));g.length>2048&&k.userAgent.indexOf("MSIE")>=0&&(g=g.substring(0,2040)+"&WT.tu=1");this.Pa(g,a);this.c.ad=""}},ob:function(){this.ab();this.Xa();this.Q&&this.Q.length>0&&this.Na();this.pb=!0},getTime:function(){return(new Date).getTime()},fb:0,xa:function(a){for(var b=this.getTime();this.getTime()-
b<a;)this.fb++},ja:function(a,b){a||(a="collect");this.L.push({action:a,message:b})},ia:function(a){if(this.enabled){var b="action_"+a.action,c=a.message;this.pb||this.ob();c.event&&!c.element&&(c.element=d.X(c.event,{A:1}));if(!d.g(c.filter)||!c.filter(this,c)){if(c.args){c.argsa=c.argsa||[];for(var f in c.args)c.argsa.push(f,c.args[f])}c.element&&c.element.getAttribute&&c.element.getAttribute("data-wtmt")&&(c.argsa=c.argsa.concat(c.element.getAttribute("data-wtmt").split(",")));p("transform."+a.action,
this,c);p("transform.all",this,c);c.transform&&d.g(c.transform)&&c.transform(this,c);this.Sa();if(d.g(this[b]))this[b](c);p("finish."+a.action,this,c);p("finish.all",this,c);c.finish&&d.g(c.finish)&&c.finish(this,c)}}},Fa:function(a){var b=a&&a.argsa&&a.argsa.length%2==0;b&&(this.$a(a.argsa),this.W(a.argsa));this.i.dcsdat=this.getTime();this.ga(a);b&&this.Ya()},Ea:function(a){a&&a.argsa&&a.argsa.length%2==0&&this.W(a.argsa);this.ga(a)},Qa:function(a){arguments.length===0&&this.images&&this.images.length>
0&&(a=this.images.length-1);if(a<0||a===l)return"No requests";var b=this.images[a].src,c=b.indexOf("?"),d=b.substring(0,c).split("/"),e="<h3>url info</h3><b>Protocol</b>: <code>"+d[0]+"<br></code>";e+="<b>Domain:</b> <code>"+d[2]+"<br></code>";e+="<b>Path:</b> <code>/"+d[3]+"/"+d[4]+"</code>";e+="<h3>dcs image Params:</h3><code>"+b.substring(c+1).replace(/\&/g,"<br>")+"</code>";e+="<br><h3>Cookies</h3><br><code>"+document.cookie.replace(/\;/g,"<br>")+"</code><br>";e+="<b>Image Count: </b><code>"+
a+1+"<br></code>";this.H.length>0&&(e+="<br><b>Errors: </b><br>",m(this.H).forEach(function(a){e+=a.stack?"<pre>"+a.stack+"</pre><br>":"<pre>"+a+"</pre><br>"}));return e},D:function(a){var b=!1;a&&a.Jb&&(b=!0);a=this.Qa();if(b)return a;else this.N&&!this.N.closed&&this.N.close(),this.N=window.open("","dcsDebug","width=500,height=650,scrollbars=yes,resizable=yes"),this.N.document.write(a),this.N.focus()},I:function(a){var b=document.createElement("a");b.href=a.href;a={};a.G=b.hostname?b.hostname.split(":")[0]:
window.location.hostname;a.n=b.pathname?b.pathname.indexOf("/")!=0?"/"+b.pathname:b.pathname:"/";a.l=b.search?b.search.substring(b.search.indexOf("?")+1,b.search.length):"";a.F=j.location;return a},ea:function(a,b){if(a.length>0){a=a.toLowerCase();if(a==window.location.hostname.toLowerCase())return!0;if(d.g(b.test))return b.test(a);else if(b.length>0)for(var c=b.length,f=0;f<c;f++)if(a==b[f])return!0}return!1},ha:function(a,b){for(var c=a.toLowerCase().substring(a.lastIndexOf(".")+1,a.length),d=b.length,
e=0;e<d;e++)if(c==b[e])return!0;return!1},V:function(a,b){var c="",f="",e=b.length,g,h;for(g=0;g<e;g++)if(h=b[g],h.length&&(f=d.X(a,h),c=f.getAttribute&&f.getAttribute("id")?f.getAttribute("id"):"",f=f.className||"",c.length||f.length))break;return c.length?c:f},na:function(a,b,c){var f=i.all?b.innerText:b.text,a=d.X(a,{IMG:1}),e;if(a&&a.alt)e=a.alt;else if(f)e=f;else if(b.innerHTML)e=b.innerHTML;return e?e:c},z:function(){if(!this.K)this.Ba=this.K=!0},w:function(){this.Ba=this.K=!1},P:function(a){var b=
!1;if(!a)a=window.event;a.which?b=a.which==3:a.button&&(b=a.button==2);return b},Ja:function(){this.r("a",{filter:function(a,b){var c=b.element||{},d=b.event||{};return c.hostname&&!a.ea(c.hostname,a.j)&&!a.P(d)?!1:!0},transform:function(a,b){var c=b.element||{};a.z(b);c=a.I(c);b.argsa.push("DCS.dcssip",c.G,"DCS.dcsuri",c.n,"DCS.dcsqry",c.l,"DCS.dcsref",c.F,"WT.ti","Offsite:"+c.G+c.n+(c.l.length?"?"+c.l:""),"WT.dl","24")},finish:function(a){a.w()}})},Ga:function(){this.r("a",{filter:function(a,b){var c=
b.element||{},d=b.event||{};return a.ea(c.hostname,a.j)&&c.hash&&c.hash!=""&&c.hash!="#"&&!a.P(d)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.z(b);d=a.I(d);b.argsa.push("DCS.dcssip",d.G,"DCS.dcsuri",escape(d.n+b.element.hash),"DCS.dcsqry",d.l,"DCS.dcsref",d.F,"WT.ti",escape("Anchor:"+b.element.hash),"WT.nv",a.V(c,a.J),"WT.dl","21")},finish:function(a){a.w()}})},Ha:function(){this.r("a",{filter:function(a,b){var c=b.event||{};return a.ha((b.element||{}).pathname,a.O)&&!a.P(c)?
!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.z(b);var e=a.I(d),d=a.na(c,d,e.n);b.argsa.push("DCS.dcssip",e.G,"DCS.dcsuri",e.n,"DCS.dcsqry",e.l,"DCS.dcsref",e.F,"WT.ti","Download:"+d,"WT.nv",a.V(c,a.J),"WT.dl","20")},finish:function(a){a.w()}})},Ka:function(){this.r("a",{filter:function(a,b){var c=b.event||{};return a.ha((b.element||{}).pathname,a.O)&&a.P(c)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.z(b);var e=a.I(d),d=a.na(c,d,e.n);b.argsa.push("DCS.dcssip",
e.G,"DCS.dcsuri",e.n,"DCS.dcsqry",e.l,"DCS.dcsref",e.F,"WT.ti","RightClick:"+d,"WT.nv",a.V(c,a.J),"WT.dl","25")},finish:function(a){a.w()}})},Ia:function(){this.r("a",{filter:function(a,b){var c=b.element||{};return c.href&&c.protocol&&c.protocol.toLowerCase()==="javascript:"?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.z(b);var e=a.I(d);b.argsa.push("DCS.dcssip",j.location.hostname,"DCS.dcsuri",d.href,"DCS.dcsqry",e.l,"DCS.dcsref",e.F,"WT.ti","JavaScript:"+(d.innerHTML?d.innerHTML:
""),"WT.dl","22","WT.nv",a.V(c,a.J))},finish:function(a){a.w()}})},Na:function(){if(i.links){var a=this.Q+"=",b=a.length,a=RegExp(a,"i"),c=i.links.length,d=end=-1,e=urlp=value="",g,e=i.URL+"",d=e.search(a);d!=-1&&(end=e.indexOf("&",d),urlp=e.substring(d,end!=-1?end:e.length),g=RegExp(urlp+"(&|#)","i"));for(var h=0;h<c;h++)if(i.links[h].href&&(e=i.links[h].href+"",urlp.length>0&&(e=e.replace(g,"$1")),d=e.search(a),d!=-1))d+=b,end=e.indexOf("&",d),value=e.substring(d,end!=-1?end:e.length),this.c.ad=
this.c.ad?this.c.ad+";"+value:value}}};d.b.prototype.action_multitrack=d.b.prototype.Fa;d.b.prototype.action_collect=d.b.prototype.Ea;j.dcsMultiTrack=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];d.ra({argsa:a})};j.Webtrends=d;j.WebTrends=d;j.WT=j.Webtrends;j.dcsDebug=d.D;d.multiTrack=d.ra;d.dcs=d.b;d.dcss=d.d;d.addTransform=d.R;d.bindEvent=d.C;d.getQryParams=d.ma;d.dcsdelay=d.s;d.find=d.find;d.registerPlugin=d.ba;d.dcsDebug=d.D;d.b.prototype.init=d.b.prototype.aa;d.b.prototype.dcsMultiTrack=
d.b.prototype.fa;d.b.prototype.track=d.b.prototype.wb;d.b.prototype.addSelector=d.b.prototype.r;d.b.prototype.dcsGetIdCallback=d.b.prototype.Va;d.b.prototype.dcsDebug=d.b.prototype.D;d.b.prototype.dcsCleanUp=d.b.prototype.Oa;d.b.prototype.dcsGetFPC=d.b.prototype.Ta;d.b.prototype.addTransform=d.b.prototype.R;d.aa()}})(window,window.document,window.navigator,window.location);

/*webtrends-plugins*/
function webthm() {

  (function(_window, _document) {
	if(!_window.Webtrends)
		return;

	var WTHeatMap = {
		plugMap : {},
		getKeys : function(object, res) {
			for(var i in object)
			if(object.hasOwnProperty(i))
				res.push(i);
			return res;
		},
		AtoO : function(A) {
			var res = {};
			for(var i = 0; i < A.length; ++i)
			res[A[i]] = true;
			return res;
		},
		getURLKeepParms : function(plugin) {
			if(plugin["hmurlparams"] && plugin["hmurlparams"].length > 0) {
				var urlparams = plugin["hmurlparams"].split(",");
				urlParams = WTHeatMap.AtoO(urlparams);
				//get query params for URL rebuilding
				var keepQPs = [];
				var tmpQPs = Webtrends.getQryParams(_window["location"]["search"]);
				var keys = WTHeatMap.getKeys(tmpQPs, []).sort();
				for(var i = 0; i < keys.length; ++i) {
					if(urlParams[keys[i]]) {
						keepQPs.push(keys[i]);
						keepQPs.push(tmpQPs[keys[i]]);
					}
				}
				return keepQPs.join(",");
			} else {
				return "";
			}
		},
		/*Fired on every click to create the heatmap events*/
		hm_clickEvent : function(tag, o_evt) {
			var tagObj = WTHeatMap.plugMap[tag.dcssID];
			if(! tagObj ) 
				return;			
			e = o_evt.event || _window.event;

			var w = 0;
			var h = 0;
			if (typeof(_window.innerWidth) == 'number'){
				w = _window.innerWidth;
				h = _window.innerHeight;
			} else if (_document.documentElement && (_document.documentElement.clientWidth || _document.documentElement.clientHeight)){
				w = _document.documentElement.clientWidth;
				h = _document.documentElement.clientHeight;
			} else if (_document.body && (_document.body.clientWidth || _document.body.clientHeight)){
				w = _document.body.clientWidth;
				h = _document.body.clientHeight;
			}

			var scrollx = 0;
			var scrolly = 0;
			if (typeof(_window.pageYOffset) == 'number'){
				scrolly = _window.pageYOffset;
				scrollx = _window.pageXOffset;
			} else if (_document.body && (_document.body.scrollLeft || _document.body.scrollTop)){
				scrolly = _document.body.scrollTop;
				scrollx = _document.body.scrollLeft;
			} else if (_document.documentElement && (_document.documentElement.scrollLeft || _document.documentElement.scrollTop)){
				scrolly = _document.documentElement.scrollTop;
				scrollx = _document.documentElement.scrollLeft;
			}

			if(e.clientX > w || e.clientX < 0 || e.clientY > h || e.clientY < 0 || e.clientX == "NaN" || scrollx == "NaN" || w == "NaN" || h == "Nan") {
				return;
			}

			var x = e.clientX + scrollx;
			var y = e.clientY + scrolly;

			if (!tagObj.mTrackOptions["args"])
				tagObj.mTrackOptions["args"] = {};

			tagObj.mTrackOptions["args"]["WT.dl"] = "125";
			tagObj.mTrackOptions["args"]["WT.hm_x"] = x;
			tagObj.mTrackOptions["args"]["WT.hm_y"] = y;
			tagObj.mTrackOptions["args"]["WT.hm_w"] = w;
			tagObj.mTrackOptions["args"]["WT.hm_h"] = h;
			tagObj.mTrackOptions["args"]["WT.hm_tv"] = "10.2.10";

			if (tagObj.urlKeepParams)
				tagObj.mTrackOptions['args']['WT.hm_url'] = tagObj.urlKeepParams;

			//tagObj.dcsMultiTrack(hm_data);
			tagObj.dcsMultiTrack(tagObj.mTrackOptions);
		},
		/*callback for register plug, which if fired when the main tag is ready for collection to begin.*/
		hm_loader: function (tag, plugin) {
			if (plugin['filter'] && plugin['filter']())
				return;

			var tagObj = new Webtrends.dcs();
			var config = {
				dcsid  : ((plugin["dcsid"]) ? plugin["dcsid"] : tag["dcsid"]),
				domain : ((plugin["domain"]) ? plugin["domain"] : "hm.webtrends.com"),
				timezone: tag['timezone'],
				i18n: tag['i18n'],
				vtid: tag['vtid'],
				enabled: tag['enabled'],
				privateFlag : true
			};
			
			if (tag['FPCConfig']) {
				var FPCConfig = {};
				var TPCConfig = {};
				
				FPCConfig['enabled'] = tag['FPCConfig']['enabled'];
				FPCConfig['name'] = tag['FPCConfig']['name'];
				FPCConfig['domain'] = tag['FPCConfig']['domain'];
				FPCConfig['expires'] = tag['FPCConfig']['expiry'];
				
				TPCConfig['enabled'] = tag['enabled'];
				TPCConfig['cfgType'] = tag['cfgType'];
			
				config['FPCConfig'] = FPCConfig;
				config['TPCConfig'] = TPCConfig;
			}
			else {
				config['fpc'] = tag['fpc'];
				config['fpcdom'] = tag['fpcdom'];
				config['cookieexpires'] = tag['cookieExp'];
			}
			
			tagObj.init(config);
			
			var urlKeeps = WTHeatMap.getURLKeepParms(plugin);
			tagObj.urlKeepParams = urlKeeps;
			//Add HM data to all hits.
			Webtrends.addTransform( function(dcs_in, o){
				if (!o.argsa) o.argsa = [];
				o.argsa.push('WT.hm_url', urlKeeps);
			}, "collect", tag);
			WTHeatMap.plugMap[tag.dcssID] = tagObj;

			Webtrends.bindEvent("wtmouseup", WTHeatMap.hm_clickEvent, tag);

			//Added for QA - This lets a user specify a set of multiTrack options that are used
			//for the heatmap multiTrack hit
			if (plugin["mTrackOptions"])
				tagObj.mTrackOptions = plugin["mTrackOptions"];
			else
				tagObj.mTrackOptions = {};
		}
	};
	_window['WebtrendsHeatMap'] = WTHeatMap;
	/*register the plugin and pass our callback*/
	Webtrends.registerPlugin('hm', WTHeatMap.hm_loader);

  })(window, window.document);
}

var END_OF_INPUT = -1;
var base64Chars = new Array(
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z','a','b','c','d','e','f',
    'g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v',
    'w','x','y','z','0','1','2','3',
    '4','5','6','7','8','9','+','/'
);
var reverseBase64Chars = new Array();
for (var i=0; i < base64Chars.length; i++){
    reverseBase64Chars[base64Chars[i]] = i;
}
var base64Str;
var base64Count;
function setBase64Str(str){
    base64Str = str;
    base64Count = 0;
}
function readBase64(){    
    if (!base64Str) return END_OF_INPUT;
    if (base64Count >= base64Str.length) return END_OF_INPUT;
    var c = base64Str.charCodeAt(base64Count) & 0xff;
    base64Count++;
    return c;
}
function encodeBase64(str){
    setBase64Str(str);
    var result = '';
    var inBuffer = new Array(3);
    var lineCount = 0;
    var done = false;
    while (!done && (inBuffer[0] = readBase64()) != END_OF_INPUT){
        inBuffer[1] = readBase64();
        inBuffer[2] = readBase64();
        result += (base64Chars[ inBuffer[0] >> 2 ]);
        if (inBuffer[1] != END_OF_INPUT){
            result += (base64Chars [(( inBuffer[0] << 4 ) & 0x30) | (inBuffer[1] >> 4) ]);
            if (inBuffer[2] != END_OF_INPUT){
                result += (base64Chars [((inBuffer[1] << 2) & 0x3c) | (inBuffer[2] >> 6) ]);
                result += (base64Chars [inBuffer[2] & 0x3F]);
            } else {
                result += (base64Chars [((inBuffer[1] << 2) & 0x3c)]);
                result += ('=');
                done = true;
            }
        } else {
            result += (base64Chars [(( inBuffer[0] << 4 ) & 0x30)]);
            result += ('=');
            result += ('=');
            done = true;
        }
        lineCount += 4;
        if (lineCount >= 76){
            result += ('\n');
            lineCount = 0;
        }
    }
    return result;
}
function readReverseBase64(){   
    if (!base64Str) return END_OF_INPUT;
    while (true){      
        if (base64Count >= base64Str.length) return END_OF_INPUT;
        var nextCharacter = base64Str.charAt(base64Count);
        base64Count++;
        if (reverseBase64Chars[nextCharacter]){
            return reverseBase64Chars[nextCharacter];
        }
        if (nextCharacter == 'A') return 0;
    }
    return END_OF_INPUT;
}

function ntos(n){
    n=n.toString(16);
    if (n.length == 1) n="0"+n;
    n="%"+n;
    return unescape(n);
}

function decodeBase64(str){
    setBase64Str(str);
    var result = "";
    var inBuffer = new Array(4);
    var done = false;
    while (!done && (inBuffer[0] = readReverseBase64()) != END_OF_INPUT
        && (inBuffer[1] = readReverseBase64()) != END_OF_INPUT){
        inBuffer[2] = readReverseBase64();
        inBuffer[3] = readReverseBase64();
        result += ntos((((inBuffer[0] << 2) & 0xff)| inBuffer[1] >> 4));
        if (inBuffer[2] != END_OF_INPUT){
            result +=  ntos((((inBuffer[1] << 4) & 0xff)| inBuffer[2] >> 2));
            if (inBuffer[3] != END_OF_INPUT){
                result +=  ntos((((inBuffer[2] << 6)  & 0xff) | inBuffer[3]));
            } else {
                done = true;
            }
        } else {
            done = true;
        }
    }
    return result;
}

function get_enc_string(){
  try {
	location.href="mailto:" + decodeBase64(arguments[0]);	
  }
  catch(e) { }	 
}

function winOpen(theURL, winName, features) {
  winName = window.open(theURL, winName, features);
  if(winName == null || winName.closed) {
    window.open(theURL, winName, features);
    }
  else {
    winName.location.href = theURL;
    }
  if (!winName.closed) {
    winName.focus();
    }
}// JavaScript Document