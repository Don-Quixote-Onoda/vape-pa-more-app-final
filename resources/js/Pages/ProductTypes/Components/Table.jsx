import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Table(props) {
    const product_types = usePage().props.product_types;
    const user_role = usePage().props.auth.user.role;
    const [sortField, setSortField] = useState('id');
    const [sortOrder, setSortOrder] = useState(-1);

    useEffect(() => {
        console.log(product_types);
    })

    const onSort = (e) => {
        setSortField(e.sortField);
        setSortOrder(e.sortOrder);
      };

    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);

    const imageBodyTemplate = (rowData) => {
        return (
            <img
                src={`http://127.0.0.1:8000/uploads/product_types/${rowData.product_image}`}
                alt={rowData.image}
                className="shadow-2 border-round"
                style={{ width: "64px" }}
            />
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-pencil"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => props.editProductType(rowData)}
                />
                {
                    user_role == 1 && <Button
                    icon="pi pi-trash"
                    rounded
                    outlined
                    severity="danger"
                    onClick={() => props.confirmDeleteProductType(rowData)}
                />
                }
            </React.Fragment>
        );
    };

    const cols = [
        { field: "id", header: "ID" },
        { field: "name", header: "Name" },
        { field: "email", header: "Email" },
        { field: "role", header: "Role" },
    ];


    const exportColumns = cols.map((col) => ({
        title: col.header,
        dataKey: col.field,
    }));

    const exportPdf = () => {
        import("jspdf").then((jsPDF) => {
            import("jspdf-autotable").then(() => {
                const doc = new jsPDF.default(0, 0);
                let rand = Math.random();
                doc.autoTable(exportColumns, product_types);
                doc.save("product_types"+rand+".pdf");
            });
        });
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center flex-nowrap justify-content-between">
            <span className="p-input-icon-left basis-1/4">
                <i className="pi pi-search" />
                <InputText
                    type="search"
                    onInput={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
            </span>
            <div className="flex justify-between gap-3 basis-3/4">
            <Button
                label="Export"
                icon="pi pi-upload"
                className="p-button-help"
                onClick={exportPdf}
            />
            <Button
                label="New"
                icon="pi pi-plus"
                className="p-button-help self-end"
                onClick={props.openNew}
            />
            </div>
        </div>
    );

    const statusTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span> {(rowData.quantity > 5) ? 'INSTOCK' : 
                        (rowData.quantity <= 5 && rowData.quantity >= 1) ? 'LOWSTOCK' : 'OUTOFSTOCK'}</span>
            </React.Fragment>
        );
    }

    const numberFormatBody = (rowData) => {
        return (
            <span> {rowData.price.toLocaleString("en-PH", { style: 'currency', currency: 'PHP' })}</span>
        );
    }

    const transactionDateBody = (rowData) => {
        const date = new Date(rowData.created_at);
        const formattedDate = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
        return (
            <span style={{textTransform: 'capitalize'}}>{formattedDate}</span>
        )
    }

    return (
        <DataTable
            ref={dt}
            value={product_types}
            selection={props.selectedProducts}
            onSelectionChange={(e) => props.setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} product_types"
            globalFilter={globalFilter}
            header={header}
            sortField={sortField} sortOrder={sortOrder} onSort={onSort}
        >
            <Column
                field="type"
                header="Type"
            ></Column>
            <Column
                field="name"
                header="Name"
                sortable
                style={{ minWidth: "12rem" }}
            ></Column>
            <Column
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "12rem", display: "flex", gap: "0.5rem" }}
            ></Column>
        </DataTable>
    );
}
