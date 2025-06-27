import React from "react";
import { ChevronDown } from "lucide-react"; // For the scroll down arrow
import SuperNaturalBackground from "../assets/natural.png"; // Path to your background image

const SuperNaturalSection = () => {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center text-white bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${SuperNaturalBackground})` }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-sm font-medium tracking-widest uppercase mb-4 opacity-80">
          Adaptive Power 2.0
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
          Super. Natural.
        </h1>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10">
          <ChevronDown size={40} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default SuperNaturalSection;