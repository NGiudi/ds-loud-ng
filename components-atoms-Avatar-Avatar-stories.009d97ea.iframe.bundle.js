"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[923],{"./src/components/atoms/Avatar/Avatar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Model:()=>Model,Positions:()=>Positions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),src=__webpack_require__("./src/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AvatarDocs=()=>(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(src.gK,{children:[(0,jsx_runtime.jsx)(src.xv,{margin:"b-16",type:"pageTitle",children:"Avatar"}),(0,jsx_runtime.jsx)(src.xv,{children:"El componente avatar es parte de una interfaz de usuario que se utiliza comúnmente para representar a un usuario o entidad de una manera visualmente identificable."}),(0,jsx_runtime.jsx)(dist.Xz,{}),(0,jsx_runtime.jsx)(src.xv,{margin:"b-16",type:"title",children:"Características"}),(0,jsx_runtime.jsxs)(src.xv,{margin:"b-16",children:[(0,jsx_runtime.jsxs)(src.xv,{as:"span",weight:"semibold",children:["Representación visual:"," "]}),"El avatar se representa inicialmente como una imagen circular. Esta imagen suele ser una fotografía, ilustración, o un ícono que identifica al usuario o entidad en cuestión. La forma circular es una elección de diseño común para los avatares, ya que se destaca y se ve atractiva."]}),(0,jsx_runtime.jsxs)(src.xv,{margin:"b-16",children:[(0,jsx_runtime.jsxs)(src.xv,{as:"span",weight:"semibold",children:["Interacciones al pasar el mouse:"," "]}),"Cuando el usuario coloca el cursor del mouse sobre el avatar, se cambia el color del borde. Este efecto ayuda a indicar que el avatar es interactivo y puede hacer algo cuando se interactúa con él."]}),(0,jsx_runtime.jsxs)(src.xv,{margin:"b-16",children:[(0,jsx_runtime.jsxs)(src.xv,{as:"span",weight:"semibold",children:["Acción al hacer clic:"," "]}),"Al hacer clic en el avatar, se abre un panel. El contenido de este panel está es el children del componente. Por lo tanto, lo que se muestre en el panel puede variar según el uso y el contexto."]}),(0,jsx_runtime.jsx)(src.xv,{margin:"b-40",children:"Cuando el panel está desplegado y se realiza un clic en cualquier área fuera de él, el componente se cierra automáticamente."}),(0,jsx_runtime.jsx)(src.xv,{type:"title",children:"Propiedades"}),(0,jsx_runtime.jsx)(dist.ZX,{})]})});AvatarDocs.displayName="AvatarDocs",AvatarDocs.__docgenInfo={description:"",methods:[],displayName:"AvatarDocs"};var foto_perfil=__webpack_require__("./src/assets/img/foto-perfil.jpg");const meta={argTypes:{children:{control:{type:"none"},description:"Contenido del panel"},id:{control:{type:"text"},description:"Identificador único para el componente"},img:{control:{type:"object"},description:"Propiedades que se pasan al componente de imagen"},margin:{control:{type:"text"},description:"Establece la distancia de los márgenes"},pos:{control:{type:"select"},description:"Establece la orientación del panel con respecto a la imagen",options:["left","right"]},size:{control:{type:"select"},description:"Establece el tamaño del avatar",options:["avatar","avatarSm"]}},component:src.qE,parameters:{docs:{page:AvatarDocs}},tags:["autodocs"],title:"Components/Avatar"},Model=args=>(0,jsx_runtime.jsx)(src.gK,{children:(0,jsx_runtime.jsxs)(src.qE,{...args,children:[(0,jsx_runtime.jsxs)(src.kC,{margin:"l-20 y-10",children:[(0,jsx_runtime.jsx)(src.Ee,{img:foto_perfil,size:"sm",type:"round"}),(0,jsx_runtime.jsxs)(src.xu,{margin:"l-10",children:[(0,jsx_runtime.jsx)(src.xv,{margin:"a-0",type:"bodySemibold",children:"Nicolás Giudice"}),(0,jsx_runtime.jsx)(src.xv,{margin:"a-0",type:"bodyRegular",children:"Desarrollador"})]})]}),(0,jsx_runtime.jsx)(src.iz,{}),(0,jsx_runtime.jsx)(src.zx,{border:{radius:"0px"},fullWidth:!0,kind:"text",children:"Cerrar sesión"})]})});Model.displayName="Model",Model.args={id:"avatar-story",img:{alt:"profile_image",placeholder:"N"},margin:"a-0",pos:"left",size:"avatar"};const Positions=()=>(0,jsx_runtime.jsx)(src.gK,{children:(0,jsx_runtime.jsxs)(src.oe,{children:[(0,jsx_runtime.jsx)(src.qE,{img:{img:foto_perfil},children:(0,jsx_runtime.jsxs)(src.kC,{margin:"l-20 y-10",children:[(0,jsx_runtime.jsx)(src.Ee,{img:foto_perfil,size:"sm",type:"round"}),(0,jsx_runtime.jsxs)(src.xu,{margin:"l-10",children:[(0,jsx_runtime.jsx)(src.xv,{margin:"a-0",type:"bodySemibold",children:"Nicolás Giudice"}),(0,jsx_runtime.jsx)(src.xv,{margin:"a-0",type:"bodyRegular",children:"Desarrollador"})]})]})}),(0,jsx_runtime.jsx)(src.qE,{img:{img:foto_perfil},pos:"right",children:(0,jsx_runtime.jsxs)(src.kC,{margin:"l-20 y-10",children:[(0,jsx_runtime.jsx)(src.Ee,{img:foto_perfil,size:"sm",type:"round"}),(0,jsx_runtime.jsxs)(src.xu,{margin:"l-10",children:[(0,jsx_runtime.jsx)(src.xv,{margin:"a-0",type:"bodySemibold",children:"Nicolás Giudice"}),(0,jsx_runtime.jsx)(src.xv,{margin:"a-0",type:"bodyRegular",children:"Desarrollador"})]})]})})]})});Positions.displayName="Positions";const Avatar_stories=meta;Model.parameters={...Model.parameters,docs:{...Model.parameters?.docs,source:{originalSource:'args => {\n  return <ThemeDS>\r\n      <Avatar {...args}>\r\n        <Flex margin="l-20 y-10">\r\n          <Image img={fotoPerfil} size="sm" type="round" />\r\n\r\n          <Box margin="l-10">\r\n            <Text margin="a-0" type="bodySemibold">\r\n              Nicolás Giudice\r\n            </Text>\r\n\r\n            <Text margin="a-0" type="bodyRegular">\r\n              Desarrollador\r\n            </Text>\r\n          </Box>\r\n        </Flex>\r\n\r\n        <Divider />\r\n\r\n        <Button border={{\n        radius: "0px"\n      }} fullWidth kind="text">\r\n          Cerrar sesión\r\n        </Button>\r\n      </Avatar>\r\n    </ThemeDS>;\n}',...Model.parameters?.docs?.source}}},Positions.parameters={...Positions.parameters,docs:{...Positions.parameters?.docs,source:{originalSource:'() => {\n  return <ThemeDS>\r\n      <Columns>\r\n        <Avatar img={{\n        img: fotoPerfil\n      }}>\r\n          <Flex margin="l-20 y-10">\r\n            <Image img={fotoPerfil} size="sm" type="round" />\r\n\r\n            <Box margin="l-10">\r\n              <Text margin="a-0" type="bodySemibold">\r\n                Nicolás Giudice\r\n              </Text>\r\n\r\n              <Text margin="a-0" type="bodyRegular">\r\n                Desarrollador\r\n              </Text>\r\n            </Box>\r\n          </Flex>\r\n        </Avatar>\r\n\r\n        <Avatar img={{\n        img: fotoPerfil\n      }} pos="right">\r\n          <Flex margin="l-20 y-10">\r\n            <Image img={fotoPerfil} size="sm" type="round" />\r\n\r\n            <Box margin="l-10">\r\n              <Text margin="a-0" type="bodySemibold">\r\n                Nicolás Giudice\r\n              </Text>\r\n\r\n              <Text margin="a-0" type="bodyRegular">\r\n                Desarrollador\r\n              </Text>\r\n            </Box>\r\n          </Flex>\r\n        </Avatar>\r\n      </Columns>\r\n    </ThemeDS>;\n}',...Positions.parameters?.docs?.source}}};const __namedExportsOrder=["Model","Positions"];Model.__docgenInfo={description:"",methods:[],displayName:"Model"},Positions.__docgenInfo={description:"",methods:[],displayName:"Positions"}},"./src/assets/img/foto-perfil.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/foto-perfil.01869c4e.jpg"}}]);