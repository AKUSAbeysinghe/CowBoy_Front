// import React from "react";

// const Navbar = () => {
//   return (
    
//     <nav className="flex justify-between items-center px-6 py-4 border-b">
//       <div className="text-xl font-bold uppercase">Cowboy*</div>
//       <div className="space-x-6 text-sm">
//         <button className="hover:underline">Bikes</button>
//         <button className="hover:underline">Accessories</button>
//         <button className="hover:underline">Support</button>
//         <button className="hover:underline">Login</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import React from "react";
// import { ChevronDown, ShoppingBag } from "lucide-react";

// const Navbar = () => {

//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-[#f8f2e7] to-[#f4ecde] border-b border-black">
//       {/* Logo */}
//       <div className="text-2xl font-bold tracking-wider">
//         <span className="font-light">COWBOY</span><sup>*</sup>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex gap-6 text-sm font-semibold uppercase items-center text-black">
//         <div className="flex items-center gap-1 cursor-pointer hover:underline">
//           E-Bikes <ChevronDown size={14} />
//         </div>
//         <button className="hover:underline">Accessories</button>
//         <button className="hover:underline">Adaptive Power</button>
//         <button className="hover:underline">Connect</button>
//         <div className="flex items-center gap-1 cursor-pointer hover:underline">
//           Leasing <ChevronDown size={14} />
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="flex items-center gap-4">
//         <button className="text-sm font-semibold uppercase hover:underline">
//           Book a test ride
//         </button>
//         <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold uppercase">
//           Order Now
//         </button>
//         <ShoppingBag size={20} className="text-black" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white text-black p-4 flex items-center justify-between shadow-sm">
//       {/* Logo */}
//       <div className="font-bold text-2xl tracking-wide">COWBOY<sub>*</sub></div>

//       {/* Desktop Navigation (hidden on small screens) */}
//       <div className="hidden md:flex items-center space-x-8">
//         <div className="relative group">
//           <a href="#" className="hover:text-gray-700 flex items-center">
//             E-BIKES
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </a>
//           {/* Dropdown for E-BIKES (example) */}
//           <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Classic</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cross</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cross ST</a>
//           </div>
//         </div>

//         <a href="#" className="hover:text-gray-700">
//           ACCESSORIES
//         </a>
//         <a href="#" className="hover:text-gray-700">
//           ADAPTIVE POWER
//         </a>
//         <a href="#" className="hover:text-gray-700">
//           CONNECT
//         </a>
//         <div className="relative group">
//           <a href="#" className="hover:text-gray-700 flex items-center">
//             LEASING
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </a>
//           {/* Dropdown for LEASING (example) */}
//           <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leasing Option 1</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leasing Option 2</a>
//           </div>
//         </div>
//       </div>

//       {/* Actions (always visible on desktop, moved to mobile menu on small screens) */}
//       <div className="hidden md:flex items-center space-x-4">
//         <a href="#" className="text-sm font-medium hover:text-gray-700">
//           BOOK A TEST RIDE
//         </a>
//         <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
//           ORDER NOW
//         </button>
//         <button className="p-2">
//           {/* Shopping Bag Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu Button (hamburger) */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
//         >
//           {/* Hamburger Icon */}
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isMobileMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu (initially hidden, shown when isMobileMenuOpen is true) */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-20">
//           <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">E-BIKES</a>
//           <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ACCESSORIES</a>
//           <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ADAPTIVE POWER</a>
//           <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">CONNECT</a>
//           <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">LEASING</a>
//           <hr className="my-2" />
//           <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">BOOK A TEST RIDE</a>
//           <button className="w-full mt-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
//             ORDER NOW
//           </button>
//           <button className="w-full mt-2 p-2 flex items-center justify-center">
//             {/* Shopping Bag Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//               />
//             </svg>
//             <span className="text-gray-800">Bag</span>
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// last best one
// import React, { useState } from "react";

