(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/addGoods"],{1907:function(e,n,t){},"195e":function(e,n,t){"use strict";(function(e){t("66ef");u(t("66fd"));var n=u(t("9a69"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"3feb":function(e,n,t){"use strict";var u=t("1907"),o=t.n(u);o.a},"9a69":function(e,n,t){"use strict";t.r(n);var u=t("bb53"),o=t("df0e");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("3feb");var i,a=t("f0c5"),s=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,"020f361e",null,!1,u["a"],i);n["default"]=s.exports},bb1b:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("a34a")),o=t("08c9");function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,u,o,r,i){try{var a=e[r](i),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(u,o)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(u,o){var r=e.apply(n,t);function a(e){i(r,u,o,a,s,"next",e)}function s(e){i(r,u,o,a,s,"throw",e)}a(void 0)}))}}var s={data:function(){return{form:{goodsName:"",sku:"",unitId:this.$Bmob.User.current().objectId},rules:{goodsName:[{required:!0,message:"请输入商品名称"}],sku:[{required:!0,message:"请输商品型号"}]}}},methods:{submit:function(){var n=this;console.log("aaa"),this.$refs.uForm.validate(function(){var t=a(u.default.mark((function t(r){var i;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=15;break}return t.prev=1,i=n.$Bmob.Query("Goods"),(0,o.transformBmobParam)(i,n.form),t.next=6,i.save();case 6:e.showToast({title:"保存成功"}),n.$refs.uForm.resetFields(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.showToast({icon:"none",title:"保存失败，请检查输入内容是否正确"});case 13:t.next=16;break;case 15:console.log("验证失败");case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}())}},onReady:function(){this.$refs.uForm.setRules(this.rules)}};n.default=s}).call(this,t("543d")["default"])},bb53:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return u}));var u={uForm:function(){return t.e("node-modules/uview-ui/components/u-form/u-form").then(t.bind(null,"9ac6"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"e8f0"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"78b5"))},uButton:function(){return t.e("node-modules/uview-ui/components/u-button/u-button").then(t.bind(null,"1183"))}},o=function(){var e=this,n=e.$createElement;e._self._c},r=[]},df0e:function(e,n,t){"use strict";t.r(n);var u=t("bb1b"),o=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=o.a}},[["195e","common/runtime","common/vendor"]]]);