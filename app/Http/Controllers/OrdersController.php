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
                    'total_price' => $item->total_price
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
}
