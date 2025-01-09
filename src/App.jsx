import { useState, useEffect } from "react";
import NameInput from "./components/NameInput";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import EasterEgg from "./components/EasterEgg";
import { Routes, Route } from "react-router-dom";
import { getSpotifyAccessToken, searchMusicOnSpotify, searchMusicOnYouTube } from "./utils/music";

const YOUTUBE_API_KEY = "YOUR_YOUTUBE_API_KEY"; // Ganti dengan API Key Anda

export default function App() {
  const [name, setName] = useState("");
  const [musicName, setMusicName] = useState("");
  const [musicLink, setMusicLink] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isSplashDone, setIsSplashDone] = useState(false);

  // Cek localStorage saat komponen pertama kali di-render
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedMusicName = localStorage.getItem("musicName");
    if (savedName) {
      setName(savedName);
      setMusicName(savedMusicName || "");
      setIsNameSubmitted(true); // Langsung ke SplashScreen
    }
  }, []);

  const handleNameSubmit = async (name, musicName) => {
    setName(name);
    setMusicName(musicName);
    setIsNameSubmitted(true); // Langsung ke SplashScreen
    localStorage.setItem("userName", name); // Simpan nama ke localStorage
    localStorage.setItem("musicName", musicName); // Simpan nama musik ke localStorage

    if (musicName) {
      // Coba cari musik di Spotify terlebih dahulu
      const accessToken = await getSpotifyAccessToken();
      const spotifyLink = await searchMusicOnSpotify(musicName, accessToken);

      if (spotifyLink) {
        setMusicLink(spotifyLink); // Gunakan Spotify jika ditemukan
      } else {
        // Jika tidak ditemukan di Spotify, cari di YouTube
        const youtubeLink = await searchMusicOnYouTube(musicName);
        setMusicLink(youtubeLink); // Gunakan YouTube jika ditemukan
      }
    }
  };

  return (
    <>
    <EasterEgg />
      {/* Tampilkan NameInput jika nama belum disubmit */}
      {!isNameSubmitted && <NameInput onSubmit={handleNameSubmit} />}

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
          {musicLink && (
            <div className="fixed bottom-4 right-4">
              {musicLink.includes("spotify.com") ? (
                <iframe
                  src={musicLink}
                  width="300"
                  height="80"
                  frameBorder="0"
                  allow="encrypted-media"
                  title="Spotify Music Player"
                ></iframe>
              ) : (
                <iframe
                  width="300"
                  height="150"
                  src={musicLink}
                  title="YouTube Music Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          )}
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