(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=n(22),s=n(12),l=n.n(s),u={Check:function(){var e=!1;return"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname||(e=!0),e?"http://localhost:5000":""},Set:function(){return l.a.get(h+"/api/csrf",{withCredentials:!0}).then((function(e){return e.data["X-CSRFToken"]})).then((function(e){return e}))},Test:function(){return l.a.get(h+"/api/test",{withCredentials:!0}).then((function(e){return e}))}},h=u.Check(),d=u;function j(){if(localStorage.getItem("X-CSRFToken")){var e=localStorage.getItem("X-CSRFToken");return l.a.defaults.headers.common["X-CSRFToken"]=e,{"X-CSRFToken":e}}return d.Set().then((function(e){return localStorage.setItem("X-CSRFToken",e),l.a.defaults.headers.common["X-CSRFToken"]=e,{"X-CSRFToken":e}}))}var g=a.a.createContext({isLoggedIn:!1,header:""}),b=n(13),m=d.Check();var O=n.p+"static/media/logo.384faaa0.svg",f=n(98),x=n(120),p=n(121),v=n(116),C=n(118),k=n(123),w=n(119),S=n(117),T=n(124),y=n(114),F=n(59),I=n(2),L=a.a.createContext({currentTheme:"dark",setTheme:null}),R=function(e){var t=e.children,n=localStorage.getItem("appTheme")||"dark",r=a.a.useState(n),o=Object(i.a)(r,2),c=o[0],s=o[1],l=Object(F.a)({palette:{type:c,primary:{main:"#673ab7"},secondary:{main:"#00b0ff"}}}),u={currentTheme:c,setTheme:function(e){localStorage.setItem("appTheme",e),s(e)}};return Object(I.jsx)(L.Provider,{value:u,children:Object(I.jsx)(y.a,{theme:l,children:t})})},X=n(57),U=n.n(X),A=n(58),P=n.n(A),B=n(115);function D(){var e=a.a.useState(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],o=a.a.useContext(L).setTheme,c=function(){return n?Object(I.jsx)(B.a,{children:Object(I.jsx)(U.a,{color:"primary"})}):Object(I.jsx)(B.a,{children:Object(I.jsx)(P.a,{color:"secondary"})})};return Object(I.jsx)(v.a,{row:!0,children:Object(I.jsxs)(S.a,{container:!0,direction:"row",alignItems:"center",children:[Object(I.jsx)(S.a,{item:!0,children:Object(I.jsx)(T.a,{checked:n,onChange:function(e){var t=e.target.checked;r(t),o(t?"dark":"light")},name:"ThemeSlider",color:"primary"})}),Object(I.jsx)(S.a,{item:!0,children:Object(I.jsx)(c,{})})]})})}function J(e){var t=e.setAuthUser;return Object(I.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return function(e,t){return l.a.post(m+"/api/auth/login",e,{withCredentials:!0}).then((function(e){b.b.success("You have been logged in, "+e.data.name),t(!0),localStorage.setItem("isLoggedin",!0)})).catch((function(e){b.b.error("Ohh no something went wrong"),console.log(e)}))}({email:"test",password:"test"},t)},children:"Login"})}function N(){return Object(I.jsx)(C.a,{variant:"outlined",color:"primary",onClick:function(){return e={},l.a.post(m+"/api/auth/create",e,{withCredentials:!0}).then((function(e){return b.b.success(e.data.message),e})).catch((function(e){b.b.error("Ohh no something went wrong"),console.log(e)}));var e},children:"Sign Up"})}function Y(e){var t=e.setAuthUser;return Object(I.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return function(e){return l.a.get(m+"/api/auth/logout",{withCredentials:!0}).then((function(t){return b.b.success(t.data.message),e(!1),localStorage.clear(),t})).catch((function(e){b.b.error("Ohh no something went wrong"),console.log(e)}))}(t)},children:"Logout"})}var E=Object(w.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var H=function(e){var t=e.isLoggedIn,n=e.setAuthUser,r=E();return Object(I.jsx)(v.a,{row:!0,className:r.root,children:t?Object(I.jsx)(Y,{setAuthUser:n}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N,{}),Object(I.jsx)(J,{setAuthUser:n})]})})};function M(){return Object(I.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(I.jsx)(x.a,{color:"inherit",href:"/",children:"Skulldorom/Template"})," ",(new Date).getFullYear(),"."]})}var W=Object(w.a)((function(e){return{root:{display:"flex"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},box:{alignItems:"center",justifyContent:"center"}}}));var q=function(){var e=a.a.useState(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];l.a.get(m+"/api/check",{withCredentials:!0}).then((function(e){return e.data.status})).catch((function(e){b.b.error("Ohh no something went wrong"),console.log(e)})).then((function(e){return r(e)}));var o=W();return Object(I.jsxs)(g.Provider,{value:{header:j(),isLoggedIn:n},children:[Object(I.jsx)(g.Consumer,{children:function(e){var t=e.isLoggedIn;return Object(I.jsxs)(p.a,{maxWidth:"lg",className:o.container,children:[Object(I.jsx)(f.a,{variant:"body1",color:"primary",align:"center",children:Object(I.jsx)("img",{src:O,style:{height:"300px"},alt:"logo"})}),Object(I.jsxs)(v.a,{row:!0,children:[Object(I.jsx)(D,{}),Object(I.jsx)(H,{isLoggedIn:t,setAuthUser:r})]}),Object(I.jsx)(f.a,{variant:"body1",color:"primary",align:"center",children:Object(I.jsx)(C.a,{variant:"outlined",color:"secondary",onClick:function(){return d.Test()},children:"Test (Prints in the backend)"})}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsxs)(f.a,{variant:"h3",color:"primary",align:"center",children:["Logged in? ",String(t)]})]})}}),Object(I.jsx)(k.a,{pt:4,children:Object(I.jsx)(M,{})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},G=n(122);n(93);document.title="Flask React",c.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsxs)(R,{children:[Object(I.jsx)(b.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(I.jsx)(G.a,{}),Object(I.jsx)(q,{})]})}),document.getElementById("root")),z()}},[[94,1,2]]]);
//# sourceMappingURL=main.ec6c44d2.chunk.js.map