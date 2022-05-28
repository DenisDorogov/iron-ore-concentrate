<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GetController extends Controller
{
    public function getUser() {
        return $this->success([
            'id' => Auth()->user()->id,
            'name' => Auth()->user()->name,
            // 'token' => auth()->user()->createToken('API Token')->plainTextToken
        ]);
    }

}
