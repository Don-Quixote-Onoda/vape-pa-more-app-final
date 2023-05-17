import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";


export default function FormDialog({productTypeDialog, setSubmitted, setProductTypeDialog, submitted, productType, data, setData, post, reset, processing, errors}) {

    const toast = useRef(null);
    const status = [{ name: "INSTOCK" }, { name: "LOWSTOCK" }, { name: "OUTOFSTOCK" }];

    const hideDialog = () => {
        setSubmitted(false);
        setProductTypeDialog(false);
        setData(productType);
    };

    const saveProductType = () => {
        setSubmitted(true);
            if (
                data.id
            ) {
               
                    post(route('edit-product-type'), {
                        forceFormData: true,
                        onSuccess: () =>{
                            setProductTypeDialog(false);
                            setData(productType);
                            reset();
                        },
                        onError: () => {
                        },
                    });
                    
            } else {
                post(route('save-product-type'), {
                    forceFormData: true,
                    onSuccess: () =>{
                        setProductTypeDialog(false);
                        setData(productType);
                        reset();
                        toast.current.show({
                            severity: "success",
                            summary: "Successful",
                            detail: "Product Type Created",
                            life: 3000,
                        });
                    },
                    onError: () => {
                    },
                });
            }

        
    };


    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const productDialogFooter = (
        <React.Fragment>
            <Button
                label="Cancel"
                icon="pi pi-times"
                outlined
                onClick={hideDialog}
            />
            <Button label="Save" icon="pi pi-check" onClick={saveProductType} />
        </React.Fragment>
    );

    const onStatusChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        setData(name,val.name);

    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        setData(name,val);

    };

    const handleFileUpload = (e, name) => {
        const val = (e.target.files[0]) || "";
        setData(name,val);

    };


    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        setData(name,val);

    };

    return (
        <Dialog
            visible={productTypeDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Product Details"
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
        >
        
            <div className="field">
                <label htmlFor="firstname" className="font-bold">
                    Name
                </label>
                <InputText
                    id="name"
                    value={data.name}
                    onChange={(e) => onInputChange(e, "name")}
                    required
                    autoFocus
                    // className={classNames({
                    //     "p-invalid": submitted && !data.name,
                    // })}
                />
                {/* {submitted && !data.name && (
                    <small className="p-error">Name is required.</small>
                )} */}
            </div>
            <div className="field mt-5">
                <label htmlFor="type" className="font-bold">
                    Type
                </label>
                <InputText
                    id="type"
                    value={data.type}
                    onChange={(e) => onInputChange(e, "type")}
                    required
                    autoFocus
                    // className={classNames({
                    //     "p-invalid": submitted && !data.type,
                    // })}
                />
                {/* {submitted && !data.type && (
                    <small className="p-error">Type is required.</small>
                )} */}
            </div>
        </Dialog>
    );
}
