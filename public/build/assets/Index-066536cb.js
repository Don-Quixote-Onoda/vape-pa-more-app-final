import{r as t,_ as j,a as e,j as h}from"./app-c94b149d.js";import{A as T}from"./AuthenticatedLayout-9ad1a5eb.js";import{T as A}from"./toast.esm-c95bde3e.js";import k from"./Table-db4a41b7.js";import E from"./ViewDialog-ef7da4aa.js";import R from"./Delete-7be031c5.js";import"./ApplicationLogo-0b73b480.js";import"./transition-4f2656b9.js";import"./portal.esm-105fa917.js";import"./csstransition.esm-de611294.js";import"./column.esm-534095d6.js";import"./inputnumber.esm-ef9748de.js";import"./inputtext.esm-a242d243.js";import"./button.esm-320d2b12.js";import"./dropdown.esm-31c2bd19.js";import"./dialog.esm-f5d0781d.js";function X(r){let n={id:null,firstname:"",lastname:"",sex:null,birthdate:null,address:"",phone_number:null,email:null,role:"",password:null,confirm_password:null,image:null};const[g,s]=t.useState(!1),[x,o]=t.useState(!1),[P,D]=t.useState(!1),[m,w]=t.useState(n),[i,d]=t.useState(null),[b,u]=t.useState(!1),N=t.useRef(null),{data:c,setData:a,post:p,reset:f,processing:V,errors:y}=j({id:null,firstname:"",lastname:"",sex:null,birthdate:null,address:"",phoneNumber:null,email:null,role:"",password:null,confirm_password:null,image:null}),S=()=>{w(n),u(!1),s(!0)},v=l=>{a({...l}),s(!0)},_=l=>{a({...l}),o(!0)};return e(T,{auth:r.auth,errors:r.errors,header:e("h2",{classNameName:"font-semibold text-xl text-gray-800 leading-tight",children:"Payments"}),children:h("div",{className:"container px-6 mx-auto grid",children:[e("h2",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:"Payments"}),e("div",{className:"w-full mb-8 overflow-hidden rounded-lg shadow-xs",children:h("div",{className:"w-full overflow-x-auto card",children:[e(A,{ref:N}),e("div",{className:"card",children:e(k,{openNew:S,editPayment:v,confirmDeletePayment:_,setSelectedPayments:d,selectedPayments:i})}),e(E,{payment:m,data:c,reset:f,setData:a,post:p,errors:y,submitted:b,paymentDialog:g,setSubmitted:u,setPaymentDialog:s}),e(R,{payment:m,data:c,reset:f,setData:a,post:p,errors:y,deletePaymentsDialog:P,setSelectedPayments:d,selectedPayments:i,setDeletePaymentsDialog:D,setDeletePaymentDialog:o,deletePaymentDialog:x})]})})]})})}export{X as default};
