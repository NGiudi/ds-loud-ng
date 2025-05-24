import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{P as n,T as l,b as s}from"./index-DyPWuN9l.js";import{f as c}from"./index-D_Ss_HUe.js";const b={argTypes:{align:{control:{type:"none"},description:"Recibe un string para alinear el contenido dentro del panel."},children:{control:{type:"none"},description:"Contenido del panel"},margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},onSizeH:{control:{type:"none"},description:"Función que se ejecuta al modificar el alto del panel."},padding:{control:{type:"text"},description:"Se setea la distancia de los paddings."},type:{control:{type:"select"},description:"Cambia el color de fondo y del texto.",options:["error","info","neutral","success","warning"]}},component:n,parameters:{status:{type:"beta"}},tags:["autodocs"],title:"Components/Panel"},t=u=>e.jsx(l,{children:e.jsx(n,{...u})});t.args={children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",onSizeH:c(),type:"neutral"};const r=()=>e.jsxs(l,{children:[e.jsx(n,{margin:"b-12",children:e.jsx(s,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including Lorem Ipsum."})}),e.jsx(n,{margin:"b-12",type:"error",children:e.jsx(s,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})}),e.jsx(n,{margin:"b-12",type:"info",children:e.jsx(s,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})}),e.jsx(n,{margin:"b-12",type:"success",children:e.jsx(s,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only centuries, but also the leap into electronic typesetting, remaining remaining remaining essentially unchanged. It was popularised in the the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})}),e.jsx(n,{margin:"b-12",type:"warning",children:e.jsx(s,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})]});t.__docgenInfo={description:"",methods:[],displayName:"Model"};r.__docgenInfo={description:"",methods:[],displayName:"Types"};var i,a,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <ThemeDS>\r
      <Panel {...args} />\r
    </ThemeDS>;
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Panel margin="b-12">\r
        <Text>\r
          Lorem Ipsum is simply dummy text of the printing and typesetting\r
          industry. Lorem Ipsum has been the industry standard dummy text ever\r
          since the 1500s, when an unknown printer took a galley of type and\r
          scrambled it to make a type specimen book. It has survived not only\r
          centuries, but also the leap into electronic typesetting, remaining\r
          essentially unchanged. It was popularised in the 1960s with the\r
          Letraset sheets containing Lorem Ipsum passages, and more recently\r
          with desktop publishing software like Aldus PageMaker including Lorem\r
          Ipsum.\r
        </Text>\r
      </Panel>\r
\r
      <Panel margin="b-12" type="error">\r
        <Text>\r
          Lorem Ipsum is simply dummy text of the printing and typesetting\r
          industry. Lorem Ipsum has been the industry standard dummy text ever\r
          since the 1500s, when an unknown printer took a galley of type and\r
          scrambled it to make a type specimen book. It has survived not only\r
          centuries, but also the leap into electronic typesetting, remaining\r
          essentially unchanged. It was popularised in the 1960s with the of\r
          Letraset sheets containing Lorem Ipsum passages, and more recently\r
          with desktop publishing software like Aldus PageMaker including\r
          versions of Lorem Ipsum.\r
        </Text>\r
      </Panel>\r
\r
      <Panel margin="b-12" type="info">\r
        <Text>\r
          Lorem Ipsum is simply dummy text of the printing and typesetting\r
          industry.\r
        </Text>\r
      </Panel>\r
\r
      <Panel margin="b-12" type="success">\r
        <Text>\r
          Lorem Ipsum is simply dummy text of the printing and typesetting\r
          industry. Lorem Ipsum has been the industry standard dummy text ever\r
          since the 1500s, when an unknown printer took a galley of type and\r
          scrambled it to make a type specimen book. It has survived not only\r
          centuries, but also the leap into electronic typesetting, remaining\r
          remaining remaining essentially unchanged. It was popularised in the\r
          the release of Letraset sheets containing Lorem Ipsum passages, and\r
          more recently with desktop publishing software like Aldus PageMaker\r
          including versions of Lorem Ipsum.\r
        </Text>\r
      </Panel>\r
\r
      <Panel margin="b-12" type="warning">\r
        <Text>\r
          Lorem Ipsum is simply dummy text of the printing and typesetting\r
          industry. Lorem Ipsum has been the industry standard dummy text ever\r
          since the 1500s, when an unknown printer took a galley of type and\r
          scrambled it to make a type specimen book. It has survived not only\r
          five centuries, but also the leap into electronic typesetting,\r
          remaining essentially unchanged. It was popularised in the 1960s with\r
          the release of Letraset sheets containing Lorem Ipsum passages, and\r
          more recently with desktop publishing software like Aldus PageMaker\r
          including versions of Lorem Ipsum.\r
        </Text>\r
      </Panel>\r
    </ThemeDS>;
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const f=["Model","Types"];export{t as Model,r as Types,f as __namedExportsOrder,b as default};
