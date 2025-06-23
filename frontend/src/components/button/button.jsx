
function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
        >
            {children}
        </button>
    );
}

export default Button;
