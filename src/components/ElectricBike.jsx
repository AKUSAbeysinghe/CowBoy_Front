import React from "react";
import chopchop from "../assets/chopchop.png";
//import { motion } from "framer-motion";


const MoreThanBikeSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 flex flex-col items-center justify-center text-center">

  {/* your Hero text content here */}



    <div className="w-full lg:w-1/2 h-full flex justify-center">
              <img
                src={chopchop}
                alt="Cowboy ST Bike"
                className="w-full h-auto object-cover"
              />
            </div>


      <div className="mb-8">
        {/* The asterisk/star icon can be an SVG or an icon font if you have one setup.
            For simplicity, I'm using a placeholder div with a background for now.
            If you have an actual SVG for it, replace this div. */}
        <div className="bg-black text-white rounded-full p-4 inline-flex items-center justify-center">
          {/* This is a placeholder for the asterisk icon.
              You might use an SVG here, like:
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
          */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.2L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-6">
        More than an electric bike
      </h2>

      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        The Cowboy app is your daily companion on the road. Enjoy turn-by-turn
        Google Maps navigation, rest easy with Find My Bike and compete on
        leaderboards. Take Cowboy Connect to for the ultimate connected e-bike
        experience including Theft Alerts, Crash Detection and much more.
      </p>

      <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
        Explore Connect
      </button>



      
    </section>
  );
};

export default MoreThanBikeSection;



