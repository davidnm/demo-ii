(this["webpackJsonpdemo-ii"]=this["webpackJsonpdemo-ii"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(4),r=n.n(l),o=(n(12),n(1)),i=(n(13),function(e){var t=e.name,n=void 0===t?"N/A":t,a=e.phone,l=void 0===a?"N/A":a,r=e.email,o=void 0===r?"N/A":r;return c.a.createElement("tr",null,c.a.createElement("td",null,n),c.a.createElement("td",null,l),c.a.createElement("td",null,o),c.a.createElement("td",null,c.a.createElement("span",{"aria-label":"edit",role:"img"},"\ud83d\udd8b\ufe0f")),c.a.createElement("td",null,c.a.createElement("span",{"aria-label":"delete",role:"img"},"\u274c")))}),m=(n(14),function(e){var t=e.className,n=e.listOfContacts,a=void 0===n?[]:n;return c.a.createElement("table",{className:"contact-list-base".concat(t?" ".concat(t):"")},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Phone"),c.a.createElement("th",null,"Email"),c.a.createElement("th",null,"Edit"),c.a.createElement("th",null,"Remove"))),c.a.createElement("tbody",null,a.length?a.map((function(e){return c.a.createElement(i,e)})):c.a.createElement("tr",null,"No contacts present here yet")))}),u=(n(15),n(16),function(e){var t=e.children,n=e.isActive,a=e.onClick;return c.a.createElement("div",{className:"modal".concat(n?" active":""),onClick:a},t)}),s=n(2),d=n(5),E=(n(17),{name:"",phone:"",email:""}),f=n(6),v=(n(18),function(e){var t=e.id,n=Object(f.a)(e,["id"]);return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement("label",{className:"input-label",htmlFor:t},"".concat(t,": ")),c.a.createElement("input",Object.assign({id:t,className:"input-input"},n)))}),b=Object.keys(E),h=function(e){var t=e.data,n=void 0===t?E:t,l=e.onSubmit,r=Object(a.useState)(n),i=Object(o.a)(r,2),m=i[0],u=i[1],f=function(e){u(Object(d.a)({},m,Object(s.a)({},e.target.id,e.target.value)))};return c.a.createElement("form",{onClick:function(e){return e.stopPropagation()},className:"form",onSubmit:function(e){e.preventDefault(),l(m)}},b.map((function(e){return c.a.createElement(v,{Key:e,id:e,onChange:f,value:m[e]})})),c.a.createElement(v,{type:"submit",value:"SUBMIT"}))},p=function(e){var t=e.onSubmit,n=Object(a.useState)(!1),l=Object(o.a)(n,2),r=l[0],i=l[1],m=function(){return i(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"contact-manager-add",onClick:m},"+"),c.a.createElement(u,{onClick:m,isActive:r},c.a.createElement(h,{onSubmit:t})))},g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];return c.a.createElement("div",{className:"app"},c.a.createElement(p,{onSubmit:function(e){l(n.filter((function(t){return t.name!==e.name})).concat(e))}}),c.a.createElement(m,{listOfContacts:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.e5676f6c.chunk.js.map