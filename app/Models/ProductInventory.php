<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductInventory extends Model
{
    use HasFactory;

    
    public $table = 'product_inventories';
    public $primary_key = 'id';
    public $timestamp = true;

    protected $fillable = [
        'name',
        'quantity',
        'date_added',
        'product_type_name',
        'product_type_id',
    ];
}
