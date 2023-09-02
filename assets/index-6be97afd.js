import{s as r,j as s,L as i}from"./index-72c1e717.js";import{A as t}from"./index-704bb354.js";import{G as e}from"./index-da42693c.js";const d=r.div`
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  padding: 30px 20px;
  border-radius: 10px;
  width: 500px;
`,n=r.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`,a=r.h3`
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`,o=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    height: 50px;
    border-radius: 8px;
    padding: 10px;
    color: #000;
  }
`,c=()=>s.jsx(t,{children:s.jsx(d,{children:s.jsxs("form",{className:"",children:[s.jsx(a,{children:" کلمه عبور جدید"}),s.jsxs(n,{children:[s.jsxs(o,{children:[s.jsx("label",{htmlFor:"code",children:"کد"}),s.jsx("input",{type:"code",id:"code"})]}),s.jsxs(o,{children:[s.jsx("label",{htmlFor:"password",children:"کلمه عبور جدید"}),s.jsx("input",{type:"password",id:"password"})]}),s.jsxs(o,{children:[s.jsx("label",{htmlFor:"confirm_password",children:"تکرار کلمه عبور "}),s.jsx("input",{type:"confirm_password",id:"confirm_password"})]})]}),s.jsx(e,{size:"30px"}),s.jsx(i,{to:"/forget-password/code",children:s.jsx("button",{type:"submit",className:"button",style:{width:"100%"},children:"مرحله بعد"})})]})})});export{c as default};
