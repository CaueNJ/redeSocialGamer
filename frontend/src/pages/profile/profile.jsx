import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Perfil() {
    const { username } = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/posts/${username}`);
                if (!response.ok) throw new Error('Erro na resposta da API');

                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error('Erro ao buscar posts do perfil:', err);
                setPosts([]); // garante que a tela não fique travada
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [username]);

    if (loading) return <div className="text-center mt-10">Carregando...</div>;

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
            <title>Perfil</title>

            {/* Sidebar esquerda */}
            <aside className="w-full md:w-72 bg-white shadow-md p-6">
                <div className="flex flex-col items-center md:items-start">
                    <img src={posts[0]?.avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-4" />
                    <h2 className="text-xl font-bold text-center md:text-left">{posts[0]?.nome}</h2>
                    <p className="text-sm text-gray-500 text-center md:text-left mt-1">
                        Jogador ativo | Perfil de @{username}
                    </p>
                </div>
                <div className="mt-6">
                    <a href="#" className="text-blue-600 hover:underline">
                        Ver mais sobre este jogador
                    </a>
                    <h3 className="font-semibold text-sm text-gray-600 mb-2 mt-4">Jogos favoritos</h3>
                    <ul className="text-sm space-y-1">
                        <li>The Witcher 3</li>
                        <li>Age of Empires/Mythology</li>
                        <li>WoW</li>
                    </ul>
                </div>
            </aside>

            {/* Feed */}
            <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-4">Feed</h1>

                <div className="space-y-4">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex gap-4"
                        >
                            <img
                                src={post.avatar}
                                alt={post.nome}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h2 className="font-bold text-sm">{post.nome}</h2>
                                    <span className="text-gray-500 text-sm">@{post.username}</span>
                                </div>
                                <p className="text-sm text-gray-800 mt-1">{post.conteudo}</p>
                                {post.urlImg && (
                                    <img
                                        src={post.urlImg}
                                        alt="Imagem do post"
                                        className="mt-3 rounded-lg w-full max-h-100 object-contain border"
                                    />
                                )}
                                <div className="flex gap-6 text-gray-500 text-sm mt-3">
                                    <button className="hover:text-blue-500 flex items-center gap-1">💬 <span className="hidden sm:inline">Comentar</span></button>
                                    <button className="hover:text-pink-500 flex items-center gap-1">❤️ <span className="hidden sm:inline">Curtir</span></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Sidebar direita */}
            <aside className="w-full md:w-64 bg-white shadow-md p-6 order-2 md:order-none">
                <h3 className="font-semibold text-lg mb-4">Sugestões</h3>
                <ul className="space-y-2 text-sm">
                    <li className="border-b pb-2">🎯 JogadorX está online</li>
                    <li className="border-b pb-2">🔥 Novo jogo recomendado: Rocket Rumble</li>
                    <li className="border-b pb-2">🆕 Atualização disponível</li>
                </ul>
            </aside>
        </div>
    );
}
