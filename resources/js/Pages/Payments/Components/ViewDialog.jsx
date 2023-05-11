import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";


export default function ViewDialog({paymentDialog, setSubmitted, setPaymentDialog, submitted, payment, data, setData, post, reset, processing, errors}) {

    const hideDialog = () => {
        setSubmitted(false);
        setPaymentDialog(false);
        setData(payment);
    };


    const numberFormat = (amount) => {
        const result = parseFloat(amount+"").toLocaleString("en-PH", { style: 'currency', currency: 'PHP' });
        return (
            <span>{result}</span>
        );
    }

    return (
        <Dialog
            visible={paymentDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Payment Details"
            modal
            className="p-fluid"
            onHide={hideDialog}
        >
            <div>
            <h1 className="text-4xl mb-3">#{data.order_number}</h1>
                <h5 className="text-md mb-3 font-bold">Total Price: {numberFormat(data.purchase)}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </Dialog>
    );
}
