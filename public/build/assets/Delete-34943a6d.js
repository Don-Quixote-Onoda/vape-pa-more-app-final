import{W as x,r as b,j as i,R as s,a as e}from"./app-c94b149d.js";import{B as t}from"./button.esm-320d2b12.js";import{D as c}from"./dialog.esm-f5d0781d.js";import"./portal.esm-105fa917.js";import"./csstransition.esm-de611294.js";function A({orderDetailsValue:y,setOrderDetails:k,orderDetail:r,setDeleteOrderDetailDialog:o,deleteOrderDetailDialog:d,setDeleteOrderDetailsDialog:l,deleteOrderDetailsDialog:p,setSelectedOrderDetails:m,data:w,setData:C,post:u,reset:f,processing:N,errors:O}){x().props.orderDetails,b.useRef(null);const a=()=>{o(!1)},n=()=>{l(!1)},h=()=>{u("api/delete_orderdetails",{onSuccess:()=>{o(!1),f()}})},D=()=>{l(!1),m(null)},v=i(s.Fragment,{children:[e(t,{label:"No",icon:"pi pi-times",outlined:!0,onClick:a}),e(t,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:h})]}),g=i(s.Fragment,{children:[e(t,{label:"No",icon:"pi pi-times",outlined:!0,onClick:n}),e(t,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:D})]});return i("div",{children:[e(c,{visible:d,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:v,onHide:a,children:i("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),r&&i("span",{children:["Are you sure you want to delete ",e("b",{children:r.name}),"?"]})]})}),e(c,{visible:p,breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:g,onHide:n,children:i("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),r&&e("span",{children:"Are you sure you want to delete the selected orderDetails?"})]})})]})}export{A as default};
