import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";


export default function ViewDialog({orderDialog, setSubmitted, setOrderDialog, submitted, order, data, setData, post, reset, processing, errors}) {

    const hideDialog = () => {
        setSubmitted(false);
        setOrderDialog(false);
        setData(order);
    };


    return (
        <Dialog
            visible={orderDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Order Details"
            modal
            className="p-fluid"
            onHide={hideDialog}
        >
            <div>
                <img src={`http://127.0.0.1:8000/uploads/products/${data.product_image}`}
                alt={data.image}
                className="shadow-2 border-round mx-auto mb-5"
                style={{ width: "50%" }} />
                <h1 className="text-4xl mb-3">{data.product_name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </Dialog>
    );
}
