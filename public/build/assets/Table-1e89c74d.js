import{W as c,r as n,j as i,a as t,R as S,c as p}from"./app-c94b149d.js";import{D as N,C as r}from"./column.esm-534095d6.js";import{I as T}from"./inputtext.esm-a242d243.js";import{B as l}from"./button.esm-320d2b12.js";import"./portal.esm-105fa917.js";import"./inputnumber.esm-ef9748de.js";import"./dropdown.esm-31c2bd19.js";import"./csstransition.esm-de611294.js";function B(o){const d=c().props.product_inventories,u=c().props.auth.user.role,[m,h]=n.useState("id"),[f,g]=n.useState(-1),y=e=>{h(e.sortField),g(e.sortOrder)},[P,b]=n.useState(null),_=n.useRef(null),x=e=>t(S.Fragment,{children:u==1&&t(l,{icon:"pi pi-trash",rounded:!0,outlined:!0,severity:"danger",onClick:()=>o.confirmDeleteProduct(e)})}),v=[{field:"id",header:"ID"},{field:"name",header:"Name"},{field:"email",header:"Email"},{field:"role",header:"Role"}].map(e=>({title:e.header,dataKey:e.field})),w=i("div",{className:"flex flex-wrap gap-2 align-items-center flex-nowrap justify-content-between",children:[i("span",{className:"p-input-icon-left basis-1/4",children:[t("i",{className:"pi pi-search"}),t(T,{type:"search",onInput:e=>b(e.target.value),placeholder:"Search..."})]}),i("div",{className:"flex justify-between gap-3 basis-3/4",children:[t(l,{label:"Export",icon:"pi pi-upload",className:"p-button-help",onClick:()=>{p(()=>import("./jspdf.es.min-9ba94281.js").then(e=>e.j),["assets/jspdf.es.min-9ba94281.js","assets/app-c94b149d.js","assets/app-771e3699.css"]).then(e=>{p(()=>import("./jspdf.plugin.autotable-81655eb4.js").then(a=>a.j),["assets/jspdf.plugin.autotable-81655eb4.js","assets/app-c94b149d.js","assets/app-771e3699.css","assets/jspdf.es.min-9ba94281.js"]).then(()=>{const a=new e.default(0,0);let s=Math.random();a.autoTable(v,d),a.save("product_inventories"+s+".pdf")})})}}),t(l,{label:"New",icon:"pi pi-plus",className:"p-button-help self-end",onClick:o.openNew})]})]}),D=e=>{const s=new Date(e.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return t("span",{style:{textTransform:"capitalize"},children:s})};return i(N,{ref:_,value:d,selection:o.selectedProducts,onSelectionChange:e=>o.setSelectedProducts(e.value),dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:P,header:w,sortField:m,sortOrder:f,onSort:y,children:[t(r,{field:"name",header:"Name",sortable:!0,style:{minWidth:"12rem"}}),t(r,{field:"quantity",header:"Quantity",sortable:!0,style:{minWidth:"12rem"}}),t(r,{field:"product_type_name",header:"Product Type",sortable:!0,style:{minWidth:"12rem"}}),t(r,{field:"date_added",header:"Date Added",sortable:!0,style:{minWidth:"2rem"},body:D}),t(r,{body:x,exportable:!1,style:{minWidth:"12rem",display:"flex",gap:"0.5rem"}})]})}export{B as default};