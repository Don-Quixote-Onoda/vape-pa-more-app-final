import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Delete({productType, data, reset, setData, post, errors, deleteProductTypesDialog, setSelectedProductTypes, 
    selectedProductTypes, setDeleteProductTypesDialog, setDeleteProductTypeDialog, deleteProductTypeDialog }) {


    const hideDeleteProductTypeDialog = () => {
        setDeleteProductTypeDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductTypesDialog(false);
    };

    const deleteProductType = () => {
       
        post(route('delete-product-type'), {
            onSuccess: () =>{
                hideDeleteProductTypeDialog()
                reset()
            },
        });
    };


    const deleteSelectedProducts = () => {
        // let _products = products.filter((val) => !selectedProducts.includes(val));

        // setProducts(_products);
        setDeleteProductTypesDialog(false);
        setSelectedProductType(null);
        // toast.current.show({
        //     severity: "success",
        //     summary: "Successful",
        //     detail: "Products Deleted",
        //     life: 3000,
        // });
    };


    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteProductTypeDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteProductType}
            />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteProductsDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteSelectedProducts}
            />
        </React.Fragment>
    );

    return (
        <div>
            <Dialog
                visible={deleteProductTypeDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteProductDialogFooter}
                onHide={hideDeleteProductTypeDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {productType && (
                        <span>
                            Are you sure you want to delete <b>{productType.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
            <Dialog
                visible={deleteProductTypesDialog}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteProductsDialogFooter}
                onHide={hideDeleteProductsDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {productType && (
                        <span>
                            Are you sure you want to delete the selected products?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    );
}
