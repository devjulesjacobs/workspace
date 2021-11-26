<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/cms/register', [App\Http\Controllers\AuthController::class, 'register']);
Route::post('/cms/login', [App\Http\Controllers\AuthController::class, 'login']);

// Posts
Route::post('/posts', [App\Http\Controllers\PostController::class, 'store']);
Route::get('/posts', [\App\Http\Controllers\PostController::class, 'getAll']);
Route::get('/post/{id}', [\App\Http\Controllers\PostController::class, 'show']);
Route::patch('/post/{id}', [App\Http\Controllers\PostController::class, 'update']);
