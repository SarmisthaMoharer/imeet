import React from "react";
import clickSound from "../assets/sounds/click.mp3";

const Button = ({ onClick, children, className }) => {
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
    if (onClick) onClick();
  };

  return (
    <button
      onClick={playClickSound}
      className={`bg-gold text-dark-violet px-4 py-2 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
