(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(80)},77:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=a.n(c),s=a(7),l=a(8),i=a(11),m=a(9),u=a(12),p=a(82),d=a(84),h=a(83),f=a(81),v=a(10),E=a(6),b=a.n(E),g=a(15),y=a(16),C=a.n(y),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(e){a.props.deleteContact(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,s=this.state.showContactInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:this.onDeleteClick.bind(this,a)}),r.a.createElement(f.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}}]),t}(n.Component),O=Object(v.b)(null,{deleteContact:function(e){return function(){var t=Object(g.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e));case 3:a({type:"DELETE_CONTACT",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:"DELETE_CONTACT",payload:e});case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()}})(N),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.map(function(e){return r.a.createElement(O,{key:e.id,contact:e})}))}}]),t}(n.Component),w=Object(v.b)(function(e){return{contacts:e.contact.contacts}},{getContacts:function(){return function(){var e=Object(g.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,t({type:"GET_CONTACTS",payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(j),k=a(14),T=a(36),S=a.n(T),A=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,s=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:S()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,value:n,onChange:s}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))};A.defaultProps={type:"text"};var x=A,_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,c=t.phone;if(""!==n)if(""!==r)if(""!==c){var o={name:n,email:r,phone:c};a.props.addContact(o),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone is required"}});else a.setState({errors:{email:"Email is required"}});else a.setState({errors:{name:"Name is required"}})},a.onChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(x,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:this.onChange,error:c.name}),r.a.createElement(x,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:a,onChange:this.onChange,error:c.email}),r.a.createElement(x,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component),D=Object(v.b)(null,{addContact:function(e){return function(){var t=Object(g.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.post("https://jsonplaceholder.typicode.com/users",e);case 2:n=t.sent,a({type:"ADD_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(_),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,c=t.phone;if(""!==n)if(""!==r)if(""!==c){var o={id:a.props.match.params.id,name:n,email:r,phone:c};a.props.updateContact(o),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone is required"}});else a.setState({errors:{email:"Email is required"}});else a.setState({errors:{name:"Name is required"}})},a.onChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){var a=e.contact,n=a.name,r=a.email,c=a.phone;this.setState({name:n,email:r,phone:c})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(x,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:this.onChange,error:c.name}),r.a.createElement(x,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:a,onChange:this.onChange,error:c.email}),r.a.createElement(x,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component),L=Object(v.b)(function(e){return{contact:e.contact.contact}},{getContact:function(e){return function(){var t=Object(g.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:n=t.sent,a({type:"GET_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},updateContact:function(e){return function(){var t=Object(g.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e);case 2:n=t.sent,a({type:"UPDATE_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(P),q=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};q.defaultProps={branding:"My App"};var I=q,M=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},R=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},U=a(13),W=a(37),G=a(39),X=a(17),F={contacts:[],contact:{}},V=Object(U.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONTACTS":return Object(X.a)({},e,{contacts:t.payload});case"GET_CONTACT":return Object(X.a)({},e,{contact:t.payload});case"DELETE_CONTACT":return Object(X.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(X.a)({},e,{contacts:[t.payload].concat(Object(G.a)(e.contacts))});case"UPDATE_CONTACT":return Object(X.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}}}),B=[W.a],J=Object(U.e)(V,{},Object(U.d)(U.a.apply(void 0,B),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),H=(a(75),a(77),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{store:J},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(I,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:w}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:D}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:L}),r.a.createElement(h.a,{exact:!0,path:"/about",component:M}),r.a.createElement(h.a,{component:R}))))))}}]),t}(n.Component)),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(H,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/contactManager-Redux",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/contactManager-Redux","/service-worker.js");Q?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):$(e)})}}()}},[[40,2,1]]]);
//# sourceMappingURL=main.5d8ff08b.chunk.js.map