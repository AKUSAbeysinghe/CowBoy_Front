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
      {/* <Header/> */}
    </div>
  );
}

export default App;