// const Navbar = ({ onNavLinkClick, activeSection }) => { // Added props
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleNavLinkClick = (sectionName) => {
//     onNavLinkClick(sectionName); // Call the parent's function
//     setIsMobileMenuOpen(false); // Close mobile menu on click
//   };

//   return (
//     <nav className="bg-white text-black p-4 flex items-center justify-between shadow-sm sticky top-0 z-50"> {/* Added sticky and z-50 */}
//       {/* Logo */}
//       <div className="font-bold text-2xl tracking-wide">COWBOY.</div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center space-x-8">
//         <div className="relative group">
//           <a
//             href="#"
//             onClick={() => handleNavLinkClick("E-BIKES_Showcase")} // Specific action for E-BIKES
//             className={`hover:text-gray-700 flex items-center ${
//               activeSection === "E-BIKES_Showcase" ? "font-semibold text-black border-b-2 border-black" : ""
//             }`}
//           >
//             E-BIKES
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </a>
//           {/* Dropdown for E-BIKES (example) - these will trigger specific bike views if you want */}
//           <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleNavLinkClick("Classic")}>Classic</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleNavLinkClick("Cruiser")}>Cruiser</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleNavLinkClick("Cruiser ST")}>Cruiser ST</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleNavLinkClick("Cross")}>Cross</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleNavLinkClick("Cross ST")}>Cross ST</a>
//           </div>
//         </div>

//         {/* Other Nav Links */}
//         <a href="#" onClick={() => handleNavLinkClick("ACCESSORIES")} className={`hover:text-gray-700 ${activeSection === "ACCESSORIES" ? "font-semibold text-black border-b-2 border-black" : ""}`}>
//           ACCESSORIES
//         </a>
//         <a href="#" onClick={() => handleNavLinkClick("ADAPTIVE POWER")} className={`hover:text-gray-700 ${activeSection === "ADAPTIVE POWER" ? "font-semibold text-black border-b-2 border-black" : ""}`}>
//           ADAPTIVE POWER
//         </a>
//         <a href="#" onClick={() => handleNavLinkClick("CONNECT")} className={`hover:text-gray-700 ${activeSection === "CONNECT" ? "font-semibold text-black border-b-2 border-black" : ""}`}>
//           CONNECT
//         </a>
//         <div className="relative group">
//           <a
//             href="#"
//             onClick={() => handleNavLinkClick("LEASING")}
//             className={`hover:text-gray-700 flex items-center ${activeSection === "LEASING" ? "font-semibold text-black border-b-2 border-black" : ""}`}
//           >
//             LEASING
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </a>
//           {/* Dropdown for LEASING (example) */}
//           <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleNavLinkClick("Leasing Option 1")}>Leasing Option 1</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleNavLinkClick("Leasing Option 2")}>Leasing Option 2</a>
//           </div>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="hidden md:flex items-center space-x-4">
//         <a href="#" onClick={() => handleNavLinkClick("BOOK A TEST RIDE")} className="text-sm font-medium hover:text-gray-700">
//           BOOK A TEST RIDE
//         </a>
//         <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
//           ORDER NOW
//         </button>
//         <button className="p-2">
//           {/* Shopping Bag Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu Button (hamburger) */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
//         >
//           {/* Hamburger Icon */}
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isMobileMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-20">
//           <a href="#" onClick={() => handleNavLinkClick("E-BIKES_Showcase")} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">E-BIKES</a>
//           <a href="#" onClick={() => handleNavLinkClick("ACCESSORIES")} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ACCESSORIES</a>
//           <a href="#" onClick={() => handleNavLinkClick("ADAPTIVE POWER")} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ADAPTIVE POWER</a>
//           <a href="#" onClick={() => handleNavLinkClick("CONNECT")} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">CONNECT</a>
//           <a href="#" onClick={() => handleNavLinkClick("LEASING")} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">LEASING</a>
//           <hr className="my-2" />
//           <a href="#" onClick={() => handleNavLinkClick("BOOK A TEST RIDE")} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">BOOK A TEST RIDE</a>
//           <button className="w-full mt-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
//             ORDER NOW
//           </button>
//           <button className="w-full mt-2 p-2 flex items-center justify-center">
//             {/* Shopping Bag Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//               />
//             </svg>
//             <span className="text-gray-800">Bag</span>
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






//router fixed one


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleNavLinkClick = (path) => {
//     navigate(path);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white text-black p-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
//       <div className="font-bold text-2xl tracking-wide">COWBOY.</div>

//       <div className="hidden md:flex items-center space-x-8">
//         <button onClick={() => handleNavLinkClick("/ebikes")} className="hover:text-gray-700">E-BIKES</button>
//         <button onClick={() => handleNavLinkClick("/accessories")} className="hover:text-gray-700">ACCESSORIES</button>
//         <button onClick={() => handleNavLinkClick("/adaptive-power")} className="hover:text-gray-700">ADAPTIVE POWER</button>
//         <button onClick={() => handleNavLinkClick("/connect")} className="hover:text-gray-700">CONNECT</button>
//         <button onClick={() => handleNavLinkClick("/leasing")} className="hover:text-gray-700">LEASING</button>
//       </div>

//       <div className="hidden md:flex items-center space-x-4">
//         <button onClick={() => handleNavLinkClick("/test-ride")} className="text-sm font-medium hover:text-gray-700">
//           BOOK A TEST RIDE
//         </button>
//         <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800">
//           ORDER NOW
//         </button>
//       </div>

//       <div className="md:hidden">
//         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isMobileMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-20">
//           <button onClick={() => handleNavLinkClick("/ebikes")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">E-BIKES</button>
//           <button onClick={() => handleNavLinkClick("/accessories")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">ACCESSORIES</button>
//           <button onClick={() => handleNavLinkClick("/adaptive-power")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">ADAPTIVE POWER</button>
//           <button onClick={() => handleNavLinkClick("/connect")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">CONNECT</button>
//           <button onClick={() => handleNavLinkClick("/leasing")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">LEASING</button>
//           <hr className="my-2" />
//           <button onClick={() => handleNavLinkClick("/test-ride")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">BOOK A TEST RIDE</button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
      {/* Logo clickable */}
      <div
        onClick={() => navigate("/")}
        className="font-bold text-2xl tracking-wide cursor-pointer"
      >
        COWBOY<sub>*</sub>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <button onClick={() => handleNavLinkClick("/ebikes")} className="hover:text-gray-700">E-BIKES</button>
        <button onClick={() => handleNavLinkClick("/accessories")} className="hover:text-gray-700">ACCESSORIES</button>
        <button onClick={() => handleNavLinkClick("/adaptive-power")} className="hover:text-gray-700">ADAPTIVE POWER</button>
        <button onClick={() => handleNavLinkClick("/connect")} className="hover:text-gray-700">CONNECT</button>
        <button onClick={() => handleNavLinkClick("/leasing")} className="hover:text-gray-700">LEASING</button>
      </div>

      {/* Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <button onClick={() => handleNavLinkClick("/test-ride")} className="text-sm font-medium hover:text-gray-700">
          BOOK A TEST RIDE
        </button>
        <button onClick={() => handleNavLinkClick("/ordernow")} className ="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800">
          ORDER NOW
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-20">
          <button onClick={() => handleNavLinkClick("/ebikes")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">E-BIKES</button>
          <button onClick={() => handleNavLinkClick("/accessories")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">ACCESSORIES</button>
          <button onClick={() => handleNavLinkClick("/adaptive-power")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">ADAPTIVE POWER</button>
          <button onClick={() => handleNavLinkClick("/connect")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">CONNECT</button>
          <button onClick={() => handleNavLinkClick("/leasing")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">LEASING</button>
          <hr className="my-2" />
          <button onClick={() => handleNavLinkClick("/test-ride")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">BOOK A TEST RIDE</button>
          <button onClick={() => handleNavLinkClick("/ordernow")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">ORDER NOW</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




// import React, { useState } from "react";

// const Navbar = ({ onNavLinkClick, activeSection }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleNavLinkClick = (sectionId) => {
//     onNavLinkClick(sectionId);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white text-black p-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
//       {/* Logo */}
//       <div className="font-bold text-2xl tracking-wide">COWBOY.</div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center space-x-8">
//         <a
//           href="#"
//           onClick={() => handleNavLinkClick("e-bikes")}
//           className={`hover:text-gray-700 ${
//             activeSection === "e-bikes" ? "font-semibold text-black border-b-2 border-black" : ""
//           }`}
//         >
//           E-BIKES
//         </a>

//         <a
//           href="#"
//           onClick={() => handleNavLinkClick("accessories")}
//           className={`hover:text-gray-700 ${
//             activeSection === "accessories" ? "font-semibold text-black border-b-2 border-black" : ""
//           }`}
//         >
//           ACCESSORIES
//         </a>

//         <a
//           href="#"
//           onClick={() => handleNavLinkClick("adaptive-power")}
//           className={`hover:text-gray-700 ${
//             activeSection === "adaptive-power" ? "font-semibold text-black border-b-2 border-black" : ""
//           }`}
//         >
//           ADAPTIVE POWER
//         </a>

//         <a
//           href="#"
//           onClick={() => handleNavLinkClick("connect")}
//           className={`hover:text-gray-700 ${
//             activeSection === "connect" ? "font-semibold text-black border-b-2 border-black" : ""
//           }`}
//         >
//           CONNECT
//         </a>

//         <a
//           href="#"
//           onClick={() => handleNavLinkClick("Leasing")}
//           className={`hover:text-gray-700 ${
//             activeSection === "leasing" ? "font-semibold text-black border-b-2 border-black" : ""
//           }`}
//         >
//           LEASING
//         </a>
//       </div>

//       {/* Actions */}
//       <div className="hidden md:flex items-center space-x-4">
//         <a
//           href="#"
//           onClick={() => handleNavLinkClick("book-test-ride")}
//           className="text-sm font-medium hover:text-gray-700"
//         >
//           BOOK A TEST RIDE
//         </a>

//         <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
//           ORDER NOW
//         </button>

//         <button className="p-2">
//           {/* Shopping Bag Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
//         >
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isMobileMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-20">
//           <a
//             href="#"
//             onClick={() => handleNavLinkClick("e-bikes")}
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//           >
//             E-BIKES
//           </a>
//           <a
//             href="#"
//             onClick={() => handleNavLinkClick("accessories")}
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//           >
//             ACCESSORIES
//           </a>
//           <a
//             href="#"
//             onClick={() => handleNavLinkClick("adaptive-power")}
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//           >
//             ADAPTIVE POWER
//           </a>
//           <a
//             href="#"
//             onClick={() => handleNavLinkClick("connect")}
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//           >
//             CONNECT
//           </a>
//           <a
//             href="#"
//             onClick={() => handleNavLinkClick("Leasing")}
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//           >
//             LEASING
//           </a>
//           <hr className="my-2" />
//           <a
//             href="#"
//             onClick={() => handleNavLinkClick("book-test-ride")}
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//           >
//             BOOK A TEST RIDE
//           </a>
//           <button className="w-full mt-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
//             ORDER NOW
//           </button>
//           <button className="w-full mt-2 p-2 flex items-center justify-center">
//             {/* Shopping Bag Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//             </svg>
//             <span className="text-gray-800">Bag</span>
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white text-black p-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
//       <div className="font-bold text-2xl tracking-wide">COWBOY.</div>

//       {/* Desktop nav */}
//       <div className="hidden md:flex items-center space-x-8">
//         {/* <Link to="/" className="hover:text-gray-700">E-BIKES</Link> */}
//         <Link to="/Bike-Thumbnails" className="hover:text-gray-700">E-BIKES</Link>
//         <Link to="/accessories" className="hover:text-gray-700">ACCESSORIES</Link>
//         <Link to="/adaptive-power" className="hover:text-gray-700">ADAPTIVE POWER</Link>
//         <Link to="/connect" className="hover:text-gray-700">CONNECT</Link>
//         <Link to="/leasing" className="hover:text-gray-700">LEASING</Link>
//         <Link to="/book-test-ride" className="hover:text-gray-700">BOOK A TEST RIDE</Link>
//       </div>

//       {/* Order button */}
//       <div className="hidden md:flex items-center space-x-4">
//         <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
//           ORDER NOW
//         </button>
//       </div>

//       {/* Mobile menu button */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="p-2"
//         >
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isMobileMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

      {/* {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-20">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">E-BIKES</Link>
          <Link to="/accessories" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ACCESSORIES</Link>
          <Link to="/adaptive-power" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ADAPTIVE POWER</Link>
          <Link to="/connect" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">CONNECT</Link>
          <Link to="/leasing" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">LEASING</Link>
          <Link to="/book-test-ride" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">BOOK A TEST RIDE</Link>
        </div>
      )} */}
//     </nav>
//   );
// };

// export default Navbar;
