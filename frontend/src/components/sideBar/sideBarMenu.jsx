import { useEffect, useRef, useState } from 'react';
import LoginForm from '../auth/loginForm';
import RegisterForm from '../auth/registerForm';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

export default function SidebarMenu({ onClose }) {
    const sidebarRef = useRef();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('login');

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
        <div className="fixed inset-0 backdrop-blur-sm z-40 flex justify-end">
            <div ref={sidebarRef} className="bg-white w-80 h-full shadow-lg p-6 overflow-y-auto">
                {user ? (
                    <>
                        <h2 className="text-xl font-bold mb-4 text-center">Olá, {user.name}</h2>
                        <button
                            className="w-full bg-blue-600 text-white py-2 rounded mb-2 hover:bg-blue-700"
                            onClick={() => {
                                navigate(`/${user.username}`);
                                onClose();
                            }}
                        >
                            Meu Perfil
                        </button>
                        <button
                            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                            onClick={() => {
                                logout();
                                onClose();
                            }}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold mb-4 text-center">
                            {activeTab === 'login' ? 'Efetuar login' : 'Criar nova conta'}
                        </h2>
                        {activeTab === 'login' ? (
                            <LoginForm
                                onClose={(tabOrSuccess) => {
                                    if (tabOrSuccess === 'register') {
                                        setActiveTab('register');
                                    } else if (tabOrSuccess === true) {
                                        onClose();
                                    }
                                }}
                            />
                        ) : (
                            <RegisterForm
                                onClose={(tab) => {
                                    if (tab) setActiveTab(tab);
                                    else onClose();
                                }}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
