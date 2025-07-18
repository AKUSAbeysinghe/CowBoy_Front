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





// import React from "react";

// const AdaptivePowerTextSection = () => {
//   return (
//     <section className="bg-[#f9f5ef] py-20 px-6 flex flex-col items-center justify-center text-center">
//       <div className="max-w-4xl mx-auto">
//         <p className="text-sm font-medium tracking-widest uppercase text-gray-700 mb-6">
//           AdaptivePower 2.0
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black mb-8">
//           With AdaptivePower™ technology, your bike thinks for itself. Encounter any resistance on the road, and it instantly adapts to what’s around you. Gain superhuman strength just when you need it – and experience the most natural ride feel ever.
//         </h2>
//         <button className="bg-transparent border border-black text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition duration-300">
//           VERSION 2.0
//         </button>
//       </div>
//     </section>
//   );
// };

// export default AdaptivePowerTextSection;