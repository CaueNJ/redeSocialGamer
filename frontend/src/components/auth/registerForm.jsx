import { useState } from 'react';

export default function RegisterForm({ onClose }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aqui você vai chamar sua API de cadastro
        console.log('Cadastro com:', { name, username, email, password });
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Cadastrar</h2>
            <input
                type="text"
                placeholder="Nome completo"
                className="w-full px-4 py-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
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
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Cadastrar
            </button>

            <p className="text-sm text-center">
                Já tem conta?{' '}
                <button
                    type="button"
                    className="text-green-600 underline"
                    onClick={() => onClose('login')}
                >
                    Entrar
                </button>
            </p>

        </form>
    );
}
