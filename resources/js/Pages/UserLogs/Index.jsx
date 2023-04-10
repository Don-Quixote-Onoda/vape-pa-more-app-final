import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import Table from "./Components/Table";
import ViewDialog from "./Components/ViewDialog";
import Delete from "./Components/Delete";
import { useForm } from "@inertiajs/react";

export default function Orders(props) {

    let emptyOrder = {
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

    const [orderDialog, setOrderDialog] = useState(false);
    const [deleteOrderDialog, setDeleteOrderDialog] = useState(false);
    const [deleteOrdersDialog, setDeleteOrdersDialog] = useState(false);
    const [order, setOrder] = useState(emptyOrder);
    const [selectedOrders, setSelectedOrders] = useState(null);
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
        setOrder(emptyOrder);
        setSubmitted(false);
        setOrderDialog(true);
    };

    const editOrder = (order) => {
        setData({ ...order });
        setOrderDialog(true);
    };

    const confirmDeleteOrder = (order) => {
        setData({ ...order });
        setDeleteOrderDialog(true);
    };

    const confirmDeleteSelected = () => {
        setDeleteOrdersDialog(true);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">
                    Orders
                </h2>
            }
        >
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Orders
                </h2>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto card">
                        <Toast ref={toast} />
                        <div className="card">
                            <Table  openNew={openNew}  editOrder={editOrder} confirmDeleteOrder={confirmDeleteOrder} setSelectedOrders={setSelectedOrders} selectedOrders={selectedOrders} />
                        </div>
                        <ViewDialog order={order} data={data} reset={reset} setData={setData} post={post} errors={errors}  submitted={submitted} orderDialog={orderDialog} setSubmitted={setSubmitted} setOrderDialog={setOrderDialog} />

                        <Delete order={order} data={data} reset={reset} setData={setData} post={post} errors={errors} deleteOrdersDialog={deleteOrdersDialog} setSelectedOrders={setSelectedOrders} selectedOrders={selectedOrders} setDeleteOrdersDialog={setDeleteOrdersDialog} setDeleteOrderDialog={setDeleteOrderDialog} deleteOrderDialog ={deleteOrderDialog } />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
