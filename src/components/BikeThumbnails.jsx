import React from "react";
// You'll need to import your bike images here. Make sure their paths are correct.
import ClassicBikeImage from "../assets/adventure.png"; // Replace with actual paths
import CruiserBikeImage from "../assets/adventure.png";
import CruiserSTBikeImage from "../assets/adventure.png";
import CrossBikeImage from "../assets/adventure.png";
import CrossSTBikeImage from "../assets/adventure.png";

const bikes = [
  {
    name: "Classic",
    price: "€2,699",
    image: ClassicBikeImage, // Use imported image
  },
  {
    name: "Cruiser",
    price: "€2,999",
    image: CruiserBikeImage,
  },
  {
    name: "Cruiser ST",
    price: "€2,999",
    image: CruiserSTBikeImage,
  },
  {
    name: "Cross",
    price: "€3,999",
    image: CrossBikeImage,
  },
  {
    name: "Cross ST",
    price: "€3,999",
    image: CrossSTBikeImage,
  },
];

const BikeThumbnails = ({ onSelectBike }) => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Bikes</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {bikes.map((bike) => (
          <div
            key={bike.name}
            className="flex flex-col items-center cursor-pointer hover:shadow-lg transition duration-300 p-4 rounded-lg bg-white"
            onClick={() => onSelectBike(bike.name)} // Callback to select a bike
          >
            <img
              src={bike.image}
              alt={bike.name}
              className="h-32 w-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-medium">{bike.name}</h3>
            <p className="text-gray-600 mt-1 text-sm">{bike.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BikeThumbnails;