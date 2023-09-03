"use strict";(self.webpackChunkds_loud_ng=self.webpackChunkds_loud_ng||[]).push([[152],{"./src/components/atoms/Countdown/Countdown.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Countdown});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const getTimeObject=ms=>{ms<0&&(ms=0);const days=Math.floor(ms/864e5),hours=Math.floor(ms%864e5/36e5),minutes=Math.floor(ms%36e5/6e4),seconds=Math.floor(ms%6e4/1e3);return{days:ms?days:0,hours:ms?hours:0,minutes:ms?minutes:0,seconds:ms?seconds:0,total_ms:ms||0}},Countdown=props=>{const{endTime,formatTime,onFinish,showZero}=props,[time,setTime]=(0,react.useState)(endTime-(new Date).getTime()),[startWithoutTime]=(0,react.useState)((()=>endTime-(new Date).getTime()<0)),timeoutRef=react.useRef();return(0,react.useEffect)((()=>{if(time>1e3){timeoutRef.current&&clearTimeout(timeoutRef.current);const id=setTimeout((()=>{const now=(new Date).getTime();setTime(endTime-now)}),1e3);timeoutRef.current=id}}),[endTime,time]),(0,react.useEffect)((()=>()=>{timeoutRef.current&&clearTimeout(timeoutRef.current)}),[]),(0,react.useEffect)((()=>{onFinish&&!startWithoutTime&&time<1e3&&onFinish()}),[onFinish,startWithoutTime,time]),time<1e3&&!showZero?null:((timeObject,format)=>{let time={};timeObject?time=((obj,fields)=>{const newObj={};fields||(fields=[]);for(const property in obj)fields.includes(property)&&(newObj[property]=obj[property]);return newObj})(timeObject,["hours","minutes","seconds"]):(time.hours=0,time.minutes=0,time.seconds=0),format||(format="hh:mm:ss");for(const property in time){let numString="";time[property]<10&&(numString="0"),numString+=time[property].toString(),"hours"===property?format=format.replace("hh",numString):"minutes"===property?format=format.replace("mm",numString):"seconds"===property&&(format=format.replace("ss",numString))}return format})(getTimeObject(time),formatTime)};Countdown.propTypes={endTime:prop_types_default().number.isRequired,formatTime:prop_types_default().oneOf(["hh:mm:ss","mm:ss","ss"]),onFinish:prop_types_default().func,showZero:prop_types_default().bool},Countdown.defaultProps={endTime:null,formatTime:"hh:mm:ss",onFinish:null,showZero:!1}},"./src/components/atoms/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qE:()=>Avatar,Ct:()=>Badge,zx:()=>Button,IT:()=>Countdown.I,iz:()=>Divider,Lt:()=>Dropdown,hP:()=>DropdownItem,oZ:()=>DropdownPanel,D9:()=>DropdownToogle,JO:()=>Icon,hU:()=>IconButton_IconButton,Ee:()=>Image,II:()=>Input,u_:()=>Modal,s_:()=>Panel,ko:()=>ProgressBar,Ph:()=>Select,$m:()=>SelectOption_SelectOption,OK:()=>Tab,iA:()=>Table,mQ:()=>Tabs,xv:()=>Text});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const useOuterClick=callback=>{const callbackRef=(0,react.useRef)(),innerRef=(0,react.useRef)();return(0,react.useEffect)((()=>{callbackRef.current=callback})),(0,react.useEffect)((()=>{function handleClick(e){innerRef.current&&callbackRef.current&&!innerRef.current.contains(e.target)&&callbackRef.current(e)}return document.addEventListener("click",handleClick),()=>document.removeEventListener("click",handleClick)}),[]),innerRef};var src=__webpack_require__("./src/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/styles/spacing.js");const Styles={AvatarWrapper:styled_components_browser_esm.ZP.div`
  border-radius: 50%;
  border-style: solid;
  display: inline-block;

  ${props=>styled_components_browser_esm.iv`
    border-color: ${props.$isSelected?`${props.theme.colors.black._500}`:"transparent"};
    border-width: ${props.theme.components.avatar.thickShadow};

    &:hover {
      border-color: ${!props.$isSelected&&props.theme.colors.black._600};
    }
  `}
`,PanelWrapper:styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 100%;
  width: 250px;

  ${props=>styled_components_browser_esm.iv`
    ${props.$pos}: 0;
    ${(0,spacing.u)(props)}
  `}
`,Wrapper:styled_components_browser_esm.ZP.div`
  display: inline-block;
  position: relative;
  width: fit-content;

  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.u)(props)}
  `}
`};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=props=>{const{pos,size}=props,[isOpen,setIsOpen]=(0,react.useState)(!1),innerRef=useOuterClick((()=>{setIsOpen(!1)})),imageAttributes={alt:"default-alt",img:null,placeholder:"L",...props.img};return(0,jsx_runtime.jsxs)(Styles.Wrapper,{$margin:props.margin,ref:innerRef,children:[(0,jsx_runtime.jsx)(Styles.AvatarWrapper,{$isSelected:isOpen,onClick:()=>{setIsOpen((prev=>!prev))},children:(0,jsx_runtime.jsx)(src.Ee,{size,type:"round",...imageAttributes})}),isOpen&&(0,jsx_runtime.jsx)(Styles.PanelWrapper,{$margin:"t-8",$pos:pos,children:(0,jsx_runtime.jsx)(src.s_,{padding:"a-0",children:props.children})})]})};Avatar.displayName="Avatar",Avatar.propTypes={children:prop_types_default().node,img:prop_types_default().shape({alt:prop_types_default().string,img:prop_types_default().string,placeholder:prop_types_default().string}),margin:prop_types_default().string,pos:prop_types_default().oneOf(["left","right"]),size:prop_types_default().oneOf(["avatar","avatarSm"])},Avatar.defaultProps={children:null,img:null,margin:"a-0",pos:"left",size:"avatar"},Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},img:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},img:{name:"string",required:!1},placeholder:{name:"string",required:!1}}},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},pos:{defaultValue:{value:'"left"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},size:{defaultValue:{value:'"avatar"',computed:!1},description:"",type:{name:"enum",value:[{value:'"avatar"',computed:!1},{value:'"avatarSm"',computed:!1}]},required:!1}}};const getColor=(theme,colorString)=>{if(colorString.includes("_")){const colorArray=colorString.split("_"),color=colorArray[0],tone=`_${colorArray[1]}`;return theme.colors[color][tone]}return colorString},Badge_styles_Styles={Wrapper:styled_components_browser_esm.ZP.div`
  display: inline-block;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${getColor(props.theme,props.$color)};
    border-radius: ${props.theme.components.badge.border.radius};

    ${(0,spacing.u)(props)}
    ${(0,spacing.k)(props,props.theme.components.badge.padding)}
  `}
`},Badge=props=>{const{color,margin}=props;return(0,jsx_runtime.jsx)(Badge_styles_Styles.Wrapper,{$color:color,$margin:margin,children:(0,jsx_runtime.jsx)(Text,{type:"bodySemibold",children:props.children})})};Badge.displayName="Badge",Badge.propTypes={children:prop_types_default().node,color:prop_types_default().string,margin:prop_types_default().string},Badge.defaultProps={children:null,color:"orange_700",margin:"a-0"},Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},color:{defaultValue:{value:'"orange_700"',computed:!1},description:"",type:{name:"string"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1}}};const rotate=styled_components_browser_esm.F4`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Button_styles_Styles={ContentWrapper:styled_components_browser_esm.ZP.span`
  align-items: center;
  display: flex;

  ${props=>styled_components_browser_esm.iv`
    visibility: ${props.$loading?"hidden":"visible"};
  `}
`,LoaderWrapper:styled_components_browser_esm.ZP.span`
  left: calc(50% - 10px); /* TODO: 10px = half icon size */
  position: absolute;
  top: calc(50% - 10px); /* TODO: 10px = half icon size */

  ${props=>styled_components_browser_esm.iv`
    animation-name: ${rotate};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    display: ${props.$loading?"block":"none"};
  `}
`,OutlinedButton:styled_components_browser_esm.ZP.button`
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  position: relative;

  ${props=>styled_components_browser_esm.iv`
    border: 1px solid ${props.theme.colors.orange._600};
    border-radius: ${props.$border?props.$border.radius:props.theme.components.button.outlined.borderRadius};
    color: ${props.theme.colors.orange._600};
    height: ${props.theme.components.button.outlined.height};
    padding: ${props.theme.components.button.outlined.padding};
    width: ${props.$fullWidth?"100%":"auto"};

    ${(0,spacing.u)(props)}
  `}

  &:hover:enabled {
    ${props=>styled_components_browser_esm.iv`
      border-color: ${!props.$loading&&props.theme.colors.orange._800};
      color: ${!props.$loading&&props.theme.colors.orange._800};
    `}
  }

  &:active:enabled {
    ${props=>styled_components_browser_esm.iv`
      border-color: ${!props.$loading&&props.theme.colors.orange._900};
      color: ${!props.$loading&&props.theme.colors.orange._900};
    `}
  }

  &:disabled {
    box-shadow: none;

    ${props=>styled_components_browser_esm.iv`
      border-color: ${props.theme.colors.black._400};
      color: ${props.theme.colors.black._400};
    `}
  }
`,SolidButton:styled_components_browser_esm.ZP.button`
  align-items: center;
  border: none;
  color: white;
  display: inline-flex;
  justify-content: center;
  position: relative;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.orange._600};
    border-radius: ${props.$border?props.$border.radius:props.theme.components.button.outlined.borderRadius};
    box-shadow: ${props.theme.shadows.level1};
    height: ${props.theme.components.button.solid.height};
    padding: ${props.theme.components.button.solid.padding};
    width: ${props.$fullWidth?"100%":"auto"};

    ${(0,spacing.u)(props)}
  `}

  &:hover:enabled {
    ${props=>styled_components_browser_esm.iv`
      background-color: ${!props.$loading&&props.theme.colors.orange._800};
      box-shadow: ${!props.$loading&&props.theme.shadows.level2};
    `}
  }

  &:active:enabled {
    ${props=>styled_components_browser_esm.iv`
      background-color: ${!props.$loading&&props.theme.colors.orange._900};
      box-shadow: ${!props.$loading&&props.theme.shadows.level3};
    `}
  }

  &:disabled {
    box-shadow: none;

    ${props=>styled_components_browser_esm.iv`
      background-color: ${props.theme.colors.black._400};
    `}
  }
`,TextButton:styled_components_browser_esm.ZP.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: inline-flex;
  justify-content: center;
  position: relative;

  ${props=>styled_components_browser_esm.iv`
    border-radius: ${props.$border?props.$border.radius:props.theme.components.button.outlined.borderRadius};
    height: ${props.theme.components.button.solid.height};
    padding: ${props.theme.components.button.solid.padding};
    width: ${props.$fullWidth?"100%":"auto"};

    ${(0,spacing.u)(props)}
  `}

  &:hover:enabled {
    ${props=>styled_components_browser_esm.iv`
      background-color: ${!props.$loading&&props.theme.colors.black._200};
    `}
  }

  &:active:enabled {
    ${props=>styled_components_browser_esm.iv`
      background-color: ${!props.$loading&&props.theme.colors.black._300};
    `}
  }

  &:disabled {
    box-shadow: none;

    ${props=>styled_components_browser_esm.iv`
      color: ${props.theme.colors.black._400};
    `}
  }
