import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BCtMShv3.js";import{S as p,T as S,d as x,B as s}from"./index-B7CIzq1-.js";const v={title:"Molecules/StepsBar",component:p,tags:["autodocs"],parameters:{docs:{description:{component:""}}},argTypes:{margin:{control:{type:"text"},description:"Establece la distancia de los márgenes"},size:{control:{type:"select"},description:"Esta propiedad sirve para cambiarle el tamaño del componente."},step:{control:{type:"number"},description:"Recibe el valor numerico del paso en el que se encuentra."},steps:{control:{type:"array"},description:"Se pasa un array con el nombre de los distintos steps."}}},t=c=>{const[l,n]=u.useState(3),m=()=>n(e=>(e<5&&(e+=1),e)),d=()=>n(e=>(e>1&&(e-=1),e));return r.jsxs(S,{children:[r.jsx(p,{...c,step:l}),r.jsxs(x,{hAlign:"end",margin:"t-40",children:[r.jsx(s,{onClick:d,children:"Anterior"}),r.jsx(s,{margin:"l-8",onClick:m,children:"Siguiente"})]})]})};t.args={steps:4};t.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [step, setStep] = useState(3);
  const nextStep = () => setStep(prev => {
    if (prev < 5) prev += 1;
    return prev;
  });
  const previusStep = () => setStep(prev => {
    if (prev > 1) prev -= 1;
    return prev;
  });
  return <ThemeDS>\r
      <StepsBar {...args} step={step} />\r
\r
      <Flex hAlign="end" margin="t-40">\r
        <Button onClick={previusStep}>Anterior</Button>\r
\r
        <Button margin="l-8" onClick={nextStep}>\r
          Siguiente\r
        </Button>\r
      </Flex>\r
    </ThemeDS>;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const B=["DinamicExample"];export{t as DinamicExample,B as __namedExportsOrder,v as default};
