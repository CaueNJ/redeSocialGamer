
export default function NotFoundModal({ show, onClose, title, message }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-80 max-w-full text-center">
                <h2 className="text-xl font-bold mb-4">{title || 'Aviso'}</h2>
                <p className="text-gray-700 mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}
