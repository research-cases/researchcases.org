var researchCases=function(a,b,c,d,e){"use strict";return e.Main=function(a,b,c,d){var e=b.querySelector(".nav-background"),f=b.querySelector(".introduction"),g=b.querySelector(".page-header"),h=function(){var a=f.getBoundingClientRect();return a.bottom<=0},i=function(a,b){a.classList?a.classList.add(b):a.className+=" "+b},j=function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")},k=c.throttle(function(){h()?(i(e,"pinned"),i(g,"shown")):(j(g,"shown"),j(e,"pinned"))},100),l=function(){a.addEventListener("resize",k),a.addEventListener("scroll",k),k()};return{init:function(){d.init(),l()}}}(a,b,c,d),e.init=e.Main.init,e}(window,document,_,smoothScroll,researchCases||{});document.addEventListener("DOMContentLoaded",researchCases.init);