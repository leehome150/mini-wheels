(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{614:function(t,o,e){},615:function(t,o,e){},660:function(t,o,e){"use strict";e(614)},661:function(t,o,e){"use strict";e(615)},665:function(t,o,e){"use strict";e.r(o);e(301),e(71),e(93);var s,n={props:{autoClose:{type:Boolean,default:!0},autoCloseDelay:{type:Number,default:5},closeButton:{type:Object,default:function(){return{text:"",callback:void 0}}},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","bottom","middle"].indexOf(t)>=0}}},computed:{toastClasses:function(){return["position-".concat(this.position)]}},mounted:function(){this.exeAutoClose(),this.updateStyles()},methods:{exeAutoClose:function(){var t=this;this.autoClose&&setTimeout((function(){t.close()}),1e3*this.autoCloseDelay)},updateStyles:function(){var t=this;this.$nextTick((function(){t.$refs.line.style.height="".concat(t.$refs.toast.getBoundingClientRect().height,"px")}))},close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},onClickClose:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback()}}},l=(e(660),e(11)),i=Object(l.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"wrapper",class:t.toastClasses},[e("div",{ref:"toast",staticClass:"toast"},[e("div",{staticClass:"message"},[t.enableHtml?e("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),e("div",{ref:"line",staticClass:"line"}),t._v(" "),t.closeButton?e("span",{staticClass:"close",on:{click:t.onClickClose}},[t._v("\n        "+t._s(t.closeButton.text)+"\n    ")]):t._e()])])}),[],!1,null,"e16f224a",null).exports,a={install:function(t,o){t.prototype.$toast=function(o,e){s&&s.close(),s=function(t){var o=t.Vue,e=t.message,s=t.propsData,n=t.onClose,l=new(o.extend(i))({propsData:s});return l.$slots.default=[e],l.$mount(),l.$on("close",n),document.body.appendChild(l.$el),l}({Vue:t,message:o,propsData:e,onClose:function(){s=null}})}}};e(0).a.use(a);var c={components:{"m-toast":i},methods:{showToast:function(t){this.$toast("弹出内容",{closeButton:{text:"关闭",callback:function(){}},enableHtml:!1,position:t})}}},u=(e(661),Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("button",{on:{click:function(o){return t.showToast("top")}}},[t._v("上方弹出")]),t._v(" "),e("button",{on:{click:function(o){return t.showToast("middle")}}},[t._v("中间弹出")]),t._v(" "),e("button",{on:{click:function(o){return t.showToast("bottom")}}},[t._v("下方弹出")])])}),[],!1,null,"bc5e87f8",null));o.default=u.exports}}]);