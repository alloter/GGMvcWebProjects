/*!
 * @fileoverview  公用文件，jquery的各种插件合集，目的为了减少请求数
 *                包括json,cookie,flashSlider
 * @author XuJiaNa
 * @version v1
 * @build 2013-05-20
 */
/*!
// [插件名称] jQuery flashSlider
//----------------------------------------------------------------------------------------------------
// [描    述] jQuery flashSlider图片展示插件，它是基于jQuery类库，实现了不使用flash也同样可以在
//             页面上展示图片的效果，支持数字导航，纵向滑动和横向滑动，自动滚动和连续滑动
//             可设置滑动速度、是否自动、停顿间隔,自定义容器高度和宽度,支持Jquery的easing效果
//            （更多效果需要easing插件的支持，默认是swing）
//[使用方法]  http://www.cnblogs.com/dushouke/archive/2009/12/30/1636390.html
//[源码下载]  http://files.cnblogs.com/dushouke/jquery.flashSlider1.0.rar
//----------------------------------------------------------------------------------------------------
// [作者网名] MicroCoder
// [邮    箱] dushouke@qq.com
// [作者博客] http://dushouke.cnblogs.com
// [更新日期] 2009-12-30
// [版 本 号] ver1.0
//====================================================================================================
 */
!function(a){a.fn.flashSlider=function(b){var b=a.extend({},a.fn.flashSlider.defaults,b);this.each(function(){function c(a){l.find("a").eq(a).addClass("on").siblings().removeClass("on")}function d(a,e){k.stop();var g=a==h?1:a+1;f=a-1,c(a-1),b.vertical?(p=(a-1)*j*-1,k.animate({marginTop:p},b.speed,b.easing)):(p=(a-1)*i*-1,k.animate({marginLeft:p},b.speed,b.easing)),e&&clearTimeout(m),b.auto&&!e&&(m=setTimeout(function(){d(g,!1)},b.speed+b.pause))}var e=a(this),f=1,g=e.find("img"),h=g.length,i=g.eq(0).width(),j=g.eq(0).height(),k=a("ul",e);if(e.height(0==b.height?j:b.height),e.width(0==b.width?i:b.width),e.css("overflow","hidden"),e.css("position","relative"),k.css("width",h*i),b.vertical?g.css("display","block"):a("li",e).css("float","left"),b.controlsShow){var l=a(b.swicthBtn);if(!l)return;l.show(),l.find("a").hover(function(){var b=a(this).index()+1;d(b,!0)},function(){m=setTimeout(function(){d(f/1+1,!1)},b.pause/4)})}var m;c(0),b.auto&&(m=setTimeout(function(){d(2,!1)},b.pause))})},a.fn.flashSlider.defaults={controlsShow:!0,vertical:!1,speed:800,auto:!0,pause:2e3,easing:"swing",height:0,width:0,swicthBtn:"#J_switchBtn"}}(jQuery),/*!
*@description cookie插件
* xml
* */
jQuery.cookie=function(a,b,c){if("undefined"==typeof b){var d=null;if(document.cookie&&""!=document.cookie)for(var e=document.cookie.split(";"),f=0;f<e.length;f++){var g=jQuery.trim(e[f]);if(g.substring(0,a.length+1)==a+"="){d=unescape(g.substring(a.length+1));break}}return d}c=c||{},null===b&&(b="",c.expires=-1);var h="";if(c.expires&&("number"==typeof c.expires||c.expires.toUTCString)){var i;"number"==typeof c.expires?(i=new Date,i.setTime(i.getTime()+24*c.expires*60*60*1e3)):i=c.expires,h="; expires="+i.toUTCString()}var j=c.path?"; path="+c.path:"",k=c.domain?"; domain="+c.domain:"",l=c.secure?"; secure":"",g=[a,"=",escape(b),h,j,k,l].join("");document.cookie=g},/*!
 * jQuery JSON Plugin
 * version: 2.3 (2011-09-17)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 * website's http://www.json.org/json2.js, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 * I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is
 * copyrighted 2005 by Bob Ippolito.
 */
function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(a){if(null===a)return"null";var b=typeof a;if("undefined"===b)return void 0;if("number"===b||"boolean"===b)return""+a;if("string"===b)return $.quoteString(a);if("object"===b){if("function"==typeof a.toJSON)return $.toJSON(a.toJSON());if(a.constructor===Date){var c=a.getUTCMonth()+1,d=a.getUTCDate(),e=a.getUTCFullYear(),f=a.getUTCHours(),g=a.getUTCMinutes(),h=a.getUTCSeconds(),i=a.getUTCMilliseconds();return 10>c&&(c="0"+c),10>d&&(d="0"+d),10>f&&(f="0"+f),10>g&&(g="0"+g),10>h&&(h="0"+h),100>i&&(i="0"+i),10>i&&(i="0"+i),'"'+e+"-"+c+"-"+d+"T"+f+":"+g+":"+h+"."+i+'Z"'}if(a.constructor===Array){for(var j=[],k=0;k<a.length;k++)j.push($.toJSON(a[k])||"null");return"["+j.join(",")+"]"}var l,m,n=[];for(var o in a){if(b=typeof o,"number"===b)l='"'+o+'"';else{if("string"!==b)continue;l=$.quoteString(o)}b=typeof a[o],"function"!==b&&"undefined"!==b&&(m=$.toJSON(a[o]),n.push(l+":"+m))}return"{"+n.join(",")+"}"}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(src){return eval("("+src+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+src+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(a){return a.match(escapeable)?'"'+a.replace(escapeable,function(a){var b=meta[a];return"string"==typeof b?b:(b=a.charCodeAt(),"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16))})+'"':'"'+a+'"'}}(jQuery);