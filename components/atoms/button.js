export default function Button({ children, onClick }) {
    return ( <button 
        className="bg-pink-500 text-white px-5 py-1 rounded-lg hover:bg-opacity-75"
        onClick={onClick}
        >
            {children}
        </button>)
} 