import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Delete({ordersValue, setOrders, order, setDeleteOrderDialog, deleteOrderDialog, setDeleteOrdersDialog, deleteOrdersDialog, setSelectedOrders, data, setData, post, reset, processing, errors  }) {

    const orders = usePage().props.orders;

    let emptyOrder = {
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

    // const [order, setOrder] = useState(emptyOrder);
    const toast = useRef(null);

    const hideDeleteOrderDialog = () => {
        setDeleteOrderDialog(false);
    };

    const hideDeleteOrdersDialog = () => {
        setDeleteOrdersDialog(false);
    };

    const confirmDeleteOrder = (order) => {
        setOrder(order);
        setDeleteOrderDialog(true);
    };

    const deleteOrder = () => {
       
        post("api/delete_order", {
            onSuccess: () =>{
                setDeleteOrderDialog(false);
                reset()
            },
        });
    };

    const confirmDeleteSelected = () => {
        setDeleteOrdersDialog(true);
    };

    const deleteSelectedOrders = () => {
        // let _orders = orders.filter((val) => !selectedOrders.includes(val));

        // setOrders(_orders);
        setDeleteOrdersDialog(false);
        setSelectedOrders(null);
        // toast.current.show({
        //     severity: "success",
        //     summary: "Successful",
        //     detail: "Orders Deleted",
        //     life: 3000,
        // });
    };


    const deleteOrderDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteOrderDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteOrder}
            />
        </React.Fragment>
    );
    const deleteOrdersDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteOrdersDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteSelectedOrders}
            />
        </React.Fragment>
    );

    return (
        <div>
            <Dialog
                visible={deleteOrderDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteOrderDialogFooter}
                onHide={hideDeleteOrderDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {order && (
                        <span>
                            Are you sure you want to delete <b>{order.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
            <Dialog
                visible={deleteOrdersDialog}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteOrdersDialogFooter}
                onHide={hideDeleteOrdersDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {order && (
                        <span>
                            Are you sure you want to delete the selected orders?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    );
}
