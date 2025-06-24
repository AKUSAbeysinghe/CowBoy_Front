import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Features from "./components/Features";
import ElectricBike from "./components/ElectricBike";
import Adventure from "./components/Adventure";
import France from "./components/France";
import ShockSmooth from "./components/ShockSmooth";
import WorldFirst from "./components/WorldFirst";
import MeetYourMatchSection from "./components/MeetMatch";
import Footer from "./components/Footer";
import WhyCowboy from "./components/WhyCowboy";
import BikeThumbnails from "./components/BikeThumbnails";
// import Header from "./components/Header";


function App() {
  return (
    <div className="bg-white text-black font-sans">
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <ElectricBike/>
      <Adventure/>
      <France/>
      <ShockSmooth/>
      <WorldFirst/>
      <MeetYourMatchSection/>
      <WhyCowboy/>
      <Footer />
      {/* <BikeThumbnails/> */}
      {/* <Header/> */}
    </div>
  );
}

export default App;





// import React, { useState } from "react";
// import Navbar from "./Navbar"; // Adjust path as needed
// import Hero from "./Hero"; // Your existing Hero component
// import BikeThumbnails from "./BikeThumbnails"; // The new component
// import ProductShowcase from "./ProductShowcase"; // Your Classic bike component
// import CrossBikeShowcase from "./CrossBikeShowcase"; // Your Cross bike component
// import CrossSTBikeShowcase from "./CrossSTBikeShowcase"; // Your Cross ST bike component
// import MoreThanBikeSection from "./MoreThanBikeSection"; // Your "More than..." component
// import WorldFirstSection from "./WorldFirstSection"; // Your "World first" component
// import DesignedInFranceSection from "./DesignedInFranceSection"; // Your "Designed in France" component
// import Features from "./Features"; // Your "Cruiser ST - Rise and share" component (renamed from Features to avoid confusion)
// import MeetYourMatchSection from "./MeetYourMatchSection"; // Your "Meet your Match" component



// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ProductShowcase from "./components/ProductShowcase";
// import Features from "./components/Features";
// import ElectricBike from "./components/ElectricBike";
// import Adventure from "./components/Adventure";
// import France from "./components/France";
// import ShockSmooth from "./components/ShockSmooth";
// import WorldFirst from "./components/WorldFirst";
// import MeetYourMatchSection from "./components/MeetMatch";
// import Footer from "./components/Footer";
// import WhyCowboy from "./components/WhyCowboy";
// import BikeThumbnails from "./components/BikeThumbnails";
// // import Header from "./components/Header";

// const HomePage = () => {
//   // State to track the currently active section for display
//   const [activeContent, setActiveContent] = useState("Hero"); // Default to Hero section

//   // Function to change the active content
//   const handleNavLinkClick = (sectionName) => {
//     setActiveContent(sectionName);
//   };

//   // Function to render content based on activeContent state
//   const renderContent = () => {
//     switch (activeContent) {
//       case "E-BIKES_Showcase": // This will show the row of all bikes
//         return <BikeThumbnails onSelectBike={handleNavLinkClick} />; // Pass function to select individual bike
//       case "Classic":
//         return <ProductShowcase />; // Your original Classic component
//       case "Cruiser":
//         return <Hero />; // Assuming Hero now represents Cruiser (adjust as needed)
//       case "Cruiser ST":
//         return <Features />; // Your Cruiser ST component, was named Features
//       case "Cross":
//         return <CrossBikeShowcase />;
//       case "Cross ST":
//         return <CrossSTBikeShowcase />;
//       case "Hero": // Initial landing page content
//       default: // Default case for any other section, or if no specific bike is selected
//         return (
//           <>
//             <Navbar />
//       <Hero />
//       <Features />
//       <ProductShowcase />
//       <ElectricBike/>
//        <Adventure/>
//       <France/>
//       <ShockSmooth/>
//      <WorldFirst/>
//      <MeetYourMatchSection/>
//        <WhyCowboy/>
//        <Footer />
//       <BikeThumbnails/>
//       <Header/>
//           </>
//         );
//     }
//   };

//   return (
//     <div>
//       <Navbar onNavLinkClick={handleNavLinkClick} activeSection={activeContent} />
//       <main>
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default HomePage;