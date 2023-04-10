import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Delete({orderDetailsValue, setOrderDetails, orderDetail, setDeleteOrderDetailDialog, deleteOrderDetailDialog, setDeleteOrderDetailsDialog, deleteOrderDetailsDialog, setSelectedOrderDetails, data, setData, post, reset, processing, errors  }) {

    const orderDetails = usePage().props.orderDetails;

    let emptyOrderDetail = {
        id: null,
        firstname: "",
        lastname: "",
        sex: 0,
        birthdate: null,
        address: "",
        phoneNumber: null,
        email: null,
        role: "",
        password: null,
        confirm_password: null,
        image: null,
    };

    // const [orderDetail, setOrderDetail] = useState(emptyOrderDetail);
    const toast = useRef(null);

    const hideDeleteOrderDetailDialog = () => {
        setDeleteOrderDetailDialog(false);
    };

    const hideDeleteOrderDetailsDialog = () => {
        setDeleteOrderDetailsDialog(false);
    };

    const confirmDeleteOrderDetail = (orderDetail) => {
        setOrderDetail(orderDetail);
        setDeleteOrderDetailDialog(true);
    };

    const deleteOrderDetail = () => {
       
        post("api/delete_orderdetails", {
            onSuccess: () =>{
                setDeleteOrderDetailDialog(false);
                reset()
            },
        });
    };

    const confirmDeleteSelected = () => {
        setDeleteOrderDetailsDialog(true);
    };

    const deleteSelectedOrderDetails = () => {
        // let _orderDetails = orderDetails.filter((val) => !selectedOrderDetails.includes(val));

        // setOrderDetails(_orderDetails);
        setDeleteOrderDetailsDialog(false);
        setSelectedOrderDetails(null);
        // toast.current.show({
        //     severity: "success",
        //     summary: "Successful",
        //     detail: "OrderDetails Deleted",
        //     life: 3000,
        // });
    };


    const deleteOrderDetailDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteOrderDetailDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteOrderDetail}
            />
        </React.Fragment>
    );
    const deleteOrderDetailsDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteOrderDetailsDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteSelectedOrderDetails}
            />
        </React.Fragment>
    );

    return (
        <div>
            <Dialog
                visible={deleteOrderDetailDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteOrderDetailDialogFooter}
                onHide={hideDeleteOrderDetailDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {orderDetail && (
                        <span>
                            Are you sure you want to delete <b>{orderDetail.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
            <Dialog
                visible={deleteOrderDetailsDialog}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteOrderDetailsDialogFooter}
                onHide={hideDeleteOrderDetailsDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {orderDetail && (
                        <span>
                            Are you sure you want to delete the selected orderDetails?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    );
}
