import{r as a}from"./app-8dc48a82.js";import{c as g,I as y,O as i}from"./portal.esm-b560eca6.js";function s(){return s=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},s.apply(this,arguments)}function o(r){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(r)}function v(r,e){if(o(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var t=n.call(r,e||"default");if(o(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function d(r){var e=v(r,"string");return o(e)==="symbol"?e:String(e)}function c(r,e,n){return e=d(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}var l={defaultProps:{__TYPE:"Tag",value:null,severity:null,rounded:!1,icon:null,style:null,className:null,children:void 0},getProps:function(e){return i.getMergedProps(e,l.defaultProps)},getOtherProps:function(e){return i.getDiffProps(e,l.defaultProps)}},P=a.forwardRef(function(r,e){var n,t=l.getProps(r),u=a.useRef(null),p=l.getOtherProps(t),f=g("p-tag p-component",(n={},c(n,"p-tag-".concat(t.severity),t.severity!==null),c(n,"p-tag-rounded",t.rounded),n),t.className),m=y.getJSXIcon(t.icon,{className:"p-tag-icon"},{props:t});return a.useImperativeHandle(e,function(){return{props:t,getElement:function(){return u.current}}}),a.createElement("span",s({ref:u,className:f,style:t.style},p),m,a.createElement("span",{className:"p-tag-value"},t.value),a.createElement("span",null,t.children))});P.displayName="Tag";export{P as T};