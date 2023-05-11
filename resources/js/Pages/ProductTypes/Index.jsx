import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import Table from "./Components/Table";
import FormDialog from "./Components/FormDialog";
import Delete from "./Components/Delete";
import { useForm } from "@inertiajs/react";

export default function ProductTypes(props) {

    let emptyProductType = {
        id: null,
        productType_name: null,
        productType_image: null,
        price: null,
        status: null,
        quantity: null,
    };

    const [productTypeDialog, setProductTypeDialog] = useState(false);
    const [deleteProductTypeDialog, setDeleteProductTypeDialog] = useState(false);
    const [deleteProductTypesDialog, setDeleteProductTypesDialog] = useState(false);
    const [productType, setProductType] = useState(emptyProductType);
    const [selectedProductTypes, setSelectedProductTypes] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);
    const { data, setData, post, reset, processing, errors } = useForm({
        id: null,
        productType_name: null,
        productType_image: null,
        price: null,
        status: null,
        quantity: null,
    });

    const openNew = () => {
        setProductType(emptyProductType);
        setSubmitted(false);
        setProductTypeDialog(true);
        console.log(productTypeDialog);
    };

    const editProductType = (productType) => {
        setData({ ...productType });
        setProductTypeDialog(true);
    };

    const confirmDeleteProductType = (productType) => {
        setData({ ...productType });
        setDeleteProductTypeDialog(true);
    };

    const confirmDeleteSelected = () => {
        setDeleteProductTypesDialog(true);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">
                    ProductTypes
                </h2>
            }
        >
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    ProductTypes
                </h2>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto card">
                        <Toast ref={toast} />
                        <div className="card">
                            <Table  openNew={openNew}  editProductType={editProductType} confirmDeleteProductType={confirmDeleteProductType} setSelectedProductTypes={setSelectedProductTypes} selectedProductTypes={selectedProductTypes} />
                        </div>
                        <FormDialog productType={productType} data={data} reset={reset} setData={setData} post={post} errors={errors}  submitted={submitted} productTypeDialog={productTypeDialog} setSubmitted={setSubmitted} setProductTypeDialog={setProductTypeDialog} />

                        <Delete productType={productType} data={data} reset={reset} setData={setData} post={post} errors={errors} deleteProductTypesDialog={deleteProductTypesDialog} setSelectedProductTypes={setSelectedProductTypes} selectedProductTypes={selectedProductTypes} setDeleteProductTypesDialog={setDeleteProductTypesDialog} setDeleteProductTypeDialog={setDeleteProductTypeDialog} deleteProductTypeDialog ={deleteProductTypeDialog } />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
