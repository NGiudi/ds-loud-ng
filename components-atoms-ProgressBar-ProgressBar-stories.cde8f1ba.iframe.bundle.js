"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[724],{"./src/components/atoms/ProgressBar/ProgressBar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DinamicExample:()=>DinamicExample,Types:()=>Types,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,useExample:()=>useExample});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const story={title:"Components/ProgressBar",component:___WEBPACK_IMPORTED_MODULE_1__.ko,tags:["autodocs"],parameters:{docs:{description:{component:""}}},argTypes:{borderRound:{control:{type:"boolean"},description:"Si se pasa esta propiedad se redondea los bordes."},margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},noShowAnimationOnFirstLoad:{control:{type:"boolean"},description:"Si esta opción es true no se muestra la animación."},onFinish:{control:!1,description:"Se pasa una función que se ejecuta al terminar la animación."},size:{control:{type:"select"},description:"Modifica el alto de la progressBar y el border radius.",options:["sm","md","lg"]},step:{control:{type:"number"},description:"Recibe el valor numerico del paso en el que se encuentra."},stepTime:{control:{type:"number"},description:"Se setea el tiempo que pasa en el incremente o decremento de una centecima de la barra."},steps:{control:{type:"number"},description:"Recibe la cantidad total de pasos para completar la barra. La cantidad mínima de steps es 1, si por alguna razón se pasa un valor menor se setea automáticamente a 1."}}},DinamicExample=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.ko,{step:2,steps:5})});DinamicExample.displayName="DinamicExample";const Types=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.gK,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.ko,{margin:"b-20",noShowAnimationOnFirstLoad:!0,step:2,steps:5}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.ko,{borderRound:!0,step:2,steps:5})]});Types.displayName="Types";const useExample=()=>{const[step,setStep]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.gK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{margin:"30px auto",width:"90%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.ko,{step,stepTime:5,steps:5}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.kC,{hAlign:"end",margin:"t-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.zx,{margin:"r-8",onClick:()=>setStep((prev=>(prev>0&&(prev-=1),prev))),children:"decrement"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:()=>setStep((prev=>(prev<5&&(prev+=1),prev))),children:"increment"})]})]})})};useExample.displayName="useExample";const __WEBPACK_DEFAULT_EXPORT__=story;DinamicExample.parameters={...DinamicExample.parameters,docs:{...DinamicExample.parameters?.docs,source:{originalSource:"args => {\n  return <ThemeDS>\r\n      <ProgressBar step={2} steps={5} />\r\n    </ThemeDS>;\n}",...DinamicExample.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'() => {\n  return <ThemeDS>\r\n      <ProgressBar margin="b-20" noShowAnimationOnFirstLoad step={2} steps={5} />\r\n\r\n      <ProgressBar borderRound step={2} steps={5} />\r\n    </ThemeDS>;\n}',...Types.parameters?.docs?.source}}},useExample.parameters={...useExample.parameters,docs:{...useExample.parameters?.docs,source:{originalSource:'() => {\n  const [step, setStep] = useState(3);\n  const increment = () => setStep(prev => {\n    if (prev < 5) prev += 1;\n    return prev;\n  });\n  const decrement = () => setStep(prev => {\n    if (prev > 0) prev -= 1;\n    return prev;\n  });\n  return <ThemeDS>\r\n      <div style={{\n      margin: "30px auto",\n      width: "90%"\n    }}>\r\n        <ProgressBar step={step} stepTime={5} steps={5} />\r\n\r\n        <Flex hAlign="end" margin="t-10">\r\n          <Button margin="r-8" onClick={decrement}>\r\n            decrement\r\n          </Button>\r\n\r\n          <Button onClick={increment}>increment</Button>\r\n        </Flex>\r\n      </div>\r\n    </ThemeDS>;\n}',...useExample.parameters?.docs?.source}}};const __namedExportsOrder=["DinamicExample","Types","useExample"];DinamicExample.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"},Types.__docgenInfo={description:"",methods:[],displayName:"Types"},useExample.__docgenInfo={description:"",methods:[],displayName:"useExample"}}}]);