import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "primereact/button";
import { CSVLink } from 'react-csv';

export default function SummaryReports(props) {
    const [dailySale, setDailySale] = useState([]);
    const [weeklySale, setWeeklySale] = useState([]);
    const [monthlySale, setMonthlySale] = useState([]);

    const ExportDailyIncome = () => {
        let data = [
        dailySale.map(item => item.day),
        dailySale.map(item => item.total_amount),
    ];
        return data;
    }

    const ExportWeeklyIncome = () => {
        let data = [
        weeklySale.map(item => item.week),
        weeklySale.map(item => item.total_amount),
    ];
        return data;
    }

    const ExportMonthlyIncome = () => {
        let data = [
        monthlySale.map(item => item.month),
        monthlySale.map(item => item.total_amount),
    ];
        return data;
    }

    useEffect(() => {
        // Get current month name
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const currentMonth = monthNames[new Date().getMonth()];
        let filteredDailySale = [];
        let filterWeeklySale = [];
        let filterMonthlySale = [];
        // Get current week name
        const currentWeek = `week ${Math.ceil(new Date().getDate() / 7)}`;

        let income_reports = props.income_reports;
        for (const month in income_reports) {
            if(month == currentMonth) {
                for (const week in income_reports[month]) {
              // Loop over each day in the week
                    let totalWeeklyIncome = 0;
                    for (const day in income_reports[month][week]) {
                        // Retrieve the value of the day and do something with it
                        const value = income_reports[month][week][day];
                        totalWeeklyIncome += value.total_amount;
                    }
                    filterWeeklySale.push({
                        'week': week,
                        'total_amount': totalWeeklyIncome
                    });
                    if(week == currentWeek) {
                            for (const day in income_reports[month][week]) {
                                // Retrieve the value of the day and do something with it
                                const value = income_reports[month][week][day];
                                filteredDailySale.push({
                                    'day' : currentMonth+' '+value.day_of_month,
                                    'total_amount' : value.total_amount
                                });
                            }
                    }
                
                }
            }
            // Loop over each week in the month
            let monthlyIncome = 0;
            for (const week in income_reports[month]) {
              // Loop over each day in the week
              for (const day in income_reports[month][week]) {
                // Retrieve the value of the day and do something with it
                const value = income_reports[month][week][day];
                monthlyIncome += value.total_amount;
              }
            }

            filterMonthlySale.push({
                'month': month,
                'total_amount': monthlyIncome
            });
        }
        setDailySale(filteredDailySale);
        setWeeklySale(filterWeeklySale);
        setMonthlySale(filterMonthlySale);
        console.log(filterWeeklySale);
    },[]),
        [];

    
    const dailySales = {
        labels: dailySale.map(data => data.day),
        datasets: [
            {
                label: "Daily Income",
                data: dailySale.map(data => data.total_amount),
                hoverOffset: 4,
            },
        ],
    };

    const weeklySales = {
        labels: weeklySale.map(data => data.week),
        datasets: [
            {
                label: "Weekly Income",
                data: weeklySale.map(data => data.total_amount),
                hoverOffset: 4,
            },
        ],
    };

    const monthlySales = {
        labels: monthlySale.map(data =>data.month),
        datasets: [
            {
                label: "Monthly Income",
                data: monthlySale.map(data =>data.total_amount),
                hoverOffset: 4,
            },
        ],
    };

    let ref = useRef(null);

    Chart.register(CategoryScale);

    const getCurrentDateFormat = () => {
        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString("default", { month: "long" });
        const day = today.getDate();
        const year = today.getFullYear();
        let hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        // Determine whether it is AM or PM
        const meridiem = hours >= 12 ? "PM" : "AM";

        // Convert hours from 24-hour to 12-hour format
        if (hours > 12) {
            hours -= 12;
        }

        // Format the date and time as "Month day, year at hours:minutes:seconds AM/PM"
        const formattedDate = `${month} ${day}, ${year} at ${hours}:${minutes}:${seconds} ${meridiem}`;

        return formattedDate;
    };

    const div2PDF = (e) => {
        /////////////////////////////
        // Hide/show button if you need
        /////////////////////////////

        const today = new Date();

        // Get the month, day, year, hours, minutes, and seconds from the Date object
        const month = today.toLocaleString("default", { month: "long" });
        const day = today.getDate();
        const year = today.getFullYear();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        // Format the date and time as "Month day, year at hours:minutes:seconds"
        const formattedDate = `${month} ${day}, ${year}`;

        const but = e.target;
        // but.style.display = "none";
        let input = window.document.getElementsByClassName("div2PDF")[0];
        console.log(input.offsetLeft);
        console.log(input.offsetTop);
        console.log(input.clientWidth);
        console.log(input.clientHeight);
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "landscape",
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(
                "Summary Report - Applicants Applied (" +
                    formattedDate +
                    ").pdf"
            );
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
                <div
                    className="flex justify-center pb-3"
                    onClick={(e) => div2PDF(e)}
                >
                    <Button
                        label="Print Summary Income Report"
                        style={{ background: "#FF6384", border: "none" }}
                        className="py-1 px-3 bg-red-900"
                    />
                </div>
                <div className="w-full mb-8 overflow-hidden div2PDF rounded-lg shadow-xs">
                    <h1 className="text-2xl text-center mb-0 font-bold">
                        Income Reports{" "}
                    </h1>
                    <span className="text-xs text-center mb-4 font-bold block">
                        {"(" + getCurrentDateFormat() + ")"}
                    </span>
                    <div className="w-full flex flex-wrap overflow-x-auto card div2PDF">
                        <div className="w-full overflow-x-auto card flex p-5 flex-wrap gap-5 flex-row ">
                            <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={dailySales} style={{width: '100%', height: 'auto'}} />
                            <CSVLink data={ExportDailyIncome()} filename="daily-income.csv" className="text-green-500 text-center block">
                                Export to CSV
                            </CSVLink>
                        </div>
                        <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={weeklySales} style={{width: '100%', height: 'auto'}} />
                            <CSVLink data={ExportWeeklyIncome()} filename="weekly-income.csv" className="text-green-500 text-center block">
                                Export to CSV
                            </CSVLink>
                        </div>
                        <div style={{width: 'calc(calc(100% / 2) - 3rem)'}}>
                            <Bar ref={ref} data={monthlySales} style={{width: '100%', height: 'auto'}} />
                            <CSVLink data={ExportMonthlyIncome()} filename={`monthly-income.csv`} className="text-green-500 text-center block">
                                Export to CSV
                            </CSVLink>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
