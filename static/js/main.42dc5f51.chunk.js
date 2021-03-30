(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=(n(15),n(16),n(10)),s=n(2),l=n(3),u=n(5),b=n(4),h=n(8),m=n.n(h),j=n(0),d=function(e){var t=e.title;return Object(j.jsx)("h1",{className:m.a.PageTitle,children:t})},f=n(9),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.setDefaultState=function(){return e.setState({name:"",number:""})},e.onChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),console.log("Signed up as: ".concat(e.state.name,", phonenumber is ").concat(e.state.number)),e.props.onSubmitData(e.state),e.setDefaultState()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{htmlFor:"",children:["Name",Object(j.jsx)("input",{type:"text",name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Name",required:!0,onChange:this.onChange,value:this.state.name})]})," ","Phonenumber",Object(j.jsx)("label",{htmlFor:"number",children:Object(j.jsx)("input",{type:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",placeholder:"Phone Number",required:!0,onChange:this.onChange,value:this.state.number})}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(a.Component),O=function(e){var t=e.contacts;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"ContactList"}),Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Name: ",e.name,Object(j.jsxs)("span",{children:["Phone number: ",e.number]})]})},e.id)}))})]})},x=function(e){var t=e.contacts,n=e.onChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Find Name"}),Object(j.jsx)("label",{htmlFor:""}),Object(j.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Name",value:t.filter,onChange:n})]})},v=(n(18),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-12345",name:"Daniel Defoe",number:987654321987},{id:"id-54321",name:"Jonathan Swift",number:987654321987},{id:"id-98765",name:"Robert Stevenson",number:987654321987}],filter:""},e.formSubmitHandler=function(t){var n=t.name,a=t.number,r={id:"id-".concat(Math.ceil(1e5*Math.random())),name:n,number:a};return e.setState((function(t){return{contacts:[].concat(Object(o.a)(e.state.contacts),[r])}}))},e.filterHandler=function(t){var n=t.currentTarget;e.setState({filter:n.value})},e.filteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLocaleLowerCase();return n.filter((function(e){return e.name.toLocaleLowerCase().includes(a)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{title:"HomeWork #2-Phonebook of React"}),Object(j.jsx)(p,{onSubmitData:this.formSubmitHandler}),Object(j.jsx)(x,{contacts:this.state.filter,onChange:this.filterHandler}),Object(j.jsx)(O,{contacts:this.filteredContacts()})]})}}]),n}(a.Component));i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={PageTitle:"PageTitle_PageTitle__3ruTv"}}},[[19,1,2]]]);
//# sourceMappingURL=main.42dc5f51.chunk.js.map