"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[322],{"./src/components/atoms/Input/Input.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DinamicExample:()=>DinamicExample,ErrorExample:()=>ErrorExample,FormExample:()=>FormExample,Options:()=>Options,Types:()=>Types,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var formik__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const story={title:"Components/Input",component:___WEBPACK_IMPORTED_MODULE_2__.II,tags:["autodocs"],argTypes:{autoComplete:{control:{type:"string"},description:"Es igual al atributo autocomplete de html."},autoFocus:{control:{type:"string"},description:"Es igual al atributo autofocus de html."},description:{control:{type:"string"},description:"Texte descriptivo que va por debajo del label"},disabled:{control:{type:"boolean"},description:"Deshabilita el input si este valor es true."},icon:{control:{type:"string"},description:"Recibe el nombre del ícono de fontawesome."},innerRef:{control:{type:"string"},description:"Se puede pasar una variable para que haga referencia al iput."},label:{control:{type:"string"},description:"Texto que identifica sobre que se trata el input."},margin:{control:{type:"string"},description:"Se setea la distancia de los margenes."},name:{control:{type:"string"},description:"Se usa para completar los campos del formulario de formik."},onKeyPress:{control:{type:"none"},description:"Función que se ejecuta al hacer click en una tecla"},placeholder:{control:{type:"string"},description:"Es texto que va en el placeholder de html."},readOnly:{control:{type:"boolean"},description:"Es igual que el atributo readonly de html."},reference:{control:{type:"none"},description:"Es similar al innerRef pero se hace referencia al contenedor padre del input."},type:{control:{type:"select"},description:"Recibe el tipo de input que se usa.",options:["number","password","text"]}}},DinamicExample=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.gK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{dinamic_example:""},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.l0,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.II,{name:"dinamic_example",...args})})})});DinamicExample.displayName="DinamicExample";const ErrorExample=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.gK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{error_example:""},onSubmit:values=>{alert(JSON.stringify(values,null,2))},validate:values=>{const errors={};return""===values.error_example&&(errors.error_example="Campo Requerido"),errors},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.l0,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.II,{name:"error_example"})})})});ErrorExample.displayName="ErrorExample";const Options=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.gK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{options_example:""},onSubmit:values=>{alert(JSON.stringify(values,null,2))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.l0,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.II,{description:"Esta es la descripción del input",icon:"search",label:"Input with icon",name:"options_example"})})})});Options.displayName="Options";const Types=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.gK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{password_type:"",text_type:""},onSubmit:values=>{alert(JSON.stringify(values,null,2))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.l0,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.II,{label:"Text input",margin:"b-20",name:"text_type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.II,{label:"Password input",name:"password_type",type:"password"})]})})});Types.displayName="Types";const FormExample=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.gK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.s_,{padding:"a-20",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{fullName:"Nicolás Giudice",password:"password1234"},onSubmit:values=>{alert(JSON.stringify(values,null,2))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.l0,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.II,{label:"Nombre completo",margin:"b-20",name:"fullName"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.II,{label:"Contraseña",margin:"b-20",name:"password",type:"password"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.zx,{fullWidth:!0,onClick:()=>{},type:"submit",children:"Submit"})]})})})});FormExample.displayName="FormExample";const __WEBPACK_DEFAULT_EXPORT__=story;DinamicExample.parameters={...DinamicExample.parameters,docs:{...DinamicExample.parameters?.docs,source:{originalSource:'args => {\n  const values = {\n    dinamic_example: ""\n  };\n  return <ThemeDS>\r\n      <Formik initialValues={values}>\r\n        <Form>\r\n          <Input name="dinamic_example" {...args} />\r\n        </Form>\r\n      </Formik>\r\n    </ThemeDS>;\n}',...DinamicExample.parameters?.docs?.source}}},ErrorExample.parameters={...ErrorExample.parameters,docs:{...ErrorExample.parameters?.docs,source:{originalSource:'() => {\n  const values = {\n    error_example: ""\n  };\n  const handleValidate = values => {\n    const errors = {};\n    if (values.error_example === "") {\n      errors.error_example = "Campo Requerido";\n    }\n    return errors;\n  };\n  const handleSubmit = values => {\n    alert(JSON.stringify(values, null, 2));\n  };\n  return <ThemeDS>\r\n      <Formik initialValues={values} onSubmit={handleSubmit} validate={handleValidate}>\r\n        <Form>\r\n          <Input name="error_example" />\r\n        </Form>\r\n      </Formik>\r\n    </ThemeDS>;\n}',...ErrorExample.parameters?.docs?.source}}},Options.parameters={...Options.parameters,docs:{...Options.parameters?.docs,source:{originalSource:'() => {\n  const values = {\n    options_example: ""\n  };\n  const handleSubmit = values => {\n    alert(JSON.stringify(values, null, 2));\n  };\n  return <ThemeDS>\r\n      <Formik initialValues={values} onSubmit={handleSubmit}>\r\n        <Form>\r\n          <Input description="Esta es la descripción del input" icon="search" label="Input with icon" name="options_example" />\r\n        </Form>\r\n      </Formik>\r\n    </ThemeDS>;\n}',...Options.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'() => {\n  const values = {\n    password_type: "",\n    text_type: ""\n  };\n  const handleSubmit = values => {\n    alert(JSON.stringify(values, null, 2));\n  };\n  return <ThemeDS>\r\n      <Formik initialValues={values} onSubmit={handleSubmit}>\r\n        <Form>\r\n          <Input label="Text input" margin="b-20" name="text_type" />\r\n          <Input label="Password input" name="password_type" type="password" />\r\n        </Form>\r\n      </Formik>\r\n    </ThemeDS>;\n}',...Types.parameters?.docs?.source}}},FormExample.parameters={...FormExample.parameters,docs:{...FormExample.parameters?.docs,source:{originalSource:'() => {\n  return <ThemeDS>\r\n      <Panel padding="a-20">\r\n        <Formik initialValues={{\n        fullName: "Nicolás Giudice",\n        password: "password1234"\n      }} onSubmit={values => {\n        alert(JSON.stringify(values, null, 2));\n      }}>\r\n          <Form>\r\n            <Input label="Nombre completo" margin="b-20" name="fullName" />\r\n\r\n            <Input label="Contraseña" margin="b-20" name="password" type="password" />\r\n\r\n            <Button fullWidth onClick={() => {}} type="submit">\r\n              Submit\r\n            </Button>\r\n          </Form>\r\n        </Formik>\r\n      </Panel>\r\n    </ThemeDS>;\n}',...FormExample.parameters?.docs?.source}}};const __namedExportsOrder=["DinamicExample","ErrorExample","Options","Types","FormExample"];DinamicExample.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"},ErrorExample.__docgenInfo={description:"",methods:[],displayName:"ErrorExample"},Options.__docgenInfo={description:"",methods:[],displayName:"Options"},Types.__docgenInfo={description:"",methods:[],displayName:"Types"},FormExample.__docgenInfo={description:"",methods:[],displayName:"FormExample"}}}]);