import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import{D as n,T as o,F as s,a as t,d as m,B as i}from"./index-rXSW0tOt.js";const u={argTypes:{},component:n,parameters:{status:{type:"beta"}},tags:["autodocs"],title:"Molecules/Dropzone"},r=()=>e.jsx(o,{children:e.jsx(s,{initialValues:{files:[]},onSubmit:a=>{console.log(a)},children:e.jsxs(t,{children:[e.jsx(n,{accept:["image"],margin:"a-20",maxSize:20971520,maxCount:3,name:"files"}),e.jsx(m,{margin:"x-20",hAlign:"end",children:e.jsx(i,{margin:"b-32",type:"submit",children:"Guardar"})})]})})});r.__docgenInfo={description:"",methods:[],displayName:"Example"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Formik initialValues={{
      files: []
    }} onSubmit={values => {
      console.log(values);
    }}>\r
        <Form>\r
          <Dropzone accept={["image"]} margin="a-20" maxSize={20971520} maxCount={3} name="files" />\r
\r
          <Flex margin="x-20" hAlign="end">\r
            <Button margin="b-32" type="submit">\r
              Guardar\r
            </Button>\r
          </Flex>\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...r.parameters?.docs?.source}}};const x=["Example"];export{r as Example,x as __namedExportsOrder,u as default};
