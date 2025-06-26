import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';

export default function LoginForm({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || 'Erro ao fazer login');
                return;
            }

            const data = await res.json();
            login(data.user);
            setShowSuccess(true);
            setTimeout(() => {
                onClose();
            }, 3000);
        } catch (err) {
            setError('Erro inesperado. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Entrar</h2>
            {error && <p className="text-red-600">{error}</p>}
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
                Entrar
            </button>
            <p className="text-sm text-center">
                Ainda não tem conta?{' '}
                <button
                    type="button"
                    className="text-blue-600 underline"
                    onClick={() => onClose('register')}
                >
                    Cadastrar
                </button>
            </p>
        </form>
    );
}
