(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={PageTitle:"PageTitle_PageTitle__3ruTv"}},20:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),i=n(11),c=n.n(i),o=(n(20),n(21),n(15)),s=n(6),l=n(7),_=n(9),m=n(8),u=n(12),b=n.n(u),d=n(1),h=function(t){var e=t.title;return Object(d.jsx)("h1",{className:b.a.PageTitle,children:e})},j=n(13),p=n(3),f=n.n(p),F=function(t){Object(_.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.setDefaultState=function(){return t.setState({name:"",number:""})},t.onChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmitData(t.state),t.setDefaultState()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:f.a.Form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("div",{className:f.a["Form__input-wrap"],children:[Object(d.jsx)("label",{htmlFor:"name",className:f.a.Form__label,children:"Name:"}),Object(d.jsx)("input",{className:f.a.Form__input,type:"text",id:"name",name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Name",required:!0,onChange:this.onChange,value:this.state.name})]}),Object(d.jsxs)("div",{className:f.a["Form__input-wrap"],children:[Object(d.jsx)("label",{htmlFor:"tel",className:f.a.Form__label,children:"Phone number:"}),Object(d.jsx)("input",{className:f.a.Form__input,type:"tel",id:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",placeholder:"Phone Number",required:!0,onChange:this.onChange,value:this.state.number})]}),Object(d.jsx)("button",{className:f.a.Form__btn,type:"submit",children:"Submit"})]})}}]),n}(a.Component),C=n(4),O=n.n(C),x=n(14),v=n(0),L=function(t){var e=t.contacts,n=t.onClick;return Object(d.jsxs)("div",{className:O.a.ContactList,children:[Object(d.jsx)("h3",{className:O.a.ContactList__title,children:"Contact List"}),Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsxs)("li",{className:O.a.ContactList__item,children:[Object(d.jsx)("p",{className:O.a.ContactList__name,children:t.name}),Object(d.jsx)("p",{className:O.a.ContactList__phone,children:t.number}),Object(d.jsx)(v.b.Provider,{value:{color:"inherit",size:"1.2rem",className:"global-class-name",title:"delete"},children:Object(d.jsx)("div",{onClick:function(){return n(t.id)},children:Object(d.jsx)(x.a,{className:O.a.ContactList__icon})})})]},t.id)}))})]})},g=n(5),N=n.n(g),w=function(t){var e=t.contacts,n=t.onChange;return Object(d.jsxs)("div",{className:N.a.Filter__wrap,children:[Object(d.jsx)("h3",{className:N.a.Filter__title,children:"Search"}),Object(d.jsxs)("div",{className:N.a["Form__input-wrap"],children:[Object(d.jsx)("label",{className:N.a.Form__label,htmlFor:"filter",children:"Find Name"}),Object(d.jsx)("input",{className:N.a.Form__input,type:"text",id:"filter",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Name",value:e.filter,onChange:n})]})]})},S=(n(23),function(t){Object(_.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-12345",name:"Daniel Defoe",number:"9876541210"},{id:"id-54321",name:"Jonathan Swift",number:"9876542210"},{id:"id-98765",name:"Robert Stevenson",number:"9876543210"}],filter:""},t.contactsChecker=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r={id:"id-".concat(Math.ceil(1e5*Math.random())),name:n,number:a};t.contactsChecker(n)?alert("".concat(n," is already in contacts")):t.setState((function(e){return{contacts:[].concat(Object(o.a)(t.state.contacts),[r])}}))},t.filterHandler=function(e){var n=e.currentTarget;t.setState({filter:n.value})},t.filteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteHandler=function(e){console.log(e),t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{title:"HomeWork #2-Phonebook of React"}),Object(d.jsx)(F,{onSubmitData:this.formSubmitHandler}),Object(d.jsx)(w,{contacts:this.state.filter,onChange:this.filterHandler}),Object(d.jsx)(L,{contacts:this.filteredContacts(),onClick:this.deleteHandler})]})}}]),n}(a.Component));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={Form:"Form_Form__15u_g","Form__input-wrap":"Form_Form__input-wrap__I0lo8",Form__label:"Form_Form__label__13yXM",Form__input:"Form_Form__input__3qk1p",Form__btn:"Form_Form__btn__1GgwP"}},4:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__3sUgt",ContactList__title:"ContactList_ContactList__title__1QSgL",ContactList__item:"ContactList_ContactList__item__200rn",ContactList__name:"ContactList_ContactList__name__OGhgC",ContactList__phone:"ContactList_ContactList__phone__3ZGQS",ContactList__icon:"ContactList_ContactList__icon__qrNim"}},5:function(t,e,n){t.exports={Filter__wrap:"Filter_Filter__wrap__3b7F-",Filter__title:"Filter_Filter__title__1W9-G","Form__input-wrap":"Filter_Form__input-wrap__2Fdln Form_Form__input-wrap__I0lo8",Form__label:"Filter_Form__label__19Hbw Form_Form__label__13yXM",Form__input:"Filter_Form__input__2Gvho Form_Form__input__3qk1p"}}},[[24,1,2]]]);
//# sourceMappingURL=main.f66467b4.chunk.js.map