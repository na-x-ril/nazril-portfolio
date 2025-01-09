import { useState, useEffect } from "react";
import NameInput from "./components/NameInput";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import EasterEgg from "./components/EasterEgg";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [name, setName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isSplashDone, setIsSplashDone] = useState(false);

  // Cek localStorage saat komponen pertama kali di-render
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setName(savedName);
      setIsNameSubmitted(true); // Langsung ke SplashScreen
    }
  }, []);

  const handleNameSubmit = (name) => {
    setName(name);
    setIsNameSubmitted(true); // Langsung ke SplashScreen
    localStorage.setItem("userName", name); // Simpan nama ke localStorage
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