<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\OrderDetail;
use Illuminate\Support\Facades\DB;

class ReportsController extends Controller
{
    public function index() {

        $dailySales = OrderDetail::select(DB::raw('DATE_FORMAT(created_at, "%Y-%m-%d") as date'), DB::raw('SUM(total_amount) as total_amount'))
        ->where('is_deleted', 0)
        ->groupBy('date')
        ->get();

        $weeklySales = OrderDetail::select(DB::raw('CONCAT(YEAR(created_at), "-", WEEK(created_at)) as week'), DB::raw('SUM(total_amount) as total_amount'))
    ->where('is_deleted', 0)
    ->groupBy('week')
    ->get();

    $monthlySales = OrderDetail::select(DB::raw('DATE_FORMAT(created_at, "%Y-%m") as month'), DB::raw('SUM(total_amount) as total_amount'))
    ->where('is_deleted', 0)
    ->groupBy('month')
    ->get();



        return Inertia::render('SummaryReports', [
            'dailySales' => $dailySales,
            'weeklySales' => $weeklySales,
            'monthlySales' => $monthlySales
        ]);
    }
}
