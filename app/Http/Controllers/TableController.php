<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TableController extends Controller
{
    public function getTable() {

//        $table = DB::select('select * from tables where active = ?', [1]);
//        return view('welcome');
        return 'TableController.getTable';
    }

    public function getTheTable($date) {
//        return view('welcome');
        return 'TableController.getTheTable';
    }
}
