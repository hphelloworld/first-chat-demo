/* html5shiv.min.js */
(function(k,m){var g="3.7.0";var d=k.html5||{};var h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var q;var i="_html5shiv";var a=0;var o={};var e;(function(){try{var t=m.createElement("a");t.innerHTML="<xyz></xyz>";q=("hidden" in t);e=t.childNodes.length==1||(function(){(m.createElement)("a");var v=m.createDocumentFragment();return(typeof v.cloneNode=="undefined"||typeof v.createDocumentFragment=="undefined"||typeof v.createElement=="undefined")}())}catch(u){q=true;e=true}}());function f(t,v){var w=t.createElement("p"),u=t.getElementsByTagName("head")[0]||t.documentElement;w.innerHTML="x<style>"+v+"</style>";return u.insertBefore(w.lastChild,u.firstChild)}function l(){var t=j.elements;return typeof t=="string"?t.split(" "):t}function p(t){var u=o[t[i]];if(!u){u={};a++;t[i]=a;o[a]=u}return u}function n(w,t,v){if(!t){t=m}if(e){return t.createElement(w)}if(!v){v=p(t)}var u;if(v.cache[w]){u=v.cache[w].cloneNode()}else{if(c.test(w)){u=(v.cache[w]=v.createElem(w)).cloneNode()}else{u=v.createElem(w)}}return u.canHaveChildren&&!h.test(w)?v.frag.appendChild(u):u}function r(v,x){if(!v){v=m}if(e){return v.createDocumentFragment()}x=x||p(v);var y=x.frag.cloneNode(),w=0,u=l(),t=u.length;for(;w<t;w++){y.createElement(u[w])}return y}function s(t,u){if(!u.cache){u.cache={};u.createElem=t.createElement;u.createFrag=t.createDocumentFragment;u.frag=u.createFrag()}t.createElement=function(v){if(!j.shivMethods){return u.createElem(v)}return n(v,t,u)};t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/[\w\-]+/g,function(v){u.createElem(v);u.frag.createElement(v);return'c("'+v+'")'})+");return n}")(j,u.frag)}function b(t){if(!t){t=m}var u=p(t);if(j.shivCSS&&!q&&!u.hasCSS){u.hasCSS=!!f(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")}if(!e){s(t,u)}return t}var j={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:g,shivCSS:(d.shivCSS!==false),supportsUnknownElements:e,shivMethods:(d.shivMethods!==false),type:"default",shivDocument:b,createElement:n,createDocumentFragment:r};k.html5=j;b(m)}(this,document));
/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */
!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),h=a.setTimeout(u,p),void 0;g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);

window.onload=function(){
	placeholder();
}
// ie9以下placeholder兼容
function placeholder(){
	var isplaceholder='placeholder' in document.createElement('input');
	if(!isplaceholder){   
		$('input,textarea').each(function(){
			var input = $(this);
			if(input.attr('type')=='password'){   //使其支持password类型input，其样式请都写在class或者id里，避免布局错位
				var input_text=$('<input type="text">');
					input_text.attr('class',input.attr('class'));
					input_text.attr('id',input.attr('id'));
					input_text.val(input.attr('placeholder'));
					input.after(input_text);
					input.hide();
					input_text.focus(function() {
						if(input_text.val()==input.attr('placeholder')){
							input.val('').show();
						}else{
							input.val(input_text.val()).show();
						}
						input_text.hide();	
					})
					input.blur(function(){
						if(input.val()==''){
							input_text.val(input.attr('placeholder')).show();
							input.hide();
						}
					});
			}else{
				input.val(input.attr('placeholder')?input.attr('placeholder'):input.val());
				input.focus(function() {
			        if (input.val() == input.attr('placeholder')) {
			            input.val('');
			            input.removeClass('placeholder');
			        }
			    }).blur(function() {
			        var input = $(this);
			        if (input.val() == '' || input.val() == input.attr('placeholder')) {
			            input.addClass('placeholder');
			            input.val(input.attr('placeholder'));
			        }
			    }).blur();
			}
		})     
	}
}