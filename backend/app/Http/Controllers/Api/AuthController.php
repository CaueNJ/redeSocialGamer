<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            \Log::info('Dados recebidos no registro', $request->all());

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

            return response()->json(['message' => 'Usuário registrado com sucesso', 'user' => $user]);

        } catch (\Exception $e) {
            \Log::error('Erro ao registrar usuário', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Erro interno ao registrar'], 500);
        }
    }


    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email', $email)->first();

        if (!$user || !Hash::check($password, $user->password)) {
            return response()->json(['message' => 'Credenciais inválidas'], 401);
        }

        return response()->json(['message' => 'Login realizado com sucesso', 'user' => $user]);
    }

}
