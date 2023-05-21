import{r as i}from"./app-c94b149d.js";import{E as Zt,h as Yt,u as Qt,g as er,D as L,b as Bt,d as ie,O as y,c as B,f as Le,i as tr,e as rr,R as nr,P as ar,F as kt,Z as Nt,I as At,l as Mt}from"./portal.esm-105fa917.js";import{T as lr}from"./button.esm-320d2b12.js";import{C as or}from"./csstransition.esm-de611294.js";var ir=Zt();function zt(){return zt=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u])}return t},zt.apply(this,arguments)}function $e(t){return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},$e(t)}function ur(t,a){if($e(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var u=e.call(t,a||"default");if($e(u)!=="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function cr(t){var a=ur(t,"string");return $e(a)==="symbol"?a:String(a)}function _t(t,a,e){return a=cr(a),a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function sr(t){if(Array.isArray(t))return t}function fr(t,a){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var u,P,h,d,A=[],E=!0,m=!1;try{if(h=(e=e.call(t)).next,a===0){if(Object(e)!==e)return;E=!1}else for(;!(E=(u=h.call(e)).done)&&(A.push(u.value),A.length!==a);E=!0);}catch(j){m=!0,P=j}finally{try{if(!E&&e.return!=null&&(d=e.return(),Object(d)!==d))return}finally{if(m)throw P}}return A}}function Vt(t,a){(a==null||a>t.length)&&(a=t.length);for(var e=0,u=new Array(a);e<a;e++)u[e]=t[e];return u}function pr(t,a){if(t){if(typeof t=="string")return Vt(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Vt(t,a)}}function dr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(t,a){return sr(t)||fr(t,a)||pr(t,a)||dr()}var nt={defaultProps:{__TYPE:"VirtualScroller",id:null,style:null,className:null,tabIndex:0,items:null,itemSize:0,scrollHeight:null,scrollWidth:null,orientation:"vertical",step:0,numToleratedItems:null,delay:0,resizeDelay:10,appendOnly:!1,inline:!1,lazy:!1,disabled:!1,loaderDisabled:!1,columns:null,loading:void 0,autoSize:!1,showSpacer:!0,showLoader:!1,loadingTemplate:null,loaderIconTemplate:null,itemTemplate:null,contentTemplate:null,onScroll:null,onScrollIndexChange:null,onLazyLoad:null,children:void 0},getProps:function(a){return y.getMergedProps(a,nt.defaultProps)},getOtherProps:function(a){return y.getDiffProps(a,nt.defaultProps)}};function jt(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);a&&(u=u.filter(function(P){return Object.getOwnPropertyDescriptor(t,P).enumerable})),e.push.apply(e,u)}return e}function Ke(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?jt(Object(e),!0).forEach(function(u){_t(t,u,e[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):jt(Object(e)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(e,u))})}return t}var Jt=i.memo(i.forwardRef(function(t,a){var e=nt.getProps(t),u=Yt(t)||{},P=e.orientation==="vertical",h=e.orientation==="horizontal",d=e.orientation==="both",A=i.useState(d?{rows:0,cols:0}:0),E=ne(A,2),m=E[0],j=E[1],he=i.useState(d?{rows:0,cols:0}:0),ce=ne(he,2),b=ce[0],se=ce[1],Y=i.useState(0),M=ne(Y,2),z=M[0],F=M[1],g=i.useState(d?{rows:0,cols:0}:0),I=ne(g,2),S=I[0],R=I[1],$=i.useState(e.numToleratedItems),X=ne($,2),N=X[0],q=X[1],Te=i.useState(e.loading||!1),ye=ne(Te,2),H=ye[0],Ne=ye[1],lt=i.useState([]),He=ne(lt,2),ae=He[0],ot=He[1],w=i.useRef(null),T=i.useRef(null),ze=i.useRef(null),be=i.useRef(null),Q=i.useRef(d?{top:0,left:0}:0),Se=i.useRef(null),we=i.useRef(null),fe=i.useRef({}),Oe=i.useRef({}),pe=i.useRef(null),le=i.useRef(null),Ge=i.useRef(null),Ie=i.useRef(null),De=i.useRef(!1),oe=i.useRef(null),it=Qt({listener:function(n){return Ue()},when:!e.disabled}),ut=ne(it,1),ct=ut[0],xe=er({target:"window",type:"orientationchange",listener:function(n){return Ue()},when:!e.disabled}),st=ne(xe,1),Ee=st[0],de=function(){return w},me=function(n){return Math.floor((n+N*4)/(e.step||1))},We=function(n){T.current=n||T.current||L.findSingle(w.current,".p-virtualscroller-content")},ke=function(n){return e.step?z!==me(n):!0},ee=function(n){Q.current=d?{top:0,left:0}:0,w.current&&w.current.scrollTo(n)},G=function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",o=Ae(),f=o.numToleratedItems,p=te(),s=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,J=arguments.length>1?arguments[1]:void 0;return K<=J?0:K},v=function(K,J,ve){return K*J+ve},C=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return ee({left:K,top:J,behavior:l})},O=d?{rows:0,cols:0}:0,x=!1;d?(O={rows:s(n[0],f[0]),cols:s(n[1],f[1])},C(v(O.cols,e.itemSize[1],p.left),v(O.rows,e.itemSize[0],p.top)),x=m.rows!==O.rows||m.cols!==O.cols):(O=s(n,f),h?C(v(O,e.itemSize,p.left),0):C(0,v(O,e.itemSize,p.top)),x=m!==O),De.current=x,j(O)},ft=function(n,l){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(l){var f=Be(),p=f.first,s=f.viewport,v=function(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,ve=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return ee({left:J,top:ve,behavior:o})},C=l==="to-start",O=l==="to-end";if(C){if(d)s.first.rows-p.rows>n[0]?v(s.first.cols*e.itemSize[1],(s.first.rows-1)*e.itemSize[0]):s.first.cols-p.cols>n[1]&&v((s.first.cols-1)*e.itemSize[1],s.first.rows*e.itemSize[0]);else if(s.first-p>n){var x=(s.first-1)*e.itemSize;h?v(x,0):v(0,x)}}else if(O){if(d)s.last.rows-p.rows<=n[0]+1?v(s.first.cols*e.itemSize[1],(s.first.rows+1)*e.itemSize[0]):s.last.cols-p.cols<=n[1]+1&&v((s.first.cols+1)*e.itemSize[1],s.first.rows*e.itemSize[0]);else if(s.last-p<=n+1){var V=(s.first+1)*e.itemSize;h?v(V,0):v(0,V)}}}else G(n,o)},pt=function(){return H?e.loaderDisabled?ae:[]:Ve()},dt=function(){return e.columns&&d||h?H&&e.loaderDisabled?d?ae[0]:ae:e.columns.slice(d?m.cols:m,d?b.cols:b):e.columns},Be=function(){var n=function(O,x){return Math.floor(O/(x||O))},l=m,o=0;if(w.current){var f=w.current,p=f.scrollTop,s=f.scrollLeft;if(d)l={rows:n(p,e.itemSize[0]),cols:n(s,e.itemSize[1])},o={rows:l.rows+S.rows,cols:l.cols+S.cols};else{var v=h?s:p;l=n(v,e.itemSize),o=l+S}}return{first:m,last:b,viewport:{first:l,last:o}}},Ae=function(){var n=te(),l=w.current?w.current.offsetWidth-n.left:0,o=w.current?w.current.offsetHeight-n.top:0,f=function(O,x){return Math.ceil(O/(x||O))},p=function(O){return Math.ceil(O/2)},s=d?{rows:f(o,e.itemSize[0]),cols:f(l,e.itemSize[1])}:f(h?l:o,e.itemSize),v=N||(d?[p(s.rows),p(s.cols)]:p(s));return{numItemsInViewport:s,numToleratedItems:v}},mt=function(){var n=Ae(),l=n.numItemsInViewport,o=n.numToleratedItems,f=function(v,C,O){var x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return Z(v+C+(v<O?2:3)*O,x)},p=d?{rows:f(m.rows,l.rows,o[0]),cols:f(m.cols,l.cols,o[1],!0)}:f(m,l,o);R(l),q(o),se(p),e.showLoader&&ot(d?Array.from({length:l.rows}).map(function(){return Array.from({length:l.cols})}):Array.from({length:l})),e.lazy&&Promise.resolve().then(function(){oe.current={first:e.step?d?{rows:0,cols:m.cols}:0:m,last:Math.min(e.step?e.step:p,e.items.length)},e.onLazyLoad&&e.onLazyLoad(oe.current)})},_e=function(n){e.autoSize&&!n&&Promise.resolve().then(function(){if(T.current){T.current.style.minHeight=T.current.style.minWidth="auto",T.current.style.position="relative",w.current.style.contain="none";var l=[L.getWidth(w.current),L.getHeight(w.current)],o=l[0],f=l[1];(d||h)&&(w.current.style.width=(o<pe.current?o:e.scrollWidth||pe.current)+"px"),(d||P)&&(w.current.style.height=(f<le.current?f:e.scrollHeight||le.current)+"px"),T.current.style.minHeight=T.current.style.minWidth="",T.current.style.position="",w.current.style.contain=""}})},Z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=arguments.length>1?arguments[1]:void 0;return e.items?Math.min(l?(e.columns||e.items[0]).length:e.items.length,n):0},te=function(){if(T.current){var n=getComputedStyle(T.current),l=parseFloat(n.paddingLeft)+Math.max(parseFloat(n.left)||0,0),o=parseFloat(n.paddingRight)+Math.max(parseFloat(n.right)||0,0),f=parseFloat(n.paddingTop)+Math.max(parseFloat(n.top)||0,0),p=parseFloat(n.paddingBottom)+Math.max(parseFloat(n.bottom)||0,0);return{left:l,right:o,top:f,bottom:p,x:l+o,y:f+p}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},vt=function(){if(w.current){var n=w.current.parentElement,l=e.scrollWidth||"".concat(w.current.offsetWidth||n.offsetWidth,"px"),o=e.scrollHeight||"".concat(w.current.offsetHeight||n.offsetHeight,"px"),f=function(s,v){return w.current.style[s]=v};d||h?(f("height",o),f("width",l)):f("height",o)}},Me=function(){var n=e.items;if(n){var l=te(),o=function(p,s,v){var C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return Oe.current=Ke(Ke({},Oe.current),_t({},"".concat(p),(s||[]).length*v+C+"px"))};d?(o("height",n,e.itemSize[0],l.y),o("width",e.columns||n[1],e.itemSize[1],l.x)):h?o("width",e.columns||n,e.itemSize,l.x):o("height",n,e.itemSize,l.y)}},gt=function(n){if(T.current&&!e.appendOnly){var l=n?n.first:m,o=function(v,C){return v*C},f=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;be.current&&(be.current.style.top="-".concat(C,"px")),fe.current=Ke(Ke({},fe.current),{transform:"translate3d(".concat(v,"px, ").concat(C,"px, 0)")})};if(d)f(o(l.cols,e.itemSize[1]),o(l.rows,e.itemSize[0]));else{var p=o(l,e.itemSize);h?f(p,0):f(0,p)}}},Je=function(n){var l=n.target,o=te(),f=function(k,U){return k?k>U?k-U:k:0},p=function(k,U){return Math.floor(k/(U||k))},s=function(k,U,je,et,re,ge){return k<=re?re:ge?je-et-re:U+re-1},v=function(k,U,je,et,re,ge,tt){return k<=ge?0:Math.max(0,tt?k<U?je:k-ge:k>U?je:k-2*ge)},C=function(k,U,je,et,re,ge){var tt=U+et+2*re;return k>=re&&(tt+=re+1),Z(tt,ge)},O=f(l.scrollTop,o.top),x=f(l.scrollLeft,o.left),V=d?{rows:0,cols:0}:0,K=b,J=!1,ve=Q.current;if(d){var Rt=Q.current.top<=O,Pt=Q.current.left<=x;if(!e.appendOnly||e.appendOnly&&(Rt||Pt)){var Re={rows:p(O,e.itemSize[0]),cols:p(x,e.itemSize[1])},xt={rows:s(Re.rows,m.rows,b.rows,S.rows,N[0],Rt),cols:s(Re.cols,m.cols,b.cols,S.cols,N[1],Pt)};V={rows:v(Re.rows,xt.rows,m.rows,b.rows,S.rows,N[0],Rt),cols:v(Re.cols,xt.cols,m.cols,b.cols,S.cols,N[1],Pt)},K={rows:C(Re.rows,V.rows,b.rows,S.rows,N[0]),cols:C(Re.cols,V.cols,b.cols,S.cols,N[1],!0)},J=V.rows!==m.rows||K.rows!==b.rows||V.cols!==m.cols||K.cols!==b.cols||De.current,ve={top:O,left:x}}}else{var Lt=h?x:O,Ft=Q.current<=Lt;if(!e.appendOnly||e.appendOnly&&Ft){var Tt=p(Lt,e.itemSize),qt=s(Tt,m,b,S,N,Ft);V=v(Tt,qt,m,b,S,N,Ft),K=C(Tt,V,b,S,N),J=V!==m||K!==b||De.current,ve=Lt}}return{first:V,last:K,isRangeChanged:J,scrollPos:ve}},W=function(n){var l=Je(n),o=l.first,f=l.last,p=l.isRangeChanged,s=l.scrollPos;if(p){var v={first:o,last:f};if(gt(v),j(o),se(f),Q.current=s,e.onScrollIndexChange&&e.onScrollIndexChange(v),e.lazy&&ke(o)){var C={first:e.step?Math.min(me(o)*e.step,e.items.length-e.step):o,last:Math.min(e.step?(me(o)+1)*e.step:f,e.items.length)},O=!oe.current||oe.current.first!==C.first||oe.current.last!==C.last;O&&e.onLazyLoad&&e.onLazyLoad(C),oe.current=C}}},ht=function(n){if(e.onScroll&&e.onScroll(n),e.delay){if(Se.current&&clearTimeout(Se.current),ke(m)){if(!H&&e.showLoader){var l=Je(n),o=l.isRangeChanged,f=o||(e.step?ke(m):!1);f&&Ne(!0)}Se.current=setTimeout(function(){W(n),H&&e.showLoader&&(!e.lazy||e.loading===void 0)&&(Ne(!1),F(me(m)))},e.delay)}}else W(n)},Ue=function(){we.current&&clearTimeout(we.current),we.current=setTimeout(function(){if(w.current){var n=[L.getWidth(w.current),L.getHeight(w.current)],l=n[0],o=n[1],f=l!==pe.current,p=o!==le.current,s=d?f||p:h?f:P?p:!1;s&&(q(e.numToleratedItems),pe.current=l,le.current=o,Ge.current=L.getWidth(T.current),Ie.current=L.getHeight(T.current))}},e.resizeDelay)},Xe=function(n){var l=(e.items||[]).length,o=d?m.rows+n:m+n;return{index:o,count:l,first:o===0,last:o===l-1,even:o%2===0,odd:o%2!==0,props:e}},qe=function(n,l){var o=ae.length;return Ke({index:n,count:o,first:n===0,last:n===o-1,even:n%2===0,odd:n%2!==0,props:e},l)},Ve=function(){var n=e.items;return n&&!H?d?n.slice(e.appendOnly?0:m.rows,b.rows).map(function(l){return e.columns?l:l.slice(e.appendOnly?0:m.cols,b.cols)}):h&&e.columns?n:n.slice(e.appendOnly?0:m,b):[]},yt=function(){w.current&&L.isVisible(w.current)&&(We(T.current),Ce(),ct(),Ee(),pe.current=L.getWidth(w.current),le.current=L.getHeight(w.current),Ge.current=L.getWidth(T.current),Ie.current=L.getHeight(T.current))},Ce=function(){e.disabled||(vt(),mt(),Me())};Bt(function(){yt()}),ie(function(){Ce()},[e.itemSize,e.scrollHeight,e.scrollWidth]),ie(function(){e.numToleratedItems!==N&&q(e.numToleratedItems)},[e.numToleratedItems]),ie(function(){e.numToleratedItems===N&&Ce()},[N]),ie(function(){(!u.items||u.items.length!==(e.items||[]).length)&&Ce();var r=H;e.lazy&&u.loading!==e.loading&&e.loading!==H&&(Ne(e.loading),r=e.loading),_e(r)}),ie(function(){Q.current=d?{top:0,left:0}:0},[e.orientation]),i.useImperativeHandle(a,function(){return{props:e,getElementRef:de,scrollTo:ee,scrollToIndex:G,scrollInView:ft,getRenderedRange:Be}});var D=function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=qe(n,l),f=y.getJSXElement(e.loadingTemplate,o);return i.createElement(i.Fragment,{key:n},f)},_=function(){if(!e.loaderDisabled&&e.showLoader&&H){var n=B("p-virtualscroller-loader",{"p-component-overlay":!e.loadingTemplate}),l=i.createElement("i",{className:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"});if(e.loadingTemplate)l=ae.map(function(f,p){return D(p,d&&{numCols:S.cols})});else if(e.loaderIconTemplate){var o={className:"p-virtualscroller-loading-icon",element:l,props:e};l=y.getJSXElement(e.loaderIconTemplate,o)}return i.createElement("div",{className:n},l)}return null},bt=function(){return e.showSpacer?i.createElement("div",{ref:ze,style:Oe.current,className:"p-virtualscroller-spacer"}):null},Ze=function(n,l){var o=Xe(l),f=y.getJSXElement(e.itemTemplate,n,o);return i.createElement(i.Fragment,{key:o.index},f)},Ye=function(){var n=Ve();return n.map(Ze)},St=function(){var n=Ye(),l=B("p-virtualscroller-content",{"p-virtualscroller-loading":H}),o=i.createElement("div",{ref:T,style:fe.current,className:l},n);if(e.contentTemplate){var f={style:fe.current,className:l,spacerStyle:Oe.current,contentRef:function(s){return T.current=y.getRefElement(s)},spacerRef:function(s){return ze.current=y.getRefElement(s)},stickyRef:function(s){return be.current=y.getRefElement(s)},items:Ve(),getItemOptions:function(s){return Xe(s)},children:n,element:o,props:e,loading:H,getLoaderOptions:function(s,v){return qe(s,v)},loadingTemplate:e.loadingTemplate,itemSize:e.itemSize,rows:pt(),columns:dt(),vertical:P,horizontal:h,both:d};return y.getJSXElement(e.contentTemplate,f)}return o};if(e.disabled){var wt=y.getJSXElement(e.contentTemplate,{items:e.items,rows:e.items,columns:e.columns});return i.createElement(i.Fragment,null,e.children,wt)}else{var Ot=nt.getOtherProps(e),It=B("p-virtualscroller",{"p-virtualscroller-inline":e.inline,"p-virtualscroller-both p-both-scroll":d,"p-virtualscroller-horizontal p-horizontal-scroll":h},e.className),Et=_(),Ct=St(),c=bt();return i.createElement("div",zt({ref:w,className:It,tabIndex:e.tabIndex,style:e.style},Ot,{onScroll:ht}),Ct,c,Et)}}));Jt.displayName="VirtualScroller";function ue(){return ue=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u])}return t},ue.apply(this,arguments)}function Fe(t){return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Fe(t)}function mr(t,a){if(Fe(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var u=e.call(t,a||"default");if(Fe(u)!=="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function vr(t){var a=mr(t,"string");return Fe(a)==="symbol"?a:String(a)}function Ut(t,a,e){return a=vr(a),a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function gr(t){if(Array.isArray(t))return t}function hr(t,a){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var u,P,h,d,A=[],E=!0,m=!1;try{if(h=(e=e.call(t)).next,a===0){if(Object(e)!==e)return;E=!1}else for(;!(E=(u=h.call(e)).done)&&(A.push(u.value),A.length!==a);E=!0);}catch(j){m=!0,P=j}finally{try{if(!E&&e.return!=null&&(d=e.return(),Object(d)!==d))return}finally{if(m)throw P}}return A}}function Kt(t,a){(a==null||a>t.length)&&(a=t.length);for(var e=0,u=new Array(a);e<a;e++)u[e]=t[e];return u}function yr(t,a){if(t){if(typeof t=="string")return Kt(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Kt(t,a)}}function br(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(t,a){return gr(t)||hr(t,a)||yr(t,a)||br()}var at={defaultProps:{__TYPE:"Dropdown",appendTo:null,ariaLabel:null,ariaLabelledBy:null,autoFocus:!1,className:null,clearIcon:"pi pi-times",dataKey:null,disabled:!1,dropdownIcon:"pi pi-chevron-down",editable:!1,emptyFilterMessage:null,emptyMessage:null,filter:!1,filterBy:null,filterInputAutoFocus:!0,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,focusInputRef:null,id:null,inputId:null,inputRef:null,itemTemplate:null,maxLength:null,name:null,onBlur:null,onChange:null,onContextMenu:null,onFilter:null,onFocus:null,onHide:null,onMouseDown:null,onShow:null,optionDisabled:null,optionGroupChildren:null,optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,panelClassName:null,panelStyle:null,placeholder:null,required:!1,resetFilterOnHide:!1,scrollHeight:"200px",showClear:!1,showFilterClear:!1,showOnFocus:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,value:null,valueTemplate:null,virtualScrollerOptions:null,children:void 0},getProps:function(a){return y.getMergedProps(a,at.defaultProps)},getOtherProps:function(a){return y.getDiffProps(a,at.defaultProps)}},Dt=i.memo(function(t){var a=function(h){t.onClick&&t.onClick({originalEvent:h,option:t.option})},e=B("p-dropdown-item",{"p-highlight":t.selected,"p-disabled":t.disabled,"p-dropdown-item-empty":!t.label||t.label.length===0},t.option&&t.option.className),u=t.template?y.getJSXElement(t.template,t.option):t.label;return i.createElement("li",{className:e,style:t.style,onClick:a,"aria-label":t.label,key:t.label,role:"option","aria-selected":t.selected},u,i.createElement(nr,null))});Dt.displayName="DropdownItem";function $t(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);a&&(u=u.filter(function(P){return Object.getOwnPropertyDescriptor(t,P).enumerable})),e.push.apply(e,u)}return e}function Pe(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?$t(Object(e),!0).forEach(function(u){Ut(t,u,e[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):$t(Object(e)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(e,u))})}return t}var Xt=i.memo(i.forwardRef(function(t,a){var e=i.useRef(null),u=i.useRef(null),P=!(t.visibleOptions&&t.visibleOptions.length)&&t.hasFilter,h={filter:function(g){return E(g)},reset:function(){return t.resetFilter()}},d=function(){t.onEnter(function(){if(e.current){var g=t.getSelectedOptionIndex();g!==-1&&setTimeout(function(){return e.current.scrollToIndex(g)},0)}})},A=function(){t.onEntered(function(){t.filter&&t.filterInputAutoFocus&&L.focus(u.current,!1)})},E=function(g){e.current&&e.current.scrollToIndex(0),t.onFilterInputChange&&t.onFilterInputChange(g)},m=function(g,I){var S=t.getOptionGroupChildren(g);return S.map(function(R,$){var X=t.getOptionLabel(R),N=$+"_"+t.getOptionRenderKey(R),q=t.isOptionDisabled(R);return i.createElement(Dt,{key:N,label:X,option:R,style:I,template:t.itemTemplate,selected:t.isSelected(R),disabled:q,onClick:t.onOptionClick})})},j=function(g,I){var S=y.getJSXElement(g,t)||Mt(I?"emptyFilterMessage":"emptyMessage");return i.createElement("li",{className:"p-dropdown-empty-message"},S)},he=function(g,I){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},R={height:S.props?S.props.itemSize:void 0};if(t.optionGroupLabel){var $=t.optionGroupTemplate?y.getJSXElement(t.optionGroupTemplate,g,I):t.getOptionGroupLabel(g),X=m(g,R),N=I+"_"+t.getOptionGroupRenderKey(g);return i.createElement(i.Fragment,{key:N},i.createElement("li",{className:"p-dropdown-item-group",style:R},$),X)}else{var q=t.getOptionLabel(g),Te=I+"_"+t.getOptionRenderKey(g),ye=t.isOptionDisabled(g);return i.createElement(Dt,{key:Te,label:q,option:g,style:R,template:t.itemTemplate,selected:t.isSelected(g),disabled:ye,onClick:t.onOptionClick})}},ce=function(){return y.isNotEmpty(t.visibleOptions)?t.visibleOptions.map(he):t.hasFilter?j(t.emptyFilterMessage,!0):j(t.emptyMessage)},b=function(){if(t.showFilterClear&&t.filterValue){var g=Mt("clear");return i.createElement("i",{className:"p-dropdown-filter-clear-icon pi pi-times","aria-label":g,onClick:function(){return t.onFilterClearIconClick(function(){return L.focus(u.current)})}})}return null},se=function(){if(t.filter){var g=b(),I=B("p-dropdown-filter-container",{"p-dropdown-clearable-filter":!!g}),S=i.createElement("div",{className:I},i.createElement("input",{ref:u,type:"text",autoComplete:"off",className:"p-dropdown-filter p-inputtext p-component",placeholder:t.filterPlaceholder,onKeyDown:t.onFilterInputKeyDown,onChange:E,value:t.filterValue}),g,i.createElement("i",{className:"p-dropdown-filter-icon pi pi-search"}));if(t.filterTemplate){var R={className:I,element:S,filterOptions:h,filterInputKeyDown:t.onFilterInputKeyDown,filterInputChange:E,filterIconClassName:"p-dropdown-filter-icon pi pi-search",clearIcon:g,props:t};S=y.getJSXElement(t.filterTemplate,R)}return i.createElement("div",{className:"p-dropdown-header"},S)}return null},Y=function(){if(t.virtualScrollerOptions){var g=Pe(Pe({},t.virtualScrollerOptions),{style:Pe(Pe({},t.virtualScrollerOptions.style),{height:t.scrollHeight}),className:B("p-dropdown-items-wrapper",t.virtualScrollerOptions.className),items:t.visibleOptions,autoSize:!0,onLazyLoad:function(R){return t.virtualScrollerOptions.onLazyLoad(Pe(Pe({},R),{filter:t.filterValue}))},itemTemplate:function(R,$){return R&&he(R,$.index,$)},contentTemplate:function(R){var $=B("p-dropdown-items",R.className),X=P?j():R.children;return i.createElement("ul",{ref:R.contentRef,style:R.style,className:$,role:"listbox"},X)}});return i.createElement(Jt,ue({ref:e},g))}else{var I=ce();return i.createElement("div",{className:"p-dropdown-items-wrapper",style:{maxHeight:t.scrollHeight||"auto"}},i.createElement("ul",{className:"p-dropdown-items",role:"listbox"},I))}},M=function(){var g=B("p-dropdown-panel p-component",t.panelClassName,{"p-input-filled":Le.inputStyle==="filled","p-ripple-disabled":Le.ripple===!1}),I=se(),S=Y();return i.createElement(or,{nodeRef:a,classNames:"p-connected-overlay",in:t.in,timeout:{enter:120,exit:100},options:t.transitionOptions,unmountOnExit:!0,onEnter:d,onEntering:t.onEntering,onEntered:A,onExit:t.onExit,onExited:t.onExited},i.createElement("div",{ref:a,className:g,style:t.panelStyle,onClick:t.onClick},I,S))},z=M();return i.createElement(ar,{element:z,appendTo:t.appendTo})}));Xt.displayName="DropdownPanel";function Ht(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);a&&(u=u.filter(function(P){return Object.getOwnPropertyDescriptor(t,P).enumerable})),e.push.apply(e,u)}return e}function Gt(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Ht(Object(e),!0).forEach(function(u){Ut(t,u,e[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ht(Object(e)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(e,u))})}return t}function Sr(t,a){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=wr(t))||a&&t&&typeof t.length=="number"){e&&(t=e);var u=0,P=function(){};return{s:P,n:function(){return u>=t.length?{done:!0}:{done:!1,value:t[u++]}},e:function(m){throw m},f:P}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h=!0,d=!1,A;return{s:function(){e=e.call(t)},n:function(){var m=e.next();return h=m.done,m},e:function(m){d=!0,A=m},f:function(){try{!h&&e.return!=null&&e.return()}finally{if(d)throw A}}}}function wr(t,a){if(t){if(typeof t=="string")return Wt(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Wt(t,a)}}function Wt(t,a){(a==null||a>t.length)&&(a=t.length);for(var e=0,u=new Array(a);e<a;e++)u[e]=t[e];return u}var Or=i.memo(i.forwardRef(function(t,a){var e=at.getProps(t),u=i.useState(""),P=rt(u,2),h=P[0],d=P[1],A=i.useState(!1),E=rt(A,2),m=E[0],j=E[1],he=i.useState(!1),ce=rt(he,2),b=ce[0],se=ce[1],Y=i.useRef(null),M=i.useRef(null),z=i.useRef(e.inputRef),F=i.useRef(e.focusInputRef),g=i.useRef(null),I=i.useRef(null),S=i.useRef(null),R=e.virtualScrollerOptions&&e.virtualScrollerOptions.lazy,$=y.isNotEmpty(h),X=e.appendTo||Le.appendTo,N=tr({target:Y,overlay:M,listener:function(r,n){var l=n.type,o=n.valid;o&&(l==="outside"?!Ne(r)&&G():G())},when:b}),q=rt(N,2),Te=q[0],ye=q[1],H=function(){if($&&!R){var r=h.trim().toLocaleLowerCase(e.filterLocale),n=e.filterBy?e.filterBy.split(","):[e.optionLabel||"label"];if(e.optionGroupLabel){var l=[],o=Sr(e.options),f;try{for(o.s();!(f=o.n()).done;){var p=f.value,s=kt.filter(W(p),n,r,e.filterMatchMode,e.filterLocale);s&&s.length&&l.push(Gt(Gt({},p),{items:s}))}}catch(v){o.e(v)}finally{o.f()}return l}else return kt.filter(e.options,n,r,e.filterMatchMode,e.filterLocale)}else return e.options},Ne=function(r){return L.hasClass(r.target,"p-dropdown-clear-icon")||L.hasClass(r.target,"p-dropdown-filter-clear-icon")},lt=function(r){e.disabled||(e.onClick&&e.onClick(r),!r.defaultPrevented&&(L.hasClass(r.target,"p-dropdown-clear-icon")||r.target.tagName==="INPUT"||(!M.current||!(M.current&&M.current.contains(r.target)))&&(L.focus(F.current),b?G():ee())))},He=function(r){e.showOnFocus&&!b&&ee(),j(!0),e.onFocus&&e.onFocus(r)},ae=function(r){j(!1),e.onBlur&&setTimeout(function(){var n=z.current?z.current.value:void 0;e.onBlur({originalEvent:r.originalEvent,value:n,stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:n}})},200)},ot=function(r){ir.emit("overlay-click",{originalEvent:r,target:Y.current})},w=function(r){switch(r.which){case 40:be(r);break;case 38:ze(r);break;case 32:case 13:b?G():ee(),r.preventDefault();break;case 27:case 9:G();break;default:Oe(r);break}},T=function(r){switch(r.which){case 40:be(r);break;case 38:ze(r);break;case 13:case 27:G(),r.preventDefault();break}},ze=function(r){if(D){var n=we(de());n&&Ee({originalEvent:r,option:n})}r.preventDefault()},be=function(r){if(D)if(!b&&r.altKey)ee();else{var n=Q(de());n&&Ee({originalEvent:r,option:n})}r.preventDefault()},Q=function c(r){if(e.optionGroupLabel){var n=r===-1?0:r.group,l=r===-1?-1:r.option,o=Se(W(D[n]),l);return o||(n+1!==D.length?c({group:n+1,option:-1}):null)}return Se(D,r)},Se=function c(r,n){var l=n+1;if(l===r.length)return null;var o=r[l];return Me(o)?c(l):o},we=function c(r){if(r===-1)return null;if(e.optionGroupLabel){var n=r.group,l=r.option,o=fe(W(D[n]),l);return o||(n>0?c({group:n-1,option:W(D[n-1]).length}):null)}return fe(D,r)},fe=function(r,n){var l=n-1;if(l<0)return null;var o=r[l];return Me(o)?we(l):o},Oe=function(r){g.current&&clearTimeout(g.current);var n=r.key;if(!(n==="Shift"||n==="Control"||n==="Alt")){if(S.current===n?I.current=n:I.current=I.current?I.current+n:n,S.current=n,I.current){var l=de(),o=e.optionGroupLabel?Ge(l):pe(l+1);o&&Ee({originalEvent:r,option:o})}g.current=setTimeout(function(){I.current=null},250)}},pe=function(r){return I.current?le(r,D.length)||le(0,r):null},le=function(r,n){for(var l=r;l<n;l++){var o=D[l];if(Ie(o))return o}return null},Ge=function(r){for(var n=r===-1?{group:0,option:-1}:r,l=n.group;l<D.length;l++)for(var o=W(D[l]),f=n.group===l?n.option+1:0;f<o.length;f++)if(Ie(o[f]))return o[f];for(var p=0;p<=n.group;p++)for(var s=W(D[p]),v=0;v<(n.group===p?n.option:s.length);v++)if(Ie(s[v]))return s[v];return null},Ie=function(r){var n=Z(r);return n?(n=n.toLocaleLowerCase(e.filterLocale),n.startsWith(I.current.toLocaleLowerCase(e.filterLocale))):!1},De=function(r){e.onChange&&e.onChange({originalEvent:r.originalEvent,value:r.target.value,stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:r.target.value}})},oe=function(r){j(!0),G(),e.onFocus&&e.onFocus(r)},it=function(r){var n=r.option;n.disabled||(Ee(r),L.focus(F.current)),G()},ut=function(r){var n=r.target.value;d(n),e.onFilter&&e.onFilter({originalEvent:r,filter:n})},ct=function(r){xe(r)},xe=function(r){d(""),e.onFilter&&e.onFilter({filter:""}),r&&r()},st=function(r){e.onChange&&e.onChange({originalEvent:r,value:void 0,stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:void 0}}),_e()},Ee=function(r){if(_!==r.option){_e(r.option);var n=te(r.option);e.onChange&&e.onChange({originalEvent:r.originalEvent,value:n,stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:n}})}},de=function(r){if(r=r||D,e.value!=null&&r)if(e.optionGroupLabel)for(var n=0;n<r.length;n++){var l=We(e.value,W(r[n]));if(l!==-1)return{group:n,option:l}}else return We(e.value,r);return-1},me=function(){return e.optionValue?null:e.dataKey},We=function(r,n){var l=me();return n.findIndex(function(o){return y.equals(r,te(o),l)})},ke=function(r){return y.equals(e.value,te(r),me())},ee=function(){se(!0)},G=function(){se(!1)},ft=function(r){Nt.set("overlay",M.current,Le.autoZIndex,Le.zIndex.overlay),Ae(),r&&r()},pt=function(r){r&&r(),Te(),e.onShow&&e.onShow()},dt=function(){ye()},Be=function(){e.filter&&e.resetFilterOnHide&&xe(),Nt.clear(M.current),e.onHide&&e.onHide()},Ae=function(){L.alignOverlay(M.current,z.current.parentElement,e.appendTo||Le.appendTo)},mt=function(){var r=L.findSingle(M.current,"li.p-highlight");r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"nearest"})},_e=function(r){z.current&&(z.current.value=r?Z(r):e.value||"")},Z=function(r){return e.optionLabel?y.resolveFieldData(r,e.optionLabel):r&&r.label!==void 0?r.label:r},te=function(r){return e.optionValue?y.resolveFieldData(r,e.optionValue):r&&r.value!==void 0?r.value:r},vt=function(r){return e.dataKey?y.resolveFieldData(r,e.dataKey):Z(r)},Me=function(r){return e.optionDisabled?y.isFunction(e.optionDisabled)?e.optionDisabled(r):y.resolveFieldData(r,e.optionDisabled):r&&r.disabled!==void 0?r.disabled:!1},gt=function(r){return y.resolveFieldData(r,e.optionGroupLabel)},Je=function(r){return y.resolveFieldData(r,e.optionGroupLabel)},W=function(r){return y.resolveFieldData(r,e.optionGroupChildren)},ht=function(){if(e.editable&&z.current){var r=_?Z(_):null,n=r||e.value||"";z.current.value=n}},Ue=function(){var r=de(e.options);return r!==-1?e.optionGroupLabel?W(e.options[r.group])[r.option]:e.options[r]:null};i.useImperativeHandle(a,function(){return{props:e,show:ee,hide:G,focus:function(){return L.focus(F.current)},getElement:function(){return Y.current},getOverlay:function(){return M.current},getInput:function(){return z.current},getFocusInput:function(){return F.current}}}),i.useEffect(function(){y.combinedRefs(z,e.inputRef),y.combinedRefs(F,e.focusInputRef)},[z,e.inputRef,F,e.focusInputRef]),Bt(function(){e.autoFocus&&L.focus(F.current,e.autoFocus)}),ie(function(){b&&e.value&&mt()},[b,e.value]),ie(function(){b&&h&&e.filter&&Ae()},[b,h,e.filter]),ie(function(){h&&(!e.options||e.options.length===0)&&d(""),ht(),z.current&&(z.current.selectedIndex=1)}),rr(function(){Nt.clear(M.current)});var Xe=function(){var r={value:"",label:e.placeholder};if(_){var n=te(_);r={value:Fe(n)==="object"?e.options.findIndex(function(l){return l===n}):n,label:Z(_)}}return i.createElement("div",{className:"p-hidden-accessible p-dropdown-hidden-select"},i.createElement("select",{ref:z,required:e.required,defaultValue:r.value,name:e.name,tabIndex:-1,"aria-hidden":"true"},i.createElement("option",{value:r.value},r.label)))},qe=function(){return i.createElement("div",{className:"p-hidden-accessible"},i.createElement("input",ue({ref:F,id:e.inputId,type:"text",readOnly:!0,"aria-haspopup":"listbox",onFocus:He,onBlur:ae,onKeyDown:w,disabled:e.disabled,tabIndex:e.tabIndex},Ye)))},Ve=function(){var r=y.isNotEmpty(_)?Z(_):null;if(e.editable){var n=r||e.value||"";return i.createElement("input",ue({ref:z,type:"text",defaultValue:n,className:"p-dropdown-label p-inputtext",disabled:e.disabled,placeholder:e.placeholder,maxLength:e.maxLength,onInput:De,onFocus:oe,onBlur:ae,"aria-haspopup":"listbox"},Ye))}else{var l=B("p-dropdown-label p-inputtext",{"p-placeholder":r===null&&e.placeholder,"p-dropdown-label-empty":r===null&&!e.placeholder}),o=e.valueTemplate?y.getJSXElement(e.valueTemplate,_,e):r||e.placeholder||"empty";return i.createElement("span",{ref:z,className:l},o)}},yt=function(){if(e.value!=null&&e.showClear&&!e.disabled){var r=B("p-dropdown-clear-icon p-clickable"),n={className:r,onPointerUp:st};return At.getJSXIcon(e.clearIcon,n)}return null},Ce=function(){var r=B("p-dropdown-trigger-icon p-clickable"),n=At.getJSXIcon(e.dropdownIcon,{className:r}),l=e.placeholder||e.ariaLabel;return i.createElement("div",{className:"p-dropdown-trigger",role:"button","aria-haspopup":"listbox","aria-expanded":b,"aria-label":l},n)},D=H(),_=Ue(),bt=y.isNotEmpty(e.tooltip),Ze=at.getOtherProps(e),Ye=y.reduceKeys(Ze,L.ARIA_PROPS),St=B("p-dropdown p-component p-inputwrapper",{"p-disabled":e.disabled,"p-focus":m,"p-dropdown-clearable":e.showClear&&!e.disabled,"p-inputwrapper-filled":y.isNotEmpty(e.value),"p-inputwrapper-focus":m||b},e.className),wt=Xe(),Ot=qe(),It=Ve(),Et=Ce(),Ct=yt();return i.createElement(i.Fragment,null,i.createElement("div",ue({ref:Y,id:e.id,className:St,style:e.style},Ze,{onClick:lt,onMouseDown:e.onMouseDown,onContextMenu:e.onContextMenu}),Ot,wt,It,Ct,Et,i.createElement(Xt,ue({ref:M,visibleOptions:D},e,{appendTo:X,onClick:ot,onOptionClick:it,filterValue:h,hasFilter:$,onFilterClearIconClick:ct,resetFilter:xe,onFilterInputKeyDown:T,onFilterInputChange:ut,getOptionLabel:Z,getOptionRenderKey:vt,isOptionDisabled:Me,getOptionGroupChildren:W,getOptionGroupLabel:Je,getOptionGroupRenderKey:gt,isSelected:ke,getSelectedOptionIndex:de,in:b,onEnter:ft,onEntered:pt,onExit:dt,onExited:Be}))),bt&&i.createElement(lr,ue({target:Y,content:e.tooltip},e.tooltipOptions)))}));Or.displayName="Dropdown";export{Or as D,ir as O,Jt as V};
