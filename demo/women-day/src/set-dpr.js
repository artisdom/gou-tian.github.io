(function(d){function l(){var g=f.getBoundingClientRect().width;540<g/a&&(g=540*a);m=g/10;f.style.fontSize=m+"px"}function n(a){a=a||300;clearTimeout(p);p=setTimeout(function(){l()},a)}var b,f,c,h,k,p,e,m=0,a=0;c=0;b=d.document;f=b.documentElement;e=b.querySelector('meta[name="viewport"]');k=f.firstElementChild;a||c||(d.navigator.appVersion.match(/android/ig),c=d.navigator.appVersion.match(/iphone/ig),h=d.devicePixelRatio,a=c?3<=h&&(!a||3<=a)?3:2<=h&&(!a||2<=a)?2:1:1,c=1/a);f.setAttribute("data-dpr",
a);e||(e=b.createElement("meta"),e.setAttribute("name","viewport"),e.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),k?k.appendChild(e):(warp=b.createElement("div"),warp.appendChild(e),b.write(warp.innerHTML)));d.addEventListener("resize",function(){n()},!1);d.addEventListener("pageshow",function(a){a.persisted&&n()},!1);"complete"===b.readyState?b.body.style.fontSize=12*a+"px":d.addEventListener("DOMContentLoaded",function(c){b.body.style.fontSize=
12*a+"px"},!1);l()})(window);