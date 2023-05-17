<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\OrderDetail;
use App\Models\Order;

class OrderDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orderDetails = OrderDetail::where('is_deleted', 0)->get();
        $response = array();
        foreach($orderDetails as $item)
        {
           $orders = array();
            $order = Order::where([
                'is_deleted' => 0,
                'order_number' => $item->order_number
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
                'id' => $item->id,
                'total_amount' => $item->total_amount,
                'cash' => $item->cash,
                'change' => $item->change,
                'order_number' => $item->order_number,
                'orders'=> $orders,
                'user' => $item->user,
                'transaction_date' => $item->created_at
            ));
        }

        return Inertia::render('OrderDetails/Index', ['orderdetails' => $response]);
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
        //
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
        $orderdetail = OrderDetail::find($request->id);
        $orderdetail->update([
            'is_deleted' => 1,
        ]);
        return redirect()->route('order-details.index');
    }
}
