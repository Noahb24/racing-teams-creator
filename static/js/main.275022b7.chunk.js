(this["webpackJsonpteam-creator"]=this["webpackJsonpteam-creator"]||[]).push([[0],{13:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),i=n.n(c),o=(n(13),n(2)),u=n(7),s=n(4);function l(e,t){var n,r,a,c,i;if(t>e.length||t<=0)return[];if(t===e.length)return[e];if(1===t){for(a=[],n=0;n<e.length;n++)a.push([e[n]]);return a}for(a=[],n=0;n<e.length-t+1;n++)for(c=e.slice(n,n+1),i=l(e.slice(n+1),t-1),r=0;r<i.length;r++)a.push(c.concat(i[r]));return a}function m(e,t,n){for(var r=[],a=[],c=e,i=0,o=function(e){var n=function(e,t,n){var r=[];e.map((function(e){r.push(e.total)}));var a=r.reduce((function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e}));return{combo:e[r.indexOf(a)].combo,total:a,num:n}}(c,t,i),o=c.filter((function(e){return e.total!==n.total}));c=o,i++,r.includes(n.combo[0])||r.includes(n.combo[1])||r.includes(n.combo[2])||(n.combo.map((function(e){return r.push(e)})),a.push(n),e++),u=e},u=0;u<n;u)o(u);return a}function d(e,t){var n=[],r=[];e.map((function(e){n.push(e.id),r.push(e.time)}));var a=function(e,t){var n=[];return e.map((function(e){var r=0;return e.map((function(e){return r+=t[e],""})),n.push({combo:e,total:r}),r})),n}(l(n,t),function(e){var t=[];return e.map((function(e){var n=6e4*Number(e.slice(0,2)),r=1e3*Number(e.slice(3,5)),a=Number(e.slice(6));t.push(n+r+a)})),t}(r));return m(a,function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].total;return t/e.length}(a),t)}function j(e){var t=Math.floor(Number(e)/6e4),n=Number(e)%6e4,r=Math.floor(n/1e3),a=n%1e3;return"".concat(t,":").concat(r,".").concat(a)}var b=Object(s.b)({name:"teamMaker",initialState:{teamSize:3,racers:[{name:"",time:"00:00.00",id:0}],teams:[]},reducers:{teamSizeChange:function(e,t){e.teamSize=t.payload},addRacer:function(e,t){e.racers.push({name:"",time:"00:00.00",id:e.racers.length})},deleteRacer:function(e,t){console.log(t.payload),e.racers=[].concat(Object(u.a)(e.racers.slice(0,t.payload)),Object(u.a)(e.racers.slice(t.payload+1)))},racerChange:function(e,t){var n=t.payload.type,r=t.payload.value,a=t.payload.num;e.racers[a][n]=r},getTeams:function(e,t){e.teams=t.payload}}}),h=function(e){return e.teamMaker.racers},f=function(e){return e.teamMaker.teamSize},v=function(e){return e.teamMaker.teams},p=b.actions,O=p.addRacer,x=p.racerChange,g=p.deleteRacer,y=p.getTeams,k=p.teamSizeChange,N=b.reducer,C=n(1);var M=function(){var e=Object(o.c)(h),t=Object(o.b)();function n(e,n,r){var a={type:n,num:e,value:r.target.value};t(x(a))}return Object(C.jsx)("div",{children:e.map((function(r,a){return Object(C.jsxs)("div",{children:[Object(C.jsxs)("label",{children:["Name: ",Object(C.jsx)("input",{type:"text",onChange:function(e){return n(a,"name",e)},value:e[a].name})]}),Object(C.jsxs)("label",{children:["Time (mm:ss.ms): ",Object(C.jsx)("input",{type:"text",onChange:function(e){return n(a,"time",e)},value:e[a].time})]}),Object(C.jsx)("button",{onClick:function(){return t(g(a))},children:"Delete"})]},a)}))})};var T=function(){var e=Object(o.c)(v),t=Object(o.c)(h);return Object(C.jsx)("div",{children:e.map((function(e,n){return Object(C.jsxs)("div",{children:[Object(C.jsxs)("h3",{children:["Team: ",n+1," Total Time: ",j(e.total)]}),e.combo.map((function(e,n){return Object(C.jsx)("div",{children:Object(C.jsxs)("h4",{children:[t[e].name," - ",t[e].time]})},n)}))]},n)}))})};var w=function(){var e=Object(o.b)(),t=Object(o.c)(f),n=Object(o.c)(h);return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"header",children:Object(C.jsxs)("label",{children:["Team Size:",Object(C.jsx)("input",{onChange:function(t){return e(k(t.target.value))},type:"number",value:t})]})}),Object(C.jsxs)("div",{className:"racers",children:["Racers:",Object(C.jsx)(M,{})]}),Object(C.jsx)("button",{onClick:function(){return e(O())},children:"Add Racer"}),Object(C.jsx)("button",{onClick:function(){return function(){var r=d(n,t);e(y(r))}()},children:"Get Teams"}),Object(C.jsx)("div",{className:"teams"}),Object(C.jsxs)("div",{className:"teams",children:["Teams:",Object(C.jsx)(T,{})]})]})};var S=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(w,{})})},z=Object(s.a)({reducer:{teamMaker:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(o.a,{store:z,children:Object(C.jsx)(S,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.275022b7.chunk.js.map