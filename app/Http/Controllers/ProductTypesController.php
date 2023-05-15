<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProductType;
use Illuminate\Support\Facades\Redirect;

class ProductTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product_types = ProductType::where('is_deleted', 0)->get();
        return Inertia::render('ProductTypes/Index',['product_types' => $product_types]);
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
        ProductType::create([
            'name' => $request->name,
            'type' => $request->type,
            'is_deleted' => 0
        ]);
        return Redirect::route('product-types.index');
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
        $productType = ProductType::find($request->id);
        $productType->update([
            'name' => $request->name,
            'type' => $request->type
        ]);
        $productType->save();
        return Redirect::route('product-types.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $productType = ProductType::find($request->id);
        $productType->update([
            'is_deleted' => 1
        ]);
        $productType->save();
        return Redirect::route('product-types.index');
    }
}
