import React from "react";
import { motion } from "framer-motion";

const MeetYourMatchSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 flex flex-col items-center justify-center text-center">
      <p className="text-lg text-gray-700 mb-4">
        Which Cowboy is right for you?
      </p>
      <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        Meet your Match
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Not sure which Cowboy to choose? Take our quiz to find your best fit.
      </p>
      <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
        Take the quiz
      </button>
    </section>
  );
};

export default MeetYourMatchSection;