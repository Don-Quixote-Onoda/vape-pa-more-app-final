<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\OrderDetail;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ReportsController extends Controller
{
    public function index() {

        $year = Carbon::now()->year;

        $result = [];
        
        for ($m = 1; $m <= 12; $m++) {
            $month = date("F", mktime(0, 0, 0, $m, 1, $year));
            $weeks = [];
        
            $start = Carbon::createFromDate($year, $m, 1)->startOfWeek();
            $end = Carbon::createFromDate($year, $m, 1)->endOfMonth()->endOfWeek();
        
            for ($week = 1; $start->lte($end); $week++) {
                $days = [];
        
                for ($dayOfWeek = Carbon::SUNDAY; $dayOfWeek <= Carbon::SATURDAY; $dayOfWeek++) {
                    $day = Carbon::createFromDate($year, $m, $start->day + $dayOfWeek);
                    $dayName = $day->format('l');
                    $dayOfMonth = $day->day;
                    $days[] = [
                        'day_name' => $dayName,
                        'day_of_month' => $dayOfMonth,
                        'total_amount' => 0,
                    ];
                }
        
                $orders = OrderDetail::select(
                    DB::raw('DATE_FORMAT(created_at, "%Y-%m-%d") as date'),
                    DB::raw('SUM(total_amount) as total_amount')
                )
                ->whereBetween('created_at', [$start, $start->copy()->endOfWeek()])
                ->where('is_deleted', 0)
                ->groupBy('date')
                ->get();
        
                foreach ($orders as $order) {
                    $dayOfWeek = Carbon::parse($order->date)->dayOfWeek;
                    $dayIndex = $dayOfWeek + 1; // since days array starts from 0
                    $days[$dayIndex]['total_amount'] = $order->total_amount;
                }
        
                $weeks['week ' . $week] = $days;
                $start->addWeek();
            }
        
            $result[$month] = $weeks;
        }


        return Inertia::render('SummaryReports', [
            'income_reports' => $result = json_decode(json_encode($result), true)
        ]);
    }
}
