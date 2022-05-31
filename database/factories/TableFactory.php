<?php

namespace Database\Factories;

use App\Models\Table;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Table>
 */
class TableFactory extends Factory
{
    protected $model = Table::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $s = rand(200, 500)/100;
        $ca = rand(300, 800)/100;
        $si = rand(500, 700)/100;
        $al = rand(1000, 2000)/100;
        $fe = 99 - $s -$ca - $si - $al;
        $timestamp = time()-1536000;
        return [
            'date' => $timestamp,
            'fe' => $fe,
            'si' => $si,
            'al' => $al,
            'ca' => $ca,
            's' => $s
        ];
    }
}
