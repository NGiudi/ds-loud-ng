import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import{h as i,T as o,F as s,a as l,d,B as m}from"./index-rXSW0tOt.js";const x={argTypes:{description:{description:"Una descripción adicional o información sobre el propósito o la función del componente."},disabled:{description:"Indica si el componente está deshabilitado o no."},id:{description:"Identificador único del componente."},label:{description:"Texto que describe el propósito o la función del componente."},margin:{description:"Se setea la distancia de los margenes."},name:{description:"Nombre del componente utilizado en la manipulación de datos o en la referencia a este."},rows:{description:"Número de filas visibles en un componente de entrada de texto multilínea."}},component:i,parameters:{status:{type:"stable"}},tags:["autodocs"],title:"Components/TextArea"},n=()=>{const a={description:""},t=r=>{alert(JSON.stringify(r,null,2))};return e.jsx(o,{children:e.jsx(s,{initialValues:a,onSubmit:t,children:e.jsxs(l,{children:[e.jsx(i,{label:"TextArea label",name:"description"}),e.jsx(d,{hAlign:"end",margin:"t-16",children:e.jsx(m,{type:"submit",children:"Guardar"})})]})})})};n.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const b=["DinamicExample"];export{n as DinamicExample,b as __namedExportsOrder,x as default};
