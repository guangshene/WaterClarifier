(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/inbound"],{"06d0":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(t("a34a")),r=t("08c9");function u(e){return e&&e.__esModule?e:{default:e}}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n,t,o,r,u,c){try{var i=e[u](c),a=i.value}catch(s){return void t(s)}i.done?n(a):Promise.resolve(a).then(o,r)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var u=e.apply(n,t);function c(e){s(u,o,r,c,i,"next",e)}function i(e){s(u,o,r,c,i,"throw",e)}c(void 0)}))}}var l={data:function(){return{goodsInfo:{},form:{count:"",unitId:this.$Bmob.User.current().objectId,type:"inbound"},rules:{count:[{required:!0,message:"请输入入库数量"}]}}},methods:{submit:function(){var n=this;console.log("aaa"),this.$refs.uForm.validate(function(){var t=f(o.default.mark((function t(u){var c,a,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!u){t.next=25;break}return t.prev=1,c=n.$Bmob.Query("Goods"),console.log(c),t.next=6,c.get(n.goodsInfo.objectId);case 6:return a=t.sent,console.log(a),a.set("count",parseInt(n.goodsInfo.count||"0")+parseInt(n.form.count)),t.next=11,a.save();case 11:return s=n.$Bmob.Query("InboundRecord"),(0,r.transformBmobParam)(s,i(i({},n.form),{},{count:parseInt(n.form.count),goodsId:n.goodsInfo.objectId})),t.next=15,s.save();case 15:e.showToast({title:"保存成功"}),n.$refs.uForm.resetFields(),t.next=23;break;case 19:t.prev=19,t.t0=t["catch"](1),console.log(t.t0),e.showToast({icon:"none",title:"保存失败，请检查输入内容是否正确"});case 23:t.next=26;break;case 25:console.log("验证失败");case 26:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e){return t.apply(this,arguments)}}())}},onReady:function(){this.$refs.uForm.setRules(this.rules)},onLoad:function(e){this.goodsInfo=JSON.parse(e.item)}};n.default=l}).call(this,t("543d")["default"])},"1fc0":function(e,n,t){"use strict";t.r(n);var o=t("06d0"),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=r.a},"43f4":function(e,n,t){"use strict";t.r(n);var o=t("f5d0"),r=t("1fc0");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("96ba");var c,i=t("f0c5"),a=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"00008576",null,!1,o["a"],c);n["default"]=a.exports},"4b45":function(e,n,t){},"96ba":function(e,n,t){"use strict";var o=t("4b45"),r=t.n(o);r.a},aef7:function(e,n,t){"use strict";(function(e){t("66ef");o(t("66fd"));var n=o(t("43f4"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},f5d0:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={uForm:function(){return t.e("node-modules/uview-ui/components/u-form/u-form").then(t.bind(null,"9ac6"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"e8f0"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"78b5"))},uButton:function(){return t.e("node-modules/uview-ui/components/u-button/u-button").then(t.bind(null,"1183"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["aef7","common/runtime","common/vendor"]]]);