import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Delete({productsValue, setProducts, product, setDeleteProductDialog, deleteProductDialog, setDeleteProductsDialog, deleteProductsDialog, setSelectedProducts, data, setData, post, reset, processing, errors  }) {


    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const deleteProduct = () => {
       console.log('ok');
        post(route('deleteInventoryManagement'), {
            onSuccess: () =>{
                setDeleteProductDialog(false);
                reset()
            },
        });
    };


    const deleteSelectedProducts = () => {
        // let _products = products.filter((val) => !selectedProducts.includes(val));

        // setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
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
                onClick={hideDeleteProductDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteProduct}
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
                visible={deleteProductDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteProductDialogFooter}
                onHide={hideDeleteProductDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
            <Dialog
                visible={deleteProductsDialog}
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
                    {product && (
                        <span>
                            Are you sure you want to delete the selected products?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    );
}
