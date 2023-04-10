import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Delete({paymentsValue, setPayments, payment, setDeletePaymentDialog, deletePaymentDialog, setDeletePaymentsDialog, deletePaymentsDialog, setSelectedPayments, data, setData, post, reset, processing, errors  }) {


    const hideDeletePaymentDialog = () => {
        setDeletePaymentDialog(false);
    };

    const hideDeletePaymentsDialog = () => {
        setDeletePaymentsDialog(false);
    };


    const deletePayment = () => {
       
        post("api/delete_payment", {
            onSuccess: () =>{
                setDeletePaymentDialog(false);
                reset()
            },
        });
    };
    const deleteSelectedPayments = () => {
        // let _payments = payments.filter((val) => !selectedPayments.includes(val));

        // setPayments(_payments);
        setDeletePaymentsDialog(false);
        setSelectedPayments(null);
        // toast.current.show({
        //     severity: "success",
        //     summary: "Successful",
        //     detail: "Payments Deleted",
        //     life: 3000,
        // });
    };


    const deletePaymentDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeletePaymentDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deletePayment}
            />
        </React.Fragment>
    );
    const deletePaymentsDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeletePaymentsDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteSelectedPayments}
            />
        </React.Fragment>
    );

    return (
        <div>
            <Dialog
                visible={deletePaymentDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deletePaymentDialogFooter}
                onHide={hideDeletePaymentDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {payment && (
                        <span>
                            Are you sure you want to delete <b>{payment.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
            <Dialog
                visible={deletePaymentsDialog}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deletePaymentsDialogFooter}
                onHide={hideDeletePaymentsDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {payment && (
                        <span>
                            Are you sure you want to delete the selected payments?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    );
}
