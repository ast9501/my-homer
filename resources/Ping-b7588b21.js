import{s as o}from"./service-56521882.js";import{_ as a,G as c,r as i,o as e,c as r,w as m,b as p,n as u,t as d,e as h}from"./index-5de1cfc6.js";const _={name:"Ping",mixins:[o],props:{item:Object},components:{Generic:c},data:()=>({status:null}),created(){this.fetchStatus()},methods:{fetchStatus:async function(){const t=typeof this.item.method=="string"?this.item.method.toUpperCase():"HEAD";if(!["GET","HEAD","OPTION"].includes(t)){console.error(`Ping: ${t} is not a supported HTTP method`);return}this.fetch("/",{method:t,cache:"no-cache"},!1).then(()=>{this.status="online"}).catch(()=>{this.status="offline"})}}};function l(t,f,s,g,v,y){const n=i("Generic");return e(),r(n,{item:s.item},{indicator:m(()=>[t.status?(e(),p("div",{key:0,class:u(["status",t.status])},d(t.status),3)):h("",!0)]),_:1},8,["item"])}const G=a(_,[["render",l],["__scopeId","data-v-25516c40"]]);export{G as default};
