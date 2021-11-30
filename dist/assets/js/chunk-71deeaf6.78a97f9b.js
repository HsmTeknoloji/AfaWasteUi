(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71deeaf6"],{"07ac":function(t,e,a){var r=a("23e7"),o=a("6f53").values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},"0c59":function(t,e,a){"use strict";a.r(e);var r,o,n,l,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",[a("b-col",{attrs:{lg:"12",cols:"12"}},[a("general-summary")],1)],1),a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{lg:"4"}},[a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("daily-container-status")],1)],1)],1),a("b-col",{attrs:{lg:"8"}},[a("not-collected-containers")],1)],1)],1)},s=[],c=a("a15b"),u=a("b28b"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",t._l(t.statisticsItems,(function(e,r){return a("b-col",{key:r,staticClass:"mb-2 mb-md-0",attrs:{md:"6",lg:"6",sm:"12"}},[a("b-card",{attrs:{"no-body":""},on:{click:function(a){return t.toItemPage(e)}}},[a("b-card-body",{staticClass:"statistics-body"},[a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("b-media",{attrs:{"no-body":""}},[a("b-media-aside",{staticClass:"mr-2"},[a("b-avatar",{attrs:{size:"48",variant:e.color}},[a("feather-icon",{attrs:{size:"24",icon:e.icon}})],1)],1),a("b-media-body",{staticClass:"my-auto"},[a("h4",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(e.title)+" ")]),a("b-card-text",{staticClass:"font-small-3 mb-0"},[t._v(" "+t._s(e.subtitle)+" ")])],1)],1)],1)],1)],1)],1)],1)})),1)},_=[],f=(a("b64b"),a("205f")),b=a("b885"),p=a("4968"),m=a("d6e4"),h=a("6197"),g=a("34b6"),C=a("e8a3"),T=a("7c32"),k=a("7fa6"),v={components:{BRow:c["a"],BCol:u["a"],BCard:f["a"],BCardHeader:b["a"],BCardTitle:p["a"],BCardText:m["a"],BCardBody:h["a"],BMedia:g["a"],BAvatar:C["a"],BMediaAside:T["a"],BMediaBody:k["a"]},data:function(){return{statisticsItems:[{icon:"TruckIcon",color:"light-primary",title:this.getTruckCount(),subtitle:"Toplam Kamyon Sayısı",customClass:"mb-2 mb-xl-0",to:{name:"trucks"}},{icon:"UserIcon",color:"light-info",title:this.getTagCount(),subtitle:"Toplam Konteyner Sayısı",customClass:"mb-2 mb-xl-0",to:{name:"containers"}}]}},methods:{getTruckCount:function(){var t=this.$store.getters["panel/getRfidDevices"];return Object.keys(t).length},getTagCount:function(){var t=this.$store.getters["panel/getTags"];return Object.keys(t).length},toItemPage:function(t){t.to&&this.$router.push(t.to)}}},y=v,A=(a("ea5c"),a("2877")),w=Object(A["a"])(y,d,_,!1,null,"78e15184",null),Z=w.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:"Günlük Konteyner Durumu"}},[a("doughnut-chart",{staticClass:"mb-3",attrs:{height:275,data:t.chart.data,options:t.chart.options}}),t._l(t.statusData,(function(e,r){return a("div",{key:r,staticClass:"d-flex justify-content-between",class:r<t.statusData.length-1?"mb-1":""},[a("div",{staticClass:"d-flex align-items-center"},[a("feather-icon",{class:e.color,attrs:{icon:"TruckIcon",size:"16"}}),a("span",{staticClass:"font-weight-bold ml-75 mr-25 cursor-pointer",on:{click:function(a){return t.$router.push({name:"containers",params:{status:e.title}})}}},[t._v(t._s(e.title))])],1),a("div",[a("span",[t._v(t._s(e.percentage)+"%")])])])}))],2)},S=[],B=(a("99af"),a("4de4"),a("07ac"),a("1fca")),F={extends:B["b"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},R=F,x=Object(A["a"])(R,r,o,!1,null,null,null),j=x.exports,N=a("1dff"),M=a("6d79"),D={components:{BCard:f["a"],BCardHeader:b["a"],BCardTitle:p["a"],BCardText:m["a"],BCardBody:h["a"],DoughnutChart:j},data:function(){var t={primaryColorShade:"#836AF9",yellowColor:"#ffe800",successColorShade:"#28dac6",warningColorShade:"#ffe802",warningLightColor:"#FDAC34",infoColorShade:"#299AFF",greyColor:"#4F5D70",blueColor:"#2c9aff",blueLightColor:"#84D0FF",greyLightColor:"#EDF1F4",tooltipShadow:"rgba(0, 0, 0, 0.25)",lineChartPrimary:"#666ee8",lineChartDanger:"#ff4961",labelColor:"#6e6b7b",grid_line_color:"rgba(200, 200, 200, 0.2)"};return{chart:{options:{responsive:!0,maintainAspectRatio:!1,responsiveAnimationDuration:500,cutoutPercentage:60,legend:{display:!1},tooltips:{callbacks:{label:function(t,e){var a=e.datasets[0],r=a.labels[t.index]||"",o=(a.data[t.index],a.data.reduce((function(t,e,a,r){return t+e}))),n=a.data[t.index],l=Math.floor(n/o*100+.5),i=" ".concat(r," : ").concat(l," %");return i}},shadowOffsetX:1,shadowOffsetY:1,shadowBlur:8,shadowColor:t.tooltipShadow,backgroundColor:N["b"].light,titleFontColor:N["b"].dark,bodyFontColor:N["b"].dark}},data:{datasets:[{labels:[],data:[],backgroundColor:[N["b"].success,N["b"].danger],borderWidth:0,pointStyle:"rectRounded"}]}},statusData:[{title:"Toplanan",statu:"collected",color:t.successColorShade,percentage:0},{title:"Toplanmayan",statu:"notCollected",color:t.dangerColorShade,percentage:0}]}},created:function(){var t=this.$store.getters["panel/getTags"],e=Object.values(t).filter((function(t){return t.ContainerStatu==M["a"].CONTAINER_FULLNESS_STATU_EMPTY})).length,a=Object.values(t).filter((function(t){return t.ContainerStatu==M["a"].CONTAINER_FULLNESS_STATU_FULL})).length;this.chart.data.datasets[0].data=[e,a],this.chart.data.datasets[0].labels=["Toplanan","Toplanmayan"],this.statusData[0].percentage=this.calculatePercentage(e,Object.values(t).length),this.statusData[1].percentage=this.calculatePercentage(a,Object.values(t).length)},methods:{calculatePercentage:function(t,e){return Math.floor(t/e*100+.5)}}},P=D,I=Object(A["a"])(P,O,S,!1,null,null,null),L=I.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("div",[a("b-card-title",{staticClass:"mb-1"},[t._v(" Statistics ")])],1)]),a("b-card-body",[a("line-chart",{attrs:{height:400,data:t.chart.data,options:t.chart.options,plugins:t.plugins}})],1)],1)},K=[],E={extends:B["c"],props:{data:{type:Object,default:null},options:{type:Object,default:null},plugins:{type:Array,default:null},styles:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options,this.plugins,this.styles)}},V=E,$=Object(A["a"])(V,n,l,!1,null,null,null),q=$.exports,z={components:{BCard:f["a"],BCardHeader:b["a"],BCardTitle:p["a"],BCardText:m["a"],BCardBody:h["a"],LineChart:q},data:function(){var t={primaryColorShade:"#836AF9",yellowColor:"#ffe800",successColorShade:"#28dac6",warningColorShade:"#ffe802",warningLightColor:"#FDAC34",infoColorShade:"#299AFF",greyColor:"#4F5D70",blueColor:"#2c9aff",blueLightColor:"#84D0FF",greyLightColor:"#EDF1F4",tooltipShadow:"rgba(0, 0, 0, 0.25)",lineChartPrimary:"#666ee8",lineChartDanger:"#ff4961",labelColor:"#6e6b7b",grid_line_color:"rgba(200, 200, 200, 0.2)"};return{chart:{options:{responsive:!0,maintainAspectRatio:!1,backgroundColor:!1,hover:{mode:"label"},tooltips:{shadowOffsetX:1,shadowOffsetY:1,shadowBlur:8,shadowColor:t.tooltipShadow,backgroundColor:N["b"].white,titleFontColor:N["b"].black,bodyFontColor:N["b"].black},layout:{padding:{top:-15,bottom:-25,left:-15}},scales:{xAxes:[{display:!0,scaleLabel:{display:!0},gridLines:{display:!0,color:t.grid_line_color,zeroLineColor:t.grid_line_color},ticks:{fontColor:t.labelColor}}],yAxes:[{display:!0,scaleLabel:{display:!0},ticks:{stepSize:100,min:0,max:400,fontColor:t.labelColor},gridLines:{display:!0,color:t.grid_line_color,zeroLineColor:t.grid_line_color}}]},legend:{position:"top",align:"start",labels:{usePointStyle:!0,padding:25,boxWidth:9}}},data:{labels:[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140],datasets:[{data:[80,150,180,270,210,160,160,202,265,210,270,255,290,360,375],label:"Europe",borderColor:t.lineChartDanger,lineTension:.5,pointStyle:"circle",backgroundColor:t.lineChartDanger,fill:!1,pointRadius:1,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBorderColor:N["b"].white,pointHoverBackgroundColor:t.lineChartDanger,pointShadowOffsetX:1,pointShadowOffsetY:1,pointShadowBlur:5,pointShadowColor:t.tooltipShadow},{data:[80,125,105,130,215,195,140,160,230,300,220,170,210,200,280],label:"Asia",borderColor:t.lineChartPrimary,lineTension:.5,pointStyle:"circle",backgroundColor:t.lineChartPrimary,fill:!1,pointRadius:1,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBorderColor:N["b"].white,pointHoverBackgroundColor:t.lineChartPrimary,pointShadowOffsetX:1,pointShadowOffsetY:1,pointShadowBlur:5,pointShadowColor:t.tooltipShadow},{data:[80,99,82,90,115,115,74,75,130,155,125,90,140,130,180],label:"Africa",borderColor:t.warningColorShade,lineTension:.5,pointStyle:"circle",backgroundColor:t.warningColorShade,fill:!1,pointRadius:1,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBorderColor:N["b"].white,pointHoverBackgroundColor:t.warningColorShade,pointShadowOffsetX:1,pointShadowOffsetY:1,pointShadowBlur:5,pointShadowColor:t.tooltipShadow}]}},plugins:[{beforeInit:function(t){t.legend.afterFit=function(){this.height+=20}}}]}}},U=z,W=Object(A["a"])(U,H,K,!1,null,null,null),G=W.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("div",[a("b-card-title",{staticClass:"mb-1"},[t._v(" En Az 7 Gün Toplanmayan Konteynerlar ")])],1)]),a("b-card-body",[a("b-table",{staticClass:"position-relative",attrs:{items:t.sortedItems,"current-page":t.currentPage,"per-page":t.perPage,responsive:"",fields:t.fields,"primary-key":"id","show-empty":"","empty-text":"No matching records found"},scopedSlots:t._u([{key:"cell(ContainerNo)",fn:function(e){return[t._v(" "+t._s(e.value)+" ")]}},{key:"cell(TagId)",fn:function(e){return[t._v(" "+t._s(e.value)+" ")]}},{key:"cell(ReadTime)",fn:function(e){return[a("b-badge",{attrs:{pill:"",variant:"light-danger",title:e.value}},[t._v(" "+t._s(t.$moment(e.value).fromNow())+" ")])]}}])}),a("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":t.totalItems,"per-page":t.perPage,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[a("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[a("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},X=[],J=(a("4e82"),a("29a1")),Q=a("e98b"),tt=a("26d2"),et=(a("ed9c"),{components:{BCard:f["a"],BCardHeader:b["a"],BCardTitle:p["a"],BCardText:m["a"],BCardBody:h["a"],BTable:J["a"],BBadge:Q["a"],BPagination:tt["a"]},data:function(){return{currentPage:1,items:[],perPage:6,perPageOptions:[5,10,15,20,25,50],searchQuery:"",fields:[{key:"ContainerNo",label:"Konteyner NO"},{key:"TagId",label:"ID"},{key:"ReadTime",label:"Son Okunma Saati"}],sortBy:"ReadTime",isSortDirDesc:!0,totalItems:0}},computed:{sortedItems:function(){return this.items.sort((function(t,e){return new Date(e.ReadTime)-new Date(t.ReadTime)}))}},created:function(){this.getOlderThanDays(7)},methods:{getOlderThanDays:function(t){var e=this.$moment(),a=this.$store.getters["panel/getTags"];this.items=Object.values(a).filter((function(a){return e.diff(a.ReadTime,"days")>=t})),this.totalItems=this.items.length}}}),at=et,rt=Object(A["a"])(at,Y,X,!1,null,null,null),ot=rt.exports,nt=(a("d95a"),a("d116"),a("d4ec"),a("bee2"),{components:{BRow:c["a"],BCol:u["a"],GeneralSummary:Z,DailyContainerStatus:L,WeeklyContainerStatus:G,NotCollectedContainers:ot},data:function(){return{}},created:function(){}}),lt=nt,it=Object(A["a"])(lt,i,s,!1,null,null,null);e["default"]=it.exports},"34b6":function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var r=a("2b0e"),o=a("b42e"),n=a("c637"),l=a("a723"),i=a("9b76"),s=a("365c"),c=a("cf75"),u=a("7c32"),d=a("7fa6"),_=Object(c["d"])({noBody:Object(c["c"])(l["f"],!1),rightAlign:Object(c["c"])(l["f"],!1),tag:Object(c["c"])(l["s"],"div"),verticalAlign:Object(c["c"])(l["s"],"top")},n["T"]),f=r["default"].extend({name:n["T"],functional:!0,props:_,render:function(t,e){var a=e.props,r=e.data,n=e.slots,l=e.scopedSlots,c=e.children,_=a.noBody,f=a.rightAlign,b=a.verticalAlign,p=_?c:[];if(!_){var m={},h=n(),g=l||{};p.push(t(d["a"],Object(s["b"])(i["h"],m,g,h)));var C=Object(s["b"])(i["b"],m,g,h);C&&p[f?"push":"unshift"](t(u["a"],{props:{right:f,verticalAlign:b}},C))}return t(a.tag,Object(o["a"])(r,{staticClass:"media"}),p)}})},"4a8b":function(t,e,a){},"4e82":function(t,e,a){"use strict";var r=a("23e7"),o=a("1c0b"),n=a("7b0b"),l=a("d039"),i=a("a640"),s=[],c=s.sort,u=l((function(){s.sort(void 0)})),d=l((function(){s.sort(null)})),_=i("sort"),f=u||!d||!_;r({target:"Array",proto:!0,forced:f},{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),o(t))}})},"6f53":function(t,e,a){var r=a("83ab"),o=a("df75"),n=a("fc6a"),l=a("d1e7").f,i=function(t){return function(e){var a,i=n(e),s=o(i),c=s.length,u=0,d=[];while(c>u)a=s[u++],r&&!l.call(i,a)||d.push(t?[a,i[a]]:i[a]);return d}};t.exports={entries:i(!0),values:i(!1)}},"7c32":function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var r=a("2b0e"),o=a("b42e"),n=a("c637"),l=a("a723"),i=a("cf75");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c=Object(i["d"])({right:Object(i["c"])(l["f"],!1),tag:Object(i["c"])(l["s"],"div"),verticalAlign:Object(i["c"])(l["s"],"top")},n["U"]),u=r["default"].extend({name:n["U"],functional:!0,props:c,render:function(t,e){var a=e.props,r=e.data,n=e.children,l=a.verticalAlign,i="top"===l?"start":"bottom"===l?"end":l;return t(a.tag,Object(o["a"])(r,{staticClass:"media-aside",class:s({"media-aside-right":a.right},"align-self-".concat(i),i)}),n)}})},"7fa6":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var r=a("2b0e"),o=a("b42e"),n=a("c637"),l=a("a723"),i=a("cf75"),s=Object(i["d"])({tag:Object(i["c"])(l["s"],"div")},n["V"]),c=r["default"].extend({name:n["V"],functional:!0,props:s,render:function(t,e){var a=e.props,r=e.data,n=e.children;return t(a.tag,Object(o["a"])(r,{staticClass:"media-body"}),n)}})},9523:function(t,e){function a(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}t.exports=a,t.exports["default"]=t.exports,t.exports.__esModule=!0},d6e4:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var r=a("2b0e"),o=a("b42e"),n=a("c637"),l=a("a723"),i=a("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(l["s"],"p")},n["p"]),c=r["default"].extend({name:n["p"],functional:!0,props:s,render:function(t,e){var a=e.props,r=e.data,n=e.children;return t(a.textTag,Object(o["a"])(r,{staticClass:"card-text"}),n)}})},ea5c:function(t,e,a){"use strict";a("4a8b")},ed9c:function(t,e,a){var r,o=a("9523").default;a("d3b7"),a("25f0"),t.exports={tags:[{rftag_id:13,rfhash:"AFA09012018AFA4811900765",container_no:"NO1900765",latitude:"37.05841100000",longitude:"27.38367800000",last_event:"2021-08-03T10:45:56.000Z",create_time:"2021-08-03T10:07:31.828Z",last_statu:"G",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"truck002",last_truck_time:"2021-08-03T10:53:39.000Z",last_truck_error_time:"2021-08-04T12:41:14.000Z",last_truck_stop_time:"2021-08-03T10:45:56.000Z",last_in_statu:"R",rftag_title:"RF1",status:"collected",location:"Test Cd. Örnek Mh. No: 1",collection_frequency:"30",warning:"",truck_plate_no:"07 MVS 34",video_url:"https://afatek-waste-videos-s3.s3.eu-central-1.amazonaws.com/WAIT_CAM/0044bd72-4173-11ec-bd3c-b827eb64f0f2.mp4"},{rftag_id:15,rfhash:"AFA09012018AFA4811900750",container_no:"NO1900750",latitude:"37.04092825594592",longitude:"27.37277984619141",last_event:"2021-08-03T10:51:08.000Z",create_time:"2021-09-01T21:39:17.371Z",last_statu:"",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-09-01T21:39:17.371Z",last_truck_error_time:"2021-09-01T21:39:17.371Z",last_truck_stop_time:"2021-08-03T10:51:08.000Z",last_in_statu:"R",rftag_title:"RF2",status:"collected",location:"Test Cd. Örnek Mh. No: 2",collection_frequency:"12",warning:"2 gündür toplanmadı",truck_plate_no:"07 MVS 38",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/90b84088-2f12-11ec-af20-b827eb0aadac.mp4"},{rftag_id:16,rfhash:"AFA09012018AFA4811900774",container_no:"NO1900774",latitude:"37.03983207971427",longitude:"27.402820587158207",last_event:"2021-08-03T10:51:14.000Z",create_time:"2021-09-01T21:39:17.377Z",last_statu:"G",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-09-01T21:39:17.377Z",last_truck_error_time:"2021-09-01T21:39:17.377Z",last_truck_stop_time:"2021-08-03T10:51:14.000Z",last_in_statu:"R",rftag_title:"RF3",status:"collected",location:"Test Cd. Örnek Mh. No: 3",collection_frequency:"66",warning:"1 gündür toplanmadı",truck_plate_no:"07 MVS 34",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/d0d38a06-2f14-11ec-af20-b827eb0aadac.mp4"},{rftag_id:11,rfhash:"AFA09012018AFA4811200391",container_no:"NO1200391",latitude:"37.04846403909448",longitude:"27.430801391601566",last_event:"2021-09-01T21:39:42.000Z",create_time:"2021-08-03T09:41:33.590Z",last_statu:"R",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-08-03T09:41:33.590Z",last_truck_error_time:"2021-08-03T09:41:33.590Z",last_truck_stop_time:"2021-09-01T21:39:42.000Z",last_in_statu:"R",rftag_title:"RF4",status:"notCollected",location:"Test Cd. Örnek Mh. No: 4",collection_frequency:"87",warning:"",truck_plate_no:"07 MVS 35",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/1e63dc1d-2f12-11ec-af20-b827eb0aadac.mp4"},(r={rftag_id:18,rftag_title:"RF5",rfhash:"AFA09012018AFA4811966892",container_no:"NO1966892",latitude:"37.02969169931554",longitude:"27.442474365234375",last_event:"2021-09-10T22:05:25.000Z",create_time:"2021-09-10T22:05:28.249Z",last_statu:"R",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-09-10T22:05:28.249Z",last_truck_error_time:"2021-09-10T22:05:28.249Z",last_truck_stop_time:"2021-09-10T22:05:25.000Z",last_in_statu:"R"},o(r,"rftag_title","RF5"),o(r,"status","notCollected"),o(r,"location","Test Cd. Örnek Mh. No: 5"),o(r,"collection_frequency","44"),o(r,"warning",""),o(r,"truck_plate_no","07 MVS 36"),o(r,"video_url","http://bodrum.afatek.com.tr/cam_data/BACK/ab0dd707-2f11-11ec-af20-b827eb0aadac.mp4"),r),{rftag_id:21,rfhash:"AFA09012018AFA0611000504",container_no:"NO1000504",latitude:"37.03243247619548",longitude:"27.416381835937504",last_event:"2021-09-15T08:23:33.000Z",create_time:"2021-09-15T08:23:33.523Z",last_statu:"",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-09-15T08:23:33.523Z",last_truck_error_time:"2021-09-15T08:23:33.523Z",last_truck_stop_time:"2021-09-15T08:23:33.000Z",last_in_statu:"R",rftag_title:"RF6",status:"notCollected",location:"Test Cd. Örnek Mh. No: 6",collection_frequency:"37",warning:"",truck_plate_no:"07 MVS 33",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/523a5943-2f11-11ec-af20-b827eb0aadac.mp4"},{rftag_id:14,rfhash:"AFA09012018AFA4811900704",container_no:"NO1900704",latitude:"37.02475805169014",longitude:"27.387886047363285",last_event:"2021-09-15T08:23:28.000Z",create_time:"2021-09-01T21:39:17.240Z",last_statu:"R",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-09-01T21:39:17.240Z",last_truck_error_time:"2021-09-01T21:39:17.240Z",last_truck_stop_time:"2021-09-15T08:23:28.000Z",last_in_statu:"R",rftag_title:"RF7",status:"collected",location:"Test Cd. Örnek Mh. No: 7",collection_frequency:"63",warning:"",truck_plate_no:"07 MVS 35",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/076b2966-2f11-11ec-af20-b827eb0aadac.mp4"},{rftag_id:20,rfhash:"AFA09012018AFA4811900815",container_no:"NO1900815",latitude:"37.02338753714756",longitude:"27.41672515869141",last_event:"2021-09-15T08:23:28.000Z",create_time:"2021-09-15T08:23:28.500Z",last_statu:"R",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-09-15T08:23:28.500Z",last_truck_error_time:"2021-09-15T08:23:28.500Z",last_truck_stop_time:"2021-09-15T08:23:28.000Z",last_in_statu:"R",rftag_title:"RF8",status:"notCollected",location:"Test Cd. Örnek Mh. No: 8",collection_frequency:"67",warning:"4 gündür toplanmadı",truck_plate_no:"07 MVS 38",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/9aa3049f-2f10-11ec-af20-b827eb0aadac.mp4"},{rftag_id:12,rfhash:"AFA09012018AFA4811900797",container_no:"NO1900797",latitude:"37.02366164203408",longitude:"27.355613708496097",last_event:"2021-09-15T08:23:32.000Z",create_time:"2021-08-03T09:42:34.368Z",last_statu:"R",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-08-03T09:42:34.368Z",last_truck_error_time:"2021-08-03T09:42:34.368Z",last_truck_stop_time:"2021-09-15T08:23:32.000Z",last_in_statu:"R",rftag_title:"RF9",status:"collected",location:"Test Cd. Örnek Mh. No: 9",collection_frequency:"32",warning:"1 haftadır toplanmadı",truck_plate_no:"07 MVS 34",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/0fede2de-2f10-11ec-af20-b827eb0aadac.mp4"},{rftag_id:19,rfhash:"AFA09012018AFA4811900728",container_no:"NO1900728",latitude:"37.041613358053695",longitude:"27.482814788818363",last_event:"2021-09-13T06:32:50.000Z",create_time:"2021-09-13T06:32:51.495Z",last_statu:"R",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-09-13T06:32:51.495Z",last_truck_error_time:"2021-09-13T06:32:51.495Z",last_truck_stop_time:"2021-09-13T06:32:50.000Z",last_in_statu:"R",rftag_title:"RF10",status:"notCollected",location:"Test Cd. Örnek Mh. No: 10",collection_frequency:"95",warning:"",truck_plate_no:"07 MVS 35",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/3081a519-2f10-11ec-af20-b827eb0aadac.mp4"},{rftag_id:10,rfhash:"AFA09012018AFA4811900731",container_no:"NO1900731",latitude:"37.05476611958932",longitude:"27.400417327880863",last_event:"2021-08-03T10:51:09.000Z",create_time:"2021-08-03T08:18:26.624Z",last_statu:"G",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"truck002",last_truck_time:"2021-08-03T08:21:58.000Z",last_truck_error_time:"2021-08-04T10:11:14.000Z",last_truck_stop_time:"2021-08-03T10:51:09.000Z",last_in_statu:"R",rftag_title:"RF11",status:"collected",location:"Test Cd. Örnek Mh. No: 11",collection_frequency:"56",warning:"",truck_plate_no:"07 MVS 33",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/48be907b-2f08-11ec-af20-b827eb0aadac.mp4"},{rftag_id:17,rfhash:"AFA09012018AFA4811900854",container_no:"NO1900854",latitude:"37.0596978175324",longitude:"27.445564270019535",last_event:"2021-09-15T06:22:15.000Z",create_time:"2021-09-10T15:39:31.407Z",last_statu:"R",last_statu_time:"2021-10-02T15:06:48.951Z",last_truck:"",last_truck_time:"2021-09-10T15:39:31.407Z",last_truck_error_time:"2021-09-10T15:39:31.407Z",last_truck_stop_time:"2021-09-15T06:22:15.000Z",last_in_statu:"R",rftag_title:"RF12",status:"collected",location:"Test Cd. Örnek Mh. No: 12",collection_frequency:"27",warning:"",truck_plate_no:"07 MVS 34",video_url:"http://bodrum.afatek.com.tr/cam_data/BACK/48be907b-2f08-11ec-af20-b827eb0aadac.mp4"}],messages:function(){return[{date:(new Date).toString(),message:"NO1900765",tagId:""}]}}}}]);