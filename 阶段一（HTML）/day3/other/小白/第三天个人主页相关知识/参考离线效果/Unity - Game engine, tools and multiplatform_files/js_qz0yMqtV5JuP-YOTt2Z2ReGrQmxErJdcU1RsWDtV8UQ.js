$ = jQuery;;
/* Modernizr v2.5.3 www.modernizr.com */
window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){if(j[a[d]]!==c){return b=="pfx"?a[d]:true}}return false}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c){if(d===false)return a[e];if(F(f,"function")){return f.bind(d||b)}return f}}return false}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");if(F(b,"string")||F(b,"undefined")){return H(e,b)}else{e=(a+" "+q.join(d+" ")+d).split(" ");return I(e,b,c)}}function L(){e["input"]=function(c){for(var d=0,e=c.length;d<e;d++){u[c[d]]=!!(c[d]in k)}if(u.list){u.list=!!(b.createElement("datalist")&&a.HTMLDataListElement)}return u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));e["inputtypes"]=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++){k.setAttribute("type",f=a[d]);e=k.type!=="text";if(e){k.value=l;k.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(f)&&k.style.WebkitAppearance!==c){g.appendChild(k);h=b.defaultView;e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0;g.removeChild(k)}else if(/^(search|tel)$/.test(f)){}else if(/^(url|email)$/.test(f)){e=k.checkValidity&&k.checkValidity()===false}else if(/^color$/.test(f)){g.appendChild(k);g.offsetWidth;e=k.value!=l;g.removeChild(k)}else{e=k.value!=l}}t[a[d]]=!!e}return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=true,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10)){while(d--){j=b.createElement("div");j.id=e?e[d]:h+(d+1);k.appendChild(j)}}f=["&#173;","<style>",a,"</style>"].join("");k.id=h;m.innerHTML+=f;m.appendChild(k);if(!l){m.style.background="";g.appendChild(m)}i=c(k,a);!l?m.parentNode.removeChild(m):k.parentNode.removeChild(k);return!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c){return c(b).matches}var d;y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"});return d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div");d="on"+d;var f=d in e;if(!f){if(!e.setAttribute){e=b.createElement("div")}if(e.setAttribute&&e.removeAttribute){e.setAttribute(d,"");f=F(e[d],"function");if(!F(e[d],"undefined")){e[d]=c}e.removeAttribute(d)}}e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}();var B={}.hasOwnProperty,C;if(!F(B,"undefined")&&!F(B.call,"undefined")){C=function(a,b){return B.call(a,b)}}else{C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")}}if(!Function.prototype.bind){Function.prototype.bind=function(b){var c=this;if(typeof c!="function"){throw new TypeError}var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a;var g=c.apply(f,d.concat(w.call(arguments)));if(Object(g)===g){return g}return f}else{return c.apply(b,d.concat(w.call(arguments)))}};return e}}var K=function(c,d){var f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--){j[i[g].id]=i[g]}e["touch"]="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j["touch"]&&j["touch"].offsetTop)===9;e["csstransforms3d"]=(j["csstransforms3d"]&&j["csstransforms3d"].offsetLeft)===9&&j["csstransforms3d"].offsetHeight===3;e["generatedcontent"]=(j["generatedcontent"]&&j["generatedcontent"].offsetHeight)>=1;e["fontface"]=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);s["flexbox"]=function(){return J("flexOrder")};s["flexbox-legacy"]=function(){return J("boxDirection")};s["canvas"]=function(){var a=b.createElement("canvas");return!!(a.getContext&&a.getContext("2d"))};s["canvastext"]=function(){return!!(e["canvas"]&&F(b.createElement("canvas").getContext("2d").fillText,"function"))};s["webgl"]=function(){try{var d=b.createElement("canvas"),e;e=!!(a.WebGLRenderingContext&&(d.getContext("experimental-webgl")||d.getContext("webgl")));d=c}catch(f){e=false}return e};s["touch"]=function(){return e["touch"]};s["geolocation"]=function(){return!!navigator.geolocation};s["postmessage"]=function(){return!!a.postMessage};s["websqldatabase"]=function(){return!!a.openDatabase};s["indexedDB"]=function(){return!!J("indexedDB",a)};s["hashchange"]=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)};s["history"]=function(){return!!(a.history&&history.pushState)};s["draganddrop"]=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a};s["websockets"]=function(){for(var b=-1,c=p.length;++b<c;){if(a[p[b]+"WebSocket"]){return true}}return"WebSocket"in a};s["rgba"]=function(){D("background-color:rgba(150,255,150,.5)");return G(j.backgroundColor,"rgba")};s["hsla"]=function(){D("background-color:hsla(120,40%,100%,.5)");return G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")};s["multiplebgs"]=function(){D("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(j.background)};s["backgroundsize"]=function(){return J("backgroundSize")};s["borderimage"]=function(){return J("borderImage")};s["borderradius"]=function(){return J("borderRadius")};s["boxshadow"]=function(){return J("boxShadow")};s["textshadow"]=function(){return b.createElement("div").style.textShadow===""};s["opacity"]=function(){E("opacity:.55");return/^0.55$/.test(j.opacity)};s["cssanimations"]=function(){return J("animationName")};s["csscolumns"]=function(){return J("columnCount")};s["cssgradients"]=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length));return G(j.backgroundImage,"gradient")};s["cssreflections"]=function(){return J("boxReflect")};s["csstransforms"]=function(){return!!J("transform")};s["csstransforms3d"]=function(){var a=!!J("perspective");if(a&&"webkitPerspective"in g.style){a=e["csstransforms3d"]}return a};s["csstransitions"]=function(){return J("transition")};s["fontface"]=function(){return e["fontface"]};s["generatedcontent"]=function(){return e["generatedcontent"]};s["video"]=function(){var a=b.createElement("video"),c=false;try{if(c=!!a.canPlayType){c=new Boolean(c);c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(d){}return c};s["audio"]=function(){var a=b.createElement("audio"),c=false;try{if(c=!!a.canPlayType){c=new Boolean(c);c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,"");c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(d){}return c};s["localstorage"]=function(){try{localStorage.setItem(h,h);localStorage.removeItem(h);return true}catch(a){return false}};s["sessionstorage"]=function(){try{sessionStorage.setItem(h,h);sessionStorage.removeItem(h);return true}catch(a){return false}};s["webworkers"]=function(){return!!a.Worker};s["applicationcache"]=function(){return!!a.applicationCache};s["svg"]=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect};s["inlinesvg"]=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==r.svg};s["smil"]=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))};s["svgclippaths"]=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var M in s){if(C(s,M)){x=M.toLowerCase();e[x]=s[M]();v.push((e[x]?"":"no-")+x)}}e.input||L();e.addTest=function(a,b){if(typeof a=="object"){for(var d in a){if(C(a,d)){e.addTest(d,a[d])}}}else{a=a.toLowerCase();if(e[a]!==c){return e}b=typeof b=="function"?b():b;g.className+=" "+(b?"":"no-")+a;e[a]=b}return e};D("");i=k=null;(function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;c.innerHTML="x<style>"+b+"</style>";return d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e};a.createDocumentFragment=Function("h,f","return function(){"+"var n=f.cloneNode(),c=n.createElement;"+"h.shivMethods&&("+h().join().replace(/\w+/g,function(a){b[a]=c(a);f.createElement(a);return'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;if(a.documentShived){return a}if(k.shivCSS&&!e){b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}"+"audio{display:none}"+"canvas,video{display:inline-block;*display:inline;*zoom:1}"+"[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}"+"mark{background:#FF0;color:#000}")}if(!f){b=!i(a)}if(b){a.documentShived=b}return a}var c=a.html5||{};var d=/^<|^(?:button|form|map|select|textarea)$/i;var e;var f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>";e="hidden"in a;f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return true}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!(c.shivCSS===false),shivMethods:!(c.shivMethods===false),type:"default",shivDocument:j};a.html5=k;j(b)})(this,b);e._version=d;e._prefixes=n;e._domPrefixes=q;e._cssomPrefixes=p;e.mq=z;e.hasEvent=A;e.testProp=function(a){return H([a])};e.testAllProps=J;e.testStyles=y;e.prefixed=function(a,b,c){if(!b){return J(a,"pfx")}else{return J(a,b,c)}};g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):"");return e}(this,this.document);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend(options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));
;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/* ====================================================
 * Company: Unity Technologies
 * Author:  Rickard Andersson, rickard@unity3d.com
 *
   TABLE OF CONTENTS
   1. Global variables
   2. Init vars & global events
   3. Basic events & methods
   4. UI events & methods
   5. Window resize checks
   6. Body click events
   7. Other
   8. Global functions
   9. Global plugins
 *
======================================================= */

