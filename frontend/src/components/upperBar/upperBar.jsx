import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function UpperBar() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (username.trim()) {
            navigate(`/${username}`);
            setUsername('');
        }
    };

    return (
        <div>
            <header className="relative bg-gray-800 text-white p-4 flex items-center">
                {/* Nome do projeto à esquerda */}
                <Link to="/" className="text-xl font-bold z-10">
                    Rede Gamer
                </Link>

                {/* Barra de pesquisa centralizada */}
                <form
                    onSubmit={handleSearch}
                    className="absolute left-1/2 transform -translate-x-1/2 flex gap-2 w-full max-w-xl"
                >
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Procure por um perfil ou posts sobre um jogo"
                        className="flex-grow border border-gray-300 rounded px-4 py-2 text-white"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Buscar
                    </button>
                </form>
            </header>

            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
}
