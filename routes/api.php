<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GetController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\AuthController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::group(['middleware' => 'auth:sanctum'], function() {
//     //Route::get('/get', 'GetController');
// });
// Route::get('/get', [GetController::class, 'getUser']);

Route::post('/auth/register', [AuthController::class, 'register']);

Route::post('/auth/login', [AuthController::class, 'login'])->name('login');

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/auth/user', [AuthController::class, 'getUser'])->name('getUser');
    // Route::get('/table', [TableController::class, 'table']);
    // Route::get('/table', function(Request $request) {


    //     // return $this->success([
    //     //     'id' => Auth()->user()->id,
    //     //     'name' => Auth()->user()->name,
    //     //     'token' => auth()->user()->createToken('API Token')->plainTextToken
    //     // ]);
    //     // return auth()->user();
    // });

    Route::post('/auth/logout', [AuthController::class, 'logout']);
});
