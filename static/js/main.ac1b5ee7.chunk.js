(this["webpackJsonpdeliverables-website-2"]=this["webpackJsonpdeliverables-website-2"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},106:function(e,t,n){e.exports={Schedule:"Schedule_Schedule__26mne"}},188:function(e,t,n){"use strict";n.r(t);var o=n(2),s=n(4),i=n.n(s),c=n(35),a=n.n(c),r=(n(100),n(14)),l=n(15),d=n(17),h=n(16),j=(n(101),function(e){return e.children}),u=n(78),m=n.n(u),p=n(25),b=function(e){return Object(o.jsx)("div",{className:m.a.Toolbar,children:Object(o.jsx)("header",{children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:{pathname:"/home"},children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/schedule",children:"Schedule"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/blog",children:"Blog"})})]})})})})},O=function(e){return Object(o.jsxs)(j,{children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{children:e.children})]})},f=n(80),x=n.n(f),g=function(e){return Object(o.jsxs)("div",{className:x.a.Home,children:[Object(o.jsx)("h1",{children:"Blockchain Cross-Border Payments Corridor Network"}),Object(o.jsx)("p",{children:" Supervisor: Allen Au "}),Object(o.jsx)("p",{children:" Student 1: Anastasiia Sukhovii "}),Object(o.jsx)("p",{children:" Student 2: Zicheng Wang "}),Object(o.jsx)("p",{children:" Student 3: Siyao Zheng "}),Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Aim"}),Object(o.jsx)("div",{children:"Recent applications of blockchain technology have fundamentally transformed the financial industry, including the domain of foreign exchange and cross-border payments. And although currently the distributed ledger technology cannot substitute the existing SWIFT model in short order, it definitely presents a potential in a long-term perspective. Considering the opportunity to decrease the number of intermediaries, to enhance transaction speed, efficiency and transparency, financial institutions also actively investigate and test blockchain solutions, however, such aspects as security and integrity, transaction performance, are yet to be addressed. Therefore, the main objective of our project is to examine the application of the distributed ledger technology for cross-border remittance, and use our key findings in building the web application."})]}),Object(o.jsx)("p",{})]})},v=n(6),y=(n(106),n(81),n(82),n(83)),k=n.n(y),C=n(84),w=n.n(C),S=n(48),_=n.n(S).a.create({baseURL:"https://deliveries-website-default-rtdb.firebaseio.com/"}),P=n(58),D=n.n(P),A=function(e){return Object(o.jsx)("button",{className:[D.a.Button,D.a[e.btnType]].join(" "),onClick:e.onClick,children:e.children})},B=n(85),N=n.n(B),F=function(e){return Object(o.jsxs)("div",{className:N.a.Comment,children:[Object(o.jsx)("textarea",{rows:"10",onChange:e.onChange}),Object(o.jsx)(A,{btnType:"Comment-btn",onClick:e.onClick,children:"Send Comment"})]})},M=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:e.comment})})},T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={comments:{},error:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;_.get("/comments.json").then((function(t){e.setState({comments:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var e=this,t=this.props.passedId,n=Object(o.jsx)("p",{style:{textAlign:"center"},children:"Something Went Wrong!"});return n=this.state.error||null==this.state.comments?Object(o.jsx)("p",{style:{textAlign:"center",fontSize:"25px"},children:"No Comments Yet"}):Object.keys(this.state.comments).map((function(n){if(t==e.state.comments[n].post_id)return Object(o.jsx)(M,{comment:e.state.comments[n].comment,post_id:e.state.comments[n].post_id},n)})),Object(o.jsx)("div",{children:n})}}]),n}(s.Component),H=n(88),I=n(89),X=n(86),W=n.n(X),q=n(87),V=n.n(q),Y=function(e){return e.clicked?Object(o.jsx)("div",{className:V.a.Backdrop}):null},J=function(e){return Object(o.jsxs)(j,{children:[Object(o.jsx)(Y,{clicked:e.clicked}),Object(o.jsxs)("div",{className:W.a.AreYouSureBlock,children:[Object(o.jsx)("p",{style:{textAlign:"center"},children:"Are you sure you want to delete the post?"}),Object(o.jsxs)("div",{style:{paddingLeft:"30%"},children:[Object(o.jsx)(A,{onClick:e.confirmed,children:"Sure!"}),Object(o.jsx)(A,{onClick:e.dismissed,children:"Nope"})]})]})]})},R=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={viewForm:!1,comment:"",post_id:0,ident:0,posts:{},sentComment:!1,requestSent:!1,viewModal:!1,show:!1},e.onConfirm=function(){e.onPostDelete(e.props.id)},e.onDeny=function(){e.setState({viewModal:!1})},e.onViewModal=function(){e.setState({viewModal:!0,show:!0})},e.onCommentCreate=function(){!1===e.state.viewForm?e.setState(Object(v.a)(Object(v.a)({},e.state),{},{viewForm:!0})):e.setState(Object(v.a)(Object(v.a)({},e.state),{},{viewForm:!1}))},e.postDataHandler=function(){var t={comment:e.state.comment,post_id:e.props.id};_.post("/comments.json",t).then((function(e){console.log(e)})),e.setState(Object(v.a)(Object(v.a)({},e.state),{},{viewForm:!1,sentComment:!0})),setTimeout((function(){window.location.reload()}),1e3)},e.onPostDelete=function(t){Object.keys(e.state.posts).map((function(n){console.log(e.state.posts[n].post_id),t==e.state.posts[n].post_id&&_.delete("/posts/"+n+".json").then((function(t){e.setState({requestSent:!0}),window.location.reload()}))}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;_.get("./posts.json").then((function(t){e.setState({posts:t.data})}))}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("article",{className:w.a.Post,children:[this.state.viewModal?Object(o.jsx)(J,{clicked:this.onViewModal,confirmed:this.onConfirm,dismissed:this.onDeny}):"",Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{children:this.props.author}),Object(o.jsx)("div",{children:this.props.setDate}),Object(o.jsxs)("div",{children:[Object(o.jsx)(H.a,{size:"3em",color:"#00e6e6",onClick:this.onCommentCreate}),Object(o.jsx)(I.a,{size:"3em",color:"#00e6e6",onClick:this.onViewModal})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:this.props.title}),Object(o.jsx)("div",{children:this.props.content}),this.state.viewForm?Object(o.jsx)(F,{onChange:function(t){return e.setState({comment:t.target.value})},onClick:this.postDataHandler}):""]}),Object(o.jsxs)("footer",{children:[Object(o.jsx)("h2",{children:"Comments"}),Object(o.jsx)(T,{passedId:this.props.id})]})]})}}]),n}(s.Component),z=n(90),K=n.n(z),L=n(91),E=n.n(L),U=(n(128),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={post_id:0,title:"",content:"",author:"",startDate:new Date,setDate:new Date,requestSent:!1},e.postDataHandler=function(){var t={post_id:Date.now(),title:e.state.title,content:e.state.content,author:e.state.author,date:e.state.setDate.toDateString()};_.post("/posts.json",t).then((function(t){console.log(t),e.setState(Object(v.a)(Object(v.a)({},e.state),{},{requestSent:!0})),window.location.reload()}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{onClick:this.onPostCreate,className:K.a.NewPost,children:[Object(o.jsx)("h2",{children:"What's new?"}),Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}),Object(o.jsx)("label",{children:"Content"}),Object(o.jsx)("textarea",{rows:"10",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}}),Object(o.jsx)("label",{children:"Author"}),Object(o.jsxs)("select",{value:this.state.author,onChange:function(t){return e.setState({author:t.target.value})},children:[Object(o.jsx)("option",{value:"choose_author",children:"Choose an Author "}),Object(o.jsx)("option",{value:"Ricky",children:"Ricky"}),Object(o.jsx)("option",{value:"Siyao",children:"Siyao"}),Object(o.jsx)("option",{value:"Anna",children:"Anna"})]}),Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)(E.a,{selected:this.state.setDate,onChange:function(t){e.setState({setDate:t})}}),Object(o.jsx)(A,{btnType:"NewPost-btn",onClick:this.postDataHandler,children:"Add a Post"})]})}}]),n}(s.Component)),Z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={posts:{},viewForm:!1,requestSent:!1,viewModal:!1,deletePost:!1,error:!1},e.onPostCreate=function(){e.setState(Object(v.a)(Object(v.a)({},e.state),{},{viewForm:!0}))},e.postDataHandler=function(){var t={post_id:Date.now(),title:e.state.title,content:e.state.content,author:e.state.author,date:e.state.date};_.post("/posts.json",t).then((function(t){console.log(t),e.setState({requestSent:!0})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;_.get("/posts.json").then((function(t){e.setState({posts:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var e=this,t=Object(o.jsx)("p",{style:{textAlign:"center"},children:"Something Went Wrong!"});return t=this.state.error||null==this.state.posts?Object(o.jsx)("p",{style:{textAlign:"center"},children:"There are no posts yet!"}):Object.keys(this.state.posts).map((function(t){return Object(o.jsx)(R,{title:e.state.posts[t].title,author:e.state.posts[t].author,content:e.state.posts[t].content,setDate:e.state.posts[t].date,id:e.state.posts[t].post_id,clicked:e.onViewModal,deletePost:e.state.deletePost},t)})),console.log(this.getClickedId),Object(o.jsxs)("div",{className:k.a.Blog,children:[Object(o.jsx)(A,{onClick:this.state.viewForm?this.onPostHide:this.onPostCreate,children:this.state.viewForm?"Hide Post":"Create Post"}),this.state.viewForm?Object(o.jsx)(U,{onClick:this.props.viewForm}):"",Object(o.jsx)("h1",{children:"What we've done so far"}),t]})}}]),n}(s.Component),Q=n(94),G=n.n(Q),$=n(9),ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:G.a.Container,children:[Object(o.jsx)($.a,{exact:!0,path:"/",component:g}),Object(o.jsx)($.a,{exact:!0,path:"/blog",component:Z})]})}}]),n}(s.Component),te=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsx)(p.a,{basename:"/deliverables",children:Object(o.jsx)("div",{children:Object(o.jsx)(O,{children:Object(o.jsx)(ee,{})})})})}}]),n}(s.Component),ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),o(e),s(e),i(e),c(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(te,{})}),document.getElementById("root")),ne()},58:function(e,t,n){e.exports={Button:"Button_Button__3gFiX","Comment-btn":"Button_Comment-btn__3ySUN","NewPost-btn":"Button_NewPost-btn__31ihg","AreYouSureBlock-btn":"Button_AreYouSureBlock-btn__12JPK"}},78:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2QS0u"}},80:function(e,t,n){e.exports={Home:"Home_Home__2ezT9"}},82:function(e){e.exports=JSON.parse('[{"id":1,"task":"Creating the project webpage for managing the workflow and monitoring the progress of the team","estimated completion time":"Dec 1, 2020","comments":"in process","completed":"V"},{"id":2,"task":"Identifying the weaknesses of the existing cross-border remittance models, selecting specific primary/secondary problems","estimated completion time":"Dec 14, 2020","comments":"in process","completed":"X"},{"id":3,"task":"Investigating more on performance, scale, security aspects, clarifying policy restrictions","estimated completion time":"Dec 28, 2020","comments":"in process","completed":"V"},{"id":4,"task":"Outlining main sections and theoretical backgrounds in the Interim Report ","estimated completion time":"Jan 11, 2021","comments":"in process","completed":"X"},{"id":5,"task":"Identifying and confirming consensus mechanism, blockchain platform, designing nodes, building the APIs","estimated completion time":"Jan 25, 2021","comments":"in process","completed":"X"},{"id":6,"task":"Sketching the prototype of the web/mobile app, finalizing on applied technologies ","estimated completion time":"Feb 8, 2021","comments":"in process","completed":"X"},{"id":7,"task":"Designing, deploying, testing smart contracts ","estimated completion time":"Feb 22, 2021","comments":"in process","completed":"X"},{"id":8,"task":"Creating backend","estimated completion time":"Mar 15, 2021","comments":"in process","completed":"X"},{"id":9,"task":"Creating front-end, testing the app","estimated completion time":"Apr 5, 2021","comments":"in process","completed":"X"},{"id":10,"task":"Completing the Final Report, Exhibition poster and Preparing the Presentation ","estimated completion time":"Mar 19, 2021","comments":"in process","completed":"X"}]')},83:function(e,t,n){e.exports={Blog:"Blog_Blog__1PqXK"}},84:function(e,t,n){e.exports={Post:"Post_Post__2uao7"}},85:function(e,t,n){e.exports={Comment:"Comment_Comment__PW1S3"}},86:function(e,t,n){e.exports={AreYouSureBlock:"AreYouSureBlock_AreYouSureBlock__3jnK0"}},87:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},90:function(e,t,n){e.exports={NewPost:"NewPost_NewPost__HfIul"}},94:function(e,t,n){e.exports={Container:"Container_Container__23ogP"}}},[[188,1,2]]]);
//# sourceMappingURL=main.ac1b5ee7.chunk.js.map