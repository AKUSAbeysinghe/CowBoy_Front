// import React from "react";

// const TestRideSection = () => {
//   return (
//     <section className="bg-gray-100 py-20 px-6 flex flex-col items-start justify-center">
//       <div className="max-w-3xl mx-auto text-left">
//         <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//           Test Ride
//         </h2>
//         <p className="text-lg text-gray-700 max-w-xl mb-10">
//           Book a free test ride and feel the thrill of a Cowboy bike—where style, power, and connectivity come together.
//         </p>
//         {/* The image also shows a subtle line below the text, which can be added if needed */}
//         {/* <hr className="w-full border-t border-gray-300 mt-10" /> */}
//       </div>
//       {/* The small circular icon in the bottom right of the original image is likely a global chat/help button, 
//           not specific to this section, so it's not included here. */}
//     </section>
//   );
// };

// export default TestRideSection;















// import React from "react";
// // Import your bike images. Make sure these paths are correct.
// import CruiserBikeImg from "../assets/cruiser.png"; // Example path
// import CruiserSTBikeImg from "../assets/cruiser-st.png"; // Example path
// import CrossBikeImg from "../assets/cross.png"; // Example path
// import CrossSTBikeImg from "../assets/cross-st.png"; // Example path
// import ClassicBikeImg from "../assets/classic.png"; // Example path

// const SelectYourModelSection = () => {
//   return (
//     <section className="bg-gray-100 py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-semibold text-black mb-12">
//           01. Select your model
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Card 1: Cruiser */}
//           <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
//             <h3 className="text-2xl font-semibold mb-2">Cruiser</h3>
//             <p className="text-md text-gray-700 mb-6">Relaxed, upright ride position</p>
//             <img
//               src={CruiserBikeImg}
//               alt="Cowboy Cruiser Bike"
//               className="w-full max-w-sm h-auto object-contain"
//             />
//           </div>

//           {/* Card 2: Cruiser ST */}
//           <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
//             <h3 className="text-2xl font-semibold mb-2">Cruiser ST</h3>
//             <p className="text-md text-gray-700 mb-6">Open frame and relaxed ride position</p>
//             <img
//               src={CruiserSTBikeImg}
//               alt="Cowboy Cruiser ST Bike"
//               className="w-full max-w-sm h-auto object-contain"
//             />
//           </div>

//           {/* Card 3: Cross */}
//           <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
//             <h3 className="text-2xl font-semibold mb-2">Cross</h3>
//             <p className="text-md text-gray-700 mb-6">Suspension comfort and greater range</p>
//             <img
//               src={CrossBikeImg}
//               alt="Cowboy Cross Bike"
//               className="w-full max-w-sm h-auto object-contain"
//             />
//           </div>

//           {/* Card 4: Cross ST */}
//           <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
//             <h3 className="text-2xl font-semibold mb-2">Cross ST</h3>
//             <p className="text-md text-gray-700 mb-6">Open frame, suspension and greater range</p>
//             <img
//               src={CrossSTBikeImg}
//               alt="Cowboy Cross ST Bike"
//               className="w-full max-w-sm h-auto object-contain"
//             />
//           </div>

//           {/* Card 5: Classic */}
//           <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
//             <h3 className="text-2xl font-semibold mb-2">Classic</h3>
//             <p className="text-md text-gray-700 mb-6">Active, responsive ride position</p>
//             <img
//               src={ClassicBikeImg}
//               alt="Cowboy Classic Bike"
//               className="w-full max-w-sm h-auto object-contain"
//             />
//           </div>

//           {/* Card 6: "Not sure which bike is right for you?" */}
//           <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center text-center h-full">
//             <h3 className="text-2xl font-semibold mb-4">Not sure which bike is right for you?</h3>
//             <p className="text-md text-gray-700">Compare all bike models</p>
//             {/* You could add a button here if the original design implies one */}
//             {/* <button className="mt-6 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
//               Take the quiz
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SelectYourModelSection;








// import React from "react";

// const TestRideBenefitsAndFAQ = () => {
//   return (
//     <section className="bg-gray-100 py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Top Section: Benefits of Test Ride */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
//           {/* Benefit 1 */}
//           <div className="text-left">
//             <h3 className="text-xl font-semibold text-black mb-4">A personalized experience</h3>
//             <p className="text-md text-gray-700">
//               Enjoy riding your chosen Cowboy bike at your own pace, in a
//               comfortable and known environment. You choose the place and time,
//               we manage all the rest for you. For free.
//             </p>
//           </div>

