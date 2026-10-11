import React from 'react';

export function TickerBar({ text }) {
  const defaultItems = [
    "SURYANSHU DHAKAD",
    "FULL-STACK DEVELOPER",
    "REACT.JS & NODE.JS",
    "FARM2HOME MERN",
    "SAFEPATH WEATHER ROUTING",
    "CORE BANKING C++",
    "BANSAL INSTITUTE CSE '28",
    "RAPID PROTOTYPING",
    "SMART INDIA HACKATHON",
    "OPEN FOR WORK 2026"
  ];

  return (
    <div className="w-full bg-[#121212] py-3.5 border-y-[3.5px] border-black overflow-hidden relative select-none">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Double list for infinite loop */}
        {[...defaultItems, ...defaultItems].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 mx-4">
            <span className="font-bubble text-base md:text-lg font-black tracking-widest text-[#FFFDF0]">
              {item}
            </span>
            <span className="text-[#F2C230] text-xl font-black">★</span>
            <span className="text-[#F27830] text-xl font-black">⚡</span>
          </div>
        ))}
      </div>
    </div>
  );
}
