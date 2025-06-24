import { useParams } from 'react-router-dom';

export default function Perfil() {
    const { username } = useParams();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Perfil de @{username}</h2>
            {/* Aqui você pode buscar os posts usando o nome do perfil */}
        </div>
    );
}