`},Button=props=>{const{children,fullWidth,loading,onClick}=props,isIconButton="icon"===props.kind,iconAttributes={name:null,size:"sm",...props.icon},CustomButton=({kind,...others})=>{switch(kind){case"outlined":return(0,jsx_runtime.jsx)(Button_styles_Styles.OutlinedButton,{...others});case"solid":default:return(0,jsx_runtime.jsx)(Button_styles_Styles.SolidButton,{...others});case"text":return(0,jsx_runtime.jsx)(Button_styles_Styles.TextButton,{...others})}};return(0,jsx_runtime.jsxs)(CustomButton,{$border:props.border,disabled:props.disabled,$fullWidth:fullWidth,kind:props.kind,$loading:loading,$margin:props.margin,onClick:()=>{loading||onClick&&onClick()},type:props.type,children:[(0,jsx_runtime.jsx)(Button_styles_Styles.LoaderWrapper,{$loading:loading,"data-testid":"loading",children:(0,jsx_runtime.jsx)(src.JO,{color:"inheret",icon:"spinner",size:"sm"})}),(0,jsx_runtime.jsxs)(Button_styles_Styles.ContentWrapper,{$loading:loading,children:[iconAttributes.name&&(0,jsx_runtime.jsx)(src.JO,{color:"inheret",icon:iconAttributes.name,margin:isIconButton?"":"r-4",size:iconAttributes.size}),children]})]})};Button.displayName="Button",Button.propTypes={border:prop_types_default().shape({radius:prop_types_default().string}),children:prop_types_default().node,disabled:prop_types_default().bool,fullWidth:prop_types_default().bool,icon:prop_types_default().shape({name:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().array]),size:prop_types_default().oneOf(["input","lg","md","sm"])}),kind:prop_types_default().oneOf(["outlined","solid","text"]),loading:prop_types_default().bool,margin:prop_types_default().string,onClick:prop_types_default().func,type:prop_types_default().oneOf(["button","submit"])},Button.defaultProps={border:{radius:"4px"},children:null,disabled:!1,fullWidth:!1,icon:null,kind:"solid",loading:!1,margin:"a-0",onClick:null,type:"button"},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{border:{defaultValue:{value:'{\r\n  radius: "4px",\r\n}',computed:!1},description:"",type:{name:"shape",value:{radius:{name:"string",required:!1}}},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{name:{name:"union",value:[{name:"string"},{name:"array"}],required:!1},size:{name:"enum",value:[{value:'"input"',computed:!1},{value:'"lg"',computed:!1},{value:'"md"',computed:!1},{value:'"sm"',computed:!1}],required:!1}}},required:!1},kind:{defaultValue:{value:'"solid"',computed:!1},description:"",type:{name:"enum",value:[{value:'"outlined"',computed:!1},{value:'"solid"',computed:!1},{value:'"text"',computed:!1}]},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},type:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"enum",value:[{value:'"button"',computed:!1},{value:'"submit"',computed:!1}]},required:!1}}};var Countdown=__webpack_require__("./src/components/atoms/Countdown/Countdown.jsx");const Divider_styles_Styles={Wrapper:styled_components_browser_esm.ZP.div`
  border: none;

  ${props=>`\n    background-color: ${getColor(props.theme,props.$color)};\n    height: ${props.theme.components.divider.height};\n\n    ${(0,spacing.u)(props)}\n  `};
`},Divider=props=>{const{color,margin}=props;return(0,jsx_runtime.jsx)(Divider_styles_Styles.Wrapper,{$color:color,$margin:margin})};Divider.displayName="Divider",Divider.propTypes={color:prop_types_default().string,margin:prop_types_default().string},Divider.defaultProps={color:"black_300",margin:"a-0"},Divider.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{color:{defaultValue:{value:'"black_300"',computed:!1},description:"",type:{name:"string"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1}}};const Dropdown_styles_Styles={DropdownWrapper:styled_components_browser_esm.ZP.div`
  display: inline-block;
  position: relative;
`},Dropdown=props=>{const{children,name,onSelect}=props,[optionSelected,setOptionSelected]=(0,react.useState)(null),[showPanel,setShowPanel]=(0,react.useState)(!1),innerRef=useOuterClick((()=>{showPanel&&toogleShowPanel()})),toogleShowPanel=()=>{setShowPanel((prev=>!prev))},getPanel=react.Children.toArray(children)[1],getToggle=react.Children.toArray(children)[0];return(0,jsx_runtime.jsxs)(Dropdown_styles_Styles.DropdownWrapper,{ref:innerRef,children:[react.cloneElement(getToggle,{onClick:toogleShowPanel,openPanel:showPanel}),react.cloneElement(getPanel,{name,onSelect:(value,name)=>{toogleShowPanel(),value!==optionSelected&&(onSelect&&onSelect(value,name),setOptionSelected(value))},showPanel})]})};Dropdown.displayName="Dropdown",Dropdown.propTypes={children:prop_types_default().node,name:prop_types_default().string,onSelect:prop_types_default().func},Dropdown.defaultProps={children:null,name:null,onSelect:null},Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},name:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onSelect:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1}}};const ItemWrapper=styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    width: ${props.theme.components.dropdown.panelSize.width};
  `}

  &:hover:not([disabled]) {
    overflow: hiddem;

    ${props=>styled_components_browser_esm.iv`
      background-color: ${props.theme.colors.black._200};
    `}
  }

  &[disabled] {
    cursor: not-allowed;
    filter: opacity(50%);
  }
`,DropdownItem=props=>{const{disabled,name,onSelect,value}=props;return(0,jsx_runtime.jsx)(ItemWrapper,{onClick:()=>{disabled||onSelect&&onSelect(value,name)},...props})};DropdownItem.displayName="DropdownItem",DropdownItem.propTypes={disabled:prop_types_default().bool,name:prop_types_default().string,onSelect:prop_types_default().func,value:prop_types_default().any},DropdownItem.defaultProps={disabled:!1,name:null,onSelect:null,value:null},DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},name:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onSelect:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},value:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"any"},required:!1}}};const TriangleWrapper=styled_components_browser_esm.ZP.div`
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  position: absolute;
  top: -5px;
  transform: rotate(-90deg);

  ${props=>styled_components_browser_esm.iv`
    border-left: 10px solid ${props.theme.colors.alert.bgColors.neutral};
    ${"right"===props.direction&&"left: 10px;"}
    ${"left"===props.direction&&"right: 35px;"}
  `};
`,DropdownPanel_styles_PanelWrapper=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 100%;

  ${props=>styled_components_browser_esm.iv`
    width: ${props.theme.components.dropdown.panelSize.width};
    ${"right"===props.direction&&"left: 0;"}
    ${"left"===props.direction&&"right: 0;"}

      display: ${props.$showPanel?"block":"none"};
  `};
`,DropdownPanel=props=>{const{children,direction,name,onSelect,showPanel}=props;return(0,jsx_runtime.jsx)(DropdownPanel_styles_PanelWrapper,{direction,$showPanel:showPanel,children:(0,jsx_runtime.jsxs)(src.s_,{margin:"t-8",padding:"y-4 x-0",children:[(0,jsx_runtime.jsx)(TriangleWrapper,{direction}),children.map(((item,index)=>react.cloneElement(item,{key:`listItem-${index+1}`,name,onSelect})))]})})};DropdownPanel.displayName="DropdownPanel",DropdownPanel.propTypes={children:prop_types_default().node,direction:prop_types_default().oneOf(["left","right"]),name:prop_types_default().string,onSelect:prop_types_default().func,showPanel:prop_types_default().bool},DropdownPanel.defaultProps={children:null,direction:"right",name:null,onSelect:null,showPanel:!1},DropdownPanel.__docgenInfo={description:"",methods:[],displayName:"DropdownPanel",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},direction:{defaultValue:{value:'"right"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},name:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onSelect:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},showPanel:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}};const ToogleWrapper=styled_components_browser_esm.ZP.div`
  display: inline-block;
`,DropdownToogle_styles_ContentWrapper=styled_components_browser_esm.ZP.div`
  align-items: center;
  display: flex;
`,DropdownToogle=props=>{const{children,openPanel,...others}=props,icon=openPanel?"angle-up":"angle-down";return(0,jsx_runtime.jsx)(ToogleWrapper,{...others,children:(0,jsx_runtime.jsxs)(DropdownToogle_styles_ContentWrapper,{children:[children,(0,jsx_runtime.jsx)(src.JO,{icon,margin:"l-4",size:"sm"})]})})};DropdownToogle.displayName="DropdownToogle",DropdownToogle.propTypes={children:prop_types_default().node,openPanel:prop_types_default().bool},DropdownToogle.defaultProps={children:null,openPanel:!1},DropdownToogle.__docgenInfo={description:"",methods:[],displayName:"DropdownToogle",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},openPanel:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}};var index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");const Icon_styles_Styles={IconItem:(0,styled_components_browser_esm.ZP)(index_es.G)`
  ${props=>styled_components_browser_esm.iv`
    font-size: ${props.theme.components.icon.iconSizes[props.$customsize]};
    max-height: ${props.theme.components.icon.iconSizes[props.$customsize]};
    max-widt: ${props.theme.components.icon.iconSizes[props.$customsize]};
  `}
`,IconWrapper:styled_components_browser_esm.ZP.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;

  ${props=>styled_components_browser_esm.iv`
    color: ${getColor(props.theme,props.$color)};
    height: ${props.theme.components.icon.wrapperSizes[props.size]};
    width: ${props.theme.components.icon.wrapperSizes[props.size]};
    ${(0,spacing.u)(props)}
  `}
`},Icon=props=>{const{color,icon,margin,onClick,size,spin}=props;return(0,jsx_runtime.jsx)(Icon_styles_Styles.IconWrapper,{$color:color,$margin:margin,onClick:()=>{onClick&&onClick()},size,children:(0,jsx_runtime.jsx)(Icon_styles_Styles.IconItem,{$customsize:size,icon,spin})})};Icon.displayName="Icon",Icon.propTypes={color:prop_types_default().string,icon:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().array]).isRequired,margin:prop_types_default().string,onClick:prop_types_default().func,size:prop_types_default().oneOf(["avatar","avatarSm","input","lg","md","sm","xl"]),spin:prop_types_default().bool},Icon.defaultProps={color:"black_700",icon:"home",margin:"a-0",onClick:null,size:"md",spin:!1},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{color:{defaultValue:{value:'"black_700"',computed:!1},description:"",type:{name:"string"},required:!1},icon:{defaultValue:{value:'"home"',computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"avatar"',computed:!1},{value:'"avatarSm"',computed:!1},{value:'"input"',computed:!1},{value:'"lg"',computed:!1},{value:'"md"',computed:!1},{value:'"sm"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},spin:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}};const IconButton_styles_Styles={IconButton:styled_components_browser_esm.ZP.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  height: 38px;
  justify-content: center;
  width: 38px;

  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.u)(props)}

    &:hover:enabled {
      background-color: ${props.theme.colors.black._200};
    }

    &:active:enabled {
      background-color: ${!props.loading&&props.theme.colors.black._300};
    }

    &:disabled {
      border-color: ${props.theme.colors.black._400};
      box-shadow: none;
      color: ${props.theme.colors.black._400};
    }
  `}
`},IconButton_IconButton=props=>{const{disabled,icon,margin,onClick}=props;return(0,jsx_runtime.jsx)(IconButton_styles_Styles.IconButton,{disabled,$margin:margin,onClick:()=>{onClick&&onClick()},children:(0,jsx_runtime.jsx)(src.JO,{icon:icon.name,size:icon.size})})};IconButton_IconButton.displayName="IconButton",IconButton_IconButton.propTypes={disabled:prop_types_default().bool,icon:prop_types_default().shape({name:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().array]),size:prop_types_default().oneOf(["input","lg","md","sm"])}).isRequired,margin:prop_types_default().string,onClick:prop_types_default().func},IconButton_IconButton.defaultProps={disabled:!1,icon:null,margin:"a-0",onClick:null},IconButton_IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{name:{name:"union",value:[{name:"string"},{name:"array"}],required:!1},size:{name:"enum",value:[{value:'"input"',computed:!1},{value:'"lg"',computed:!1},{value:'"md"',computed:!1},{value:'"sm"',computed:!1}],required:!1}}},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1}}};const ImagePlaceholder_styles_Styles={IconPlaceholder:styled_components_browser_esm.ZP.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.orange._600};
    border-radius: ${"round"===props.$type?"50%":"0"};
    height: ${props.theme.components.image.height[props.$type][props.$size]};
    width: ${props.theme.components.image.width[props.$type][props.$size]};

    ${(0,spacing.u)(props)}
  `};
`},ImagePlaceholder=props=>{const{placeholder,margin,size,type}=props;return(0,jsx_runtime.jsx)(ImagePlaceholder_styles_Styles.IconPlaceholder,{$margin:margin,$size:size,$type:type,children:placeholder?(0,jsx_runtime.jsx)(src.xv,{color:"black_100",type:["avatarSm","sm"].includes(size)?"captionSemibold":"bodySemibold",children:placeholder.charAt(0).toUpperCase()}):(0,jsx_runtime.jsx)(src.JO,{color:"black_100",icon:"camera",size})})};ImagePlaceholder.displayName="ImagePlaceholder",ImagePlaceholder.propTypes={margin:prop_types_default().string,placeholder:prop_types_default().string,size:prop_types_default().oneOf(["avatar","avatarSm","lg","md","sm"]),type:prop_types_default().oneOf(["round","square"])},ImagePlaceholder.defaultProps={margin:"a-0",placeholder:"",size:"md",type:"square"},ImagePlaceholder.__docgenInfo={description:"",methods:[],displayName:"ImagePlaceholder",props:{margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"avatar"',computed:!1},{value:'"avatarSm"',computed:!1},{value:'"lg"',computed:!1},{value:'"md"',computed:!1},{value:'"sm"',computed:!1}]},required:!1},type:{defaultValue:{value:'"square"',computed:!1},description:"",type:{name:"enum",value:[{value:'"round"',computed:!1},{value:'"square"',computed:!1}]},required:!1}}};const Image_styles_Styles={ImageStyles:styled_components_browser_esm.ZP.img`
  display: block;

  ${props=>styled_components_browser_esm.iv`
    border-radius: ${"round"===props.$type?"50%":"0px"};
    height: ${props.theme.components.image.height[props.$type][props.$size]};
    object-fit: cover;
    width: ${props.theme.components.image.width[props.$type][props.$size]};

    ${(0,spacing.u)(props)}
  `};
`},Image=props=>{const{alt,img,margin,placeholder,size,type}=props;return img?(0,jsx_runtime.jsx)(Image_styles_Styles.ImageStyles,{alt,$margin:margin,$size:size,src:img,$type:type}):(0,jsx_runtime.jsx)(ImagePlaceholder,{margin,placeholder,size,type})};Image.displayName="Image",Image.propTypes={alt:prop_types_default().string,img:prop_types_default().string,margin:prop_types_default().string,placeholder:prop_types_default().string,size:prop_types_default().oneOf(["avatar","avatarSm","lg","md","sm"]),type:prop_types_default().oneOf(["round","square"])},Image.defaultProps={alt:null,img:null,margin:"a-0",placeholder:"",size:"md",type:"square"},Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{alt:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},img:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"avatar"',computed:!1},{value:'"avatarSm"',computed:!1},{value:'"lg"',computed:!1},{value:'"md"',computed:!1},{value:'"sm"',computed:!1}]},required:!1},type:{defaultValue:{value:'"square"',computed:!1},description:"",type:{name:"enum",value:[{value:'"round"',computed:!1},{value:'"square"',computed:!1}]},required:!1}}};const ShowPasswordButton=props=>{const{onClick,show}=props;return(0,jsx_runtime.jsx)(src.JO,{color:"black_500",icon:show?"eye-slash":"eye",margin:"r-8",onClick,size:"sm"})};ShowPasswordButton.displayName="ShowPasswordButton",ShowPasswordButton.propTypes={onClick:prop_types_default().func,show:prop_types_default().bool},ShowPasswordButton.defaultProps={onClick:null,show:!1},ShowPasswordButton.__docgenInfo={description:"",methods:[],displayName:"ShowPasswordButton",props:{onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},show:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}};var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js");const Input_styles_Styles={Error:(0,styled_components_browser_esm.ZP)(formik_esm.Bc)`
  ${props=>styled_components_browser_esm.iv`
    color: ${props.theme.colors.alert.colors.error};
    font-size: ${props.theme.components.text.sizes.sm};
    font-weight: ${props.theme.components.text.weights.regular};
    line-height: ${props.theme.components.text.lineHeights.sm};
  `};
`,ErrorWrapper:styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    height: ${props.theme.components.text.lineHeights.sm};

    ${(0,spacing.u)(props)}
  `};
`,InputStyles:(0,styled_components_browser_esm.ZP)(formik_esm.gN)`
  background-color: transparent;
  border: none;
  flex-grow: 1;
  outline: none;
  padding: 0;

  ${props=>styled_components_browser_esm.iv`
    font-size: ${props.theme.components.text.sizes.md};
    font-weight: ${props.theme.components.text.weights.regular};
    height: ${props.theme.components.input.height};
    line-height: ${props.theme.components.text.lineHeights.md};
  `};
`,InputWrapper:styled_components_browser_esm.ZP.div`
  align-items: center;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  width: 100%;

  ${props=>styled_components_browser_esm.iv`
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.input.border.radius};
    border-width: ${props.theme.components.input.border.weight};

    ${(0,spacing.u)(props)}
    ${(0,spacing.k)(props,props.theme.components.input.padding)}
  `};
`,Wrapper:styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.u)(props)}
  `};
`},Input=props=>{const{description,icon,id,label,name,type}=props,[showPassword,setShowPassword]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(Input_styles_Styles.Wrapper,{$margin:props.margin,children:[!!label&&(0,jsx_runtime.jsx)(src.xv,{as:"label",htmlFor:id,margin:"b-4",size:"sm",weight:"semibold",children:label}),!!description&&(0,jsx_runtime.jsx)(src.xv,{color:"black_400",margin:"b-4",size:"sm",children:description}),(0,jsx_runtime.jsxs)(Input_styles_Styles.InputWrapper,{ref:props.reference,children:[!!icon&&(0,jsx_runtime.jsx)(src.JO,{icon,margin:"r-8",size:"sm"}),(0,jsx_runtime.jsx)(Input_styles_Styles.InputStyles,{autoComplete:props.autoComplete,autoFocus:props.autoFocus,id,disabled:props.disabled,innerRef:props.innerRef,name,onKeyPress:props.onKeyPress,placeholder:props.placeholder,readOnly:props.readOnly,type:showPassword?"text":type}),"password"===type&&(0,jsx_runtime.jsx)(ShowPasswordButton,{onClick:()=>{setShowPassword((prev=>!prev))},show:showPassword})]}),(0,jsx_runtime.jsx)(Input_styles_Styles.ErrorWrapper,{$margin:"l-4 t-4",children:(0,jsx_runtime.jsx)(Input_styles_Styles.Error,{component:"div",name})})]})};Input.displayName="Input",Input.propTypes={autoComplete:prop_types_default().string,autoFocus:prop_types_default().bool,description:prop_types_default().string,disabled:prop_types_default().bool,icon:prop_types_default().string,id:prop_types_default().string,innerRef:prop_types_default().oneOfType([prop_types_default().object,prop_types_default().func]),label:prop_types_default().string,margin:prop_types_default().string,name:prop_types_default().string.isRequired,onKeyPress:prop_types_default().func,placeholder:prop_types_default().string,readOnly:prop_types_default().bool,reference:prop_types_default().oneOfType([prop_types_default().object,prop_types_default().func]),type:prop_types_default().oneOf(["number","password","text"])},Input.defaultProps={autoComplete:"off",autoFocus:!1,description:"",disabled:!1,icon:null,id:null,innerRef:null,label:"",margin:"a-0",name:"",onKeyPress:null,placeholder:"",readOnly:!1,reference:null,type:"text"},Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{autoComplete:{defaultValue:{value:'"off"',computed:!1},description:"",type:{name:"string"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},description:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},innerRef:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"object"},{name:"func"}]},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onKeyPress:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},reference:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"object"},{name:"func"}]},required:!1},type:{defaultValue:{value:'"text"',computed:!1},description:"",type:{name:"enum",value:[{value:'"number"',computed:!1},{value:'"password"',computed:!1},{value:'"text"',computed:!1}]},required:!1}}};const Modal_styles_Styles={ButtonsWrapper:styled_components_browser_esm.ZP.div`
  text-align: right;
`,CloseBtnWrapper:styled_components_browser_esm.ZP.div`
  position: absolute;

  ${props=>styled_components_browser_esm.iv`
    right: ${props.theme.components.modal.closeButton.position.right};
    top: ${props.theme.components.modal.closeButton.position.top};
  `}
`,ContentBox:styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    padding: ${(0,spacing.k)(props)};
  `}
`,Overlay:styled_components_browser_esm.ZP.div`
  align-items: center;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.35); //TODO: agregar color al theme.
  display: flex;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`,PanelWrapper:styled_components_browser_esm.ZP.div`
  margin: auto;
  width: 100%;

  ${props=>styled_components_browser_esm.iv`
    max-width: ${props.width};
    padding: ${(0,spacing.k)(props,props.theme.components.modal.panel.padding)};
  `}
`},Modal=props=>{const{onClose,show}=props;return show?(0,jsx_runtime.jsx)(Modal_styles_Styles.Overlay,{children:(0,jsx_runtime.jsx)(Modal_styles_Styles.PanelWrapper,{width:props.width,children:(0,jsx_runtime.jsxs)(src.s_,{padding:"a-20",children:[(0,jsx_runtime.jsx)(Modal_styles_Styles.CloseBtnWrapper,{children:(0,jsx_runtime.jsx)(src.hU,{icon:{name:"times"},onClick:onClose})}),(0,jsx_runtime.jsx)(Modal_styles_Styles.ContentBox,{$padding:"r-28",children:props.children}),(0,jsx_runtime.jsxs)(Modal_styles_Styles.ButtonsWrapper,{children:[!props.cancelButton.hide&&(0,jsx_runtime.jsx)(src.zx,{kind:"outlined",onClick:onClose,children:props.cancelButton.text}),!props.confirmButton.hide&&(0,jsx_runtime.jsx)(src.zx,{margin:"l-8",onClick:props.confirmButton.onClick,children:props.confirmButton.text})]})]})})}):null};Modal.displayName="Modal",Modal.propTypes={cancelButton:prop_types_default().shape({hide:prop_types_default().bool,text:prop_types_default().string}),children:prop_types_default().node,confirmButton:prop_types_default().shape({hide:prop_types_default().bool,onClick:prop_types_default().func,text:prop_types_default().string}),onClose:prop_types_default().func,show:prop_types_default().bool,width:prop_types_default().string},Modal.defaultProps={cancelButton:{hide:!1,text:"Cancelar"},children:null,confirmButton:{hide:!1,onClick:null,text:"Continuar"},onClose:null,show:!1,width:"auto"},Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{cancelButton:{defaultValue:{value:'{\r\n  hide: false,\r\n  text: "Cancelar",\r\n}',computed:!1},description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},text:{name:"string",required:!1}}},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},confirmButton:{defaultValue:{value:'{\r\n  hide: false,\r\n  onClick: null,\r\n  text: "Continuar",\r\n}',computed:!1},description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},onClick:{name:"func",required:!1},text:{name:"string",required:!1}}},required:!1},onClose:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},show:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},width:{defaultValue:{value:'"auto"',computed:!1},description:"",type:{name:"string"},required:!1}}};const Panel_styles_Styles={ContentWrapper:styled_components_browser_esm.ZP.div`
  flex-grow: 1;

  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.u)(props)}
  `}
`,PanelWrapper:styled_components_browser_esm.ZP.div`
  display: flex;
  position: relative;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.alert.bgColors[props.type]};
    border-radius: ${props.theme.components.panel.border.radius};
    box-shadow: ${props.theme.shadows.level2};
    color: ${props.theme.colors.alert.colors[props.type]};

    &::-webkit-scrollbar {
      width: ${props.theme.components.panel.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._300};
    }

    ${(0,spacing.u)(props)}
    ${(0,spacing.k)(props,props.theme.components.panel.padding)}
  `}
`,PositionWrapper:styled_components_browser_esm.ZP.div`
  display: flex;
  flex-grow: 1;

  ${props=>styled_components_browser_esm.iv`
    align-items: ${props.$align};
  `}
`},icons={fontawesome:{error:"times-circle",info:"question-circle",success:"check-circle",warning:"exclamation-circle"}},Panel=props=>{const{align,margin,padding,onSizeH,type}=props,ref=(0,react.useRef)(null),[height,setHeight]=(0,react.useState)(0);return(0,react.useLayoutEffect)((()=>{setHeight(ref.current.clientHeight)}),[]),(0,react.useEffect)((()=>{onSizeH&&onSizeH(height)}),[height]),(0,jsx_runtime.jsx)(Panel_styles_Styles.PanelWrapper,{$margin:margin,$padding:padding,ref,type,children:(0,jsx_runtime.jsxs)(Panel_styles_Styles.PositionWrapper,{$align:align,children:["neutral"!==type&&(0,jsx_runtime.jsx)(src.JO,{icon:icons.fontawesome[type],margin:"r-16"}),(0,jsx_runtime.jsx)(Panel_styles_Styles.ContentWrapper,{$margin:"t-4",children:props.children})]})})};Panel.displayName="Panel",Panel.propTypes={align:prop_types_default().oneOf(["center","end","start"]),children:prop_types_default().node,margin:prop_types_default().string,onSizeH:prop_types_default().func,padding:prop_types_default().string,type:prop_types_default().oneOf(["error","info","neutral","success","warning"])},Panel.defaultProps={align:"start",children:null,margin:"a-0",onSizeH:null,padding:"a-8",type:"neutral"},Panel.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{align:{defaultValue:{value:'"start"',computed:!1},description:"",type:{name:"enum",value:[{value:'"center"',computed:!1},{value:'"end"',computed:!1},{value:'"start"',computed:!1}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},onSizeH:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},padding:{defaultValue:{value:'"a-8"',computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:'"neutral"',computed:!1},description:"",type:{name:"enum",value:[{value:'"error"',computed:!1},{value:'"info"',computed:!1},{value:'"neutral"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1}}};const ProgressBar_styles_Styles={BarWrapper:styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.orange._600};
    height: ${props.size&&props.theme.components.progressBar.height[props.size]};
    width: ${props.$porcent?props.$porcent:"0%"};
  `}
`,ProgressBarWrapper:styled_components_browser_esm.ZP.div`
  overflow: hidden;
  width: 100%;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.black._300};
    border-radius: ${props.$borderRound&&props.theme.components.progressBar.border.radius[props.size]};

    ${(0,spacing.u)(props)}
  `}
`},Bar=props=>{const{onFinish,step,stepTime,steps}=props,[width,setWidth]=(0,react.useState)(0),timer=(0,react.useRef)();(0,react.useEffect)((()=>()=>{timer.current&&clearTimeout(timer.current)}),[]),(0,react.useEffect)((()=>{const finishWidth=Math.floor(100*step/steps);props.noShowAnimationOnFirstLoad?setWidth(finishWidth):finishWidth>width?(timer.current&&clearTimeout(timer.current),timer.current=setTimeout((()=>{setWidth((previusWidth=>previusWidth+1))}),stepTime)):finishWidth<width&&(timer.current&&clearTimeout(timer.current),timer.current=setTimeout((()=>{setWidth((previusWidth=>previusWidth-1))}),stepTime)),finishWidth===width&&onFinish&&onFinish()}),[step,steps,width]);return(0,jsx_runtime.jsx)(ProgressBar_styles_Styles.BarWrapper,{size:props.size,$porcent:(()=>{let porcent=width;return porcent<=0&&(porcent=0),porcent>100&&(porcent=100),`${porcent}%`})()})};Bar.displayName="Bar",Bar.propTypes={noShowAnimationOnFirstLoad:prop_types_default().bool,onFinish:prop_types_default().func,size:prop_types_default().oneOf(["sm","md","lg"]),step:prop_types_default().number,stepTime:prop_types_default().number,steps:prop_types_default().number},Bar.defaultProps={noShowAnimationOnFirstLoad:!1,onFinish:null,size:"md",step:0,stepTime:10,steps:0},Bar.__docgenInfo={description:"",methods:[],displayName:"Bar",props:{noShowAnimationOnFirstLoad:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onFinish:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},step:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},stepTime:{defaultValue:{value:"10",computed:!1},description:"",type:{name:"number"},required:!1},steps:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1}}};const ProgressBar=props=>{let{margin,size,steps}=props;const stepsRef=(0,react.useRef)(steps);return(0,react.useEffect)((()=>{stepsRef.current>100?stepsRef.current=100:stepsRef.current<0&&(stepsRef.current=0)}),[stepsRef]),(0,jsx_runtime.jsx)(ProgressBar_styles_Styles.ProgressBarWrapper,{$margin:margin,size,children:(0,jsx_runtime.jsx)(Bar,{noShowAnimationOnFirstLoad:props.noShowAnimationOnFirstLoad,onFinish:props.onFinish,size:props.size,step:props.step,stepTime:props.stepTime,steps:stepsRef.current})})};ProgressBar.displayName="ProgressBar",ProgressBar.propTypes={borderRound:prop_types_default().bool,margin:prop_types_default().string,noShowAnimationOnFirstLoad:prop_types_default().bool,onFinish:prop_types_default().func,size:prop_types_default().oneOf(["sm","md","lg"]),step:prop_types_default().number,stepTime:prop_types_default().number,steps:prop_types_default().number},ProgressBar.defaultProps={borderRound:!1,margin:"a-0",noShowAnimationOnFirstLoad:!1,onFinish:null,size:"md",step:0,stepTime:10,steps:100},ProgressBar.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{borderRound:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},noShowAnimationOnFirstLoad:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onFinish:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},step:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},stepTime:{defaultValue:{value:"10",computed:!1},description:"",type:{name:"number"},required:!1},steps:{defaultValue:{value:"100",computed:!1},description:"",type:{name:"number"},required:!1}}};const SelectContext=(0,react.createContext)({}),SelectProvider=props=>{const{children,name,options}=props,{values}=(0,formik_esm.u6)(),[isOpen,setIsOpen]=(0,react.useState)(!1),[selectedValue,setSelectedValue]=(0,react.useState)(values[name]),closeSelect=()=>setIsOpen(!1);return(0,jsx_runtime.jsx)(SelectContext.Provider,{value:{isOpen,options,selectedValue,closeSelect,handleSelectedValue:value=>{setSelectedValue(value)},toogleSelect:()=>{isOpen?closeSelect():setIsOpen(!0)}},children})};SelectProvider.displayName="SelectProvider",SelectProvider.propTypes={children:prop_types_default().node,name:prop_types_default().string,options:prop_types_default().array},SelectProvider.defaultProps={children:null,name:"",options:[]},SelectProvider.__docgenInfo={description:"",methods:[],displayName:"SelectProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1}}};const SelectValue=props=>{const{name}=props,ctx=(0,react.useContext)(SelectContext),{setFieldValue}=(0,formik_esm.u6)();return(0,react.useEffect)((()=>{setFieldValue(name,ctx.selectedValue)}),[ctx.selectedValue]),(0,jsx_runtime.jsx)(formik_esm.gN,{name,type:"hidden"})};SelectValue.displayName="SelectValue",SelectValue.propTypes={name:prop_types.PropTypes.string},SelectValue.defaultProps={name:""},SelectValue.__docgenInfo={description:"",methods:[],displayName:"SelectValue",props:{name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const SelectContent_styles_Styles={SelectPanel:styled_components_browser_esm.ZP.div`
  border-style: solid;
  box-sizing: border-box;
  overflow: auto;
  position: absolute;
  z-index: 50;
  width: 100%;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.black._100};
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.select.border.radius};
    border-width: ${props.theme.components.select.border.width};
    margin-top: ${props.theme.components.select.panel.margin.top};
    max-height: ${props.$maxHeight};
    padding: ${props.theme.components.select.panel.padding};
    top: ${props.theme.components.select.height};

    &::-webkit-scrollbar {
      width: ${props.theme.components.select.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._300};
    }
  `};
`,SelectedOption:styled_components_browser_esm.ZP.div`
  flex-grow: 1;
`,SelectedOptionWrapper:styled_components_browser_esm.ZP.div`
  align-items: center;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  width: 100%;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.black._100};
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.select.border.radius};
    border-width: ${props.theme.components.select.border.width};
    height: ${props.theme.components.select.height};
    opacity: ${props.disabled&&"0.5"};
  `};
`,SelectWrapper:styled_components_browser_esm.ZP.div`
  position: relative;
  width: 100%;
`},SelectContent=props=>{const{disabled,maxHeight}=props,ctx=(0,react.useContext)(SelectContext);return(0,jsx_runtime.jsxs)(SelectContent_styles_Styles.SelectWrapper,{children:[(0,jsx_runtime.jsxs)(SelectContent_styles_Styles.SelectedOptionWrapper,{disabled,onClick:()=>{disabled||ctx.toogleSelect()},children:[(0,jsx_runtime.jsx)(SelectContent_styles_Styles.SelectedOption,{children:(0,jsx_runtime.jsx)(Text,{margin:"l-8",children:(()=>{const option=ctx.options.find((option=>option.value===ctx.selectedValue));return option?option.display:null})()||ctx.selectedValue||"- Seleccione una opción -"})}),(0,jsx_runtime.jsx)(Icon,{icon:(isOpen=ctx.isOpen,isOpen?"caret-up":"caret-down"),margin:"r-8",size:"sm"})]}),ctx.isOpen?(0,jsx_runtime.jsx)(SelectContent_styles_Styles.SelectPanel,{$margin:"t-8",$maxHeight:maxHeight,children:ctx.options.map((option=>(0,jsx_runtime.jsx)(SelectOption_SelectOption,{value:option.value,children:option.children},`option-${option.value}`)))}):null]});var isOpen};SelectContent.displayName="SelectContent",SelectContent.propTypes={disabled:prop_types_default().bool,maxHeight:prop_types_default().string},SelectContent.defaultProps={disabled:!1,maxHeight:"auto"},SelectContent.__docgenInfo={description:"",methods:[],displayName:"SelectContent",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},maxHeight:{defaultValue:{value:'"auto"',computed:!1},description:"",type:{name:"string"},required:!1}}};const SelectOption_styles_Styles={SelectOption:styled_components_browser_esm.ZP.div`
  cursor: pointer;
  padding: 4px 8px;

  ${props=>styled_components_browser_esm.iv`
    &:hover {
      background-color: ${props.theme.colors.black._200};
    }
  `};
`},SelectOption_SelectOption=props=>{const{value}=props,ctx=(0,react.useContext)(SelectContext);return(0,jsx_runtime.jsx)(SelectOption_styles_Styles.SelectOption,{onClick:()=>{ctx.handleSelectedValue(value),ctx.closeSelect()},children:props.children})};SelectOption_SelectOption.displayName="SelectOption",SelectOption_SelectOption.propTypes={children:prop_types_default().node,value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().bool])},SelectOption_SelectOption.defaultProps={children:null,value:""},SelectOption_SelectOption.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"bool"}]},required:!1}}};const Select_styles_Styles={Wrapper:styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.u)(props)}
  `};
`},Select=props=>{const{disabled,label,margin,maxHeight,name,options}=props;return(0,jsx_runtime.jsxs)(SelectProvider,{name,options,children:[(0,jsx_runtime.jsx)(SelectValue,{name}),(0,jsx_runtime.jsxs)(Select_styles_Styles.Wrapper,{$margin:margin,children:[!!label&&(0,jsx_runtime.jsx)(src.xv,{as:"label",htmlFor:name,margin:"b-4",size:"sm",weight:"semibold",children:label}),(0,jsx_runtime.jsx)(SelectContent,{disabled,maxHeight})]})]})};Select.displayName="Select",Select.propTypes={disabled:prop_types_default().bool,label:prop_types_default().string,name:prop_types_default().string,margin:prop_types_default().string,maxHeight:prop_types_default().string,options:prop_types_default().array},Select.defaultProps={disabled:!1,label:"",name:"",margin:"",maxHeight:"auto",options:[]},Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},margin:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},maxHeight:{defaultValue:{value:'"auto"',computed:!1},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1}}};const DesktopTable_styles_Styles={Column:styled_components_browser_esm.ZP.div`
  ${props=>`\n    width: ${props.width};\n  `}
`,Row:styled_components_browser_esm.ZP.div`
  align-items: center;
  border-bottom-style: solid;
  box-sizing: border-box;
  display: flex;
  width: 100%;

  ${props=>`\n    border-bottom-color: ${props.theme.colors.black._400};\n    border-bottom-width: ${props.theme.components.table.row.borderBottom.width};\n    cursor: ${props.$isHeader?"default":"pointer"};\n    padding: ${props.theme.components.table.row.padding};\n\n    &:hover {\n      background-color: ${props.$isHeader?"transparent":props.theme.colors.black._200};\n    }\n\n    &:hover&:active {\n      background-color: ${props.$isHeader?"transparent":props.theme.colors.black._300};\n    }\n  `}
`,Wrapper:styled_components_browser_esm.ZP.div`
  ${props=>`\n    ${(0,spacing.u)(props)}\n  `}
`},DesktopTable=props=>{const{columns,data,desktopColumns,margin,name,onClick}=props,list=desktopColumns.length>0?desktopColumns:columns.length?columns:[];return(0,jsx_runtime.jsxs)(DesktopTable_styles_Styles.Wrapper,{$margin:margin,children:[(0,jsx_runtime.jsx)(DesktopTable_styles_Styles.Row,{$isHeader:!0,children:list.map(((column,idxC)=>(0,jsx_runtime.jsx)(DesktopTable_styles_Styles.Column,{width:column.width,children:(0,jsx_runtime.jsx)(Text,{weight:"semibold",children:column.label})},`table-${name}-row-title-column-${idxC}`)))}),data.map(((row,idxR)=>(0,jsx_runtime.jsx)(DesktopTable_styles_Styles.Row,{onClick:()=>onClick&&onClick(row),children:list.map(((column,idxC)=>(0,jsx_runtime.jsx)(DesktopTable_styles_Styles.Column,{width:column.width,children:column.content(row)},`table-${name}-row-${idxR}-column-${idxC}`)))},`table-row-${idxR}`)))]})};DesktopTable.displayName="DesktopTable",DesktopTable.propTypes={columns:prop_types_default().array,data:prop_types_default().array.isRequired,desktopColumns:prop_types_default().array,margin:prop_types_default().string,name:prop_types_default().string,onClick:prop_types_default().func},DesktopTable.defaultProps={columns:[],data:[],desktopColumns:[],margin:"a-0",name:"",onClick:null},DesktopTable.__docgenInfo={description:"",methods:[],displayName:"DesktopTable",props:{columns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},data:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},desktopColumns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1}}};const PhoneTable_styles_Styles={Column:styled_components_browser_esm.ZP.div`
  ${props=>`\n    display: ${props.mobile?.inline?"inline-block":"block"};\n    width: ${props.mobile?.width?props.mobile.width:"100%"};\n  `};
`,Row:styled_components_browser_esm.ZP.div`
  border-bottom-style: solid;
  box-sizing: content-box;

  ${props=>`\n    border-bottom-color: ${props.theme.colors.black._400};\n    border-bottom-width: ${props.theme.components.table.row.borderBottom.width};\n    padding: ${props.theme.components.table.row.padding};\n\n    &:hover {\n      background-color: ${props.theme.colors.black._200};\n    }\n\n    &:hover&:active {\n      background-color: ${props.theme.colors.black._300};\n    }\n  `};
`,Wrapper:styled_components_browser_esm.ZP.div`
  ${props=>`\n    ${(0,spacing.u)(props)}\n  `}
`},PhoneTable=props=>{const{columns,data,mobileColumns,margin,name,onClick}=props,list=mobileColumns.length>0?mobileColumns:columns.length?columns:[];return(0,jsx_runtime.jsx)(PhoneTable_styles_Styles.Wrapper,{$margin:margin,children:data.map(((row,idx)=>(0,jsx_runtime.jsx)(PhoneTable_styles_Styles.Row,{onClick:()=>onClick&&onClick(row),children:list.map(((column,idx)=>(0,jsx_runtime.jsxs)(PhoneTable_styles_Styles.Column,{mobile:column.mobile,children:[(0,jsx_runtime.jsx)(Text,{weight:"semibold",children:column.label}),column.content(row)]},`table-${name}-column-${idx}`)))},`table-${name}-row-${idx}`)))})};PhoneTable.displayName="PhoneTable",PhoneTable.propTypes={columns:prop_types.PropTypes.array.isRequired,data:prop_types.PropTypes.array.isRequired,margin:prop_types.PropTypes.string,mobileColumns:prop_types.PropTypes.array,name:prop_types.PropTypes.string,onClick:prop_types.PropTypes.func},PhoneTable.defaultProps={columns:[],data:[],margin:"a-0",mobileColumns:[],name:"",onClick:null},PhoneTable.__docgenInfo={description:"",methods:[],displayName:"PhoneTable",props:{columns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},data:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},mobileColumns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1}}};const Table=props=>{const size=(()=>{const[windowSize,setWindowSize]=(0,react.useState)({width:void 0,height:void 0});return(0,react.useEffect)((()=>{function handleResize(){setWindowSize({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",handleResize),handleResize(),()=>window.removeEventListener("resize",handleResize)}),[]),windowSize})(),theme=(0,styled_components_browser_esm.Fg)();return size.width>theme.breakpoints.mobile?(0,jsx_runtime.jsx)(DesktopTable,{columns:props.columns,data:props.data,desktopColumns:props.desktopColumns,margin:props.margin,name:props.name,onClick:props.onClick}):(0,jsx_runtime.jsx)(PhoneTable,{columns:props.columns,data:props.data,margin:props.margin,mobileColumns:props.mobileColumns,name:props.name,onClick:props.onClick})};Table.displayName="Table",Table.propTypes={columns:prop_types_default().array.isRequired,data:prop_types_default().array.isRequired,desktopColumns:prop_types_default().array,margin:prop_types_default().string,mobileColumns:prop_types_default().array,name:prop_types_default().string,onClick:prop_types_default().func},Table.defaultProps={columns:[],data:[],desktopColumns:[],margin:"a-0",mobileColumns:[],name:"",onClick:null},Table.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},data:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},desktopColumns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},mobileColumns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1}}};const Tab=props=>{const{children}=props;return(0,jsx_runtime.jsx)("div",{children})};Tab.displayName="Tab",Tab.propTypes={children:prop_types_default().node,name:prop_types_default().string},Tab.defaultProps={children:null,name:""},Tab.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const Tabs_styles_Styles={TabsBar:styled_components_browser_esm.ZP.div`
  border-bottom-style: solid;

  ${props=>styled_components_browser_esm.iv`
    border-bottom-color: ${props.theme.colors.black._200};
    border-bottom-width: ${props.theme.components.tabs.bar.border.width};

    ${(0,spacing.k)(props,props.theme.components.tabs.bar.padding)}
  `};
`,TabButton:styled_components_browser_esm.ZP.button`
  background-color: transparent;
  border: none;
  border-bottom-style: solid;

  ${props=>styled_components_browser_esm.iv`
    border-bottom-color: ${props.$isSelected?props.theme.colors.orange._600:"transparent"};
    border-bottom-width: ${props.theme.components.tabs.button.border.width};

    ${(0,spacing.k)(props,props.theme.components.tabs.button.padding)}

    &:hover {
      border-bottom-color: ${props.theme.colors.orange._300};
    }
  `};
`,TabContent:styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.k)(props,props.theme.components.tabs.content.padding)}
  `};
`,Wrapper:styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.u)(props)}
    ${(0,spacing.k)(props)}
  `};
`},Tabs=props=>{const{children,margin,name,padding}=props,[tabsName,setTabsName]=(0,react.useState)([]),[posTabSelected,setPosTabSelected]=(0,react.useState)(0);(0,react.useEffect)((()=>{children.forEach((elm=>{setTabsName((prev=>[...prev,elm.props.name]))}))}),[]);const handleBtnClick=e=>{const tabIdx=tabsName.indexOf(e.target.innerText);setPosTabSelected(tabIdx)};return(0,jsx_runtime.jsxs)(Tabs_styles_Styles.Wrapper,{$margin:margin,$padding:padding,children:[(0,jsx_runtime.jsx)(Tabs_styles_Styles.TabsBar,{children:tabsName.map(((tabName,idx)=>(0,jsx_runtime.jsx)(Tabs_styles_Styles.TabButton,{id:tabName,$isSelected:idx===posTabSelected,onClick:handleBtnClick,value:tabName,children:(0,jsx_runtime.jsx)(src.xv,{weight:"semibold",children:tabName})},`${name}_tab_${idx}`)))}),(0,jsx_runtime.jsx)(Tabs_styles_Styles.TabContent,{children:children[posTabSelected]})]})};Tabs.displayName="Tabs",Tabs.propTypes={children:prop_types_default().node,margin:prop_types_default().string,name:prop_types_default().string,padding:prop_types_default().string},Tabs.defaultProps={children:null,margin:"a-0",name:"",padding:"a-0"},Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},padding:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1}}};const textStyles=props=>styled_components_browser_esm.iv`
    color: ${getColor(props.theme,props.$color)};
    font-family: "Source Sans 3", sans-serif;
    font-size: ${()=>{const{sizes,types}=props.theme.components.text;return types[props.$type]?.size||sizes[props.$size]}};
    font-weight: ${()=>{const{weights,types}=props.theme.components.text;return types[props.$type]?.weight||weights[props.$weight]}};
    line-height: ${()=>{const{lineHeights,types}=props.theme.components.text;return types[props.$type]?.lineHeight||lineHeights[props.$size]}};
    text-align: ${props.$align};
    text-decoration: ${props.$decoration};

    ${(0,spacing.u)(props)}
    ${(0,spacing.k)(props)}
  `,TextWrapper=styled_components_browser_esm.ZP.p`
  ${props=>textStyles(props)};
`,Text_styles_Styles={LabelWrapper:styled_components_browser_esm.ZP.label`
  display: inline-block;
  ${props=>textStyles(props)};
`,TextWrapper},Text=props=>{const{as,htmlFor}=props,textOptions={$align:props.align,children:props.children,$color:props.color,$decoration:props.decoration,$margin:props.margin,$padding:props.padding,$size:props.size,$type:props.type,$weight:props.weight};return"label"===as?(0,jsx_runtime.jsx)(Text_styles_Styles.LabelWrapper,{htmlFor,...textOptions}):(0,jsx_runtime.jsx)(Text_styles_Styles.TextWrapper,{as,...textOptions})};Text.propTypes={align:prop_types_default().oneOf(["center","end","start"]),as:prop_types_default().oneOf(["label","p","span"]),color:prop_types_default().string,decoration:prop_types_default().oneOf(["underline","line-through"]),htmlFor:prop_types_default().string,margin:prop_types_default().string,padding:prop_types_default().string,size:prop_types_default().oneOf(["xs","sm","md","lg","xl","xxl "]),type:prop_types_default().oneOf(["bodyRegular","bodySemibold","captionRegular","captionSemibold","pageTitle","subtitle","title"]),weight:prop_types_default().oneOf(["bold","regular","semibold"])},Text.defaultProps={align:"start",as:"p",color:"black_900",decoration:null,htmlFor:"",margin:"a-0",padding:"a-0",size:"sm",type:null,weight:"regular"},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{align:{defaultValue:{value:'"start"',computed:!1},description:"",type:{name:"enum",value:[{value:'"center"',computed:!1},{value:'"end"',computed:!1},{value:'"start"',computed:!1}]},required:!1},as:{defaultValue:{value:'"p"',computed:!1},description:"",type:{name:"enum",value:[{value:'"label"',computed:!1},{value:'"p"',computed:!1},{value:'"span"',computed:!1}]},required:!1},color:{defaultValue:{value:'"black_900"',computed:!1},description:"",type:{name:"string"},required:!1},decoration:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"enum",value:[{value:'"underline"',computed:!1},{value:'"line-through"',computed:!1}]},required:!1},htmlFor:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},padding:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:'"sm"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1},{value:'"xxl "',computed:!1}]},required:!1},type:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"enum",value:[{value:'"bodyRegular"',computed:!1},{value:'"bodySemibold"',computed:!1},{value:'"captionRegular"',computed:!1},{value:'"captionSemibold"',computed:!1},{value:'"pageTitle"',computed:!1},{value:'"subtitle"',computed:!1},{value:'"title"',computed:!1}]},required:!1},weight:{defaultValue:{value:'"regular"',computed:!1},description:"",type:{name:"enum",value:[{value:'"bold"',computed:!1},{value:'"regular"',computed:!1},{value:'"semibold"',computed:!1}]},required:!1}}}},"./src/components/layout/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xu:()=>Box,oe:()=>Columns,kC:()=>Flex,gK:()=>ThemeDS});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/styles/spacing.js");const Wrapper=styled_components_browser_esm.ZP.div`
  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.u)(props)}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=props=>{const{margin}=props;return(0,jsx_runtime.jsx)(Wrapper,{$margin:margin,children:props.children})};Box.displayName="Box",Box.propTypes={children:prop_types_default().node,margin:prop_types_default().string},Box.defaultProps={children:null,margin:"a-0"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1}}};const Columns_styles_Wrapper=styled_components_browser_esm.ZP.div`
  display: grid;

  ${props=>styled_components_browser_esm.iv`
    grid-template-columns: repeat(${props.children.length}, 1fr);
    grid-column-gap: ${props.$gap};
    grid-row-gap: ${props.$gap};

    ${(0,spacing.u)(props)}

    @media only screen and (max-width: ${props.$minWidth}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`,Columns=props=>{const{gap,margin,minWidth}=props;return(0,jsx_runtime.jsx)(Columns_styles_Wrapper,{$gap:gap,$margin:margin,$minWidth:minWidth,children:props.children})};Columns.displayName="Columns",Columns.propTypes={children:prop_types_default().node,gap:prop_types_default().string,margin:prop_types_default().string,minWidth:prop_types_default().string},Columns.defaultProps={children:null,gap:"20px",margin:"a-0",minWidth:"600px"},Columns.__docgenInfo={description:"",methods:[],displayName:"Columns",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},gap:{defaultValue:{value:'"20px"',computed:!1},description:"",type:{name:"string"},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},minWidth:{defaultValue:{value:'"600px"',computed:!1},description:"",type:{name:"string"},required:!1}}};const Styles={Wrapper:styled_components_browser_esm.ZP.div`
  display: flex;

  ${props=>styled_components_browser_esm.iv`
    align-items: ${props.$vAlign};
    justify-content: ${props.$hAlign};

    ${(0,spacing.u)(props)}
  `}
`},Flex=props=>{const{hAlign,margin,vAlign}=props;return(0,jsx_runtime.jsx)(Styles.Wrapper,{$margin:margin,$hAlign:hAlign,$vAlign:vAlign,children:props.children})};Flex.displayName="Flex",Flex.propTypes={children:prop_types_default().node,hAlign:prop_types_default().oneOf(["center","end","space-around","space-between","start"]),margin:prop_types_default().string,vAlign:prop_types_default().oneOf(["center","end","start"])},Flex.defaultProps={children:null,hAlign:"start",margin:"a-0",vAlign:"center"},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},hAlign:{defaultValue:{value:'"start"',computed:!1},description:"",type:{name:"enum",value:[{value:'"center"',computed:!1},{value:'"end"',computed:!1},{value:'"space-around"',computed:!1},{value:'"space-between"',computed:!1},{value:'"start"',computed:!1}]},required:!1},margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},vAlign:{defaultValue:{value:'"center"',computed:!1},description:"",type:{name:"enum",value:[{value:'"center"',computed:!1},{value:'"end"',computed:!1},{value:'"start"',computed:!1}]},required:!1}}};var Helmet=__webpack_require__("./node_modules/react-helmet/es/Helmet.js");const lineHeights={xs:"18px",sm:"20px",md:"28px",lg:"32px",xl:"42px"},sizes={xs:"12px",sm:"14px",md:"18px",lg:"22px",xl:"28px"},weights={bold:800,regular:400,semibold:600},loud={breakpoints:{mobile:768},components:{appLayout:{content:{padding:"a-20"},scroll:{width:"8px",radious:"4px"},sidebar:{border:{width:"1px"},bottomContent:{padding:"y-2"},content:{height:"49px"},button:{padding:"l-18 y-12"},width:{contracted:"56px",expanded:"240px"}},topbar:{height:"56px"}},avatar:{thickShadow:"4px"},badge:{border:{radius:"4px"},padding:"x-8 y-4"},button:{outlined:{borderRadius:"4px",height:"38px",padding:"7px 12px"},solid:{borderRadius:"4px",height:"38px",padding:"8px 12px"}},checkbox:{border:{radius:"4px",width:"1px"},padding:{left:"24px"},width:"15px"},divider:{height:"1px"},dropdown:{panelSize:{width:"200px"}},icon:{iconSizes:{avatarSm:"8px",avatar:"12px",input:"12px",sm:"16px",md:"20px",lg:"32px",xl:"48px"},wrapperSizes:{avatarSm:"12px",avatar:"20px",input:"20px",sm:"20px",md:"24px",lg:"36px"}},image:{height:{round:{avatar:"30px",avatarSm:"24px",sm:"48px",md:"72px",lg:"96px"},square:{sm:"96px",md:"144px",lg:"192px"}},width:{round:{avatar:"30px",avatarSm:"24px",sm:"48px",md:"72px",lg:"96px"},square:{sm:"77px",md:"115px",lg:"154px"}}},input:{border:{radius:"6px",weight:"1px"},height:"24px",padding:"x-6 y-2"},modal:{closeButton:{position:{right:"12px",top:"12px"}},panel:{padding:"x-16 y-0"}},panel:{border:{radius:"4px"},padding:"a-4",scroll:{width:"6px"}},progressBar:{border:{radius:{sm:"3px",md:"5px",lg:"6px"}},height:{sm:"6px",md:"10px",lg:"12px"}},select:{border:{radius:"4px",width:"1px"},height:"30px",padding:"x-6 y-2",panel:{margin:{top:"4px"},padding:"4px 0"},scroll:{width:"6px"}},stepsBar:{circle:{diameter:{md:"30px"}},progressBar:{width:{md:"100px"}}},table:{row:{borderBottom:{style:"solid",width:"1px"},padding:"8px 16px"}},tabs:{bar:{border:{width:"1px"},padding:"b-1"},button:{border:{width:"2px"},padding:"x-20 y-8"},content:{padding:"a-20"}},text:{lineHeights,sizes,types:{bodyRegular:{lineHeight:lineHeights.sm,size:sizes.sm,weight:weights.regular},bodySemibold:{lineHeight:lineHeights.sm,size:sizes.sm,weight:weights.semibold},captionRegular:{lineHeight:lineHeights.xs,size:sizes.xs,weight:weights.regular},captionSemibold:{lineHeight:lineHeights.xs,size:sizes.xs,weight:weights.semibold},pageTitle:{lineHeight:lineHeights.xl,size:sizes.xl,weight:weights.bold},subtitle:{lineHeight:lineHeights.md,size:sizes.md,weight:weights.semibold},title:{lineHeight:lineHeights.lg,size:sizes.lg,weight:weights.bold}},weights}},shadows:{level1:"0px 1px 2px rgba(15, 15, 15, 0.25)",level2:"0px 2px 4px rgba(15, 15, 15, 0.25)",level3:"0px 4px 8px rgba(15, 15, 15, 0.25)",level4:"0px 8px 16px rgba(15, 15, 15, 0.25)"}},blackColors={_900:"#18181B",_800:"#27272A",_700:"#363636",_600:"#52525B",_500:"#71717A",_400:"#A1A1AA",_300:"#D4D4D8",_200:"#E4E4E7",_100:"#F4F4F5"},colors={whiteTheme:{alert:{bgColors:{error:"#FED7D7",info:"#D6EAF8",neutral:blackColors._100,success:"#C6F6D5",warning:"#F9E79F"},colors:{error:"#822727",info:"#21618C",neutral:blackColors,success:"#008F39",warning:"#B7950B"}},black:blackColors,orange:{_900:"#7B441E",_800:"#B75404",_700:"#CE712A",_600:"#F47A1D",_500:"#F78223",_400:"#F79A51",_300:"#faad82",_200:"#FBBD89",_100:"#FEE4CD"}}},getTheme=name=>({colors:colors.whiteTheme,name,...loud}),ThemeDS=props=>{const{children,name,theme}=props;return(0,jsx_runtime.jsxs)(styled_components_browser_esm.f6,{theme:theme||getTheme(name),children:[(0,jsx_runtime.jsxs)(Helmet.q,{children:[(0,jsx_runtime.jsx)("link",{href:"https://fonts.googleapis.com",rel:"preconnect"}),(0,jsx_runtime.jsx)("link",{crossOrigin:!0,href:"https://fonts.gstatic.com",rel:"preconnect"}),(0,jsx_runtime.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap",rel:"stylesheet"})]}),children]})};ThemeDS.displayName="ThemeDS",ThemeDS.propTypes={children:prop_types_default().node,name:prop_types_default().oneOf(["loudLight"]),theme:prop_types_default().object},ThemeDS.defaultProps={children:null,name:"loudLight",theme:null},ThemeDS.__docgenInfo={description:"",methods:[],displayName:"ThemeDS",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},name:{defaultValue:{value:'"loudLight"',computed:!1},description:"",type:{name:"enum",value:[{value:'"loudLight"',computed:!1}]},required:!1},theme:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1}}}},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LN:()=>AppLayout,qE:()=>atoms.qE,Ct:()=>atoms.Ct,xu:()=>layout.xu,zx:()=>atoms.zx,oe:()=>layout.oe,IT:()=>atoms.IT,iz:()=>atoms.iz,Lt:()=>atoms.Lt,hP:()=>atoms.hP,oZ:()=>atoms.oZ,D9:()=>atoms.D9,kC:()=>layout.kC,JO:()=>atoms.JO,hU:()=>atoms.hU,Ee:()=>atoms.Ee,II:()=>atoms.II,u_:()=>atoms.u_,tl:()=>Pagination,s_:()=>atoms.s_,ko:()=>atoms.ko,pv:()=>RulesPanel,Ph:()=>atoms.Ph,rX:()=>StepsBar,OK:()=>atoms.OK,iA:()=>atoms.iA,mQ:()=>atoms.mQ,xv:()=>atoms.xv,gK:()=>layout.gK});var fontawesome_svg_core=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),free_regular_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/index.mjs"),layout=__webpack_require__("./src/components/layout/index.js"),atoms=__webpack_require__("./src/components/atoms/index.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/styles/spacing.js");const Wrapper=styled_components_browser_esm.ZP.div`
  align-items: center;
  border-radius: 0 0 5px 5px;
  display: flex;
  left: 50%;
  position: absolute;
  top: 100%;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.alert.bgColors.warning};
    box-shadow: ${props.theme.shadows.level2};
    color: ${props.theme.colors.alert.colors.warning};
    ${(0,spacing.k)(props,"x-10 y-5")}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OfflineBadge=()=>{const online=(()=>{const[onlineStatus,setOnlineStatus]=(0,react.useState)(!0);return(0,react.useEffect)((()=>(window.addEventListener("offline",(()=>setOnlineStatus(!1))),window.addEventListener("online",(()=>setOnlineStatus(!0))),()=>{window.removeEventListener("offline",(()=>setOnlineStatus(!1))),window.removeEventListener("online",(()=>setOnlineStatus(!0)))})),[]),onlineStatus})();return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:online?null:(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(atoms.JO,{icon:"circle-exclamation",margin:"r-4",size:"sm"}),(0,jsx_runtime.jsx)(atoms.xv,{size:"sm",weight:"semibold",children:"Sin internet"})]})})};OfflineBadge.__docgenInfo={description:"",methods:[],displayName:"OfflineBadge"};var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),query_string=__webpack_require__("./node_modules/query-string/index.js");const Styles={BottomContentStyles:styled_components_browser_esm.ZP.div`
  border-top-style: solid;

  ${props=>styled_components_browser_esm.iv`
    border-top-color: ${props.theme.colors.black._200};
    border-top-width: ${props.theme.components.appLayout.sidebar.border.width};

    ${(0,spacing.k)(props,props.theme.components.appLayout.sidebar.bottomContent.padding)}
  `}
`,SideBarButton:styled_components_browser_esm.ZP.button`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  display: flex;

  ${props=>styled_components_browser_esm.iv`
    color: ${props.$isSelectedSection?props.theme.colors.orange._600:"inheret"};

    width: ${props.$isExpanded?props.theme.components.appLayout.sidebar.width.expanded:props.theme.components.appLayout.sidebar.width.contracted};

    &:hover {
      background-color: ${props.theme.colors.black._200};
    }

    ${(0,spacing.k)(props,props.theme.components.appLayout.sidebar.button.padding)}
  `}
`,SideBarButtonsWrapper:styled_components_browser_esm.ZP.div`
  overflow-y: auto;

  ${props=>styled_components_browser_esm.iv`
    height: calc(100% - ${props.theme.components.appLayout.sidebar.content.height});
    
    &::-webkit-scrollbar {
      width: ${props.theme.components.appLayout.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._400};
      border-radius: ${props.theme.components.appLayout.scroll.radious});
    }
  `}
`,SideBarStyles:styled_components_browser_esm.ZP.div`
  border-right-style: solid;
  height: 100%;
  position: relative;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.black._100};
    border-right-color: ${props.theme.colors.black._200};
    border-right-width: ${props.theme.components.appLayout.sidebar.border.width};
  `}
`},SideBar=props=>{const{buttons}=props,router=(()=>{const location=(0,dist.TH)(),navigate=(0,dist.s0)(),params=(0,dist.UO)();return(0,react.useMemo)((()=>({push:navigate,location,pathname:location.pathname,query:{...query_string.Z.parse(location.search),...params}})),[location,navigate,params])})(),[isExpanded,setIsExpanded]=(0,react.useState)(!0),contractedButton={icon:isExpanded?"angles-left":"angles-right",label:"Contraer"},renderButtonContent=(btn,isSelected)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(atoms.JO,{color:isSelected?"orange_600":"black_900",icon:btn.icon,margin:"r-8",size:"sm"}),isExpanded&&(0,jsx_runtime.jsx)(atoms.xv,{color:isSelected?"orange_600":"black_900",weight:"semibold",children:btn.label})]});return(0,jsx_runtime.jsxs)(Styles.SideBarStyles,{children:[(0,jsx_runtime.jsx)(Styles.SideBarButtonsWrapper,{children:buttons&&buttons.map(((btn,idx)=>{const isSelected=router.location.pathname.includes(btn.to);return(0,jsx_runtime.jsx)(Styles.SideBarButton,{$isExpanded:isExpanded,$isSelectedSection:isSelected,onClick:()=>{return to=btn.to,void router.push(to);var to},children:renderButtonContent(btn,isSelected)},`sidebar-button-${idx}`)}))}),(0,jsx_runtime.jsx)(Styles.BottomContentStyles,{children:(0,jsx_runtime.jsx)(Styles.SideBarButton,{$isExpanded:isExpanded,onClick:()=>setIsExpanded((prev=>!prev)),children:renderButtonContent(contractedButton)})})]})};SideBar.displayName="SideBar",SideBar.propTypes={buttons:prop_types_default().arrayOf(prop_types_default().shape({icon:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().array]).isRequired,label:prop_types_default().string.isRequired,to:prop_types_default().string.isRequired}))},SideBar.defaultProps={buttons:null},SideBar.__docgenInfo={description:"",methods:[],displayName:"SideBar",props:{buttons:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{icon:{name:"union",value:[{name:"string"},{name:"array"}],required:!0},label:{name:"string",required:!0},to:{name:"string",required:!0}}}},required:!1}}};const ContentBox=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  flex-grow: 1;
  height: 100%;
  overflow: auto;

  ${props=>styled_components_browser_esm.iv`
    background-color: ${props.theme.colors.black._100};

    &::-webkit-scrollbar {
      width: ${props.theme.components.appLayout.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._400};
      border-radius: ${props.theme.components.appLayout.scroll.radious});
    }

    ${(0,spacing.k)(props,props.theme.components.appLayout.content.padding)}
  `}}
`,MainContent=styled_components_browser_esm.ZP.div`
  display: flex;
  width: 100vw;

  ${props=>styled_components_browser_esm.iv`
    height: calc(100vh - ${props.theme.components.appLayout.topbar.height});
  `}
`,TopBar=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  position: relative;
  width: 100vw;

  ${props=>styled_components_browser_esm.iv`
    color: ${props.theme.colors.black._100};
    background-color: ${props.theme.colors.black._700};
    box-shadow: ${props.theme.shadows.level3};
    height: ${props.theme.components.appLayout.topbar.height};
    z-index: 100;

    ${(0,spacing.k)(props)}
  `}
`,AppLayout=props=>{const{sidebar,topbar}=props,sidebarButtons=sidebar?sidebar.buttons:null;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(TopBar,{$padding:"x-24 y-8",children:[topbar?topbar.content:null,(0,jsx_runtime.jsx)(OfflineBadge,{})]}),(0,jsx_runtime.jsxs)(MainContent,{children:[(0,jsx_runtime.jsx)(SideBar,{buttons:sidebarButtons}),(0,jsx_runtime.jsx)(ContentBox,{children:props.children})]})]})};AppLayout.propTypes={children:prop_types_default().node,sidebar:prop_types_default().shape({buttons:prop_types_default().arrayOf(prop_types_default().shape({icon:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().array]).isRequired,label:prop_types_default().string.isRequired,to:prop_types_default().string.isRequired}))}),topbar:prop_types_default().shape({content:prop_types_default().node})},AppLayout.defaultProps={children:null,sidebar:null,topbar:null},AppLayout.__docgenInfo={description:"",methods:[],displayName:"AppLayout",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},sidebar:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{buttons:{name:"arrayOf",value:{name:"shape",value:{icon:{name:"union",value:[{name:"string"},{name:"array"}],required:!0},label:{name:"string",required:!0},to:{name:"string",required:!0}}},required:!1}}},required:!1},topbar:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{content:{name:"node",required:!1}}},required:!1}}};const PaginateButton_styles_Styles={Wrapper:styled_components_browser_esm.ZP.div`
  margin: 0 4px;
  width: 40px;
`},PaginateButton=props=>{const{children,kind,onClick}=props;return(0,jsx_runtime.jsx)(PaginateButton_styles_Styles.Wrapper,{children:(0,jsx_runtime.jsx)(atoms.zx,{fullWidth:!0,kind,onClick,children})})};PaginateButton.displayName="PaginateButton",PaginateButton.propTypes={children:prop_types.PropTypes.node,kind:prop_types.PropTypes.string,onClick:prop_types.PropTypes.func},PaginateButton.defaultProps={children:0,kind:"outlined",onClick:null},PaginateButton.__docgenInfo={description:"",methods:[],displayName:"PaginateButton",props:{children:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"node"},required:!1},kind:{defaultValue:{value:'"outlined"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1}}};const Pagination_styles_Styles={Wrapper:styled_components_browser_esm.ZP.div`
  align-items: end;
  display: flex;
  justify-content: start;

  ${props=>`\n    ${(0,spacing.u)(props)}\n  `}
`},createPagesList=(cant,initValue=1)=>{const list=[];for(let i=0;i<cant;i++)list.push(initValue+i);return list},Pagination=props=>{const{margin,nButtons,onChange,page,pages}=props,[currentPage,setCurrentPage]=(0,react.useState)(page),[buttonsList,setButtonsList]=(0,react.useState)([]);return(0,react.useEffect)((()=>{const buttonsList=((page,pages,nButtons)=>{const centerValue=Math.ceil(nButtons/2);if(pages<=nButtons)return createPagesList(pages);if(page>centerValue&&page<=pages-centerValue){const cantButtons=nButtons-4,initValue=page-Math.floor(cantButtons/2),list=createPagesList(cantButtons,initValue);return list.unshift(1,0),list.push(0,pages),list}if(page>centerValue){const list=createPagesList(nButtons-2,pages-nButtons+3);return list.unshift(1,0),list}if(page<pages-centerValue){const list=createPagesList(nButtons-2,1);return list.push(0,pages),list}})(currentPage,pages,nButtons);setButtonsList(buttonsList),onChange&&onChange(currentPage)}),[currentPage]),(0,jsx_runtime.jsxs)(Pagination_styles_Styles.Wrapper,{$margin:margin,children:[(0,jsx_runtime.jsx)(atoms.hU,{disabled:1===currentPage,icon:{name:"chevron-left"},onClick:()=>setCurrentPage((prev=>prev-1))}),buttonsList.map(((button,idx)=>0===button?(0,jsx_runtime.jsx)(atoms.JO,{icon:"ellipsis",margin:"x-14",size:"sm"},`ellipsis-pagination-${idx}`):(0,jsx_runtime.jsx)(PaginateButton,{onClick:()=>setCurrentPage(button),kind:currentPage===button?"solid":"outlined",children:button},button))),(0,jsx_runtime.jsx)(atoms.hU,{disabled:currentPage===pages,icon:{name:"chevron-right"},onClick:()=>setCurrentPage((prev=>prev+1))})]})};Pagination.displayName="Pagination",Pagination.propTypes={margin:prop_types_default().string,nButtons:prop_types_default().number,onChange:prop_types_default().func,page:prop_types_default().number.isRequired,pages:prop_types_default().number.isRequired},Pagination.defaultProps={margin:"a-0",nButtons:9,onChange:null,page:1,pages:1},Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{margin:{defaultValue:{value:'"a-0"',computed:!1},description:"",type:{name:"string"},required:!1},nButtons:{defaultValue:{value:"9",computed:!1},description:"",type:{name:"number"},required:!1},onChange:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},page:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},pages:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1}}};const RulesPanelContext=(0,react.createContext)({}),RulesPanelProvider=props=>{const{children}=props,[selectedElement,setSelectedElement]=(0,react.useState)(-1);return(0,jsx_runtime.jsx)(RulesPanelContext.Provider,{value:{selectedElement,setSelectedElement},children})};RulesPanelProvider.displayName="RulesPanelProvider",RulesPanelProvider.propTypes={children:prop_types_default().node},RulesPanelProvider.defaultProps={children:null},RulesPanelProvider.__docgenInfo={description:"",methods:[],displayName:"RulesPanelProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const RightPanel_styles_Styles={ButtonsContainer:styled_components_browser_esm.ZP.div`
  display: flex;
