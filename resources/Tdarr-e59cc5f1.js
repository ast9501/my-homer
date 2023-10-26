import{s as d}from"./service-56521882.js";import{_ as u,G as l,r as _,o as s,c as h,w as f,a as m,b as r,t as n,e as a}from"./index-5de1cfc6.js";const p={name:"Tdarr",mixins:[d],props:{item:Object},components:{Generic:l},data:()=>({stats:null,error:!1}),computed:{queue:function(){return this.stats?this.stats.table1Count:""},errored:function(){return this.stats?this.stats.table6Count:""}},created(){const t=parseInt(this.item.checkInterval,10)||0;t>0&&setInterval(()=>this.fetchStatus(),t),this.fetchStatus()},methods:{fetchStatus:async function(){try{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({headers:{"content-Type":"application/json"},data:{collection:"StatisticsJSONDB",mode:"getById",docID:"statistics",obj:{}},timeout:1e3})},o=await this.fetch("/api/v2/cruddb",t);this.error=!1,this.stats=o}catch(t){this.error=!0,console.error(t)}}}},y={class:"notifs"},v=["title"],b=["title"],k={key:2,class:"notif error fa-solid fa-triangle-exclamation",title:"Unable to fetch current status"};function S(t,o,c,g,I,e){const i=_("Generic");return s(),h(i,{item:c.item},{indicator:f(()=>[m("div",y,[e.queue>0?(s(),r("strong",{key:0,class:"notif queue",title:`${e.queue} items queued`},n(e.queue),9,v)):a("",!0),e.errored>0?(s(),r("strong",{key:1,class:"notif errored",title:`${e.errored} items`},n(e.errored),9,b)):a("",!0),t.error?(s(),r("i",k)):a("",!0)])]),_:1},8,["item"])}const B=u(p,[["render",S],["__scopeId","data-v-443ed5a7"]]);export{B as default};
