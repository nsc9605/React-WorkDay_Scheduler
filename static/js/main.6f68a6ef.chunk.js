(this["webpackJsonpreact-workday_scheduler"]=this["webpackJsonpreact-workday_scheduler"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a(7),c=a.n(s),n=a(3),o=(a(5),a(2)),i=a(0);var l=function(){var e=this,t=Object(r.useState)([]),a=Object(n.a)(t,2),s=a[0],c=a[1],l=Object(r.useState)(o.DateTime.now()),u=Object(n.a)(l,1)[0],j=Object(r.useState)(),h=Object(n.a)(j,2),b=(h[0],h[1]),d=Object(r.useRef)();function m(e){var t=e.target.value;b({task:t}),localStorage.setItem(s.hour,JSON.stringify(t))}function O(e){e.preventDefault();var t=e.target.value;c(s),b({task:t}),localStorage.getItem(s.hour,JSON.stringify(t)),localStorage.setItem(s,JSON.stringify(t))}Object(r.useEffect)((function(){console.log("hello");for(var t=[],a=8;a<18;a++){t.push(o.DateTime.now().set({hour:a,minutes:0})),localStorage.getItem({i:a})===a&&e.setState({hour:a,task:[]})}c(t),console.log(u)}),[u]);var f=function(e){return u.hour===e.hour?"present":u.hour<e.hour?"past":"future"};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"jumbotron",children:[Object(i.jsx)("h1",{className:"display-3",children:"Work Day Scheduler"}),Object(i.jsx)("h2",{className:"lead",children:"A simple calendar app for scheduling your work day"}),Object(i.jsxs)("h3",{children:["Currently:"," ",u.toLocaleString(o.DateTime.DATETIME_MED_WITH_WEEKDAY)," "]})]}),s.map((function(e,t){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("form",{onSubmit:O,children:[Object(i.jsx)("label",{className:"hour",name:"hour",children:e.toLocaleString(o.DateTime.TIME_SIMPLE)}),Object(i.jsx)("input",{ref:d,className:f(e),type:"text",placeholder:"Enter Task Here",id:"time-block",onChange:m},t),Object(i.jsxs)("button",{type:"submit",className:"saveBtn",onClick:O,children:["Save",Object(i.jsx)("i",{className:"fas fa-save save"})]})]},e)})}))]})};a(6);var u=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(l,{})})};a(13);c.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))},5:function(e,t,a){},6:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.6f68a6ef.chunk.js.map