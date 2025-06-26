<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{    

    public function index()
        {
            $posts = DB::select("
                SELECT 
                    posts.id,
                    posts.content AS conteudo,
                    posts.image_path AS urlImg,
                    users.name AS nome,
                    users.username,
                    users.avatar
                FROM posts
                JOIN users ON users.id = posts.user_id
                ORDER BY posts.created_at DESC
            ");

            return response()->json($posts);
        }

        public function showByUsername($username)
        {
            $user = DB::table('users')
                ->select('name', 'username', 'avatar', 'bio', 'links', 'banner')
                ->where('username', $username)
                ->first();

            if (!$user) {
                return response()->json(['message' => 'Usuário não encontrado'], 404);
            }

            // Decodifica links
            $user->links = json_decode($user->links, true) ?? [];

            $posts = DB::select("
                SELECT 
                    posts.id,
                    posts.content AS conteudo,
                    posts.image_path AS urlImg,
                    users.name AS nome,
                    users.username,
                    users.avatar
                FROM posts
                JOIN users ON users.id = posts.user_id
                WHERE users.username = ?
                ORDER BY posts.created_at DESC
            ", [$username]);

            return response()->json([
                'profile' => $user,
                'posts' => $posts,
            ]);
        }


}
