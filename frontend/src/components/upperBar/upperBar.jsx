import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NotFoundModal from '../../components/notFoundModal/notFoundModal';

export default function UpperBar() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        try {
            const response = await fetch(`http://localhost:8000/api/profile/${username}`);
            if (!response.ok) throw new Error('Perfil não encontrado');

            const data = await response.json();
            navigate(`/${data.username}`);
        } catch (error) {
            setShowModal(true);
        } finally {
            setUsername('');
        }
    };

    return (
        <div>
            <header className="relative bg-blue-950 text-white p-4 flex items-center">
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
                        placeholder="Procure por um perfil"
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

            <main>
                <Outlet />
            </main>

            <NotFoundModal
                show={showModal}
                onClose={() => setShowModal(false)}
                title="Ops..."
                message="Não encontramos a informação que você quer nesse momento. Tente novamente mais tarde."
            />
        </div>
    );
}
