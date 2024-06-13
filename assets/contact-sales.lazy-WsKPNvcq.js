import{u as o,j as a,C as m,B as i,c}from"./index-Buu4EzBp.js";import{z as t,u,a as g,I as d}from"./Input-BRFfnCrP.js";import{T as p}from"./Textarea-CuihjdQK.js";const h="/henshu/assets/background-Cy5DCAEK.webp",x=[{name:"name",label:"Name",inputType:"text",validator:t.string().min(1,"Please enter your name.")},{name:"email",label:"Email",inputType:"email",validator:t.string().email("Please enter your email address.")},{name:"company",label:"Company Name",inputType:"text",validator:t.string().min(1,"Please enter your company.")},{name:"message",label:"Message",validator:t.string().min(1,"Please enter a message.")}],b=()=>{const{t:n}=o(),r=u({defaultValues:{name:"",email:"",company:"",message:""},validators:{onMount:t.object({name:t.string().min(1,"Please enter your name."),email:t.string().email("Please enter your email address."),company:t.string().min(1,"Please enter your company."),message:t.string().min(1,"Please enter a message.")})},validatorAdapter:g,onSubmit:e=>{console.log(e)}});return a.jsx("div",{className:"min-h-screen flex items-center justify-center bg-cover bg-center",style:{backgroundImage:`url(${h})`},children:a.jsxs(m,{fullWidth:!0,color:"white",className:"max-w-md z-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-center mb-2",children:n("Contact Sales")}),a.jsx("p",{className:"text-center text-gray-600 mb-6",children:n("Please fill out the form below to contact our sales team.")}),a.jsxs("form",{onSubmit:e=>{e.preventDefault(),e.stopPropagation(),r.handleSubmit()},children:[x.map(e=>a.jsx(r.Field,{name:e.name,validators:{onChange:e.validator},children:s=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:e.name,className:"block text-gray-700",children:n(e.label)}),e.name!=="message"?a.jsx(d,{type:e.inputType,id:e.name,value:s.state.value,onChange:l=>s.handleChange(l.target.value),required:!0,errorMessage:n(s.state.meta.errors.toString())}):a.jsx(p,{id:e.name,value:s.state.value,onChange:l=>s.handleChange(l.target.value),required:!0,errorMessage:n(s.state.meta.errors.toString())})]})},e.name)),a.jsx(r.Subscribe,{selector:e=>[e.canSubmit,e.isDirty],children:([e,s])=>a.jsx(i,{type:"submit",fullWidth:!0,disabled:!e||!s,children:n("Submit")})})]})]})})},C=c("/contact-sales")({component:()=>a.jsx("div",{children:a.jsx(b,{})})});export{C as Route};