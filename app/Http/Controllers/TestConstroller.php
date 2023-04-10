<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Logs;
use App\Models\User;
use App\Models\Order;

class TestConstroller extends Controller
{
    public function test() {

        // $userlogs = array();
        // $logs = Logs::all();

        // foreach($logs as $log) {
        //     $userlog = array();

        //     array_push($userlog, $log->user);
        //     array_push($userlog, $log->payment);
        //     array_push($userlog, $log->order_detail);

        //     array_push($userlogs, $userlog);
        // }
        // return $userlogs;

        $orders = array();
        $order = Order::where('is_deleted', 0)->get();
            foreach($order as $item) {
                $items = array(
                    'id' => $item->id,
                    'product_name' => $item->product->product_name,
                    'product_image' => $item->product->product_image,
                    'quantity' => $item->quantity,
                    'total_price' => $item->total_price
                );
                array_push($orders, $items);
            }
        return $orders;
    }
}
