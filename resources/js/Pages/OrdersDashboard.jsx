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

export default function Dashboard(props) {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState("grid");
    const [product, setProduct] = useState({});
    const [showProductModal, setShowProductModal] = useState(false);
    const [orders, setOrders] = useState([]);
    const [quantity, setQuantity] = useState(null);
    const [isSubmitted, setSubmitted] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        ProductService.getProducts().then((data) =>
            setProducts(data.slice(0, 12))
        );

        fetch("http://127.0.0.1:8000/api/test").then(response => {
            return response.json()
          })
          .then(data => {
            console.log(data);
          })
    }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case "INSTOCK":
                return "success";

            case "LOWSTOCK":
                return "warning";

            case "OUTOFSTOCK":
                return "danger";

            default:
                return null;
        }
    };

    const setSelectedProduct = (selectedProduct) => {
        setProduct(selectedProduct);
        setShowProductModal(true);
    };

    const handleOrders = () => {};

    const saveOrder = () => {
        setSubmitted(true);

        if (quantity && quantity > 0) {
            setOrders([
                ...orders,
                {
                    image: product.image,
                    name: product.name,
                    quantity: quantity,
                    subtotal: quantity * product.price,
                },
            ]);
            setSubmitted(false);
            setShowProductModal(false);
            setQuantity(null);
        }
    };

    useEffect(() => {
        let total = 0;
        orders.forEach((order) => {
            total += order.subtotal;
        });
        setTotalAmount(total);
    });

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

                <div className="flex justify-between">
                    <div
                        style={{ flexBasis: "70%" }}
                        className="flex flex-wrap gap-4"
                    >
                        {products.map((product) => (
                            <div
                                style={{
                                    flexBasis: "calc(calc(100% / 4) - 1rem)",
                                }}
                                className="flex flex-col pb-2 bg-stone-100 shadow-md rounded border-gray-900 items-center gap-3 py-5 p-2"
                            >
                                <Tag
                                    value={product.inventoryStatus}
                                    className="self-start"
                                    severity={getSeverity(product)}
                                ></Tag>

                                <div>
                                    <img
                                        className="w-full shadow-2 rounded"
                                        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                                        alt={product.name}
                                    />
                                    <div className="text-md font-bold p-2">
                                        {product.name}
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between p-2">
                                    <p className="flex flex-col">
                                        <span className="text-sm font-bold">
                                            Quantity
                                        </span>
                                        <span className="text-xs ">
                                            ${product.price}
                                        </span>
                                    </p>
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
                                            product.inventoryStatus ===
                                            "OUTOFSTOCK"
                                        }
                                    ></Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        style={{ flexBasis: "30%" }}
                        className="bg-stone-300 rounded p-5"
                    >
                        <header className="flex justify-between">
                            <h4>Orders</h4>
                            <p>Subtotal</p>
                        </header>
                        <hr />

                        {
                            orders.length > 0 && <main className="py-4">
                            {orders.map((order) => (
                                <div className="flex flex-row align-end justify-between py-2">
                                    <div>
                                        <img
                                            className="w-24 shadow-2 rounded"
                                            src={`https://primefaces.org/cdn/primereact/images/product/${order.image}`}
                                            alt={order.name}
                                        />
                                        <p className="font-bold">
                                            {order.name}
                                        </p>
                                    </div>
                                    <div className="self-end">
                                        <p className="text-end font-bold">
                                            ₱ {order.subtotal}.00
                                        </p>
                                        <p className="text-end">
                                            Qty: {order.quantity}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <hr />
                            <div className="flex justify-between py-5">
                            <h4>Total:</h4>
                            <p className="text-end font-bold">
                                ₱ {totalAmount}.00
                            </p>
                        </div>
                        <Button
                            style={{ "justify-content": "center", width: '100%' }}
                            className="text-center"
                            disabled={product.inventoryStatus === "OUTOFSTOCK"}
                            onClick={() => saveOrder()}
                        >
                            Add
                        </Button>
                        </main>
                        
                        }
                        {
                            orders.length == 0 && <p className="py-3">No orders added.</p>
                        }
                        <div></div>
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
                onHide={() => setShowProductModal(false)}
            >
                <div className="flex flex-col pb-2 bg-stone-100 shadow-md rounded border-gray-900 items-center gap-3 py-5 p-2">
                    <Tag
                        value={product.inventoryStatus}
                        className="self-start"
                        severity={getSeverity(product)}
                    ></Tag>

                    <div className="w-full">
                        <img
                            className="w-full shadow-2 rounded"
                            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                            alt={product.name}
                        />
                    </div>
                    <div className="flex flex-col gap-3 w-full items-center justify-between p-2">
                        <div className="flex w-full flex-col self-start">
                            <span className="text-md font-bold">Quatity</span>
                            <InputNumber
                                value={quantity}
                                onChange={(e) => setQuantity(e.value)}
                            />
                            {isSubmitted && quantity == null && (
                                <span className="text-red-500 text-xs py-2">
                                    Quantity is required!
                                </span>
                            )}

{isSubmitted && quantity <= 0 && (
                                <span className="text-red-500 text-xs py-2">
                                    Quantity must greater than 0 !
                                </span>
                            )}
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
        </AuthenticatedLayout>
    );
}
