// import React from 'react'

// const Features = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Features





// import React from "react";
// import { ChevronRight } from "lucide-react";
// import ShineShare from "../assets/ShineShare.png";

// const Features = () => {
//   return (
//     <section className="w-full bg-gradient-to-b from-[#e7f0fb] to-white px-10 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
//       {/* Left: Image fills the left side */}
//       <div className="w-full lg:w-1/2 h-full flex justify-center">
//         <img
//           src={ShineShare}
//           alt="Cowboy ST Bike"
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* Right: Text Content */}
//       <div className="flex flex-col gap-6 max-w-xl text-right">
//         <p className="text-sm text-gray-500">Cruiser ST</p>
//         <h1 className="text-6xl font-semibold text-black">Rise and share</h1>

//         <div className="flex items-center justify-end gap-6">
//           <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition">
//             Explore
//           </button>
//           <span className="text-gray-800 text-sm">From €2,999</span>
//           <a href="#" className="text-sm text-black hover:underline flex items-center gap-1">
//             Book a free test ride <ChevronRight size={16} />
//           </a>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t mt-8 text-sm text-gray-700">
//           <div className="text-right">
//             <p className="font-medium text-black">Find My Bike</p>
//             <p>Theft Detection</p>
//           </div>
//           <div className="text-right">
//             <p className="font-medium text-black">Custom AdaptivePower™</p>
//             <p>Automatic assistance</p>
//           </div>
//           <div className="text-right">
//             <p className="font-medium text-black">Servicing Nearby</p>
//             <p>200+ stores</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;



// import React from "react";
// import { ChevronRight } from "lucide-react";
// import ShineShare from "../assets/ShineShare.png"; // Assuming this path is correct for your image

// const Features = () => {
//   return (
//     <section className="w-full bg-gradient-to-b from-[#e7f0fb] to-white px-10 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
//       {/* Left: Image fills the left side */}
//       <div className="w-full lg:w-1/2 h-full flex justify-center">
//         <img
//           src={ShineShare}
//           alt="Cowboy ST Bike"
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* Right: Text Content */}
//       <div className="flex flex-col gap-6 max-w-xl text-left"> {/* Kept text-left adjustment */}
//         <p className="text-lg font-medium text-gray-700 mb-2">Cruiser ST</p> {/* Kept font size and color adjustments */}
//         <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8"> {/* Kept font sizes and weights adjustments */}
//           Rise and share
//         </h1>

//         <div className="flex items-center space-x-4 mb-12"> {/* Kept gap and mb-12 adjustments */}
//           <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300"> {/* Kept button styling adjustments */}
//             Explore
//           </button>
//           <p className="text-xl font-medium">From €2,999</p> {/* Kept font size and weight adjustments */}
//           <a href="#" className="text-lg text-black hover:underline flex items-center gap-1"> {/* Kept font size adjustment */}
//             Book a free test ride <ChevronRight size={20} /> {/* Kept ChevronRight size adjustment */}
//           </a>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t mt-8 text-sm text-gray-700">
//           <div className="text-left"> {/* Kept text-left adjustment */}
//             <p className="font-semibold">Find My Bike</p> {/* Kept font weight adjustment */}
//             <p>Theft Detection</p>
//           </div>
//           <div className="text-left"> {/* Kept text-left adjustment */}
//             <p className="font-semibold">Custom AdaptivePower™</p> {/* Kept font weight adjustment */}
//             <p>Automatic assistance</p>
//           </div>
//           <div className="text-left"> {/* Kept text-left adjustment */}
//             <p className="font-semibold">Servicing Nearby</p> {/* Kept font weight adjustment */}
//             <p>200+ stores</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;




import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ShineShare from "../assets/ShineShare.png";

const Features = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#e7f0fb] to-white px-10 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      
      {/* Left: Image stays static */}
      <div className="w-full lg:w-1/2 h-full flex justify-center">
        <img
          src={ShineShare}
          alt="Cowboy ST Bike"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right: Text Content with animation */}
      <motion.div
        className="flex flex-col gap-6 max-w-xl text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg font-medium text-gray-700 mb-2">Cruiser ST</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Rise and share
        </h1>

        <div className="flex items-center space-x-4 mb-12">
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
            Explore
          </button>
          <p className="text-xl font-medium">From €2,999</p>
          <a href="#" className="text-lg text-black hover:underline flex items-center gap-1">
            Book a free test ride <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t mt-8 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Find My Bike</p>
            <p>Theft Detection</p>
          </div>
          <div>
            <p className="font-semibold">Custom AdaptivePower™</p>
            <p>Automatic assistance</p>
          </div>
          <div>
            <p className="font-semibold">Servicing Nearby</p>
            <p>200+ stores</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;

