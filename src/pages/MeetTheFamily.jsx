// import React from "react";

// const MeetTheFamilySection = () => {
//   return (
//     <section className="bg-gray-100 py-20 px-6 flex flex-col items-center justify-center text-center">
//       <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//         Meet the family
//       </h2>
//       <p className="text-lg text-gray-700 max-w-2xl mb-10">
//         Not sure which bike is right for you?
//       </p>
//       <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
//         Take the quiz
//       </button>
//     </section>
//   );
// };

// export default MeetTheFamilySection;





// import React from "react";
// // You'll need actual images for the Cruiser and Cruiser ST bikes
// import CruiserBikeImg from "../assets/cruiser.png"; // Replace with actual path to Cruiser image
// import CruiserSTBikeImg from "../assets/cruiser-st.png"; // Replace with actual path to Cruiser ST image

// const CruiserComparisonSection = () => {
//   return (
//     <section className="bg-white py-20 px-6"> {/* Background is white in the image */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Card 1: Cruiser */}
//         <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm"> {/* Light gray background for cards */}
//           <h2 className="text-3xl font-semibold mb-2">Cruiser</h2>
//           <p className="text-lg text-gray-700 mb-6">Relaxed, upright ride position</p>
//           <img
//             src={CruiserBikeImg}
//             alt="Cowboy Cruiser Bike"
//             className="w-full max-w-sm h-auto object-contain mb-8"
//           />

//           {/* Color Options */}
//           <div className="flex space-x-2 mb-8">
//             <span className="w-6 h-6 rounded-full bg-black border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
//             <span className="w-6 h-6 rounded-full bg-[#E5DDC9] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span> {/* Approximate cream color */}
//             <span className="w-6 h-6 rounded-full bg-[#FFB5AE] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span> {/* Approximate pink color */}
//           </div>

//           <p className="text-sm text-gray-600">Optimized for riders between 170-195 cm tall</p>
//         </div>

//         {/* Card 2: Cruiser ST */}
//         <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm"> {/* Light gray background for cards */}
//           <h2 className="text-3xl font-semibold mb-2">Cruiser ST</h2>
//           <p className="text-lg text-gray-700 mb-6">Open frame and relaxed ride position</p>
//           <img
//             src={CruiserSTBikeImg}
//             alt="Cowboy Cruiser ST Bike"
//             className="w-full max-w-sm h-auto object-contain mb-8"
//           />

//           {/* Color Options */}
//           <div className="flex space-x-2 mb-8">
//             <span className="w-6 h-6 rounded-full bg-black border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
//             <span className="w-6 h-6 rounded-full bg-[#ADC4E0] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span> {/* Approximate light blue color */}
//             <span className="w-6 h-6 rounded-full bg-[#E5DDC9] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span> {/* Approximate cream color */}
//           </div>

//           <p className="text-sm text-gray-600">Optimized for riders between 165-190 cm tall</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CruiserComparisonSection;









import React from "react";
import FamilyBike from "../assets/Adventure.png"; // Update with actual path


