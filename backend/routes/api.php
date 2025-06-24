<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;

Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});

Route::get('/posts', [PostController::class, 'index']);