import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function ViewDialog({
    orderDetailDialog,
    setSubmitted,
    setOrderDetailDialog,
    submitted,
    orderDetail,
    data,
    setData,
    post,
    reset,
    processing,
    errors,
    orders,
    setOrders,
}) {
    const hideDialog = () => {
        setSubmitted(false);
        setOrderDetailDialog(false);
        setData(orderDetail);
        setOrders([]);
    };

    const numberFormat = (amount) => {
        const result = parseFloat(amount + "").toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP",
        });
        return <span>{result}</span>;
    };

    const printReciept = () => {
        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString('default', { month: 'long' });
        const day = today.getDate();
        const year = today.getFullYear();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        
        // Format the date and time as "Month day, year at hours:minutes:seconds"
        const formattedDate = `${month} ${day}, ${year}`;
        
        let input = window.document.getElementsByClassName("printPDF")[0];
        console.log(input.offsetLeft);
        console.log(input.offsetTop);
        console.log(input.clientWidth);
        console.log(input.clientHeight);
        html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
        });
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Vape Pa More Reciept ('+formattedDate+').pdf');
      });
      hideDialog();
      
    }

    const getCurrentDateFormat = () => {
        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString('default', { month: 'long' });
        const day = today.getDate();
        const year = today.getFullYear();
        let hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        // Determine whether it is AM or PM
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        // Convert hours from 24-hour to 12-hour format
        if (hours > 12) {
        hours -= 12;
        }

        // Format the date and time as "Month day, year at hours:minutes:seconds AM/PM"
        const formattedDate = `${month} ${day}, ${year} at ${hours}:${minutes}:${seconds} ${meridiem}`;


        return formattedDate;
    }

    return (
        <Dialog
            visible={orderDetailDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Payments"
            modal
            className="p-fluid"
            onHide={hideDialog}
        >
            <div className="flex printPDF flex-col pb-2 items-center gap-3 py-5 p-2 px-6">
            <ApplicationLogo className="block h-16 w-auto fill-current text-gray-800" />
                <div className="flex flex-col w-full"><h1 className="text-2xl font-bold mb-2">Vape pa More - Payment Reciept</h1>
                <span className="text-xs">{getCurrentDateFormat()}</span></div>
                <div className="flex flex-col gap-3 w-full items-center justify-between p-2">
                    <header className="flex w-full justify-between">
                        <h4>Orders</h4>
                        <p>Subtotal</p>
                    </header>
                    <hr />

                    {data.orders !== undefined && (
                        <main className="py-2 w-full">
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
                                                {numberFormat(
                                                    order.total_price
                                                )}
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

                <div className="flex flex-col gap-3 w-full items-center justify-between p-2">
                    <div className="w-full">
                        <h5 className="text-xl font-bold">
                            {data.order_number}
                        </h5>
                        <span className=" mb-3">Order Number</span>
                    </div>
                    <div className="flex w-full flex-col self-start">
                        <span className="text-md font-bold">Cash Amount</span>
                        <h1>{numberFormat(data.cash)}</h1>
                    </div>
                    <hr className="bg-red-900" />
                    <div className="flex w-full flex-col self-start">
                        <span className="text-md font-bold">Change</span>

                        <h1>{numberFormat(data.change)}</h1>
                    </div>
                </div>
            </div>
            <Button
                style={{ "justify-content": "center" }}
                className="text-center !bg-red-500 !border-0"
                onClick={() => printReciept()}
            >
                Print Reciept
            </Button>
        </Dialog>
    );
}
