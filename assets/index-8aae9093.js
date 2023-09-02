import{s as i,j as t,L as s}from"./index-72c1e717.js";import{A as e}from"./index-704bb354.js";import{G as r}from"./index-da42693c.js";const o=i.div`
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  padding: 30px 20px;
  border-radius: 10px;
  width: 500px;
`,a=i.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`,d=i.h3`
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`,l=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    height: 50px;
    border-radius: 8px;
    padding: 10px;
    color: #000;
  }
`,c=()=>t.jsx(e,{children:t.jsx(o,{children:t.jsxs("form",{className:"",children:[t.jsx(d,{children:"فراموشی کلمه عبور"}),t.jsx(a,{children:t.jsxs(l,{children:[t.jsx("label",{htmlFor:"email",children:"ایمیل"}),t.jsx("input",{type:"email",id:"email"})]})}),t.jsx(r,{size:"30px"}),t.jsx(s,{to:"/forget-password/code",children:t.jsx("button",{type:"submit",className:"button",style:{width:"100%"},children:"مرحله بعد"})})]})})});export{c as default};
