(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),s=n(54),i=n(190),l=n(191),j=n(192),u=n(176),d=n(174),h=n(193),b=n(196),O=n(90),x=n.n(O),g=n(177),m=n(12),f=n(175),p=n(199),v=n(171),w=n(91),C=n(2),S=r.a.createContext({currentTheme:"dark",setTheme:null}),y=function(e){var t=e.children,n=localStorage.getItem("appTheme")||"dark",a=r.a.useState(n),c=Object(m.a)(a,2),o=c[0],s=c[1],i=Object(w.a)({palette:{type:o,primary:{main:"#673ab7"},secondary:{main:"#00b0ff"}}}),l={currentTheme:o,setTheme:function(e){localStorage.setItem("appTheme",e),s(e)}};return Object(C.jsx)(S.Provider,{value:l,children:Object(C.jsx)(v.a,{theme:i,children:t})})},k=n(88),F=n.n(k),I=n(89),T=n.n(I),L=n(94);function N(){var e=r.a.useContext(S),t=e.currentTheme,n=e.setTheme,a=r.a.useState("dark"===t),c=Object(m.a)(a,2),o=c[0],s=c[1],i=function(){return o?Object(C.jsx)(L.a,{children:Object(C.jsx)(F.a,{color:"primary"})}):Object(C.jsx)(L.a,{children:Object(C.jsx)(T.a,{color:"secondary"})})};return Object(C.jsx)(d.a,{row:!0,children:Object(C.jsxs)(f.a,{container:!0,direction:"row",alignItems:"center",children:[Object(C.jsx)(f.a,{item:!0,children:Object(C.jsx)(p.a,{checked:o,onChange:function(e){var t=e.target.checked;s(t),n(t?"dark":"light")},name:"ThemeSlider",color:"primary"})}),Object(C.jsx)(f.a,{item:!0,children:Object(C.jsx)(i,{})})]})})}var A=n(178),P=n(198),R=n(179),D=n(180),q=n(181),W=n(195),B=n(183),E=n(200),U=n(182),M=n(185),X=n(188),H=n(189),J=n(184),G=n(186),Y=n(187),z=n(24),K=n.n(z),Q=n(25),V={Check:function(){var e=!1;return"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname||(e=!0),e?"http://localhost:5000":""},Set:function(){return K.a.get(Z+"/api/csrf",{withCredentials:!0}).then((function(e){return e.data["X-CSRFToken"]})).then((function(e){return e}))},Test:function(){return K.a.get(Z+"/api/test",{withCredentials:!0}).then((function(e){return e}))}},Z=V.Check(),$=V,_=$.Check();var ee=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},textfield:{marginBottom:"10px"}}}));function te(e){var t=e.setAuthUser,n=r.a.useState(!1),a=Object(m.a)(n,2),c=a[0],o=a[1],s=r.a.useState(""),i=Object(m.a)(s,2),l=i[0],j=i[1],h=r.a.useState(""),b=Object(m.a)(h,2),O=b[0],x=b[1],g=r.a.useState(!1),f=Object(m.a)(g,2),v=f[0],w=f[1],S=r.a.useState(!1),y=Object(m.a)(S,2),k=y[0],F=y[1],I=ee(),T=function(){o(!1),x("")};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(A.a,{variant:"contained",color:"primary",onClick:function(){o(!0)},children:"Login"}),Object(C.jsxs)(P.a,{open:c,onClose:T,"aria-labelledby":"Login-Form",children:[Object(C.jsx)(R.a,{id:"Login-Form",children:"Login"}),Object(C.jsxs)("form",{children:[Object(C.jsxs)(D.a,{children:[Object(C.jsx)(q.a,{children:"Sign in here!"}),Object(C.jsx)(W.a,{required:!0,className:I.textfield,label:"Email",type:"email",value:l,onInput:function(e){return j(e.target.value)},fullWidth:!0}),Object(C.jsxs)(B.a,{required:!0,fullWidth:!0,className:I.textfield,children:[Object(C.jsx)(E.a,{htmlFor:"password",children:"Password"}),Object(C.jsx)(U.a,{id:"password",type:v?"text":"password",value:O,onChange:function(e){return x(e.target.value)},endAdornment:Object(C.jsx)(M.a,{position:"end",children:Object(C.jsx)(u.a,{"aria-label":"toggle password visibility",onClick:function(){w(!v)},onMouseDown:function(e){e.preventDefault()},colour:"secondary",children:v?Object(C.jsx)(G.a,{}):Object(C.jsx)(Y.a,{})})})})]}),Object(C.jsx)(d.a,{row:!0,children:Object(C.jsx)(X.a,{control:Object(C.jsx)(p.a,{checked:k,onChange:function(e){F(e.target.checked)},name:"remember"}),label:"Remember Me"})})]}),Object(C.jsxs)(H.a,{children:[Object(C.jsx)(A.a,{onClick:T,color:"secondary",children:"Cancel"}),Object(C.jsx)(A.a,{onClick:function(e){e.preventDefault(),function(e,t){var n=e.remember;K.a.post(_+"/api/auth/login",e,{withCredentials:!0}).then((function(e){"success"===e.data.status?(Q.b.success(e.data.message),localStorage.setItem("Remember",n),t(!0)):Q.b.warning(e.data.message)})).catch((function(e){Q.b.error("Ohh no something went wrong"),console.log(e)}))}({email:l,password:O,remember:k},t)},type:"submit",color:"secondary",autoFocus:!0,children:"Sign In"})]})]})]})]})}function ne(){var e=r.a.useState(!1),t=Object(m.a)(e,2),n=t[0],a=t[1],c=r.a.useState(""),o=Object(m.a)(c,2),s=o[0],i=o[1],l=r.a.useState(""),j=Object(m.a)(l,2),d=j[0],h=j[1],b=r.a.useState(""),O=Object(m.a)(b,2),x=O[0],g=O[1],f=r.a.useState(""),p=Object(m.a)(f,2),v=p[0],w=p[1],S=r.a.useState(""),y=Object(m.a)(S,2),k=y[0],F=y[1],I=r.a.useState(""),T=Object(m.a)(I,2),L=T[0],N=T[1],X=r.a.useState(!1),z=Object(m.a)(X,2),V=z[0],Z=z[1],$=r.a.useState(""),te=Object(m.a)($,2),ne=te[0],ae=te[1],re=r.a.useState(!0),ce=Object(m.a)(re,2),oe=ce[0],se=ce[1],ie=r.a.useState(!1),le=Object(m.a)(ie,2),je=le[0],ue=le[1],de=ee(),he=function(){a(!1),se(!0),i(""),h(""),g(""),w(""),F(""),N("")},be=function(){ue(!je)},Oe=function(e){e.preventDefault()};r.a.useEffect((function(){k===L?(Z(!1),ae(""),se(!1)):(Z(!0),ae("Passwords do not match"),se(!0))}),[k,L]);return Object(C.jsxs)("div",{children:[Object(C.jsx)(A.a,{variant:"contained",color:"primary",onClick:function(){a(!0)},children:"Sign up"}),Object(C.jsxs)(P.a,{open:n,onClose:he,children:[Object(C.jsx)(R.a,{children:"Create Account"}),Object(C.jsxs)("form",{children:[Object(C.jsxs)(D.a,{children:[Object(C.jsx)(q.a,{children:"If you dont have an account, you can create one here"}),Object(C.jsx)(W.a,{className:de.textfield,required:!0,label:"Email",type:"email",value:s,onInput:function(e){return i(e.target.value)},fullWidth:!0}),Object(C.jsx)(W.a,{className:de.textfield,required:!0,label:"First Name",type:"text",onInput:function(e){return h(e.target.value)},fullWidth:!0}),Object(C.jsx)(W.a,{className:de.textfield,required:!0,label:"Last Name",value:x,onInput:function(e){return g(e.target.value)},fullWidth:!0}),Object(C.jsx)(W.a,{className:de.textfield,required:!0,label:"Phone Number",value:v,onInput:function(e){return w(e.target.value)},fullWidth:!0}),Object(C.jsxs)(B.a,{required:!0,fullWidth:!0,error:V,className:de.textfield,children:[Object(C.jsx)(E.a,{htmlFor:"password",children:"Password"}),Object(C.jsx)(U.a,{id:"password",type:je?"text":"password",value:k,onChange:function(e){return F(e.target.value)},endAdornment:Object(C.jsx)(M.a,{position:"end",children:Object(C.jsx)(u.a,{"aria-label":"toggle password visibility",onClick:be,onMouseDown:Oe,colour:"secondary",children:je?Object(C.jsx)(G.a,{}):Object(C.jsx)(Y.a,{})})})})]}),Object(C.jsxs)(B.a,{required:!0,fullWidth:!0,error:V,className:de.textfield,children:[Object(C.jsx)(E.a,{htmlFor:"Confrim-Password",children:"Confrim Password"}),Object(C.jsx)(U.a,{id:"Confrim-Password",type:je?"text":"password",value:L,onChange:function(e){return N(e.target.value)},endAdornment:Object(C.jsx)(M.a,{position:"end",children:Object(C.jsx)(u.a,{"aria-label":"toggle password visibility",onClick:be,onMouseDown:Oe,colour:"secondary",children:je?Object(C.jsx)(G.a,{}):Object(C.jsx)(Y.a,{})})})}),V?Object(C.jsx)(J.a,{children:ne}):null]})]}),Object(C.jsxs)(H.a,{children:[Object(C.jsx)(A.a,{onClick:he,color:"secondary",children:"Cancel"}),Object(C.jsx)(A.a,{onClick:function(e){var t;e.preventDefault(),t={email:s,fname:d,lname:x,password:k,telephone:v},K.a.post(_+"/api/auth/create",t,{withCredentials:!0}).then((function(e){return Q.b.success(e.data.message),e})).catch((function(e){Q.b.error("Ohh no something went wrong"),console.log(e)}))},type:"submit",color:"secondary",autoFocus:!0,disabled:oe,children:"Create Account"})]})]})]})]})}function ae(e){var t=e.setAuthUser;return Object(C.jsx)(A.a,{variant:"contained",color:"primary",onClick:function(){return function(e){return K.a.get(_+"/api/auth/logout",{withCredentials:!0}).then((function(t){return Q.b.info(t.data.message),e(!1),t})).catch((function(e){Q.b.error("Ohh no something went wrong"),console.log(e)}))}(t)},children:"Logout"})}var re=function(e){var t=e.isLoggedIn,n=e.setAuthUser,a=ee();return Object(C.jsx)(d.a,{row:!0,className:a.root,children:t?Object(C.jsx)(ae,{setAuthUser:n}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ne,{}),Object(C.jsx)(te,{setAuthUser:n})]})})},ce=r.a.createContext({isLoggedIn:!1,header:"",setHeader:null,setLoggedin:null}),oe=function(e){var t=e.children,n=r.a.useState(""),a=Object(m.a)(n,2),c=a[0],o=a[1];localStorage.getItem("X-CSRFToken")||$.Set().then((function(e){o(e),localStorage.setItem("X-CSRFToken",c)})),K.a.defaults.headers.common["X-CSRFToken"]=c,localStorage.setItem("X-CSRFToken",c);var s=r.a.useState(!1),i=Object(m.a)(s,2),l=i[0],j=i[1];r.a.useEffect((function(){K.a.get(_+"/api/check",{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){Q.b.error("Ohh no something went wrong"),console.log(e)})).then((function(e){"true"===localStorage.getItem("Remember")&&j(e.status),e.sess||$.Set().then((function(e){o(e)}))}))}));var u={isLoggedIn:l,header:c,setHeader:function(e){o(e)},setLoggedin:function(e){j(e)}};return K.a.interceptors.response.use((function(e){return e}),(function(e){if(400===e.response.status)throw $.Set().then((function(e){o(e)})),new Error("".concat(e.config.url," not found"));throw e})),Object(C.jsx)(ce.Provider,{value:u,children:t})},se=n(49),ie=n(13),le=n.p+"static/media/logo.384faaa0.svg";function je(e){var t=r.a.useContext(ce).isLoggedIn;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(s.a,{variant:"body1",color:"primary",align:"center",children:Object(C.jsx)("img",{src:le,style:{height:"300px"},alt:"logo"})}),Object(C.jsx)(s.a,{variant:"body1",color:"primary",align:"center",children:Object(C.jsx)(A.a,{variant:"outlined",color:"secondary",onClick:function(){return $.Test()},children:"Test (Prints in the backend)"})}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)(s.a,{variant:"h3",color:"primary",align:"center",children:["Logged in? ",String(t)]})]})}function ue(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)(se.b,{to:"/",children:"Home"})}),Object(C.jsx)("li",{children:Object(C.jsx)(se.b,{to:"/about",children:"About"})}),Object(C.jsx)("li",{children:Object(C.jsx)(se.b,{to:"/test",children:"Test"})})]}),Object(C.jsxs)(ie.c,{children:[Object(C.jsx)(ie.a,{exact:!0,path:"/",children:Object(C.jsx)(je,{})}),Object(C.jsx)(ie.a,{path:"/test",children:"Test"})]})]})}function de(){return Object(C.jsxs)(s.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(C.jsx)(i.a,{color:"inherit",href:"/",children:"Skulldorom/Template"})," ",(new Date).getFullYear(),"."]})}var he=Object(g.a)((function(e){return{root:{display:"flex"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},box:{alignItems:"center",justifyContent:"center"},right:{float:"right"}}}));var be=function(){var e=he(),t=r.a.useContext(ce),n=t.isLoggedIn,a=t.setLoggedin;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(l.a,{position:"static",color:"transparent",children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(C.jsx)(x.a,{})}),Object(C.jsx)(s.a,{variant:"h6",className:e.title,children:"Application Logo here"}),Object(C.jsxs)(d.a,{row:!0,className:e.right,children:[Object(C.jsx)(N,{}),Object(C.jsx)(re,{isLoggedIn:n,setAuthUser:a})]})]})}),Object(C.jsx)(h.a,{className:e.container,children:Object(C.jsx)(ue,{})}),Object(C.jsx)(b.a,{pt:4,children:Object(C.jsx)(de,{})})]})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},xe=n(194);n(139);document.title="Flask React",o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(se.a,{children:Object(C.jsx)(oe,{children:Object(C.jsxs)(y,{children:[Object(C.jsx)(Q.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(C.jsx)(xe.a,{}),Object(C.jsx)(be,{})]})})})}),document.getElementById("root")),Oe()}},[[140,1,2]]]);
//# sourceMappingURL=main.4bc310f1.chunk.js.map