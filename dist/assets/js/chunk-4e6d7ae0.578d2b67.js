(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e6d7ae0"],{a15b:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var n=r("b42e"),a=r("c637"),c=r("a723"),o=r("2326"),l=r("228e"),u=r("6c06"),i=r("b508"),s=r("d82f"),b=r("cf75"),d=r("fa73");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=["start","end","center"],v=Object(i["a"])((function(t,e){return e=Object(d["h"])(Object(d["g"])(e)),e?Object(d["c"])(["row-cols",t,e].filter(u["a"]).join("-")):null})),h=Object(i["a"])((function(t){return Object(d["c"])(t.replace("cols",""))})),g=[],y=function(){var t=Object(l["b"])().reduce((function(t,e){return t[Object(b["g"])(e,"cols")]=Object(b["c"])(c["n"]),t}),Object(s["c"])(null));return g=Object(s["h"])(t),Object(b["d"])(Object(s["m"])(p(p({},t),{},{alignContent:Object(b["c"])(c["s"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"between","around","stretch"),t)})),alignH:Object(b["c"])(c["s"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"between","around"),t)})),alignV:Object(b["c"])(c["s"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"baseline","stretch"),t)})),noGutters:Object(b["c"])(c["f"],!1),tag:Object(b["c"])(c["s"],"div")})),a["hb"])},w={name:a["hb"],functional:!0,get props(){return delete this.props,this.props=y(),this.props},render:function(t,e){var r,a=e.props,c=e.data,o=e.children,l=a.alignV,u=a.alignH,i=a.alignContent,s=[];return g.forEach((function(t){var e=v(h(t),a[t]);e&&s.push(e)})),s.push((r={"no-gutters":a.noGutters},O(r,"align-items-".concat(l),l),O(r,"justify-content-".concat(u),u),O(r,"align-content-".concat(i),i),r)),t(a.tag,Object(n["a"])(c,{staticClass:"row",class:s}),o)}}},b787:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"match-height"},[r("b-col",{attrs:{lg:"6"}},[r("informations",{attrs:{truck:t.truck}})],1),r("b-col",{attrs:{lg:"6"}},[r("drivers",{attrs:{truck:t.truck}})],1)],1)},a=[],c=r("a15b"),o=r("b28b"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.truck?r("b-row",[r("b-col",{attrs:{lg:"12"}},[r("b-card",{attrs:{"no-body":""}},[r("b-card-body",[t._v(" Plaka No: "+t._s(t.truck.plate_no)+" ")])],1)],1)],1):t._e(),t.truck?r("b-row",t._l(t.properties,(function(e,n){return r("b-col",{key:n,attrs:{lg:"4"}},[r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("b-card-title",[t._v(" "+t._s(e.value)+" ")])],1),r("b-card-body",[t._v(" "+t._s(e.title)+" ")])],1)],1)})),1):t._e()],1)},u=[],i=r("205f"),s=r("b885"),b=r("4968"),d=r("6197"),f={props:["truck"],components:{BRow:c["a"],BCol:o["a"],BCard:i["a"],BCardHeader:s["a"],BCardTitle:b["a"],BCardBody:d["a"]},data:function(){return{properties:[{title:"Bugün Toplanan",value:"25"},{title:"Dün Toplanan",value:"30"},{title:"1 Haftalık Toplanan",value:"196"},{title:"Haftanın Ortalaması",value:"28"},{title:"Ayın Ortalaması",value:"29,6"},{title:"Ortalama Günlük KM",value:"75 KM"}]}}},p=f,O=r("2877"),j=Object(O["a"])(p,l,u,!1,null,null,null),v=j.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("b-card-title",[t._v(" Kullanan Şoförler ")])],1),r("b-card-body",[t._v(" İçerik ")])],1)},g=[],y={components:{BCard:i["a"],BCardHeader:s["a"],BCardTitle:b["a"],BCardBody:d["a"]},props:["truck"],data:function(){return{}}},w=y,k=Object(O["a"])(w,h,g,!1,null,null,null),m=k.exports,_={components:{BRow:c["a"],BCol:o["a"],Informations:v,Drivers:m},data:function(){return{truck:null}},created:function(){this.truck=this.$route.params.truck}},B=_,C=Object(O["a"])(B,n,a,!1,null,null,null);e["default"]=C.exports}}]);