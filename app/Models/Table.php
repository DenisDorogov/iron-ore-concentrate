<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Table
{
    use HasFactory, Notifiable;


    protected $table = 'table';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
        'date',
        'fe',
        'si',
        'al',
        'ca',
        's'
    ];
}