//           {/* Benefit 2 */}
//           <div className="text-left">
//             <h3 className="text-xl font-semibold text-black mb-4">An in-depth walkaround</h3>
//             <p className="text-md text-gray-700">
//               You choose your model, and our expert will guide you through
//               everything you need to know about your next bike. They’ll answer
//               all your questions before you hop on and enjoy the ride.
//             </p>
//           </div>

//           {/* Benefit 3 */}
//           <div className="text-left">
//             <h3 className="text-xl font-semibold text-black mb-4">You’re in control</h3>
//             <p className="text-md text-gray-700">
//               Take the bike for a test ride, no pressure, no strings attached.
//               It’s your decision—explore every detail, enjoy the experience, and
//               take your time to decide when you’re ready.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Section: FAQ Prompt */}
//         <div className="flex flex-col md:flex-row items-end justify-between border-t border-gray-300 pt-12">
//           <div className="text-left mb-8 md:mb-0 max-w-2xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
//               Still hesitating? Here are some frequently asked
//               questions about the test ride and how it works.
//             </h2>
//           </div>
//           <div className="flex-shrink-0">
//             {/* "FAQ" text with "Qo" stylized as in the image */}
//             <span className="text-7xl md:text-8xl font-bold text-black leading-none">
//               FAQ<span className="font-normal relative top-[-0.2em] right-[-0.1em]">o</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestRideBenefitsAndFAQ;





// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react"; // Or another icon library for plus/minus

// const faqItems = [
//   {
//     question: "How long is a test ride?",
//     answer: "A test ride typically lasts around 30-45 minutes, giving you ample time to experience the bike's features and performance on various terrains."
//   },
//   {
//     question: "Is there any commitment required for the test ride appointment?",
//     answer: "No, there's absolutely no commitment or obligation to purchase after your test ride. It's completely free and designed for you to simply experience the Cowboy bike."
//   },
//   {
//     question: "Can I cancel or reschedule my test ride?",
//     answer: "Yes, you can easily cancel or reschedule your test ride through the link in your confirmation email or by contacting our support team directly. We kindly ask for at least 24 hours notice if possible."
//   },
//   {
//     question: "Can I test multiple models at once?",
//     answer: "It depends on availability at your chosen location. We recommend booking separate appointments if you wish to try different models to ensure dedicated time for each, or you can inquire directly with the test ride location."
//   },
//   {
//     question: "How much does a test ride cost?",
//     answer: "Test rides are completely free of charge. We believe the best way to understand the Cowboy experience is to try it yourself."
//   },
//   {
//     question: "What if I damage the bike during the test ride?",
//     answer: "Minor wear and tear is expected. For significant damage, our team will assess the situation on a case-by-case basis. We encourage careful riding to ensure a safe experience for everyone."
//   },
//   {
//     question: "What if there are no test ride options near me?",
//     answer: "We are continuously expanding our test ride locations. Please check our website regularly for updates, or contact us to inquire about alternative arrangements or virtual demonstrations."
//   }
// ];

// const TestRideFAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ item is open

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index); // Toggle open/close
//   };

//   return (
//     <section className="bg-gray-100 py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* FAQ Items */}
//         <div className="border-t border-gray-300">
//           {faqItems.map((item, index) => (
//             <div key={index} className="border-b border-gray-300">
//               <button
//                 className="flex justify-between items-center w-full py-6 text-xl font-medium text-black hover:text-gray-700 transition duration-200"
//                 onClick={() => handleToggle(index)}
//               >
//                 {item.question}
//                 {openIndex === index ? (
//                   <ChevronUp size={24} className="text-gray-700" />
//                 ) : (
//                   <ChevronDown size={24} className="text-gray-700" />
//                 )}
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="text-md text-gray-700">
//                   {item.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestRideFAQSection;












import React, { useState } from "react";
import bike from "../assets/Adventure.png";
import pic1 from '../assets/pic1.png';
import pic2 from "../assets/pic2.png";


import { ChevronDown, ChevronUp } from "lucide-react"; // or use any icon library you prefer

