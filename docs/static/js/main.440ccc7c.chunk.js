(window["webpackJsonpbudget-friendly"]=window["webpackJsonpbudget-friendly"]||[]).push([[0],{65:function(e,a,t){e.exports=t.p+"static/media/logo.dc34d048.svg"},87:function(e,a,t){e.exports=t(99)},92:function(e,a,t){},93:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(92),t(93),t(137)),i=t(54),s=t(73),m=t(141),p=t(17),d=t(65),u=t.n(d);function f(){return r.a.createElement(o.a,{tokens:{childrenGap:5},verticalAlign:"space-evenly",styles:{root:{height:"100%"}},horizontalAlign:"center"},r.a.createElement(o.a,{horizontal:!0,horizontalAlign:"center",verticalAlign:"end",styles:{root:{marginTop:30}}},r.a.createElement(i.a,{src:u.a,alt:"logo",width:"20%"}),r.a.createElement("h1",{className:"app__tittle"},"budget friendly")),r.a.createElement(o.a,null,r.a.createElement(p.b,{to:"/dashboard/add"},r.a.createElement(o.a,{className:"btn__default"},r.a.createElement(s.a,{iconName:"cliplist",className:"btn__icon"}),r.a.createElement(m.a,{className:"btn__text"},"add record"))),r.a.createElement(p.b,{to:"/dashboard/activity"},r.a.createElement(o.a,{className:"btn__default"},r.a.createElement(s.a,{iconName:"chart-line",className:"btn__icon"}),r.a.createElement(m.a,{className:"btn__text"},"check activity"))),r.a.createElement(p.b,{to:"/dashboard/budget"},r.a.createElement(o.a,{className:"btn__default"},r.a.createElement(s.a,{iconName:"sliders-h",className:"btn__icon"}),r.a.createElement(m.a,{className:"btn__text"},"create budget")))))}var b=t(39),g=t(134),h=t(53),y=t(76),E=t(77),N=t(38),v=t(135),O=t(136),_=t(138),x=t(130);function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var k=Object(n.createContext)();function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function P(){var e=Object(n.useContext)(k),a=e.data,t=e.setData,l=e.objectModel,c=(e.setObjectModel,e.saveInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{verticalAlign:"center",grow:1,styles:{root:{width:"100%"}}},r.a.createElement(v.a,{label:"Source of income",defaultSelectedKey:"day",options:[{key:"job",iconProps:{iconName:"robot"},text:"Job"},{key:"side hustle",iconProps:{iconName:"palette"},text:"Side hustle"}],styles:{root:{margin:"10px 0"}},onChange:function(e,a){c("source",a.key)}}),r.a.createElement(x.a,{styles:{iconName:"robot",root:{margin:"10px 0"}},label:"Date",underlined:!0,onSelectDate:function(e){var a={completeDate:e,day:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()};c("date",a)}}),r.a.createElement(O.a,{underlined:!0,label:"Quantity",type:"number",iconProps:{iconName:"calculator"},styles:{root:{margin:"10px 0",color:"#619FB1"}},onChange:function(e){var a=e.target.value;c("quantity",a)}}),r.a.createElement(O.a,{underlined:!0,label:"Description",multiline:!0,styles:{root:{margin:"0 0 10px 0"}},onChange:function(e){var a=e.target.value;c("description",a)}}),r.a.createElement(_.a,{text:"Save",iconProps:{iconName:"save"},styles:{root:{width:"100px"}},onClick:function(){var e=a.length?a[a.length-1].id+1:1;c("id",e);var n=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(t,!0).forEach((function(a){Object(N.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},l,{id:e}),r=Object(E.a)(a).concat(n);t(r)}})))}function S(){return r.a.createElement(o.a,{verticalAlign:"center",grow:1},r.a.createElement(v.a,{label:"Type of expence",defaultSelectedKey:"day",options:[{key:"bills",iconProps:{iconName:"file-invoice-dollar",styles:{fontSize:10}},text:"Bills",styles:{iconWrapper:{fontSize:25},labelWrapper:{fontSize:14,paddingTop:0,height:15},innerField:{padding:"0 15px"},field:{padding:10}}},{key:"food-home",iconProps:{iconName:"shopping-basket"},text:"Food",styles:{iconWrapper:{fontSize:25},labelWrapper:{fontSize:14,paddingTop:0,height:15},innerField:{padding:"0 15px"},field:{padding:10}}},{key:"pet",iconProps:{iconName:"pet"},text:"Pet",styles:{iconWrapper:{fontSize:25},labelWrapper:{fontSize:14,paddingTop:0,height:15},innerField:{padding:"0 15px"},field:{padding:10}}},{key:"transport",iconProps:{iconName:"car"},text:"Transport",styles:{iconWrapper:{fontSize:25},labelWrapper:{fontSize:14,paddingTop:0,height:15},innerField:{padding:"0 15px"},field:{padding:10}}},{key:"social",iconProps:{iconName:"glass-cheers"},text:"Social",styles:{iconWrapper:{fontSize:25},labelWrapper:{fontSize:14,paddingTop:0,height:15},innerField:{padding:"0 15px"},field:{padding:10}}},{key:"health",iconProps:{iconName:"health"},text:"Health",styles:{iconWrapper:{fontSize:25},labelWrapper:{fontSize:14,paddingTop:0,height:15},innerField:{padding:"0 15px"},field:{padding:10}}}],styles:{root:{margin:"10px 0 0"},iconWrapper:{fontSize:28}},className:"choice-group"}),r.a.createElement(x.a,{styles:{iconName:"robot",root:{margin:"10px 0"}},label:"Date",underlined:!0}),r.a.createElement(O.a,{underlined:!0,label:"Quantity",className:"input",type:"number",iconProps:{iconName:"calculator"},styles:{root:{margin:"10px 0"},icon:{color:"#619FB1"}}}),r.a.createElement(O.a,{underlined:!0,label:"Description",multiline:!0,rows:3,className:"input",styles:{root:{margin:"0 0 10px 0"}}}),r.a.createElement(_.a,{text:"Save",iconProps:{iconName:"save"},styles:{root:{width:"100px"}}}))}function D(){var e=Object(n.useContext)(k).saveInput;return r.a.createElement(o.a,{horizontalAlign:"start",className:"section"},r.a.createElement(g.a,{linkSize:h.b.large,styles:{root:{marginTop:10}},onLinkClick:function(a){e("type",a.props.itemKey)}},r.a.createElement(y.a,{headerText:"Incomes",itemIcon:"piggy-bank",itemKey:"income"},r.a.createElement(P,null)),r.a.createElement(y.a,{headerText:"Expences",itemIcon:"wallet",className:"pivot__title",itemKey:"expence"},r.a.createElement(S,null))))}function z(){return r.a.createElement("p",null,"activity")}function T(){return r.a.createElement("p",null,"budget")}var A=t(131),C=t(9),F=t(25);function W(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:"btn__menu",onClick:function(){return l(!0)}},r.a.createElement(s.a,{iconName:"burger",className:"btn__icon"})),r.a.createElement(A.a,{isOpen:t,type:C.a.customNear,customWidth:"50%",onDismiss:function(){return l(!1)},onRenderHeader:function(){return r.a.createElement(o.a,{className:"btn__menu-open",onClick:function(){return l(!1)}},r.a.createElement(s.a,{iconName:"burger",className:"btn__icon"}))},onRenderBody:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/dashboard/add",onClick:function(){return l(!1)}},r.a.createElement(o.a,{className:"btn__default primary"},r.a.createElement(s.a,{iconName:"cliplist",className:"btn__icon"}),r.a.createElement(m.a,{className:"btn__text"},"add record"))),r.a.createElement(p.b,{to:"/dashboard/activity",onClick:function(){return l(!1)}},r.a.createElement(o.a,{className:"btn__default primary"},r.a.createElement(s.a,{iconName:"chart-line",className:"btn__icon"}),r.a.createElement(m.a,{className:"btn__text"},"check activity"))),r.a.createElement(p.b,{to:"/dashboard/budget",onClick:function(){return l(!1)}},r.a.createElement(o.a,{className:"btn__default primary"},r.a.createElement(s.a,{iconName:"sliders-h",className:"btn__icon"}),r.a.createElement(m.a,{className:"btn__text"},"create budget"))))},hasCloseButton:!1,isLightDismiss:!0}),r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/dashboard/Add",component:D}),r.a.createElement(F.a,{exact:!0,path:"/dashboard/activity",component:z}),r.a.createElement(F.a,{exact:!0,path:"/dashboard/budget",component:T})))}var L=t(7);var I=function(){return Object(L.v)({palette:{themePrimary:"#00849d",themeLighterAlt:"#f1fafb",themeLighter:"#c9e9ef",themeLight:"#9ed7e1",themeTertiary:"#4eb2c4",themeSecondary:"#1491a8",themeDarkAlt:"#00778d",themeDark:"#006577",themeDarker:"#004a58",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#81b5c4",neutralSecondary:"#619fb1",neutralPrimaryAlt:"#468a9e",neutralPrimary:"#004052",neutralDark:"#1a6378",black:"#0b5165",white:"#ffffff"}}),Object(L.z)({icons:{"chart-line":r.a.createElement("i",{className:"fas fa-chart-line"}),"list-alt":r.a.createElement("i",{className:"far fa-list-alt"}),"sliders-h":r.a.createElement("i",{className:"fas fa-sliders-h"}),"file-invoice-dollar":r.a.createElement("i",{className:"fas fa-file-invoice-dollar"}),burger:r.a.createElement("i",{className:"fas fa-hamburger"}),"door-open":r.a.createElement("i",{className:"fas fa-door-open"}),"door-close":r.a.createElement("i",{className:"fas fa-door-closed"}),"piggy-bank":r.a.createElement("i",{className:"fas fa-piggy-bank"}),wallet:r.a.createElement("i",{className:"fas fa-wallet"}),robot:r.a.createElement("i",{className:"fas fa-robot"}),palette:r.a.createElement("i",{className:"fas fa-palette"}),calendar:r.a.createElement("i",{className:"far fa-calendar-alt"}),calculator:r.a.createElement("i",{className:"fas fa-calculator"}),cliplist:r.a.createElement("i",{className:"fas fa-clipboard-list"}),"shopping-basket":r.a.createElement("i",{className:"fas fa-shopping-basket"}),pet:r.a.createElement("i",{className:"fas fa-paw"}),car:r.a.createElement("i",{className:"fas fa-car"}),"glass-cheers":r.a.createElement("i",{className:"fas fa-glass-cheers"}),health:r.a.createElement("i",{className:"fas fa-heartbeat"}),save:r.a.createElement("i",{className:"fas fa-save"}),up:r.a.createElement("i",{className:"fas fa-chevron-up"}),down:r.a.createElement("i",{className:"fas fa-chevron-down"})}}),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/",component:f}),r.a.createElement(F.a,{path:"/dashboard",component:W})))};c.a.render(r.a.createElement(p.a,null,r.a.createElement((function(e){var a=e.children,t=Object(n.useState)([]),l=Object(b.a)(t,2),c=l[0],o=l[1],i=Object(n.useState)({id:"",date:{completeDate:new Date,day:"",month:"",year:""},type:"income",source:"",quantity:"",description:""}),s=Object(b.a)(i,2),m=s[0],p=s[1];return r.a.createElement(k.Provider,{value:{data:c,setData:o,objectModel:m,setObjectModel:p,saveInput:function(e,a){var t=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(t,!0).forEach((function(a){Object(N.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},m,Object(N.a)({},e,a));p(t)}}},a)}),null,r.a.createElement(I,null))),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.440ccc7c.chunk.js.map