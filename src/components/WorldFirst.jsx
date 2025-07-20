// import React from "react";
// import ForestBackground from "../assets/ForestBackground.png";
// import Logo from "../assets/Logo.png";
// import { motion } from "framer-motion";

// const WorldFirstSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gray-100 py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      
//       {/* Background trees */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//         {/* Left tree */}
//         <img
//           src={ForestBackground}
//           alt="Tree foliage left"
//           className="absolute top-0 left-0 h-full object-cover object-left"
//           style={{ width: '40%', clipPath: 'inset(0 60% 0 0)' }}
//         />
//         {/* Right tree */}
//         <img
//           src={ForestBackground}
//           alt="Tree foliage right"
//           className="absolute top-0 right-0 h-full object-cover object-right"
//           style={{ width: '40%', clipPath: 'inset(0 0 0 60%)' }}
//         />
//       </div>

//       {/* Main Content */}
//       <motion.div
//         className="relative z-10 max-w-xl sm:max-w-2xl mx-auto text-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={Logo}
//             alt="Certified B Corporation"
//             className="h-20 sm:h-24 md:h-32 w-auto object-contain"
//           />
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
//           World first
//         </h2>

//         {/* Paragraph */}
//         <p className="text-base sm:text-lg text-gray-700 mb-10 px-2 sm:px-4">
//           We’re the first e-bike producer to achieve B Corp status, thanks in
//           part to initiatives like Circular, our carefully refurbished range
//           that ensures all our bikes find a happy home.
//         </p>

//         {/* Button */}
//         <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition duration-300">
//           Learn more
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default WorldFirstSection;

import React from "react";
import ForestBackground from "../assets/ForestBackground.png";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

const WorldFirstSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100 py-20 px-4 overflow-hidden">
      
      {/* Background trees */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <img
          src={ForestBackground}
          alt="Tree left"
          className="absolute top-0 left-0 h-full object-cover object-left hidden sm:block"
          style={{ width: '40%', clipPath: 'inset(0 60% 0 0)' }}
        />
        <img
          src={ForestBackground}
          alt="Tree right"
          className="absolute top-0 right-0 h-full object-cover object-right hidden sm:block"
          style={{ width: '40%', clipPath: 'inset(0 0 0 60%)' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Certified B Corporation"
            className="h-16 sm:h-20 md:h-28 w-auto object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black">
          World first
        </h2>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-10">
          We’re the first e-bike producer to achieve B Corp status, thanks in
          part to initiatives like Circular, our carefully refurbished range
          that ensures all our bikes find a happy home.
        </p>

        {/* Button */}
        <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-800 transition duration-300">
          Learn more
        </button>
      </motion.div>
    </section>
  );
};

export default WorldFirstSection;

