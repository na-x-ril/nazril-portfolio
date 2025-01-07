import { useState, useRef, useEffect } from "react";

export default function NameInput({ onSubmit }) {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    // Buat referensi ke elemen input
    const inputRef = useRef(null);

    // Atur fokus pada elemen input saat komponen pertama kali dirender
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedName = name.trim();

        if (trimmedName.length > 20) {
            setError("Nama tidak boleh lebih dari 20 karakter.");
            return;
        }

        if (trimmedName) {
            setError("");
            onSubmit(trimmedName);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800">
            <form onSubmit={handleSubmit} className="text-center">
                <label className="block text-white text-3xl mb-4 font-bold">
                    Siapa nama kamu?
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setError("");
                    }}
                    className="px-4 py-2 rounded-lg text-lg text-white focus:outline-none bg-gray-600 mr-1"
                    placeholder="Nama Anda"
                    maxLength={20}
                    required
                    ref={inputRef} // Tambahkan referensi ke elemen input
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
                >
                    Mulai
                </button>
            </form>
        </div>
    );
}