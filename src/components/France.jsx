// import React from "react";
// import France from "../assets/france.png";

// const DesignedInFranceSection = () => {
//   return (
//     <section className="relative h-screen flex items-center bg-cover bg-center text-white px-6 py-20"
//       style={France}> {/* Use background image */}
//       {/* Optional: Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black opacity-30"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-xl text-left pl-4 md:pl-10"> {/* Adjusted padding for left alignment */}
//         <p className="text-lg font-medium mb-2">Designed in Belgium</p>
//         <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
//           Now assembled in France
//         </h1>
//         <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
//           Learn more
//         </button>
//       </div>

//       {/* Optional: Small bottom-right icon if needed from original image */}
//       {/* <div className="absolute bottom-6 right-6">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-70" fill="currentColor" viewBox="0 0 24 24">
//           <circle cx="12" cy="12" r="10" />
//         </svg>
//       </div> */}
//     </section>
//   );
// };

// export default DesignedInFranceSection;




// import React from "react";
// import France from "../assets/france.png";
// import { motion } from "framer-motion";

// const DesignedInFranceSection = () => {
//   return (
//     <section
//       className="relative h-screen flex items-center bg-cover bg-center text-white px-6 py-20"
//       style={{ backgroundImage: `url(${France})` }}  // <-- fix here
//     >
//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black opacity-30"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-xl text-left pl-4 md:pl-10">
//         <p className="text-lg font-medium mb-2">Designed in Belgium</p>
//         <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
//           Now assembled in France
//         </h1>
//         <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
//           Learn more
//         </button>
//       </div>
//     </section>
//   );
// };

// export default DesignedInFranceSection;




import React from "react";
import France from "../assets/france.png";
import { motion } from "framer-motion";

const DesignedInFranceSection = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center text-white px-6 py-20"
      style={{ backgroundImage: `url(${France})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content with animations */}
      <motion.div
        className="relative z-10 max-w-xl text-left pl-4 md:pl-10"
        initial={{ opacity: 0, y: 50 }}  // start invisible + below
        whileInView={{ opacity: 1, y: 0 }}  // animate to visible + position
        viewport={{ once: true, amount: 0.5 }}  // trigger once when 50% in view
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-lg font-medium mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Designed in Belgium
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Now assembled in France
        </motion.h1>

        <motion.button
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Learn more
        </motion.button>
      </motion.div>
    </section>
  );
};

export default DesignedInFranceSection;

