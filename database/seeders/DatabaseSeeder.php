<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::create([
            'id' => 1,
            'name' => 'Петров Пётр',
            'email' => 'petrov@mail.com',
            'password' => '$2y$10$BWt/2g30P3AyAzQ7Xm2l7OI596wvE1mtfTkZC9q/TbhoE42sFY3m2', //123456
            'remember_token' => ''
        ]);

        User::create([
            'id' => 2,
            'name' => 'Иванов Ваня',
            'email' => 'ivanov@mail.com',
            'password' => '$2y$10$BWt/2g30P3AyAzQ7Xm2l7OI596wvE1mtfTkZC9q/TbhoE42sFY3m2', //123456
            'remember_token' => ''
        ]);
    }
}
