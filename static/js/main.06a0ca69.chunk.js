(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r=n(88),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c6d8e982-0954-4c23-a87b-3c72dfb8d4a5"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},110:function(e,t,n){e.exports=n.p+"static/media/user_image.93ae484d.jpg"},131:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(40),a=n(9),o={dialogs:[{name:"Dimych",id:1},{name:"Sveta",id:2},{name:"Zhenya",id:3}],messages:[{message:"Hi",id:1},{message:"Yo",id:2},{message:"How are you?",id:3}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{message:n,id:4}])});default:return e}}},136:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1_En6",selectedPage:"users_selectedPage__1mnwI"}},137:function(e,t,n){e.exports=n.p+"static/media/Spinner-1s-200px.27fc27b6.svg"},16:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},166:function(e,t,n){e.exports=n(293)},171:function(e,t,n){},176:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);n(99),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(64),u=n.n(o),i=n(35),c=n(36),s=n(37),l=n(38),f=(n(171),n(16)),p=n.n(f),m=n(14),d=function(){return a.a.createElement("nav",{className:p.a.nav},a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/users",activeClassName:p.a.activeLink},"Users")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/news",activeClassName:p.a.activeLink},"News")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/music",activeClassName:p.a.activeLink},"Music")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/settings",activeClassName:p.a.activeLink},"Settings")))},g=n(10),h=(n(176),function(e){return a.a.createElement("div",null,"News")}),E=n(18),v=n(7),b=n.n(v),O=n(13),w=n(40),_=n(9),S=n(11),P=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(_.a)({},e,{},r):e}))},j={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},C=function(e){return{type:"FOLLOW",userId:e}},y=function(e){return{type:"UNFOLLOW",userId:e}},k=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},I=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},N=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},T=function(){var e=Object(O.a)(b.a.mark((function e(t,n,r,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(N(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(N(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(_.a)({},e,{users:P(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(_.a)({},e,{users:P(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(_.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(_.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(_.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(_.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(_.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},L=n(54),U=n(68),A=n(98),F=n(70),z=n.n(F),R=n(135),D=n.n(R),G=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/c),m=Object(r.useState)(1),d=Object(A.a)(m,2),g=d[0],h=d[1],E=(g-1)*c+1,v=g*c;return a.a.createElement("div",{className:z.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return a.a.createElement("span",{className:D()(Object(U.a)({},z.a.selectedPage,o===e),z.a.pageNumber),key:e,onClick:function(t){u(e)}},e)})),p>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},M=n(136),B=n.n(M),H=n(110),W=n.n(H),V=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:W.a,className:B.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},K=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,u=e.users,i=Object(L.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,a.a.createElement(G,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),a.a.createElement("div",null,u.map((function(e){return a.a.createElement(V,{user:e,followingInProgress:i.followingInProgress,key:e.id,unfollow:i.unfollow,follow:i.follow})}))))},X=n(65),Z=n(8),J=n(138),Y=Object(J.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),$=function(e){return e.usersPage.pageSize},q=function(e){return e.usersPage.totalUsersCount},Q=function(e){return e.usersPage.currentPage},ee=function(e){return e.usersPage.isFetching},te=function(e){return e.usersPage.followingInProgress},ne=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(X.a,null):null,a.a.createElement(K,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),re=Object(Z.d)(Object(E.b)((function(e){return{users:Y(e),pageSize:$(e),totalUsersCount:q(e),currentPage:Q(e),isFetching:ee(e),followingInProgress:te(e)}}),{follow:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,S.c.follow.bind(S.c),C);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,S.c.unfollow.bind(S.c),y);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:k,toggleFollowingProgress:N,getUsers:function(e,t){return function(){var n=Object(O.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),r(k(e)),n.next=4,S.c.getUsers(e,t);case 4:a=n.sent,r(I(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ne),ae=n(94),oe=n.n(ae),ue=function(e){return a.a.createElement("header",{className:oe.a.header},a.a.createElement("img",{src:"https://shmector.com/_ph/13/510962645.png",alt:"logo"}),a.a.createElement("div",{className:oe.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(m.b,{to:"/login"},"Login")))},ie=(n(88),n(25)),ce={userId:null,email:null,login:null,isAuth:!1},se=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},le=function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var n,r,a,o,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,u=r.login,t(se(a,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(_.a)({},e,{},t.payload);default:return e}},pe=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(ue,this.props)}}]),n}(a.a.Component),me=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(se(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(pe),de=n(132),ge=n(32),he=n(55),Ee=n(47),ve=n.n(Ee),be=Object(de.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(ge.c)("Email","email",[he.b],ge.a),Object(ge.c)("Password","password",[he.b],ge.a,{type:"password"}),Object(ge.c)(null,"rememberMe",[],ge.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:ve.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),Oe=Object(E.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(O.a)(b.a.mark((function r(a){var o,u;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(le()):(u=o.data.messages.length?o.data.messages[0]:"Some error",a(Object(ie.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(be,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),we={initialized:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(_.a)({},e,{initialized:!0});default:return e}},Se=n(97),Pe=n(131),je={},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je;arguments.length>1&&arguments[1];return e},ye=n(140),ke=n(133),Ie=Object(Z.c)({profilePage:Se.b,dialogsPage:Pe.a,sidebar:Ce,usersPage:x,auth:fe,form:ke.a,app:_e}),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,Te=Object(Z.e)(Ie,Ne(Object(Z.a)(ye.a)));window.__store__=Te;var xe=Te,Le=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))}},Ue=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,299))})),Ae=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,298))})),Fe=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(me,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(g.b,{path:"/dialogs",render:Le(Ue)}),a.a.createElement(g.b,{path:"/profile/:userId?",render:Le(Ae)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(re,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(Oe,null)}}),a.a.createElement(g.b,{path:"/news",render:function(){return a.a.createElement(h,null)}}))):a.a.createElement(X.a,null)}}]),n}(a.a.Component),ze=Object(Z.d)(g.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(le());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Fe),Re=function(e){return a.a.createElement(m.a,null,a.a.createElement(E.a,{store:xe},a.a.createElement(ze,null)))};u.a.render(a.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(54),a=n(0),o=n.n(a),u=n(47),i=n.n(u),c=(n(55),n(89)),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("div",null,a),u&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},47:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"error message"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbol ")}}},65:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(137),u=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:u.a}))}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},94:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return E}));var r=n(7),a=n.n(r),o=n(13),u=n(40),i=n(9),c=n(11),s=n(25),l={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,c.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(m(o)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"DELETE_POST":return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}},99:function(e,t,n){}},[[166,1,2]]]);
//# sourceMappingURL=main.06a0ca69.chunk.js.map