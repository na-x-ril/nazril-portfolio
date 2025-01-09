import { useState, useEffect, useRef } from "react";
import NameInput from "./components/NameInput";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { Routes, Route } from "react-router-dom";
import { getSpotifyAccessToken, searchMusicOnSpotify, searchMusicOnYouTube } from "./utils/music";

export default function App() {
  const [name, setName] = useState("");
  const [musicName, setMusicName] = useState("");
  const [musicSource, setMusicSource] = useState("spotify"); // Default: Spotify
  const [musicLink, setMusicLink] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isSplashDone, setIsSplashDone] = useState(false);
  const [showMusicInput, setShowMusicInput] = useState(false); // State untuk menampilkan input musik
  const audioRef = useRef(null); // Ref untuk elemen <audio>

  // Cek localStorage saat komponen pertama kali di-render
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedMusicName = localStorage.getItem("musicName");
    const savedMusicSource = localStorage.getItem("musicSource");
    const savedMusicLink = localStorage.getItem("musicLink");
    if (savedName) {
      setName(savedName);
      setMusicName(savedMusicName || "");
      setMusicSource(savedMusicSource || "spotify");
      setMusicLink(savedMusicLink || "");
      setIsNameSubmitted(true); // Langsung ke SplashScreen
    }
  }, []);

  const handleNameSubmit = async (name, musicName, musicSource) => {
    setName(name);
    setMusicName(musicName);
    setMusicSource(musicSource);
    setIsNameSubmitted(true); // Langsung ke SplashScreen
    localStorage.setItem("userName", name); // Simpan nama ke localStorage
    localStorage.setItem("musicName", musicName); // Simpan nama musik ke localStorage
    localStorage.setItem("musicSource", musicSource); // Simpan sumber musik ke localStorage

    if (musicName) {
      let link = "";
      if (musicSource === "spotify") {
        const accessToken = await getSpotifyAccessToken();
        link = await searchMusicOnSpotify(musicName, accessToken);
      } else if (musicSource === "youtube") {
        link = await searchMusicOnYouTube(musicName);
      }
      setMusicLink(link);
      localStorage.setItem("musicLink", link); // Simpan link musik ke localStorage
    }
  };

  // Putar musik saat musicLink berubah
  useEffect(() => {
    if (musicLink && audioRef.current) {
      audioRef.current.src = musicLink;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, [musicLink]);

  // Fungsi untuk mengganti musik
  const handleChangeMusic = () => {
    setShowMusicInput(true); // Tampilkan input musik
  };

  return (
    <>
      {/* Tampilkan NameInput jika nama belum disubmit atau pengguna ingin mengganti musik */}
      {(!isNameSubmitted || showMusicInput) && (
        <NameInput
          onSubmit={(name, musicName, musicSource) => {
            handleNameSubmit(name, musicName, musicSource);
            setShowMusicInput(false); // Sembunyikan input musik setelah submit
          }}
          initialMusicName={musicName}
          initialMusicSource={musicSource}
        />
      )}

      {/* Tampilkan SplashScreen jika nama sudah disubmit tetapi animasi belum selesai */}
      {isNameSubmitted && !isSplashDone && (
        <SplashScreen
          name={name}
          onAnimationEnd={() => setIsSplashDone(true)} // Setelah animasi selesai, lanjut ke konten utama
        />
      )}

      {/* Tampilkan konten utama setelah SplashScreen selesai */}
      {isSplashDone && (
        <div className="opacity-0 animate-fade-in">
          <Navbar />
          {/* Tombol untuk mengganti musik */}
          <button
            onClick={handleChangeMusic}
            className="fixed bottom-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ganti Musik
          </button>
          {/* Elemen <audio> untuk memutar musik di latar belakang */}
          <audio ref={audioRef} controls className="hidden">
            Your browser does not support the audio element.
          </audio>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      )}
    </>
  );
}