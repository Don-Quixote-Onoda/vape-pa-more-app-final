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

    useEffect(() => {
    console.log(data);

    })
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
            <div className="flex printPDF flex-col pb-2 items-center gap-3 py-5 p-2 px-6 p-10">
                <div className="flex flex-col w-full"><h1 className="text-2xl text-center font-bold mb-10">Welcome to Vape Pa More</h1>
                <d className="flex flex-col justify-between mt-5">
                <span className="text text-center flex justify-between"><span className="font-bold">Order Number</span><br/><span className="">{data.order_number}</span></span>
                <span className="text text-center flex justify-between"><span className="font-bold">Date</span><br/><span className="">{getCurrentDateFormat()}</span></span>
                </d>
                </div>
                <div className="flex flex-col gap-1 mt-5 w-full items-center justify-between">
                    <header className="flex w-full justify-between">
                        <h4 className="font-bold">Orders</h4>
                        <p className="font-bold">Subtotal</p>
                    </header>
                    <hr />

                    {data.orders !== undefined && (
                        <main className="w-full">
                            {data.orders.map((order, index) => (
                                <div>
                                    <div
                                        className="flex flex-row align-end justify-between"
                                        style={{ position: "relative" }}
                                    >
                                        <div>
                                            <p className="">
                                                {order.product_name} - {order.product_type !== null && order.product_type}
                                            </p>
                                            <p className="">
                                                {order.product_type_name}
                                            </p>
                                        </div>
                                        <div className="self-end">
                                            <p className="text-end">
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
                            <div className="flex justify-between pt-5 mt-3">
                                <h4 className=" font-bold">Total:</h4>
                                <p className="text-end">
                                    {numberFormat(data.total_amount)}
                                </p>
                            </div>
                            
                        </main>
                    )}
                </div>

                <div className="flex flex-col gap-1 mb-8 w-full items-center justify-between">
                    <div className="flex w-full justify-between self-start">
                        <span className="text-md font-bold">Cash Amount</span>
                        <h1>{numberFormat(data.cash)}</h1>
                    </div>
                    <hr className="bg-red-900" />
                    <div className="flex w-full justify-between self-start">
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
