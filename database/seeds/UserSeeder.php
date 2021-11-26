<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [ 'name' => 'Jules Jacobs', 'email' => 'julesjacobs@gmail.com', 'password' => bcrypt('password')],
            [ 'name' => 'Admin User', 'email' => 'admin@gmail.com', 'password' => bcrypt('password'), 'type' => 'admin'],
            [ 'name' => 'App User', 'email' => 'app@gmail.com', 'password' => bcrypt('password')]
        ];

        foreach($users as $user) {
            App\User::create($user);
        }
    }
}
