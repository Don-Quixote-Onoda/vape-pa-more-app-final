import{a as e,j as i}from"./app-c94b149d.js";import{D as d}from"./dialog.esm-f5d0781d.js";import"./portal.esm-105fa917.js";import"./csstransition.esm-de611294.js";function y({paymentDialog:r,setSubmitted:o,setPaymentDialog:a,submitted:p,payment:s,data:t,setData:n,post:h,reset:b,processing:f,errors:x}){const l=()=>{o(!1),a(!1),n(s)},u=c=>{const m=parseFloat(c+"").toLocaleString("en-PH",{style:"currency",currency:"PHP"});return e("span",{children:m})};return e(d,{visible:r,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Payment Details",modal:!0,className:"p-fluid",onHide:l,children:i("div",{children:[i("h1",{className:"text-4xl mb-3",children:["#",t.order_number]}),i("h5",{className:"text-md mb-3 font-bold",children:["Total Price: ",u(t.purchase)]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})}export{y as default};
