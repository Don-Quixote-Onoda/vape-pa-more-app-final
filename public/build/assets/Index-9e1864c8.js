import{r as e,_ as q,a as t,j as x}from"./app-c94b149d.js";import{A}from"./AuthenticatedLayout-9ad1a5eb.js";import{T as k}from"./toast.esm-c95bde3e.js";import E from"./Table-b1eb242c.js";import F from"./FormDialog-22db0845.js";import R from"./Delete-d33e5a05.js";import"./ApplicationLogo-0b73b480.js";import"./transition-4f2656b9.js";import"./portal.esm-105fa917.js";import"./csstransition.esm-de611294.js";import"./column.esm-534095d6.js";import"./inputnumber.esm-ef9748de.js";import"./inputtext.esm-a242d243.js";import"./button.esm-320d2b12.js";import"./dropdown.esm-31c2bd19.js";import"./dialog.esm-f5d0781d.js";function Z(r){let a={id:null,product_name:null,product_image:null,price:null,status:null,quantity:null};const[P,s]=e.useState(!1),[D,u]=e.useState(!1),[y,S]=e.useState(!1),[d,N]=e.useState(a),[c,i]=e.useState(null),[_,n]=e.useState(!1),b=e.useRef(null),{data:m,setData:o,post:p,reset:f,processing:z,errors:g}=q({id:null,product_name:null,product_image:null,price:null,status:null,quantity:null}),[v,h]=e.useState("default"),w=()=>{N(a),n(!1),s(!0),h("default")},T=l=>{o({...l}),s(!0),h("edit")},j=l=>{o({...l}),u(!0)};return t(A,{auth:r.auth,errors:r.errors,header:t("h2",{classNameName:"font-semibold text-xl text-gray-800 leading-tight",children:"Products"}),children:x("div",{className:"container px-6 mx-auto grid",children:[t("h2",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:"Products"}),t("div",{className:"w-full mb-8 overflow-hidden rounded-lg shadow-xs",children:x("div",{className:"w-full overflow-x-auto card",children:[t(k,{ref:b}),t("div",{className:"card",children:t(E,{openNew:w,editProduct:T,confirmDeleteProduct:j,setSelectedProducts:i,selectedProducts:c})}),t(F,{type:v,product:d,data:m,product_types:r.product_types,reset:f,setData:o,post:p,errors:g,submitted:_,productDialog:P,setSubmitted:n,setProductDialog:s}),t(R,{product:d,data:m,reset:f,setData:o,post:p,errors:g,deleteProductsDialog:y,setSelectedProducts:i,selectedProducts:c,setDeleteProductsDialog:S,setDeleteProductDialog:u,deleteProductDialog:D})]})})]})})}export{Z as default};