/****************************************
  ==== 1. GLOBAL VARIABLES
****************************************/

var touchEnabled;   // Is it a touch device
var masterW;        // Content width
var duration = 300; // Default animation duration

(function ($) {
$(document).on("ready", function(){

/****************************************
  ==== 2. INIT VARS & GLOBAL EVENTS
****************************************/

  touchEnabled = (Modernizr.touch) ? true : false;
  masterW = getWidth();
  if (masterW > 766) subnavCheck();
  tertiarynavCheck();
  renderFooter();

  // Replace standard form select elements
  // Make sure webform selects are not disabled first.
  $('.webform-client-form select').removeAttr('disabled');
  $('select').not("[multiple=multiple]").fancySelect({ "includeBlank": true });

  // Sets language cookie when switching language
  $('.languages a').on("click", function(){
    var lang = $(this).attr("data-lang");
    $.cookie("lang_pref", lang, { expires: 30, path: "/", domain: "unity3d.com" });
  });

  // Toggle search
  $(".search-icon").on("click", function(){
    var $this = $(this);
    var $search = $(".search-wrapper");

    if ($search.hasClass("search-expanded")) {
      $search.removeClass("search-expanded");
      $this.removeClass("close-icon");
    }
    else {
      $search.addClass("search-expanded");
      $this.addClass("close-icon");
      $search.contents().find("input.gsc-input").focus();
      $search.contents().find("input.gsc-search-button-v2").attr("src", blank).addClass("g-search-icon");
    }
  });

  // Toggle user dropdown
  $('.user-icon').on("click", function(){
    var $wrapper = $('.user-wrapper');
    var $name = $wrapper.find(".name-placeholder");
    if ($wrapper.hasClass('user-expanded')) {
      $wrapper.removeClass('user-expanded');
    }
    else {
      $wrapper.addClass('user-expanded');
    }
  });

  // Make sure the name is written in placeholder.
  if (window.UnityUser) {
    UnityUser.ready(function () {
      $('.user-wrapper .name-placeholder').text(UnityUser.name);
    });
  }

  // Make third level nav stuck
  if($('.tertiary-nav ul').size() > 0 && masterW > 979 ){

    var $nav = $('.tertiary-nav'),
        $wrap = $('.wrap',$nav),
        offset = $nav.offset().top;

    $wrap.prepend('<h2>'+ $('.sub-nav a.active-trail').text() +'</h2>');
    $('ul',$wrap).append('<li class="top"></li>');

    $('.tertiary-nav').on('click','.top',function(){
      $('html, body').animate({ scrollTop: 0 }, 250, 'swing');
    });

    $(window).scroll(function(){
      var p = $(window).scrollTop();
      (p > offset) ? $nav.addClass('navstuck') : $nav.removeClass('navstuck');
    });
    
  }

  // Append a dropdown if items doesn't fit
  function subnavCheck(){

    var $wrap = $('.section-header'),
        $submenu = $('nav.sub-nav ul'),
        subWidth = $submenu.width(),
        acctualWidth = 0,
        more = false,
        dropdownHtml = '';
        
    $('nav.sub-nav ul li.more').remove();
    $('nav.sub-nav ul li').show();

    $.each($('li',$submenu), function(i,li){

      $this = $(this);
      acctualWidth += $this.outerWidth(true);

      // Is dropdown needed?
      if(acctualWidth + 80 > subWidth && !more){
        $this.before('<li class="more"><a href="" class="rel">'+ submore +'</a></li>');
        more = true;
      }

      // Clone and append overflowing list items to dropdown
      if(more && $('.subnav-dropdown').size() < 1){
        $wrap.append('<div class="subnav-dropdown clear"><ul></ul></div>');
      }
      if(more){
        $dropdown = $('.subnav-dropdown ul');
        $this.clone().appendTo( $dropdown );
        $this.addClass('hide');
      }

    });

    $('nav.sub-nav').on('click','.more',function(e){

      e.preventDefault();
      var $this = $(this),
          $dropdown = $('.section-header .subnav-dropdown');
          offset = $('nav.sub-nav li.more').offset().left - ($this.width() + 12);
          $dropdown.css('left',offset);

      if(!$this.hasClass('open')){
        $this.addClass('open');
        $dropdown.show();
      }
      else {
        $this.removeClass('open');
        $dropdown.hide();
      }
    });

  }

  // Create a dropdown to replace the tabs if the tabs overflow the wrapper
  function tertiarynavCheck(){
    if($('.tertiary-nav ul').size() > 0){

      var $tabs = $('.tertiary-nav ul.tabbed'),
          $dropdown = $('.tertiary-nav ul.dropdown'),
          $parent = $('.tertiary-nav .g12'),
          $wrap = $('.tertiary-nav .wrap'),
          maxWidth = $wrap.width(),
          fullWidth = 0;

      $.each($('.tertiary-nav ul.tabbed li'), function(i,li){
        fullWidth += $(this).outerWidth(true) + 1;
      });

      if(fullWidth > maxWidth && $('.dropdown-lbl',$parent).size() < 1){
        $tabs.addClass('hidden');
        var subnavLabel = ($('.sub-nav a.active-trail').size() > 1) ? $('.sub-nav a.active-trail').text() + ': ' : '';
        $wrap.prepend('<div class="dropdown-lbl toggle" data-target="tertiary-dropdown">'+ subnavLabel + $('.tertiary-nav ul.tabbed a.active-trail').text() +'</div>');
      }
      else if(fullWidth <= maxWidth) {
        $('.dropdown-lbl',$parent).remove();
        $dropdown.hide();
        $tabs.removeClass('hidden');
      }

    }
  }

  $('#newsletter-signup').on('submit',function(e){

    e.preventDefault();

    var email = $('.newsletter-signup #email'),
        label = $('.newsletter-signup #agree'),
        errors = 0,
        rege = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    // Reset errors
    errors = 0;
    email.removeClass('error');
    label.parent().removeClass('error');

    // Validation
    if(email.val() == '' || !rege.test(email.val())){
      email.addClass('error');
      email.focus();
      errors++;
    }
    if(label.is(':checked') == false){
      label.parent().addClass('error');
      errors++;
    }

    // If everything is peachy, do some ajax
    if(errors == 0){

      $('.newsletter-signup .field, .newsletter-signup .checkbox').addClass('hidden');
      $('.newsletter-signup .loading').removeClass('hide');

      var dataString = {email: email.val()};
      var create_url = $(this).attr('action') + '.json';

      var request = $.ajax({
        type: 'POST',
        url: create_url,
        data: dataString,
        dataType: 'json',
        success: function(){
          $('.newsletter-signup .loading').addClass('hide');
          $('.newsletter-signup .success').removeClass('hide');
          setTimeout(function(){
            $('.newsletter-signup .success').addClass('hide');
            $('.newsletter-signup .field, .newsletter-signup .checkbox').removeClass('hidden');
          }, 10000);
        }
      });
      request.fail(function(jqXHR, textStatus){
        $('.newsletter-signup .loading').addClass('hide');
        $('.newsletter-signup .failed').removeClass('hide');
        setTimeout(function(){
          $('.newsletter-signup .failed').addClass('hide');
          $('.newsletter-signup .field, .newsletter-signup .checkbox').removeClass('hidden');
        }, 3000);
      });

    }
  });

  if($.cookie('unity_terms') == null){
    $('.cookies-dialog').removeClass('hide');
  }
  $('.cookies-dialog .gray-btn').on('click',function(e){ 
    $.cookie('unity_terms', 'accepted', { expires: 365 });
    $('.cookies-dialog').addClass('hide');
  });
  

/****************************************
  ==== 3. BASIC EVENTS/METHODS
****************************************/

  /* TOGGLE ANYTHING
   * Can be used for showing and hiding single elements and tabbed content
   * Usage: 
   * - Add data-target="[ID]|[CLASS](optional)" to the element which has the toggle class
   * - Add data-ani="[fade][slide]" to change default animation (if empty, the default is show/hide)
   */
  $('#master-wrapper .toggle').on('click',function(e){
    e.preventDefault();

    $('a',$(this).parent().parent()).removeClass('selected');

    var $this = $(this),
        targets = $this.attr('data-target'),
        animation = ($this.attr('data-ani') == '' || $this.attr('data-ani') == undefined) ? 'default' : $this.attr('data-ani'),
        reverse = ($this.hasClass('clicked selected')) ? true : false;

    // Single element or multiple elements
    if(targets.indexOf('|') < 1){
      var $el = $('#' + targets);
      switch(animation){
        case 'fade':
          (reverse) ? $($el).stop(true,true).fadeOut(duration) : $($el).stop(true,true).fadeIn(duration);
          break;
        case 'slide':
          (reverse) ? $($el).stop(true,true).slideUp(duration) : $($el).stop(true,true).slideDown(duration);
          break;
        case 'default':
          (reverse) ? $($el).hide() : $($el).show();
          break;
      }
    }
    else {
      var $el = targets.split('|');
      switch(animation){
        case 'fade':
          $('.' + $el[1]).stop(true,true).fadeOut(duration);
          $('#' + $el[0]).stop(true,true).fadeIn(duration);
          break;
        case 'slide':
          $('.' + $el[1]).stop(true,true).slideUp(duration, function(){
            $('#' + $el[0]).stop(true,true).slideDown(duration);
          });
          break;
        case 'default':
          $('.' + $el[1]).hide();
          $('#' + $el[0]).show();
          break;
      }
    }
    (reverse) ? $this.removeClass('clicked selected') : $this.addClass('clicked selected');    
  });
  
  /* TABS
   * Adds "selected" class to tab, hooks into toggle event
   * Usage:
   * Add class "toggle" to the anchor if it's inline tabbed content you want 
   * Add class "nojs" to UL element if you want to disable the JS events
   */
  $('.tabs li a').on('click',function(e){

    var $parent = $(this).parent().parent(),
        $this = $(this);

    if(!$parent.hasClass('nojs')){
      e.preventDefault();
      $('a',$parent).removeClass('selected');
      $this.addClass('selected');
    }

  });

  /* FAQ
   * Toggles faq's
   * Usage:
   * <div class="faq clear">
   *   <a class="expand" href="#">QUESTION</a>
   *   <div class="info clear" style="display:none;">
   *     <p>ANSWER</p>
   *   </div>
   * </div>
   */
  $('.faq .expand').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('expanded');
    $(this).next('.info').slideToggle('fast'); 
  });

  /* CUSTOM SELECT
   * Used for custom dropdowns, which are not generated by fancy select
   * Usage:
   * <div class="select-box rel">
   *   <div class="trigger">LABEL</div>
   *   <ul class="options">
   *     <li>option</li>
   *     ...
   *   </ul>
   * </div>
   */

  $('.select-box .trigger').on('click',function(){
    var $options = $(this).parent().find('.options');
    $('.select-box .options').not($options).removeClass('open');
    $(this).toggleClass('open');
    $options.toggleClass('open');
  });

  $('.select-box .options').on('click','li',function(){
    var $parent = $(this).parent().parent().parent(),
        $select = $(this).parent().parent();

    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    if(!$select.hasClass('link-list')){
      $parent.find('.trigger').text($(this).text());
    }
    $('.select-box .options, .select-box .trigger').removeClass('open');
  });


  /* PLAY YOUTUBE VIDEO INLINE
   * Use custom image instead of youtubes default crappy cover
   * Usage:
   * <a href="EMBED SRC" id="[id]" class="inline-video rel">
   *   <div class="thumb rel">
   *     <div class="play"></div>
   *     <img src="THUMBNAIL" alt="" />
   *   </div>
   *   <div class="player">
   *     <iframe class="hide"></iframe>
   *   </div>
   * </a>
   */
  var currentIV;
  $('.inline-video').on('click',function(e){

    e.preventDefault();

    var $this = $(this),
        videoUrl = $this.attr('href'),
        quality = (touchEnabled && getWidth() < 768) ? '' : '&vq=hd1080',
        videoWidth = $this.outerWidth(true),
        videoHeight = Math.round(videoWidth * 0.5625);

    currentIV = '#' + $this.attr('id');
    $('.thumb',$this).css('opacity',0);
    $this.css('height',videoHeight + 'px');

    // Wait a bit before starting video
    setTimeout(function(){
      $('iframe',$this).attr('src',(videoUrl + quality)).removeClass('hide').css('height',videoHeight-1 + 'px');
    },750);

    // Force iframe to fill up
    setTimeout(function(){
      $('iframe',$this).css('height',videoHeight + 'px');
    },2150);

  });
  $(window).on('resize',function(){
    // Check show reel video
    if(!$(currentIV +' iframe').hasClass('hide')){
      var videoWidth = $(currentIV).outerWidth(true),
          videoHeight = Math.round(videoWidth * 0.5625);
      $(currentIV + ', '+ currentIV +' iframe').css('height',videoHeight + 'px');
    }
  });

  /* ANCHOR JUMP
   * Jump to specific anchor
   */
  $('body').on('click','.jump',function(){

    var id = $(this).attr('data-target'),
        anchor = $('#section-' + id).offset().top,
        gap = ($('.tertiary-nav ').size() > 0) ? 70 : 0;

    $('html,body').animate({ scrollTop: anchor - gap }, 500, 'swing');
  });


  // File input filename check
  $('.field-file input[type=file]').on('change', function(){

    var $this = $(this),
        $val = $this.val(),
        $input = $this.siblings('.file-input'),
        valArray = $val.split('\\'),
        filename = valArray[valArray.length-1];

    if(filename !== '') {
      $input.text(filename);
    }

  });



/****************************************
  ==== 4. UI EVENTS/METHODS
****************************************/

  // Enable tooltips
  enableTooltips();


/****************************************
  ==== 5. WINDOW RESIZE CHECKS
****************************************/

  $(window).on('resize',function(){

    tertiarynavCheck();
    renderFooter();

  });


/****************************************
  ==== 6. BODY CLICK
****************************************/

  // Hide elements on body click/touch
  $('html').bind('click', function(e){
    if($(e.target).closest('.user-wrapper').length == 0 && $(e.target).closest('.user-icon').length == 0){ $('.user-wrapper').removeClass('user-expanded'); }
    if($(e.target).closest('.tertiary-nav .wrap').length == 0){ $('.tertiary-nav ul.dropdown').hide(); $('.tertiary-nav .dropdown-lbl').removeClass('clicked'); }
    if($(e.target).closest('.fancy-select').length == 0){ $('.fancy-select ul, .fancy-select .trigger').removeClass('open'); }
    if($(e.target).closest('.select-box').length == 0){ $('.select-box ul, .select-box .trigger').removeClass('open'); }
    if($(e.target).closest('.sub-nav .subnav-dropdown').length == 0 && $(e.target).closest('.sub-nav .more').length == 0){ $('.section-header .subnav-dropdown').removeAttr('style'); $('.sub-nav .more').removeClass('open'); }
  });


/****************************************
  ==== 7. OTHER
****************************************/

  // iPad fix for orientation change
  if(window.addEventListener){
    window.addEventListener('orientationchange', function(){

    });
  }

});


