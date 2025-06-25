import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as B}from"./index-D4lIrffr.js";import{b as n,y as l,T as p,F as h,a as x,d as r,B as v,o as u}from"./index-CniwK52R.js";const d=[{children:e.jsx(n,{children:"Acura"}),display:"Acura",hide:!0,value:"acura"},{children:e.jsx(n,{children:"Alfa Romeo"}),display:"Alfa Romeo",value:"alfa_romeo"},{children:e.jsx(n,{children:"Audi"}),display:"Audi",value:"audi"},{children:e.jsx(n,{children:"BMW"}),display:"BMW",value:"bmw"},{children:e.jsx(n,{children:"Chery"}),display:"Chery",value:"chery"},{children:e.jsx(n,{children:"Chevrolet"}),display:"Chevrolet",value:"chevrolet"},{children:e.jsx(n,{children:"Chrysler"}),display:"Chrysler",value:"chrysler"},{children:e.jsx(n,{children:"Citroen"}),display:"Citroen",value:"citroen"},{children:e.jsx(n,{children:"Corvette"}),display:"Corvette",value:"corvette"},{children:e.jsx(n,{children:"Dodge"}),display:"Dodge",value:"dodge"},{children:e.jsx(n,{children:"Fiat"}),display:"Fiat",value:"fiat"},{children:e.jsx(n,{children:"Ford"}),display:"Ford",value:"ford"},{children:e.jsx(n,{children:"Honda"}),display:"Honda",value:"honda"},{children:e.jsx(n,{children:"Hyundai"}),display:"Hyundai",value:"hyundai"},{children:e.jsx(n,{children:"Jeep"}),display:"Jeep",value:"jeep"},{children:e.jsx(n,{children:"Kia"}),display:"Kia",value:"kia"},{children:e.jsx(n,{children:"Land Rover"}),display:"Land Rover",value:"land_rover"},{children:e.jsx(n,{children:"Lexus"}),display:"Lexus",value:"lexus"},{children:e.jsx(n,{children:"Lotus"}),display:"Lotus",value:"lotus"},{children:e.jsx(n,{children:"Mazda"}),display:"Mazda",value:"mazda"},{children:e.jsx(n,{children:"Mini"}),display:"Mini",value:"mini"},{children:e.jsx(n,{children:"Mercedes Benz"}),display:"Mercedes Benz",value:"mercedes_benz"},{children:e.jsx(n,{children:"Mitsubishi"}),display:"Mitsubishi",value:"mitsubishi"},{children:e.jsx(n,{children:"Nissan"}),display:"Nissan",value:"nissan"},{children:e.jsx(n,{children:"Peugeot"}),display:"Peugeot",value:"peugeot"},{children:e.jsx(n,{children:"Renault"}),display:"Renault",value:"renault"},{children:e.jsx(n,{children:"Seat"}),display:"Seat",value:"seat"},{children:e.jsx(n,{children:"Subaru"}),display:"Subaru",value:"subaru"},{children:e.jsx(n,{children:"Tesla"}),display:"Tesla",value:"tesla"},{children:e.jsx(n,{children:"Toyota"}),display:"Toyota",value:"toyota"},{children:e.jsx(n,{children:"Volkswagen"}),display:"Volkswagen",value:"volkswagen"},{children:e.jsx(n,{children:"Volvo"}),display:"Volvo",value:"volvo"}],D=[{children:e.jsx(n,{children:"S3"}),display:"S3",value:"s3"},{children:e.jsx(n,{children:"Gol"}),display:"Gol",value:"gol"},{children:e.jsx(n,{children:"Fox"}),display:"Fox",value:"fox"}],z={argTypes:{label:{control:{type:"text"},description:"Texto de descripción en la parte superior del select."},margin:{control:{type:"text"},description:"Se setea la distancia de los margenes."},maxHeight:{control:{type:"text"},description:"Setea el alto máximo en pixeles del panel."},name:{control:{type:"text"},description:"Se usa para completar los campos del formulario de formik."},options:{control:{type:"none"},description:"Listado de opciones del select."}},component:l,parameters:{status:{type:"beta"}},tags:["autodocs"],title:"Components/Select"},s=()=>{const i={marca:"volvo",modelo:"fox"};return e.jsx(p,{children:e.jsx(h,{initialValues:i,onSubmit:a=>{alert(JSON.stringify(a,null,2))},children:e.jsxs(x,{children:[e.jsx(l,{label:"Seleccione un elemento",margin:"t-20",maxHeight:"200px",name:"marca",options:d}),e.jsx(l,{disabled:!0,label:"Seleccione un elemento",margin:"t-20",name:"modelo",options:D}),e.jsx(r,{hAlign:"end",children:e.jsx(v,{margin:"t-8",type:"submit",children:"Enviar Formulario"})})]})})})},t=()=>{const i={marca:""},a=[{children:e.jsxs(r,{children:[e.jsx(u,{margin:"r-8",size:"avatar",type:"round"}),e.jsxs("div",{children:[e.jsx(n,{type:"bodySemibold",children:"Title"}),e.jsx(n,{children:"Description"})]})]}),display:"Opcion 1",value:"option_1"},{children:e.jsxs(r,{children:[e.jsx(u,{margin:"r-8",size:"avatar",type:"round"}),e.jsxs("div",{children:[e.jsx(n,{type:"bodySemibold",children:"Title"}),e.jsx(n,{children:"Description"})]})]}),display:"Opcion 2",value:"option_2"},{children:e.jsxs(r,{children:[e.jsx(u,{margin:"r-8",size:"avatar",type:"round"}),e.jsxs("div",{children:[e.jsx(n,{type:"bodySemibold",children:"Title"}),e.jsx(n,{children:"Description"})]})]}),display:"Opcion 3",value:"option_3"}];return e.jsx(p,{children:e.jsx(h,{initialValues:i,onSubmit:c=>{alert(JSON.stringify(c,null,2))},children:e.jsxs(x,{children:[e.jsx(l,{label:"Seleccione un elemento",margin:"t-20",name:"marca",options:a}),e.jsx(r,{hAlign:"end",children:e.jsx(v,{margin:"t-8",type:"submit",children:"Enviar Formulario"})})]})})})},o=()=>{const[i,a]=B.useState(d),c=m=>{const O=d.filter(_=>_.value.toLowerCase().includes(m.toLowerCase()));a(O)};return e.jsx(p,{children:e.jsx(h,{initialValues:{marca:"volvo",marca_2:"mclaren"},onSubmit:m=>{alert(JSON.stringify(m,null,2))},children:e.jsxs(x,{children:[e.jsx(l,{label:"Seleccione un elemento",margin:"t-20",maxHeight:"200px",name:"marca",onSearchInputChange:c,options:i}),e.jsx(l,{initialOption:{children:e.jsx(n,{children:"Mclaren"}),display:"Mclaren",value:"mclaren"},label:"Seleccione un elemento",margin:"t-20",maxHeight:"200px",name:"marca_2",options:d}),e.jsx(r,{hAlign:"end",children:e.jsx(v,{margin:"t-8",type:"submit",children:"Enviar Formulario"})})]})})})};s.__docgenInfo={description:"",methods:[],displayName:"DinamicExample"};t.__docgenInfo={description:"",methods:[],displayName:"ComplexSelect"};o.__docgenInfo={description:"",methods:[],displayName:"SearcheableExample"};var y,j,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const values = {
    marca: "volvo",
    modelo: "fox"
  };
  return <ThemeDS>\r
      <Formik initialValues={values} onSubmit={values => {
      alert(JSON.stringify(values, null, 2));
    }}>\r
        <Form>\r
          <Select label="Seleccione un elemento" margin="t-20" maxHeight="200px" name="marca" options={carBrands} />\r
