import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function EasterEgg() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "d" && e.ctrlKey) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return null;
};