/****************************************
  ==== 8. GLOBAL FUNCTIONS
****************************************/

  /* TOOL TIPS
   * Display a tool tip on hover
   * Vars:
   * - start offset: where should the animation start (integer)
   * - end offset: where should the animation end (integer)
   * - direction: top/bottom
   * Usage:
   * <div class="tt" data-distance="[start offset]|[end offset]|[direction]">
   *   <div class="element"></div>
   *   <div class="tip">Tooltip text</div>
   * </div>
   */
  window.enableTooltips = function() {
    if(!touchEnabled){
      $('.tt').hover(function(){
        var d = $(this).attr('data-distance').split('|');
        $('.tip', $(this)).css('top',d[0]+'px');
        (d[2] == 'top') ? $('.tip', $(this)).addClass('t') : $('.tip', $(this)).addClass('b');
        $('.tip', $(this)).addClass('tip-visible');
        $(this).find('.tip').stop(true, true).removeClass('hide').animate({ 'top': d[1], 'opacity': 1 }, 200 );
      },function(){
        var d = $(this).attr('data-distance').split('|');
        $(this).find('.tip').stop(true,false).animate({ 'top': d[0], 'opacity': 0 }, 200, function(){
          $(this).addClass('hide').css('marginLeft',0);
          $('.tip', $(this)).removeClass('tip-visible');
        });
      });
    }
  }

  // Get footer height and set height of empty footer div
  window.renderFooter = function() {
    var ftHeight = $('footer.clear').height();
    $('.fs').css('height', ftHeight);
  }

  // Get viewport height
  window.getHeight = function() { if(typeof window.innerHeight != 'undefined'){var viewportheight = window.innerHeight;} else if(typeof document.documentElement != 'undefined' && typeof document.documentElement.clientHeight != 'undefined' && document.documentElement.clientHeight != 0){var viewportheight = document.documentElement.clientHeight;} else {var viewportheight = document.getElementsByTagName('body')[0].clientHeight;} return viewportheight; }

  // Get viewport width
  window.getWidth = function() { if (typeof window.innerWidth != 'undefined'){var viewportwidth = window.innerWidth;} else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0){var viewportwidth = document.documentElement.clientWidth;} else {var viewportwidth = document.getElementsByTagName('body')[0].clientWidth;} return viewportwidth; }

  // Returns current OS
  window.getOS = function() {
    var os;
    if (navigator.appVersion.indexOf("Win") != -1) {
      os = "windows";
    }
    else if (navigator.appVersion.indexOf("Mac") != -1 && navigator.appVersion.indexOf("Mobile") < 0) {
      os = "osx";
    }
    else if (navigator.appVersion.indexOf("X11") != -1 || navigator.appVersion.indexOf("Linux") != -1) {
      os = "na";
    }
    else {
      os = "na";
    }
    return os;
  }

  /* FORM VALIDATION
   * Returns number of errors (integer)
   * Usage:
   * var errors = validateform($('FORM OBJECT'));
   */

  window.validateform = function(form) {
    var rege = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        regnum = /^\s*\d+\s*$/;

    var $fields = $('.req', form).not('select'),
        errors = 0;

    $('.req', form).removeClass('error');
    $('p.error', form).addClass('hide');

    $fields.each(function(){

      // Selects
      if($(this).parent().hasClass('fancy-select')){

        var filled = ($(this).parent().find('li.selected').size() > 0) ? true : false,
            val = (filled) ? $(this).parent().find('li.selected').attr('data-raw-value') : '';

        var visible = $(this).parent().parent().parent().css('display') == 'block';
        if($(this).parent().parent().hasClass('states-us')){
          if(val == '' && $('.country li.selected').attr('data-raw-value') == 'US'){
            $(this).addClass('error');
            $(this).parent().parent().find('.error').removeClass('hide');
            errors++;
          }
          else {
            return;
          }
        }
        else if($(this).parent().parent().hasClass('states-ca')){
          if(val == '' && $('.country li.selected').attr('data-raw-value') == 'CA'){
            $(this).addClass('error');
            $(this).parent().parent().find('.error').removeClass('hide');
            errors++;
          }
          else {
            return;
          }
        }
        else if($(this).parent().parent().hasClass('states-cn')){
          if(val == '' && $('.country li.selected').attr('data-raw-value') == 'CN'){
            $(this).addClass('error');
            $(this).parent().parent().find('.error').removeClass('hide');
            errors++;
          }
          else {
            return;
          }
        }
        else if(val == '' && visible){
          $(this).addClass('error');
          $(this).parent().parent().parent().find('.error').removeClass('hide');
          errors++;
        }
      }
      else if($(this).val() == ''){
        $(this).addClass('error');
        $(this).parent().parent().find('.error').removeClass('hide');
        errors++;
      }
      if($(this).attr('type') == 'file' && $(this).parent().parent().find('.file-input').text() == ''){
        $(this).parent().parent().find('.file-input').addClass('error');
        $(this).parent().parent().find('.error').removeClass('hide');
        errors++;
      }
      if($(this).hasClass('email') && !rege.test($(this).val())){
        $(this).addClass('error');
        $(this).parent().parent().find('.error').removeClass('hide');
        errors++;
      }
      if($(this).hasClass('required_num') && !regnum.test($(this).val())){
        $(this).addClass('error');
        $(this).parent().parent().find('.error').removeClass('hide');
        errors++;
      }
      if(!$(this).hasClass('error')) {
        $(this).addClass('ok');
      }

    });

    return errors;

  }

  window.getCountryExtras = function(val) {

    //if($('body').hasClass('context-sales')) return false;

    if(val == 'CA'){
      $('#canada_tr').show();
      $('#usa_tr, #china_tr').hide();
    }
    else if(val == 'US'){
      $('#usa_tr').show();
      $('#canada_tr, #china_tr').hide();
    }
    else if(val == 'CN'){
      $('#china_tr').show();
      $('#canada_tr, #usa_tr').hide();
    }
    else {
      $('#usa_tr, #canada_tr, #china_tr').hide();
    }

  }

