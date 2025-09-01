import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import{d as r,T as a,b as n}from"./index-BT73j9E_.js";const m={title:"Layout/Flex",component:r,tags:["autodocs"],argTypes:{children:{control:{type:"none"},description:"Contenido del componente."},direction:{control:{type:"select"},description:"Se setea la orientación del contenedor flexible.",options:["column","row"]},hAlign:{control:{type:"select"},description:"Se setea la alineación horizontal.",options:["center","end","space-around","space-between","start"]},margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},vAlign:{control:{type:"select"},description:"Se setea la alineación vertical.",options:["center","end","start"]}}},t=o=>e.jsx(a,{children:e.jsxs(r,{...o,children:[e.jsx(n,{children:"Elemento 1"}),e.jsx(n,{children:"Elemento 2"})]})});t.args={hAlign:"space-around",margin:"a-30",vAlign:"center"};const i=()=>e.jsxs(a,{children:[e.jsxs(r,{hAlign:"start",margin:"a-30",children:[e.jsx(n,{margin:"x-10",children:"Elemento 1"}),e.jsx(n,{margin:"x-10",children:"Elemento 2"})]}),e.jsxs(r,{hAlign:"space-around",margin:"b-30 x-30",children:[e.jsx(n,{margin:"x-10",children:"Elemento 1"}),e.jsx(n,{margin:"x-10",children:"Elemento 2"})]}),e.jsxs(r,{hAlign:"space-between",margin:"b-30 x-30",children:[e.jsx(n,{margin:"x-10",children:"Elemento 1"}),e.jsx(n,{margin:"x-10",children:"Elemento 2"})]}),e.jsxs(r,{hAlign:"center",margin:"b-30 x-30",children:[e.jsx(n,{margin:"x-10",children:"Elemento 1"}),e.jsx(n,{margin:"x-10",children:"Elemento 2"})]}),e.jsxs(r,{hAlign:"end",margin:"b-30 x-30",children:[e.jsx(n,{margin:"x-10",children:"Elemento 1"}),e.jsx(n,{margin:"x-10",children:"Elemento 2"})]})]});t.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"};i.__docgenInfo={description:"",methods:[],displayName:"Orientaciones"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <ThemeDS>\r
      <Flex {...args}>\r
        <Text>Elemento 1</Text>\r
        <Text>Elemento 2</Text>\r
      </Flex>\r
    </ThemeDS>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Flex hAlign="start" margin="a-30">\r
        <Text margin="x-10">Elemento 1</Text>\r
        <Text margin="x-10">Elemento 2</Text>\r
      </Flex>\r
\r
      <Flex hAlign="space-around" margin="b-30 x-30">\r
        <Text margin="x-10">Elemento 1</Text>\r
        <Text margin="x-10">Elemento 2</Text>\r
      </Flex>\r
\r
      <Flex hAlign="space-between" margin="b-30 x-30">\r
        <Text margin="x-10">Elemento 1</Text>\r
        <Text margin="x-10">Elemento 2</Text>\r
      </Flex>\r
\r
      <Flex hAlign="center" margin="b-30 x-30">\r
        <Text margin="x-10">Elemento 1</Text>\r
        <Text margin="x-10">Elemento 2</Text>\r
      </Flex>\r
\r
      <Flex hAlign="end" margin="b-30 x-30">\r
        <Text margin="x-10">Elemento 1</Text>\r
        <Text margin="x-10">Elemento 2</Text>\r
      </Flex>\r
    </ThemeDS>;
}`,...i.parameters?.docs?.source}}};const c=["DinamicExample","Orientaciones"];export{t as DinamicExample,i as Orientaciones,c as __namedExportsOrder,m as default};
