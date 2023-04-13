<?php

use App\Http\Controllers\OrderDetailsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestConstroller;
use App\Http\Controllers\UserLogsController;
use App\Http\Controllers\UsersController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('test', [TestConstroller::class, 'test']);

Route::post('user', [UsersController::class, 'store'])->name('saveUser');
Route::post('update_user', [UsersController::class, 'update'])->name('updateUser');
Route::post('delete_user', [UsersController::class, 'destroy'])->name('deleteUser');
Route::post('product', [ProductsController::class, 'store'])->name('saveProduct');
Route::post('update_product', [ProductsController::class, 'update'])->name('updateProduct');
Route::post('delete_product', [ProductsController::class, 'destroy'])->name('deleteProduct');
Route::post('delete_order', [OrdersController::class, 'destroy'])->name('deleteOrder');
Route::post('delete_orderdetails', [OrderDetailsController::class, 'destroy'])->name('deleteOrderDetails');
Route::post('delete_payment', [PaymentsController::class, 'destroy'])->name('deletePayment');
// Route::get('user-logs', [UserLogsController::class, 'index']);