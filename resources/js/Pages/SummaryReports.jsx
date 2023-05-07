import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {Bar} from 'react-chartjs-2';
import {Chart} from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import html2canvas from "html2canvas";
import pdfConverter from 'jspdf';

export default function SummaryReports(props) {

    const [dailySale, setDailySale] = useState([]);
    const [weeklySale, setWeeklySale] = useState([]);
    const [monthlySale, setMonthlySale] = useState([]);
    useEffect(() => {
        setDailySale(props.dailySales);
        setWeeklySale(props.weeklySales);
        setMonthlySale(props.monthlySales);
    }), [];
    const dailySales = {
        labels: dailySale.map(data => data.date),
        datasets: [
           {
            label: "Daily Sales",
            data: dailySale.map(data => data.total_amount),
            hoverOffset: 4,
           }
        ]
    }

    const weeklySales = {
        labels: weeklySale.map(data => data.week),
        datasets: [
           {
            label: "Weekly Sales",
            data: weeklySale.map(data => data.total_amount),
            hoverOffset: 4,
           }
        ]
    }

    const monthlySales = {
        labels: monthlySale.map(data => data.month),
        datasets: [
           {
            label: "Weekly Sales",
            data: monthlySale.map(data => data.total_amount),
            hoverOffset: 4,
           }
        ]
    }

    let ref = useRef(null);

    Chart.register(CategoryScale);

    const div2PDF = e => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////

        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName("div2PDF")[0];
    
        html2canvas(input).then(canvas => {
          const img = canvas.toDataURL("image/png");
          const pdf = new pdfConverter("l", "pt");
          pdf.addImage(
            img,
            "png",
            input.offsetLeft,
            input.offsetTop,
            input.clientWidth,
            input.clientHeight
          );
          pdf.save("chart.pdf");
          but.style.display = "block";
        });
      };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">
                    Summary Reports
                </h2>
            }
        >
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Summary Reports
                </h2>
                <button type="button" onClick={e => div2PDF(e)} >Download</button>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full flex flex-wrap overflow-x-auto card div2PDF" >
                    <Bar ref={ref}  data={dailySales} />
                    <Bar ref={ref}  data={weeklySales} />
                    <Bar ref={ref}  data={monthlySales} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
