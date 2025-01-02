"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[286],{"./src/components/atoms/Table/Table.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DinamicExample:()=>DinamicExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_nicol_OneDrive_Documentos_GitHub_ds_loud_ng_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),___WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/index.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={argTypes:{columns:{control:{type:"none"},description:"Se usa en lugar de desktopColums y mobileColumns y es para todas las dimensiones."},data:{control:{type:"none"},description:"Array de objectos que compone las filas de la tabla."},desktopColumns:{control:{type:"none"},description:"Array de columnas para pantallas más grandes. Caso no exista se usa las columnas pasadas en columns."},margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},mobileColumns:{control:{type:"none"},description:"Array de columnas para pantallas más chicas. Caso no exista se usa las columnas pasadas en columns."},name:{control:{type:"text"},description:"Nombre del atributo. Equivalente al atributo name de html."},onClick:{control:{type:"none"},description:"Función que se ejecuta al hacer click sobre una de las columnas de la tabla."}},component:___WEBPACK_IMPORTED_MODULE_1__.XI,parameters:{status:{type:"stable"}},tags:["autodocs"],title:"Components/Table"},DinamicExample=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.VN,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.XI,(0,C_Users_nicol_OneDrive_Documentos_GitHub_ds_loud_ng_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)({},args))});DinamicExample.args={data:[{name:"Nicolás",last_name:"Giudice",email:"nicolas.m.giudice@gmail.com",phone:"+5491167946707",status:"active",address:"false 123"},{name:"Gustavo",last_name:"Giudice",email:"gustavo.giudice@gmail.com",phone:"+5491167946707",status:"active",address:"false 123"},{name:"Florencia",last_name:"Giudice",email:"florencia.giudice@gmail.com",phone:"+5491167946707",status:"inactive",address:"false 123"}],desktopColumns:[{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{margin:"y-10",children:"".concat(data.name," ").concat(data.last_name)}),label:"Nombre",width:"15%"},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{children:data.email}),label:"Email",width:"25%"},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{children:data.phone}),label:"Teléfono",width:"15%"},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{children:data.address}),label:"Dirección",width:"20%"},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{children:data.status}),label:"Estado",width:"10%"}],mobileColumns:[{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{type:"bodySemibold",children:"Nombre"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{margin:"y-10",children:"".concat(data.name," ").concat(data.last_name)})]})},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"inline-block",width:"50%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{type:"bodySemibold",children:"Email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{children:data.email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"inline-block",width:"50%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{type:"bodySemibold",children:"Teléfono"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{children:data.phone})]})]})},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"inline-block",width:"50%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{type:"bodySemibold",children:"Dirección"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{children:data.address})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"inline-block",width:"50%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{type:"bodySemibold",children:"Estado"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.EY,{children:data.status})]})]})}]};const __WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["DinamicExample"];DinamicExample.parameters={...DinamicExample.parameters,docs:{...DinamicExample.parameters?.docs,source:{originalSource:"args => {\n  return <ThemeDS>\r\n      <Table {...args} />\r\n    </ThemeDS>;\n}",...DinamicExample.parameters?.docs?.source}}}}}]);