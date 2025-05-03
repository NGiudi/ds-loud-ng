import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{U as h,e as f,f as g}from"./index-CzRUusl6.js";import{T as n,b as a,C as r,F as p,a as b,B as y}from"./index-D1HlZVD7.js";import"./iframe-V2Lb3gd2.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const x=()=>e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(a,{margin:"b-16",type:"pageTitle",children:"Checkbox"}),e.jsx(a,{children:"Los componentes checkbox son elementos fundamentales, diseñados para ofrecer una experiencia de usuario intuitiva y accesible en aplicaciones y sitios web. Los checkboxes permiten a los usuarios realizar selecciones binarias, lo que significa que pueden elegir entre dos estados claramente definidos, como marcado o desmarcado."}),e.jsx(f,{}),e.jsx(a,{margin:"b-16",type:"title",children:"Características"}),e.jsxs(a,{margin:"b-16",children:[e.jsxs(a,{as:"span",weight:"semibold",children:["Etiqueta Descriptiva:"," "]}),"Cada checkbox generalmente se asocia con una etiqueta descriptiva que indica su propósito o la opción que representa. Esta etiqueta aumenta la comprensión del usuario."]}),e.jsxs(a,{margin:"b-40",children:[e.jsxs(a,{as:"span",weight:"semibold",children:["Interacción Visual:"," "]}),"Los checkboxes suelen representarse como una pequeña casilla que puede estar marcada (con una marca de verificación) o desmarcada (sin marca de verificación). Los usuarios pueden cambiar su estado haciendo clic o tocando la casilla."]}),e.jsx(a,{type:"title",children:"Propiedades"}),e.jsx(g,{})]})});x.__docgenInfo={description:"",methods:[],displayName:"CheckboxDocs"};const T={argTypes:{description:{control:{type:"text"},description:"Texto más detallado que describe la funcionalidad y contiene otras observaciones relevantes."},id:{control:{type:"text"},description:"Identificador único para el componente"},label:{control:{type:"text"},description:"Un breve texto que describe la funcionalidad del checkbox",table:{defaultValue:{summary:"-"}}},margin:{control:{type:"text"},description:"Establece la distancia de los márgenes"},name:{control:{type:"text"},description:"Nombre identificador del componente para su uso con Formik",table:{defaultValue:{summary:"-"}}}},component:r,parameters:{docs:{page:x},status:{type:"stable"}},tags:["autodocs"],title:"Components/Checkbox"},s=o=>e.jsx(n,{children:e.jsx(p,{initialValues:{email:!1},children:e.jsx(b,{children:e.jsx(r,{...o})})})});s.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"story-checkbox",label:"Lorem ipsum",margin:"a-16",name:"email"};const i=()=>e.jsx(n,{children:e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(p,{initialValues:{email:!1,recommendations:!0},onSubmit:o=>{alert(JSON.stringify(o))},children:e.jsxs(b,{children:[e.jsx(r,{description:"Mantente al tanto de las últimas noticias, ofertas y actualizaciones de nuestra marca al marcar esta casilla. Recibirás correos electrónicos periódicos con información relevante sobre nuestros productos y servicios.",id:"checkbox-form-1",label:"Suscribirse a boletines informativos",margin:"b-24",name:"email"}),e.jsx(r,{description:"Al marcar esta casilla, nos das permiso para analizar tus compras anteriores y preferencias de navegación. De esta forma, podremos ofrecerte sugerencias de productos y servicios que se adapten a tus gustos y necesidades.",disabled:!0,id:"checkbox-form-2",label:"Recibe recomendaciones personalizadas",name:"recommendations"}),e.jsx(y,{margin:"t-20",type:"submit",children:"Submit"})]})})})});s.__docgenInfo={description:"",methods:[],displayName:"Model"};i.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var t,c,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return <ThemeDS>\r
      <Formik initialValues={{
      email: false
    }}>\r
        <Form>\r
          <Checkbox {...args} />\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <div style={{
      maxWidth: "500px"
    }}>\r
        <Formik initialValues={{
        email: false,
        recommendations: true
      }} onSubmit={values => {
        alert(JSON.stringify(values));
      }}>\r
          <Form>\r
            <Checkbox description="Mantente al tanto de las últimas noticias, ofertas y actualizaciones de nuestra marca al marcar esta casilla. Recibirás correos electrónicos periódicos con información relevante sobre nuestros productos y servicios." id="checkbox-form-1" label="Suscribirse a boletines informativos" margin="b-24" name="email" />\r
\r
            <Checkbox description="Al marcar esta casilla, nos das permiso para analizar tus compras anteriores y preferencias de navegación. De esta forma, podremos ofrecerte sugerencias de productos y servicios que se adapten a tus gustos y necesidades." disabled id="checkbox-form-2" label="Recibe recomendaciones personalizadas" name="recommendations" />\r
\r
            <Button margin="t-20" type="submit">\r
              Submit\r
            </Button>\r
          </Form>\r
        </Formik>\r
      </div>\r
    </ThemeDS>;
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const E=["Model","FormExample"];export{i as FormExample,s as Model,E as __namedExportsOrder,T as default};
