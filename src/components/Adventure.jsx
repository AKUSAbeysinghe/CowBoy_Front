// import React from "react";
// import Adventure from "../assets/Adventure.png"

// const CrossBikeShowcase = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
//       {/* Background image/bike */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/2 md:w-auto">
//         <img
//           src={Adventure} // Replace with the actual path to your image if different
//           alt="Cross Bike"
//           className="h-full w-auto object-cover object-left"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-0 flex flex-col md:flex-row items-center md:items-start justify-between w-full">
//         <div className="md:w-1/2 text-left md:pr-12">
//           <p className="text-lg font-medium text-gray-700 mb-2">Cross</p>
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
//             Built for adventure
//           </h1>
//           <div className="flex items-center space-x-4 mb-12">
//             <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
//               Explore
//             </button>
//             <p className="text-xl font-medium">From €3,999</p>
//             <a href="#" className="text-lg text-black hover:underline flex items-center">
//               Book a free test ride
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 ml-1"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
//             <div>
//               <p className="font-semibold">Suspension</p>
//               <p>Fork & seatpost</p>
//             </div>
//             <div>
//               <p className="font-semibold">Custom AdaptivePower™</p>
//               <p>Automatic assistance</p>
//             </div>
//             <div>
//               <p className="font-semibold">All-new battery</p>
//               <p>60-120 km range</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CrossBikeShowcase;


import React from "react";
import Adventure from "../assets/Adventure.png";
import { motion } from "framer-motion";

const CrossBikeShowcase = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-start justify-between
        px-6 py-16"
      style={{
        background: "linear-gradient(to right, #57534e, #5c594f, #57534e)",
      }}
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >

      {/* Text content */}
      <div className="w-full md:w-1/2 flex flex-col justify-start md:pr-16 mt-6 md:mt-16">
        <p className="text-lg font-medium text-white mb-2">Cross</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-8">
          Built for adventure
        </h1>
        <div className="flex items-center space-x-4 mb-12">
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Explore
          </button>
          <p className="text-xl font-medium text-white">From €3,999</p>
          <a
            href="#"
            className="text-lg text-white hover:underline flex items-center"
          >
            Book a free test ride
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white">
          <div>
            <p className="font-semibold">Suspension</p>
            <p>Fork & seatpost</p>
          </div>
          <div>
            <p className="font-semibold">Custom AdaptivePower™</p>
            <p>Automatic assistance</p>
          </div>
          <div>
            <p className="font-semibold">All-new battery</p>
            <p>60-120 km range</p>
          </div>
        </div>
      </div>

      {/* Image on right */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={Adventure}
          alt="Cross Bike"
          className="max-h-[400px] w-auto object-contain"
        />
      </div>
      </motion.div>
    </section>
  );
};

export default CrossBikeShowcase;
