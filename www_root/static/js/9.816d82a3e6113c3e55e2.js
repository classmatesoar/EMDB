webpackJsonp([9],{R8Fn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),s=n.n(i),r=n("R4Sj"),l={props:{options:{type:Object,default:function(){return{}}}},computed:s()({},Object(r.e)(["clients","luckClient"]),{pKey:function(){return this.options.key||"clients"},pKeyTitle:function(){var t="在线列表";return"clients"==this.pKey?t="在线列表":"luckClient"==this.pKey&&(t="幸运儿"),t},renderClients:function(){var t="clients",e=this.options.key;return e&&(t=e),this[t]}})},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"js-tac appCommonPadingH js-pv10"},[t._v("\n    "+t._s(t.pKeyTitle)+"\n      "),n("hr"),t._v(" "),n("table",{staticClass:"full-width",attrs:{cellspacing:"0"}},[n("tbody",{staticClass:"js-ofa"},[t._l(t.renderClients,function(e,i){return["luckClient"==t.pKey?n("tr",{key:"time"+i},[n("td",[n("app-time",{staticStyle:{"background-color":"transparent",color:"inherit"},attrs:{time:e.time_stamp}})],1)]):t._e(),t._v(" "),n("tr",{key:i},[n("td",[t._v(t._s(i+1)+" - "+t._s(e.nickName)+"- "+t._s(e.mobile))])])]})],2)]),t._v(" "),t.renderClients.length?t._e():n("span",[t._v("\n      暂无\n  ")])])},staticRenderFns:[]};var c=n("C7Lr")(l,a,!1,function(t){n("zgtX")},"data-v-0a365b40",null);e.default=c.exports},zgtX:function(t,e){}});