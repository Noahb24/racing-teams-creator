(this["webpackJsonpteam-creator"]=this["webpackJsonpteam-creator"]||[]).push([[0],{14:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),i=n.n(c),o=(n(14),n(2)),s=n(7),u=n(4),l=Object(u.b)({name:"teamMaker",initialState:{teamSize:3,racers:[{name:"",time:"00:00.00",id:0}],teams:[]},reducers:{teamSizeChange:function(e,t){e.teamSize=t.payload},addRacer:function(e,t){e.racers.push({name:"",time:"00:00.00",id:e.racers.length})},deleteRacer:function(e,t){e.teams=[],e.racers=[].concat(Object(s.a)(e.racers.slice(0,t.payload)),Object(s.a)(e.racers.slice(t.payload+1)))},racerChange:function(e,t){var n=t.payload.type,r=t.payload.value,a=t.payload.num;e.racers[a][n]=r},getTeams:function(e,t){e.teams=t.payload}}}),m=function(e){return e.teamMaker.racers},d=function(e){return e.teamMaker.teamSize},j=function(e){return e.teamMaker.teams},h=l.actions,b=h.addRacer,f=h.racerChange,v=(h.deleteRacer,h.getTeams),p=h.teamSizeChange,O=l.reducer,x=n(1);var g=function(){var e=Object(o.c)(m),t=Object(o.b)();function n(e,n,r){var a={type:n,num:e,value:r.target.value};t(f(a))}return Object(x.jsx)("div",{className:"racers",children:e.map((function(t,r){return Object(x.jsxs)("div",{className:"racer",children:[Object(x.jsxs)("p",{children:["Name:",Object(x.jsx)("input",{id:"name",type:"text",onChange:function(e){return n(r,"name",e)},value:e[r].name})]}),Object(x.jsxs)("p",{children:["Time (mm:ss.ms):",Object(x.jsx)("input",{id:"time",type:"text",onChange:function(e){return n(r,"time",e)},value:e[r].time})]})]},r)}))})};function y(e,t){var n,r,a,c,i;if(t>e.length||t<=0)return[];if(t===e.length)return[e];if(1===t){for(a=[],n=0;n<e.length;n++)a.push([e[n]]);return a}for(a=[],n=0;n<e.length-t+1;n++)for(c=e.slice(n,n+1),i=y(e.slice(n+1),t-1),r=0;r<i.length;r++)a.push(c.concat(i[r]));return a}function N(e,t,n){for(var r=[],a=[],c=e,i=0,o=function(e){var n=function(e,t,n){var r=[];e.map((function(e){r.push(e.total)}));var a=r.reduce((function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e}));return{combo:e[r.indexOf(a)].combo,total:a,num:n}}(c,t,i),o=c.filter((function(e){return e.total!==n.total}));c=o,i++,r.includes(n.combo[0])||r.includes(n.combo[1])||r.includes(n.combo[2])||(n.combo.map((function(e){return r.push(e)})),a.push(n),e++),s=e},s=0;s<n;s)o(s);return a}function k(e,t){var n=[],r=[];e.map((function(e){n.push(e.id),r.push(e.time)}));var a=function(e,t){var n=[];return e.map((function(e){var r=0;return e.map((function(e){return r+=t[e],""})),n.push({combo:e,total:r}),r})),n}(y(n,t),function(e){var t=[];return e.map((function(e){var n=6e4*Number(e.slice(0,2)),r=1e3*Number(e.slice(3,5)),a=Number(e.slice(6));t.push(n+r+a)})),t}(r));return N(a,function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].total;return t/e.length}(a),t)}function M(e){var t=Math.floor(Number(e)/6e4),n=Number(e)%6e4,r=Math.floor(n/1e3),a=n%1e3;return"".concat(t,":").concat(r,".").concat(a)}n(8);var w=function(){var e=Object(o.c)(j),t=Object(o.c)(m);return Object(x.jsx)("div",{className:"racers",children:e.map((function(e,n){return Object(x.jsxs)("div",{className:"racer",children:[Object(x.jsxs)("h3",{children:["Team: ",n+1," Total Time: ",M(e.total)]}),e.combo.map((function(e,n){return Object(x.jsx)("div",{children:Object(x.jsxs)("h4",{children:[t[e].name," - ",t[e].time]})},n)}))]},n)}))})};var C=function(){var e=Object(o.b)(),t=Object(o.c)(d),n=Object(o.c)(m),r=Object(o.c)(j);return Object(x.jsxs)("div",{className:"teamMaker",children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsxs)("label",{children:["Team Size:",Object(x.jsx)("input",{id:"teamSize",onChange:function(t){return e(p(t.target.value))},type:"number",value:t})]}),Object(x.jsx)("button",{onClick:function(){return e(b())},children:"Add Racer"}),Object(x.jsx)("button",{onClick:function(){return function(){var r;try{r=k(n,t)}catch(a){return window.alert("Error in Creating Teams"),void console.log(a)}e(v(r))}()},children:"Get Teams"})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:["Racers: ",n.length]}),Object(x.jsx)(g,{})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:["Teams: ",r.length]}),Object(x.jsx)(w,{})]})]})};var T=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(C,{})})},S=Object(u.a)({reducer:{teamMaker:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(o.a,{store:S,children:Object(x.jsx)(T,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.b86f08e7.chunk.js.map