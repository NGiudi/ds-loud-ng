"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[927],{"./src/components/molecules/StpesBar/StepsBar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DinamicExample:()=>DinamicExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Molecules/StepsBar",component:___WEBPACK_IMPORTED_MODULE_1__.bB,tags:["autodocs"],parameters:{docs:{description:{component:""}}},argTypes:{margin:{control:{type:"text"},description:"Establece la distancia de los márgenes"},size:{control:{type:"select"},description:"Esta propiedad sirve para cambiarle el tamaño del componente."},step:{control:{type:"number"},description:"Recibe el valor numerico del paso en el que se encuentra."},steps:{control:{type:"array"},description:"Se pasa un array con el nombre de los distintos steps."}}},DinamicExample=args=>{const[step,setStep]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.VN,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.bB,{...args,step}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.so,{hAlign:"end",margin:"t-40",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:()=>setStep((prev=>(prev>1&&(prev-=1),prev))),children:"Anterior"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.$n,{margin:"l-8",onClick:()=>setStep((prev=>(prev<5&&(prev+=1),prev))),children:"Siguiente"})]})]})};DinamicExample.args={steps:4};const __WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["DinamicExample"];DinamicExample.parameters={...DinamicExample.parameters,docs:{...DinamicExample.parameters?.docs,source:{originalSource:'args => {\n  const [step, setStep] = useState(3);\n  const nextStep = () => setStep(prev => {\n    if (prev < 5) prev += 1;\n    return prev;\n  });\n  const previusStep = () => setStep(prev => {\n    if (prev > 1) prev -= 1;\n    return prev;\n  });\n  return <ThemeDS>\r\n      <StepsBar {...args} step={step} />\r\n\r\n      <Flex hAlign="end" margin="t-40">\r\n        <Button onClick={previusStep}>Anterior</Button>\r\n\r\n        <Button margin="l-8" onClick={nextStep}>\r\n          Siguiente\r\n        </Button>\r\n      </Flex>\r\n    </ThemeDS>;\n}',...DinamicExample.parameters?.docs?.source}}}}}]);