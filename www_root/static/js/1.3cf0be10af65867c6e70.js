webpackJsonp([1],{PAZB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("a3Yh"),a=i.n(n),r=i("hRKE"),s=i.n(r),o=i("4YfN"),l=i.n(o),c=i("R4Sj"),u=i("ZLEe"),d=i.n(u),m={props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:l()({},Object(c.e)(["uuid"]),{dir:function(){return this.options.dir||"left"},index:function(){return this.options.index}}),filters:{dealStyle:function(t,e){var i=l()({},t),n=i.size;switch(delete i.size,e){case"left":case"right":i.top=n;break;case"top":case"bottom":i.left=n;break;default:i.top=n}return i}},methods:l()({},Object(c.d)(["changeDialog"]),{headImgHandler:function(t){this.changeDialog({name:"appInfo",options:{data:t}})}})},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bulletTextPage js-absolute",class:t.dir+"_go",style:t._f("dealStyle")(t.data.style,t.dir)},[i("div",{staticClass:"main"},[i("span",{staticClass:"js-flex-cc"},[i("app-head-img",{staticClass:"headImg pull-left",attrs:{headImg:t.data.headImg},nativeOn:{click:function(e){return t.headImgHandler(t.data)}}}),t._v(" "),i("span",{staticClass:"content js-phv3 appBB5 js-inline-block js-most1"},[t._v(t._s(t.data.content))])],1)])])},staticRenderFns:[]};var h=i("C7Lr")(m,f,!1,function(t){i("lDdS")},"data-v-7dd997bc",null).exports,p=(i("3cXf"),{mobile:"00000000000",nickName:"红红火火恍恍惚惚"}),b={data:function(){return{timer:null,luck:p,drawType:"start",clients:[{mobile:"13123456789",nickName:"13123456789"},{mobile:"15345435678",nickName:"15345435678"},{mobile:"17845656476",nickName:"17845656476"},{mobile:"15445435457",nickName:"15445435457"},{mobile:"11989873445",nickName:"11989873445"},{mobile:"14568872316",nickName:"14568872316"},{mobile:"17864891253",nickName:"17864891253"},{mobile:"11568798435",nickName:"11568798435"},{mobile:"18794658453",nickName:"18794658453"},{mobile:"15346875315",nickName:"15346875315"},{mobile:"19745511245",nickName:"19745511245"},{mobile:"17897844212",nickName:"17897844212"}]}},computed:l()({},Object(c.e)(["luckClient"]),Object(c.c)(["clientsNum"]),{drawText:function(){return"start"==this.drawType?"开始":"停止"},canDrawClients:function(){var t=this;return this.clients.filter(function(e){return!t.luckClient.find(function(t){return e.mobile==t.mobile})})},num:function(){return this.canDrawClients.length},numText:function(){var t=void 0,e=this.num;e?t="当前中奖率："+(1/e*100).toFixed(2)+"%":t="当前无未中奖的人在线";return t}}),methods:l()({},Object(c.b)(["wsSend"]),{drawRandom:function(){var t=Math.floor(this.num*Math.random());this.canDrawClients[t];this.luck=this.canDrawClients[t]},draw:function(t){var e=this;if(clearInterval(this.timer),"start"==t){if(this.luck=p,!this.num)return void this.$toast(this.numText);this.drawRandom(),this.timer=setInterval(function(){e.drawRandom()},100),this.drawType="stop"}else if("stop"==t){var i=l()({},this.luck),n=i.mobile,a=i.nickName;this.wsSend({type:"record",content:{type:"text",level:"boss-luck",content:{nickName:a,mobile:n}}}),this.drawType="start"}}}),watch:{canDrawClients:function(t,e){}},mounted:function(){var t=this;this.$nextTick(function(){t.$emit("getClientHeight",t.$el.clientHeight)})},beforeDestroy:function(){this.$emit("getClientHeight",0),clearInterval(this.timer)}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"js-flex-cc"},[t._l(t.luck.mobile,function(t,e){return i("span",{key:e,staticClass:"js-block djsItem fsrem15",staticStyle:{"background-image":"url(./static/img/jinli_daojishi.png)"},style:"background-position:0 -"+(9-t)+"00%"})}),t._v(" "),i("van-button",{attrs:{type:"default"},on:{click:function(e){return t.draw(t.drawType)}}},[t._v(t._s(t.drawText))]),t._v(" "),i("span",{domProps:{textContent:t._s(t.numText)}},[t._v("当前无人在线")])],2)])},staticRenderFns:[]};var v={components:{bulletText:h,bulletDraw:i("C7Lr")(b,g,!1,function(t){i("yrEo")},"data-v-0295f424",null).exports},data:function(){return{dir:"bottom",paddingBottom:0,hotData:["新年好","skr skr","大猪蹄子来一波","呵 男人","新年快乐","一枚有思想的弹幕","你好 2019","呵 女人","我佛了","一枚有灵魂的弹幕","呵 人类","Happy New Year","你个大猪蹄子"],clearTime:5e3,oldBulletClear:null,checkNewBullet:null,timer:null,timers:{}}},computed:l()({},Object(c.e)(["record","timeLimit","recordNum","drawShow"]),{textRecord:function(){var t=this;return this.record.filter(function(e){var i="text"==e.type,n=e.time_local>t.timeLimit;return i&&n})},warpStyle:function(){var t=this.paddingBottom,e={};switch(this.dir){case"top":e.paddingBottom=t+"px",e.paddingLeft="100px",e.paddingRight="100px";break;case"bottom":e.paddingBottom=t+"px",e.paddingLeft="100px",e.paddingRight="100px";break;case"left":e.paddingBottom=t+50+"px",e.paddingTop="50px";break;case"right":e.paddingBottom=t+50+"px",e.paddingTop="50px"}return e}}),watch:{$route:function(t,e){t.path!=e.path&&(this.timeLimit=(new Date).getTime())},recordNum:{immediate:!0,handler:function(t){var e=this;this.clearTimers(),clearTimeout(this.timer),clearTimeout(this.checkNewBullet),this.checkNewBullet=setTimeout(function(){e.create_timeout()},1e3)}}},methods:l()({},Object(c.d)(["updatePageInfo"]),Object(c.b)(["wsSend"]),{getClientHeight:function(t){this.paddingBottom=t},updateTimeLimit:function(t){this.updatePageInfo({timeLimit:t||(new Date).getTime()})},clearTimers:function(){var t=this;d()(this.timers).forEach(function(e){clearTimeout(t.timers[e])})},create_timeout:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},creatBullet:function(t){var e=this,i=this.hotData.length;this.clearTimers();for(var n=0;n<t;n++){var a="timer"+n;void 0==this.timers[a]&&this.$set(this.timers,a),this.timers[a]=setTimeout(function(){var t=Math.floor(Math.random()*i);e.wsSend({type:"record",content:{type:"text",remark:"warm",content:e.hotData[t]}})},500*n)}},oldBulletClear_timeout:function(){var t=this;null==this.oldBulletClear&&(this.oldBulletClear=setTimeout(function(){t.oldBulletClear=null;var e=(new Date).getTime()-t.clearTime;t.updateTimeLimit(e)},this.clearTime))}}),created:function(){this.updateTimeLimit()},updated:function(){var t=this;this.$nextTick(function(){t.oldBulletClear_timeout()})},beforeDestroy:function(){this.clearTimers(),clearTimeout(this.timer),clearTimeout(this.oldBulletClear),clearTimeout(this.checkNewBullet)}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bulletPage js-relative js-ofh",style:t.warpStyle},[i("div",{staticClass:"full-box js-relative"},t._l(t.textRecord,function(e,n){return i("bulletText",{key:e.time_stamp,staticClass:"item",attrs:{data:e,options:{index:n,dir:t.dir}}})}),1),t._v(" "),t.drawShow?i("bullet-draw",{staticClass:"js-absolute js-l0 js-b0 js-bgc-suc full-width js-pv10",on:{getClientHeight:t.getClientHeight}}):t._e()],1)},staticRenderFns:[]};var y={components:{appBullet:i("C7Lr")(v,k,!1,function(t){i("d4m3")},"data-v-174482ec",null).exports},data:function(){return{inputHeight:0,scrollTop:0,form:{bless:""},formItems:[{key:"bless",label:void 0,placeholder:"请输入祝福",type:"text",required:void 0,clearable:!0,maxlength:"48",btn:{size:"small",type:"primary",text:"送祝福",disabled:!0}}]}},computed:l()({},Object(c.e)(["mobile","nickName","ws","record"]),{pageStyle:function(){var t={};return t.paddingBottom=this.inputHeight+"px",t}}),methods:l()({},Object(c.d)(["updatePersonInfo","updatePageInfo"]),Object(c.b)(["wsSend"]),{enter:function(t){},clickIcon:function(t){},checkCommand:function(t){switch(t){case"开始抽奖":this.updatePageInfo({drawShow:!0});break;case"结束抽奖":this.updatePageInfo({drawShow:!1})}return!1},itemBtn:function(t){switch(t){case"bless":var e=this.form.bless;if(this.checkCommand(e))return;this.sendBless(e),this.form.bless=""}},sendBless:function(t){var e=void 0;switch(void 0===t?"undefined":s()(t)){case"string":e={type:"record",content:{type:"text",content:t}};break;case"object":e=t}this.wsSend(e)}}),watch:{"form.bless":function(t){var e=this.formItems.find(function(t){return"bless"==t.key});e.btn.disabled=!t},record:function(t){var e=this;this.$nextTick(function(){var t=e.$refs.msgWrap;t&&(t.scrollTop=t.scrollHeight)})}},filters:{msgItemShimClass:function(t){return{"isSelf pull-right js-tar":t,"pull-left":!t}},msgItemLayout:function(t,e){return a()({isSelf:t},e,!0)}},beforeCreate:function(){},created:function(){},mounted:function(){var t=this.$refs.form;t&&(this.inputHeight=t.clientHeight)},beforeDestroy:function(){}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"luckPage full-box js-relative",style:t.pageStyle},[i("div",{ref:"msgWrap",staticClass:"full-box js-ofa msgWrap"},[i("appBullet",{staticClass:"msgWrapShim full-box"})],1),t._v(" "),i("form",{ref:"form",staticClass:"js-absolute full-width js-p-lc js-b0",attrs:{action:"javascript:return true"},on:{submit:function(t){t.preventDefault()}}},[i("van-cell-group",t._l(t.formItems,function(e,n){return i("van-field",{key:n,staticClass:"appCommonPadingH",attrs:{label:e.label,placeholder:e.placeholder,type:e.type,required:e.required,clearable:e.clearable,icon:e.icon,maxlength:e.maxlength},on:{keypress:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:i.target!==i.currentTarget?null:t.enter(e.key)},"click-icon":function(i){return t.clickIcon(e.key)}},model:{value:t.form[e.key],callback:function(i){t.$set(t.form,e.key,"string"==typeof i?i.trim():i)},expression:"form[item.key]"}},[e.btn?i("van-button",{attrs:{slot:"button",size:e.btn.size,type:e.btn.type,disabled:e.btn.disabled},on:{click:function(i){return t.itemBtn(e.key)}},slot:"button"},[i("span",{domProps:{textContent:t._s(e.btn.text)}})]):t._e()],1)}),1)],1)])},staticRenderFns:[]};var x=i("C7Lr")(y,w,!1,function(t){i("lu09")},"data-v-34eb2e5b",null);e.default=x.exports},d4m3:function(t,e){},lDdS:function(t,e){},lu09:function(t,e){},yrEo:function(t,e){}});