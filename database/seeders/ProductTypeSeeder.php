<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProductType;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ProductTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            ProductType::create([
                'name' => 'Juice',
                'is_deleted' => 0,
                'type' => '3mg'
            ]);

            ProductType::create([
                'name' => 'Juice',
                'is_deleted' => 0,
                'type' => '6mg'
            ]);

            ProductType::create([
                'name' => 'Juice',
                'is_deleted' => 0,
                'type' => '0mg'
            ]);

            ProductType::create([
                'name' => 'Vape',
                'is_deleted' => 0,
                'type' => 'N/A'
            ]);

            ProductType::create([
                'name' => 'Tank',
                'is_deleted' => 0,
                'type' => 'N/A'
            ]);

            User::create([
                'name' => 'administrator',
                'image' => '1679142933.svg',
                'firstname' => 'Test',
                'lastname' => 'Test',
                'sex' => 1,
                'birthdate' => '2000-02-03',
                'address' => 'Test',
                'phone_number' => '09389230',
                'email' => 'admin@email.com',
                'role' => 1,
                'password' => Hash::make('password'),
            ]);
    }
}
