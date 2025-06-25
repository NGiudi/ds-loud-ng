import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{T as c,B as f}from"./index-CniwK52R.js";const d=()=>({createNotify:i=>{"Notification"in window?Notification.permission==="granted"?new Notification(i):Notification.permission!=="denied"&&Notification.requestPermission(s=>{s==="granted"&&new Notification(i)}):console.warn("This browser does not support desktop notification")}}),N={title:"hooks/Notification"},o=()=>{const{createNotify:t}=d(),i=()=>{t("Esta es la mejor notificación del mundo")};return e.jsx(c,{children:e.jsx(f,{onClick:i,children:"Notificar"})})};o.__docgenInfo={description:"",methods:[],displayName:"NotificationExample"};var n,r,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    createNotify
  } = useNotify();
  const handleClick = () => {
    createNotify("Esta es la mejor notificación del mundo");
  };
  return <ThemeDS>\r
      <Button onClick={handleClick}>Notificar</Button>\r
    </ThemeDS>;
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const u=["NotificationExample"];export{o as NotificationExample,u as __namedExportsOrder,N as default};
