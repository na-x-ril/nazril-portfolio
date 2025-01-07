import { useState } from "react";
import NameInput from "./components/NameInput";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [name, setName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isSplashDone, setIsSplashDone] = useState(false);

  return (
    <>
      {!isNameSubmitted && (
        <NameInput
          onSubmit={(name) => {
            setName(name);
            setIsNameSubmitted(true);
          }}
        />
      )}

      {isNameSubmitted && !isSplashDone && (
        <SplashScreen
          name={name}
          onAnimationEnd={() => setIsSplashDone(true)}
        />
      )}

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