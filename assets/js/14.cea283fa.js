(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{539:function(t,n,c){},540:function(t,n,c){},549:function(t,n,c){"use strict";c(539)},550:function(t,n,c){"use strict";c(540)},551:function(t,n,c){"use strict";c(301),c(302),c(69),c(7),c(70);var s={props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","center","right"].includes(t)}}},computed:{rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(n){n.gutter=t.gutter}))}},e=(c(549),c(11)),a=Object(e.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"51916b06",null);n.a=a.exports},552:function(t,n,c){"use strict";var s=c(72),e=(c(94),c(69),c(7),c(70),c(302),c(176),c(301),function(t){var n=Object.keys(t),c=!0;return n.forEach((function(t){["span","offset"].includes(t)||(c=!1)})),c}),a={data:function(){return{gutter:0}},computed:{colClass:function(){var t=this.span,n=this.offset,c=this.ipad,e=this.narrowPc,a=this.pc,r=this.widePc,o=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var c=[];return t.span&&c.push("col-".concat(n).concat(t.span)),t.offset&&c.push("offset-".concat(n).concat(t.offset)),c};return[].concat(Object(s.a)(o({span:t,offset:n})),Object(s.a)(o(c,"ipad-")),Object(s.a)(o(e,"narrow-pc-")),Object(s.a)(o(a,"pc-")),Object(s.a)(o(r,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}},props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}}},r=(c(550),c(11)),o=Object(r.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[n("div",{staticClass:"inside"},[this._t("default")],2)])}),[],!1,null,"9f921dec",null);n.a=o.exports},673:function(t,n,c){"use strict";c.r(n);var s=c(551),e=c(552),a={components:{"m-row":s.a,"m-col":e.a}},r=c(11),o=Object(r.a)(a,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",[c("m-row",[c("m-col",{attrs:{span:"12"}},[t._v("col-12")]),t._v(" "),c("m-col",{attrs:{span:"12"}},[t._v("col-12")])],1),t._v(" "),c("m-row",[c("m-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),c("m-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),c("m-col",{attrs:{span:"8"}},[t._v("col-8")])],1),t._v(" "),c("m-row",[c("m-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),c("m-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),c("m-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),c("m-col",{attrs:{span:"6"}},[t._v("col-6")])],1)],1)}),[],!1,null,"045abc1e",null);n.default=o.exports}}]);