'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('url'),b=require('querystring'),c=require('react'),d=require('./116381854e0f6d40c39e7d1251aba7a8.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),f=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),g=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),h=require('./84705760a8692a44a583377e7f3f3b00.js'),i=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),j=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),k=require('./1bd2563d13db26950ae47494b2c34454.js'),l=require('./common/locales/index.js'),m=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),n=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),o=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),{connect:p}=require('react-redux'),q=300;class r extends c.Component{constructor(a){super(a),this._onMessage=this.onMessage.bind(this),this.resetImageSizeControl(),this.tapEventMap={}}componentDidMount(){d.register(this._onMessage),this.initWebview()}componentWillReceiveProps(a){(a.height!=this.props.height||a.width!=this.props.width)&&setTimeout(()=>{this.setWidgetOffset()}),a.ready==this.props.ready||a.ready||setTimeout(()=>{this.reload()}),a.tapCallback!=this.props.tapCallback&&(this.tapEventMap[a.tapCallback.eventId]&&!a.tapCallback.res&&setTimeout(()=>{this.widgetJumpToWeapp()}),delete this.tapEventMap[a.tapCallback.eventId])}componentWillUnmount(){this.webview&&this.webview.remove(),d.unRegister(this._onMessage)}onMessage(a){let{command:b,data:c}=a;if('ON_CANVAS_TAP'==b){let a=`${Date.now}_${Math.random()}`;this.tapEventMap[a]=!0,d.toService({command:'APPSERVICE_ON_EVENT',data:{eventName:'onTap',data:_extends({},c,{eventId:a})}})}}widgetJumpToWeapp(){this.props.jumpUrl&&this.props.setConfirmInfo({show:!0,content:l.config.WIDGET_IF_WANT_TO_JUMP,callback:(a)=>{a&&this.props.widgetJumpToWeapp({origin:o.COMPILE_ORIGIN.SEARCH_WIDGET,condiction:{pathName:this.props.jumpUrl,query:this.props.jumpQuery,scene:1005}})}})}resetImageSizeControl(){this.imageSizeControl={totalSize:0,timestamp:Date.now()}}setWidgetOffset(){let a=this.props,b={},c=a.height/a.deviceScale,e=a.width/a.deviceScale;a.compileType==f.search?b={width:e,height:c,style:'width:100%;height:100%'}:a.compileType==f.conversation&&(b={height:c,width:e,style:'width:100%;height:100%'}),this.webview&&this.webview.setAttribute('style',`position:absolute;height:${c}px;width:${e}px`),d.send({command:'SET_CANVAS',data:b})}setUserAgentOverride(){let a=this.props.ua.replace('{{webviewID}}',this.props.id);a+=` widget port/${global.messageCenterPort}`,this.webview.setUserAgentOverride(a)}initWebview(){if(this.webview)return void this.webview.remove();let a=this.props.id,b=this.webview=document.createElement('webview');b.className=`simulator-bd-webview_body webviewbody${a}`,b.setAttribute('partition','persist:simulator');let c=this.props.height/this.props.deviceScale,d=this.props.width/this.props.deviceScale;b.setAttribute('style',`position:absolute;height:${c}px;width:${d}px`),this.container.appendChild(b),this.setUserAgentOverride(),this.initEvent(),this.reload()}initEvent(){let a=this.webview;global.appConfig.isDev||global.appConfig.isGamma||a.contextMenus.onShow.addListener((a)=>{a.preventDefault()});let b=a.request;b.onErrorOccurred.addListener((a)=>{let{type:b}=a;'script'===b||'main_frame'===b||'net::ERR_ABORTED'===a.error||this.props.setWidget({errmsg:{group:l.config.WIDGET_NETWORK_ERROR,type:'error',msg:a.error}})},{urls:['<all_urls>']}),b.onBeforeSendHeaders.addListener((a)=>{let b=this.props.project;if(b){let d=a.requestHeaders||[],e=d.findIndex((a)=>{return'cookie'===a.name.toLowerCase()});d.splice(e,1);for(var c=0;c<d.length;++c)if('Referer'===d[c].name){let a=b.appid;b.platform&&b.ext_appid&&(a=b.ext_appid),d[c].value=`https://servicewechat.com/${a}/devtools/page-frame.html`}return{requestHeaders:a.requestHeaders}}},{urls:['<all_urls>']},['blocking','requestHeaders']),b.onCompleted.addListener((a)=>{let{type:b,statusCode:c}=a;if('script'!==b&&'main_frame'!==b&&400<=c){let b=a.url;this.props.setWidget({errmsg:{group:l.config.WIDGET_NETWORK_ERROR,type:'error',msg:`404: ${b.replace(this.baseURL,'')}`}})}},{urls:['<all_urls>']},['responseHeaders']),a.addEventListener('dialog',(a)=>{let b=a.messageType||'',c=a.messageText,d=a.dialog;'alert'===b?'DOCUMENT_READY'==c&&this.onDocumentReady():'confirm'===b?a.preventDefault():'prompt'===b}),a.request.onHeadersReceived.addListener((a)=>{let{type:b}=a;if('image'===b){let b=a.url;if(i.weappLocalIdRegular.test(b)||i.weappWidgetPageRegular.test(b))return{};if('wifi'!=this.props.networkType&&!this.imageSizeControl[b]){let c=0;a.responseHeaders.forEach((a)=>{'content-length'==a.name.toLowerCase()&&(c=parseInt(a.value))});let d=this.imageSizeControl.totalSize+c;if(d>1024*q)return this.props.setWidget({errmsg:{group:l.config.WIDGET_IMAGE_SIZE_ERROR,type:'error',msg:l.config.WIDGET_IMAGE_SIZE_ERROR_TIP.format(q)}}),{cancel:!0};this.imageSizeControl.totalSize+=c,this.imageSizeControl[b]=!0}}return{}},{urls:['<all_urls>']},['blocking','responseHeaders'])}reload(){this.props.project.attr.gameApp?k(this.props.project).then((a)=>{const b=e.getWidgetDirectory(this.props.compileType,a);this.baseURL=`http://127.0.0.1:${global.proxyPort}/widgetwebview/${b}`,this.webview.src=`${this.baseURL}/widgetPage.html`,this.resetImageSizeControl()}):j(this.props.project).then((a)=>{const b=e.getWidgetDirectory(this.props.compileType,a);this.baseURL=`http://127.0.0.1:${global.proxyPort}/widgetwebview/${b}`,this.webview.src=`${this.baseURL}/widgetPage.html`,this.resetImageSizeControl()})}onDocumentReady(){let c=this.props,e=c.condiction;if(c.compileType==f.conversation){let a=e.pathName||'',f=a.split('?');f=b.parse(f[1]||'',null,null,{decodeURIComponent:(a)=>{return a}}),d.toService({command:'APPSERVICE_ON_EVENT',data:{eventName:'onCanvasInsert',data:{title:e.title||'',cacheKey:e.cachekey||'',path:a.split('?')[0],query:f,width:c.width,height:c.height}}}),this.setWidgetOffset(),this.props.setWidget({ready:!0})}else if(c.compileType==f.search){let f=e.service&&e.service.box_type,g=e.query||'',j=e.boxQI||'';h.getInitData({type:f,query:g,boxQI:j,debugUrl:e.debugUrl}).then((e)=>{let f='',g='',h='',k='',m={},n=i.default_search_widget_radio,o=c.height,p=c.width;try{let d=e.resultlist[0].providerlist[0].providerinfo;if(f=d.wxaData,g=d.widgetData,o=d.height/d.width*c.width,d.jumpUrl){let c=a.parse(d.jumpUrl);k=c.pathname.replace(/^\//,'').replace(/\.html$/,''),m=b.parse(c.query,null,null,{decodeURIComponent:(a)=>{return a}}),m.widgetData=encodeURIComponent(g)}h=m.wxOpenId||''}catch(a){f='',g='',h='',p=c.width,o=c.height}try{e.debug_info&&this.props.setWidget({errmsg:{group:l.config.WIDGET_SERVER_DEBUG,type:'info',msg:`网络状态码: ${e.debug_info.status_code||''}
返回: ${e.debug_info.resp_data||''}
耗时: ${e.debug_info.cost_time_ms||''}`}})}catch(a){}this.props.setWidget({ready:!0,height:o,wxaData:f,jumpUrl:k,jumpQuery:m}),this.setWidgetOffset(),d.toService({command:'APPSERVICE_ON_EVENT',data:{eventName:'onCanvasInsert',data:{query:{wxOpenId:h,widgetData:encodeURIComponent(g),wxParamData:encodeURIComponent(j)},width:p,height:Math.ceil(o)}}})}).catch((a)=>{this.props.setWidget({ready:!0,errmsg:{group:l.config.WIDGET_NETWORK_ERROR,type:'error',msg:l.config.WIDGET_GET_SEARCH_RESULT_ERROR.format(a)}})})}}render(){let a=this.props,b={height:a.height,width:a.width,position:'absolute'};return c.createElement('div',{className:'webview',ref:(a)=>this.container=a,style:b})}}module.exports=p((a)=>{var b=Math.floor;let c=a.toolbar.deviceInfo,d=a.project.current,g=d.compileType,h=e.getWidgetOffset(g,c),{width:i,height:j}=h,k=a.simulator.widget||{};g==f.search&&k.height&&(j=k.height);let l=d.condiction[g]||{},m=l.list[l.current]||{},n=a.toolbar.network.list[a.toolbar.network.current]||'wifi';return{deviceScale:a.toolbar.deviceScale,ua:c.ua||'',id:2e4,project:a.project.current,compileType:g,width:b(i),height:b(j),ready:k.ready,jumpUrl:k.jumpUrl||'',jumpQuery:k.jumpQuery||{},tapCallback:k.tapCallback,networkType:n,condiction:m}},(a)=>{return{setConfirmInfo:e.bindActionCreators(m.setConfirmInfo,a),setWidget:e.bindActionCreators(g.setWidget,a),widgetJumpToWeapp:e.bindActionCreators(g.widgetJumpToWeapp,a)}})(r)}(require('lazyload'),require);