import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BCtMShv3.js";import{D as s,T as m,F as i,a as l,d as p,B as c}from"./index-B7CIzq1-.js";const g={argTypes:{},component:s,parameters:{status:{type:"beta"}},tags:["autodocs"],title:"Molecules/Dropzone"},r=()=>e.jsx(m,{children:e.jsx(i,{initialValues:{files:[]},onSubmit:t=>{console.log(t)},children:e.jsxs(l,{children:[e.jsx(s,{accept:["image"],margin:"a-20",maxSize:20971520,maxCount:3,name:"files"}),e.jsx(p,{margin:"x-20",hAlign:"end",children:e.jsx(c,{margin:"b-32",type:"submit",children:"Guardar"})})]})})});r.__docgenInfo={description:"",methods:[],displayName:"Example"};var n,a,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["Example"];export{r as Example,h as __namedExportsOrder,g as default};
