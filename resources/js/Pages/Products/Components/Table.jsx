import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Table(props) {
    const products = usePage().props.products;
    const user_role = usePage().props.auth.user.role;

    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);

    const imageBodyTemplate = (rowData) => {
        return (
            <img
                src={`http://127.0.0.1:8000/uploads/products/${rowData.product_image}`}
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
                    onClick={() => props.editProduct(rowData)}
                />
                {
                    user_role == 1 && <Button
                    icon="pi pi-trash"
                    rounded
                    outlined
                    severity="danger"
                    onClick={() => props.confirmDeleteProduct(rowData)}
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
                doc.autoTable(exportColumns, products);
                doc.save("products"+rand+".pdf");
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
            <div className="flex justify-between basis-3/4">
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
                <span> {(rowData.status) == 'INSTOCK' ? 'INSTOCK' : 
                        (rowData.status) == 'LOWSTOCK' ? 'LOWSTOCK' : 'OUTOFSTOCK'}</span>
            </React.Fragment>
        );
    }

    return (
        <DataTable
            ref={dt}
            value={products}
            selection={props.selectedProducts}
            onSelectionChange={(e) => props.setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
        >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
                field="product_image"
                header="Image"
                body={imageBodyTemplate}
            ></Column>
            <Column
                field="product_name"
                header="Name"
                sortable
                style={{ minWidth: "12rem" }}
            ></Column>
            <Column
                field="price"
                header="Price"
                sortable
                style={{ minWidth: "12rem" }}
            ></Column>
            <Column
                field="quantity"
                header="Quantity"
                sortable
                style={{ minWidth: "12rem" }}
            ></Column>
            <Column
                field="status"
                header="Status"
                sortable
                body={statusTemplate}
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
