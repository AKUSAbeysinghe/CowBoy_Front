import React from "react";
// You'll need the background image for this section
import ConnectHeroBackground from "../assets/connect.png"; // Replace with actual path to your image

const ConnectHeroSection = () => {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center text-black bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${ConnectHeroBackground})` }} // Set background image
    >
      {/* Optional: Overlay if text readability becomes an issue on different screens */}
      {/* <div className="absolute inset-0 bg-white opacity-10"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-sm font-medium tracking-widest uppercase mb-4 opacity-80">
          Cowboy Connect
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
          Level up your ride
        </h1>

        {/* The image also shows a phone on handlebars, which is part of the background.
            If you need a separate image element for interactivity, you'd add it here.
        */}
      </div>
    </section>
  );
};

export default ConnectHeroSection;