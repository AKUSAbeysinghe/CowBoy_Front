// import React from "react";
// import ForestBackground from "../assets/ForestBackground.png";
// import Logo from "../assets/certified.png";

// const WorldFirstSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gray-100 py-20 px-6 overflow-hidden">

//     <div className="flex items-center justify-end gap-2">
//                 <img
//                   src={Logo}
//                   alt="Certified B Corporation"
//                   className="h-16 w-auto object-contain"
//                 />

//     </div>

//       {/* Background trees */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//         {/* Left tree */}
//         <img
//           src={ForestBackground}
//           alt="Tree foliage"
//           className="absolute top-0 left-0 h-full object-cover object-left"
//           style={{ width: '40%', clipPath: 'inset(0 60% 0 0)' }}
//         />
//         {/* Right tree */}
//         <img
//           src={ForestBackground}
//           alt="Tree foliage"
//           className="absolute top-0 right-0 h-full object-cover object-right"
//           style={{ width: '40%', clipPath: 'inset(0 0 0 60%)' }}
//         />
//       </div>


//      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//         {/* Left tree */}
//         <img
//           src={ForestBackground}
//           alt="Tree foliage"
//           className="absolute top-0 left-0 h-full object-cover object-left"
//           style={{ width: '40%', clipPath: 'inset(0 60% 0 0)' }}
//         />
// </div>


//       {/* CONTENT — no background box */}
//       <div className="relative z-10 max-w-3xl mx-auto text-center">
//         <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
//           World first
//         </h2>

//         <p className="text-lg text-gray-700 mb-10">
//           We’re the first e-bike producer to achieve B Corp status, thanks in
//           part to initiatives like Circular, our carefully refurbished range
//           that ensures all our bikes find a happy home.
//         </p>

//         <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
//           Learn more
//         </button>
//       </div>
//     </section>
//   );
// };

// export default WorldFirstSection;



// import React from "react";
// import ForestBackground from "../assets/ForestBackground.png";
// import Logo from "../assets/Logo.png";

// const WorldFirstSection = () => {
//   return (
//      <section className="relative min-h-screen flex items-center justify-center bg-gray-100 py-20 px-6 overflow-hidden">

  
//       {/* Background trees */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//         <img
//           src={ForestBackground}
//           alt="Tree foliage"
//           className="absolute top-0 left-0 h-full object-cover object-left"
//           style={{ width: '40%', clipPath: 'inset(0 60% 0 0)' }}
//         />
//         <img
//           src={ForestBackground}
//           alt="Tree foliage"
//           className="absolute top-0 right-0 h-full object-cover object-right"
//           style={{ width: '40%', clipPath: 'inset(0 0 0 60%)' }}
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-3xl mx-auto text-center">
//         {/* Logo above heading */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={Logo}
//             alt="Certified B Corporation"
//             className="h-24 w-auto object-contain" // Adjust size as needed
//           />
//         </div>

//         <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
//           World first
//         </h2>

//         <p className="text-lg text-gray-700 mb-10">
//           We’re the first e-bike producer to achieve B Corp status, thanks in
//           part to initiatives like Circular, our carefully refurbished range
//           that ensures all our bikes find a happy home.
//         </p>

//         <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
//           Learn more
//         </button>
//       </div>
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
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100 py-20 px-6 overflow-hidden">
      
      {/* Background trees */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <img
          src={ForestBackground}
          alt="Tree foliage"
          className="absolute top-0 left-0 h-full object-cover object-left"
          style={{ width: '40%', clipPath: 'inset(0 60% 0 0)' }}
        />
        <img
          src={ForestBackground}
          alt="Tree foliage"
          className="absolute top-0 right-0 h-full object-cover object-right"
          style={{ width: '40%', clipPath: 'inset(0 0 0 60%)' }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Larger logo */}
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Certified B Corporation"
            className="h-32 w-auto object-contain"  // Now 8rem tall
          />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
          World first
        </h2>

        <p className="text-lg text-gray-700 mb-10">
          We’re the first e-bike producer to achieve B Corp status, thanks in
          part to initiatives like Circular, our carefully refurbished range
          that ensures all our bikes find a happy home.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default WorldFirstSection;
