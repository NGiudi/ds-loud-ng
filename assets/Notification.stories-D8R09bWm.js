import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import{T as r,B as a}from"./index-rXSW0tOt.js";const s=()=>({createNotify:i=>{"Notification"in window?Notification.permission==="granted"?new Notification(i):Notification.permission!=="denied"&&Notification.requestPermission(n=>{n==="granted"&&new Notification(i)}):console.warn("This browser does not support desktop notification")}}),m={title:"hooks/Notification"},o=()=>{const{createNotify:t}=s(),i=()=>{t("Esta es la mejor notificación del mundo")};return e.jsx(r,{children:e.jsx(a,{onClick:i,children:"Notificar"})})};o.__docgenInfo={description:"",methods:[],displayName:"NotificationExample"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    createNotify
  } = useNotify();
  const handleClick = () => {
    createNotify("Esta es la mejor notificación del mundo");
  };
  return <ThemeDS>\r
      <Button onClick={handleClick}>Notificar</Button>\r
    </ThemeDS>;
}`,...o.parameters?.docs?.source}}};const l=["NotificationExample"];export{o as NotificationExample,l as __namedExportsOrder,m as default};
