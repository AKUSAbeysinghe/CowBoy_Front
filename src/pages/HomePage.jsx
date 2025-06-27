import React from "react";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Features from "../components/Features";
import ElectricBike from "../components/ElectricBike";
import Adventure from "../components/Adventure";
import France from "../components/France";
import ShockSmooth from "../components/ShockSmooth";
import WorldFirst from "../components/WorldFirst";
import MeetYourMatchSection from "../components/MeetMatch";
import WhyCowboy from "../components/WhyCowboy";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <ElectricBike />
      <Adventure />
      <France />
      <ShockSmooth />
      <WorldFirst />
      <MeetYourMatchSection />
      <WhyCowboy />
      <Footer />
    </>
  );
};

export default HomePage;
