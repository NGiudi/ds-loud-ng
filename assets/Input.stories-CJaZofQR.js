import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BCtMShv3.js";import{I as n,T as m,F as c,a as u,P as k,B as O}from"./index-B7CIzq1-.js";const C={argTypes:{autoComplete:{control:{type:"text"},description:"Es igual al atributo autocomplete de html."},autoFocus:{control:{type:"text"},description:"Es igual al atributo autofocus de html."},description:{control:{type:"text"},description:"Texte descriptivo que va por debajo del label"},disabled:{control:{type:"boolean"},description:"Deshabilita el input si este valor es true."},icon:{control:{type:"text"},description:"Recibe el nombre del ícono de fontawesome."},innerRef:{control:{type:"text"},description:"Se puede pasar una variable para que haga referencia al iput."},label:{control:{type:"text"},description:"Texto que identifica sobre que se trata el input."},margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},name:{control:{type:"text"},description:"Se usa para completar los campos del formulario de formik."},onKeyPress:{control:{type:"none"},description:"Función que se ejecuta al hacer click en una tecla"},placeholder:{control:{type:"text"},description:"Es texto que va en el placeholder de html."},readOnly:{control:{type:"boolean"},description:"Es igual que el atributo readonly de html."},reference:{control:{type:"none"},description:"Es similar al innerRef pero se hace referencia al contenedor padre del input."},type:{control:{type:"select"},description:"Recibe el tipo de input que se usa.",options:["number","password","text"]}},component:n,parameters:{status:{type:"stable"}},tags:["autodocs"],title:"Components/Input"},o=r=>{const t={dinamic_example:""};return e.jsx(m,{children:e.jsx(c,{initialValues:t,children:e.jsx(u,{children:e.jsx(n,{name:"dinamic_example",...r})})})})},s=()=>{const r={error_example:""},t=d=>{const x={};return d.error_example===""&&(x.error_example="Campo Requerido"),x},a=d=>{alert(JSON.stringify(d,null,2))};return e.jsx(m,{children:e.jsx(c,{initialValues:r,onSubmit:a,validate:t,children:e.jsx(u,{children:e.jsx(n,{name:"error_example"})})})})},i=()=>{const r={options_example:""},t=a=>{alert(JSON.stringify(a,null,2))};return e.jsx(m,{children:e.jsx(c,{initialValues:r,onSubmit:t,children:e.jsx(u,{children:e.jsx(n,{description:"Esta es la descripción del input",icon:"search",label:"Input with icon",name:"options_example"})})})})},l=()=>{const r={password_type:"",text_type:""},t=a=>{alert(JSON.stringify(a,null,2))};return e.jsx(m,{children:e.jsx(c,{initialValues:r,onSubmit:t,children:e.jsxs(u,{children:[e.jsx(n,{label:"Text input",margin:"b-20",name:"text_type"}),e.jsx(n,{label:"Password input",name:"password_type",type:"password"})]})})})},p=()=>e.jsx(m,{children:e.jsx(k,{padding:"a-20",children:e.jsx(c,{initialValues:{fullName:"Nicolás Giudice",password:"password1234"},onSubmit:r=>{alert(JSON.stringify(r,null,2))},children:e.jsxs(u,{children:[e.jsx(n,{label:"Nombre completo",margin:"b-20",name:"fullName"}),e.jsx(n,{label:"Contraseña",margin:"b-20",name:"password",type:"password"}),e.jsx(O,{fullWidth:!0,onClick:()=>{},type:"submit",children:"Submit"})]})})})});o.__docgenInfo={description:"",methods:[],displayName:"Model"};s.__docgenInfo={description:"",methods:[],displayName:"ErrorExample"};i.__docgenInfo={description:"",methods:[],displayName:"Options"};l.__docgenInfo={description:"",methods:[],displayName:"Types"};p.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var h,b,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const values = {
    dinamic_example: ""
  };
  return <ThemeDS>\r
      <Formik initialValues={values}>\r
        <Form>\r
          <Input name="dinamic_example" {...args} />\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,g,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const values = {
    error_example: ""
  };
  const handleValidate = values => {
    const errors = {};
    if (values.error_example === "") {
      errors.error_example = "Campo Requerido";
    }
    return errors;
  };
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };
  return <ThemeDS>\r
      <Formik initialValues={values} onSubmit={handleSubmit} validate={handleValidate}>\r
        <Form>\r
          <Input name="error_example" />\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var f,v,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const values = {
    options_example: ""
  };
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };
  return <ThemeDS>\r
      <Formik initialValues={values} onSubmit={handleSubmit}>\r
        <Form>\r
          <Input description="Esta es la descripción del input" icon="search" label="Input with icon" name="options_example" />\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var F,N,w;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const values = {
    password_type: "",
    text_type: ""
  };
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };
  return <ThemeDS>\r
      <Formik initialValues={values} onSubmit={handleSubmit}>\r
        <Form>\r
          <Input label="Text input" margin="b-20" name="text_type" />\r
          <Input label="Password input" name="password_type" type="password" />\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(w=(N=l.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var T,E,I;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Panel padding="a-20">\r
        <Formik initialValues={{
        fullName: "Nicolás Giudice",
        password: "password1234"
      }} onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}>\r
          <Form>\r
            <Input label="Nombre completo" margin="b-20" name="fullName" />\r
\r
            <Input label="Contraseña" margin="b-20" name="password" type="password" />\r
\r
            <Button fullWidth onClick={() => {}} type="submit">\r
              Submit\r
            </Button>\r
          </Form>\r
        </Formik>\r
      </Panel>\r
    </ThemeDS>;
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const J=["Model","ErrorExample","Options","Types","FormExample"];export{s as ErrorExample,p as FormExample,o as Model,i as Options,l as Types,J as __namedExportsOrder,C as default};
