<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\StatefulGuard;

class GetController extends Controller
{
    public function getUser(Request $request) {
        return $request->session()->all();

//        return $this->success([
//            'id' => Auth()->user()->id,
//            'name' => Auth()->user()->name,
//            // 'token' => auth()->user()->createToken('API Token')->plainTextToken
//        ]);
    }

}
