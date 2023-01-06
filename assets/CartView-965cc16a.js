import{u as p,j as h,_ as m,d as u,o as c,c as a,a as e,e as i,w as d,F as x,b as v,t as l,h as _}from"./index-354dbe6b.js";const w={name:"CartView",setup:function(){const t=p(),o=h(()=>{let n=0;return t.cartItems.forEach(r=>{n+=Number(r.price)}),n});return{cartStore:t,itemsCost:o}}},C={class:"h-screen flex p-2"},b={class:"w-1/4"},g={class:"w-2/4 flex flex-col items-center p-2"},k=e("h1",{class:"font-ubuntu text-4xl underline"},"Items in Your Cart",-1),y={class:"p-2 space-y-2 w-full flex flex-col items-center h-full overflow-y-scroll"},S={class:""},V=["src"],N={class:"flex flex-col font-nunito text-xl justify-center"},T={class:"w-1/4 h-screen flex flex-col justify-center items-center"},j={class:"font-ubuntu text-xl"};function B(t,o){const n=u("v-icon"),r=u("v-btn");return c(),a("div",C,[e("div",b,[i(r,{icon:"",color:"purple",onClick:o[0]||(o[0]=s=>t.$router.go(-1)),variant:"flat"},{default:d(()=>[i(n,null,{default:d(()=>[_("mdi-arrow-left-thin")]),_:1})]),_:1})]),e("div",g,[k,e("div",y,[(c(!0),a(x,null,v(t.cartStore.cartItems,(s,f)=>(c(),a("div",{class:"rounded-sm shadow-sm shadow-slate-100/50 w-[75%] border-[1px] p-2 flex space-x-2",key:f},[e("div",S,[e("img",{src:s.posterLink,alt:"game-poster",class:"h-36 w-[7.5rem] rounded-md"},null,8,V)]),e("div",N,[e("h1",null,"Title: "+l(s.title),1),e("h1",null,"Price: "+l(s.price),1),e("h1",null,"Size: "+l(s.gameSize),1)])]))),128))])]),e("div",T,[e("span",j,"Total Cost(Ksh): "+l(t.itemsCost),1),i(r,{color:"purple",rounded:"pill","append-icon":"mdi-arrow-right",variant:"flat"},{default:d(()=>[_(" Proceed To Checkout ")]),_:1})])])}const E=m(w,[["render",B]]);export{E as default};