\r
          <Select disabled label="Seleccione un elemento" margin="t-20" name="modelo" options={carModels} />\r
\r
          <Flex hAlign="end">\r
            <Button margin="t-8" type="submit">\r
              Enviar Formulario\r
            </Button>\r
          </Flex>\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(g=(j=s.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var S,b,F;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const values = {
    marca: ""
  };
  const options = [{
    children: <Flex>\r
          <Image margin="r-8" size="avatar" type="round" />\r
\r
          <div>\r
            <Text type="bodySemibold">Title</Text>\r
\r
            <Text>Description</Text>\r
          </div>\r
        </Flex>,
    display: "Opcion 1",
    value: "option_1"
  }, {
    children: <Flex>\r
          <Image margin="r-8" size="avatar" type="round" />\r
\r
          <div>\r
            <Text type="bodySemibold">Title</Text>\r
\r
            <Text>Description</Text>\r
          </div>\r
        </Flex>,
    display: "Opcion 2",
    value: "option_2"
  }, {
    children: <Flex>\r
          <Image margin="r-8" size="avatar" type="round" />\r
\r
          <div>\r
            <Text type="bodySemibold">Title</Text>\r
\r
            <Text>Description</Text>\r
          </div>\r
        </Flex>,
    display: "Opcion 3",
    value: "option_3"
  }];
  return <ThemeDS>\r
      <Formik initialValues={values} onSubmit={values => {
      alert(JSON.stringify(values, null, 2));
    }}>\r
        <Form>\r
          <Select label="Seleccione un elemento" margin="t-20" name="marca" options={options} />\r
\r
          <Flex hAlign="end">\r
            <Button margin="t-8" type="submit">\r
              Enviar Formulario\r
            </Button>\r
          </Flex>\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(F=(b=t.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var T,f,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [options, setOptions] = useState(carBrands);
  const handleSearchInputChange = value => {
    const filteredOptions = carBrands.filter(carBrand => {
      return carBrand.value.toLowerCase().includes(value.toLowerCase());
    });
    setOptions(filteredOptions);
  };
  return <ThemeDS>\r
      <Formik initialValues={{
      marca: "volvo",
      marca_2: "mclaren"
    }} onSubmit={values => {
      alert(JSON.stringify(values, null, 2));
    }}>\r
        <Form>\r
          <Select label="Seleccione un elemento" margin="t-20" maxHeight="200px" name="marca" onSearchInputChange={handleSearchInputChange} options={options} />\r
\r
          <Select initialOption={{
          children: <Text>Mclaren</Text>,
          display: "Mclaren",
          value: "mclaren"
        }} label="Seleccione un elemento" margin="t-20" maxHeight="200px" name="marca_2" options={carBrands} />\r
\r
          <Flex hAlign="end">\r
            <Button margin="t-8" type="submit">\r
              Enviar Formulario\r
            </Button>\r
          </Flex>\r
        </Form>\r
      </Formik>\r
    </ThemeDS>;
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const A=["DinamicExample","ComplexSelect","SearcheableExample"];export{t as ComplexSelect,s as DinamicExample,o as SearcheableExample,A as __namedExportsOrder,z as default};
