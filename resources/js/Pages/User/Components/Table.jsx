import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Table(props) {
    const users = usePage().props.users;

    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);

    const imageBodyTemplate = (rowData) => {
        return (
            <img
                src={`http://127.0.0.1:8000/uploads/${rowData.image}`}
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
                    onClick={() => props.editUser(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    outlined
                    severity="danger"
                    onClick={() => props.confirmDeleteUser(rowData)}
                />
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
                doc.autoTable(exportColumns, users);
                doc.save("users"+rand+".pdf");
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

    return (
        <DataTable
            ref={dt}
            value={users}
            selection={props.selectedUsers}
            onSelectionChange={(e) => props.setSelectedUsers(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users"
            globalFilter={globalFilter}
            header={header}
        >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
                field="image"
                header="Image"
                body={imageBodyTemplate}
            ></Column>
            <Column
                field="firstname"
                header="First Name"
                sortable
                style={{ minWidth: "12rem" }}
            ></Column>
            <Column
                field="lastname"
                header="Last Name"
                sortable
                style={{ minWidth: "12rem" }}
            ></Column>
            <Column
                field="address"
                header="Address"
                sortable
                style={{ minWidth: "12rem" }}
            ></Column>
            <Column
                field="phone_number"
                header="Phone Number"
                sortable
                style={{ minWidth: "12rem" }}
            ></Column>
            <Column
                field="birthdate"
                header="Birthdate"
                sortable
                style={{ minWidth: "10rem" }}
            ></Column>
            <Column
                field="email"
                header="Email"
                sortable
                style={{ minWidth: "5rem" }}
            ></Column>
            <Column
                field="sex"
                header="Sex"
                sortable
                style={{ minWidth: "5rem" }}
            ></Column>
            <Column
                field="role"
                header="Role"
                sortable
                style={{ minWidth: "10rem" }}
            ></Column>
            <Column
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "12rem", display: "flex", gap: "0.5rem" }}
            ></Column>
        </DataTable>
    );
}
