import{r as t,_ as j,a as e,j as T}from"./app-c94b149d.js";import{A}from"./AuthenticatedLayout-9ad1a5eb.js";import{T as k}from"./toast.esm-c95bde3e.js";import E from"./Table-769652db.js";import F from"./FormDialog-aea80efc.js";import R from"./Delete-f7ffe80f.js";import"./ApplicationLogo-0b73b480.js";import"./transition-4f2656b9.js";import"./portal.esm-105fa917.js";import"./csstransition.esm-de611294.js";import"./column.esm-534095d6.js";import"./inputnumber.esm-ef9748de.js";import"./inputtext.esm-a242d243.js";import"./button.esm-320d2b12.js";import"./dropdown.esm-31c2bd19.js";import"./dialog.esm-f5d0781d.js";function X(a){let l={id:null,name:null,type:null};const[h,r]=t.useState(!1),[g,d]=t.useState(!1),[x,P]=t.useState(!1),[c,D]=t.useState(l),[i,u]=t.useState(null),[N,n]=t.useState(!1),S=t.useRef(null),{data:m,setData:o,post:p,reset:y,processing:_,errors:f}=j({id:null,name:null,type:null}),b=()=>{D(l),n(!1),r(!0)},v=s=>{o({...s}),r(!0)},w=s=>{o({...s}),d(!0)};return e(A,{auth:a.auth,errors:a.errors,header:e("h2",{classNameName:"font-semibold text-xl text-gray-800 leading-tight",children:"ProductTypes"}),children:T("div",{className:"container px-6 mx-auto grid",children:[e("h2",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:"ProductTypes"}),e("div",{className:"w-full mb-8 overflow-hidden rounded-lg shadow-xs",children:T("div",{className:"w-full overflow-x-auto card",children:[e(k,{ref:S}),e("div",{className:"card",children:e(E,{openNew:b,editProductType:v,confirmDeleteProductType:w,setSelectedProductTypes:u,selectedProductTypes:i})}),e(F,{productTypeDialog:h,setProductTypeDialog:r,productType:c,data:m,reset:y,setData:o,post:p,errors:f,submitted:N,setSubmitted:n}),e(R,{productType:c,data:m,reset:y,setData:o,post:p,errors:f,deleteProductTypesDialog:x,setSelectedProductTypes:u,selectedProductTypes:i,setDeleteProductTypesDialog:P,setDeleteProductTypeDialog:d,deleteProductTypeDialog:g})]})})]})})}export{X as default};
