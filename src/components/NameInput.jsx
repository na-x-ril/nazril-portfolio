import { useState, useRef, useEffect } from "react";
import { getSpotifyAccessToken, searchMusicOnSpotify, searchMusicOnYouTube } from "../utils/music";

export default function NameInput({ onSubmit }) {
  const [name, setName] = useState("");
  const [musicName, setMusicName] = useState("");
  const [musicSource, setMusicSource] = useState("spotify"); // Default: Spotify
  const [error, setError] = useState("");
  const [musicValidation, setMusicValidation] = useState(null); // null: belum dicek, true: valid, false: tidak valid
  const inputRef = useRef(null);

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
      onSubmit(trimmedName, musicName, musicSource);
    }
  };

  const validateMusic = async () => {
    if (!musicName) {
      setMusicValidation(false);
      setError("Masukkan nama lagu terlebih dahulu.");
      return;
    }

    let musicLink = "";

    if (musicSource === "spotify") {
      // Cari lagu di Spotify
      const accessToken = await getSpotifyAccessToken();
      musicLink = await searchMusicOnSpotify(musicName, accessToken);
      if (musicLink) {
        setMusicValidation(true);
        setError("Lagu ditemukan di Spotify!");
      } else {
        setMusicValidation(false);
        setError("Lagu tidak ditemukan di Spotify.");
      }
    } else if (musicSource === "youtube") {
      // Cari lagu di YouTube
      musicLink = await searchMusicOnYouTube(musicName);
      if (musicLink) {
        setMusicValidation(true);
        setError("Lagu ditemukan di YouTube!");
      } else {
        setMusicValidation(false);
        setError("Lagu tidak ditemukan di YouTube.");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
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
          ref={inputRef}
        />
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            value={musicName}
            onChange={(e) => {
              setMusicName(e.target.value);
              setMusicValidation(null); // Reset validasi saat input berubah
              setError("");
            }}
            className="px-4 py-2 rounded-lg text-lg text-white focus:outline-none bg-gray-600 flex-1"
            placeholder="Nama Musik (Opsional)"
          />
          <select
            value={musicSource}
            onChange={(e) => setMusicSource(e.target.value)}
            className="px-4 py-2 rounded-lg text-lg text-white focus:outline-none bg-gray-600"
          >
            <option value="spotify">Spotify</option>
            <option value="youtube">YouTube</option>
          </select>
        </div>
        {error && (
          <p
            className={`mt-2 ${
              musicValidation === true ? "text-green-500" : "text-red-500"
            }`}
          >
            {error}
          </p>
        )}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            type="button"
            onClick={validateMusic}
            className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-lg"
          >
            Cek Lagu
          </button>
          <button
            type="submit"
            disabled={musicName && musicValidation === false} // Nonaktifkan tombol jika lagu tidak valid
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Mulai
          </button>
        </div>
      </form>
    </div>
  );
}