import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import Table from "./Components/Table";
import FormDialog from "./Components/FormDialog";
import Delete from "./Components/Delete";
import { useForm } from "@inertiajs/react";

export default function Products(props) {

    let emptyProduct = {
        product_id: null,
        product_type: null,
        product_image: null,
        quantity: null,
        id: null
    };

    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);
    const { data, setData, post, reset, processing, errors } = useForm({
        product_id: null,
        product_type: null,
        product_image: null,
        quantity: null,
        id: null
    });
    const [type, setType] = useState('default');
    const [product_types, setProductTypes] = useState();

    useEffect(() => {
        console.log(props);
    })

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
        setType('default');
    };
    const editProduct = (product) => {
        setData({ ...product });
        setProductDialog(true);
        setType('edit');
    };

    const confirmDeleteProduct = (product) => {
        setData({ ...product });
        setDeleteProductDialog(true);
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Products
                </h2>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto card">
                        <Toast ref={toast} />
                        <div className="card">
                            <Table  openNew={openNew}  editProduct={editProduct} confirmDeleteProduct={confirmDeleteProduct} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts} />
                        </div>
                        <FormDialog products={props.products} type={type} product={product} data={data} product_types={props.product_types} reset={reset} setData={setData} post={post} errors={errors}  submitted={submitted} productDialog={productDialog} setSubmitted={setSubmitted} setProductDialog={setProductDialog} />

                        <Delete product={product} data={data} reset={reset} setData={setData} post={post} errors={errors} deleteProductsDialog={deleteProductsDialog} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts} setDeleteProductsDialog={setDeleteProductsDialog} setDeleteProductDialog={setDeleteProductDialog} deleteProductDialog ={deleteProductDialog } />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
