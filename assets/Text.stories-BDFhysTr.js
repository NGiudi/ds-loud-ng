import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{b as t,T as o}from"./index-BN2RcUVK.js";const R={argTypes:{align:{control:{type:"select"},description:"Se setea la posición del texto.",options:["center","end","start"]},as:{control:{type:"select"},description:"Se elegi la etiqueta del texto.",options:["label","p"]},color:{control:{type:"text"},description:"Se setea el color del fondo, se pasa el tono de color y la intensidad."},decoration:{control:{type:"select"},description:"agregar el estilo deseado en el texto.",options:["underline","line-through"]},htmlFor:{control:{type:"text"},description:"Unicamente se debe usar para los textos que tenga la propiedad `as` con el valor `label`."},margin:{description:"Se setea la distancia de los margenes."},padding:{description:"Se setea la distancia de los paddings."},size:{control:{type:"select"},description:"Cambia el tamaño del texto.",options:["xs","sm","md","lg","xl"]},type:{control:{type:"select"},description:"separo los estilos de textos y titulos, con esta propiedad lo podemos seleccionar.",options:["bodyRegular","bodySemibold","captionRegular","captionSemibold","pageTitle","subtitle","title"]},weight:{control:{type:"select"},description:"Cambia el espesor del texto.",options:["light","regular","semibold","bold"]}},component:t,parameters:{status:{type:"stable"}},tags:["autodocs"],title:"Components/Text"},r=f=>e.jsx(o,{children:e.jsx(t,{...f,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})}),n=()=>e.jsxs(o,{children:[e.jsx(t,{margin:"b-32",type:"pageTitle",children:"Lorem Ipsum is simply dummy text"}),e.jsx(t,{margin:"y-32",type:"title",children:"Lorem Ipsum is simply dummy text"}),e.jsx(t,{margin:"b-32",type:"subtitle",children:"Lorem Ipsum is simply dummy text"}),e.jsx(t,{margin:"b-32",type:"bodySemibold",children:"Lorem Ipsum is simply dummy text"}),e.jsx(t,{margin:"b-32",type:"bodyRegular",children:"Lorem Ipsum is simply dummy text"}),e.jsx(t,{margin:"b-32",type:"captionSemibold",children:"Lorem Ipsum is simply dummy text"}),e.jsx(t,{margin:"b-32",type:"captionRegular",children:"Lorem Ipsum is simply dummy text"})]}),i=()=>e.jsxs(o,{children:[e.jsx(t,{margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),e.jsx(t,{decoration:"underline",margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),e.jsx(t,{decoration:"line-through",margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})]}),s=()=>e.jsxs(o,{children:[e.jsx(t,{margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),e.jsx(t,{align:"center",margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),e.jsx(t,{align:"end",margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})]}),m=()=>e.jsxs(o,{children:[e.jsx(t,{margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),e.jsx(t,{color:"orange_700",margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),e.jsx(t,{color:"red",margin:"y-16",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})]});r.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"};n.__docgenInfo={description:"",methods:[],displayName:"Types"};i.__docgenInfo={description:"",methods:[],displayName:"Styles"};s.__docgenInfo={description:"",methods:[],displayName:"Align"};m.__docgenInfo={description:"",methods:[],displayName:"Colors"};var p,a,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <ThemeDS>\r
      <Text {...args}>\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
    </ThemeDS>;
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var l,y,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Text margin="b-32" type="pageTitle">\r
        Lorem Ipsum is simply dummy text\r
      </Text>\r
\r
      <Text margin="y-32" type="title">\r
        Lorem Ipsum is simply dummy text\r
      </Text>\r
\r
      <Text margin="b-32" type="subtitle">\r
        Lorem Ipsum is simply dummy text\r
      </Text>\r
\r
      <Text margin="b-32" type="bodySemibold">\r
        Lorem Ipsum is simply dummy text\r
      </Text>\r
\r
      <Text margin="b-32" type="bodyRegular">\r
        Lorem Ipsum is simply dummy text\r
      </Text>\r
\r
      <Text margin="b-32" type="captionSemibold">\r
        Lorem Ipsum is simply dummy text\r
      </Text>\r
\r
      <Text margin="b-32" type="captionRegular">\r
        Lorem Ipsum is simply dummy text\r
      </Text>\r
    </ThemeDS>;
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Text margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
\r
      <Text decoration="underline" margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
\r
      <Text decoration="line-through" margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
    </ThemeDS>;
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,T,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Text margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
\r
      <Text align="center" margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
\r
      <Text align="end" margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
    </ThemeDS>;
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var b,L,S;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <Text margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
\r
      <Text color="orange_700" margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
\r
      <Text color="red" margin="y-16">\r
        Lorem Ipsum is simply dummy text of the printing and typesetting\r
        industry.\r
      </Text>\r
    </ThemeDS>;
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const C=["DinamicExample","Types","Styles","Align","Colors"];export{s as Align,m as Colors,r as DinamicExample,i as Styles,n as Types,C as __namedExportsOrder,R as default};
