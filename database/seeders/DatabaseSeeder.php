<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'administrator',
            'image' => '1679142933.svg',
            'firstname' => 'Test',
            'lastname' => 'Test',
            'sex' => 1,
            'birthdate' => '2000-02-03',
            'address' => 'Test',
            'phone_number' => '09389230',
            'email' => 'administrator@email.com',
            'role' => 1,
            'password' => Hash::make('vapepamore_admin'),
        ]);

        event(new Registered($user));
    }
}
