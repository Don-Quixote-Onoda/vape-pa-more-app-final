import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";


export default function ViewDialog({orderDetailDialog, setSubmitted, setOrderDetailDialog, submitted, orderDetail, data, setData, post, reset, processing, errors, orders, setOrders}) {
    
    const hideDialog = () => {
        setSubmitted(false);
        setOrderDetailDialog(false);
        setData(orderDetail);
        setOrders([]);
    };

    const numberFormat = (amount) => {
        const result = parseFloat(amount+"").toLocaleString("en-PH", { style: 'currency', currency: 'PHP' });
        return (
            <span>{result}</span>
        );
    }

    return (
        <Dialog
            visible={orderDetailDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Order Details"
            modal
            className="p-fluid"
            onHide={hideDialog}
        >
           <div className="flex flex-col pb-2 bg-stone-100 shadow-md rounded border-gray-900 items-center gap-3 py-5 p-2">
                    <div
                        className="flex flex-col gap-3 w-full items-center justify-between p-2"
                    >
                            <h3 className="text-xl w-full font-bold">{data.order_number}</h3>

                        <header className="flex w-full justify-between">
                            <h4>Orders</h4>
                            <p>Subtotal</p>
                        </header>
                        <hr />
                        
                        {data.orders !== undefined && (
                            <main className="py-4 w-full">
                                {data.orders.map((order, index) => (
                                    <div>
                                        <div
                                            className="flex flex-row align-end justify-between py-2"
                                            style={{ position: "relative" }}
                                        >
                                            <div>
                                                <img
                                                    className="w-24 shadow-2 rounded"
                                                    src={`http://127.0.0.1:8000/uploads/products/${order.product_image}`}
                                                    alt={order.product_name}
                                                />
                                                <p className="font-bold">
                                                    {order.product_name}
                                                </p>
                                            </div>
                                            <div className="self-end">
                                                
                                                <p className="text-end font-bold">
                                                    {numberFormat(order.total_price)}
                                                </p>
                                                <p className="text-end">
                                                    Qty: {order.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                                <div className="flex justify-between py-5">
                                    <h4>Total:</h4>
                                    <p className="text-end font-bold">
                                        {numberFormat(data.total_amount)}
                                    </p>
                                </div>
                            </main>
                        )}
                    </div>

                    <div
                        className="flex flex-col gap-3 w-full items-center justify-between p-2"
                    >
                       <div className="w-full">
                       <h5 className="text-xl font-bold">{data.order_number}</h5>
                       <span className=" mb-3">Orde Number</span>

                       </div>
                        <div className="flex w-full flex-col self-start">
                            <span className="text-md font-bold">Cash Amount</span>
                            <h1>{numberFormat(data.cash)}</h1>
                           
                        </div>
                        <div className="flex w-full flex-col self-start">
                        <span className="text-md font-bold">Change</span>
                            
                        <h1>{numberFormat(data.change)}</h1>
                            
                        </div>
                        <Button
                            style={{ "justify-content": "center" }}
                            className="text-center !bg-red-500 !border-0"
                            onClick={() => hideDialog()}
                        >
                            Close
                        </Button>
                    </div>
                </div>
        </Dialog>
    );
}
