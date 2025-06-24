import React from "react";
// You'll need specific images for "For employees" and "For employers" cards
import EmployeesLeasingImage from "../assets/leasing-employees.jpg"; // Replace with actual paths
import EmployersLeasingImage from "../assets/leasing-employers.jpg"; // Replace with actual paths

const LeasingSection = () => {
  return (
    <section className="w-full bg-[#f9f5ef] px-10 py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left: Text Content */}
      <div className="flex flex-col gap-6 max-w-xl text-left">
        <p className="text-lg font-medium text-gray-700 mb-2">LEASING</p> {/* Consistent styling */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8"> {/* Consistent styling */}
          Affordable monthly plans with maximum flexibility.
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          An option for every rider
        </p>
      </div>

      {/* Right: Image Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full lg:w-1/2">
        {/* Card 1: For employees */}
        <div className="relative flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-lg group">
          <img
            src={EmployeesLeasingImage} // Use imported image
            alt="Person on a bike for employee leasing"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">For employees</h3>
            <a href="#" className="text-sm underline hover:no-underline">
              Check our partners
            </a>
          </div>
        </div>

        {/* Card 2: For employers */}
        <div className="relative flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-lg group">
          <img
            src={EmployersLeasingImage} // Use imported image
            alt="Person on a bike for employer leasing"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">For employers</h3>
            <a href="#" className="text-sm underline hover:no-underline">
              Including self-employed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeasingSection;