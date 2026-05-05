import { useEffect, useState } from "react";

interface ParallaxTextProps {
  text: string;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  top?: string;
}

const ParallaxText = ({ text, speed = 0.5, direction = "left", className = "", top = "50%" }: ParallaxTextProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  const xPos = direction === "left" ? -offset : offset;

  return (
    <div 
      className={`absolute left-0 right-0 z-0 select-none pointer-events-none overflow-hidden whitespace-nowrap parallax-text ${className}`}
      style={{ 
        top,
        transform: `translateX(${xPos}px)`,
        transition: "transform 0.1s linear"
      }}
    >
      {text} {text} {text}
    </div>
  );
};

export default ParallaxText;
