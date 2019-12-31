(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){e.exports=a.p+"static/media/Koala.2b04df3e.jpg"},138:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),s=a(5),o=a(6),i=a(8),m=a(7),u=a(9),d=a(19),E=a(37),p=a(49),h=a.n(p),b=a(11),v=a.n(b),g=function(e){e?v.a.defaults.headers.common.Authorization=e:delete v.a.defaults.headers.common.Authorization},f=function(e){return console.log("setCurrentUser: ",e),{type:"SET_CURRENT_USER",payload:e}},y=function(){return function(e){localStorage.removeItem("jwtToken"),g(!1),e(f({}))}},C=a(27),O=a(33),N=a(83),w=a(58),S=a(120),j={isAuthenticated:!1,user:{},loading:!1},k={},x=Object(O.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(w.a)({},e,{isAuthenticated:!S(t.payload),user:t.payload});case"USER_LOADING":return Object(w.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),T=[N.a],D=Object(O.e)(x,{},Object(O.d)(O.a.apply(void 0,T),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"z-depth-0"},l.a.createElement("div",{className:"nav-wrapper white"},l.a.createElement(d.b,{to:"/",style:{fontFamily:"monospace"},className:"col s5 brand-logo center black-text"},l.a.createElement("i",{className:"material-icons"},"code"),"MERN"))))}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align"},l.a.createElement("h4",null,l.a.createElement("b",null,"Build")," a login/auth app with the"," ",l.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN")," stack from scratch"),l.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"Create a (minimal) full-stack app with user authentication via passport and JWTs"),l.a.createElement("br",null),l.a.createElement("div",{className:"col s6"},l.a.createElement(d.b,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Register")),l.a.createElement("div",{className:"col s6"},l.a.createElement(d.b,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large btn-flat waves-effect white black-text"},"Log In")))))}}]),t}(n.Component),L=a(26),I=a(2),_=a.n(I),B=a(159),q=a(162),M=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){t.preventDefault(),e.setState(Object(L.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2,userType:e.state.userType};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",userType:"",errors:{}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this,t=this.state.errors;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s8 offset-s2"},l.a.createElement(d.b,{to:"/",className:"btn-flat waves-effect"},l.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),l.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},l.a.createElement("h4",null,l.a.createElement("b",null,"Register")," below"),l.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",l.a.createElement(d.b,{to:"/login"},"Log in"))),l.a.createElement(B.a,{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,null,"Email address"),l.a.createElement(B.a.Control,{onChange:this.onChange,value:this.state.name,error:t.name,id:"name",type:"text",className:_()("",{invalid:t.name}),placeholder:"Enter Name"}),l.a.createElement(B.a.Text,{className:"text-muted"},t.name)),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,null,"Email address"),l.a.createElement(B.a.Control,{onChange:this.onChange,value:this.state.email,error:t.email,id:"email",type:"email",className:_()("",{invalid:t.email||t.emailnotfound}),placeholder:"Enter email"}),l.a.createElement(B.a.Text,{className:"text-muted"},"We'll never share your email with anyone else."),l.a.createElement(B.a.Text,{style:{color:"red"}},t.email)),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,null,"Password"),l.a.createElement(B.a.Control,{onChange:this.onChange,value:this.state.password,error:t.password,autoComplete:"new-password",id:"password",type:"password",className:_()("",{invalid:t.password}),placeholder:"Password"}),l.a.createElement(B.a.Text,{style:{color:"red"}},t.password)),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,null,"Password"),l.a.createElement(B.a.Control,{onChange:this.onChange,value:this.state.password2,error:t.password2,autoComplete:"Confirm-password",id:"password2",type:"password",className:_()("",{invalid:t.password2}),placeholder:"Confirm- password"})),l.a.createElement(B.a.Text,{style:{color:"red"}},t.password2),l.a.createElement("div",{className:"input-field col s12",id:"userType"},l.a.createElement("label",{htmlFor:""},"User Type:",l.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},l.a.createElement("input",{onChange:function(){e.setState({userType:"student"})},value:"student",type:"radio",className:_()("custom-control-input",{invalid:t.userType}),id:"student",name:"userType"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"student"},"Student")),l.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},l.a.createElement("input",{onChange:function(){e.setState({userType:"company"})},value:"company",type:"radio",className:_()("custom-control-input",{invalid:t.userType}),id:"company",name:"userType"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"company"},"Company"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"red-text"},t.userType)),l.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},l.a.createElement(q.a,{variant:"primary",type:"submit"},"Submit"))))))}}]),t}(n.Component),G=Object(C.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){v.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(E.f)(M)),U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},l.a.createElement("div",{className:"col s8 offset-s2"},l.a.createElement(d.b,{to:"/",className:"btn-flat waves-effect"},l.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),l.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},l.a.createElement("h4",null,l.a.createElement("b",null,"Login")," below"),l.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",l.a.createElement(d.b,{to:"/register"},"Register"))),l.a.createElement(B.a,{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement(B.a.Group,{controlId:"email"},l.a.createElement(B.a.Label,null,"Email address"),l.a.createElement(B.a.Control,{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:_()("",{invalid:e.email||e.emailnotfound}),placeholder:"Enter email"}),l.a.createElement(B.a.Text,{className:"text-muted"},"We'll never share your email with anyone else."),l.a.createElement(B.a.Text,{style:{color:"red"}},e.email,e.emailnotfound)),l.a.createElement(B.a.Group,{controlId:"password"},l.a.createElement(B.a.Label,null,"Password"),l.a.createElement(B.a.Control,{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:_()("",{invalid:e.password||e.passwordincorrect}),placeholder:"Password"})),l.a.createElement(B.a.Text,{style:{color:"red"}},e.password,e.passwordincorrect),l.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},l.a.createElement(q.a,{variant:"primary",type:"submit"},"Submit"))))))}}]),t}(n.Component),P=Object(C.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){v.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),g(a);var n=h()(a);t(f(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(U),V=a(87),F=Object(C.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(V.a)(e,["component","auth"]);return l.a.createElement(E.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?l.a.createElement(t,e):l.a.createElement(E.a,{to:"/login"})}}))}),J=a(14),H=(a(126),a(152)),W=a(153),z=a(86),K=a(155),X=a(161),Y=a(156),Q=(a(127),a(128),a(158)),Z=a(163),$=a(154),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).example=function(){a.setState({vacancies:a.props.details})},a.date=function(e){console.log("date= ",e);var t=e.split("-"),a=t[1],n=t[2].split(),l="".concat(n[0].charAt(0)).concat(n[0].charAt(1)),r=t[0];return"".concat(["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a-1]," ").concat(l,", ").concat(r)},a.state={vacancies:a.props.details,error:a.props.error},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log("Allvacancies Rendered..."),l.a.createElement("div",null,l.a.createElement(H.a,null,l.a.createElement(W.a,null,l.a.createElement(z.a,null,l.a.createElement("h3",{className:"bg-primary hh"},"Vicancies"),this.state.vacancies?this.state.vacancies.map(function(t,a){return l.a.createElement(Q.a,{defaultActiveKey:a},l.a.createElement(X.a,null,l.a.createElement(X.a.Header,null,l.a.createElement(Q.a.Toggle,{as:q.a,variant:"link",eventKey:"0"},l.a.createElement("b",null,a,"- "),t.title)),l.a.createElement(Q.a.Collapse,{eventKey:"0"},l.a.createElement(X.a.Body,{className:"card"},l.a.createElement("h4",null,t.company),l.a.createElement("h5",{className:"text-info"},"Job Description"),t.desc,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(Z.a,{overlay:l.a.createElement($.a,{id:"tooltip-disabled"},"Post On!")},l.a.createElement("span",{className:"d-inline-block"},l.a.createElement("i",{className:"fa fa-calendar-o","aria-hidden":"true",disabled:!0,style:{pointerEvents:"none"}},l.a.createElement("span",null)," ",e.date(t.date))))),l.a.createElement("td",null,l.a.createElement(Z.a,{overlay:l.a.createElement($.a,{id:"tooltip-disabled"},"Offer Salary")},l.a.createElement("span",{className:"d-inline-block"},l.a.createElement("i",{className:"fa fa-money","aria-hidden":"true",disabled:!0,style:{pointerEvents:"none"}},t.salary,l.a.createElement("span",null))))),l.a.createElement("td",null,l.a.createElement(Z.a,{overlay:l.a.createElement($.a,{id:"tooltip-disabled"},"Experince")},l.a.createElement("span",{className:"d-inline-block"},l.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true",disabled:!0,style:{pointerEvents:"none"}},t.email,l.a.createElement("span",null))))))))))))}):l.a.createElement("h4",{style:{textAlign:"center"}},"No Data Avilable")))))}}]),t}(l.a.Component),te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).Vacancies=function(){a.setState({AllVacanciesCall:!0})},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value),function(){console.log("this state",a.state)})},a.onChange=a.onChange.bind(Object(J.a)(Object(J.a)(a))),a.onSubmit=a.onSubmit.bind(Object(J.a)(Object(J.a)(a))),a.state={open:!1,AllVacanciesCall:!1,vacancies:null,isValid:"",email:a.props.details.email,education:"",cgpa:"",skills:"",experience:"",email2:"",name:a.props.details.name,id:a.props.details.id,resume:a.props.resume,jobError:null},a.togglePanel=a.togglePanel.bind(Object(J.a)(Object(J.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"togglePanel",value:function(e){this.setState({open:!this.state.open})}},{key:"componentWillMount",value:function(){console.log("WillMount",this.props.resume)}},{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/allJobs").then(function(t){var a=t.data;console.log("DidMount: ",a),e.setState({vacancies:a})}).catch(function(t){console.log(t),e.setState({jobError:t.response.data})})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.education,n=t.skills,l=t.cgpa,r=t.experience,c=t.email2;a&&n&&l&&r&&c||this.setState({isValid:"Fields are empty"});var s={education:this.state.education,skills:this.state.skills,cgpa:this.state.cgpa,name:this.state.name,id:this.state.id,email:this.state.email2,experience:this.state.experience};v.a.post("/api/student/resume",s).then(function(e){return console.log("Resume Saved...",e.data)}).catch(function(e){return console.log("Resume error: ",e.response.data)}),this.setState({resume:s,education:"",skills:"",cgpa:"",email2:"",experience:""})}},{key:"render",value:function(){return console.log("Student Dash Resume",this.props.resume),this.props.resume?this.state.AllVacanciesCall?l.a.createElement(ee,{details:this.state.vacancies,error:this.state.jobError}):l.a.createElement("div",null,l.a.createElement(H.a,null,l.a.createElement(W.a,null,l.a.createElement(z.a,null),l.a.createElement(z.a,null),l.a.createElement(z.a,null),l.a.createElement(z.a,null),l.a.createElement(z.a,null),l.a.createElement(z.a,null),l.a.createElement(z.a,null),l.a.createElement(z.a,null,l.a.createElement(q.a,{className:" bg-primary",disabled:!this.state.vacancies,onClick:this.Vacancies},"Vacancies")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H.a,null,l.a.createElement(W.a,null,l.a.createElement(z.a,{className:"ct"},l.a.createElement(K.a,{className:"borderless responsive"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Education"),l.a.createElement("th",null,"CGPA"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,this.state.name),l.a.createElement("td",null,this.props.resume.email),l.a.createElement("td",null,this.props.resume.education),l.a.createElement("td",null,this.props.resume.cgpa))))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)):0==this.props.resume?l.a.createElement(H.a,null,l.a.createElement(W.a,null,l.a.createElement(z.a,null,l.a.createElement("div",{className:"content"},this.props.children,l.a.createElement(X.a,{border:"primary"},l.a.createElement(X.a.Header,{className:"text-center bg-primary header"},"Current Semester Information"),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,null),l.a.createElement(B.a,{onSubmit:this.onSubmit},l.a.createElement(B.a.Group,{controlId:"formBasicEmail"},l.a.createElement(W.a,null,l.a.createElement(z.a,null,l.a.createElement(B.a.Control,{name:"education",placeholder:"Education",required:"required",value:this.state.education,onChange:this.onChange})),l.a.createElement(z.a,null,l.a.createElement(B.a.Control,{name:"cgpa",placeholder:"CGPA",required:"required",value:this.state.cgpa,onChange:this.onChange})))),l.a.createElement("br",null),l.a.createElement(B.a.Group,{controlId:"formBasicEmail"},l.a.createElement(W.a,null,l.a.createElement(z.a,null,l.a.createElement(B.a.Control,{name:"skills",placeholder:"Skills",required:"required",value:this.state.skills,onChange:this.onChange})),l.a.createElement(z.a,null,l.a.createElement(B.a.Control,{name:"experience",placeholder:"Experience",required:"required",value:this.state.experience,onChange:this.onChange})))),l.a.createElement("br",null),l.a.createElement(B.a.Group,{controlId:"formBasicEmail"},l.a.createElement(W.a,null,l.a.createElement(z.a,null,l.a.createElement(B.a.Control,{name:"email2",placeholder:"Email",required:"required",value:this.state.email2,onChange:this.onChange})))),l.a.createElement("br",null),l.a.createElement(q.a,{variant:"primary",type:"submit"},"Submit"),l.a.createElement("p",null,this.state.isValid)))))))):l.a.createElement("div",{style:{marginTop:"200px",textAlign:"center"}},l.a.createElement(Y.a,{animation:"grow",variant:"danger"}),l.a.createElement(Y.a,{animation:"grow",variant:"warning"}),l.a.createElement(Y.a,{animation:"grow",variant:"info"}))}}]),t}(l.a.Component),ae=a(157),ne=(a(138),a(139),a(160)),le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onDelete=a.onDelete.bind(Object(J.a)(Object(J.a)(a))),a.state={users:a.props.users,addModalShow:!1,modalDataId:null,modalDataIndex:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onDelete",value:function(e,t){var a=this;v.a.delete("/api/deleteUser",{data:{userType:"student",id:e}}).then(function(e){console.log("delete req: ",e);var n=a.state.users;n.splice(t,1),a.setState({users:n,addModalShow:!1})})}},{key:"render",value:function(){var e=this,t=this.props.users,a=function(){return e.setState({addModalShow:!1})};return l.a.createElement("div",null,l.a.createElement(H.a,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(W.a,null,l.a.createElement(z.a,{className:"text-center"},l.a.createElement("h1",null,"All Users")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H.a,null,l.a.createElement(K.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"User Type"),l.a.createElement("th",null,"Delete"))),t.map(function(t,a){return a+=1,l.a.createElement("tbody",{key:a},l.a.createElement("tr",null,l.a.createElement("td",null,a),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.userType),l.a.createElement("td",null,l.a.createElement(q.a,{variant:"danger",onClick:function(){return e.setState({modalDataId:t._id,modalDataIndex:a-1,addModalShow:!0})}},"Delete"))))}))),l.a.createElement(H.a,null,l.a.createElement(ne.a,{show:this.state.addModalShow,onHide:function(){return a()},size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(ne.a.Header,{closeButton:!0},l.a.createElement(ne.a.Title,{id:"contained-modal-title-vcenter"},"Delete")),l.a.createElement(ne.a.Body,null,l.a.createElement("p",null,"Are you sure you want to delete?")),l.a.createElement(ne.a.Footer,null,l.a.createElement(q.a,{variant:"secondary",onClick:function(){return a()}},"Close"),l.a.createElement(q.a,{variant:"danger",onClick:function(){return e.onDelete(e.state.modalDataId,e.state.modalDataIndex)}},"Delete")))))}}]),t}(l.a.Component),re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onDelete=function(e,t){console.log("onDelete..."),v.a.delete("/api/deleteUser/student",{data:{userType:"student",id:e}}).then(function(e){console.log("delete Hogya...",e);var n=a.state.students;n.splice(t,1),a.setState({students:n})}).catch(function(e){return console.log("Delete ka Error",e.message)})},a.onDelete=a.onDelete.bind(Object(J.a)(Object(J.a)(a))),a.state={students:a.props.students},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.students;return l.a.createElement("div",null,l.a.createElement(H.a,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(W.a,null,l.a.createElement(z.a,null),l.a.createElement(z.a,null,l.a.createElement("h1",null,"All Student")),l.a.createElement(z.a,null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H.a,null,l.a.createElement(K.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Education"),l.a.createElement("th",null,"GPA"),l.a.createElement("th",null,"Delete"))),t.map(function(t,a){return console.log("students: ",t._id),a+=1,l.a.createElement("tbody",{key:a},l.a.createElement("tr",null,l.a.createElement("td",null,a),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.education),l.a.createElement("td",null,t.cgpa),l.a.createElement("td",null," ",l.a.createElement(q.a,{variant:"danger",onClick:function(){return e.onDelete(t._id,a-1)}},"Delete"))))}))))}}]),t}(l.a.Component),ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={companies:a.props.companies},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.companies;return l.a.createElement("div",null,l.a.createElement(H.a,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(W.a,null,l.a.createElement(z.a,null),l.a.createElement(z.a,null,l.a.createElement("h1",null,"All Company")),l.a.createElement(z.a,null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H.a,null,l.a.createElement(K.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"No Of Jobs"),l.a.createElement("th",null,"Delete"))),e.map(function(e,t){return console.log("students: ",e._id),t+=1,l.a.createElement("tbody",{key:t},l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,"N/A"),l.a.createElement("td",null,l.a.createElement(q.a,{variant:"danger"},"Delete"))))}))))}}]),t}(l.a.Component),se=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={userClick:!1,stdClick:!1,comClick:!1,users:[],compLen:0,stdLen:0,students:[],companies:[],error:null,loading:!0,stdButton:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("api/allStudents").then(function(t){t?(console.log("Admin,,,Students Aagae",t.data),e.setState({students:t.data,stdButton:!1})):console.log("On Dashbord Comp,,,Students nhi aae jani... ")}).catch(function(e){console.log(e.message)})}},{key:"componentWillMount",value:function(){var e=this;v.a.get("api/users").then(function(t){console.log("AdminDash: Users Aagae",t.data);for(var a=0,n=0,l=e.state.companies,r=e.state.users,c=0;c<t.data.length;c++){var s=t.data[c].userType;"admin"!==s&&r.push(t.data[c]),"student"===s?n+=1:"company"===s&&(a+=1,l.push(t.data[c]))}console.log("compniesss: ",l),e.setState({users:r,compLen:a,stdLen:n,companies:l,loading:!1})}).catch(function(t){console.log(t.response.data),e.setState({loading:!1,error:t.response.data})})}},{key:"render",value:function(){var e=this;return this.state.userClick?l.a.createElement(le,{users:this.state.users}):this.state.stdClick?l.a.createElement(re,{students:this.state.students}):this.state.comClick?l.a.createElement(ce,{companies:this.state.companies}):l.a.createElement("div",{className:"center-align"},l.a.createElement(H.a,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(W.a,null,l.a.createElement(z.a,null),l.a.createElement(z.a,null,l.a.createElement("h1",null,"WellCome Admin")),l.a.createElement(z.a,null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,null,l.a.createElement(ae.a,null,l.a.createElement(X.a,null,l.a.createElement(X.a.Header,{className:"crd"},l.a.createElement(q.a,{disabled:this.state.loading,block:!0,size:"lg",onClick:function(){e.setState({userClick:!0})}},"All User")),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,{className:"ct"},l.a.createElement("i",{className:"fa fa-user","aria-hidden":"true"}),"No Of Users"),l.a.createElement(X.a.Text,{className:"text-center ctx"},this.state.loading?l.a.createElement(Y.a,{animation:"grow",variant:"primary"}):this.state.users.length))),l.a.createElement(X.a,null,l.a.createElement(X.a.Header,{className:"crd"},l.a.createElement(q.a,{disabled:this.state.stdButton,size:"lg",block:!0,onClick:function(){e.setState({stdClick:!0})}},"Students")),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,{className:"ct"},l.a.createElement("i",{className:"fa fa-graduation","aria-hidden":"true"}),"No Of Students"),l.a.createElement(X.a.Text,{className:"text-center ctx"},this.state.loading?l.a.createElement(Y.a,{animation:"grow",variant:"primary"}):this.state.stdLen))),l.a.createElement(X.a,null,l.a.createElement(X.a.Header,{className:"crd"},l.a.createElement(q.a,{disabled:this.state.loading,size:"lg",block:!0,onClick:function(){e.setState({comClick:!0})}},"Companies")),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,{className:"ct"},"No Of Companies"),l.a.createElement(X.a.Text,{className:"text-center ctx"},this.state.loading?l.a.createElement(Y.a,{animation:"grow",variant:"primary"}):this.state.compLen)))))))}}]),t}(l.a.Component),oe=(a(148),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=a.onChange.bind(Object(J.a)(Object(J.a)(a))),a.onSubmit=a.onSubmit.bind(Object(J.a)(Object(J.a)(a))),a.state={addModalShow:!1,students:[],isValid:"",stdCheck:!1,stdError:!1,title:"",company:"",salary:"",desc:"",email:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;v.a.get("api/allStudents").then(function(t){t?(console.log("Dashboard,,,Students Aagae",t.data),e.setState({students:t.data,stdCheck:!0})):console.log("On Dashbord Comp,,,Students nhi aae jani... ")}).catch(function(t){console.log(t.message),e.setState({stdError:!0})})}},{key:"onChange",value:function(e){var t=this;this.setState(Object(L.a)({},e.target.name,e.target.value),function(){console.log("this state",t.state)})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.title,l=a.company,r=a.salary,c=a.desc,s=a.email;n&&l&&r&&c&&s||this.setState({isValid:"Fields are empty"});var o={title:this.state.title,company:this.state.company,salary:this.state.salary,desc:this.state.desc,email:this.state.email};v.a.post("/api/company/addJob",o).then(function(e){console.log("Job Added...",e.data),t.setState({title:"",company:"",salary:"",desc:"",email:"",addModalShow:!1})}).catch(function(e){return console.log("resume error: ",e.message)})}},{key:"render",value:function(){var e=this;console.log("company dash",this.state.students);var t=function(){return e.setState({addModalShow:!1})};return l.a.createElement("div",null,l.a.createElement(H.a,null,l.a.createElement("br",null),l.a.createElement(W.a,null,l.a.createElement(z.a,null),l.a.createElement(z.a,null),l.a.createElement(z.a,null,l.a.createElement(q.a,{className:"bg-primary b1",onClick:function(){return e.setState({addModalShow:!0})}},"Post a Job")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H.a,null,l.a.createElement(W.a,null,l.a.createElement(z.a,null),l.a.createElement(z.a,{xs:"8"},l.a.createElement("h3",{className:"bg-primary text-center h3"},"Student Information"),!1===this.state.stdCheck&&null==this.state.stdError?l.a.createElement("h4",null,"Loading..."):1==this.state.stdError?l.a.createElement("h4",{style:{textAlign:"center"}},"SORRY, NO DATA AVAILABLE"):l.a.createElement(Q.a,{defaultActiveKey:"0"},this.state.students.map(function(e,t){return l.a.createElement(X.a,{key:t},l.a.createElement(X.a.Header,null,l.a.createElement(Q.a.Toggle,{as:q.a,variant:"link",eventKey:t},l.a.createElement("h4",null,t,"- ",e.name," "))),l.a.createElement(Q.a.Collapse,{eventKey:t},l.a.createElement(X.a.Body,{className:"card"},l.a.createElement("h5",{className:"text-primary"},"Profile"),l.a.createElement("br",null),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null," Email"),l.a.createElement("td",null,e.email)),l.a.createElement("tr",null,l.a.createElement("td",null,"Education"),l.a.createElement("td",null,e.education)),l.a.createElement("tr",null,l.a.createElement("td",null," CGPA"),l.a.createElement("td",null,e.cgpa)),l.a.createElement("tr",null,l.a.createElement("td",null," Skill"),l.a.createElement("td",null,e.skills)),l.a.createElement("tr",null,l.a.createElement("td",null,"Experience"),l.a.createElement("td",null,e.experience)))))))}))),l.a.createElement(z.a,null))),l.a.createElement("br",null),l.a.createElement(H.a,null,l.a.createElement(ne.a,{show:this.state.addModalShow,onHide:function(){return t()},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(ne.a.Header,{closeButton:!0,className:"modl"},l.a.createElement(ne.a.Title,{id:"contained-modal-title-vcenter"},l.a.createElement("h2",{className:"t1"},"   Add Description About Job "))),l.a.createElement(ne.a.Body,null,l.a.createElement(B.a,{onSubmit:this.onSubmit},l.a.createElement(B.a.Group,{controlId:"formBasicEmail"},l.a.createElement(B.a.Label,null,"Title"),l.a.createElement(B.a.Control,{type:"text",placeholder:"Title",required:"required",name:"title",value:this.state.title,onChange:this.onChange})),l.a.createElement(B.a.Group,{controlId:"formBasicEmail"},l.a.createElement(B.a.Label,null,"Company Name"),l.a.createElement(B.a.Control,{type:"text",placeholder:"Company Name",required:"required",name:"company",value:this.state.company,onChange:this.onChange})),l.a.createElement(B.a.Group,{controlId:"formBasicEmail"},l.a.createElement(B.a.Label,null,"Email"),l.a.createElement(B.a.Control,{type:"email",placeholder:"Email",required:"required",name:"email",value:this.state.email,onChange:this.onChange}),l.a.createElement(B.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(B.a.Group,{controlId:"formBasicEmail"},l.a.createElement(B.a.Label,null,"Experience Require"),l.a.createElement(B.a.Control,{type:"text",placeholder:"Expereince Require",required:"required",value:this.state.experience,onChange:this.onChange})),l.a.createElement(B.a.Group,{controlId:"formBasicEmail"},l.a.createElement(B.a.Label,null,"Salary"),l.a.createElement(B.a.Control,{type:"text",placeholder:"Offered Salary",required:"required",name:"salary",value:this.state.salary,onChange:this.onChange})),l.a.createElement(B.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(B.a.Label,null,"Description of Job"),l.a.createElement(B.a.Control,{as:"textarea",rows:"3",required:"required",name:"desc",value:this.state.desc,onChange:this.onChange})),l.a.createElement(q.a,{variant:"primary",type:"submit"},"Submit"),l.a.createElement("p",null,this.state.isValid))),l.a.createElement(ne.a.Footer,null,l.a.createElement(q.a,{variant:"danger",onClick:function(){return t()}},"Close")))))}}]),t}(l.a.Component)),ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a.studentPortal=function(e){a.setState({studentCall:!0}),console.log("PONKAAA",a.state.studentCall)},a.state={studentCall:!0,companyCall:!0,resume:null,user:{},allStudents:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"studentFunction",value:function(e){var t=this;console.log(e),v.a.post("/api/allStudents",e).then(function(e){e.data?(t.setState({resume:e.data,studentCall:!1}),console.log("On Dashboard Component: ",e.data.name)):(t.setState({resume:0}),console.log("On Dashbord Comp,,,data nhi mila"))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props.auth.user;if(console.log("Dashboard: ",e),"student"===e.userType&&this.state.studentCall){var t={id:e.id};this.studentFunction(t)}return l.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align"},l.a.createElement("h4",null,l.a.createElement("b",null,"Hey there,")," ",e.name.split(" ")[0],l.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into a full-stack"," ",l.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN")," app \ud83d\udc4f")),l.a.createElement(q.a,{variant:"primary",style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"),l.a.createElement("br",null),"admin"===e.userType?l.a.createElement(se,{details:e}):"student"===e.userType?l.a.createElement(te,{details:e,resume:this.state.resume}):"company"===e.userType?l.a.createElement(oe,{details:e}):l.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.studentPortal,className:"btn btn-large waves-effect waves-light hoverable blue "},"Student"))))}}]),t}(n.Component),me=Object(C.b)(function(e){return{auth:e.auth}},{logoutUser:y})(ie);if(localStorage.jwtToken){var ue=localStorage.jwtToken;g(ue);var de=h()(ue);D.dispatch(f(de));var Ee=Date.now()/1e3;de.exp<Ee&&(D.dispatch(y()),window.location.href="./login")}var pe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(C.a,{store:D},l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(A,null),l.a.createElement(E.b,{exact:!0,path:"/",component:R}),l.a.createElement(E.b,{exact:!0,path:"/register",component:G}),l.a.createElement(E.b,{exact:!0,path:"/login",component:P}),l.a.createElement(E.d,null,l.a.createElement(F,{exact:!0,path:"/dashboard",component:me})))))}}]),t}(n.Component);c.a.render(l.a.createElement("div",{className:"style"},l.a.createElement(pe,null)),document.getElementById("root"))},92:function(e,t,a){e.exports=a(149)}},[[92,1,2]]]);
//# sourceMappingURL=main.6e469add.chunk.js.map