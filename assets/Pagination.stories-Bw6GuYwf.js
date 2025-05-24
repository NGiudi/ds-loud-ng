import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{T as m,j as e}from"./index-DyPWuN9l.js";const x={title:"Molecules/Pagination",tags:["autodocs"],parameters:{docs:{description:{component:""}}},argTypes:{margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},nButtons:{control:{type:"number"},description:"Cantidad de botones que forman la barra de paginado. No incluye los botones de avanzar y retroceder."},onChange:{control:{type:"none"},description:"Función que se ejecuta al cambiar de página."},page:{control:{type:"number"},description:"Número de la página actual."},pages:{control:{type:"number"},description:"Cantidad total de páginas."}}},a=()=>n.jsxs(m,{children:[n.jsx(e,{margin:"t-10 x-20",pages:20}),n.jsx(e,{margin:"t-10 x-20",pages:20,nButtons:8}),n.jsx(e,{margin:"t-10 x-20",pages:20,nButtons:7}),n.jsx(e,{margin:"t-10 x-20",pages:20,nButtons:6}),n.jsx(e,{margin:"t-10 x-20",pages:20,nButtons:5})]}),t=()=>n.jsx(m,{children:n.jsx(e,{margin:"t-10 x-20",pages:5})});a.__docgenInfo={description:"",methods:[],displayName:"SizesExamples"};t.__docgenInfo={description:"",methods:[],displayName:"ShortPagination"};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,p,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Pagination margin="t-10 x-20" pages={5} />\r
    </ThemeDS>;
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const l=["SizesExamples","ShortPagination"];export{t as ShortPagination,a as SizesExamples,l as __namedExportsOrder,x as default};
