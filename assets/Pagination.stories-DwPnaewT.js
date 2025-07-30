import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import{T as r,j as e}from"./index-rXSW0tOt.js";const p={title:"Molecules/Pagination",tags:["autodocs"],parameters:{docs:{description:{component:""}}},argTypes:{margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},nButtons:{control:{type:"number"},description:"Cantidad de botones que forman la barra de paginado. No incluye los botones de avanzar y retroceder."},onChange:{control:{type:"none"},description:"Función que se ejecuta al cambiar de página."},page:{control:{type:"number"},description:"Número de la página actual."},pages:{control:{type:"number"},description:"Cantidad total de páginas."}}},a=()=>n.jsxs(r,{children:[n.jsx(e,{margin:"t-10 x-20",pages:20}),n.jsx(e,{margin:"t-10 x-20",pages:20,nButtons:8}),n.jsx(e,{margin:"t-10 x-20",pages:20,nButtons:7}),n.jsx(e,{margin:"t-10 x-20",pages:20,nButtons:6}),n.jsx(e,{margin:"t-10 x-20",pages:20,nButtons:5})]}),t=()=>n.jsx(r,{children:n.jsx(e,{margin:"t-10 x-20",pages:5})});a.__docgenInfo={description:"",methods:[],displayName:"SizesExamples"};t.__docgenInfo={description:"",methods:[],displayName:"ShortPagination"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Pagination margin="t-10 x-20" pages={20} />\r
\r
      <Pagination margin="t-10 x-20" pages={20} nButtons={8} />\r
\r
      <Pagination margin="t-10 x-20" pages={20} nButtons={7} />\r
\r
      <Pagination margin="t-10 x-20" pages={20} nButtons={6} />\r
\r
      <Pagination margin="t-10 x-20" pages={20} nButtons={5} />\r
    </ThemeDS>;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Pagination margin="t-10 x-20" pages={5} />\r
    </ThemeDS>;
}`,...t.parameters?.docs?.source}}};const g=["SizesExamples","ShortPagination"];export{t as ShortPagination,a as SizesExamples,g as __namedExportsOrder,p as default};
