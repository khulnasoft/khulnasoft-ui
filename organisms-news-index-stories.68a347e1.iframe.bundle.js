"use strict";(self.webpackChunk_khulnasoft_khulnasoft_ui=self.webpackChunk_khulnasoft_khulnasoft_ui||[]).push([[629],{"./src/organisms/news/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AgentNews:()=>AgentNews,CloudNews:()=>CloudNews,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_pill__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/pill/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/organisms/news/index.js");const CloudNews=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.default,{app:"cloud"},(({toggle,upToDate})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_pill__WEBPACK_IMPORTED_MODULE_1__.default,{icon:"insights",onClick:toggle,hollow:!0,flavour:upToDate?"neutral":"success"},"Cloud news"))),AgentNews=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.default,{app:"agent"},(({toggle,upToDate})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_pill__WEBPACK_IMPORTED_MODULE_1__.default,{icon:"insights",onClick:toggle,hollow:!0,flavour:upToDate?"neutral":"success"},"Agent news"))),__WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_2__.default},__namedExportsOrder=["CloudNews","AgentNews"];CloudNews.parameters={...CloudNews.parameters,docs:{...CloudNews.parameters?.docs,source:{originalSource:'() => <News app="cloud">\n    {({\n    toggle,\n    upToDate\n  }) => <Pill icon="insights" onClick={toggle} hollow flavour={upToDate ? "neutral" : "success"}>\n        Cloud news\n      </Pill>}\n  </News>',...CloudNews.parameters?.docs?.source}}},AgentNews.parameters={...AgentNews.parameters,docs:{...AgentNews.parameters?.docs,source:{originalSource:'() => <News app="agent">\n    {({\n    toggle,\n    upToDate\n  }) => <Pill icon="insights" onClick={toggle} hollow flavour={upToDate ? "neutral" : "success"}>\n        Agent news\n      </Pill>}\n  </News>',...AgentNews.parameters?.docs?.source}}}},"./src/components/pill/icon.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_icon=__webpack_require__("./src/components/icon/index.js"),_colors=__webpack_require__("./src/components/pill/mixins/colors.js"),_excluded=["icon","color","hollow","flavour","size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var sizes={default:"14px",large:"16px"},PillIcon=function PillIcon(_ref){var icon=_ref.icon,color=_ref.color,hollow=_ref.hollow,flavour=_ref.flavour,size=_ref.size,rest=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(_ref,_excluded);return icon?"string"!=typeof icon?icon:_react.default.createElement(_icon.Icon,_extends({color:color||(hollow?(0,_colors.getPillColor)("color",flavour):"bright"),"data-testid":"pill-icon",height:sizes[size]||sizes.default,width:sizes[size]||sizes.default,name:icon},rest)):null};exports.default=PillIcon;PillIcon.__docgenInfo={description:"",methods:[],displayName:"PillIcon"}},"./src/components/pill/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_typography=__webpack_require__("./src/components/typography/index.js"),_flex=_interopRequireDefault(__webpack_require__("./src/components/templates/flex/index.js")),_icon=_interopRequireDefault(__webpack_require__("./src/components/pill/icon.js")),_colors=__webpack_require__("./src/components/pill/mixins/colors.js"),_styled=__webpack_require__("./src/components/pill/styled.js"),_excluded=["children","background","color","data-testid","flavour","hollow","icon","iconSize","normal","reverse","size","textSize","tiny","textProps","semi"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var textComponents={default:_typography.Text,large:_typography.TextBig,normal:_typography.Text,small:_typography.TextSmall,tiny:_typography.TextNano},Pill=(0,_react.forwardRef)((function(_ref,ref){var children=_ref.children,background=_ref.background,color=_ref.color,_ref$dataTestid=_ref["data-testid"],testId=void 0===_ref$dataTestid?"pill":_ref$dataTestid,flavour=_ref.flavour,hollow=_ref.hollow,icon=_ref.icon,iconSize=_ref.iconSize,_ref$normal=_ref.normal,normal=void 0===_ref$normal||_ref$normal,reverse=_ref.reverse,size=_ref.size,textSize=_ref.textSize,tiny=_ref.tiny,textProps=_ref.textProps,semi=_ref.semi,rest=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(_ref,_excluded),iconProps={color,flavour,hollow,icon,size:iconSize},TextComponent=tiny?textComponents.tiny:textSize?textComponents[textSize]:textComponents[size]||textComponents.default;return _react.default.createElement(_styled.PillContainer,_extends({background,"data-testid":testId,flavour,gap:1,hollow,ref,size,tiny,semi},rest),!reverse&&_react.default.createElement(_icon.default,_extends({"data-testid":testId+"-icon-left"},iconProps)),children&&_react.default.createElement(_flex.default,_extends({as:TextComponent,color:color||(hollow?(0,_colors.getPillColor)("color",flavour):"bright"),"data-testid":testId+"-text",strong:!normal,whiteSpace:"nowrap"},textProps),children),reverse&&_react.default.createElement(_icon.default,_extends({"data-testid":testId+"-icon-right"},iconProps)))}));exports.default=Pill;Pill.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{"data-testid":{defaultValue:{value:'"pill"',computed:!1},required:!1},normal:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./src/components/pill/mixins/background.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.getMasterCardBackground=exports.default=void 0;var _colors=__webpack_require__("./src/components/pill/mixins/colors.js");exports.getMasterCardBackground=function getMasterCardBackground(background,flavour){return background||(0,_colors.getMasterCardColor)(flavour)},exports.default=function getPillBackground(_ref){var background=_ref.background,_ref$flavour=_ref.flavour,flavour=void 0===_ref$flavour?"neutral":_ref$flavour,hollow=_ref.hollow,semi=_ref.semi;return background||(hollow?semi?(0,_colors.getPillColor)("hollow",flavour):"transparent":(0,_colors.getPillColor)("background",flavour))}},"./src/components/pill/mixins/colors.js":(__unused_webpack_module,exports)=>{exports.__esModule=!0,exports.masterCardColorMap=exports.getPillColor=exports.getMasterCardColor=void 0;var colorMap={background:{neutral:"nodeBadgeBackground",success:"success",clear:"success",warning:"warning",error:"error",critical:"error",stale:"stale",idleClear:"idleClear",idleError:"idleError",idleWarning:"idleWarning"},border:{neutral:"nodeBadgeBackground",success:"success",clear:"success",warning:"warning",error:"error",critical:"error",stale:"stale",idleClear:"idleClear",idleError:"idleError",idleWarning:"idleWarning"},hollow:{neutral:"neutralPillBorder",success:"successSemi",clear:"successSemi",warning:"warningSemi",error:"errorSemi",critical:"errorSemi",stale:"staleSemi"},color:{neutral:"neutralPillColor",success:"success",clear:"success",warning:"warning",error:"error",critical:"error",stale:"stale",idleClear:"idleClear",idleError:"idleError",idleWarning:"idleWarning"}},masterCardColorMap=exports.masterCardColorMap={alert:"alertIcon",disabledClear:"idleClear",disabledError:"errorSemi",disabledWarning:"idleWarning",clear:"success",error:"error",warning:"warning"};exports.getMasterCardColor=function getMasterCardColor(flavour){return masterCardColorMap[flavour]},exports.getPillColor=function getPillColor(type,flavour){return colorMap[type][flavour]}},"./src/components/pill/mixins/padding.js":(__unused_webpack_module,exports)=>{exports.__esModule=!0,exports.default=void 0;var paddings={default:[.5,2],large:[1,2.5]};exports.default=function getPillPadding(padding,size,tiny){return padding||(tiny?[.25,.5]:paddings[size]||paddings.default)}},"./src/components/pill/styled.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.PillContainer=exports.MasterCardContainer=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_flex=_interopRequireDefault(__webpack_require__("./src/components/templates/flex/index.js")),_background=_interopRequireDefault(__webpack_require__("./src/components/pill/mixins/background.js")),_colors=__webpack_require__("./src/components/pill/mixins/colors.js"),_padding=_interopRequireDefault(__webpack_require__("./src/components/pill/mixins/padding.js")),_excluded=["round","hollow","flavour","borderColor","onClick","padding","size","tiny","position","zIndex","justifyContent","alignItems","background","semi"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}exports.MasterCardContainer=(0,_styledComponents.default)(_flex.default).attrs((function(_ref){var background=_ref.background,onClick=(_ref.height,_ref.onClick),_ref$round=_ref.round,round=void 0===_ref$round?999:_ref$round,size=_ref.size;return _objectSpread(_objectSpread({background},onClick&&{cursor:"pointer"}),{},{position:"relative",round,size})})).withConfig({displayName:"styled__MasterCardContainer",componentId:"sc-1v0p8gy-0"})(["*{cursor:",";}"],(function(_ref2){return _ref2.onClick?"pointer":"inherit"})),exports.PillContainer=(0,_styledComponents.default)(_flex.default).attrs((function(_ref3){var _ref3$round=_ref3.round,round=void 0===_ref3$round||_ref3$round,hollow=_ref3.hollow,flavour=_ref3.flavour,borderColor=_ref3.borderColor,onClick=_ref3.onClick,padding=_ref3.padding,size=_ref3.size,tiny=_ref3.tiny,position=_ref3.position,zIndex=_ref3.zIndex,_ref3$justifyContent=_ref3.justifyContent,justifyContent=void 0===_ref3$justifyContent?"center":_ref3$justifyContent,_ref3$alignItems=_ref3.alignItems,alignItems=void 0===_ref3$alignItems?"center":_ref3$alignItems,background=_ref3.background,semi=_ref3.semi,rest=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(_ref3,_excluded);return _objectSpread(_objectSpread({padding:(0,_padding.default)(padding,size,tiny),round:!1===round?1:!0===round?7.5:round,border:{side:"all",color:borderColor||(0,_colors.getPillColor)(semi?"hollow":"border",flavour),size:"1px"}},onClick&&{cursor:"pointer"}),{},{justifyContent,alignItems,position,zIndex,background:(0,_background.default)({background,flavour,hollow,semi})},rest)})).withConfig({displayName:"styled__PillContainer",componentId:"sc-1v0p8gy-1"})([""])},"./src/components/templates/layer/backdropContainer.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_backdropBlur=_interopRequireDefault(__webpack_require__("./src/components/templates/layer/mixins/backdropBlur.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Container=_styledComponents.default.div.withConfig({displayName:"backdropContainer__Container",componentId:"sc-1hi8w4v-0"})(["position:fixed;inset:0;z-index:35;pointer-events:none;outline:none;"]),Backdrop=_styledComponents.default.div.withConfig({displayName:"backdropContainer__Backdrop",componentId:"sc-1hi8w4v-1"})(["position:absolute;inset:0;pointer-events:all;background-color:rgba(0,0,0,0.3);",";}"],_backdropBlur.default),BackdropContainer=function BackdropContainer(_ref){var children=_ref.children,backdropProps=_ref.backdropProps,onClick=_ref.onClick;return _react.default.createElement(Container,{"data-testid":"layer-backdropContainer"},_react.default.createElement(Backdrop,_extends({"data-testid":"layer-backdrop"},backdropProps,{onClick})),children)};exports.default=BackdropContainer;BackdropContainer.__docgenInfo={description:"",methods:[],displayName:"BackdropContainer"}},"./src/components/templates/layer/container.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_alignItems=_interopRequireDefault(__webpack_require__("./src/components/templates/mixins/alignItems.js")),_alignContent=_interopRequireDefault(__webpack_require__("./src/components/templates/mixins/alignContent.js")),_justifyContent=_interopRequireDefault(__webpack_require__("./src/components/templates/mixins/justifyContent.js")),_getMarginDimensions=_interopRequireDefault(__webpack_require__("./src/components/templates/layer/mixins/getMarginDimensions.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var getCalc=function getCalc(from,to){return"0"!==from&&"0"!==to?"calc((100% - "+from+") - "+to+")":"0"===from&&"0"===to?"100%":"calc(100% - "+("0"===from?to:from)+")"},hCenterAlignPositions=new Set(["top","center","bottom"]),leftAlignPositions=new Set(["bottom-left","left","top-left"]),vCenterAlignPositions=new Set(["right","center","left"]),topAlignPositions=new Set(["top-left","top","top-right"]),rightAlignPositions=new Set(["top-right","right","bottom-right"]),bottomAlignPositions=new Set(["bottom-right","bottom","bottom-left"]),Container=_styledComponents.default.div.attrs((function(_ref10){var theme=_ref10.theme,margin=_ref10.margin;return{marginDimensions:(0,_getMarginDimensions.default)(theme,margin)}})).withConfig({displayName:"container__Container",componentId:"sc-c52hub-0"})(["position:",";display:flex;outline:none;pointer-events:all;"," "," "," "," "," "," "," "," "," "," "," ",""],(function(_ref11){return _ref11.isAbsolute?"absolute":"fixed"}),_alignItems.default,_alignContent.default,_justifyContent.default,(function maxHeight(_ref){var _ref$marginDimensions=_ref.marginDimensions,top=_ref$marginDimensions.top,bottom=_ref$marginDimensions.bottom;return"max-height: "+getCalc(top,bottom)+";"}),(function maxWidth(_ref2){var _ref2$marginDimension=_ref2.marginDimensions,right=_ref2$marginDimension.right,left=_ref2$marginDimension.left;return"max-width: "+getCalc(left,right)+";"}),(function styledTop(_ref4){var position=_ref4.position,full=_ref4.full,marginDimensions=_ref4.marginDimensions;return"vertical"===full||!0===full||topAlignPositions.has(position)?"top: "+marginDimensions.top+";":vCenterAlignPositions.has(position)?"top: 50%;":""}),(function styledRight(_ref5){var position=_ref5.position,full=_ref5.full,marginDimensions=_ref5.marginDimensions;return"horizontal"===full||!0===full||rightAlignPositions.has(position)?"right: "+marginDimensions.right+";":""}),(function styledBottom(_ref6){var position=_ref6.position,full=_ref6.full,marginDimensions=_ref6.marginDimensions;return"vertical"===full||!0===full||bottomAlignPositions.has(position)?"bottom: "+marginDimensions.bottom+";":""}),(function styledLeft(_ref3){var position=_ref3.position,full=_ref3.full,marginDimensions=_ref3.marginDimensions;return"horizontal"===full||!0===full||leftAlignPositions.has(position)?"left: "+marginDimensions.left+";":hCenterAlignPositions.has(position)?"left: 50%;":""}),(function transform(_ref7){var full=_ref7.full,position=_ref7.position,value=function getValue(){var left=!0!==full&&"horizontal"!==full&&hCenterAlignPositions.has(position),top=!0!==full&&"vertical"!==full&&vCenterAlignPositions.has(position);return left||top?left&&!top?"translateX(-50%)":!left&&top?"translateY(-50%)":"translate(-50%, -50%)":""}();return value&&"transform: "+value+";"}),(function boxShadow(_ref8){return _ref8.borderShadow&&"box-shadow: 0px 2px 68px rgba(0, 0, 0, 0.288);"}),(function zIndex(_ref9){var _ref9$zIndex=_ref9.zIndex,zIndex=void 0===_ref9$zIndex?35:_ref9$zIndex;return"z-index: "+zIndex+";"}));exports.default=Container},"./src/components/templates/layer/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_reactDom=_interopRequireDefault(__webpack_require__("./node_modules/react-dom/index.js")),_useDropElement=_interopRequireDefault(__webpack_require__("./src/hooks/useDropElement/index.js")),_useOutsideClick=_interopRequireDefault(__webpack_require__("./src/hooks/useOutsideClick/index.js")),_useKeyboardEsc=_interopRequireDefault(__webpack_require__("./src/hooks/useKeyboardEsc/index.js")),_container=_interopRequireDefault(__webpack_require__("./src/components/templates/layer/container.js")),_backdropContainer=_interopRequireDefault(__webpack_require__("./src/components/templates/layer/backdropContainer.js")),_excluded=["position","full","backdrop","margin","onClickOutside","onEsc","borderShadow","children","backdropProps"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var emptyArray=[];exports.default=function Layer(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?"center":_ref$position,_ref$full=_ref.full,full=void 0!==_ref$full&&_ref$full,_ref$backdrop=_ref.backdrop,backdrop=void 0===_ref$backdrop||_ref$backdrop,_ref$margin=_ref.margin,margin=void 0===_ref$margin?emptyArray:_ref$margin,onClickOutside=_ref.onClickOutside,onEsc=_ref.onEsc,borderShadow=_ref.borderShadow,children=_ref.children,backdropProps=_ref.backdropProps,rest=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(_ref,_excluded),ref=(0,_react.useRef)();(0,_useOutsideClick.default)(ref,onClickOutside,null,backdrop),(0,_useKeyboardEsc.default)(onEsc);var el=(0,_useDropElement.default)(),content=_react.default.createElement(_container.default,_extends({isAbsolute:backdrop,ref,full,position,margin,borderShadow,"data-testid":"layer-container"},rest),children);return _reactDom.default.createPortal(backdrop?_react.default.createElement(_backdropContainer.default,_extends({backdropProps},rest,{onClick:onClickOutside}),content):content,el)}},"./src/components/templates/layer/mixins/getMarginDimensions.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _utils=__webpack_require__("./src/mixins/utils.js"),blank={top:"0",right:"0",bottom:"0",left:"0"};exports.default=function _default(theme,margin){if(!Array.isArray(margin)||margin.length<1||margin.length>4)return blank;var dimensions=margin.map((function(size){return(0,_utils.getDimension)(theme,size)}));return 1===dimensions.length?{top:dimensions[0],right:dimensions[0],bottom:dimensions[0],left:dimensions[0]}:2===dimensions.length?{top:dimensions[0],right:dimensions[1],bottom:dimensions[0],left:dimensions[1]}:3===dimensions.length?{top:dimensions[0],right:dimensions[1],bottom:dimensions[2],left:dimensions[1]}:{top:dimensions[0],right:dimensions[1],bottom:dimensions[2],left:dimensions[3]}}},"./src/mixins/controlFocused.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _styledComponents=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme=__webpack_require__("./src/theme/index.js");exports.default=(0,_styledComponents.css)(["border-color:",";box-shadow:0 0 0 1px ",";"],(0,_theme.getValidatedControlColor)("controlFocused"),(0,_theme.getValidatedControlColor)("controlFocused"))},"./src/mixins/controlReset.js":(__unused_webpack_module,exports)=>{exports.__esModule=!0,exports.default=void 0;exports.default="\n  font-family: inherit;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n"},"./src/mixins/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.zIndex=exports.webkitVisibleScrollbar=exports.textTransform=exports.round=exports.position=exports.padding=exports.opacity=exports.margin=exports.cursor=exports.controlReset=exports.controlFocused=exports.alignSelf=void 0;var _alignSelf=_interopRequireDefault(__webpack_require__("./src/mixins/alignSelf.js"));exports.alignSelf=_alignSelf.default;var _controlFocused=_interopRequireDefault(__webpack_require__("./src/mixins/controlFocused.js"));exports.controlFocused=_controlFocused.default;var _controlReset=_interopRequireDefault(__webpack_require__("./src/mixins/controlReset.js"));exports.controlReset=_controlReset.default;var _cursor=_interopRequireDefault(__webpack_require__("./src/mixins/cursor.js"));exports.cursor=_cursor.default;var _margin=_interopRequireDefault(__webpack_require__("./src/mixins/margin.js"));exports.margin=_margin.default;var _opacity=_interopRequireDefault(__webpack_require__("./src/mixins/opacity.js"));exports.opacity=_opacity.default;var _padding=_interopRequireDefault(__webpack_require__("./src/mixins/padding.js"));exports.padding=_padding.default;var _position=_interopRequireDefault(__webpack_require__("./src/mixins/position.js"));exports.position=_position.default;var _round=_interopRequireDefault(__webpack_require__("./src/mixins/round.js"));exports.round=_round.default;var _textTransform=_interopRequireDefault(__webpack_require__("./src/mixins/textTransform.js"));exports.textTransform=_textTransform.default;var _webkitVisibleScrollbar=_interopRequireDefault(__webpack_require__("./src/mixins/webkitVisibleScrollbar.js"));exports.webkitVisibleScrollbar=_webkitVisibleScrollbar.default;var _zIndex=_interopRequireDefault(__webpack_require__("./src/mixins/zIndex.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.zIndex=_zIndex.default},"./src/mixins/webkitVisibleScrollbar.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _styledComponents=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils=__webpack_require__("./src/theme/utils.js");exports.default=(0,_styledComponents.css)(["scrollbar-width:",";scrollbar-color:"," ",";&::-webkit-scrollbar{width:",";}&::-webkit-scrollbar-track{border-radius:",";background-color:",";}&::-webkit-scrollbar-thumb{border-radius:",";background-color:",";}&::-webkit-scrollbar-thumb:hover{background-color:",";}&::-webkit-scrollbar-track-piece{background-color:",";}&::-webkit-scrollbar-corner{background-color:",";}"],(0,_utils.getSizeBy)(1),(0,_utils.getRgbColor)("border",.3),(0,_utils.getRgbColor)("border",.1),(0,_utils.getSizeBy)(1),(0,_utils.getSizeBy)(.5),(0,_utils.getRgbColor)("border",.1),(0,_utils.getSizeBy)(1),(0,_utils.getRgbColor)("border",.3),(0,_utils.getRgbColor)("border",.5),(0,_utils.getRgbColor)("border",.3),(0,_utils.getRgbColor)("border",.3))},"./src/organisms/news/container.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_flex=_interopRequireDefault(__webpack_require__("./src/components/templates/flex/index.js")),_mixins=__webpack_require__("./src/mixins/index.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Container=(0,_styledComponents.default)(_flex.default).attrs({overflow:{vertical:"auto"},padding:[0,4,0,0]}).withConfig({displayName:"container__Container",componentId:"sc-1ngr5az-0"})(["",""],_mixins.webkitVisibleScrollbar);exports.default=Container},"./src/organisms/news/header.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_flex=_interopRequireDefault(__webpack_require__("./src/components/templates/flex/index.js")),_icon=__webpack_require__("./src/components/icon/index.js"),_typography=__webpack_require__("./src/components/typography/index.js"),_button=__webpack_require__("./src/components/button/index.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Header=function Header(_ref){var onClose=_ref.onClose;return _react.default.createElement(_flex.default,{border:{side:"bottom",color:"selected"},justifyContent:"between",alignItems:"center",padding:[0,0,4,0]},_react.default.createElement(_flex.default,{gap:2},_react.default.createElement(_icon.Icon,{color:"text",name:"insights"}),_react.default.createElement(_typography.TextBig,{strong:!0},"Khulnasoft News")),_react.default.createElement(_button.Button,{flavour:"borderless",neutral:!0,icon:"x",title:"close news",onClick:onClose}))};exports.default=Header;Header.__docgenInfo={description:"",methods:[],displayName:"Header"}},"./src/organisms/news/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_useToggle2=_interopRequireDefault(__webpack_require__("./src/hooks/useToggle/index.js")),_typography=__webpack_require__("./src/components/typography/index.js"),_flex=_interopRequireDefault(__webpack_require__("./src/components/templates/flex/index.js")),_layer=_interopRequireDefault(__webpack_require__("./src/components/templates/layer/index.js")),_container=_interopRequireDefault(__webpack_require__("./src/organisms/news/container.js")),_header=_interopRequireDefault(__webpack_require__("./src/organisms/news/header.js")),_item=_interopRequireDefault(__webpack_require__("./src/organisms/news/item/index.js")),_useFetchNews=_interopRequireDefault(__webpack_require__("./src/organisms/news/useFetchNews.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var emptyArray=[],News=function News(_ref){var _ref$app=_ref.app,app=void 0===_ref$app?"cloud":_ref$app,onCloseClick=_ref.onCloseClick,children=_ref.children,lastSeen=localStorage.getItem("news_last_seen"),_useState=(0,_react.useState)(emptyArray),news=_useState[0],setNews=_useState[1],_useState2=(0,_react.useState)(),error=_useState2[0],setError=_useState2[1],_useToggle=(0,_useToggle2.default)(),isOpen=_useToggle[0],toggle=_useToggle[1],fetchNews=(0,_useFetchNews.default)();(0,_react.useEffect)((function(){fetchNews(app,(function(_ref2){var results=_ref2.results;return setNews(results)}),(function(){return setError(!0)}))}),[]);var upToDate=(0,_react.useMemo)((function(){if(!news.length)return!0;var publishedAt=news[0].last_publication_date;return new Date(lastSeen)>=new Date(publishedAt)}),[lastSeen,news]),onClose=(0,_react.useCallback)((function(){toggle(),localStorage.setItem("news_last_seen",new Date),onCloseClick&&onCloseClick()}),[onCloseClick]);return _react.default.createElement(_react.Fragment,null,children({toggle,isOpen,upToDate}),isOpen&&_react.default.createElement(_layer.default,{backdrop:!0,onClickOutside:onClose,onEsc:onClose},_react.default.createElement(_flex.default,{background:"dropdown",round:!0,padding:[6],width:"640px",height:{max:"640px"},gap:4,column:!0},_react.default.createElement(_header.default,{onClose}),_react.default.createElement(_container.default,{column:!0,gap:6},error&&_react.default.createElement(_typography.TextSmall,{textAlign:"center"},"Something went wrong 😔"),!error&&!news.length&&_react.default.createElement(_typography.TextSmall,{textAlign:"center"},"There are no latest news"),!error&&news.length>0&&news.map((function(item){return _react.default.createElement(_item.default,{key:item.id,item})}))))))};exports.default=News;News.__docgenInfo={description:"",methods:[],displayName:"News",props:{app:{defaultValue:{value:'"cloud"',computed:!1},required:!1}}}},"./src/organisms/news/item/anchor.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_flex=_interopRequireDefault(__webpack_require__("./src/components/templates/flex/index.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Anchor=(0,_styledComponents.default)(_flex.default).attrs({as:"a"}).withConfig({displayName:"anchor__Anchor",componentId:"sc-1wadjj-0"})(["text-decoration:none;& :hover{text-decoration:none;}"]);exports.default=Anchor},"./src/organisms/news/item/image.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_flex=_interopRequireDefault(__webpack_require__("./src/components/templates/flex/index.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Image=(0,_styledComponents.default)(_flex.default).attrs({as:"img"}).withConfig({displayName:"image__Image",componentId:"sc-1ys7bvg-0"})(["object-fit:cover;"]);exports.default=Image},"./src/organisms/news/item/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_flex=_interopRequireDefault(__webpack_require__("./src/components/templates/flex/index.js")),_icon=__webpack_require__("./src/components/icon/index.js"),_typography=__webpack_require__("./src/components/typography/index.js"),_image=_interopRequireDefault(__webpack_require__("./src/organisms/news/item/image.js")),_anchor=_interopRequireDefault(__webpack_require__("./src/organisms/news/item/anchor.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Item=function Item(_ref){var item=_ref.item,publishedAt=item.last_publication_date,data=item.data,title=data.title,description=data.description,url=data.url,image=data.image,label=data.label,imageSrc=image&&image.url,dateFormated=new Date(publishedAt);return _react.default.createElement(_flex.default,{column:!0,gap:2},_react.default.createElement(_flex.default,{gap:4},imageSrc&&_react.default.createElement(_image.default,{src:imageSrc,width:"160px"}),_react.default.createElement(_flex.default,{column:!0,gap:2},_react.default.createElement(_typography.Text,{strong:!0},title),_react.default.createElement(_typography.Text,null,description))),_react.default.createElement(_flex.default,{justifyContent:"between",alignItems:"center"},_react.default.createElement(_typography.TextSmall,null,dateFormated.toLocaleDateString()),_react.default.createElement(_anchor.default,{href:url,target:"_blank",rel:"noopener noreferrer",gap:1,alignItems:"center"},_react.default.createElement(_typography.Text,{color:"success",strong:!0},label),_react.default.createElement(_icon.Icon,{color:"success",rotate:2,name:"arrow_left"}))))};exports.default=Item;Item.__docgenInfo={description:"",methods:[],displayName:"Item"}},"./src/organisms/news/useFetchNews.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _react=__webpack_require__("./node_modules/react/index.js"),prismic=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/@prismicio/client/dist/index.cjs"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var getClient=function getClient(){return prismic.createClient("https://khulnasoft-news.cdn.prismic.io/api/v2")};exports.default=function _default(){var client=(0,_react.useState)(getClient)[0];return function(app,onSuccess,onError){return client.get({filters:[prismic.filter.any("document.tags",Array.isArray(app)?app:[app])],pageSize:100,orderings:[{field:"document.last_publication_date",direction:"desc"}]}).then(onSuccess).catch(onError)}}}}]);