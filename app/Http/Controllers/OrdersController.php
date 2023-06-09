<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Product;
use App\Models\OrderDetail;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = array();
        $order = Order::where('is_deleted', 0)->get();
            foreach($order as $item) {
                $items = array(
                    'id' => $item->id,
                    'order_number' => $item->order_number,
                    'product_name' => $item->product->product_name,
                    'product_image' => $item->product->product_image,
                    'quantity' => $item->quantity,
                    'total_price' => $item->total_price,
                    'price' => $item->product->price,
                    'product_type_name' => $item->product->product_type_name,
                    'product_type' => $item->product->selection,
                );
                array_push($orders, $items);
            }
        return Inertia::render('Orders/Index', ['orders' => $orders]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        foreach($request->orders as $item) {
            $order = new Order;
            $order->create([
                'product_id' => $item['product_id'],
                'user_id' => $request->user_id,
                'order_number' => $request->order_details['order_number'],
                'quantity' => $item['quantity'],
                'total_price' => $item['subtotal'],
                'product_type_id'=> 1,
                'product_type_name' => $item['product_type_name'],
                'product_type' => $item['selection'],
                'is_deleted' => 0
            ]);
            $product = Product::find($item['product_id']);
            if($product->quantity < 5 && $product->quantity > 0){   
                $product->update([
                    'quantity' => ($product->quantity - $item['quantity']),
                    'status' => 'LOWSTOCK'
                ]);
            }
            elseif($product->quantity == 1) {
                $product->update([
                    'quantity' => ($product->quantity - $item['quantity']),
                    'status' => 'OUTOFSTOCK'
                ]);
            }
            else {
                $product->update([
                    'quantity' => ($product->quantity - $item['quantity']),
                    'status' => 'INSTOCK'
                ]);
            }
            
        }

        OrderDetail::create([
            'total_amount' => $request->order_details['total_amount'],
            'order_number' => $request->order_details['order_number'],
            'cash' => $request->order_details['cash'],
            'change' => $request->order_details['change'],
            'user_id' => $request->user_id,
            'is_deleted' => 0
        ]);

        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $order = Order::find($request->id);
        $order->update([
            'is_deleted' => 1,
        ]);
        return redirect()->route('orders.index');
    }

    public function getAllOrdersByOrderNumber(string $order_number) {
        $orders = array();
        $order = Order::where([
            'is_deleted' => 0,
            'order_number' => $order_number
        ])->get();
            foreach($order as $item) {
                $items = array(
                    'id' => $item->id,
                    'product_name' => $item->product->product_name,
                    'product_image' => $item->product->product_image,
                    'quantity' => $item->quantity,
                    'total_price' => $item->total_price,
                    'price' => $item->product->price,
                );
                
                array_push($orders, $items);
            }
            return response()->json([
                'orders' => $orders
            ]);
    }

    public function getOrderSumary() {

        $orderDetails = OrderDetail::latest()->first();
        $response = array();
        
        $orders = array();
        $order = Order::where([
            'is_deleted' => 0,
            'order_number' => $orderDetails->order_number
        ])->get();

                foreach($order as $orderItem) {
                    $items = array(
                        'id' => $orderItem->id,
                        'product_name' => $orderItem->product->product_name,
                        'product_image' => $orderItem->product->product_image,
                        'quantity' => $orderItem->quantity,
                        'total_price' => $orderItem->total_price,
                        'price' => $orderItem->product->price,
                        'product_type_name' => $orderItem->product_type_name,
                        'product_type' => $orderItem->product_type,
                    );
                array_push($orders, $items);
            }
            array_push($response, array(
                'id' => $orderDetails->id,
                'total_amount' => $orderDetails->total_amount,
                'cash' => $orderDetails->cash,
                'change' => $orderDetails->change,
                'order_number' => $orderDetails->order_number,
                'orders'=> $orders,
                'user' => $orderDetails->user,
                'transaction_date' => $orderDetails->created_at
            ));

        return response()->json([
            'success' => true,
            'message' => 'Data retrieved successfully.',
            'data' => $response[0],
        ]);
    }
}
