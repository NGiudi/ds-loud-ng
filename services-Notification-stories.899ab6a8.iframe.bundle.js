"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[929],{"./src/services/Notification.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotificationExample:()=>NotificationExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Notification_stories});__webpack_require__("./node_modules/react/index.js");var src=__webpack_require__("./src/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NotificationExample=()=>{const{createNotify}={createNotify:message=>{"Notification"in window?"granted"===Notification.permission?new Notification(message):"denied"!==Notification.permission&&Notification.requestPermission((permission=>{"granted"===permission&&new Notification(message)})):console.warn("This browser does not support desktop notification")}};return(0,jsx_runtime.jsx)(src.VN,{children:(0,jsx_runtime.jsx)(src.$n,{onClick:()=>{createNotify("Esta es la mejor notificación del mundo")},children:"Notificar"})})},Notification_stories={title:"hooks/Notification"},__namedExportsOrder=["NotificationExample"];NotificationExample.parameters={...NotificationExample.parameters,docs:{...NotificationExample.parameters?.docs,source:{originalSource:'() => {\n  const {\n    createNotify\n  } = useNotify();\n  const handleClick = () => {\n    createNotify("Esta es la mejor notificación del mundo");\n  };\n  return <ThemeDS>\r\n      <Button onClick={handleClick}>Notificar</Button>\r\n    </ThemeDS>;\n}',...NotificationExample.parameters?.docs?.source}}}}}]);