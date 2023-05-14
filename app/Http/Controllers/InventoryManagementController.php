<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\ProductType;
use Illuminate\Support\Facades\Redirect;
use App\Models\ProductInventory;

class InventoryManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::where('is_deleted', 0)->get();
        $product_types = ProductType::where('is_deleted', 0)->get();
        $product_inventories = ProductInventory::all();
        return Inertia::render('InventoryManagement/Index',['products' => $products, 'product_types' => $product_types, 'product_inventories'=> $product_inventories]);
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
        $product = Product::find($request->product_id);
        $product_type = ProductType::find($request->product_type);
        $filename = '';
        if($request->hasFile('product_image')) {
            $filename = time().rand(3, 9). '.'.$request->file('product_image')->getClientOriginalExtension();
            $request->file('product_image')->move('uploads/products/', $filename);
        }
        
        $prevQuantity = $product->quantity;
        $product->product_image = $filename;
        $product->quantity = $prevQuantity + $request->quantity;
        $product->save();
        ProductInventory::create([
            'name' => $product->product_name,
            'quantity' => $request->quantity,
            'date_added' => date('Y-m-d H:i:s', time()),
            'product_type_name' => $product_type->name,
            'product_type_id' => 1
        ]);

        return Redirect::route('inventory-management.index');
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
    public function destroy(string $id)
    {
        //
    }
}
