"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[804],{"./src/components/atoms/Table/Table.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DinamicExample:()=>DinamicExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Components/Table",component:___WEBPACK_IMPORTED_MODULE_1__.iA,tags:["autodocs"],argTypes:{columns:{control:{type:"none"},description:"Se usa en lugar de desktopColums y mobileColumns y es para todas las dimensiones."},data:{control:{type:"none"},description:"Array de objectos que compone las filas de la tabla."},desktopColumns:{control:{type:"none"},description:"Array de columnas para pantallas más grandes. Caso no exista se usa las columnas pasadas en columns."},margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},mobileColumns:{control:{type:"none"},description:"Array de columnas para pantallas más chicas. Caso no exista se usa las columnas pasadas en columns."},name:{control:{type:"text"},description:"Nombre del atributo. Equivalente al atributo name de html."},onClick:{control:{type:"none"},description:"Función que se ejecuta al hacer click sobre una de las columnas de la tabla."}}},DinamicExample=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.iA,{...args})});DinamicExample.displayName="DinamicExample",DinamicExample.args={data:[{name:"Nicolás",last_name:"Giudice",email:"nicolas.m.giudice@gmail.com",phone:"+5491167946707",status:"active",address:"false 123"},{name:"Gustavo",last_name:"Giudice",email:"gustavo.giudice@gmail.com",phone:"+5491167946707",status:"active",address:"false 123"},{name:"Florencia",last_name:"Giudice",email:"florencia.giudice@gmail.com",phone:"+5491167946707",status:"inactive",address:"false 123"}],desktopColumns:[{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{margin:"y-10",children:`${data.name} ${data.last_name}`}),label:"Nombre",width:"15%"},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{children:data.email}),label:"Email",width:"25%"},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{children:data.phone}),label:"Teléfono",width:"15%"},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{children:data.address}),label:"Dirección",width:"20%"},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{children:data.status}),label:"Estado",width:"10%"}],mobileColumns:[{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{weight:"semibold",children:"Nombre"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{margin:"y-10",children:`${data.name} ${data.last_name}`})]})},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"inline-block",width:"50%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{weight:"semibold",children:"Email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{children:data.email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"inline-block",width:"50%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{weight:"semibold",children:"Teléfono"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{children:data.phone})]})]})},{content:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"inline-block",width:"50%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{weight:"semibold",children:"Dirección"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{children:data.address})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"inline-block",width:"50%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{weight:"semibold",children:"Estado"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{children:data.status})]})]})}]};const __WEBPACK_DEFAULT_EXPORT__=meta;DinamicExample.parameters={...DinamicExample.parameters,docs:{...DinamicExample.parameters?.docs,source:{originalSource:"args => {\n  return <ThemeDS>\r\n      <Table {...args} />\r\n    </ThemeDS>;\n}",...DinamicExample.parameters?.docs?.source}}};const __namedExportsOrder=["DinamicExample"];DinamicExample.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"}}}]);