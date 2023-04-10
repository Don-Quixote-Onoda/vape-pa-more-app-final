<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Payment;

class PaymentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payment = Payment::where('is_deleted', 0)->get();
        $payments = array();

        foreach($payment as $item) {
            $items = array(
                'id'=> $item->id,
                'order_number' => $item->order_detail->order_number,
                'purchase' => $item->purchase
            );
            array_push($payments, $items);
        }
        return Inertia::render('Payments/Index', ['payments' => $payments]);
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
        $payment = Payment::find($request->id);
        $payment->update([
            'is_deleted' => 1,
        ]);
        return redirect()->route('payments.index');
    }
}
