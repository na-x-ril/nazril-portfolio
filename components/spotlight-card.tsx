import { useTheme } from "next-themes";
import React, { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)"
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const { theme } = useTheme();

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const lightSpotlight = "rgba(59, 130, 246, 0.15)";
  const darkSpotlight = "rgba(59, 130, 246, 0.25)";
  const lightBlackSpotlight = "rgba(0, 0, 0, 0.15)";
  const darkBlackSpotlight = "rgba(0, 0, 0, 0.25)";
  const lightSpotBorder = "rgba(59, 130, 246, 0.25)";
  const darkSpotBorder = "rgba(59, 130, 246, 0.35)";

  const activeSpotlight = spotlightColor || (theme === "dark" ? darkSpotlight : lightSpotlight);
  const activeBlackSpotlight = theme === "dark" ? darkBlackSpotlight : lightBlackSpotlight;
  const activeSpotBorder = theme === "dark" ? darkSpotBorder : lightSpotBorder;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-[${activeSpotBorder}] bg-[${activeBlackSpotlight}] overflow-hidden p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${activeSpotlight}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;