
require(['jquery','mw','wikia.window','wikia.cookies','wikia.geo','BannerNotification'],function($,mw,window,cookies,geo,BannerNotification){'use strict';function initCookieNotification(){if(shouldShowBanner()){mw.loader.using('ext.cookiePolicyMessages').then(showBanner);}}
function shouldShowBanner(){var fromEU=geo.getContinentCode()==='EU';return(fromEU&&!hasSeenBanner());}
function showBanner(){var message=mw.message('cookie-policy-notification-message').parse(),bannerNotification=new BannerNotification(message,'notify').show();bannerNotification.$element.find('a').on('click',function(event){var url=$(this).attr('href');event.preventDefault();window.open(url,'_blank');});setCookie();}
function hasSeenBanner(){return!!cookies.get('euCookiePolicy');}
function setCookie(){cookies.set('euCookiePolicy','1',{domain:window.wgCookieDomain,path:'/',expires:'never'});}
$(function(){initCookieNotification();});});;