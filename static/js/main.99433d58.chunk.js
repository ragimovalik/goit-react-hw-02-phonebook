(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={colors:"'../../colors.css'",bgcPrimary:"#e0e8e5",darkened:"#597387",text:"#252b31",Form__wrap:"InputBox_Form__wrap__1sjXE",Form__label:"InputBox_Form__label__vHWkv",Form__input:"InputBox_Form__input__loOFW"}},12:function(t,e,n){t.exports={ContactList__item:"ContactListItem_ContactList__item__15mzm",ContactList__name:"ContactListItem_ContactList__name__3rA-t",ContactList__phone:"ContactListItem_ContactList__phone__7xZ74",ContactList__icon:"ContactListItem_ContactList__icon__37i8k"}},13:function(t,e,n){t.exports={colors:"'../../colors.css'",bgcPrimary:"#e0e8e5",text:"#252b31",lightened:"#f6fafb",red:"#ff0000",ContactList:"ContactList_ContactList__3sUgt",ContactList__title:"ContactList_ContactList__title__1QSgL",ContactList__item:"ContactList_ContactList__item__200rn"}},16:function(t,e,n){t.exports={colors:"'../../colors.css'",bgcPrimary:"#e0e8e5",darkened:"#597387",text:"#252b31",white:"#ffffff",Form:"Form_Form__15u_g",Form__btn:"Form_Form__btn__1GgwP"}},17:function(t,e,n){t.exports={Filter__wrap:"Filter_Filter__wrap__3b7F-",Filter__title:"Filter_Filter__title__1W9-G"}},27:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(18),i=n.n(c),o=(n(27),n(28),n(8)),s=n(6),l=n(4),m=n(10),u=n(9),_=n(22),b=n(2),d=Object(_.a)({PageTitle:{marginBottom:20,padding:10,textAlign:"center",color:"#252b31"}}),h=function(t){var e=t.title,n=d();return Object(b.jsx)("h1",{className:n.PageTitle,children:e})},j=n(20),f=n(11),p=n.n(f),x=function(t){var e=t.htmlFor,n=t.type,a=t.id,r=t.name,c=t.title,i=t.pattern,o=t.placeholder,s=t.required,l=t.value,m=t.labelText,u=t.onChange;return Object(b.jsxs)("div",{className:p.a.Form__wrap,children:[Object(b.jsx)("label",{htmlFor:e,className:p.a.Form__label,children:Object(b.jsx)("span",{children:m})}),Object(b.jsx)("input",{className:p.a.Form__input,type:n,id:a,name:r,title:c,pattern:"".concat("text"===i?"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$":"^[+]{0,1}[ .()0-9-]{3,8}[0-9. -]{3,11}$"),placeholder:o,required:s,onChange:u,value:l})]})};x.defaultProps={title:"Please enter some text",required:!0,labelText:"Label for --\x3e"};var C=x,O=n(16),F=n.n(O),v=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.setDefaultState=function(){return t.setState({name:"",number:""})},t.onChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmitData(t.state),t.setDefaultState()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:F.a.Form,onSubmit:this.handleSubmit,children:[Object(b.jsx)(C,{labelText:"Name",htmlFor:"name",type:"text",id:"name",name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",pattern:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:this.onChange}),Object(b.jsx)(C,{labelText:"Phone number",htmlFor:"tel",type:"tel",id:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u0442\u043e\u0447\u043a\u0438, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",pattern:"phone",placeholder:"Phone Number",required:!0,value:this.state.number,onChange:this.onChange}),Object(b.jsx)("button",{className:F.a.Form__btn,type:"submit",children:"Submit"})]})}}]),n}(a.Component),L=n(12),g=n.n(L),w=n(21),N=n(0),S=function(t){var e=t.name,n=t.number,a=t.id,r=t.onClick;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:g.a.ContactList__name,children:e}),Object(b.jsx)("p",{className:g.a.ContactList__phone,children:n}),Object(b.jsx)(N.b.Provider,{value:{color:"inherit",size:"1.2rem",className:"global-class-name",title:"delete"},children:Object(b.jsx)("div",{onClick:function(){return r(a)},children:Object(b.jsx)(w.a,{className:g.a.ContactList__icon})})})]})},k=n(13),y=n.n(k),P=function(t){var e=t.contacts,n=t.onClick;return Object(b.jsxs)("div",{className:y.a.ContactList,children:[Object(b.jsx)("h3",{className:y.a.ContactList__title,children:"Contact List"}),Object(b.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(b.jsx)("li",{className:y.a.ContactList__item,children:Object(b.jsx)(S,{id:e,name:a,number:r,onClick:n})},e)}))})]})},A=n(17),H=n.n(A),I=function(t){var e=t.textForFilter,n=t.onChange;return Object(b.jsxs)("div",{className:H.a.Filter__wrap,children:[Object(b.jsx)("h3",{className:H.a.Filter__title,children:"Search"}),Object(b.jsx)(C,{labelText:"Find Name",htmlFor:"filter",type:"text",id:"filter",name:"filter",pattern:"text",placeholder:"Name",required:!1,value:e,onChange:n})]})},T=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-12345",name:"Daniel Defoe",number:"987-6541210"},{id:"id-54321",name:"Jonathan Swift",number:"987-6542210"},{id:"id-98765",name:"Robert Stevenson",number:"987-6543210"},{id:"id-56789",name:"Lewis Carroll",number:"987-6544210"}],filter:""},t.contactsChecker=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r={id:"id-".concat(Math.ceil(1e5*Math.random())),name:n,number:a};t.contactsChecker(n)?alert("".concat(n," is already in contacts")):t.setState((function(e){return{contacts:[].concat(Object(o.a)(t.state.contacts),[r])}}))},t.filterHandler=function(e){var n=e.currentTarget;t.setState({filter:n.value})},t.filteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteHandler=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{title:"HomeWork #2-Phonebook of React"}),Object(b.jsx)(v,{onSubmitData:this.formSubmitHandler}),Object(b.jsx)(I,{textForFilter:this.state.filter,onChange:this.filterHandler}),Object(b.jsx)(P,{contacts:this.filteredContacts(),onClick:this.deleteHandler})]})}}]),n}(a.Component);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.99433d58.chunk.js.map