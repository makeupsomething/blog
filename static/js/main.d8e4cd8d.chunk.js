(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{241:function(n,e,t){var r={"./":8,"./index":8,"./index.js":8,"./notFound.md":242,"./offtopic/welcome.md":243};function a(n){var e=o(n);return t(e)}function o(n){var e=r[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,n.exports=a,a.id=241},242:function(n,e,t){n.exports=t.p+"static/media/notFound.0025d1fc.md"},243:function(n,e,t){n.exports=t.p+"static/media/welcome.57883d2a.md"},245:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(15),i=t.n(o),c=(t(43),t(20)),l=t(25),u=t(12),f=t(16),s=t(17),m=t(23),d=t(18),h=t(24),p=t(2),g=t(10),v=t(3),w=t(32),b=t.n(w),E=t(33),y=t.n(E);function j(){var n=Object(p.a)(["\n\tcolor: white;\n    font-size: 3.5em;\n    text-decoration: none;\n    hyphens: auto;\n    font-family: 'Bree Serif', serif;\n"]);return j=function(){return n},n}function x(){var n=Object(p.a)(["\n    height: ",";\n    width: 100vw;\n\tbackground: linear-gradient(93deg, \n\thsla(188, 90%, 50%,  0.73) 25%,\n\thsla(301, 100%, 60%,  0.3) 75%),\n\tlinear-gradient(0deg, \n\thsla(53, 93%, 50%,  0.75) 30%,\n    hsla(291, 92%, 50%,  0.5) 70%);\n    margin: 0;\n    display: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n    align-items: flex-start;\n    padding-left: 5%;\n"]);return x=function(){return n},n}function k(){var n=Object(p.a)(["\n    background-color: lightgray;\n    border-left: solid 3px darkgray;\n    width: 50%;\n    margin: 30px auto;\n    padding: 10px 0;\n    font-size: 1.0em !important;\n"]);return k=function(){return n},n}function O(){var n=Object(p.a)(["\n    color: #4844a3;\n    text-decoration-line: underline;\n"]);return O=function(){return n},n}function C(){var n=Object(p.a)(["\n    list-style: square;\n"]);return C=function(){return n},n}function F(){var n=Object(p.a)(["\n    font-size: 1.2em;\n    font-family: 'Bree Serif', serif;\n"]);return F=function(){return n},n}function z(){var n=Object(p.a)(["\n  \tfont-size: 1.7em;\n    color: #7aacd4;\n    font-family: 'Lora', serif;\n"]);return z=function(){return n},n}function L(){var n=Object(p.a)(["\n  \tfont-size: 2.7em;\n    color: #4844a3;\n    font-family: 'Lora', serif;\n"]);return L=function(){return n},n}function S(){var n=Object(p.a)(["\n\tcolor: #1d1e28;\n    width: 50vw;\n    margin: auto;\n    @media (max-width: 700px) {\n        width: 80vw;\n\t}\n"]);return S=function(){return n},n}var D=v.a.div(S()),I=v.a.h1(L()),W=v.a.h2(z()),B=v.a.p(F()),T=v.a.ul(C()),U=v.a.a(O()),_=v.a.blockquote(k()),A=v.a.header(x(),function(n){return n.height||"100vh"}),H=v.a.span(j()),N=b()({createElement:r.createElement,elements:{h1:function(n){n.id;var e=n.children;return a.a.createElement(I,null,e)},h2:function(n){n.id;var e=n.children;return a.a.createElement(W,null,e)},p:function(n){var e=n.children;return a.a.createElement(B,null,e)},ul:function(n){var e=n.children;return a.a.createElement(T,null,e)},a:function(n){var e=n.children,t=n.href;return a.a.createElement(U,{href:t},e)},blockquote:function(n){var e=n.children;return a.a.createElement(_,null,e)},code:function(n){var e=n.language,t=n.code;return a.a.createElement(y.a,{style:{width:"75%"},className:e},t)}}}),R=function(n){function e(){var n,r;Object(f.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(r=Object(m.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(o)))).state={compiled_md:null,error:!1},r.componentDidMount=function(){r.fetchPost()},r.fetchPost=function(){var n=r.props.match.params.postLink,e="";try{e=t(241)("./".concat(decodeURIComponent(n)))}catch(a){r.setState({error:!0})}fetch(e).then(function(n){n.text().then(function(n){r.setState({compiled_md:N(n).tree})})})},r}return Object(h.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(A,{height:"fit-content"},a.a.createElement(g.a,{to:"/",style:{textDecoration:"none",color:"#7aacd4"}},a.a.createElement(H,null,"makeupsomethinglater"))),this.state.compiled_md?a.a.createElement(D,null,this.state.compiled_md):null)}}]),e}(r.Component);var J=function(){return a.a.createElement("div",null,"Sorry, could not find that page")},q=t(27);function M(){var n=Object(p.a)(["\n    color: white;\n    font-family: 'Lora', serif;\n    padding: 12px 30px;\n    margin: 0;\n    border: solid 1px white;\n\n    :hover {\n        color: black;\n        background-color: white;\n        transition: all .5s\n    }\n"]);return M=function(){return n},n}function P(){var n=Object(p.a)(["\n"]);return P=function(){return n},n}function G(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return G=function(){return n},n}var Q=v.a.span(G()),$=v.a.div(P()),K=v.a.div(M());var V=function(){return a.a.createElement(Q,null,a.a.createElement($,null,a.a.createElement(q.HashLink,{to:"#work",style:{textDecoration:"none",color:"#7aacd4",margin:"auto"}},a.a.createElement(K,null,"Work"))),a.a.createElement($,null,a.a.createElement(q.HashLink,{to:"#blog",style:{textDecoration:"none",color:"#7aacd4",margin:"auto"}},a.a.createElement(K,null,"Blog"))),a.a.createElement($,null,a.a.createElement(q.HashLink,{to:"#about",style:{textDecoration:"none",color:"#7aacd4",margin:"auto"}},a.a.createElement(K,null,"About"))))};function X(){var n=Object(p.a)(["\n\tfont-size: 1.5em;\n  \tcolor: ",";\n  \tmargin-top: 10px;\n    font-family: 'Bree Serif', serif;\n"]);return X=function(){return n},n}function Y(){var n=Object(p.a)(["\n\theight: ",";\n\tpadding: 0 5%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n    align-items: flex-start;\n    \n    @media (max-width: 700px) {\n\t\tflex-direction: column;\n\t\tjustify-content: space-evenly;\n\t\talign-items: center;\n\t}\n"]);return Y=function(){return n},n}function Z(){var n=Object(p.a)(["\n\tcolor:  ",";\n    font-size: 2.5em;\n\tword-wrap: break-word;\n    font-family: 'Bree Serif', serif;\n"]);return Z=function(){return n},n}function nn(){var n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-content: flex-start;\n\tcolor: #1d1e28;\n    height: fit-content;\n    padding: 0 5%;\n    background-color:  ",";\n\n    @media (max-width: 700px) {\n\t\tflex-direction: column;\n\t\tjustify-content: space-evenly;\n        align-items: center;\n\t}\n"]);return nn=function(){return n},n}var en=v.a.section(nn(),function(n){return n.backgroundColor||"#F4F4F4"}),tn=v.a.h2(Z(),function(n){return n.inputColor||"#4844a3"}),rn=v.a.div(Y(),function(n){return n.height||"fit-content"}),an=v.a.p(X(),function(n){return n.inputColor||"#282F3D"});function on(){var n=Object(p.a)(["\n\tcolor: white;\n\tfont-size: 1.5em;\n"]);return on=function(){return n},n}function cn(){var n=Object(p.a)(["\n\tcolor: white;\n\tfont-size: 3.5em;\n\thyphens: auto;\n"]);return cn=function(){return n},n}function ln(){var n=Object(p.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n"]);return ln=function(){return n},n}var un=v.a.header(ln()),fn=v.a.h1(cn()),sn=v.a.h2(on());var mn=function(){return a.a.createElement(rn,{height:"100vh"},a.a.createElement(un,null,a.a.createElement(fn,null,"makeupsomethinglater"),a.a.createElement(sn,null,"Just keeping my head above the water",a.a.createElement("span",{role:"img","aria-label":"wave"},"\ud83c\udf0a"))),a.a.createElement(V,null))};function dn(){var n=Object(p.a)(["\n    color: white;\n    cursor: pointer;\n"]);return dn=function(){return n},n}function hn(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n"]);return hn=function(){return n},n}var pn=v.a.div(hn()),gn=v.a.a(dn());function vn(){return a.a.createElement(rn,{height:"75vh"},a.a.createElement(tn,{inputColor:"white"},"Hi",a.a.createElement("span",{role:"img","aria-label":"hand waving"},"\ud83d\udc4b")),a.a.createElement(an,{inputColor:"white"},"Thank you for checking out my site! I am a web developer in Tokyo, Japan"),a.a.createElement(pn,null,a.a.createElement(gn,{href:"https://github.com/makeupsomething"},a.a.createElement("ion-icon",{name:"logo-github",size:"large"})),a.a.createElement(gn,{href:"https://www.linkedin.com/in/daryl-cole/"},a.a.createElement("ion-icon",{name:"logo-linkedin",size:"large"})),a.a.createElement(gn,{href:"https://twitter.com/mkupsmth"},a.a.createElement("ion-icon",{name:"logo-twitter",size:"large"}))))}var wn=t(8);function bn(){var n=Object(p.a)(["\n    display: block;\n    color: #1d1e28;\n    font-family: 'Lora', serif;\n"]);return bn=function(){return n},n}function En(){var n=Object(p.a)(["\n  \tfont-size: 2.7em;\n    width: 90%;\n    color: #4844a3;\n    text-decoration: underline;\n    font-family: 'Lora', serif;\n"]);return En=function(){return n},n}function yn(){var n=Object(p.a)(["\n    width: 33%;\n    @media (max-width: 700px) {\n        width: 100%;\n\t}\n"]);return yn=function(){return n},n}var jn=v.a.div(yn()),xn=v.a.h1(En()),kn=v.a.time(bn());var On=function(n){var e=n.post,t=e.title,r=e.headline,o=e.link,i=e.date;return a.a.createElement(jn,null,a.a.createElement(g.a,{to:"/posts/".concat(encodeURIComponent(o))},a.a.createElement(xn,null,t)),a.a.createElement(kn,null,i),a.a.createElement(an,null,r))};function Cn(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n\n    @media (max-width: 700px) {\n\t\tflex-direction: column;\n\t\tjustify-content: space-evenly;\n        align-items: center;\n\t}\n"]);return Cn=function(){return n},n}var Fn=v.a.div(Cn()),zn=function(n){function e(){var n,t;Object(f.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(a)))).state={posts:[]},t.componentDidMount=function(){wn.Files.files=wn.Files.files.sort(function(n,e){return new Date(e.date)-new Date(n.date)}),t.setState({posts:wn.Files.files.slice(0,3)})},t}return Object(h.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(en,{backgroundColor:"white"},a.a.createElement(tn,null,"Some stuff that I have written"),a.a.createElement(Fn,null,this.state.posts.map(function(n,e){return a.a.createElement(On,{post:n,key:e},n.title)})))}}]),e}(r.Component);function Ln(){var n=Object(p.a)(["\n    color: #4844a3;\n    font-size: 1.2em;\n    font-family: 'Lora', serif;\n    text-decoration-line: underline;\n"]);return Ln=function(){return n},n}function Sn(){var n=Object(p.a)(["\n    margin-bottom: 30px;\n"]);return Sn=function(){return n},n}function Dn(){var n=Object(p.a)(["\n    list-style: none;\n    padding: 0;\n"]);return Dn=function(){return n},n}var In=v.a.ul(Dn()),Wn=v.a.li(Sn()),Bn=v.a.a(Ln());var Tn=function(){return a.a.createElement(en,null,a.a.createElement(tn,null,"Some stuff that I am working on"),a.a.createElement(In,null,a.a.createElement(Wn,null,a.a.createElement(Bn,{href:"https://github.com/makeupsomething/blog"},"This blog"),a.a.createElement(an,null,"A platform for my blog. I had an itch to write a blog, but I also wanted to build the platform for my blog. So I made this. Posts are written in markdown then imported and converted to React components. Styling is done with Styled Components. Other pages such as the home page, reusme and this page are just regular react components. Forever in development.")),a.a.createElement(Wn,null,a.a.createElement(Bn,{href:"https://github.com/makeupsomething/gradientr"},"Gradientr"),a.a.createElement(an,null,"Gradientr is a tool for making the perfect gradient to use in your web app. Written in React this was something that started as a simple idea and just kept growing. Currently still in development."))))};function Un(){var n=Object(p.a)(["\n    height: ",";\n    width: 100vw;\n\tbackground: linear-gradient(93deg, \n\thsla(188, 90%, 50%,  0.73) 25%,\n\thsla(301, 100%, 60%,  0.3) 75%),\n\tlinear-gradient(0deg, \n\thsla(53, 93%, 50%,  0.75) 30%,\n    hsla(291, 92%, 50%,  0.5) 70%);\n    margin: 0;\n"]);return Un=function(){return n},n}function _n(){var n=Object(p.a)(["\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return _n=function(){return n},n}var An=v.a.div(_n()),Hn=v.a.div(Un(),function(n){return n.height||"100vh"});var Nn=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(Hn,null,a.a.createElement(mn,null)),a.a.createElement(An,{id:"work"},a.a.createElement(Tn,null)),a.a.createElement(An,{id:"blog"},a.a.createElement(zn,null)),a.a.createElement(Hn,{id:"about",height:"75vh"},a.a.createElement(vn,null)))};var Rn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Jn(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}i.a.render(a.a.createElement(function(){return a.a.createElement(c.a,{basename:"/blog",onUpdate:function(){return window.scrollTo(0,0)}},a.a.createElement(r.Fragment,null,a.a.createElement(l.a,null,a.a.createElement(u.a,{exact:!0,path:"/",component:Nn}),a.a.createElement(u.a,{path:"/posts/:postLink",component:R}),a.a.createElement(u.a,{component:J}))))},null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/blog",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/blog","/service-worker.js");Rn?(function(n){fetch(n).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):Jn(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Jn(n)})}}()},38:function(n,e,t){n.exports=t(245)},43:function(n,e,t){},8:function(n,e){n.exports.Files={files:[{title:"Hello, welcome",headline:"Welcome to my blog",link:"offtopic/welcome.md",date:"27/12/2018",author:"Daryl Cole",tags:["life"]}]}}},[[38,2,1]]]);
//# sourceMappingURL=main.d8e4cd8d.chunk.js.map