/****************************************
  ==== 9. GLOBAL PLUGINS
****************************************/

  /* IMAGE PRELOADER
   * Preloads an array of images
   * Usage:
   * $.preload(imagesArr,{
   *   init: function(loaded, total) {},
   *   loaded: function(img, loaded, total) {},
   *   loaded_all: function(loaded, total) {}
   * });
   */
  window.imgList = [];
  $.extend({
    preload: function(imgArr, option){
      var setting = $.extend({ init: function(loaded, total) {},loaded: function(img, loaded, total) {},loaded_all: function(loaded, total) {} }, option); var total = imgArr.length; var loaded = 0; setting.init(0, total);
      for(var i in imgArr) { imgList.push($("<img />").attr("src", imgArr[i]).load(function(){ loaded++; setting.loaded(this, loaded, total); if(loaded == total) { setting.loaded_all(loaded, total); } })); }
    }
  });

/* FANCY SELECT
 * https://github.com/octopuscreative/FancySelect
 * Replaces form selects
 * Usage:
 * $('select').fancySelect();
 */
  (function(){

    var $;
    $ = window.jQuery || window.Zepto || window.$;

    $.fn.fancySelect = function(opts){

      var isiOS, settings;

      if(opts == null){
        opts = {};
      }

      settings = $.extend({
        forceiOS: false,
        includeBlank: false,
        optionTemplate: function(optionEl){
          return optionEl.text();
        },
        triggerTemplate: function(optionEl){
          return optionEl.text();
        }
      }, opts);

      isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);

      return this.each(function(){

        var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper;
        sel = $(this);

        if(sel.hasClass('fancified') || sel[0].tagName !== 'SELECT'){
          return;
        }

        var selclasses = (sel.attr('class')) ? sel.attr('class') : '';

        sel.addClass('fancified');
        sel.css({
          width: 1,
          height: 1,
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0
        });

        sel.wrap('<div class="fancy-select">');

        wrapper = sel.parent();
        if(sel.data('class')){
          wrapper.addClass(sel.data('class'));
        }

        wrapper.append('<div class="trigger '+selclasses+'">');
        if(!(isiOS && !settings.forceiOS)){
          wrapper.append('<ul class="options">');
        }

        trigger = wrapper.find('.trigger');
        options = wrapper.find('.options');
        disabled = sel.prop('disabled');

        if(disabled){
          wrapper.addClass('disabled');
        }

        updateTriggerText = function(){
          var triggerHtml;
          triggerHtml = settings.triggerTemplate(sel.find(':selected'));
          return trigger.html(triggerHtml);
        };

        trigger.on('close.fs', function(){
          trigger.removeClass('open');
          return options.removeClass('open');
        });

        trigger.on('click.fs', function(){
          var offParent, parent;
          $('.fancy-select .trigger').not(trigger).removeClass('open');
          $('.fancy-select ul').not(options).removeClass('open');
          if(!disabled){
            trigger.toggleClass('open');
            if(isiOS && !settings.forceiOS){
              if(trigger.hasClass('open')){
                return sel.focus();
              }
            }
            else {
              if(trigger.hasClass('open')){
                parent = trigger.parent();
                offParent = parent.offsetParent();
                if((parent.offset().top + parent.outerHeight() + options.outerHeight() + 20) > $(window).height() + $(window).scrollTop()){
                  options.addClass('overflowing');
                }
                else {
                  options.removeClass('overflowing');
                }
              }
              options.toggleClass('open');
              if(!isiOS){
                return sel.focus();
              }
            }
          }
        });

        sel.on('enable', function(){
          sel.prop('disabled', false);
          wrapper.removeClass('disabled');
          disabled = false;
          return copyOptionsToList();
        });

        sel.on('disable', function(){
          sel.prop('disabled', true);
          wrapper.addClass('disabled');
          return disabled = true;
        });

        sel.on('change.fs', function(e){
          if($(this).parent().parent().parent().hasClass('country')){
            getCountryExtras($(this).val());
          }
          if(e.originalEvent && e.originalEvent.isTrusted){
            return e.stopPropagation();
          }
          else {
            return updateTriggerText();
          }
        });

        sel.on('keydown', function(e){

          var hovered, newHovered, w;
          w = e.which;
          hovered = options.find('.hover');
          hovered.removeClass('hover');

          if(!options.hasClass('open')){
            if(w === 13 || w === 32 || w === 38 || w === 40){
              e.preventDefault();
              return trigger.trigger('click.fs');
            }
          }
          else {
            if(w === 38){
              e.preventDefault();
              if(hovered.length && hovered.index() > 0){
                hovered.prev().addClass('hover');
              }
              else {
                options.find('li:last-child').addClass('hover');
              }
            }
            else if(w === 40){
              e.preventDefault();
              if(hovered.length && hovered.index() < options.find('li').length - 1){
                hovered.next().addClass('hover');
              }
              else {
                options.find('li:first-child').addClass('hover');
              }
            }
            else if(w === 27){
              e.preventDefault();
              trigger.trigger('click.fs');
            }
            else if(w === 13 || w === 32){
              e.preventDefault();
              hovered.trigger('click.fs');
            }
            else if(w === 9){
              if(trigger.hasClass('open')){
                trigger.trigger('close.fs');
              }
            }
            else {
              $('li',options).removeClass('hover');
              setTimeout(function(){
                options.find('li[data-raw-value="'+ sel.find(':selected').val() +'"]').addClass('hover');
              }, 100);
            }

            setTimeout(function(){
              newHovered = options.find('.hover');
              if(newHovered.length){
                options.scrollTop(0);
                sel.val(newHovered.attr('data-raw-value')).trigger('change.fs');
                return options.scrollTop(newHovered.position().top - 12);
              }
            }, 100);

          }
        });

        options.on('click.fs', 'li', function(e){
          var clicked;
          clicked = $(this);
          
          sel.val(clicked.attr('data-raw-value'));

          // Hack for MWU create profile
          if($('.field-type-addressfield').size() > 0){
            sel.trigger('change');
          }

          if(!isiOS){
            sel.trigger('blur.fs').trigger('focus.fs');
          }

          options.find('.selected').removeClass('selected');
          clicked.addClass('selected');

          trigger.trigger('close.fs');
          return sel.val(clicked.attr('data-raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');
        });

        /*options.on('mouseenter.fs', 'li', function(){
          var hovered, nowHovered;
          nowHovered = $(this);
          hovered = options.find('.hover');
          hovered.removeClass('hover');
          return nowHovered.addClass('hover');
        });

        options.on('mouseleave.fs', 'li', function(){
          return options.find('.hover').removeClass('hover');
        });*/

        copyOptionsToList = function(){
          var selOpts;
          updateTriggerText();
          if(isiOS && !settings.forceiOS){
            return;
          }
          selOpts = sel.find('option');
          return sel.find('option').each(function(i, opt){
            var optHtml;
            opt = $(opt);
            if(!opt.prop('disabled') && (opt.val() || settings.includeBlank)){
              optHtml = settings.optionTemplate(opt);
              if(opt.prop('selected')){
                return options.append("<li data-raw-value=\"" + (opt.val()) + "\" class=\"selected\">" + optHtml + "</li>");
              } else {
                return options.append("<li data-raw-value=\"" + (opt.val()) + "\">" + optHtml + "</li>");
              }
            }
          });
        };

        sel.on('update.fs', function(){
          wrapper.find('.options').empty();
          return copyOptionsToList();
        });

        return copyOptionsToList();

      });
    };
  }).call(this);

  /* https://github.com/mathiasbynens/jquery-placeholder v2.0.7 by @mathias */
  ;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd && define.amd.jQuery) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function raw(s) {
    return s;
  }

  function decoded(s) {
    return decodeURIComponent(s.replace(pluses, ' '));
  }

  function converted(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    try {
      return config.json ? JSON.parse(s) : s;
    } catch(er) {}
  }

  var config = $.cookie = function (key, value, options) {

    // write
    if (value !== undefined) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      value = config.json ? JSON.stringify(value) : String(value);

      return (document.cookie = [
        encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }

    // read
    var decode = config.raw ? raw : decoded;
    var cookies = document.cookie.split('; ');
    var result = key ? undefined : {};
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = decode(parts.join('='));

      if (key && key === name) {
        result = converted(cookie);
        break;
      }

      if (!key) {
        result[name] = converted(cookie);
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) !== undefined) {
      $.cookie(key, '', $.extend(options, { expires: -1 }));
      return true;
    }
    return false;
  };

}));
})(jQuery);
;
/* ====================================================
 * Company: Unity Technologies
 * Author:  Rickard Andersson, rickard@unity3d.com
 * 
   TABLE OF CONTENTS
   1. Sticky mobile header
   2. Mobile menu icons
   3. Footer links
   x. Global functions
   x. Mobile plugins
 *
======================================================= */

