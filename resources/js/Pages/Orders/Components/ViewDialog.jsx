import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";

export default function ViewDialog({
    orderDialog,
    setSubmitted,
    setOrderDialog,
    submitted,
    order,
    data,
    setData,
    post,
    reset,
    processing,
    errors,
}) {
    const hideDialog = () => {
        setSubmitted(false);
        setOrderDialog(false);
        setData(order);
    };

    return (
        <Dialog
            visible={orderDialog}
            style={{ width: "25rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Order Details"
            modal
            className="p-fluid"
            onHide={hideDialog}
        >
            <div>
                <img
                    src={`http://127.0.0.1:8000/uploads/products/${data.product_image}`}
                    alt={data.image}
                    className="shadow-2 border-round mx-auto mb-5"
                    style={{ width: "50%" }}
                />
                <div className="flex justify-between mb-3">
                    <p className="text-xl mb-3 font-bold">Product Name: </p>
                    <p className="text-xl mb-3">{data.product_name}</p>
                </div>
                <div className="flex justify-between mb-3">
                    <p className="text-xl mb-3 font-bold">Order Number: </p>
                    <p className="text-xl mb-3">{data.order_number}</p>
                </div>

                <div className="flex justify-between mb-3">
                    <p className="text-xl mb-3 font-bold">Price: </p>
                    <p className="text-xl mb-3">₱ {data.price}</p>
                </div>
                <div className="flex justify-between mb-3">
                    <p className="text-xl mb-3 font-bold">Quantity: </p>
                    <p className="text-xl mb-3">{data.quantity}</p>
                </div>
                <div className="flex justify-between mb-3">
                    <p className="text-xl mb-3 font-bold">Total Price: </p>
                    <p className="text-xl mb-3">₱ {data.total_price}</p>
                </div>
            </div>
        </Dialog>
    );
}
