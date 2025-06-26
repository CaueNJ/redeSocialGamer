<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\AuthController;

Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{username}', [PostController::class, 'showByUsername']);

Route::get('/profile/{username}', [ProfileController::class, 'show']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);