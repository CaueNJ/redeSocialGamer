import { useEffect, useRef, useState } from 'react';
import LoginForm from '../auth/loginForm';
import RegisterForm from '../auth/registerForm';

export default function SidebarMenu({ onClose }) {
    const sidebarRef = useRef();
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
                <h2 className="text-xl font-bold mb-4 text-center">
                    {activeTab === 'login' ? 'Entrar na conta' : 'Criar nova conta'}
                </h2>

                {activeTab === 'login' ? (
                    <LoginForm onClose={(tab) => {
                        if (tab) setActiveTab(tab);
                        else onClose();
                    }} />
                ) : (
                    <RegisterForm onClose={(tab) => {
                        if (tab) setActiveTab(tab);
                        else onClose();
                    }} />
                )}
            </div>
        </div>
    );
}
