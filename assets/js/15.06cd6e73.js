(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{539:function(t,n,s){},540:function(t,n,s){},549:function(t,n,s){"use strict";s(539)},550:function(t,n,s){"use strict";s(540)},551:function(t,n,s){"use strict";s(301),s(302),s(69),s(7),s(70);var c={props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","center","right"].includes(t)}}},computed:{rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(n){n.gutter=t.gutter}))}},e=(s(549),s(11)),r=Object(e.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"51916b06",null);n.a=r.exports},552:function(t,n,s){"use strict";var c=s(72),e=(s(94),s(69),s(7),s(70),s(302),s(176),s(301),function(t){var n=Object.keys(t),s=!0;return n.forEach((function(t){["span","offset"].includes(t)||(s=!1)})),s}),r={data:function(){return{gutter:0}},computed:{colClass:function(){var t=this.span,n=this.offset,s=this.ipad,e=this.narrowPc,r=this.pc,a=this.widePc,o=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(n).concat(t.span)),t.offset&&s.push("offset-".concat(n).concat(t.offset)),s};return[].concat(Object(c.a)(o({span:t,offset:n})),Object(c.a)(o(s,"ipad-")),Object(c.a)(o(e,"narrow-pc-")),Object(c.a)(o(r,"pc-")),Object(c.a)(o(a,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}},props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}}},a=(s(550),s(11)),o=Object(a.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[n("div",{staticClass:"inside"},[this._t("default")],2)])}),[],!1,null,"9f921dec",null);n.a=o.exports},671:function(t,n,s){"use strict";s.r(n);var c=s(551),e=s(552),r={components:{"m-row":c.a,"m-col":e.a}},a=s(11),o=Object(a.a)(r,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("m-row",{attrs:{gutter:"20"}},[s("m-col",{attrs:{span:"12"}},[t._v("col-12")]),t._v(" "),s("m-col",{attrs:{span:"12"}},[t._v("col-12")])],1),t._v(" "),s("m-row",{attrs:{gutter:"20"}},[s("m-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),s("m-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),s("m-col",{attrs:{span:"8"}},[t._v("col-8")])],1),t._v(" "),s("m-row",{attrs:{gutter:"20"}},[s("m-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),s("m-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),s("m-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),s("m-col",{attrs:{span:"6"}},[t._v("col-6")])],1)],1)}),[],!1,null,"0d38f0fa",null);n.default=o.exports}}]);