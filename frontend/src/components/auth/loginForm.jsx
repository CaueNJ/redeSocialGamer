import { useState } from 'react';

export default function LoginForm({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aqui você vai chamar sua API de login
        console.log('Login com:', { email, password });
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Entrar</h2>
            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Senha"
                className="w-full px-4 py-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Entrar
            </button>

            <p className="text-sm text-center">
                Não tem conta?{' '}
                <button
                    type="button"
                    className="text-blue-600 underline"
                    onClick={() => onClose('register')}
                >
                    Cadastre-se
                </button>
            </p>
        </form>
    );
}
