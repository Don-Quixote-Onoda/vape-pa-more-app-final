<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Logs;
use App\Models\User;
use App\Models\Order;
use App\Models\OrderDetail;

class TestConstroller extends Controller
{
    public function test() {

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
                    );
                
                array_push($orders, $items);
            }
            array_push($response, array(
                'id' => $item->id,
                'total_amount' => $item->total_amount,
                'cash' => $item->cash,
                'change' => $item->change,
                'order_number' => $item->order_number,
                'orders'=> $orders
            ));
        }
        dd($response);

        // $orders = array();
        // $order = Order::where([
        //     'is_deleted' => 0,
        //     'order_number' => 'vpm-xdd60kwhtub'
        // ])->get();
        //     foreach($order as $item) {
        //         $items = array(
        //             'id' => $item->id,
        //             'product_name' => $item->product->product_name,
        //             'product_image' => $item->product->product_image,
        //             'quantity' => $item->quantity,
        //             'total_price' => $item->total_price,
        //             'price' => $item->product->price,
        //         );
                
        //         array_push($orders, $items);
        //     }
        //     return response()->json([
        //         'orders' => $orders
        //     ]);
    }
}
