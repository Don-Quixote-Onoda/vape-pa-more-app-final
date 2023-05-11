<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\ProductType;
use Illuminate\Support\Facades\Redirect;


class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::where('is_deleted', 0)->get();
        $product_types = ProductType::where('is_deleted', 0)->get();
        return Inertia::render('Products/Index',['products' => $products, 'product_types' => $product_types]);
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
        $filename = '';
        if($request->hasFile('product_image')) {
            $filename = time().rand(3, 9). '.'.$request->file('product_image')->getClientOriginalExtension();
            $request->file('product_image')->move('uploads/products/', $filename);
        }
        $product = Product::create([
            'product_name' =>$request->product_name,
            'product_image' => $filename,
            'price' => $request->price,
            'status' => $request->status,
            'is_deleted' => 0,
            'product_type_id' => 1,
            'quantity' => $request->quantity,
        ]);

        return Redirect::route('products.index');
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
    public function update(Request $request)
    {

      
        $product = Product::find($request->id);
        if($request->hasFile('product_image')) {
            $filename = time().rand(3, 9). '.'.$request->file('product_image')->getClientOriginalExtension();
            $request->file('product_image')->move('uploads/products/', $filename);
            $product->product_image = $filename;

        }

       
        $product->product_name = $request->product_name;
        $product->price = $request->price;
        $product->status = $request->status;
        $product->product_type_id = 1;
        $product->quantity = $request->quantity;
        $product->save();

        return Redirect::route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {

        $product = Product::find($request->id);
        $product->update([
            'is_deleted' => 1,
        ]);
        return redirect()->route('products.index');
    }
}
