import React from "react";
// Import placeholder images for accessories
import QuadLockUniversalAdapterImg from "../assets/part1.png"; // Replace with actual path
import QuadLockPhoneMountImg from "../assets/part2.png"; // Replace with actual path
import KryptoniteULockImg from "../assets/part3.png"; // Replace with actual path
import pic1 from "../assets/leasing1.png";

const AccessoriesAndPartsSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 text-center">
          Accessories & parts
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar: Search and Compatibility Filters */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-sm">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-6">Need help finding a part?</p>

            {/* Compatibility Filters */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                Compatibility
                <span className="ml-2 text-gray-500 cursor-pointer text-sm font-normal" title="Compatibility Information">
                  &#9432; {/* Unicode for information circle */}
                </span>
              </h3>
              <div className="flex flex-col space-y-2">
                {['Cross', 'Cross ST', 'Cruiser', 'Cruiser ST', 'Classic', 'C3', 'C2', 'C1'].map(
                  (model, index) => (
                    <label key={index} className="flex items-center text-md text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-black rounded"
                      />
                      <span className="ml-2">{model}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Content: Product Cards */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
              <img
                src={QuadLockPhoneMountImg}
                alt="Quad Lock Universal Adapter"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="text-sm text-red-500 mb-1">Temporarily out of stock</p>
              <h4 className="text-lg font-medium text-black mb-1">Quad Lock Universal Adapter</h4>
              <p className="text-md text-gray-800">€20</p>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
              <img
                src={QuadLockUniversalAdapterImg}
                alt="Quad Lock Phone Mount"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="text-sm text-red-500 mb-1">Temporarily out of stock</p>
              <h4 className="text-lg font-medium text-black mb-1">Quad Lock Phone Mount (C1, C2, C3)</h4>
              <p className="text-md text-gray-800">€30</p>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
              <img
                src={KryptoniteULockImg}
                alt="Kryptonite U-Lock"
                className="w-32 h-32 object-contain mb-4"
              />
              {/* No "out of stock" for this one based on image */}
              <h4 className="text-lg font-medium text-black mb-1">Kryptonite U-Lock</h4>
              <p className="text-md text-gray-800">€89</p>
            </div>

            {/* You would add more product cards here as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesAndPartsSection;