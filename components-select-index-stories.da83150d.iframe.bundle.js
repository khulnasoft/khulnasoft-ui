"use strict";(self.webpackChunk_khulnasoft_khulnasoft_ui=self.webpackChunk_khulnasoft_khulnasoft_ui||[]).push([[175],{"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}__webpack_require__.d(__webpack_exports__,{A:()=>_assertThisInitialized})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}__webpack_require__.d(__webpack_exports__,{A:()=>_getPrototypeOf})},"./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}__webpack_require__.d(__webpack_exports__,{A:()=>_isNativeReflectConstruct})},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf})},"./src/components/select/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/select/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Basic=args=>{const onChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>console.log(`On change: ${JSON.stringify(e)}`)),[]),onCreateOption=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>console.log(`On create: ${JSON.stringify(e)}`)),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.default,_extends({onChange,onCreateOption},args))},__WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.default,args:{options:[{label:"One",value:"one"},{label:"Two",value:"two"},{label:"Three",value:"three"},{label:"Four",value:"four"},{label:"Five",value:"five"}],isCreatable:!1,isMulti:!1},argTypes:{isCreatable:{control:"boolean"},isMulti:{control:"boolean"}}},__namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  const onChange = useCallback(e => console.log(`On change: ${JSON.stringify(e)}`), []);\n  const onCreateOption = useCallback(e => console.log(`On create: ${JSON.stringify(e)}`), []);\n  return <Select onChange={onChange} onCreateOption={onCreateOption} {...args} />;\n}",...Basic.parameters?.docs?.source}}}},"./src/components/select/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_reactSelect=_interopRequireWildcard(__webpack_require__("./node_modules/react-select/dist/react-select.esm.js")),_creatable=_interopRequireDefault(__webpack_require__("./node_modules/react-select/creatable/dist/react-select-creatable.esm.js")),_icon=__webpack_require__("./src/components/icon/index.js"),_excluded=["innerProps"],_excluded2=["minWidth","size"],_excluded3=["isCreatable"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}var useDataAttrs=function useDataAttrs(props,name){var _props$selectProps=props.selectProps,dataGA=_props$selectProps["data-ga"],dataTestId=_props$selectProps["data-testid"];return{"data-ga":(0,_react.useMemo)((function(){if(!dataGA)return dataGA;var gaParts=dataGA.split("::");return gaParts[1]?(gaParts[1]=gaParts[1]+"-"+name,gaParts.join("::")):dataGA}),[dataGA]),"data-testid":""+(dataTestId||"")+name}},withDataAttrs=function withDataAttrs(Component,name){return function(_ref){var innerProps=_ref.innerProps,props=_objectWithoutPropertiesLoose(_ref,_excluded),dataProps=useDataAttrs(props,name),componentProps=innerProps?_objectSpread(_objectSpread({},props),{},{innerProps:_objectSpread(_objectSpread({},innerProps),dataProps)}):_objectSpread(_objectSpread({},props),dataProps);return _react.default.createElement(Component,componentProps)}},OriginalOption=_reactSelect.components.Option,customComponents=_objectSpread(_objectSpread({},_reactSelect.components),{},{ClearIndicator:withDataAttrs(_reactSelect.components.ClearIndicator,"ClearIndicator"),Control:withDataAttrs(_reactSelect.components.Control,"Control"),DropdownIndicator:withDataAttrs(_reactSelect.components.DropdownIndicator,"DropdownIndicator"),DownChevron:withDataAttrs(_reactSelect.components.DownChevron,"DownChevron"),CrossIcon:withDataAttrs(_reactSelect.components.CrossIcon,"CrossIcon"),Group:withDataAttrs(_reactSelect.components.Group,"Group"),GroupHeading:withDataAttrs(_reactSelect.components.GroupHeading,"GroupHeading"),IndicatorsContainer:withDataAttrs(_reactSelect.components.IndicatorsContainer,"IndicatorsContainer"),IndicatorSeparator:withDataAttrs(_reactSelect.components.IndicatorSeparator,"IndicatorSeparator"),Input:function withDOMDataAttrs(Component,name){return function(props){var dataProps=useDataAttrs(props,name);return _react.default.createElement(Component,_extends({},props,dataProps))}}(_reactSelect.components.Input,"Input"),LoadingIndicator:withDataAttrs(_reactSelect.components.LoadingIndicator,"LoadingIndicator"),Menu:withDataAttrs(_reactSelect.components.Menu,"Menu"),MenuList:withDataAttrs(_reactSelect.components.MenuList,"MenuList"),MenuPortal:withDataAttrs(_reactSelect.components.MenuPortal,"MenuPortal"),LoadingMessage:withDataAttrs(_reactSelect.components.LoadingMessage,"LoadingMessage"),MultiValue:withDataAttrs(_reactSelect.components.MultiValue,"MultiValue"),MultiValueContainer:withDataAttrs(_reactSelect.components.MultiValueContainer,"MultiValueContainer"),MultiValueLabel:withDataAttrs(_reactSelect.components.MultiValueLabel,"MultiValueLabel"),MultiValueRemove:withDataAttrs(_reactSelect.components.MultiValueRemove,"MultiValueRemove"),NoOptionsMessage:withDataAttrs(_reactSelect.components.NoOptionsMessage,"NoOptionsMessage"),Option:withDataAttrs((function Option(props){return props.data.icon?_react.default.createElement(OriginalOption,props,_react.default.createElement(_icon.Icon,{name:props.data.icon,color:"textLite",margin:[0,1,0,0]}),_react.default.createElement("span",null,props.data.label)):_react.default.createElement(OriginalOption,props)}),"Option"),Placeholder:withDataAttrs(_reactSelect.components.Placeholder,"Placeholder"),SelectContainer:withDataAttrs(_reactSelect.components.SelectContainer,"SelectContainer"),SingleValue:withDataAttrs(_reactSelect.components.SingleValue,"SingleValue"),ValueContainer:withDataAttrs(_reactSelect.components.ValueContainer,"ValueContainer")}),makeCustomTheme=function makeCustomTheme(theme){return function(selectTheme){return _objectSpread(_objectSpread({},selectTheme),{},{borderRadius:4,colors:_objectSpread(_objectSpread({},selectTheme.colors),{},{primary:theme.colors.border,primary25:theme.colors.selected,primary50:theme.colors.border,primary75:theme.colors.tooltip,danger:theme.colors.text,dangerLight:theme.colors.border,neutral0:theme.colors.inputBg,neutral5:theme.colors.mainBackgroundDisabled,neutral30:theme.colors.controlFocused,neutral60:theme.colors.placeholder,neutral80:theme.colors.text,neutral10:theme.colors.border,neutral20:theme.colors.placeholder})})}},getOptionColor=function getOptionColor(theme,state){return state.isDisabled?theme.colors.placeholder:theme.colors.text},getOptionBackground=function getOptionBackground(theme,state){return state.isSelected?theme.colors.menuItemSelected:null},makeCustomStyles=function makeCustomStyles(theme,_ref2){void 0===_ref2&&(_ref2={});var _ref3=_ref2,minWidth=_ref3.minWidth,size=_ref3.size,providedStyles=_objectWithoutPropertiesLoose(_ref3,_excluded2);return _objectSpread(_objectSpread({control:function control(styles,state){return _objectSpread(_objectSpread({},styles),{},{borderColor:state.isFocused?theme.colors.inputBorderFocus:theme.colors.inputBorder,boxShadow:"none",minHeight:18,minWidth:minWidth||160,":hover":{borderColor:theme.colors.inputBorderHover}})},input:function input(styles,state){return _objectSpread(_objectSpread({},styles),{},{color:state.isDisabled?theme.colors.placeholder:theme.colors.grey140},"tiny"===size?{lineHeight:"18px",paddingBottom:0,paddingTop:0}:{})},menu:function menu(styles){return _objectSpread(_objectSpread({},styles),{},{zIndex:100})},menuPortal:function menuPortal(styles){return _objectSpread(_objectSpread({},styles),{},{zIndex:9999})},multiValue:function multiValue(styles){return _objectSpread(_objectSpread({},styles),{},{fontSize:"tiny"===size?"12px":"14px",flexDirection:"row-reverse"},"tiny"===size?{minHeight:18}:{})},multiValueLabel:function multiValueLabel(styles,state){return _objectSpread(_objectSpread(_objectSpread({},styles),{},{backgroundColor:theme.colors.grey40,borderRadius:"0 2px 2px 0",color:state.isDisabled?theme.colors.placeholder:theme.colors.grey140},"tiny"===size?{padding:"1px"}:{}),{},{paddingRight:state.data.isDisabled?"8px":""})},multiValueRemove:function multiValueRemove(styles,state){return _objectSpread({color:state.isDisabled?theme.colors.placeholder:theme.colors.grey140},state.data.isDisabled?_objectSpread(_objectSpread({},styles),{},{display:"none"}):_objectSpread(_objectSpread({},styles),{},{borderRadius:"2px 0 0 2px",background:theme.colors.grey40,":hover":{background:theme.colors.tabsBorder}}))},option:function option(styles,state){return _objectSpread(_objectSpread({},styles),{},{display:"flex",alignItems:"center",color:getOptionColor(theme,state),backgroundColor:getOptionBackground(theme,state),":hover":{backgroundColor:theme.colors.secondaryHighlight,color:theme.colors.text}},"tiny"===size?{fontSize:"12px",minHeight:28,padding:"4px 8px"}:{})},placeholder:function placeholder(styles){return _objectSpread(_objectSpread({},styles),{},{color:theme.colors.placeholder},"tiny"===size?{fontSize:"12px",lineHeight:"18px"}:{})},singleValue:function singleValue(styles,state){return _objectSpread(_objectSpread({},styles),{},{color:state.isDisabled?theme.colors.placeholder:theme.colors.grey140,fontSize:"tiny"===size?"12px":"14px"})}},"tiny"===size?{dropdownIndicator:function dropdownIndicator(styles){return _objectSpread(_objectSpread({},styles),{},{padding:"3px"})},clearIndicator:function clearIndicator(styles){return _objectSpread(_objectSpread({},styles),{},{padding:"3px"})},indicatorsContainer:function indicatorsContainer(styles){return _objectSpread(_objectSpread({},styles),{},{minHeight:18})},valueContainer:function valueContainer(styles){return _objectSpread(_objectSpread({},styles),{},{minHeight:18,padding:"1px 6px"})}}:{dropdownIndicator:function dropdownIndicator(styles){return _objectSpread(_objectSpread({},styles),{},{padding:"3px"})},clearIndicator:function clearIndicator(styles){return _objectSpread(_objectSpread({},styles),{},{padding:"3px"})},indicatorsContainer:function indicatorsContainer(styles){return _objectSpread(_objectSpread({},styles),{},{minHeight:28})},valueContainer:function valueContainer(styles){return _objectSpread(_objectSpread({},styles),{},{minHeight:28,padding:"1px 6px"})}}),providedStyles)},getAttrs=function getAttrs(props){return _objectSpread(_objectSpread({},props),{},{components:_objectSpread(_objectSpread({},customComponents),props.components),theme:makeCustomTheme(props.theme),styles:makeCustomStyles(props.theme,props.styles)})},SelectComponent=(0,_styledComponents.default)(_reactSelect.default).attrs(getAttrs).withConfig({displayName:"select__SelectComponent",componentId:"sc-1n6dkv6-0"})([""]),CreatableComponent=(0,_styledComponents.default)(_creatable.default).attrs(getAttrs).withConfig({displayName:"select__CreatableComponent",componentId:"sc-1n6dkv6-1"})([""]),Select=function Select(_ref4){var isCreatable=_ref4.isCreatable,props=_objectWithoutPropertiesLoose(_ref4,_excluded3),Component=isCreatable?CreatableComponent:SelectComponent;return _react.default.createElement(Component,props)};exports.default=Select;Select.__docgenInfo={description:"",methods:[],displayName:"Select"}},"./node_modules/react-select/creatable/dist/react-select-creatable.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>CreatableSelect$1,useCreatable:()=>useCreatable});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),Select_c7902d94_esm=__webpack_require__("./node_modules/react-select/dist/Select-c7902d94.esm.js"),useStateManager_7e1e8489_esm=__webpack_require__("./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_a301f526_esm=__webpack_require__("./node_modules/react-select/dist/index-a301f526.esm.js"),_excluded=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],compareOption=function compareOption(){var option=arguments.length>1?arguments[1]:void 0,accessors=arguments.length>2?arguments[2]:void 0,candidate=String(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase(),optionValue=String(accessors.getOptionValue(option)).toLowerCase(),optionLabel=String(accessors.getOptionLabel(option)).toLowerCase();return optionValue===candidate||optionLabel===candidate},builtins={formatCreateLabel:function formatCreateLabel(inputValue){return'Create "'.concat(inputValue,'"')},isValidNewOption:function isValidNewOption(inputValue,selectValue,selectOptions,accessors){return!(!inputValue||selectValue.some((function(option){return compareOption(inputValue,option,accessors)}))||selectOptions.some((function(option){return compareOption(inputValue,option,accessors)})))},getNewOptionData:function getNewOptionData(inputValue,optionLabel){return{label:optionLabel,value:inputValue,__isNew__:!0}}};function useCreatable(_ref){var _ref$allowCreateWhile=_ref.allowCreateWhileLoading,allowCreateWhileLoading=void 0!==_ref$allowCreateWhile&&_ref$allowCreateWhile,_ref$createOptionPosi=_ref.createOptionPosition,createOptionPosition=void 0===_ref$createOptionPosi?"last":_ref$createOptionPosi,_ref$formatCreateLabe=_ref.formatCreateLabel,formatCreateLabel=void 0===_ref$formatCreateLabe?builtins.formatCreateLabel:_ref$formatCreateLabe,_ref$isValidNewOption=_ref.isValidNewOption,isValidNewOption=void 0===_ref$isValidNewOption?builtins.isValidNewOption:_ref$isValidNewOption,_ref$getNewOptionData=_ref.getNewOptionData,getNewOptionData=void 0===_ref$getNewOptionData?builtins.getNewOptionData:_ref$getNewOptionData,onCreateOption=_ref.onCreateOption,_ref$options=_ref.options,propsOptions=void 0===_ref$options?[]:_ref$options,propsOnChange=_ref.onChange,restSelectProps=(0,objectWithoutProperties.A)(_ref,_excluded),_restSelectProps$getO=restSelectProps.getOptionValue,getOptionValue$1=void 0===_restSelectProps$getO?Select_c7902d94_esm.g:_restSelectProps$getO,_restSelectProps$getO2=restSelectProps.getOptionLabel,getOptionLabel$1=void 0===_restSelectProps$getO2?Select_c7902d94_esm.b:_restSelectProps$getO2,inputValue=restSelectProps.inputValue,isLoading=restSelectProps.isLoading,isMulti=restSelectProps.isMulti,value=restSelectProps.value,name=restSelectProps.name,newOption=(0,react.useMemo)((function(){return isValidNewOption(inputValue,(0,index_a301f526_esm.H)(value),propsOptions,{getOptionValue:getOptionValue$1,getOptionLabel:getOptionLabel$1})?getNewOptionData(inputValue,formatCreateLabel(inputValue)):void 0}),[formatCreateLabel,getNewOptionData,getOptionLabel$1,getOptionValue$1,inputValue,isValidNewOption,propsOptions,value]),options=(0,react.useMemo)((function(){return!allowCreateWhileLoading&&isLoading||!newOption?propsOptions:"first"===createOptionPosition?[newOption].concat((0,toConsumableArray.A)(propsOptions)):[].concat((0,toConsumableArray.A)(propsOptions),[newOption])}),[allowCreateWhileLoading,createOptionPosition,isLoading,newOption,propsOptions]),onChange=(0,react.useCallback)((function(newValue,actionMeta){if("select-option"!==actionMeta.action)return propsOnChange(newValue,actionMeta);var valueArray=Array.isArray(newValue)?newValue:[newValue];if(valueArray[valueArray.length-1]!==newOption)propsOnChange(newValue,actionMeta);else if(onCreateOption)onCreateOption(inputValue);else{var newOptionData=getNewOptionData(inputValue,inputValue),newActionMeta={action:"create-option",name,option:newOptionData};propsOnChange((0,index_a301f526_esm.D)(isMulti,[].concat((0,toConsumableArray.A)((0,index_a301f526_esm.H)(value)),[newOptionData]),newOptionData),newActionMeta)}}),[getNewOptionData,inputValue,isMulti,name,newOption,onCreateOption,propsOnChange,value]);return(0,objectSpread2.A)((0,objectSpread2.A)({},restSelectProps),{},{options,onChange})}__webpack_require__("./node_modules/react-dom/index.js"),__webpack_require__("./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");var CreatableSelect$1=(0,react.forwardRef)((function(props,ref){var selectProps=useCreatable((0,useStateManager_7e1e8489_esm.u)(props));return react.createElement(Select_c7902d94_esm.S,(0,esm_extends.A)({ref},selectProps))}))}}]);