import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-0yr9KlQE.js";import{M as i,T as c,B as m,b as t}from"./index-BT73j9E_.js";const x={argTypes:{cancelButton:{control:{type:"text"},description:"Props que se pasan al botón de cancelar."},children:{control:{type:"none"},description:"Contenido del modal."},confirmButton:{control:{type:"text"},description:"Props que se pasan al botón de cancelar."},onClose:{control:{type:"none"},description:"Función que se ejecuta al apretar en cancelar o al apretar el botón para cerrar el modal."},padding:{control:{type:"text"},description:"Se setea la distancia de los paddings."},show:{control:{type:"boolean"},description:"Controla la visualización del modal. Si es true muestra el modal."},width:{control:{type:"text"},description:"Se puede setear el ancho del modal. Caso la pantalla sea menor al valor seteado, el modal se adapta a la pantalla."}},component:i,parameters:{status:{type:"stable"}},tags:["autodocs"],title:"Components/Modal"},o=()=>{const[r,l]=d.useState(!1),a=()=>{l(s=>!s)};return e.jsxs(c,{children:[e.jsx(m,{onClick:a,children:"Mostrar Modal"}),e.jsxs(i,{cancelButton:{onClick:()=>{},text:"No, cancelar"},confirmButton:{onClick:()=>{},text:"Sí, avanzar"},onClose:a,show:r,width:"600px",children:[e.jsx(t,{margin:"b-20",type:"title",weight:"bold",children:"¿Quieres activar la cuenta X?"}),e.jsx(t,{margin:"b-32",children:"Para activar una cuenta, debe tener completa la información fiscal."})]})]})},n=()=>{const[r,l]=d.useState(!1),a=()=>{l(s=>!s)};return e.jsxs(c,{children:[e.jsx(m,{onClick:a,children:"Mostrar Modal"}),e.jsxs(i,{cancelButton:{hide:!0,text:"No, cancelar"},confirmButton:{text:"Entendido"},onClose:a,show:r,width:"540px",children:[e.jsx(t,{margin:"b-20",type:"title",weight:"bold",children:"Confirma tu email para avanzar"}),e.jsx(t,{margin:"b-32",children:"Verifica tu cuenta desde el email que te enviamos. No olvides revisar “Correo no deseado” y “Spam”."})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"ConfirmationExample"};n.__docgenInfo={description:"",methods:[],displayName:"EmailExample"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(prev => !prev);
  };
  return <ThemeDS>\r
      <Button onClick={handleShowModal}>Mostrar Modal</Button>\r
\r
      <Modal cancelButton={{
      onClick: () => {},
      text: "No, cancelar"
    }} confirmButton={{
      onClick: () => {},
      text: "Sí, avanzar"
    }} onClose={handleShowModal} show={showModal} width="600px">\r
        <Text margin="b-20" type="title" weight="bold">\r
          ¿Quieres activar la cuenta X?\r
        </Text>\r
\r
        <Text margin="b-32">\r
          Para activar una cuenta, debe tener completa la información fiscal.\r
        </Text>\r
      </Modal>\r
    </ThemeDS>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(prev => !prev);
  };
  return <ThemeDS>\r
      <Button onClick={handleShowModal}>Mostrar Modal</Button>\r
\r
      <Modal cancelButton={{
      hide: true,
      text: "No, cancelar"
    }} confirmButton={{
      text: "Entendido"
    }} onClose={handleShowModal} show={showModal} width="540px">\r
        <Text margin="b-20" type="title" weight="bold">\r
          Confirma tu email para avanzar\r
        </Text>\r
\r
        <Text margin="b-32">\r
          Verifica tu cuenta desde el email que te enviamos. No olvides revisar\r
          “Correo no deseado” y “Spam”.\r
        </Text>\r
      </Modal>\r
    </ThemeDS>;
}`,...n.parameters?.docs?.source}}};const M=["ConfirmationExample","EmailExample"];export{o as ConfirmationExample,n as EmailExample,M as __namedExportsOrder,x as default};
