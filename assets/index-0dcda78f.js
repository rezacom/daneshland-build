import{j as e,s as i,g as h,r as o}from"./index-72c1e717.js";import{u as m,B as x}from"./use-debounce-40d00b5d.js";import{M as f}from"./index-b92077b1.js";import{u as p}from"./use-app-selector-5837f077.js";import"./index-537ac50c.js";const g=({value:s,onChange:t})=>e.jsxs("div",{className:"group flex w-full max-w-md items-center overflow-hidden rounded-lg border border-slate-200 focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500",children:[e.jsx(f,{height:24,width:24,className:"mx-2 group-focus-within:text-teal-500"}),e.jsx("input",{className:"w-full bg-transparent py-2 text-sm focus:border-none focus:outline-none",role:"searchbox",type:"search",value:s,onChange:t,placeholder:"جستجو..."})]}),w=i.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,j=i.h2`
  font-size: 28px;
  font-weight: 600;
`,B=()=>{const s=p(h),[t,c]=o.useState(""),l=o.useCallback(r=>{c(r.target.value)},[]),a=m(t,300),u=o.useMemo(()=>s.filter(r=>{const n=a.trim().toLowerCase();return r.category.toLowerCase().startsWith(n)||r.tags.some(d=>d.toLowerCase().startsWith(n))}),[a,s]);return e.jsxs("div",{children:[e.jsxs(w,{className:"flex justify-center py-6 flex-direction-column",children:[e.jsx(j,{children:"جایی برای خواندن و نوشتن"}),e.jsx(g,{value:t,onChange:l})]}),e.jsx("div",{children:e.jsx(x,{posts:u})})]})};export{B as default};
