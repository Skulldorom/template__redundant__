(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=n.p+"static/media/logo.384faaa0.svg",s=n(18),l=n.n(s),u={Check:function(){var e=!1;return"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname||(e=!0),e?"http://localhost:5000":""},Set:function(){return l.a.get(j+"/api/csrf",{withCredentials:!0}).then((function(e){return e.data["X-CSRFToken"]})).then((function(e){return e}))},Test:function(){return l.a.get(j+"/api/test",{withCredentials:!0}).then((function(e){return e}))}},j=u.Check(),h=u,d=n(59),b=n(167),g=n(168),O=n(169),f=n(160),x=n(158),m=n(170),p=n(161),v=n(173),C=n(81),S=n.n(C),w=n(166),y=n(12),k=n(159),I=n(176),T=n(155),F=n(82),L=n(4),P=r.a.createContext({currentTheme:"dark",setTheme:null}),q=function(e){var t=e.children,n=localStorage.getItem("appTheme")||"dark",a=r.a.useState(n),c=Object(y.a)(a,2),o=c[0],i=c[1],s=Object(F.a)({palette:{type:o,primary:{main:"#673ab7"},secondary:{main:"#00b0ff"}}}),l={currentTheme:o,setTheme:function(e){localStorage.setItem("appTheme",e),i(e)}};return Object(L.jsx)(P.Provider,{value:l,children:Object(L.jsx)(T.a,{theme:s,children:t})})},A=n(79),N=n.n(A),W=n(80),R=n.n(W),B=n(85);function E(){var e=r.a.useState(!0),t=Object(y.a)(e,2),n=t[0],a=t[1],c=r.a.useContext(P).setTheme,o=function(){return n?Object(L.jsx)(B.a,{children:Object(L.jsx)(N.a,{color:"primary"})}):Object(L.jsx)(B.a,{children:Object(L.jsx)(R.a,{color:"secondary"})})};return Object(L.jsx)(x.a,{row:!0,children:Object(L.jsxs)(k.a,{container:!0,direction:"row",alignItems:"center",children:[Object(L.jsx)(k.a,{item:!0,children:Object(L.jsx)(I.a,{checked:n,onChange:function(e){var t=e.target.checked;a(t),c(t?"dark":"light")},name:"ThemeSlider",color:"primary"})}),Object(L.jsx)(k.a,{item:!0,children:Object(L.jsx)(o,{})})]})})}var U=n(175),X=n(162),D=n(163),H=n(164),J=n(172),Y=n(165),G=n(23),M=h.Check();function z(e){var t=e.setAuthUser,n=r.a.useState(!1),a=Object(y.a)(n,2),c=a[0],o=a[1],i=r.a.useState(""),s=Object(y.a)(i,2),u=s[0],j=s[1],h=r.a.useState(""),d=Object(y.a)(h,2),b=d[0],g=d[1],O=function(){o(!1),g("")};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){o(!0)},children:"Login"}),Object(L.jsxs)(U.a,{open:c,onClose:O,"aria-labelledby":"Login-Form",children:[Object(L.jsx)(X.a,{id:"Login-Form",children:"Login"}),Object(L.jsxs)("form",{children:[Object(L.jsxs)(D.a,{children:[Object(L.jsx)(H.a,{children:"Sign in here!"}),Object(L.jsx)(J.a,{required:!0,label:"Email",type:"email",value:u,onInput:function(e){return j(e.target.value)},fullWidth:!0}),Object(L.jsx)(J.a,{required:!0,label:"Password",type:"password",value:b,onInput:function(e){return g(e.target.value)},fullWidth:!0})]}),Object(L.jsxs)(Y.a,{children:[Object(L.jsx)(p.a,{onClick:O,color:"secondary",children:"Cancel"}),Object(L.jsx)(p.a,{onClick:function(e){e.preventDefault(),function(e,t){l.a.post(M+"/api/auth/login",e,{withCredentials:!0}).then((function(e){G.b.success("You have been logged in, "+e.data.name),t(!0)})).catch((function(e){G.b.error("Ohh no something went wrong"),console.log(e)}))}({email:u,password:b},t)},type:"submit",color:"secondary",autoFocus:!0,children:"Sign In"})]})]})]})]})}function K(){var e=r.a.useState(!1),t=Object(y.a)(e,2),n=t[0],a=t[1],c=r.a.useState(""),o=Object(y.a)(c,2),i=o[0],s=o[1],u=r.a.useState(""),j=Object(y.a)(u,2),h=j[0],d=j[1],b=r.a.useState(""),g=Object(y.a)(b,2),O=g[0],f=g[1],x=r.a.useState(""),m=Object(y.a)(x,2),v=m[0],C=m[1],S=r.a.useState(""),w=Object(y.a)(S,2),k=w[0],I=w[1],T=r.a.useState(""),F=Object(y.a)(T,2),P=F[0],q=F[1],A=r.a.useState(!1),N=Object(y.a)(A,2),W=N[0],R=N[1],B=r.a.useState(""),E=Object(y.a)(B,2),z=E[0],K=E[1],Q=r.a.useState(!0),V=Object(y.a)(Q,2),Z=V[0],$=V[1],_=function(){a(!1),$(!0),s(""),d(""),f(""),C(""),I(""),q("")};r.a.useEffect((function(){k===P&&""!==k?(R(!1),K(""),$(!1)):(R(!0),K("Passwords do not match"),$(!0))}),[k,P]);return Object(L.jsxs)("div",{children:[Object(L.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){a(!0)},children:"Sign up"}),Object(L.jsxs)(U.a,{open:n,onClose:_,children:[Object(L.jsx)(X.a,{children:"Create Account"}),Object(L.jsxs)("form",{children:[Object(L.jsxs)(D.a,{children:[Object(L.jsx)(H.a,{children:"If you dont have an account, you can create one here"}),Object(L.jsx)(J.a,{required:!0,label:"Email",type:"email",value:i,onInput:function(e){return s(e.target.value)},fullWidth:!0}),Object(L.jsx)(J.a,{required:!0,label:"First Name",type:"text",onInput:function(e){return d(e.target.value)},fullWidth:!0}),Object(L.jsx)(J.a,{required:!0,label:"Last Name",value:O,onInput:function(e){return f(e.target.value)},fullWidth:!0}),Object(L.jsx)(J.a,{required:!0,label:"Phone Number",value:v,onInput:function(e){return C(e.target.value)},fullWidth:!0}),Object(L.jsx)(J.a,{required:!0,label:"Password",type:"password",value:k,onInput:function(e){return I(e.target.value)},fullWidth:!0,error:W}),Object(L.jsx)(J.a,{required:!0,label:"Confrim Password",type:"password",value:P,onInput:function(e){return q(e.target.value)},fullWidth:!0,error:W,helperText:z})]}),Object(L.jsxs)(Y.a,{children:[Object(L.jsx)(p.a,{onClick:_,color:"secondary",children:"Cancel"}),Object(L.jsx)(p.a,{onClick:function(e){var t;e.preventDefault(),t={email:i,fname:h,lname:O,password:k,telephone:v},l.a.post(M+"/api/auth/create",t,{withCredentials:!0}).then((function(e){return G.b.success(e.data.message),e})).catch((function(e){G.b.error("Ohh no something went wrong"),console.log(e)}))},type:"submit",color:"secondary",autoFocus:!0,disabled:Z,children:"Create Account"})]})]})]})]})}function Q(e){var t=e.setAuthUser;return Object(L.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){return function(e){return l.a.get(M+"/api/auth/logout",{withCredentials:!0}).then((function(t){return G.b.success(t.data.message),e(!1),localStorage.clear(),t})).catch((function(e){G.b.error("Ohh no something went wrong"),console.log(e)}))}(t)},children:"Logout"})}var V=Object(w.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var Z=function(e){var t=e.isLoggedIn,n=e.setAuthUser,a=V();return Object(L.jsx)(x.a,{row:!0,className:a.root,children:t?Object(L.jsx)(Q,{setAuthUser:n}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(K,{}),Object(L.jsx)(z,{setAuthUser:n})]})})},$=r.a.createContext({isLoggedIn:!1,header:"",setHeader:null,setLoggedin:null}),_=function(e){var t=e.children,n=r.a.useState(""),a=Object(y.a)(n,2),c=a[0],o=a[1];localStorage.getItem("X-CSRFToken")||h.Set().then((function(e){o(e),localStorage.setItem("X-CSRFToken",c)})),l.a.defaults.headers.common["X-CSRFToken"]=c,localStorage.setItem("X-CSRFToken",c);var i=r.a.useState(!1),s=Object(y.a)(i,2),u=s[0],j=s[1];r.a.useEffect((function(){l.a.get(M+"/api/check",{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){G.b.error("Ohh no something went wrong"),console.log(e)})).then((function(e){j(e.status),e.sess||h.Set().then((function(e){o(e)}))}))}));var d={isLoggedIn:u,header:c,setHeader:function(e){o(e)},setLoggedin:function(e){j(e)}};return l.a.interceptors.response.use((function(e){return e}),(function(e){if(400===e.response.status)throw h.Set().then((function(e){o(e)})),new Error("".concat(e.config.url," not found"));throw e})),Object(L.jsx)($.Provider,{value:d,children:t})};function ee(){return Object(L.jsxs)(d.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(L.jsx)(b.a,{color:"inherit",href:"/",children:"Skulldorom/Template"})," ",(new Date).getFullYear(),"."]})}var te=Object(w.a)((function(e){return{root:{display:"flex"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},box:{alignItems:"center",justifyContent:"center"},right:{float:"right"}}}));var ne=function(){var e=te(),t=r.a.useContext($),n=t.isLoggedIn,a=t.setLoggedin;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(g.a,{position:"static",color:"transparent",children:Object(L.jsxs)(O.a,{children:[Object(L.jsx)(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(L.jsx)(S.a,{})}),Object(L.jsx)(d.a,{variant:"h6",className:e.title,children:"Template"}),Object(L.jsxs)(x.a,{row:!0,className:e.right,children:[Object(L.jsx)(E,{}),Object(L.jsx)(Z,{isLoggedIn:n,setAuthUser:a})]})]})}),Object(L.jsxs)(m.a,{className:e.container,children:[Object(L.jsx)(d.a,{variant:"body1",color:"primary",align:"center",children:Object(L.jsx)("img",{src:i,style:{height:"300px"},alt:"logo"})}),Object(L.jsx)(d.a,{variant:"body1",color:"primary",align:"center",children:Object(L.jsx)(p.a,{variant:"outlined",color:"secondary",onClick:function(){return h.Test()},children:"Test (Prints in the backend)"})}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),Object(L.jsxs)(d.a,{variant:"h3",color:"primary",align:"center",children:["Logged in? ",String(n)]})]}),Object(L.jsx)(v.a,{pt:4,children:Object(L.jsx)(ee,{})})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},re=n(171);n(124);document.title="Flask React",o.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(_,{children:Object(L.jsxs)(q,{children:[Object(L.jsx)(G.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(L.jsx)(re.a,{}),Object(L.jsx)(ne,{})]})})}),document.getElementById("root")),ae()}},[[125,1,2]]]);
//# sourceMappingURL=main.047cb654.chunk.js.map