const faqItems = [
  {
    question: "How long is a test ride?",
    answer:
      "A test ride typically lasts around 30-45 minutes, giving you ample time to experience the bike's features and performance on various terrains.",
  },
  {
    question: "Is there any commitment required for the test ride appointment?",
    answer:
      "No, there's absolutely no commitment or obligation to purchase after your test ride. It's completely free and designed for you to simply experience the Cowboy bike.",
  },
  {
    question: "Can I cancel or reschedule my test ride?",
    answer:
      "Yes, you can easily cancel or reschedule your test ride through the link in your confirmation email or by contacting our support team directly. We kindly ask for at least 24 hours notice if possible.",
  },
  {
    question: "Can I test multiple models at once?",
    answer:
      "It depends on availability at your chosen location. We recommend booking separate appointments if you wish to try different models to ensure dedicated time for each, or you can inquire directly with the test ride location.",
  },
  {
    question: "How much does a test ride cost?",
    answer:
      "Test rides are completely free of charge. We believe the best way to understand the Cowboy experience is to try it yourself.",
  },
  {
    question: "What if I damage the bike during the test ride?",
    answer:
      "Minor wear and tear is expected. For significant damage, our team will assess the situation on a case-by-case basis. We encourage careful riding to ensure a safe experience for everyone.",
  },
  {
    question: "What if there are no test ride options near me?",
    answer:
      "We are continuously expanding our test ride locations. Please check our website regularly for updates, or contact us to inquire about alternative arrangements or virtual demonstrations.",
  },
];

const TestRideSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Placeholder bike data (replace images with actual imports or URLs)
  const bikes = [
    { title: "Cruiser", desc: "Relaxed, upright ride position", bike: "https://via.placeholder.com/300x200?text=Cruiser" },
    { title: "Cruiser ST", desc: "Open frame and relaxed ride position", bike: "https://via.placeholder.com/300x200?text=Cruiser+ST" },
    { title: "Cross", desc: "Suspension comfort and greater range", bike: "https://via.placeholder.com/300x200?text=Cross" },
    { title: "Cross ST", desc: "Open frame, suspension and greater range", bike: "https://via.placeholder.com/300x200?text=Cross+ST" },
    { title: "Classic", desc: "Active, responsive ride position", bike: "https://via.placeholder.com/300x200?text=Classic" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-20" id="book-test-ride">
      {/* Intro Section */}
      <section className="max-w-3xl mx-auto mb-20 text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Test Ride</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Book a free test ride and feel the thrill of a Cowboy bike—where style, power, and connectivity come together.
        </p>
      </section>

      {/* Select Your Model Section */}
      <section className="max-w-7xl mx-auto mb-20" >
        <h2 className="text-3xl font-semibold text-black mb-12">01. Select your model</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bikes.map(({ title, desc, img }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-md text-gray-700 mb-6">{desc}</p>
              <img
                src={bike}
                alt={`Cowboy ${title} Bike`}
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>
          ))}

          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center text-center h-full">
            <h3 className="text-2xl font-semibold mb-4">
              Not sure which bike is right for you?
            </h3>
            <p className="text-md text-gray-700">Compare all bike models</p>
            {/* Uncomment below button if needed */}
            {/* <button className="mt-6 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
              Take the quiz
            </button> */}
          </div>
        </div>
      </section>


      <section>
        <div>
          <hr></hr>
           <h2 className="text-3xl font-semibold text-black mb-12">01.  Pick your location</h2>
           <hr></hr>
           
                   <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto py-16 px-6">
      {/* Left image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={pic1} // Replace with your actual image path
          alt="Indoor bike showcase"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={pic2} // Replace with your actual image path
          alt="Outdoor test ride"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
    <div></div>
    <p></p>
    <hr></hr>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <p></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-black mb-4">
              A personalized experience
            </h3>
            <p className="text-md text-gray-700">
              Enjoy riding your chosen Cowboy bike at your own pace, in a
              comfortable and known environment. You choose the place and time,
              we manage all the rest for you. For free.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-semibold text-black mb-4">
              An in-depth walkaround
            </h3>
            <p className="text-md text-gray-700">
              You choose your model, and our expert will guide you through
              everything you need to know about your next bike. They’ll answer
              all your questions before you hop on and enjoy the ride.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-semibold text-black mb-4">
              You’re in control
            </h3>
            <p className="text-md text-gray-700">
              Take the bike for a test ride, no pressure, no strings attached.
              It’s your decision—explore every detail, enjoy the experience, and
              take your time to decide when you’re ready.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        {/* FAQ Header */}
        <div className="flex flex-col md:flex-row items-end justify-between border-t border-gray-300 pt-12 mb-8">
          <div className="text-left mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Still hesitating? Here are some frequently asked
              questions about the test ride and how it works.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <span className="text-7xl md:text-8xl font-bold text-black leading-none">
              FAQ
              <span className="font-normal relative top-[-0.2em] right-[-0.1em]">
                o
              </span>
            </span>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-gray-300">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="flex justify-between items-center w-full py-6 text-xl font-medium text-black hover:text-gray-700 transition duration-200"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {item.question}
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-gray-700" />
                ) : (
                  <ChevronDown size={24} className="text-gray-700" />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-md text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestRideSection;
