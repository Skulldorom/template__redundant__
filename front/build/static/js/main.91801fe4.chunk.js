(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),o=n.n(c),i=n.p+"static/media/logo.384faaa0.svg",s=n(12),l=n.n(s),u={Check:function(){var e=!1;return"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname||(e=!0),e?"http://localhost:5000":""},Set:function(){return l.a.get(h+"/api/csrf",{withCredentials:!0}).then((function(e){return e.data["X-CSRFToken"]})).then((function(e){return e}))},Test:function(){return l.a.get(h+"/api/test",{withCredentials:!0}).then((function(e){return e}))}},h=u.Check(),d=u,j=n(98),g=n(120),b=n(121),O=n(116),f=n(118),m=n(123),x=n(119),p=n(19),v=n(117),C=n(124),w=n(114),S=n(59),k=n(2),y=a.a.createContext({currentTheme:"dark",setTheme:null}),T=function(e){var t=e.children,n=localStorage.getItem("appTheme")||"dark",r=a.a.useState(n),c=Object(p.a)(r,2),o=c[0],i=c[1],s=Object(S.a)({palette:{type:o,primary:{main:"#673ab7"},secondary:{main:"#00b0ff"}}}),l={currentTheme:o,setTheme:function(e){localStorage.setItem("appTheme",e),i(e)}};return Object(k.jsx)(y.Provider,{value:l,children:Object(k.jsx)(w.a,{theme:s,children:t})})},F=n(57),I=n.n(F),L=n(58),U=n.n(L),A=n(115);function P(){var e=a.a.useState(!0),t=Object(p.a)(e,2),n=t[0],r=t[1],c=a.a.useContext(y).setTheme,o=function(){return n?Object(k.jsx)(A.a,{children:Object(k.jsx)(I.a,{color:"primary"})}):Object(k.jsx)(A.a,{children:Object(k.jsx)(U.a,{color:"secondary"})})};return Object(k.jsx)(O.a,{row:!0,children:Object(k.jsxs)(v.a,{container:!0,direction:"row",alignItems:"center",children:[Object(k.jsx)(v.a,{item:!0,children:Object(k.jsx)(C.a,{checked:n,onChange:function(e){var t=e.target.checked;r(t),c(t?"dark":"light")},name:"ThemeSlider",color:"primary"})}),Object(k.jsx)(v.a,{item:!0,children:Object(k.jsx)(o,{})})]})})}var R=n(13),X=d.Check();function B(e){var t=e.setAuthUser;return Object(k.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return function(e,t){return l.a.post(X+"/api/auth/login",e,{withCredentials:!0}).then((function(e){R.b.success("You have been logged in, "+e.data.name),t(!0)})).catch((function(e){R.b.error("Ohh no something went wrong"),console.log(e)}))}({email:"test",password:"test"},t)},children:"Login"})}function H(){return Object(k.jsx)(f.a,{variant:"outlined",color:"primary",onClick:function(){return e={},l.a.post(X+"/api/auth/create",e,{withCredentials:!0}).then((function(e){return R.b.success(e.data.message),e})).catch((function(e){R.b.error("Ohh no something went wrong"),console.log(e)}));var e},children:"Sign Up"})}function D(e){var t=e.setAuthUser;return Object(k.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return function(e){return l.a.get(X+"/api/auth/logout",{withCredentials:!0}).then((function(t){return R.b.success(t.data.message),e(!1),localStorage.clear(),t})).catch((function(e){R.b.error("Ohh no something went wrong"),console.log(e)}))}(t)},children:"Logout"})}var E=Object(x.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var J=function(e){var t=e.isLoggedIn,n=e.setAuthUser,r=E();return Object(k.jsx)(O.a,{row:!0,className:r.root,children:t?Object(k.jsx)(D,{setAuthUser:n}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(H,{}),Object(k.jsx)(B,{setAuthUser:n})]})})},N=a.a.createContext({isLoggedIn:!1,header:"",setHeader:null,setLoggedin:null}),Y=function(e){var t=e.children,n=a.a.useState(""),r=Object(p.a)(n,2),c=r[0],o=r[1];localStorage.getItem("X-CSRFToken")||d.Set().then((function(e){o(e),localStorage.setItem("X-CSRFToken",c)})),l.a.defaults.headers.common["X-CSRFToken"]=c,localStorage.setItem("X-CSRFToken",c);var i=a.a.useState(!1),s=Object(p.a)(i,2),u=s[0],h=s[1];a.a.useEffect((function(){l.a.get(X+"/api/check",{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){R.b.error("Ohh no something went wrong"),console.log(e)})).then((function(e){h(e.status),e.sess||d.Set().then((function(e){o(e)}))}))}));var j={isLoggedIn:u,header:c,setHeader:function(e){o(e)},setLoggedin:function(e){h(e)}};return Object(k.jsx)(N.Provider,{value:j,children:t})};function M(){return Object(k.jsxs)(j.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(g.a,{color:"inherit",href:"/",children:"Skulldorom/Template"})," ",(new Date).getFullYear(),"."]})}var W=Object(x.a)((function(e){return{root:{display:"flex"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},box:{alignItems:"center",justifyContent:"center"}}}));var q=function(){var e=W(),t=a.a.useContext(N),n=t.isLoggedIn,r=t.setLoggedin;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(b.a,{maxWidth:"lg",className:e.container,children:[Object(k.jsx)(j.a,{variant:"body1",color:"primary",align:"center",children:Object(k.jsx)("img",{src:i,style:{height:"300px"},alt:"logo"})}),Object(k.jsxs)(O.a,{row:!0,children:[Object(k.jsx)(P,{}),Object(k.jsx)(J,{isLoggedIn:n,setAuthUser:r})]}),Object(k.jsx)(j.a,{variant:"body1",color:"primary",align:"center",children:Object(k.jsx)(f.a,{variant:"outlined",color:"secondary",onClick:function(){return d.Test()},children:"Test (Prints in the backend)"})}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsxs)(j.a,{variant:"h3",color:"primary",align:"center",children:["Logged in? ",String(n)]})]}),Object(k.jsx)(m.a,{pt:4,children:Object(k.jsx)(M,{})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},G=n(122);n(93);document.title="Flask React",o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(Y,{children:Object(k.jsxs)(T,{children:[Object(k.jsx)(R.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(k.jsx)(G.a,{}),Object(k.jsx)(q,{})]})})}),document.getElementById("root")),z()}},[[94,1,2]]]);
//# sourceMappingURL=main.91801fe4.chunk.js.map