const MeetTheFamily = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center" id="meet-the-family">
      {/* Title + Quiz Button */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Meet the family
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Not sure which bike is right for you?
        </p>
        <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
          Take the quiz
        </button>
      </div>

      {/* Comparison Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Cruiser */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-3xl font-semibold mb-2">Cruiser</h3>
          <p className="text-lg text-gray-700 mb-6">Relaxed, upright ride position</p>
          <img
            src={FamilyBike}
            alt="Cowboy Cruiser Bike"
            className="w-full max-w-sm h-auto object-contain mb-8"
          />
          <div className="flex space-x-2 mb-8">
            <span className="w-6 h-6 rounded-full bg-black border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#E5DDC9] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#FFB5AE] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
          </div>
          <p className="text-sm text-gray-600">Optimized for riders between 170-195 cm tall</p>
        </div>

        {/* Cruiser ST */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-3xl font-semibold mb-2">Cruiser ST</h3>
          <p className="text-lg text-gray-700 mb-6">Open frame and relaxed ride position</p>
          <img
            src={FamilyBike}
            alt="Cowboy Cruiser ST Bike"
            className="w-full max-w-sm h-auto object-contain mb-8"
          />
          <div className="flex space-x-2 mb-8">
            <span className="w-6 h-6 rounded-full bg-black border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#ADC4E0] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#E5DDC9] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
          </div>
          <p className="text-sm text-gray-600">Optimized for riders between 165-190 cm tall</p>
        </div>
      </div>

      <br></br>
      {/* Comparison Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Cruiser */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-3xl font-semibold mb-2">Cruiser</h3>
          <p className="text-lg text-gray-700 mb-6">Relaxed, upright ride position</p>
          <img
            src={FamilyBike}
            alt="Cowboy Cruiser Bike"
            className="w-full max-w-sm h-auto object-contain mb-8"
          />
          <div className="flex space-x-2 mb-8">
            <span className="w-6 h-6 rounded-full bg-black border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#E5DDC9] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#FFB5AE] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
          </div>
          <p className="text-sm text-gray-600">Optimized for riders between 170-195 cm tall</p>
        </div>

        {/* Cruiser ST */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-3xl font-semibold mb-2">Cruiser ST</h3>
          <p className="text-lg text-gray-700 mb-6">Open frame and relaxed ride position</p>
          <img
            src={FamilyBike}
            alt="Cowboy Cruiser ST Bike"
            className="w-full max-w-sm h-auto object-contain mb-8"
          />
          <div className="flex space-x-2 mb-8">
            <span className="w-6 h-6 rounded-full bg-black border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#ADC4E0] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#E5DDC9] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
          </div>
          <p className="text-sm text-gray-600">Optimized for riders between 165-190 cm tall</p>
        </div>
        </div>



<br></br>
      {/* Comparison Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Cruiser */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-3xl font-semibold mb-2">Cruiser</h3>
          <p className="text-lg text-gray-700 mb-6">Relaxed, upright ride position</p>
          <img
            src={FamilyBike}
            alt="Cowboy Cruiser Bike"
            className="w-full max-w-sm h-auto object-contain mb-8"
          />
          <div className="flex space-x-2 mb-8">
            <span className="w-6 h-6 rounded-full bg-black border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#E5DDC9] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#FFB5AE] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
          </div>
          <p className="text-sm text-gray-600">Optimized for riders between 170-195 cm tall</p>
        </div>

        {/* Cruiser ST */}
        {/* <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"> */}
          {/* <h3 className="text-3xl font-semibold mb-2">Cruiser ST</h3>
          <p className="text-lg text-gray-700 mb-6">Open frame and relaxed ride position</p>
          <img
            src={Logo}
            alt="Cowboy Cruiser ST Bike"
            className="w-full max-w-sm h-auto object-contain mb-8"
          />
          <div className="flex space-x-2 mb-8">
            <span className="w-6 h-6 rounded-full bg-black border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#ADC4E0] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
            <span className="w-6 h-6 rounded-full bg-[#E5DDC9] border-2 border-transparent cursor-pointer hover:border-gray-500 transition"></span>
          </div>
          <p className="text-sm text-gray-600">Optimized for riders between 165-190 cm tall</p> */}
        {/* </div> */}
        </div>

       <br></br>
     {/* <section className="bg-gray-100 py-20 px-6 text-center"> */}
      <section className="bg-zinc-900 text-white py-16 px-6 sm:px-10 lg:px-20">
      {/* Title + Quiz Button */}
      {/* <div className="flex flex-col items-center mb-16"> */}
        <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Meet the family
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Not sure which Cowboy to choose? Take our quiz to find your best fit.
        </p>
        <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
          Take the quiz
        </button>
      </div>
    </section>




    

    </section>
  );
};

export default MeetTheFamily;
