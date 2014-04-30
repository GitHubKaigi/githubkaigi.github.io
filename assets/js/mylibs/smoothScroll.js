/*--------------------------------------------------------------------------*
 *  
 *  SmoothScroll JavaScript Library V2
 *  
 *  MIT-style license. 
 *  
 *  2007-2011 Kazuma Nishihata 
 *  http://www.to-r.net
 *  
 *--------------------------------------------------------------------------*/
new function(){function r(e,t,n){try{e.addEventListener(t,n,!1)}catch(r){e.attachEvent("on"+t,function(){n.apply(e,arguments)})}}function i(e){function a(e,t,n){setTimeout(function(){n=="up"&&e>=t?(e=e-(e-t)/20-1,window.scrollTo(0,e),a(e,t,n)):n=="down"&&e<=t?(e=e+(t-e)/20+1,window.scrollTo(0,e),a(e,t,n)):scrollTo(0,t);return},10)}if(!n.getElementById(e.rel.replace(/.*\#/,"")))return;var t=n.getElementById(e.rel.replace(/.*\#/,"")),r=t.offsetTop,i=n.documentElement.scrollHeight,s=window.innerHeight||n.documentElement.clientHeight;if(i-s<r)var r=i-s;var o=window.pageYOffset||n.documentElement.scrollTop||n.body.scrollTop||0,u=r<o?"up":"down";a(o,r,u)}var e="data-tor-smoothScroll",t=/noSmooth/,n=document;r(window,"load",function(){var r=n.getElementsByTagName("a");for(var s=0,o=r.length;s<o;s++)!t.test(r[s].getAttribute(e))&&r[s].href.replace(/\#[a-zA-Z0-9_]+/,"")==location.href.replace(/\#[a-zA-Z0-9_]+/,"")&&(r[s].rel=r[s].href,r[s].href="javascript:void(0)",r[s].onclick=function(){i(this)})})};