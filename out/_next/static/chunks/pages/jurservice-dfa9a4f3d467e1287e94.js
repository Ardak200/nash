(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{1403:function(e,t,s){"use strict";s(5893)},1729:function(e,t,s){"use strict";s.d(t,{m:function(){return a}});var a=[{value:"1",name:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"},{value:"2",name:"\u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c"},{value:"3",name:"\u0423\u043f\u043e\u043b\u043d\u043e\u043c\u043e\u0447\u0435\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e"},{value:"4",name:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c \u043f\u043e \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},{value:"5",name:"\u042e\u0440\u0438\u0441\u0442"}]},6706:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return T}});var a=s(5893),n=s(6156),r=s(9669),i=s.n(r),o=s(7294),c=s(1131),l=s(741),p=s(1729),u=s(6808),d=s.n(u),m=s(5611),f=s(7513),h=s(4494),j=s(3899),g=s(1163),v=s(2089),x=s(1824),N=s(6737),y=s.n(N),b=(s(1403),s(6072)),_=s(5614);function w(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function O(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?w(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var k=function(e){var t=e.setLoading,s=(0,m.e1)().addToast,r=(0,h.I0)(),u=(0,o.useState)({email:"",phone:"",fio:"",password:"",type:"\u042e\u0440 \u043b\u0438\u0446\u043e",position:"1"}),v=u[0],N=u[1],w=(0,o.useState)({email:"",phone:"",fio:"",password:""}),k=(w[0],w[1],(0,o.useState)("")),E=k[0],S=k[1],Z=(0,o.useState)(""),P=Z[0],C=Z[1],T=(0,o.useState)({value:"",type:!1,loading:!1}),D=T[0],z=T[1],I=(0,o.useState)(!1),L=I[0],R=I[1];(0,o.useEffect)((function(){document.querySelector(".form_register").scrollIntoView({block:"center",behavior:"smooth"})}),[]);(0,o.useEffect)((function(){var e=P?P.replace(/ /g,""):"";12===e.length?(z(O(O({},D),{},{type:!0,value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",loading:!0})),i().get("https://api.money-men.kz/api/testKompra?bin=".concat(e),{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){0===e.data.content.length?setTimeout((function(){z({value:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0411\u0418\u041d",type:!1,loading:!1})}),1e3):z({value:e.data.content[0].name,type:!0,loading:!1})})).catch((function(e){console.log(e),e.response,z({value:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0411\u0418\u041d",type:!1,loading:!1})}))):z({value:"",type:!1,loading:!1})}),[P]);var A=(0,o.useState)(""),U=A[0],K=A[1],V=function(e){(0,x.p)(e.iin)||y()("Oops!","\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0443\u0441\u043b\u0443\u0433\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438\u0446\u0430\u043c \u0434\u043e\u0441\u0442\u0438\u0433\u0448\u0438\u0435 18 \u043b\u0435\u0442.","info"),!1===D.type&&12!==P.length&&z({value:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0411\u0418\u041d",type:!1}),!0===D.type&&D.value&&(console.log(e),t(!0),N(e),i().get("".concat("https://crediter.kz/api","/identification"),{params:{fio:e.fio,phone:(0,l.Kp)(e.phone),email:e.email,password:e.password,type:e.type,iin:P,source:"nashcompany.kz"}}).then((function(e){t(!1),e.data.success&&R(!0),e.data.success||s(e.data.message,{appearance:"error",autoDismiss:!0})})).catch((function(e){t(!1),e.response&&s(e.response.status,{appearance:"error",autoDismiss:!0})})))};return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"form_register",children:[(0,a.jsx)(f.J9,{initialValues:{email:"",position:"1",phone:"",fio:"",password:"",type:"\u042e\u0440 \u043b\u0438\u0446\u043e",iin:""},onSubmit:function(e){V(e)},children:function(e){var t,s=e.errors,r=e.touched;return(0,a.jsxs)(f.l0,{children:[(0,a.jsx)(f.gN,{name:"iin",className:"form-control",placeholder:"\u0411\u0418\u041d",type:"tel",component:_.Z,onChange:function(e){return function(e){var t=e.target.value;t&&t.replace(/ /g,""),C(e.target.value)}(e)},value:P}),(0,a.jsx)(f.gN,{type:"text",disabled:!0,className:!1===D.type&&D.value&&"disabled_error text-danger",value:D.value,name:"companyName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"})," ",(0,a.jsx)(f.gN,{as:"select",type:"text",name:"position",validate:j.C1,placeholder:"\u0417\u0430\u043d\u0438\u043c\u0430\u0435\u043c\u0430\u044f \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autocomplete:"off",children:p.m.map((function(e){return(0,a.jsx)("option",{value:e.value,children:e.name})}))}),s.position&&r.position?(0,a.jsx)("p",{className:"text-danger",children:s.position}):(0,a.jsx)("p",{className:""}),(0,a.jsx)(f.gN,{type:"text",name:"fio",validate:j.X4,placeholder:"\u0424\u0418\u041e",className:"capitalize",autocomplete:"off"})," ",s.fio&&r.fio?(0,a.jsx)("p",{className:"text-danger",children:s.fio}):(0,a.jsx)("p",{className:""}),(0,a.jsx)(f.gN,{name:"phone",className:"form-control",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440",type:"tel",validate:j.k8,component:b.Z}),s.phone&&r.phone?(0,a.jsx)("p",{className:"text-danger",children:s.phone}):(0,a.jsx)("p",{className:""}),(0,a.jsx)(f.gN,{type:"text",name:"email",validate:j.s$,placeholder:"Email",autocomplete:"off"})," ",s.email&&r.email?(0,a.jsx)("p",{className:"text-danger",children:s.email}):(0,a.jsx)("p",{className:""}),(0,a.jsx)(f.gN,{type:"password",name:"password",validate:j.l1,placeholder:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",autocomplete:"off"})," ",s.password&&r.password?(0,a.jsx)("p",{className:"text-danger",children:s.password}):(0,a.jsx)("p",{className:""}),(0,a.jsxs)("div",{className:"firststep_banner",children:[(0,a.jsx)("div",{className:"firststep_banner--img",children:(0,a.jsx)("img",{alt:"image",className:"firststep",src:"/img/form/firststep.svg"})}),(0,a.jsxs)("div",{className:"firststep_banner--button",children:[(0,a.jsx)("input",(t={className:"singlebtn",type:"submit"},(0,n.Z)(t,"className","button"),(0,n.Z)(t,"onClick",(function(){return(0,l.Iw)()})),(0,n.Z)(t,"value","\u0425\u043e\u0447\u0443 \u0441\u043a\u0438\u0434\u043a\u0438"),t)),(0,a.jsxs)("b",{children:["\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433",(0,a.jsx)("br",{}),"\u0434\u0430\u0441\u0442 50% \u0441\u043a\u0438\u0434\u043a\u0438"]})]})]})]})}}),(0,a.jsx)(c.Z,{isModalOpen:L,closeModal:function(){R(!1)},code:U,setCode:K,onFirstStep:function(e){t(!0);var a={fio:v.fio,phone:(0,l.Kp)(v.phone),email:v.email,password:v.password,type:v.type,code:e,iin:P,companyName:D.value,source:d().get("utm_source")+"_1"||0};void 0!==d().get("utm_source")&&(a.utm_source=d().get("utm_source")+"_1",a.click_id=d().get("click_id")),i().get("".concat("https://crediter.kz/api","/stepOne"),{params:a}).then((function(e){t(!1),e.data.success&&(d().set("token",e.data.token,{expires:1e3}),d().set("lead_id",e.data.id),d().set("stepjur",2),g.default.push("/jurservice?step=2"),r({type:"AUTHENTICATING_USER"}),i().post("".concat("https://crediter.kz/api","/getData"),{token:e.data.token}).then((function(e){e.data.success&&r({type:"SET_CURRENT_USER",payload:e.data})}))),e.data.success||(S(e.data.message),s(finalErr,{appearance:"error",autoDismiss:!0}))}))},error:E,getIdentification:V})]})})},E=function(e){var t=e.setLoading;return(0,a.jsx)(m.VW,{children:(0,a.jsx)(k,{setLoading:t})})},S=s(1466),Z=s(9956),P=s(9008),C=s(2465),T=function(){var e=(0,g.useRouter)(),t=e.query.step,s=(0,o.useState)(!1),n=s[0],r=s[1],i=(0,o.useState)(""),c=i[0],l=i[1];return(0,o.useEffect)((function(){l(d().get("stepjur"))}),[d().get("stepjur")]),(0,o.useEffect)((function(){d().get("stepjur")||e.push("/jurservice"),"2"===d().get("stepjur")&&e.push("/jurservice?step=2"),"3"===d().get("stepjur")&&e.push("/jurservice?step=3")}),[]),(0,a.jsxs)("div",{className:"getservice",children:[n&&(0,a.jsx)(v.Z,{}),(0,a.jsx)(P.default,{children:(0,a.jsx)("title",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443 | \u042e\u0440. \u043b\u0438\u0446\u043e"})}),(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)(Z.Z,{}),(0,a.jsx)("div",{className:"bg"})]}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"form_headings",children:[(0,a.jsx)("b",{children:"\u0423\u0441\u043b\u0443\u0433\u0438 \u044e\u0440. \u043b\u0438\u0446\u0430\u043c"}),(0,a.jsxs)("h2",{children:["\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",(0,a.jsx)("br",{}),"\u0443\u0441\u043b\u0443\u0433\u0443:"]})]}),(0,a.jsxs)("div",{className:"form_service ",children:[(0,a.jsx)("div",{className:"form_header",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:void 0===c?"active":"",children:"1 \u0428\u0430\u0433"}),(0,a.jsx)("li",{className:"2"===c&&"2"===t&&"active",children:"2 \u0428\u0430\u0433"}),(0,a.jsx)("li",{className:"3"===c&&"3"===t&&"active",children:"3 \u0428\u0430\u0433"})]})}),void 0===d().get("stepjur")&&(0,a.jsx)(E,{setLoading:r}),"2"===d().get("stepjur")&&"2"===t&&(0,a.jsx)(S.Z,{setLoading:r}),"3"===d().get("stepjur")&&"3"===t&&(0,a.jsx)(C.Z,{setLoading:r})]})]})]})}},5804:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jurservice",function(){return s(6706)}])}},function(e){e.O(0,[774,663,597,669,356,57,737,657,611,733,956,502,902,306],(function(){return t=5804,e(e.s=t);var t}));var t=e.O();_N_E=t}]);