<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    public function show($username)
    {
        $user = User::where('username', $username)->first();

        if (!$user) {
            return response()->json(['message' => 'Perfil não encontrado'], 404);
        }

        return response()->json($user);
    }
}
