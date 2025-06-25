import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{h as r,T as d,F as m,a as c,d as p,B as u}from"./index-BN2RcUVK.js";const f={argTypes:{description:{description:"Una descripción adicional o información sobre el propósito o la función del componente."},disabled:{description:"Indica si el componente está deshabilitado o no."},id:{description:"Identificador único del componente."},label:{description:"Texto que describe el propósito o la función del componente."},margin:{description:"Se setea la distancia de los margenes."},name:{description:"Nombre del componente utilizado en la manipulación de datos o en la referencia a este."},rows:{description:"Número de filas visibles en un componente de entrada de texto multilínea."}},component:r,parameters:{status:{type:"stable"}},tags:["autodocs"],title:"Components/TextArea"},n=()=>{const o={description:""},s=l=>{alert(JSON.stringify(l,null,2))};return e.jsx(d,{children:e.jsx(m,{initialValues:o,onSubmit:s,children:e.jsxs(c,{children:[e.jsx(r,{label:"TextArea label",name:"description"}),e.jsx(p,{hAlign:"end",margin:"t-16",children:e.jsx(u,{type:"submit",children:"Guardar"})})]})})})};n.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"};var i,a,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const values = {
    description: ""
  };
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };
  return <ThemeDS>\r
      <Formik initialValues={values} onSubmit={handleSubmit}>\r
        <Form>\r
          <TextArea label="TextArea label" name="description" />\r
\r
          <Flex hAlign="end" margin="t-16">\r
            <Button type="submit">Guardar</Button>\r
          </Flex>\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(t=(a=n.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const g=["DinamicExample"];export{n as DinamicExample,g as __namedExportsOrder,f as default};
