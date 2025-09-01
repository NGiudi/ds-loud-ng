import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-0yr9KlQE.js";import{c as o,T as a,d as u,B as p}from"./index-BT73j9E_.js";const S={argTypes:{borderRound:{control:{type:"boolean"},description:"Si se pasa esta propiedad se redondea los bordes."},margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},noShowAnimationOnFirstLoad:{control:{type:"boolean"},description:"Si esta opción es true no se muestra la animación."},onFinish:{control:{type:"none"},description:"Se pasa una función que se ejecuta al terminar la animación."},size:{control:{type:"select"},description:"Modifica el alto de la progressBar y el border radius.",options:["sm","md","lg"]},step:{control:{type:"number"},description:"Recibe el valor numerico del paso en el que se encuentra."},stepTime:{control:{type:"number"},description:"Se setea el tiempo que pasa en el incremente o decremento de una centecima de la barra."},steps:{control:{type:"number"},description:"Recibe la cantidad total de pasos para completar la barra. La cantidad mínima de steps es 1, si por alguna razón se pasa un valor menor se setea automáticamente a 1."}},component:o,parameters:{docs:{description:{component:""}},status:{type:"stable"}},tags:["autodocs"],title:"Components/ProgressBar"},n=()=>e.jsx(a,{children:e.jsx(o,{step:2,steps:5})}),s=()=>e.jsxs(a,{children:[e.jsx(o,{margin:"b-20",noShowAnimationOnFirstLoad:!0,step:2,steps:5}),e.jsx(o,{borderRound:!0,step:2,steps:5})]}),t=()=>{const[c,i]=l.useState(3),d=()=>i(r=>(r<5&&(r+=1),r)),m=()=>i(r=>(r>0&&(r-=1),r));return e.jsx(a,{children:e.jsxs("div",{style:{margin:"30px auto",width:"90%"},children:[e.jsx(o,{step:c,stepTime:5,steps:5}),e.jsxs(u,{hAlign:"end",margin:"t-10",children:[e.jsx(p,{margin:"r-8",onClick:m,children:"decrement"}),e.jsx(p,{onClick:d,children:"increment"})]})]})})};n.__docgenInfo={description:"",methods:[],displayName:"Model"};s.__docgenInfo={description:"",methods:[],displayName:"Types"};t.__docgenInfo={description:"",methods:[],displayName:"useExample"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <ProgressBar step={2} steps={5} />\r
    </ThemeDS>;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <ThemeDS>\r
      <ProgressBar margin="b-20" noShowAnimationOnFirstLoad step={2} steps={5} />\r
\r
      <ProgressBar borderRound step={2} steps={5} />\r
    </ThemeDS>;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [step, setStep] = useState(3);
  const increment = () => setStep(prev => {
    if (prev < 5) prev += 1;
    return prev;
  });
  const decrement = () => setStep(prev => {
    if (prev > 0) prev -= 1;
    return prev;
  });
  return <ThemeDS>\r
      <div style={{
      margin: "30px auto",
      width: "90%"
    }}>\r
        <ProgressBar step={step} stepTime={5} steps={5} />\r
\r
        <Flex hAlign="end" margin="t-10">\r
          <Button margin="r-8" onClick={decrement}>\r
            decrement\r
          </Button>\r
\r
          <Button onClick={increment}>increment</Button>\r
        </Flex>\r
      </div>\r
    </ThemeDS>;
}`,...t.parameters?.docs?.source}}};const y=["Model","Types","useExample"];export{n as Model,s as Types,y as __namedExportsOrder,S as default,t as useExample};
