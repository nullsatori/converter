(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),i=(c(5),c(2)),l=c(0);function j(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(),j=Object(i.a)(a,2),o=j[0],u=j[1],b=Object(n.useState)(),p=Object(i.a)(b,2),d=p[0],h=p[1],O=Object(n.useState)(),x=Object(i.a)(O,2),m=x[0],f=x[1],v=Object(n.useState)(),g=Object(i.a)(v,2),S=g[0],N=g[1],C=Object(n.useState)(),y=Object(i.a)(C,2),_=y[0],k=y[1],w=s.a.useState(!1),F=Object(i.a)(w,2),U=F[0],q=F[1];console.log(_),console.log(S);var A=function(){return Object(l.jsx)("div",{className:"exchange exchange-active",children:Object(l.jsxs)("p",{children:[m," ",c," ",S," ",o," "]})})};return Object(n.useEffect)((function(){null!=c&&null!=o&&fetch("".concat("https://api.exchangerate.host/latest","?base=").concat(c,"&symbols=").concat(o)).then((function(e){return e.json()})).then((function(e){return k(e.rates[o])}))}),[c,o]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),d&&d.split(" ").length>=3&&d.split(" ")[0]>0&&3===d.split(" ")[1].length&&(f(d.split(" ")[0]),r(d.split(" ")[1].toUpperCase()),3===d.split(" ").length?u(d.split(" ")[2].toUpperCase()):u(d.split(" ")[3].toUpperCase()),N((function(){return(m*_).toFixed(3)})),o&&(3===o.length?q(!0):q(!1)))},className:"form__wrap",autoComplete:"off",children:Object(l.jsx)("div",{className:"form__group",children:Object(l.jsx)("div",{className:"centered",children:Object(l.jsxs)("div",{className:"group",children:[Object(l.jsx)("input",{type:"text",id:"name",required:"required",onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("label",{htmlFor:"name",children:"ask (e.g. 15 usd in rub)"}),Object(l.jsx)("div",{className:"bar"})]})})})}),Object(l.jsx)("div",{id:"container centered",children:U?Object(l.jsx)(A,{}):null})]})}var o=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"AppHeader",children:Object(l.jsx)("p",{children:"the simplest converter you ever seen"})}),Object(l.jsx)(j,{})]})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.1d315eea.chunk.js.map