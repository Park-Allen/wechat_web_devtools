'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(){const a=f.getState(),b=_extends({},a.settings.geo);if(b.enabled)return delete b.enabled,_extends({},b);if(k)return _extends({},k);try{let{body:a}=await e({url:`${j}?key=${i}`,needToken:-1,needAppID:-1,needCheckErrCode:-1});if(0==a.status){let b=a.result.location;return k={latitude:b.lat,longitude:b.lng,speed:b.hasOwnProperty('speed')?b.speed:-1,accuracy:b.hasOwnProperty('accuracy')?b.accuracy:65,altitude:b.hasOwnProperty('altitude')?b.altitude:0,verticalAccuracy:b.hasOwnProperty('verticalAccuracy')?b.verticalAccuracy:65,horizontalAccuracy:b.hasOwnProperty('horizontalAccuracy')?b.horizontalAccuracy:65},_extends({},k)}h.error(`geolocation qqmap api return ${JSON.stringify(a)}`)}catch(a){h.error(`geolocation catch error ${a}`)}return{latitude:23.129163,longitude:113.264435,speed:-1,accuracy:65,altitude:0,verticalAccuracy:65,horizontalAccuracy:65}}function b(a){a?(clearTimeout(l),f.dispatch({type:d.SIMULATOR_SET_NAVIGATION_BAR,data:{showPositioning:!0}}),n=!0):!0==n&&(l=setTimeout(()=>{f.dispatch({type:d.SIMULATOR_SET_NAVIGATION_BAR,data:{showPositioning:!1}}),n=!1,l=!1},m))}const c=require('./949d8235c744ced2a80121e4dba34c28.js'),d=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),e=require('./15ba1827c7f6564a45df6bd44da3a977.js'),f=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),g=require('./common/locales/index.js'),h=require('./72653d4b93cdd7443296229431a7aa9a.js'),i='JMRBZ-R4HCD-X674O-PXLN4-B7CLH-42BSB',j='http://apis.map.qq.com/ws/location/v1/ip';let k,l,m=3e3,n=!1;module.exports=async function(){b(!0);try{const c=await a();return b(!1),c}catch(a){throw b(!1),a}}}(require('lazyload'),require);