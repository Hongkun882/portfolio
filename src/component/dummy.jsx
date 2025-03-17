import { useState } from "react";

const HoverEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Get the position relative to the div
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });
  };

  return (
    <div
      className="relative w-80 h-80 bg-gray-200 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute w-20 h-20 bg-blue-500 rounded-full opacity-50 transition-all duration-100"
        style={{
          top: `${mousePos.y - 40}px`,
          left: `${mousePos.x - 40}px`,
        }}
      />
      <p className="absolute inset-0 flex items-center justify-center text-black font-bold">
        Hover Here!
      </p>
    </div>
  );
};

export default HoverEffect;
