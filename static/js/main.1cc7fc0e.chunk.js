(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),i=n(5),s=n(3),u=n(4),l=n(7),f=n(6),d=(n(13),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function m(){return fetch(d).then((function(t){return t.json()})).then((function(t){return t}))}var h=function(){return fetch(d).then((function(t){return t.json()})).then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},g=function(){return fetch(d).then((function(t){return t.json()})).then((function(t){return t.filter((function(t){return"red"===t.color}))}))},b=function(t){var e=t.goods;return r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))},p=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.getAllGoods=function(){m().then((function(e){return t.setState({goods:Object(i.a)(e)})}))},t.getFive=function(){h().then((function(e){return t.setState({goods:e})}))},t.getRed=function(){g().then((function(e){return t.setState({goods:e})}))},t}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"is-flex is-flex-direction-column is-align-items-center"},r.a.createElement("h1",{className:"title"},"Dynamic list of Goods"),r.a.createElement("div",null,r.a.createElement("button",{className:"button is-info mx-2",type:"button",onClick:this.getAllGoods},"Load All goods"),r.a.createElement("button",{className:"button is-info mx-2",type:"button",onClick:this.getFive},"Load 5 first goods"),r.a.createElement("button",{className:"button is-info mx-2",type:"button",onClick:this.getRed},"Load red goods")),r.a.createElement(b,{goods:this.state.goods}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1cc7fc0e.chunk.js.map