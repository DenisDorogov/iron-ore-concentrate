<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\GetController;
use Illuminate\Http\Request;

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
Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/get/user', [GetController::class, 'getUser']);
    Route::get('/table', [TableController::class, 'getTable'])->name('table');
    Route::get('/table/{month}', [TableController::class, 'getTheTable']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




//Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::group(['middleware' => ['auth:sanctum']], function () {
//     // Route::get('/me', function(Request $request) {
//     //     return auth()->user();
//     // });

//     Route::get('/test', function () {
//         return view('welcome');
//     });
// });

// Route::get('{page}', MainController::class)->where('page', '.*');

// Route::group(['middleware' => ['auth:sanctum']], function () {
//     Route::get('/table', function(Request $request) {
//         return auth()->user();
//     });

//     Route::post('/auth/logout', [AuthController::class, 'logout']);
// });

// Route::group(['middleware' => ['auth:sanctum']], function () {


//     Route::post('/auth/logout', [AuthController::class, 'logout']);
// });

// Route::middleware('auth:sanctum')->get('/table', function (Request $request) {
//     return $request->user();
// });



