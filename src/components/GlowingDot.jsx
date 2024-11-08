import React from "react";

const GlowingDot = () => {
  return (
    <div className="w-full flex justify-end my-2">
      <div
        className="w-2 h-2 rounded-full bg-red-600 relative animate-pulse
        before:content-[''] before:absolute before:-inset-1
        before:bg-red-600 before:rounded-full before:animate-ping before:opacity-75
        after:content-[''] after:absolute after:-inset-2
        after:bg-red-400 after:rounded-full after:animate-pulse after:opacity-40"
      ></div>
    </div>
  );
};

export default GlowingDot;
