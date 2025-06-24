// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white px-6 py-10 mt-16">
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
//         <p>&copy; {new Date().getFullYear()} Cowboy. All rights reserved.</p>
//         <div className="space-x-4 mt-4 md:mt-0">
//           <a href="#" className="hover:underline">Privacy</a>
//           <a href="#" className="hover:underline">Terms</a>
//           <a href="#" className="hover:underline">Contact</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React from "react";
// import certifiedLogo from "../assets/certified.png";
// import mg from "../assets/mg.png";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white px-6 py-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
//         {/* Explore */}
//         <div className="col-span-1">
//           <h3 className="font-semibold mb-3">Explore</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Classic</li>
//             <li>Cruiser</li>
//             <li>Cruiser ST</li>
//             <li>Cross</li>
//             <li>Cross ST</li>
//             <li>Circular</li>
//             <li>Accessories & parts</li>
//             <li>Book a test ride</li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div className="col-span-1">
//           <h3 className="font-semibold mb-3">Services</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Care</li>
//             <li>Theft Insurance</li>
//             <li>Payment methods</li>
//             <li>Leasing</li>
//             <li>Warranty</li>
//             <li>Business</li>
//             <li>Students</li>
//           </ul>
//         </div>

//         {/* About us */}
//         <div className="col-span-1">
//           <h3 className="font-semibold mb-3">About us</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Reviews</li>
//             <li>Press</li>
//             <li>Blog</li>
//             <li>Stores</li>
//             <li>Careers</li>
//             <li>Affiliate Program</li>
//           </ul>
//         </div>

//         {/* Help */}
//         <div className="col-span-1">
//           <h3 className="font-semibold mb-3">Help</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Contact</li>
//             <li>Support</li>
//             <li>Delivery</li>
//             <li>Returns</li>
//           </ul>
//         </div>

//         {/* Stay in the loop */}
//         <div className="col-span-2 text-gray-300 space-y-4">
//           <h3 className="text-sm font-medium">Stay in the loop</h3>

//           <div className="flex items-center border-b border-gray-400 pb-1">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
//             />
//             <button className="text-sm text-gray-300 ml-4">Subscribe</button>
//           </div>

//           <p className="text-xs text-gray-400 whitespace-nowrap">
//             By signing up, I agree with the{" "}
//             <a href="#" className="underline text-gray-300">
//               data protection policy
//             </a>{" "}
//             of Cowboy.
//           </p>

//           <div className="flex space-x-4">
//             {/* Instagram SVG */}
//             <a href="#" aria-label="Instagram">
//               <svg
//                 className="w-6 h-6 text-white hover:text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//               </svg>
//             </a>
//             {/* Facebook SVG */}
//             <a href="#" aria-label="Facebook">
//               <svg
//                 className="w-6 h-6 text-white hover:text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
//               </svg>
//             </a>
//             {/* YouTube SVG */}
//             <a href="#" aria-label="YouTube">
//               <svg
//                 className="w-6 h-6 text-white hover:text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//         {/* logo */}
//         <div className="flex mt-8">
//           <span className="text-4xl text-white font-bold">COWBOY<sub>*</sub></span>
//         </div>
//       </div>

//       {/* Bottom section */}
//       <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

//           {/* Left: Language Selector + Links */}
//           <div className="flex items-center flex-wrap gap-4 justify-center md:justify-start">

//             {/* Language Selector */}
//             <div className="flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w40/eu.png" // Update this URL if needed
//                 alt="EU flag"
//                 className="w-4 h-4"
//               />
//               <select className="bg-transparent text-white text-sm outline-none cursor-pointer">
//                 <option value="en">English</option>
//                 <option value="si">සිංහල (Sinhala)</option>
//                 <option value="ta">தமிழ் (Tamil)</option>
//                 <option value="fr">Français</option>
//                 <option value="de">Deutsch</option>
//                 <option value="es">Español</option>
//                 <option value="it">Italiano</option>
//                 <option value="nl">Nederlands</option>
//               </select>
//             </div>

//             {/* Footer Links */}
//             <span className="hover:underline cursor-pointer">Terms of use</span>
//             <span className="hover:underline cursor-pointer">Data protection policy</span>
//             <span>© 2025 Cowboy</span>
//           </div>

//           {/* Center Right: Reviews */}
//           <div className="flex items-center gap-2">
//             <span className="text-white text-sm">★★★★★</span>
//             <span>Based on 6,117 reviews</span>
//           </div>

//           {/* Right: Certification Badges */}
//           <div className="flex items-center justify-end gap-2">
//             <img
//               src={certifiedLogo}
//               alt="Certified B Corporation"
//               className="h-16 w-auto object-contain"
//             />
//             <img
//               src={mg}
//               alt="Certified B Corporation"
//               className="h-16 w-auto object-contain"
//             />
//             {/* You can add more badges here if needed */}
//           </div>
          
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import certifiedLogo from "../assets/certified.png";
import mg from "../assets/mg.png";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Subscription successful!");
        },
        (error) => {
          console.log(error.text);
          alert("Subscription failed. Please try again.");
        }
      );
  };

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
        {/* Explore */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Classic</li>
            <li>Cruiser</li>
            <li>Cruiser ST</li>
            <li>Cross</li>
            <li>Cross ST</li>
            <li>Circular</li>
            <li>Accessories & parts</li>
            <li>Book a test ride</li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Care</li>
            <li>Theft Insurance</li>
            <li>Payment methods</li>
            <li>Leasing</li>
            <li>Warranty</li>
            <li>Business</li>
            <li>Students</li>
          </ul>
        </div>

        {/* About us */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">About us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Reviews</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Stores</li>
            <li>Careers</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        {/* Help */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Contact</li>
            <li>Support</li>
            <li>Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Stay in the loop */}
        <div className="col-span-2 text-gray-300 space-y-4">
          <h3 className="text-sm font-medium">Stay in the loop</h3>

          <form ref={form} onSubmit={sendEmail}>
            <div className="flex items-center border-b border-gray-400 pb-1">
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                required
              />
              <button
                type="submit"
                className="text-sm text-gray-300 ml-4 hover:text-white"
              >
                Subscribe
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-400 whitespace-nowrap">
            By signing up, I agree with the{" "}
            <a href="#" className="underline text-gray-300">
              data protection policy
            </a>{" "}
            of Cowboy.
          </p>

          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram">
              {/* Instagram SVG */}
              <svg
                className="w-6 h-6 text-white hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              {/* Facebook SVG */}
              <svg
                className="w-6 h-6 text-white hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              {/* YouTube SVG */}
              <svg
                className="w-6 h-6 text-white hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* logo */}
        <div className="flex mt-8">
          <span className="text-4xl text-white font-bold">
            COWBOY<sub>*</sub>
          </span>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w40/eu.png"
                alt="EU flag"
                className="w-4 h-4"
              />
              <select className="bg-transparent text-white text-sm outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="si">සිංහල (Sinhala)</option>
                <option value="ta">தமிழ் (Tamil)</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
                <option value="it">Italiano</option>
                <option value="nl">Nederlands</option>
              </select>
            </div>
            <span className="hover:underline cursor-pointer">Terms of use</span>
            <span className="hover:underline cursor-pointer">Data protection policy</span>
            <span>© 2025 Cowboy</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white text-sm">★★★★★</span>
            <span>Based on 6,117 reviews</span>
          </div>

          <div className="flex items-center justify-end gap-2">
            <img
              src={certifiedLogo}
              alt="Certified B Corporation"
              className="h-16 w-auto object-contain"
            />
            <img
              src={mg}
              alt="Certified B Corporation"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
