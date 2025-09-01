import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-0yr9KlQE.js";import{S as o,T as m,d,B as s}from"./index-BT73j9E_.js";const g={title:"Molecules/StepsBar",component:o,tags:["autodocs"],parameters:{docs:{description:{component:""}}},argTypes:{margin:{control:{type:"text"},description:"Establece la distancia de los márgenes"},size:{control:{type:"select"},description:"Esta propiedad sirve para cambiarle el tamaño del componente."},step:{control:{type:"number"},description:"Recibe el valor numerico del paso en el que se encuentra."},steps:{control:{type:"array"},description:"Se pasa un array con el nombre de los distintos steps."}}},t=a=>{const[i,n]=l.useState(3),p=()=>n(e=>(e<5&&(e+=1),e)),c=()=>n(e=>(e>1&&(e-=1),e));return r.jsxs(m,{children:[r.jsx(o,{...a,step:i}),r.jsxs(d,{hAlign:"end",margin:"t-40",children:[r.jsx(s,{onClick:c,children:"Anterior"}),r.jsx(s,{margin:"l-8",onClick:p,children:"Siguiente"})]})]})};t.args={steps:4};t.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...t.parameters?.docs?.source}}};const h=["DinamicExample"];export{t as DinamicExample,h as __namedExportsOrder,g as default};