var menuOpen = false;

$(document).on('ready',function(){

/****************************************
  ==== 1. STICKY MOBILE HEADER
****************************************/

  if(masterW < 981){
    $('header.m-header').headroom();
  }

/****************************************
  ==== 2. MOBILE MENU ICONS
****************************************/

  // Toggle mobile menu
  $('.m-navbtn').on('click',function(){
    if(menuOpen){
      $(this).removeClass('close');
      $('html').removeClass('menuopen');
      $('.mobile-menu .wrap').removeAttr('style');
      $('.curtains').show();
      menuOpen = false;
    }
    else {
      $(this).addClass('close');
      $('.mobile-menu .wrap').height(getHeight());
      $('html').addClass('menuopen');
      $('.curtains').hide();
      menuOpen = true;
      prettifySearch();
    }
  });

  // Open menu and foucs search field
  $('.m-searchbtn').on('click',function(){
    if(menuOpen){
      $('.mobile-search input[type=text]').focus();
    }
    else {
      $('html').addClass('menuopen');
      $('.m-navbtn').addClass('close');
      menuOpen = true;
      prettifySearch(true);
    }
  });

  // Open menu and foucs search field
  $('.m-userbtn').on('click',function(){
    if(!menuOpen){
      $('.m-navbtn').trigger('click');
    }
  });

/****************************************
  ==== 3. FOOTER LINKS
****************************************/

  $('footer .links h3, footer .partners h3').on('click',function(){
    
    var $parent = $(this).parent();
    ($parent.hasClass('expanded')) ? $parent.removeClass('expanded') : $parent.addClass('expanded');
    renderFooter();
    
  });

});

/****************************************
  ==== XX. GLOBAL FUNCTIONS
****************************************/

function prettifySearch(focus){
  setTimeout(function(){
    if(focus){
      $('.mobile-search').contents().find('input.gsc-input').focus();
    }
    $('.mobile-search').contents().find('input.gsc-input').attr('placeholder','...');
    $('.mobile-search').contents().find('input.gsc-search-button-v2').attr('src',blank).addClass('g-search-icon');
  },150);
}


/****************************************
  ==== XX. MOBILE PLUGINS
****************************************/

/*!
 * headroom.js v0.6.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,e=a||{};for(c=1;c<arguments.length;c++){var f=arguments[c]||{};for(b in f)e[b]="object"==typeof e[b]?d(e[b],f[b]):e[b]||f[b]}return e}function e(a){return a===Object(a)?a:{down:a,up:a}}function f(a,b){b=d(b,f.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=e(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var g={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},f.prototype={constructor:f,init:function(){return f.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var b=this.classes;this.initialised=!1,a.removeEventListener("scroll",this.debouncer,!1),this.elem.classList.remove(b.unpinned,b.pinned,b.top,b.initial)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,a.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==a.pageYOffset?a.pageYOffset:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getDocumentHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},f.options={tolerance:{up:0,down:0},offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},f.cutsTheMustard="undefined"!=typeof g&&g.rAF&&g.bind&&g.classList,a.Headroom=f}(window,document);

(function($) {

  if(!$) {
    return;
  }

  $.fn.headroom = function(option) {
    return this.each(function() {
      var $this   = $(this),
        data      = $this.data('headroom'),
        options   = typeof option === 'object' && option;

      options = $.extend(true, {}, Headroom.options, options);

      if (!data) {
        data = new Headroom(this, options);
        data.init();
        $this.data('headroom', data);
      }
      if (typeof option === 'string') {
        data[option]();
      }
    });
  };

  $('[data-headroom]').each(function() {
    var $this = $(this);
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));
;
/* ====================================================
 * Company: Unity Technologies
 * Author:  Morten Sordahl Nielsen, mortensn@unity3d.com
 ======================================================= */

