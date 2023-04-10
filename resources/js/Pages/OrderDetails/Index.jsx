import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import Table from "./Components/Table";
import ViewDialog from "./Components/ViewDialog";
import Delete from "./Components/Delete";
import { useForm } from "@inertiajs/react";

export default function OrderDetails(props) {

    let emptyOrderDetail = {
        id: null,
        firstname: "",
        lastname: "",
        sex: null,
        birthdate: null,
        address: "",
        phone_number: null,
        email: null,
        role: "",
        password: null,
        confirm_password: null,
        image: null,
    };

    const [orderDetailDialog, setOrderDetailDialog] = useState(false);
    const [deleteOrderDetailDialog, setDeleteOrderDetailDialog] = useState(false);
    const [deleteOrderDetailsDialog, setDeleteOrderDetailsDialog] = useState(false);
    const [orderDetail, setOrderDetail] = useState(emptyOrderDetail);
    const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);
    const { data, setData, post, reset, processing, errors } = useForm({
        id: null,
        firstname: "",
        lastname: "",
        sex: null,
        birthdate: null,
        address: "",
        phoneNumber: null,
        email: null,
        role: "",
        password: null,
        confirm_password: null,
        image: null,
    });

    const openNew = () => {
        setOrderDetail(emptyOrderDetail);
        setSubmitted(false);
        setOrderDetailDialog(true);
    };

    const editOrderDetail = (orderDetail) => {
        setData({ ...orderDetail });
        setOrderDetailDialog(true);
    };

    const confirmDeleteOrderDetail = (orderDetail) => {
        setData({ ...orderDetail });
        setDeleteOrderDetailDialog(true);
    };

    const confirmDeleteSelected = () => {
        setDeleteOrderDetailsDialog(true);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">
                    OrderDetails
                </h2>
            }
        >
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    OrderDetails
                </h2>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto card">
                        <Toast ref={toast} />
                        <div className="card">
                            <Table  openNew={openNew}  editOrderDetail={editOrderDetail} confirmDeleteOrderDetail={confirmDeleteOrderDetail} setSelectedOrderDetails={setSelectedOrderDetails} selectedOrderDetails={selectedOrderDetails} />
                        </div>
                        <ViewDialog orderDetail={orderDetail} data={data} reset={reset} setData={setData} post={post} errors={errors}  submitted={submitted} orderDetailDialog={orderDetailDialog} setSubmitted={setSubmitted} setOrderDetailDialog={setOrderDetailDialog} />

                        <Delete orderDetail={orderDetail} data={data} reset={reset} setData={setData} post={post} errors={errors} deleteOrderDetailsDialog={deleteOrderDetailsDialog} setSelectedOrderDetails={setSelectedOrderDetails} selectedOrderDetails={selectedOrderDetails} setDeleteOrderDetailsDialog={setDeleteOrderDetailsDialog} setDeleteOrderDetailDialog={setDeleteOrderDetailDialog} deleteOrderDetailDialog ={deleteOrderDetailDialog } />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
