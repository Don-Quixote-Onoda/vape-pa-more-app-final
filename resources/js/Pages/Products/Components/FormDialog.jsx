import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";


export default function FormDialog({productDialog, product_types, setSubmitted, setProductDialog, submitted, product, data, setData, post, reset, processing, errors}) {

    const toast = useRef(null);
    const status = [{ name: "INSTOCK" }, { name: "LOWSTOCK" }, { name: "OUTOFSTOCK" }];
    
    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
        setData(product);
    };

    const saveProduct = () => {
        setSubmitted(true);
        if (
            data.price &&
            data.product_name &&
            data.product_image &&
            data.quantity &&
            data.status
        ) {
            if (
                data.price &&
                data.product_name &&
                data.quantity &&
                data.status &&
                data.id
            ) {
               
                    post(route('updateProduct'), {
                        forceFormData: true,
                        onSuccess: () =>{
                            setProductDialog(false);
                            setData(product);
                        },
                        onError: () => {
                        },
                    });
                    
            } else {
                post(route('saveProduct'), {
                    forceFormData: true,
                    onSuccess: () =>{
                        setProductDialog(false);
                        setData(product);
                        reset();
                        toast.current.show({
                            severity: "success",
                            summary: "Successful",
                            detail: "Product Created",
                            life: 3000,
                        });
                    },
                    onError: () => {
                    },
                });
                
            }
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
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );

    const onStatusChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        setData(name,val.name);

    };

    const onProductTypeChange = (e, name) => {
        setData(name, e.target.value.id - 1);
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
            visible={productDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Product Details"
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
        >
            <div className="field">
                <label className="">Product Image</label>
                <input
                    type="file"
                    className={`w-full px-4 py-2 ${classNames({
                        "p-invalid": submitted && !data.product_image,
                    })}`}
                    label="Image"
                    name="product_image"
                    onChange={(e) => handleFileUpload(e, "product_image")}
                />
                {submitted && !data.product_image && (
                    <small className="p-error">Product Image is required.</small>
                )}
            </div>
            <div className="field">
                <label htmlFor="firstname" className="font-bold">
                    Product Name
                </label>
                <InputText
                    id="product_name"
                    value={data.product_name}
                    onChange={(e) => onInputChange(e, "product_name")}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.product_name,
                    })}
                />
                {submitted && !data.product_name && (
                    <small className="p-error">Product Name is required.</small>
                )}
            </div>
            <div className="field mb-5">
                <label htmlFor="price" className="font-bold">
                    Price
                </label>
                <InputNumber
                    id="price"
                    value={data.price}
                    onChange={(e) => onInputNumberChange(e, "price")}
                    useGrouping={false}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.price,
                    })}
                />
                {submitted && !data.price && (
                    <small className="p-error">Price is required.</small>
                )}
            </div>
            <div className="field mb-5">
                <label htmlFor="price" className="font-bold">
                    Quantity
                </label>
                <InputNumber
                    id="quantity"
                    value={data.quantity}
                    onChange={(e) => onInputNumberChange(e, "quantity")}
                    useGrouping={false}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.quantity,
                    })}
                />
                {submitted && !data.quantity && (
                    <small className="p-error">Quantity is required.</small>
                )}
            </div>
            <div className="field mb-5">
                <label htmlFor="email" className="font-bold">
                    Status
                </label>
                <Dropdown
                    value={
                        (data.status) == 'INSTOCK' ? 'INSTOCK' : 
                        (data.status) == 'LOWSTOCK' ? 'LOWSTOCK' : 'OUTOFSTOCK'
                    }
                    onChange={(e) => onStatusChange(e, "status")}
                    options={status}
                    optionLabel="name"
                    editable
                    placeholder="Select a Status"
                    className={`w-full md:w-14rem ${classNames({
                        "p-invalid": submitted && !data.status,
                    })} `}
                />
                {submitted && !data.status && (
                    <small className="p-error">Status is required.</small>
                )}
                
            </div>
            <div className="field mb-5">
                <label htmlFor="email" className="font-bold">
                    Status
                </label>
                <Dropdown
                    value={ 
                         product_types.map(product_type => {
                            if(data.product_type == product_type.id)
                                return product_type.name;
                            return;
                        }).filter(String).toString().replaceAll(',',"")
                    }
                    onChange={(e) => onProductTypeChange(e, "product_type")}
                    options={product_types}
                    optionLabel="name"
                    editable
                    placeholder="Select a Status"
                    className={`w-full md:w-14rem ${classNames({
                        "p-invalid": submitted && !data.status,
                    })} `}
                />
                {submitted && !data.product_type && (
                    <small className="p-error">Product Type is required.</small>
                )}
                
            </div>
        </Dialog>
    );
}
