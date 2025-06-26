import { useState } from 'react';

export default function RegisterForm({ onClose }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, username, email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || 'Erro no cadastro');
                return;
            }

            const data = await res.json();
            setShowSuccess(true);
            setTimeout(() => {
                onClose(); // Fecha o sidebar após mostrar o alerta
            }, 3000);
        } catch (err) {
            setError('Erro inesperado. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Cadastrar</h2>
            {error && <p className="text-red-600">{error}</p>}
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded"
            />
            <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded"
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Cadastrar
            </button>
            <p className="text-sm text-center">
                Já tem conta?{' '}
                <button
                    type="button"
                    className="text-blue-600 underline"
                    onClick={() => onClose('login')}
                >
                    Entrar
                </button>
            </p>
        </form>
    );
}
