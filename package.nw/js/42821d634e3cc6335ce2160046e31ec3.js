'use strict';!function(require,directRequire){const a=require('react'),b=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),c=require('./137588fc97010af6b33c2be1d533447b.js'),d=require('./c754d906e04f71224e14d49a89769678.js'),e=require('./8e89d5836133cac25c6aa23d785c63d9.js'),f=require('./ca9102c5efe003cb9f99bcd8df78f429.js'),g=require('./a1b9e6fb17fda6e4b961ef97ab1371f8.js'),h=require('./84eac15ddafa077aa832c98b6c2290bd.js'),i=require('./9a1630c7db7597f338c9319bfc8571c5.js'),j=require('./8e7fed729e9f11f30d63365586719bf0.js'),k=require('./504ae46dc4a72502ee836b22913fbe81.js'),l=require('./b6a2a0af8ea41ee5132948d45a0a6677.js'),m=require('./a03c8e76d4fe0178cd6a28a2fbc16ddd.js'),n=require('./195285e5284f78e12cb71042e95b9566.js'),o=require('./3708d3f281e2f2a71c7feda26168f3dc.js'),p=require('./aa1f2a2e68329a3bbaa996a52b5ea65b.js'),q=require('./10279410b7cf7ea9409d42a7eb37225c.js'),r=require('./b6dd6ba0b853899c69527eaf93a58f7b.js'),s=require('./413e1df0d2a135fa20cefc4c23f8e8e1.js'),t=require('./d03a90fbd796428c64e8c47eef5f4e71.js'),u=require('./f094f1d16fffcac4d74949e4fc6b09ac.js'),v=require('./dc4889188702c881b1432b490a2a4850.js'),w=require('./03f56b6c971ec6f7813234d685a2fa8c.js'),x=require('./b86cb96a5caed2b5ae72ef2e6a5d13ef.js'),y=require('./0cecfd7c413f06c788a4d6b7972cdf96.js'),z=require('./e452f0d072800b8203d233682d37d71a.js'),A=require('./b48002774455efab18dc3db5bf976df2.js'),{connect:B}=require('react-redux');class C extends a.Component{constructor(a){super(a),this.state={show:a.show}}getOptionsComponents(){let b=this.props,c=[];return c.push(a.createElement(f,{key:'toast'})),c.push(a.createElement(d,{key:'modal'})),c.push(a.createElement(e,{key:'actionsheet'})),c.push(a.createElement(o,{key:'previewimage'})),c.push(a.createElement(j,{key:'share'})),c.push(a.createElement(A,{key:'keyboard'})),b.switch.selectorPickerShow&&c.push(a.createElement(t,{key:'selectorpicker'})),b.switch.datePickerShow&&c.push(a.createElement(q,{key:'datepicker'})),b.switch.timePickerShow&&c.push(a.createElement(r,{key:'timepicker'})),b.switch.multiPickerShow&&c.push(a.createElement(s,{key:'multipicker'})),b.switch.paymentShow&&c.push(a.createElement(p,{key:'payment'})),b.switch.confirmShow&&c.push(a.createElement(g,{key:'confirm'})),b.switch.authorizeShow&&c.push(a.createElement(h,{key:'authorize'})),c}render(){return a.createElement('div',null,this.getOptionsComponents())}}module.exports=B((a)=>{let b=a.simulator.currentWebviewID,c=a.toolbar.deviceInfo,d=a.window.simulator||{},e=a.simulator.pickerInfo||{},f=a.simulator.groupInfo||{},g=a.simulator.cardInfo,h=a.simulator.location||{},i=a.webdebugger&&a.webdebugger.cardInfo||{},j=a.simulator.orientation&&'landscape'==a.simulator.orientation.value,k=a.simulator.previewImage||{},l=a.simulator.keyboard||{},m=a.simulator.shareInfo||{},n=a.simulator.actionsheetInfo||{},o=n.show&&b==n.showOnWebviewID,p=a.simulator.toastInfo||{},q=p.show&&b==p.showOnWebviewID,r=a.simulator.modalInfo||{},s=r.show&&b==r.showOnWebviewID,t={screenWidth:j?c.screenHeight:c.screenWidth,screenHeight:j?c.screenWidth:c.screenHeight,deviceScale:a.toolbar.deviceScale,switch:{actionsheetShow:o,toastShow:q,modalShow:s,shareShow:m.show,keyboardShow:l.show,previewImageShow:k.show,selectorPickerShow:e.show&&'selector'==e.mode,datePickerShow:e.show&&'date'==e.mode,timePickerShow:e.show&&'time'==e.mode,multiPickerShow:e.show&&'multi'==e.mode,paymentShow:a.simulator.payment.show,confirmShow:a.simulator.confirm.show,authorizeShow:a.simulator.authorize.show}},u=!1;for(let b in t.switch)u=u||t.switch[b];return t.show=u,t},()=>{return{}})(C)}(require('lazyload'),require);