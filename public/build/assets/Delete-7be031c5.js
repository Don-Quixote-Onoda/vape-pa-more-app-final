import{j as i,R as s,a as e}from"./app-c94b149d.js";import{B as t}from"./button.esm-320d2b12.js";import{D as c}from"./dialog.esm-f5d0781d.js";import"./portal.esm-105fa917.js";import"./csstransition.esm-de611294.js";function z({paymentsValue:b,setPayments:x,payment:n,setDeletePaymentDialog:o,deletePaymentDialog:d,setDeletePaymentsDialog:a,deletePaymentsDialog:m,setSelectedPayments:p,data:k,setData:w,post:u,reset:h,processing:C,errors:D}){const l=()=>{o(!1)},r=()=>{a(!1)},f=()=>{u("api/delete_payment",{onSuccess:()=>{o(!1),h()}})},y=()=>{a(!1),p(null)},v=i(s.Fragment,{children:[e(t,{label:"No",icon:"pi pi-times",outlined:!0,onClick:l}),e(t,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:f})]}),g=i(s.Fragment,{children:[e(t,{label:"No",icon:"pi pi-times",outlined:!0,onClick:r}),e(t,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:y})]});return i("div",{children:[e(c,{visible:d,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:v,onHide:l,children:i("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),n&&i("span",{children:["Are you sure you want to delete ",e("b",{children:n.name}),"?"]})]})}),e(c,{visible:m,breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:g,onHide:r,children:i("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),n&&e("span",{children:"Are you sure you want to delete the selected payments?"})]})})]})}export{z as default};