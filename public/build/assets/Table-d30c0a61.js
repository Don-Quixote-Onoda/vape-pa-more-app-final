import{W as w,r as i,j as s,a as t,R as v,c as d}from"./app-c94b149d.js";import{D as R,C as r}from"./column.esm-534095d6.js";import{I as S}from"./inputtext.esm-a242d243.js";import{B as o}from"./button.esm-320d2b12.js";import"./portal.esm-105fa917.js";import"./inputnumber.esm-ef9748de.js";import"./dropdown.esm-31c2bd19.js";import"./csstransition.esm-de611294.js";function B(a){const n=w().props.users,[m,p]=i.useState(null),c=i.useRef(null),[u,h]=i.useState("id"),[f,b]=i.useState(-1),g=e=>{h(e.sortField),b(e.sortOrder)},y=e=>t("img",{src:`http://127.0.0.1:8000/uploads/${e.image}`,alt:e.image,className:"shadow-2 border-round",style:{width:"64px"}}),x=e=>s(v.Fragment,{children:[t(o,{icon:"pi pi-pencil",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>a.editUser(e)}),t(o,{icon:"pi pi-trash",rounded:!0,outlined:!0,severity:"danger",onClick:()=>a.confirmDeleteUser(e)})]}),P=[{field:"id",header:"ID"},{field:"name",header:"Name"},{field:"email",header:"Email"},{field:"role",header:"Role"}].map(e=>({title:e.header,dataKey:e.field})),N=s("div",{className:"flex flex-wrap gap-2 align-items-center flex-nowrap justify-content-between",children:[s("span",{className:"p-input-icon-left basis-1/4",children:[t("i",{className:"pi pi-search"}),t(S,{type:"search",onInput:e=>p(e.target.value),placeholder:"Search..."})]}),s("div",{className:"flex justify-between gap-3 basis-3/4",children:[t(o,{label:"Export",icon:"pi pi-upload",className:"p-button-help",onClick:()=>{d(()=>import("./jspdf.es.min-9ba94281.js").then(e=>e.j),["assets/jspdf.es.min-9ba94281.js","assets/app-c94b149d.js","assets/app-771e3699.css"]).then(e=>{d(()=>import("./jspdf.plugin.autotable-81655eb4.js").then(l=>l.j),["assets/jspdf.plugin.autotable-81655eb4.js","assets/app-c94b149d.js","assets/app-771e3699.css","assets/jspdf.es.min-9ba94281.js"]).then(()=>{const l=new e.default(0,0);let _=Math.random();l.autoTable(P,n),l.save("users"+_+".pdf")})})}}),t(o,{label:"New",icon:"pi pi-plus",className:"p-button-help self-end",onClick:a.openNew})]})]});return s(R,{ref:c,value:n,selection:a.selectedUsers,onSelectionChange:e=>a.setSelectedUsers(e.value),dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} users",globalFilter:m,header:N,sortField:u,sortOrder:f,onSort:g,children:[t(r,{selectionMode:"multiple",exportable:!1}),t(r,{field:"image",header:"Image",body:y}),t(r,{field:"firstname",header:"First Name",sortable:!0,style:{minWidth:"12rem"}}),t(r,{field:"lastname",header:"Last Name",sortable:!0,style:{minWidth:"12rem"}}),t(r,{field:"address",header:"Address",sortable:!0,style:{minWidth:"12rem"}}),t(r,{field:"phone_number",header:"Phone Number",sortable:!0,style:{minWidth:"12rem"}}),t(r,{field:"birthdate",header:"Birthdate",sortable:!0,style:{minWidth:"10rem"}}),t(r,{field:"email",header:"Email",sortable:!0,style:{minWidth:"5rem"}}),t(r,{field:"sex",header:"Sex",sortable:!0,style:{minWidth:"5rem"}}),t(r,{field:"role",header:"Role",sortable:!0,style:{minWidth:"10rem"}}),t(r,{body:x,exportable:!1,style:{minWidth:"12rem",display:"flex",gap:"0.5rem"}})]})}export{B as default};