`,ContentContainer:styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;

  ${props=>styled_components_browser_esm.iv`
    border-bottom: ${props.$isLastItem?"none":`solid 1px ${props.theme.colors.black._300}`};
    padding: ${props.$isFirstItem?"0 0 10px 0":"10px 0"};
  `}
`},RightPanel=props=>{const{list,listElement,onChange,panelLeftHeight}=props,ctx=(0,react.useContext)(RulesPanelContext);return(0,jsx_runtime.jsx)(atoms.s_,{padding:"a-16",style:{boxSizing:"border-box",height:-1===panelLeftHeight?"auto":`${panelLeftHeight}px`,overflowY:"scroll"},children:list?list.map(((el,idx)=>{const isFirstItem=0===idx,isLastItem=idx===list.length-1;return(0,jsx_runtime.jsxs)(RightPanel_styles_Styles.ContentContainer,{$isFirstItem:isFirstItem,$isLastItem:isLastItem,children:[(0,jsx_runtime.jsx)("div",{children:listElement&&listElement(el.data)}),(0,jsx_runtime.jsxs)(RightPanel_styles_Styles.ButtonsContainer,{children:[el.isEditable&&(0,jsx_runtime.jsx)(atoms.hU,{disabled:-1!==ctx.selectedElement,icon:{name:"pencil"},onClick:()=>(idx=>{ctx.setSelectedElement(idx)})(idx)}),el.isRemovable&&(0,jsx_runtime.jsx)(atoms.hU,{disabled:ctx.selectedElement===idx,icon:{name:"trash"},onClick:()=>(idx=>{list.splice(idx,1),onChange&&onChange(list)})(idx)})]})]},`rightPanel-listItem-${idx}`)})):null})};RightPanel.displayName="RightPanel",RightPanel.propTypes={list:prop_types_default().array,listElement:prop_types_default().func,onChange:prop_types_default().func,panelLeftHeight:prop_types_default().number},RightPanel.defaultProps={list:[],listElement:null,onChange:null,panelLeftHeight:-1},RightPanel.__docgenInfo={description:"",methods:[],displayName:"RightPanel",props:{list:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},listElement:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},onChange:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},panelLeftHeight:{defaultValue:{value:"-1",computed:!1},description:"",type:{name:"number"},required:!1}}};const FieldItem=props=>{const{field}=props;return"select"===field.type?(0,jsx_runtime.jsx)(atoms.Ph,{label:field.label,margin:"b-24",name:field.name,options:field.options,...field.props}):(0,jsx_runtime.jsx)(atoms.II,{margin:"b-4",...field})};FieldItem.propTypes={field:prop_types_default().object},FieldItem.defaultProps={field:null},FieldItem.__docgenInfo={description:"",methods:[],displayName:"FieldItem",props:{field:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1}}};const FieldsGroup=props=>{const{fields}=props;return fields.map((field=>{const{name}=field;return(0,jsx_runtime.jsx)(FieldItem,{field},`rulesPanel_${name}`)}))};FieldsGroup.propTypes={fields:prop_types_default().array},FieldsGroup.defaultProps={fields:[]};var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js");const LeftPanel_styles_Styles={ButtonsGroup:styled_components_browser_esm.ZP.div`
  text-align: end;

  ${props=>styled_components_browser_esm.iv`
    ${(0,spacing.u)(props)}
  `}
`},LeftPanel=props=>{const{fields,list,onChange,onSizeH,validationSchema}=props,ctx=(0,react.useContext)(RulesPanelContext);return(0,jsx_runtime.jsx)(atoms.s_,{onSizeH:height=>{onSizeH&&onSizeH(height)},padding:"a-16",children:(0,jsx_runtime.jsx)(formik_esm.J9,{enableReinitialize:!0,initialValues:(()=>{const initialValues={};return fields.forEach((field=>{const{name}=field;-1===ctx.selectedElement?initialValues[name]="":initialValues[name]=list[ctx.selectedElement].data[name]})),initialValues})(),onSubmit:values=>{if(-1===ctx.selectedElement){const newItem={data:values,isEditable:!0,isRemovable:!0};list.push(newItem)}else list[ctx.selectedElement].data=values,ctx.setSelectedElement(-1);onChange&&onChange(list)},validationSchema,children:(0,jsx_runtime.jsxs)(formik_esm.l0,{children:[(0,jsx_runtime.jsx)(FieldsGroup,{fields}),(0,jsx_runtime.jsxs)(LeftPanel_styles_Styles.ButtonsGroup,{$margin:"t-20",children:[(0,jsx_runtime.jsx)(atoms.zx,{disabled:-1===ctx.selectedElement,kind:"outlined",margin:"r-8",onClick:()=>ctx.setSelectedElement(-1),children:"Cancelar"}),(0,jsx_runtime.jsx)(atoms.zx,{type:"submit",children:-1===ctx.selectedElement?"Agregar":"Editar"})]})]})})})};LeftPanel.displayName="LeftPanel",LeftPanel.propTypes={fields:prop_types_default().array,list:prop_types_default().array,onChange:prop_types_default().func,onSizeH:prop_types_default().func,validationSchema:prop_types_default().object},LeftPanel.defaultProps={fields:[],list:[],onChange:null,onSizeH:null,validationSchema:null},LeftPanel.__docgenInfo={description:"",methods:[],displayName:"LeftPanel",props:{fields:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},list:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},onChange:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},onSizeH:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},validationSchema:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1}}};const RulesPanel=props=>{const{list,onChange}=props,[panelLeftHeight,setPanelLeftHeight]=(0,react.useState)(0);return(0,jsx_runtime.jsx)(RulesPanelProvider,{list,children:(0,jsx_runtime.jsxs)(layout.oe,{margin:props.margin,children:[(0,jsx_runtime.jsx)(LeftPanel,{fields:props.fields,list,onChange,onSizeH:height=>{setPanelLeftHeight(height)},validationSchema:props.validationSchema}),(0,jsx_runtime.jsx)(RightPanel,{list,listElement:props.listElement,onChange,panelLeftHeight})]})})};RulesPanel.displayName="RulesPanel",RulesPanel.propTypes={fields:prop_types_default().array,list:prop_types_default().array,listElement:prop_types_default().func,margin:prop_types_default().string,onChange:prop_types_default().func,validationSchema:prop_types_default().object},RulesPanel.defaultProps={fields:[],list:[],listElement:null,margin:null,onChange:null,validationSchema:null},RulesPanel.__docgenInfo={description:"",methods:[],displayName:"RulesPanel",props:{fields:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},list:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},listElement:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},margin:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},validationSchema:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1}}};const Circle=styled_components_browser_esm.ZP.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;

  ${props=>{return styled_components_browser_esm.iv`
    background-color: ${((theme,type)=>{switch(type){case"pendingCircle":return theme.colors.black._300;case"circle":return"none";default:return theme.colors.orange._600}})(props.theme,props.type)};
    border: 3px solid ${theme=props.theme,type=props.type,"pendingCircle"===type?theme.colors.black._300:theme.colors.orange._600};
    color: ${props.theme.colors.black._100};
    height: ${props.theme.components.stepsBar.circle.diameter[props.size]};
    width: ${props.theme.components.stepsBar.circle.diameter[props.size]};
  `;var theme,type}}
`,ProgressBarWrapper=styled_components_browser_esm.ZP.div`
  flex-grow: 1;
  padding: 0px 10px;
`,StepsWrapper=styled_components_browser_esm.ZP.div`
  align-items: center;
  display: flex;
  margin: 0px 60px;
`,StepsBar=props=>{const{size,step,steps}=props,[previousStep,setPreviousStep]=(0,react.useState)(step),finishStepChange=()=>{const diff=step-previousStep;diff>0?setPreviousStep((prev=>prev+1)):diff<0&&setPreviousStep((prev=>prev-1))},selectTypeCircle=renderStep=>renderStep<step?"checkedCircle":renderStep>step?"pendingCircle":renderStep===step&&previousStep>step?"checkedCircle":renderStep===step&&previousStep<step?"pendingCircle":renderStep===step?"circle":void 0,noShowOldAnaimation=renderStep=>{const diff=step-previousStep;return!(diff>0&&renderStep===step||diff<0&&renderStep===step+1)},renderIconInsideCircle=renderStep=>renderStep<step||renderStep===step&&previousStep>step?(0,jsx_runtime.jsx)(atoms.JO,{icon:"check",size:"sm"}):null,renderStep=renderStep=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[1!==renderStep&&(0,jsx_runtime.jsx)(ProgressBarWrapper,{children:(0,jsx_runtime.jsx)(atoms.ko,{borderRound:!0,noShowAnimationOnFirstLoad:noShowOldAnaimation(renderStep),onFinish:finishStepChange,size:"sm",step:renderStep<=step?100:0,style:{flexGrow:"1"}})}),(0,jsx_runtime.jsx)(Circle,{size,type:selectTypeCircle(renderStep),children:renderIconInsideCircle(renderStep)})]},`step-${renderStep}`);return(()=>{let stepsArray=[];for(let i=1;i<=steps;i++)stepsArray.push(renderStep(i));return(0,jsx_runtime.jsx)(StepsWrapper,{children:stepsArray})})()};StepsBar.propTypes={size:prop_types_default().oneOf(["md"]),steps:prop_types_default().number.isRequired,step:prop_types_default().number},StepsBar.defaultProps={size:"md",steps:5,step:1},StepsBar.__docgenInfo={description:"",methods:[],displayName:"StepsBar",props:{size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"md"',computed:!1}]},required:!1},steps:{defaultValue:{value:"5",computed:!1},description:"",type:{name:"number"},required:!1},step:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1}}},fontawesome_svg_core.vI.add(free_solid_svg_icons.mRB,free_regular_svg_icons.NCV)},"./src/utils/styles/spacing.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>paddingProperties,u:()=>marginProperties});const handleSpacing=(spacingString,type)=>{let spacingsObj={},string="";return spacingString.split(" ").forEach((elem=>{const keys=elem.split("-"),border=keys[0],value=keys[1];spacingsObj[border]=value})),string+=`${type}-bottom: ${spacingsObj.b||spacingsObj.y||spacingsObj.a||0}px;`,string+=`${type}-left: ${spacingsObj.l||spacingsObj.x||spacingsObj.a||0}px;`,string+=`${type}-right: ${spacingsObj.r||spacingsObj.x||spacingsObj.a||0}px;`,string+=`${type}-top: ${spacingsObj.t||spacingsObj.y||spacingsObj.a||0}px;`,string},marginProperties=(props,defaultValue)=>{let string="";return(props.$margin||defaultValue)&&(string=handleSpacing(props.$margin||defaultValue,"margin")),string},paddingProperties=(props,defaultValue)=>{let string={};return(props.$padding||defaultValue)&&(string=handleSpacing(props.$padding||defaultValue,"padding")),string}}}]);
//# sourceMappingURL=152.bf4eecbb.iframe.bundle.js.map