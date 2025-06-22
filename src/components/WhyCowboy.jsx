import React from 'react';
import { Headset, SatelliteDish, ShieldCheck, PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const WhyCowboy = () => {
  return (
    <section className="bg-zinc-900 text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header and Navigation */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-gray-400 text-sm mb-2">Why Cowboy?</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">We've got your back</h2>
          </div>
          <div className="flex space-x-4">
            <button className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-white transition">
              <ChevronLeft size={24} />
            </button>
            <button className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-white transition">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Service Locations */}
          <div className="bg-zinc-800 p-8 rounded-lg flex flex-col justify-between relative group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="absolute top-8 left-8">
              <Headset size={32} className="text-white" />
            </div>
            <div className="mt-16 mb-4">
              <h3 className="text-xl font-semibold mb-2">200+ service locations</h3>
              <p className="text-gray-400 text-sm">Expert repairs nearby. Or right at your door.</p>
            </div>
            <div className="self-end mt-auto">
              <PlusCircle size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Card 2: Theft Detection */}
          <div className="bg-zinc-800 p-8 rounded-lg flex flex-col justify-between relative group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="absolute top-8 left-8">
              <SatelliteDish size={32} className="text-white" />
            </div>
            <div className="mt-16 mb-4">
              <h3 className="text-xl font-semibold mb-2">Pioneering theft detection</h3>
              <p className="text-gray-400 text-sm">Outsmart thieves with GPS tracking & theft alerts.</p>
            </div>
            <div className="self-end mt-auto">
              <PlusCircle size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Card 3: 2-year warranty */}
          <div className="bg-zinc-800 p-8 rounded-lg flex flex-col justify-between relative group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="absolute top-8 left-8">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <div className="mt-16 mb-4">
              <h3 className="text-xl font-semibold mb-2">2-year warranty</h3>
              <p className="text-gray-400 text-sm">Covered where it counts. Complete peace of mind.</p>
            </div>
            <div className="self-end mt-auto">
              <PlusCircle size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Note: If there's a fourth card, you'd add it here following the same structure. */}
        </div>
      </div>
    </section>
  );
};

export default WhyCowboy;