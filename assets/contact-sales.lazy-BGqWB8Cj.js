import{u as l,j as a,a as d,C as g,B as x,c as p}from"./index-B1bjsujf.js";import{z as r,u as b,a as y,I as h}from"./Input-Nuu0PRE5.js";const j=({id:t,value:n,color:e="primary",onChange:s,rows:o=4,required:m=!1,className:c,errorMessage:i})=>{const{t:u}=l();return a.jsxs(a.Fragment,{children:[a.jsx("textarea",{id:t,value:n,onChange:s,className:d("w-full my-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring",{"focus:ring-primary focus:border-primary":e==="primary","focus:ring-secondary focus:border-secondary":e==="secondary","focus:ring-success focus:border-success":e==="success","focus:ring-error focus:border-error":e==="error","focus:ring-warning focus:border-warning":e==="warning","focus:ring-info focus:border-info":e==="info"},c),rows:o,required:m}),i&&a.jsx("span",{className:"text-xs text-error",children:u(i)})]})},f="/henshu/assets/background-Cy5DCAEK.webp",v=[{name:"name",label:"Name",inputType:"text",validator:r.string().min(1,"Please enter your name.")},{name:"email",label:"Email",inputType:"email",validator:r.string().email("Please enter your email address.")},{name:"company",label:"Company Name",inputType:"text",validator:r.string().min(1,"Please enter your company.")},{name:"message",label:"Message",validator:r.string().min(1,"Please enter a message.")}],C=()=>{const{t}=l(),n=b({defaultValues:{name:"",email:"",company:"",message:""},validators:{onMount:r.object({name:r.string().min(1,"Please enter your name."),email:r.string().email("Please enter your email address."),company:r.string().min(1,"Please enter your company."),message:r.string().min(1,"Please enter a message.")})},validatorAdapter:y,onSubmit:e=>{console.log(e)}});return a.jsx("div",{className:"min-h-screen flex items-center justify-center bg-cover bg-center",style:{backgroundImage:`url(${f})`},children:a.jsxs(g,{fullWidth:!0,color:"white",className:"max-w-md z-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-center mb-2",children:t("Contact Sales")}),a.jsx("p",{className:"text-center text-gray-600 mb-6",children:t("Please fill out the form below to contact our sales team.")}),a.jsxs("form",{onSubmit:e=>{e.preventDefault(),e.stopPropagation(),n.handleSubmit()},children:[v.map(e=>a.jsx(n.Field,{name:e.name,validators:{onChange:e.validator},children:s=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:e.name,className:"block text-gray-700",children:t(e.label)}),e.name!=="message"?a.jsx(h,{type:e.inputType,id:e.name,value:s.state.value,onChange:o=>s.handleChange(o.target.value),required:!0,errorMessage:s.state.meta.errors.toString()}):a.jsx(j,{id:e.name,value:s.state.value,onChange:o=>s.handleChange(o.target.value),required:!0,errorMessage:s.state.meta.errors.toString()})]})},e.name)),a.jsx(n.Subscribe,{selector:e=>[e.canSubmit,e.isDirty],children:([e,s])=>a.jsx(x,{type:"submit",fullWidth:!0,disabled:!e||!s,children:t("Submit")})})]})]})})},S=p("/contact-sales")({component:()=>a.jsx("div",{children:a.jsx(C,{})})});export{S as Route};
