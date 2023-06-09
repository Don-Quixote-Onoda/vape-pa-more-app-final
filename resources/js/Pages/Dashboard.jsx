import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { ProductService } from "@/Service/ProductService";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { useForm } from "@inertiajs/react";
import { router } from '@inertiajs/react'
import axios from 'axios';
import dashboard_styles from './Dashboard.css';
import { classNames } from "primereact/utils";
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

NProgress.configure({ showSpinner: false });

export default function Dashboard(props) {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState("grid");
    const [product, setProduct] = useState({});
    const [showProductModal, setShowProductModal] = useState(false);
    const [orders, setOrders] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [isSubmitted, setSubmitted] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [orderNumber, setOrderNumber] = useState(null);
    const [showOrderDetailModal, setShowOrderDetailModal] = useState(false);
    const [totalChange, setTotalChange] = useState(null);
    const [cashAmount, setCashAmount] = useState(null);
    

    const { data, setData, post, reset, processing, errors } = useForm(JSON.parse(localStorage.getItem('items')));
    const uniqueNamesSet = new Set();
    const filteredItemNames = props.product_types.filter(item => {
        const lowercaseName = item.name.trim().toLowerCase();
        if (lowercaseName !== '' && !uniqueNamesSet.has(lowercaseName)) {
        uniqueNamesSet.add(lowercaseName);
        return true;
        }
        return false;
    });
    const filteredItemTypes = props.product_types.filter(item => {
        const lowercaseName = item.type.trim().toLowerCase();
        if (lowercaseName !== '' && !uniqueNamesSet.has(lowercaseName)) {
        uniqueNamesSet.add(lowercaseName);
        return true;
        }
        return false;
    });
    useEffect(() => {
            setProducts(props.all_products);
    }, []); 


    const productStatus = [
        'In Stock',
        'Low Stock',
        'Out of Stock'
    ];

    const getSeverity = (product) => {

        if(product.quantity > 5)
            return "success";
        else if(product.quantity <= 5 && product.quantity >= 1)
            return "warning";
        else 
            return "danger";
    };

    const setSelectedProduct = (selectedProduct) => {
        setProduct(selectedProduct);
        setShowProductModal(true);
    };

    const handleOrders = () => {};
    
    const [productTypeName, setProductTypeName] = useState(null);
    const [productType_type, setProductType_type] = useState(null);
    const [viewSummary, setViewSummary] = useState(false);

    const hideSummary = () => {
        setViewSummary(false);
    }

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
      hideSummary();
      
    }

    const saveOrder = () => {
        setSubmitted(true);

        let orderExists = false;
        let orderIndex = null;
        let updatedQuantity = null;
        let updatedSubTotal = null;

        let newOrder =  {
            image: product.product_image,
            name: product.product_name,
            quantity: quantity,
            subtotal: quantity * product.price,
            product_id: product.id,
            product_type_name: productTypeName,
            selection: productType_type,
        }

        
        console.log(newOrder);
        if (quantity && quantity > 0) {
            orders.forEach((order, index) => {
                if(order.product_id === product.id)
                {
                    orderExists = true;
                    orderIndex = index;
                    updatedQuantity = quantity + order.quantity;
                    updatedSubTotal =  updatedQuantity * product.price;
                }
            });
            products.forEach(item => {
                if(item.id === product.id)
                {
                    item.quantity -= quantity;
                }
            });
            if(orderExists) {
                setOrders(prevOrder => {
                    const updatedOrder = [...prevOrder];
                    updatedOrder[orderIndex] = {
                      ...updatedOrder[orderIndex],
                      quantity: updatedQuantity,
                      subtotal: updatedSubTotal
                    };
                    return updatedOrder;
                });
            }
            else {
                setOrders([
                ...orders,
                newOrder,
                ]);
            }
            
            setSubmitted(false);
            setShowProductModal(false);
            setQuantity(0);
            setProductTypeName(null);
            setProductType_type(null);
            setSelectedProductSelectionID(0);
            setSelectedProductTypeNameID(0);
        }
    };

    useEffect(() => {
        let total = 0;
        orders.forEach((order) => {
            total += order.subtotal;
        });
        setTotalAmount(total);

    });

    const onProductTypeChange = (e, name) => {
        // setData(name, e.target.value.id);

    };

    const removeOrder = (index) => {
        let product = orders[index];
        console.log(product);

        products.forEach(item => {
            if(item.id === product.product_id)
            {
                item.quantity += product.quantity;
            }
        });
        setOrders([...orders.slice(0, index), ...orders.slice(index + 1)]);
    };

    const handleCloseOrder = () => {
        setShowProductModal(false);
        setQuantity(0);
        setSubmitted(false);
    };

    const showOrderDetails = () => {
        let currentDate = new Date();
        let order_number = 'vpm-'+Math.random().toString(36).slice(2);
        setOrderNumber(order_number);
        setShowOrderDetailModal(true);
        setData('orders', orders);
    }

    const closeOrderDetails = () => {
        setShowOrderDetailModal(false);
        setCashAmount(null);
        setTotalChange(null);
        setSubmitted(false);
    }

    const handleTotalChange = (e) => {
        setCashAmount(e);
        if(e - totalAmount >= 0)
            setTotalChange(e - totalAmount);
        else
          setTotalChange(null);
    }

    const saveOrderDetails = async (event) => {
        event.preventDefault();
    NProgress.start(); 
      setSubmitted(true);
        localStorage.setItem('items', JSON.stringify({
            orders: orders,
            order_details: {
            total_amount: totalAmount,
            order_number: orderNumber,
            cash: cashAmount,
            change: totalChange
            },
            user_id: props.auth.user.id
        }));
    
    // setData(localStorage.getItem('items'));
      if(
        orders &&
        totalAmount &&
        orderNumber
        ){
        //   post(route('orders.store', {
        //     orders: orders,
        //     order_details: {
        //       total_amount: totalAmount,
        //       order_number: orderNumber,
        //       cash: cashAmount,
        //       change: totalChange
        //     },
        //     user_id: props.auth.user.id
        // }), {
        //     forceFormData: true,
        //     onSuccess: () =>{
        //       setShowOrderDetailModal(false);
        // setCashAmount(null);
        // setTotalChange(null);
        // setSubmitted(false);
        // setOrders([]); 
        //     },
        //     onError: () => {
        //     },
        // });
        try {
            const response = await axios.post(route('orders.store'), {
              orders: orders,
              order_details: {
                total_amount: totalAmount,
                order_number: orderNumber,
                cash: cashAmount,
                change: totalChange
              },
              user_id: props.auth.user.id
            });
      
            setShowOrderDetailModal(false);
            setCashAmount(null);
            setTotalChange(null);
            setSubmitted(false);
            setOrders([]);
            orderSummary();
          } catch (error) {
            // Handle error
          } finally {
            NProgress.done(); // Stop the progress indicator
          }
    } 

    }

    const [orderSummaryData, setOrderSummaryData] = useState();
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

    const numberFormat = (amount) => {
        const result = parseFloat(amount + "").toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP",
        });
        return <span>{result}</span>;
    };

    const orderSummary = () => {
        axios.get(route('get-order-summary'))
      .then(response => {
        // Handle the response data
        setOrderSummaryData(response.data.data);
        console.log(orderSummaryData);
        setViewSummary(true);

      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
    }

    const [selectedProductTypeNameID, setSelectedProductTypeNameID] = useState(0);
    const [selection, setSelection] = useState(null);

    const handleProductTypeName = (item) => {
        setSelectedProductTypeNameID(item.id);
        setProductTypeName(item.name);

        if(item.name.toLowerCase() == 'juice')
            setSelection(props.product_types.filter(type => {
                return type;
            }));
        else 
            setSelection(null);
    }

    const [selectedProductSelectionID, setSelectedProductSelectionID] = useState(0);

    const handleProductSelection = (item) => {
        setSelectedProductSelectionID(item.id);
        setProductType_type(item.type);
        
    }
    const [isOutOfStock, setOutOfStock] = useState(false);

    const handleSetQuantity = () => {
    //   if(val > product.quantity) {
    //     setOutOfStock(true);
    //   }
    //   else {
    //     setOutOfStock(false);
    //     setQuantity(val);
    //   }
    
    }

    const addQuantity = (product) => {
        let totalQuantity = product.quantity;
        if(quantity < totalQuantity)
            setQuantity(quantity + 1);

        
    }

    const minusQuantity = () => {
        if(quantity > 0)
            setQuantity(quantity - 1);
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Orders Dashboard
                </h2>
            }
        >
            <div class="container px-6 mx-auto grid">
                <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Orders Dashboard
                </h2>

                <div className="flex justify-between dashboard-main-style">
                    <div
                        className="flex flex-wrap gap-4"
                    >
                        {products.map((product) => (
                            <div
                               
                                className="flex dashboard-product-card flex-col pb-2 bg-stone-100 shadow-md rounded border-gray-900 items-center gap-3 py-5 p-2"
                            >
                                <Tag
                                    value={product.quantity > 5 ? productStatus[0] : product.quantity <= 5 && product.quantity >= 1 ? productStatus[1] : productStatus[2]}
                                    className="self-start"
                                    severity={getSeverity(product)}
                                ></Tag>

                                <div>
                                    <img
                                        className="w-full shadow-2 rounded"
                                        src={`http://127.0.0.1:8000/uploads/products/${product.product_image}`}
                                        alt={product.product_name}
                                    />
                                    <div className="text-md font-bold p-2">
                                        {product.product_name}
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between p-2">
                                    <div className="flex flex-col gap-3">
                                    <p className="flex flex-col">
                                        <span className="text-sm font-bold">
                                            Price
                                        </span>
                                        <span className="text-xs ">
                                        {product.price.toLocaleString("en-PH", { style: 'currency', currency: 'PHP' }) }
                                        
                                        </span>
                                    </p>
                                    <p className="flex flex-col">
                                        <span className="text-sm font-bold">
                                            Qty
                                        </span>
                                        <span className="text-xs ">
                                        {product.quantity}
                                        </span>
                                    </p>
                                    </div>
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        style={{
                                            height: "2rem",
                                            width: "2rem",
                                        }}
                                        className="p-button-rounded text-sm w-4 h-4"
                                        onClick={() =>
                                            setSelectedProduct(product)
                                        }
                                        disabled={
                                            product.quantity === 0
                                        }
                                    ></Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="bg-stone-300 rounded p-5"
                    >
                        <header className="flex justify-between">
                            <h4>Orders</h4>
                            <p>Subtotal</p>
                        </header>
                        <hr />

                        {orders.length > 0 && (
                            <main className="py-4">
                                {orders.map((order, index) => (
                                    <div>
                                        <div
                                            className="flex flex-row align-end justify-between py-2"
                                            style={{ position: "relative" }}
                                        >
                                            <div>
                                                <img
                                                    className="w-24 shadow-2 rounded"
                                                    src={`http://127.0.0.1:8000/uploads/products/${order.image}`}
                                                    alt={order.name}
                                                />
                                                <p className="font-bold">
                                                    {order.name}
                                                </p>
                                            </div>
                                            <div className="self-end">
                                                <i
                                                    className="pi pi-times"
                                                    onClick={() =>
                                                        removeOrder(index)
                                                    }
                                                    style={{
                                                        color: "red",
                                                        position: "absolute",
                                                        top: "10px",
                                                        right: 0,
                                                    }}
                                                ></i>
                                                <p className="text-end font-bold">
                                                    {order.subtotal.toLocaleString("en-PH", { style: 'currency', currency: 'PHP' })}
                                                </p>
                                                <p className="text-end">
                                                    Qty: {order.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="flex justify-between mb-3">
                                                <strong>Product Type: </strong>
                                                <span>{order.product_type_name}</span>
                                            </p>
                                        <hr />
                                    </div>
                                ))}
                                <div className="flex justify-between py-5">
                                    <h4>Total:</h4>
                                    <p className="text-end font-bold">
                                        {totalAmount.toLocaleString("en-PH", { style: 'currency', currency: 'PHP' })}
                                    </p>
                                </div>
                                <Button
                                    style={{
                                        "justify-content": "center",
                                        width: "100%",
                                    }}
                                    className="text-center"
                                    disabled={
                                        product.inventoryStatus === "OUTOFSTOCK"
                                    }
                                    onClick={() => showOrderDetails()}
                                >
                                    Pay
                                </Button>
                            </main>
                        )}
                        {orders.length == 0 && (
                            <p className="py-3">No orders added.</p>
                        )}
                    </div>
                </div>
            </div>
            <Dialog
                visible={showProductModal}
                style={{ width: "30rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header={product.name}
                modal
                className="p-fluid"
                // footer={productDialogFooter}
                onHide={() => handleCloseOrder()}
            >
                <div className="flex flex-col pb-2 bg-stone-100 shadow-md rounded border-gray-900 items-center gap-3 py-5 p-2">
                    <Tag
                        value={product.status}
                        className="self-start"
                        severity={getSeverity(product)}
                    ></Tag>

                    <div className="w-full">
                        <img
                            className="w-full shadow-2 rounded"
                            src={`http://127.0.0.1:8000/uploads/products/${product.product_image}`}
                            alt={product.name}
                        />
                    </div>
                    <div className="flex flex-col gap-3 w-full items-start justify-between p-2">
                        <div className="flex w-full flex-col self-start">
                            <span className="text-md font-bold">Quatity</span>
                            <div className="flex justify-between my-5">
                            <i className="pi pi-minus" style={{ color: 'slateblue' }}  onClick={e => minusQuantity(product)}></i>

                                <p>{quantity}</p>
                                <i className="pi pi-plus" style={{ color: 'slateblue' }} onClick={e => addQuantity(product)}></i>

                            </div>
                            {isSubmitted && quantity == 0 && (
                                <span className="text-red-500 text-xs py-2">
                                    Quantity is required!
                                </span>
                            )}

                            {isSubmitted && quantity <= 0 && (
                                <span className="text-red-500 text-xs py-2">
                                    Quantity must greater than 0 !
                                </span>
                            )}
                            {isOutOfStock  && (
                                <span className="text-red-500 text-xs py-2">
                                    Not enough product from inventory!
                                </span>
                            )}
                        </div>
                        <div className="field mb-5">
                <label htmlFor="email" className="font-bold mb-3">
                    Product Type
                </label>
                <br />
                {
                    filteredItemNames.map(type => (
                        type.name !== '' &&  <button className={`mt-4 mr-2 bg-blue-800 px-4 py-1 ${selectedProductTypeNameID === type.id ? 'selected':''} text-white rounded`} onClick={e => handleProductTypeName(type)}>{type.name}</button>
                    ))
                }
    <br />
                {
                    selection !== null && filteredItemTypes.map(type => (
                        type.type !== '' && <button className={`mt-4 mr-2 bg-blue-800 px-4 py-1 ${selectedProductSelectionID === type.id ? 'selected':''} text-white rounded`} onClick={e => handleProductSelection(type)}>{type.type}</button>
                    ))
                }
                {/* {submitted && !data.product_type && (
                    <small className="p-error">Product Type is required.</small>
                )} */}
                
            </div>
                        <Button
                            style={{ "justify-content": "center" }}
                            className="text-center"
                            disabled={product.inventoryStatus === "OUTOFSTOCK"}
                            onClick={() => saveOrder()}
                        >
                            Add
                        </Button>
                    </div>
                </div>
            </Dialog>
            <Dialog
                visible={showOrderDetailModal}
                style={{ width: "30rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Checkout Orders"
                modal
                className="p-fluid"
                // footer={productDialogFooter}
                onHide={() => closeOrderDetails()}
            >
                <div className="flex flex-col pb-2 bg-stone-100 shadow-md rounded border-gray-900 items-center gap-3 py-5 p-2">
                    <div
                        className="flex flex-col gap-3 w-full items-center justify-between p-2"
                    >
                        <header className="flex w-full justify-between">
                            <h4>Orders</h4>
                            <p>Subtotal</p>
                        </header>
                        <hr />

                        {orders.length > 0 && (
                            <main className="py-4 w-full">
                                {orders.map((order, index) => (
                                    <div>
                                        <div
                                            className="flex flex-row align-end justify-between py-2"
                                            style={{ position: "relative" }}
                                        >
                                            <div>
                                                <img
                                                    className="w-24 shadow-2 rounded"
                                                    src={`http://127.0.0.1:8000/uploads/products/${order.image}`}
                                                    alt={order.name}
                                                />
                                                <p className="font-bold">
                                                    {order.name}
                                                </p>
                                            </div>
                                            <div className="self-end">
                                                <i
                                                    className="pi pi-times"
                                                    onClick={() =>
                                                        removeOrder(index)
                                                    }
                                                    style={{
                                                        color: "red",
                                                        position: "absolute",
                                                        top: "10px",
                                                        right: 0,
                                                    }}
                                                ></i>
                                                <p className="text-end font-bold">
                                                    ₱ {order.subtotal}.00
                                                </p>
                                                <p className="text-end">
                                                    Qty: {order.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="flex justify-between mb-3">
                                                <strong>Product Type: </strong>
                                                <span>{order.product_type_name}</span>
                                            </p>
                                        <hr />

                                    </div>
                                ))}
                                <div className="flex justify-between py-5">
                                    <h4>Total:</h4>
                                    <p className="text-end font-bold">
                                        ₱ {totalAmount}.00
                                    </p>
                                </div>
                            </main>
                        )}
                    </div>

                    <div
                        className="flex flex-col gap-3 w-full items-center justify-between p-2"
                    >
                       <div className="w-full">
                       <h5 className="text-xl font-bold">{orderNumber}</h5>
                       <span className=" mb-3">Orde Number</span>

                       </div>
                        <div className="flex w-full flex-col self-start">
                            <span className="text-md font-bold">Cash Amount</span>
                            <InputNumber
                                value={cashAmount}
                                onChange={(e) => handleTotalChange(e.value)}
                            />
                            {isSubmitted && cashAmount == null && (
                                <span className="text-red-500 text-xs py-2">
                                    Cash Amount is required!
                                </span>
                            )}

                            {isSubmitted && cashAmount <= 0 && (
                                <span className="text-red-500 text-xs py-2">
                                    Cash Amount must greater than 0 !
                                </span>
                            )}
                        </div>
                        <div className="flex w-full flex-col self-start">
                        <span className="text-md font-bold">Change</span>
                            
                            <InputNumber
                                value={totalChange}
                                disabled
                            />
                            {isSubmitted && totalChange == null && (
                                <span className="text-red-500 text-xs py-2">
                                    Cash Amount is not enough!
                                </span>
                            )}
                        </div>

                        <Button
                            style={{ "justify-content": "center" }}
                            className="text-center"
                            disabled={product.inventoryStatus === "OUTOFSTOCK"}
                            onClick={e => saveOrderDetails(e)}
                        >
                            Pay
                        </Button>
                    </div>
                </div>
            </Dialog>
            <Dialog
            visible={viewSummary}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Payments"
            modal
            className="p-fluid"
            onHide={hideSummary}
        >
            {
                orderSummaryData !== undefined &&
                <div className="flex printPDF flex-col pb-2 items-center gap-3 py-5 p-2 px-6 p-10">
                <div className="flex flex-col w-full"><h1 className="text-2xl text-center font-bold mb-10">Welcome to Vape Pa More</h1>
                <d className="flex flex-col justify-between mt-5">
                <span className="text text-center flex justify-between"><span className="font-bold">Order Number</span><br/><span className="">{orderSummaryData.order_number}</span></span>
                <span className="text text-center flex justify-between"><span className="font-bold">Date</span><br/><span className="">{getCurrentDateFormat()}</span></span>
                </d>
                </div>
                <div className="flex flex-col gap-1 mt-5 w-full items-center justify-between">
                    <header className="flex w-full justify-between">
                        <h4 className="font-bold">Orders</h4>
                        <p className="font-bold">Subtotal</p>
                    </header>
                    <hr />

                    {orderSummaryData.orders !== undefined && (
                        <main className="w-full">
                            {orderSummaryData.orders.map((order, index) => (
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
                                    {numberFormat(orderSummaryData.total_amount)}
                                </p>
                            </div>
                            
                        </main>
                    )}
                </div>

                <div className="flex flex-col gap-1 mb-8 w-full items-center justify-between">
                    <div className="flex w-full justify-between self-start">
                        <span className="text-md font-bold">Cash Amount</span>
                        <h1>{numberFormat(orderSummaryData.cash)}</h1>
                    </div>
                    <hr className="bg-red-900" />
                    <div className="flex w-full justify-between self-start">
                        <span className="text-md font-bold">Change</span>

                        <h1>{numberFormat(orderSummaryData.change)}</h1>
                    </div>
                </div>
            </div>
            }
            <Button
                style={{ "justify-content": "center" }}
                className="text-center !bg-red-500 !border-0"
                onClick={() => printReciept()}
            >
                Print Reciept
            </Button>
        </Dialog>
        </AuthenticatedLayout>
    );
}
