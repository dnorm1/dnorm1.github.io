!function(){function t(t,e){var i=document.body||document.head,n=document.createElement("script");n.src=t,n.async=!0,n.id="a11yWidgetSrc",e&&(n.crossOrigin="anonymous",n.integrity=e),i.appendChild(n)}try{var e=document.querySelector("html"),i="data-uw-w-loader";if(e&&e.hasAttribute(i))return;e.setAttribute(i,"")}catch(t){}var n="https://cdn.userway.org/",a=n+"widgetapp/",o=a+"2023-10-18-16-20-45/widget_app_base_1697646045946.js",r=a+"2023-10-18-16-20-45/widget_app_1697646045946.js",d="sha256-/gl7DV8YdHtsBr92O4f8R+2hic5SbATeiYa63Zp6PNI=";if(location.origin&&location.origin.indexOf(atob("LndlYmFpbS4="))>-1||location.origin&&location.origin.indexOf(atob("YWNzYmFjZQ=="))>-1)setTimeout((function(){!function(){var t=document.createElement("iframe");t.title="Online scanning alert",t.setAttribute("style","width:100%!important;height:100%!important;position:fixed!important;left:0!important;right:0!important;top:0!important;bottom:0!important;z-index:999999"),document.body.appendChild(t),t.src=a+"scan_error.html",window.addEventListener("message",(function(e){e.data&&"scan-alert-dismiss"===e.data.action&&n.indexOf(e.origin)>=0&&t.remove()}))}()}),1e3);else if(!new RegExp("(bot|crawler)","i").test(navigator.userAgent)){var s=window._userway_config;navigator.userAgent.match(/mobile/i)&&s&&("false"===s.mobile||!1===s.mobile)||(function(){try{UserWayWidgetApp={};var t=Object.keys(localStorage).filter((function(t){return 0===t.indexOf("userway-s")})).length>0,e=!!localStorage.getItem("isCypress");(t||e||/Edge\/|Trident\/|MSIE/.test(navigator.userAgent))&&(o=r,d="sha256-AvPExB/F7YeaRRgSMiBaYd7obbHYKwBrxMWBr05NiOI=",UserWayWidgetApp.lazyLoaded=!0)}catch(t){}}(),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(function(){return t(o,d)})):t(o,d))}}();