// When opening a dialog, its "definition" is created for it, for
// each editor instance. The "dialogDefinition" event is then
// fired. We should use this event to make customizations to the
// definition of existing dialogs.
if (typeof CKEDITOR != 'undefined') {
    CKEDITOR.config.removePlugins = 'contextmenu';

    CKEDITOR.on('dialogDefinition', function (ev) {
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
        var dialogElement = dialogDefinition.dialog.getElement();

        // Set data-dialog-type and ID for css targets.
        dialogElement.data('dialog-name', dialogName);
        dialogElement.setAttribute('id', 'dialog_' + dialogName);

        if (dialogName == 'link') {  // Modify the "Link" dialog.
            var infoTab = dialogDefinition.getContents('info');

            // Remove the "Link Type", "Browser" and "protocol".
            infoTab.remove('linkType');
            infoTab.remove('browse');
            infoTab.remove('protocol');

            // Removing cancel button. The buttons array is reversed on mac
            // so a hardcoded splice wont work. We need to find the button before removing.
            for (var key in dialogDefinition.buttons) {
                if (dialogDefinition.buttons[key] === CKEDITOR.dialog.cancelButton) {
                    dialogDefinition.buttons.splice(key,1);
                }
            }

            // Remove tabs.
            dialogDefinition.removeContents('target');
            dialogDefinition.removeContents('advanced');
            dialogDefinition.removeContents('upload');

            // Rewrite the 'onFocus' handler to always focus 'url' field.
            dialogDefinition.onFocus = function () {
                var urlField = this.getContentElement('info', 'url');
                urlField.select();
            };
        } else if (dialogName == 'image') {  // Modify the "Image" dialog.
            var infoTab = dialogDefinition.getContents('info');

            // Remove elements from dialog.
            infoTab.remove('txtUrl');
            infoTab.remove('ratioLock');
            infoTab.remove('txtWidth');
            infoTab.remove('txtHeight');
            infoTab.remove('txtBorder');
            infoTab.remove('txtHSpace');
            infoTab.remove('txtVSpace');

            // Removing cancel button. The buttons array is reversed on mac
            // so a hardcoded splice wont work. We need to find the button before removing.
            for (var key in dialogDefinition.buttons) {
                if (dialogDefinition.buttons[key] === CKEDITOR.dialog.cancelButton) {
                    dialogDefinition.buttons.splice(key,1);
                }
            }

            // Remove the "Target", "Upload" and "advanced" tab.
            dialogDefinition.removeContents('Link');
            dialogDefinition.removeContents('advanced');
        }
    });
}
;
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.0 (Mon, 20 Aug 2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

$(document).on('ready',function(){

  $('body').addClass('fancy');

  $('a.fancy-page').fancybox({ maxWidth: 660, minHeight: 400, maxHeight: 600, fixed: true, padding : 25, type: 'ajax' });
  $('a.fancy-iframe').fancybox({ maxWidth: 800, maxHeight: 600, fixed: true, padding: 25, type: 'iframe' });
  $('a.fancy-inline').fancybox({ maxWidth: '60%', minHeight: 600, maxHeight: 600, fixed: true, padding: 25 });

  if(!touchEnabled && masterW < 441 || touchEnabled && masterW > 440 || !touchEnabled){
    // Add fancybox callback for mwu.
    if (typeof trackGallery !== 'undefined') {
      $('a.fancy-image').fancybox({maxWidth: '85%', maxHeight: '85%', fixed: true, padding: 0, nextEffect: 'fade', prevEffect: 'fade', beforeShow: trackGallery});
    }
    else {
      $('a.fancy-image').fancybox({maxWidth: '85%', maxHeight: '85%', fixed: true, padding: 0, nextEffect: 'fade', prevEffect: 'fade'});
    }
    $('a.fancy-webplayer').fancybox({ maxWidth: '65%', minWidth: '65%', maxHeight: '75%', minHeight: '75%', fixed: true, padding: 0, type: 'iframe', helpers : { overlay : { css : { 'background' : 'rgba(0,0,0,0.95)' } } } });
    // Add fancybox callback on mwu.
    if (typeof ytInit !== 'undefined') {
      $('a.fancy-video').fancybox({maxWidth: 1500, maxHeight: 844, width: '90%', height: '90%', fixed: true, padding: 0, type: 'iframe', afterShow: ytInit, beforeClose: ytResetTimerDict});
    }
    else {
      $('a.fancy-video').fancybox({maxWidth: 1500, maxHeight: 844, width: '90%', height: '90%', fixed: true, padding: 0, type: 'iframe'});
    }
  }

});

/*! fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license */
(function(C,z,f,r){var q=f(C),n=f(z),b=f.fancybox=function(){b.open.apply(this,arguments)},H=navigator.userAgent.match(/msie/),w=null,s=z.createTouch!==r,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},p=function(a){return a&&"string"===f.type(a)},F=function(a){return p(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.4",defaults:{padding:15,margin:20,width:800,
height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",
34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(H?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(p(c)?c:null);h=d.title!==r?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));p(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":p(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(p(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==r&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();f("body").unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,f("body").bind({"afterShow.player onUpdate.player":e,"onCancel.player beforeClose.player":c,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(p(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},
prev:function(a){var d=b.current;d&&(p(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==r&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},
e.dim,k)))},update:function(a){var d=a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(w),w=null);b.isOpen&&!w&&(w=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),w=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
b.trigger("onUpdate")),b.update())},hideLoading:function(){n.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");n.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||
!1,d={x:q.scrollLeft(),y:q.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&C.innerWidth?C.innerWidth:q.width(),d.h=s&&C.innerHeight?C.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");n.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&n.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=
e.target||e.srcElement;if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==r)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&
"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,
e){e&&(b.helpers[d]&&f.isFunction(b.helpers[d][a]))&&(e=f.extend(!0,{},b.helpers[d].defaults,e),b.helpers[d][a](e,c))});f.event.trigger(a+".fb")}},isImage:function(a){return p(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(a){return p(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&
(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=
!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");
if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width;b.coming.height=this.height;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,
(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=
b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();
e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":e=a.tpl.image.replace("{href}",g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");
a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,
v=h.maxHeight,s=h.scrolling,q=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,p=l(y[1]+y[3]),r=l(y[0]+y[2]),z,A,t,D,B,G,C,E,w;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=l(k.outerWidth(!0)-k.width());z=l(k.outerHeight(!0)-k.height());A=p+y;t=r+z;D=F(c)?(a.w-A)*l(c)/100:c;B=F(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(w=h.content,h.autoHeight&&1===w.data("ready"))try{w[0].contentWindow.document.location&&(g.width(D).height(9999),G=w.contents().find("body"),q&&G.css("overflow-x",
"hidden"),B=G.height())}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=l(D);j=l(B);E=D/B;m=l(F(m)?l(m,"w")-A:m);n=l(F(n)?l(n,"w")-A:n);u=l(F(u)?l(u,"h")-t:u);v=l(F(v)?l(v,"h")-t:v);G=n;C=v;h.fitToView&&(n=Math.min(a.w-A,n),v=Math.min(a.h-t,v));A=a.w-p;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/E)),j>v&&(j=v,c=l(j*E)),c<m&&(c=m,j=l(c/E)),j<u&&
(j=u,c=l(j*E))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,v)));if(h.fitToView)if(g.width(c).height(j),e.width(c+y),a=e.width(),p=e.height(),h.aspectRatio)for(;(a>A||p>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(v,j-10)),c=l(j*E),c<m&&(c=m,j=l(c/E)),c>n&&(c=n,j=l(c/E)),g.width(c).height(j),e.width(c+y),a=e.width(),p=e.height();else c=Math.max(m,Math.min(c,c-(a-A))),j=Math.max(u,Math.min(j,j-(p-r)));q&&("auto"===s&&j<B&&c+y+
q<A)&&(c+=q);g.width(c).height(j);e.width(c+y);a=e.width();p=e.height();e=(a>A||p>r)&&c>m&&j>u;c=h.aspectRatio?c<G&&j<C&&c<D&&j<B:(c<G||j<C)&&(c<D||j<B);f.extend(h,{dim:{width:x(a),height:x(p)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:z,wrapSpace:p-k.outerHeight(!0),skinSpace:k.height()-j});!w&&(h.autoHeight&&j>u&&j<v&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&
(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:x(c.top-h*a.topRatio),left:x(c.left-j*a.leftRatio),width:x(f+j),height:x(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(l(e[g])-200),c[g]="+=200px"):(e[g]=x(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=f('<div class="fancybox-overlay"></div>').appendTo("body");
this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){f(a.target).hasClass("fancybox-overlay")&&(b.isActive?b.close():d.close())});this.overlay.css(a.css).show()},
close:function(){f(".fancybox-overlay").remove();q.unbind("resize.overlay");this.overlay=null;!1!==this.margin&&(f("body").css("margin-right",this.margin),this.margin=!1);this.el&&this.el.removeClass("fancybox-lock")},update:function(){var a="100%",b;this.overlay.width(a).height("100%");H?(b=Math.max(z.documentElement.offsetWidth,z.body.offsetWidth),n.width()>b&&(a=n.width())):n.width()>q.width()&&(a=n.width());this.overlay.width(a).height(n.height())},onReady:function(a,b){f(".fancybox-overlay").stop(!0,
!0);this.overlay||(this.margin=n.height()>q.height()||"scroll"===f("body").css("overflow-y")?f("body").css("margin-right"):!1,this.el=z.all&&!z.querySelector?f("html"):f("body"),this.create(a));a.locked&&this.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&f("body").css("margin-right",l(this.margin)+b.scrollbarWidth));this.open(a)},onUpdate:function(){this.fixed||
this.update()},afterClose:function(a){this.overlay&&!b.isActive&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(p(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),
H&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+
'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):n.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};n.ready(function(){f.scrollbarWidth===r&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),
b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===r){var a=f.support,d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")})})})(window,document,jQuery);
;
/*
 * Background Slider
 * Copyright © Rickard Andersson
 * http://unity3d.com
 */

(function($) {

  var methods = {
    init : function(options){

      var settings = {
        path:                '',
        backgrounds:         [],
        mobileBackgrounds:   [],
        captions:            [],
        autoStart:           true,
        renderControls:      false,
        delay:               6000,
        effect:              'fxSoftScale',
        transitionDuration:  750
        
      };

      return this.each(function(){

        if(options){
          $.extend(settings, options);
        }

        var $hero = $(this),
            path = settings.path,
            imagesArr = [],
            images = (getWidth() < 768 && settings.mobileBackgrounds.length > 0) ? settings.mobileBackgrounds : settings.backgrounds,
            contentHtml = '',
            blured = false,
            current = -1,
            $items = '',
            itemsCount = settings.backgrounds.length,
            isAnimating = false,
            device = (getWidth() < 768) ? 'mobile' : 'desktop',
            t;

        // Append and add necessary elements/classes
        $hero.append('<div class="background-slider"></div>');
        
        var $slider = $('.background-slider');
        $slider.append('<div class="loading"><div></div><div></div><div></div></div>').append('<ul></ul>');
        
        // Add transistion effect
        $slider.addClass(settings.effect);

        // Add prev/next arrows
        if(settings.renderControls && itemsCount > 1){

          $slider.prepend('<div class="prev"></div>');
          $slider.prepend('<div class="next"></div>');
          
          // Controls related events
          $('.next').on('click',function(){
            navigate('next',true);
          });
          $('.prev').on('click',function(){
            navigate('prev',true);
          });

          $(document).on('keydown',function(e){
            if(e.keyCode == 37 && !$('input').is(':focus')){ $('.prev').trigger('click'); }
            if(e.keyCode == 39 && !$('input').is(':focus')){ $('.next').trigger('click'); }
          });

        }

        // Swap image source
        $(window).on('resize',function(){

          device = (getWidth() < 768) ? 'mobile' : 'desktop';

          if(device == 'mobile'){
            $.each($('li',$slider),function(i,slide){
              var src = $(this).attr('data-mb');
              $('img',this).attr('src',src);
            });
          }
          else {
            $.each($('li',$slider),function(i,slide){
              var src = $(this).attr('data-b');
              $('img',this).attr('src',src);
            });
          }

        });

        function navigate(dir,stop){
      
          if(isAnimating) return false;
      
          isAnimating = true;
      
          var currentItem = $items.eq(current);
      
          if( dir === 'next' ) {
            current = current < itemsCount ? current + 1 : 0;
          }
          else if( dir === 'prev' ) {
            current = current > 0 ? current - 1 : itemsCount;
          }
      
          var nextItem = $items.eq(current);

          currentItem.addClass((dir === 'next') ? 'navOutNext' : 'navOutPrev');
          nextItem.addClass((dir === 'next') ? 'navInNext' : 'navInPrev');
          
          setTimeout(function(){
            currentItem.removeClass('current');
            currentItem.removeClass((dir === 'next') ? 'navOutNext' : 'navOutPrev');
            nextItem.addClass('current');
            nextItem.removeClass((dir === 'next') ? 'navInNext' : 'navInPrev');
            isAnimating = false;
          },1500);

          if(stop || itemsCount == 0){
            clearTimeout(t);
          }

        }

        function init(){
          update('next',false);
        }

        // Stop/Start slideshow When leaving/enter window
        $(window).on('blur', function(){ blured = true; clearTimeout(t); });
        $(window).on('focus',function(){ clearTimeout(t); if(blured && settings.autoStart){ t = setTimeout(function(){ init() }, settings.delay); } });

        function update(dir,stop){
          navigate(dir);
          if(!stop && itemsCount > 1){
            t = setTimeout(function(){ init() }, settings.delay);
          }
        }

        // Create html
        $.each(images, function(i,s){ 
          var src = path + s;
          contentHtml += '<li data-mb="'+ settings.mobileBackgrounds[i] +'" data-b="'+ settings.backgrounds[i] +'">';
          contentHtml +=   '<img src="'+ src +'" />';
          if(settings.captions[i]){
            contentHtml +=   '<div class="caption">' + settings.captions[i] + '</div>';
          }
          contentHtml += '</li>';
          imagesArr.push(src);
        });

        // Pre-Load Images and init slider
        $.preload(imagesArr, {
          loaded_all: function(loaded, total) {
            $('.loading',$slider).fadeOut(duration/2, function(){
              $('ul',$slider).append(contentHtml);
              $items = $('li',$slider);
              itemsCount = $items.length - 1;
              if(settings.autoStart){
                init();
              }
            });
          }
        });

      });
    }
  };

  $.fn.backgroundSlider = function(method){
    return methods.init.apply(this, arguments);
  };

})(jQuery);
;

/*
 * Fetches and display JSON object from Asset Store
 * Copyright (c) 2006-2013 Rickard Andersson
 */

(function($){

  var methods = {
    init : function(options){

      var settings = {
        src:        'hottest',
        template:   '1',
        limit:      '3',
        publisher:  '',
        category:   ''
      };

      return this.each(function(){

        if(options){
          $.extend(settings, options);
        }

        // Construct path
        if(settings.template != '4'){
          path = $('body.assetstore').length > 0 ? path + '/resources/assets_sale.php' : path + '/resources/assets.php?src='+ settings.src +'&publisher='+ settings.publisher +'&category='+ settings.category + '&limit=' + settings.limit;
        }
        else if(settings.template == '4'){
          path = path + '/resources/temp.json';
        }

        $.getJSON(path, function(data, textStatus) {
          if(textStatus == 'success'){

            var assets = (data.hottest != undefined) ? data.hottest : data.results;
            var assetsContent = [];
            var typeOfSale = 'normal';

            if(data.flashsale != undefined){
              if(data.flashsale.isFlashsale == true) typeOfSale = 'flashsale';
            }
            if(data.madness != undefined){
              if(data.madness.isMadness == true) typeOfSale = 'madness';
            }

            // Template 1
            if(settings.template == '1'){
              $.each(assets, function(key, asset) {
                var html = '';
                html += '<li><a href="' + asset.short_url + '" target="_blank">' + asset.title + '</a></li>';
                assetsContent.push(html);
              });
            }

            // Template 2 (Asset Store page)
            else if(settings.template == '2'){
              $.each(assets, function(key, asset) {
                var title = (asset.title.length > 28) ? asset.title.slice(0,25) + '...' : asset.title;
                var html = '';
                html += '<div class="asset"><a href="'+ asset.short_url +'">';
                html += '<div class="icon"><img src="'+ asset.keyimage.icon75 +'" alt="'+ asset.title +'" /></div>';
                html += '<div class="info">';
                html += '<p class="b mb0 cn" title="'+ asset.title +'">'+ title +'</p>';
                ratingWidth = (parseInt(asset.rating.average) / 5) * 100;
                html += '<div class="rating"><div class="stars" style="width:'+ ratingWidth +'%;"></div></div>';
                html += '<p class="mb0">';

                if(asset.price_original == undefined){
                  if(asset.price) html += '<b class="cd">'+ asset.price['USD_TEXT'] +'</b>';
                  else html += '<b class="cd">Free</b>';
                }
                else {
                  if(asset.price) html += '<s class="cr">'+asset.price_original['USD_TEXT']+'</s>'+ ' <b class="cd">' + asset.price['USD_TEXT']+'</b>';
                  else html += '<b class="cd">Free</b>';
                }

                html += '</p>';
                html += '</div>';
                html += '<div class="clear"></div>';
                html += '</a></div>';

                if(key == 50) return false;

                assetsContent.push(html);
              });

              // Display campaign image and adjust container height
              if(typeOfSale != 'normal'){
                $('.'+ typeOfSale +'-banner').removeClass('hide');
                $('#assets').css('height','460px');
              }
              
              // Flashsale countdown
              if(typeOfSale == 'flashsale'){

                // Populate hours/minutes/seconds
                for(var i = 0; i < 24; i++){
                  var n = (i < 10) ? '0'+ i : i;
                  $('.hrs .wrapper').append('<div>'+ n +'</div>');
                }
                $('.hrs .wrapper').prepend('<div>23</div>');
                $('.hrs .wrapper').append('<div>00</div><div>01</div>');

                for(var i = 0; i < 60; i++){
                  var n = (i < 10) ? '0'+ i : i;
                  $('.min .wrapper').append('<div>'+ n +'</div>');
                }
                $('.min .wrapper').prepend('<div>59</div>');
                $('.min .wrapper').append('<div>00</div><div>01</div>');

                for(var i = 0; i < 60; i++){
                  var n = (i < 10) ? '0'+ i : i;
                  $('.sec .wrapper').append('<div>'+ n +'</div>');
                }
                $('.sec .wrapper').prepend('<div>59</div>');
                $('.sec .wrapper').append('<div>00</div><div>01</div>');

                // Get dates
                var t;
                var sDate = new Date();

                var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                var numMonth = 0;

                for(var i = 0; i < months.length; i++){
                  if(months[i] == data.flashsale.endMonth)
                    numMonth = i;
                }

                var eDate = new Date(Date.UTC(data.flashsale.endYear, numMonth, data.flashsale.endDay, data.flashsale.endHour));

                //Find time left, returns hours, minutes, seconds
                function timeleft(start, end) {
                  var h = Math.floor((start-end)/(1000*60*60));
                  var m = Math.floor(((start-end)/(1000*60)) - (h * 60));
                  var s = Math.floor(((start-end)/(1000)) - ((h * 60) * 60) - (m * 60));
                  return [h, m, s];
                }

                // Add leading zero
                function addZero(value){
                  return value.toString().length > 1 ? value : '0' + value;
                }

                // Countdown
                function updateCounter(init){
                  
                  var tl = timeleft(eDate, sDate),
                      h = tl[0],
                      m = tl[1],
                      s = tl[2];

                  var h_px = -h * 36 - 36 + 'px',
                      m_px = -m * 36 - 36 + 'px',
                      s_px = -s * 36 - 36 + 'px';

                  if(init){
                    $('.hrs .wrapper').css('top', h_px);
                    $('.min .wrapper').css('top', m_px);
                    $('.sec .wrapper').css('top', s_px);
                  } else {
                    if(h != 0){
                      $('.hrs .wrapper').animate({'top' : h_px}, 300, function(){
                        if($('.hrs .wrapper').css('top') == '-36px') $('.hrs .wrapper').css('top', '-900px');
                      });
                    }
                    if(h != 0 && m != 0){
                    $('.min .wrapper').animate({'top' : m_px}, 300, function(){
                      if($('.min .wrapper').css('top') == '-36px') $('.min .wrapper').css('top', '-2196px');
                    });
                    }
                  
                    $('.sec .wrapper').animate({'top' : s_px}, 300, function(){
                      if($('.sec .wrapper').css('top') == '-36px') $('.sec .wrapper').css('top', '-2196px');  
                    });
                  }

                  sDate.setSeconds(sDate.getSeconds() + 1);
                  t = setTimeout(updateCounter, 1000);

                  // If campaign is over
                  if(h <= 0 && m <= 0 && s <= 0){
                    clearTimeout(t);
                    $('.flashsale-lbl').addClass('hide');
                    $('.flashsale-ended-lbl').removeClass('hide');
                  } 

                }

                $('.flashsale-lbl').removeClass('hide');
                updateCounter(true);

              }
              else if(typeOfSale == 'normal'){
                $('.normal-lbl').removeClass('hide');
              }
            }

            // Template 3 (Gallery Demo Projects page)
            else if(settings.template == '3'){
              $.each(assets, function(key, asset) {

                var description = asset.description;
                description = description.replace(/<br>/g,'').replace(/<ol>/g,'').replace(/<li>/g,'');
                description = (description.length > 120) ? description.slice(0,87) + '...' : description;

                var html = '';
                html += '<div class="g6 bb">';
                html += '<div class="right asset-icon mr10"><a href="' + asset.short_url + '" target="_blank"><img src="' + asset.keyimage.icon75 + '" width="" height="" /></a></div>';
                html += '<h3 class="mb0">' + asset.title + '</h3>';
                html += '<p class="cl">'+ by +' Unity Technologies</p>';
                html += '<p>'+ description +' <a href="' + asset.short_url + '" class="more" target="_blank">'+ more +'</a></p>';
                html += '</div>';
                assetsContent.push(html);

              });
            }

            // Template 4 (Editor panels)
            else if(settings.template == '4'){

              $.each(assets, function(key, asset) {

                var html = '';
                html += '<a href="' + asset.short_url + '" target="_blank"><img src="' + asset.keyimage.icon75 + '" /></a>';
                assetsContent.push(html);

              });

              // Flashsale countdown
              if(typeOfSale == 'flashsale'){

                // Populate hours/minutes/seconds
                for(var i = 0; i < 24; i++){
                  var n = (i < 10) ? '0'+ i : i;
                  $('.hrs .wrapper').append('<div>'+ n +'</div>');
                }
                $('.hrs .wrapper').prepend('<div>23</div>');
                $('.hrs .wrapper').append('<div>00</div><div>01</div>');

                for(var i = 0; i < 60; i++){
                  var n = (i < 10) ? '0'+ i : i;
                  $('.min .wrapper').append('<div>'+ n +'</div>');
                }
                $('.min .wrapper').prepend('<div>59</div>');
                $('.min .wrapper').append('<div>00</div><div>01</div>');

                for(var i = 0; i < 60; i++){
                  var n = (i < 10) ? '0'+ i : i;
                  $('.sec .wrapper').append('<div>'+ n +'</div>');
                }
                $('.sec .wrapper').prepend('<div>59</div>');
                $('.sec .wrapper').append('<div>00</div><div>01</div>');

                // Get dates
                var t;
                var sDate = new Date();

                var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                var numMonth = data.flashsale.endMonth;

                /*for(var i = 0; i < months.length; i++){
                  if(months[i] == data.flashsale.endMonth)
                    numMonth = i;
                }*/
                

                var eDate = new Date(Date.UTC(data.flashsale.endYear, numMonth, data.flashsale.endDay, data.flashsale.endHour));

                //Find time left, returns hours, minutes, seconds
                function timeleft(start, end) {
                  var h = Math.floor((start-end)/(1000*60*60));
                  var m = Math.floor(((start-end)/(1000*60)) - (h * 60));
                  var s = Math.floor(((start-end)/(1000)) - ((h * 60) * 60) - (m * 60));
                  return [h, m, s];
                }

                // Add leading zero
                function addZero(value){
                  return value.toString().length > 1 ? value : '0' + value;
                }

                // Countdown
                function updateCounter(init){
                  
                  var tl = timeleft(eDate, sDate),
                      h = tl[0],
                      m = tl[1],
                      s = tl[2];

                  var h_px = -h * 36 - 36 + 'px',
                      m_px = -m * 36 - 36 + 'px',
                      s_px = -s * 36 - 36 + 'px';

                  if(init){
                    $('.hrs .wrapper').css('top', h_px);
                    $('.min .wrapper').css('top', m_px);
                    $('.sec .wrapper').css('top', s_px);
                  } else {
                    if(h != 0){
                      $('.hrs .wrapper').css({'top' : h_px});
                      if($('.hrs .wrapper').css('top') == '-36px') $('.hrs .wrapper').css('top', '-900px');
                    }
                    if(h != 0 && m != 0){
                      $('.min .wrapper').css({'top' : m_px});
                      if($('.min .wrapper').css('top') == '-36px') $('.min .wrapper').css('top', '-2196px');
                    }
                    $('.sec .wrapper').css({'top' : s_px});
                    if($('.sec .wrapper').css('top') == '-36px') $('.sec .wrapper').css('top', '-2196px');
                  }

                  sDate.setSeconds(sDate.getSeconds() + 1);
                  t = setTimeout(updateCounter, 1000);

                  // If campaign is over
                  if(h <= 0 && m <= 0 && s <= 0){
                    clearTimeout(t);
                    //$('.flashsale-lbl').addClass('hide');
                    //$('.flashsale-ended-lbl').removeClass('hide');
                  } 

                }

                $('.flashsale-lbl').removeClass('hide');
                updateCounter(true);

              }


            }

            $('<div/>', {html: assetsContent.join('') }).appendTo('#assets');
            $('#assets').removeClass('loading');

          }

        });

      });

    }
  };

  $.fn.displayAssets = function(method){
    return methods.init.apply(this, arguments);
  };

})(jQuery);;
