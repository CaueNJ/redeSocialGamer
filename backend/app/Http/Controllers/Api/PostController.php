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

}
