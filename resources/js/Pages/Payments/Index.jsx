import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import Table from "./Components/Table";
import ViewDialog from "./Components/ViewDialog";
import Delete from "./Components/Delete";
import { useForm } from "@inertiajs/react";

export default function Payments(props) {

    let emptyPayment = {
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

    const [paymentDialog, setPaymentDialog] = useState(false);
    const [deletePaymentDialog, setDeletePaymentDialog] = useState(false);
    const [deletePaymentsDialog, setDeletePaymentsDialog] = useState(false);
    const [payment, setPayment] = useState(emptyPayment);
    const [selectedPayments, setSelectedPayments] = useState(null);
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
        setPayment(emptyPayment);
        setSubmitted(false);
        setPaymentDialog(true);
    };

    const editPayment = (payment) => {
        setData({ ...payment });
        setPaymentDialog(true);
    };

    const confirmDeletePayment = (payment) => {
        setData({ ...payment });
        setDeletePaymentDialog(true);
    };

    const confirmDeleteSelected = () => {
        setDeletePaymentsDialog(true);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">
                    Payments
                </h2>
            }
        >
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Payments
                </h2>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto card">
                        <Toast ref={toast} />
                        <div className="card">
                            <Table  openNew={openNew}  editPayment={editPayment} confirmDeletePayment={confirmDeletePayment} setSelectedPayments={setSelectedPayments} selectedPayments={selectedPayments} />
                        </div>
                        <ViewDialog payment={payment} data={data} reset={reset} setData={setData} post={post} errors={errors}  submitted={submitted} paymentDialog={paymentDialog} setSubmitted={setSubmitted} setPaymentDialog={setPaymentDialog} />

                        <Delete payment={payment} data={data} reset={reset} setData={setData} post={post} errors={errors} deletePaymentsDialog={deletePaymentsDialog} setSelectedPayments={setSelectedPayments} selectedPayments={selectedPayments} setDeletePaymentsDialog={setDeletePaymentsDialog} setDeletePaymentDialog={setDeletePaymentDialog} deletePaymentDialog ={deletePaymentDialog } />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
