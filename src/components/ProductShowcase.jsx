// import React from "react";

// const ProductShowcase = () => {
//   return (
//     <section className="py-16 px-6">
//       <h2 className="text-3xl font-semibold text-center mb-12">Our Bikes</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//         {[1, 2].map((item) => (
//           <div
//             key={item}
//             className="border rounded-xl p-6 hover:shadow-lg transition duration-300"
//           >
//             <div className="h-60 bg-gray-200 mb-4 rounded-lg"></div>
//             <h3 className="text-xl font-medium">Cowboy {item}</h3>
//             <p className="text-gray-600 mt-2">A sleek, powerful e-bike built for the city.</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductShowcase;






// import React from "react";
// import LeanInto from "../assets/LeanInto.png";

// const ProductShowcase = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
//       {/* Background image/bike */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/2 md:w-auto">
//         <img
//           src={LeanInto} // Replace with the actual path to your image if different
//           alt="Classic Bike"
//           className="h-full w-auto object-cover object-left"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-0 flex flex-col md:flex-row items-center md:items-start justify-between w-full">
//         <div className="md:w-1/2 text-left md:pr-12">
//           <p className="text-lg font-medium text-gray-700 mb-2">Classic</p>
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
//             Lean into it
//           </h1>
//           <div className="flex items-center space-x-4 mb-12">
//             <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
//               Explore
//             </button>
//             <p className="text-xl font-medium">From €2,699</p>
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
//               <p className="font-semibold">Find My Bike</p>
//               <p>Theft Detection</p>
//             </div>
//             <div>
//               <p className="font-semibold">Custom AdaptivePower™</p>
//               <p>Automatic assistance</p>
//             </div>
//             <div>
//               <p className="font-semibold">Servicing Nearby</p>
//               <p>200+ stores</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductShowcase;



// import React from "react";
// import LeanInto from "../assets/LeanInto.png";

// const ProductShowcase = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#f9f9f7] to-[#e9ecef]">
//       {/* Bike image */}
//       <div className="w-full lg:w-1/2 flex justify-center">
//               <img
//                 src={LeanInto}
//                 alt="Cowboy Bike"
//                 className="max-h-[500px] w-auto object-contain"
//               />
//             </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-0 flex flex-col md:flex-row items-center md:items-start justify-between w-full">
//         <div className="md:w-1/2 text-left md:pr-12">
//           <p className="text-lg font-medium text-gray-700 mb-2">Classic</p>
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
//             Lean into it
//           </h1>
//           <div className="flex items-center space-x-4 mb-12">
//             <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
//               Explore
//             </button>
//             <p className="text-xl font-medium">From €2,699</p>
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
//               <p className="font-semibold">Find My Bike</p>
//               <p>Theft Detection</p>
//             </div>
//             <div>
//               <p className="font-semibold">Custom AdaptivePower™</p>
//               <p>Automatic assistance</p>
//             </div>
//             <div>
//               <p className="font-semibold">Servicing Nearby</p>
//               <p>200+ stores</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductShowcase;



// import React from "react";
// import LeanInto from "../assets/LeanInto.png";

// const ProductShowcase = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-[#f9f9f7] to-[#e9ecef] items-center justify-between px-6 py-16">
//       {/* Content left */}
//       <div className="w-full md:w-1/2 text-left md:pr-12 mb-10 md:mb-0">
//         <p className="text-lg font-medium text-gray-700 mb-2">Classic</p>
//         <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
//           Lean into it
//         </h1>
//         <div className="flex items-center space-x-4 mb-12">
//           <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
//             Explore
//           </button>
//           <p className="text-xl font-medium">From €2,699</p>
//           <a href="#" className="text-lg text-black hover:underline flex items-center">
//             Book a free test ride
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 ml-1"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </a>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
//           <div>
//             <p className="font-semibold">Find My Bike</p>
//             <p>Theft Detection</p>
//           </div>
//           <div>
//             <p className="font-semibold">Custom AdaptivePower™</p>
//             <p>Automatic assistance</p>
//           </div>
//           <div>
//             <p className="font-semibold">Servicing Nearby</p>
//             <p>200+ stores</p>
//           </div>
//         </div>
//       </div>

//       {/* Image right */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img
//           src={LeanInto}
//           alt="Cowboy Bike"
//           className="max-h-[700px] w-auto object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default ProductShowcase;


















import React from "react";
import LeanInto from "../assets/LeanInto.png";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-[#f9f9f7] to-[#e9ecef] items-center md:items-stretch justify-between px-6 py-16">
      {/* Content left */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-12 mb-10 md:mb-0">
        <p className="text-lg font-medium text-gray-700 mb-2">Classic</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Lean into it
        </h1>
        <div className="flex items-center space-x-4 mb-12">
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
            Explore
          </button>
          <p className="text-xl font-medium">From €2,699</p>
          <a href="#" className="text-lg text-black hover:underline flex items-center">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
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
      </div>

      {/* Image right */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={LeanInto}
          alt="Cowboy Bike"
          className="max-h-[700px] w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
