<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\OrderDetailsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\ProductTypesController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\UserLogsController;
use App\Http\Controllers\UsersController;
use App\Models\Product;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard',[
        'all_products' => Product::all() 
        ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/orders-dashboard', function () {
    return Inertia::render('OrdersDashboard', [
    'all_products' => Product::all() 
    ]
);
})->middleware(['auth', 'verified'])->name('orders-dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('products', ProductsController::class);
    Route::resource('products-types', ProductTypesController::class);
    Route::resource('order-details', OrderDetailsController::class);
    Route::resource('orders', OrdersController::class);
    Route::resource('payments', PaymentsController::class);
    Route::resource('products', ProductsController::class);
    Route::resource('user-logs',UserLogsController::class);
    Route::resource('users', UsersController::class);
    Route::get('summary-reports', [ReportsController::class, 'index'])->name('summary-reports');
});

require __DIR__.'/auth.php';
