import{s as d}from"./service-56521882.js";import{_ as m,G as _,r as h,o as n,c as f,w as i,a as c,t as s,b as o,F as r,d as u,e as p,n as b}from"./index-5de1cfc6.js";const g={name:"AdGuardHome",mixins:[d],props:{item:Object},components:{Generic:_},data:()=>({status:null,stats:null}),computed:{percentage:function(){return this.stats?(this.stats.num_blocked_filtering*100/this.stats.num_dns_queries).toFixed(2):""},protection:function(){return this.status?this.status.protection_enabled?"enabled":"disabled":"unknown"}},created:function(){this.fetchStatus(),this.item.subtitle||this.fetchStats()},methods:{fetchStatus:async function(){this.status=await this.fetch("/control/status").catch(t=>console.log(t))},fetchStats:async function(){this.stats=await this.fetch("/control/stats").catch(t=>console.log(t))}}},k={class:"title is-4"},x={class:"subtitle is-6"};function y(t,G,e,v,w,a){const l=h("Generic");return n(),f(l,{item:e.item},{content:i(()=>[c("p",k,s(e.item.name),1),c("p",x,[e.item.subtitle?(n(),o(r,{key:0},[u(s(e.item.subtitle),1)],64)):t.stats?(n(),o(r,{key:1},[u(s(a.percentage)+"% blocked ",1)],64)):p("",!0)])]),indicator:i(()=>[c("div",{class:b(["status",a.protection])},s(a.protection),3)]),_:1},8,["item"])}const C=m(g,[["render",y],["__scopeId","data-v-e280e4f8"]]);export{C as default};
