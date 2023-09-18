"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[379],{"./src/components/atoms/Modal/Modal.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConfirmationExample:()=>ConfirmationExample,EmailExample:()=>EmailExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={argTypes:{cancelButton:{control:{type:"text"},description:"Props que se pasan al botón de cancelar."},children:{control:{type:"none"},description:"Contenido del modal."},confirmButton:{control:{type:"text"},description:"Props que se pasan al botón de cancelar."},onClose:{control:{type:"none"},description:"Función que se ejecuta al apretar en cancelar o al apretar el botón para cerrar el modal."},padding:{control:{type:"text"},description:"Se setea la distancia de los paddings."},show:{control:{type:"boolean"},description:"Controla la visualización del modal. Si es true muestra el modal."},width:{control:{type:"text"},description:"Se puede setear el ancho del modal. Caso la pantalla sea menor al valor seteado, el modal se adapta a la pantalla."}},component:___WEBPACK_IMPORTED_MODULE_1__.u_,tags:["autodocs"],title:"Components/Modal"},ConfirmationExample=()=>{const[showModal,setShowModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleShowModal=()=>{setShowModal((prev=>!prev))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.gK,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:handleShowModal,children:"Mostrar Modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.u_,{cancelButton:{text:"No, cancelar"},confirmButton:{text:"Sí, avanzar"},onClose:handleShowModal,show:showModal,width:"600px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{margin:"b-20",type:"title",weight:"bold",children:"¿Quieres activar la cuenta X?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{margin:"b-32",children:"Para activar una cuenta, debe tener completa la información fiscal."})]})]})};ConfirmationExample.displayName="ConfirmationExample";const EmailExample=()=>{const[showModal,setShowModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleShowModal=()=>{setShowModal((prev=>!prev))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.gK,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:handleShowModal,children:"Mostrar Modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.u_,{cancelButton:{hide:!0,text:"No, cancelar"},confirmButton:{text:"Entendido"},onClose:handleShowModal,show:showModal,width:"540px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{margin:"b-20",type:"title",weight:"bold",children:"Confirma tu email para avanzar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.xv,{margin:"b-32",children:"Verifica tu cuenta desde el email que te enviamos. No olvides revisar “Correo no deseado” y “Spam”."})]})]})};EmailExample.displayName="EmailExample";const __WEBPACK_DEFAULT_EXPORT__=meta;ConfirmationExample.parameters={...ConfirmationExample.parameters,docs:{...ConfirmationExample.parameters?.docs,source:{originalSource:'() => {\n  const [showModal, setShowModal] = useState(false);\n  const handleShowModal = () => {\n    setShowModal(prev => !prev);\n  };\n  return <ThemeDS>\r\n      <Button onClick={handleShowModal}>Mostrar Modal</Button>\r\n\r\n      <Modal cancelButton={{\n      text: "No, cancelar"\n    }} confirmButton={{\n      text: "Sí, avanzar"\n    }} onClose={handleShowModal} show={showModal} width="600px">\r\n        <Text margin="b-20" type="title" weight="bold">\r\n          ¿Quieres activar la cuenta X?\r\n        </Text>\r\n\r\n        <Text margin="b-32">\r\n          Para activar una cuenta, debe tener completa la información fiscal.\r\n        </Text>\r\n      </Modal>\r\n    </ThemeDS>;\n}',...ConfirmationExample.parameters?.docs?.source}}},EmailExample.parameters={...EmailExample.parameters,docs:{...EmailExample.parameters?.docs,source:{originalSource:'() => {\n  const [showModal, setShowModal] = useState(false);\n  const handleShowModal = () => {\n    setShowModal(prev => !prev);\n  };\n  return <ThemeDS>\r\n      <Button onClick={handleShowModal}>Mostrar Modal</Button>\r\n\r\n      <Modal cancelButton={{\n      hide: true,\n      text: "No, cancelar"\n    }} confirmButton={{\n      text: "Entendido"\n    }} onClose={handleShowModal} show={showModal} width="540px">\r\n        <Text margin="b-20" type="title" weight="bold">\r\n          Confirma tu email para avanzar\r\n        </Text>\r\n\r\n        <Text margin="b-32">\r\n          Verifica tu cuenta desde el email que te enviamos. No olvides revisar\r\n          “Correo no deseado” y “Spam”.\r\n        </Text>\r\n      </Modal>\r\n    </ThemeDS>;\n}',...EmailExample.parameters?.docs?.source}}};const __namedExportsOrder=["ConfirmationExample","EmailExample"];ConfirmationExample.__docgenInfo={description:"",methods:[],displayName:"ConfirmationExample"},EmailExample.__docgenInfo={description:"",methods:[],displayName:"EmailExample"}}}]);