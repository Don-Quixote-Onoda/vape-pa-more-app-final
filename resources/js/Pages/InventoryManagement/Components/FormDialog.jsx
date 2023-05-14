import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";


export default function FormDialog({products, type, productDialog, product_types, setSubmitted, setProductDialog, submitted, product, data, setData, post, reset, processing, errors}) {

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
            data.quantity &&
            data.product_id &&
            data.product_type &&
            data.quantity
        ) {
            if (
                data.quantity &&
                data.product_id &&
                data.product_type &&
                data.quantity &&
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
                post(route('saveInventoryManagement'), {
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

        console.log(data);
        
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

    const onProductChange = (e, name) => {
        setData(name, e.target.value.id);

    };

    const onProductTypeChange = (e, name) => {
        setData(name, e.target.value.id);

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
            {
                type === 'default' && <div className="field">
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
            }
            <div className="field mb-5">
                <label htmlFor="email" className="font-bold">
                    Product Name
                </label>
                <Dropdown
                    value={ 
                         products.map(product => {
                            if(data.product_id == product.id)
                            {
                                return product.product_name;
                            }
                            return;
                        }).filter(String).toString().replaceAll(',',"")
                    }
                    onChange={(e) => onProductChange(e, "product_id")}
                    options={products}
                    optionLabel="product_name"
                    editable
                    placeholder="Select a Product Name"
                    className={`w-full md:w-14rem ${classNames({
                        "p-invalid": submitted && !data.product_id,
                    })} `}
                />
                {submitted && !data.product_id && (
                    <small className="p-error">Product Type is required.</small>
                )}
                
            </div>
            <div className="field mb-5">
                <label htmlFor="price" className="font-bold">
                    Quantity
                </label>
                <InputNumber
                    id="price"
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
                    Product Type
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
                    placeholder="Select a Product Type"
                    className={`w-full md:w-14rem ${classNames({
                        "p-invalid": submitted && !data.product_type,
                    })} `}
                />
                {submitted && !data.product_type && (
                    <small className="p-error">Product Type is required.</small>
                )}
                
            </div>
            
        </Dialog>
    );
}
