'use client';

import React from 'react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/213553265760"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 end-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-115 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 overflow-hidden group"
      aria-label="Contact via WhatsApp"
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <svg 
        viewBox="0 0 448 512" 
        className="h-8 w-8 fill-current drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-100.2 0-104.8 85.3-190.2 190.4-190.2 50.8 0 98.5 19.8 134.4 55.6s55.8 83.7 55.8 134.6c-.1 104.8-85.4 190.3-190.4 190.3zM343.8 281.8c-6.5-3.3-38.2-18.8-44.1-20.9-5.9-2.1-10.3-3.2-14.7 3.3-4.4 6.5-16.9 20.9-20.8 25.1-3.8 4.3-7.7 4.8-14.2 1.5-6.5-3.3-27.4-10.1-52.2-32.2-19.3-17.2-32.3-38.5-36.1-45-3.8-6.5-.4-10.1 2.9-13.3 3-2.9 6.5-7.7 9.8-11.4 3.3-3.8 4.4-6.5 6.5-10.9 2.2-4.4 1.1-8.2-.5-11.4-1.6-3.3-14.7-35.4-20.2-48.4-5.3-12.7-10.7-10.9-14.7-11.1-3.8-.2-8.1-.2-12.5-.2-4.4 0-11.5 1.6-17.5 8.1-6.1 6.5-23.2 22.7-23.2 55.3s23.7 64.1 27 68.4c3.3 4.3 46.7 71.3 113.2 100 15.8 6.8 28.1 10.9 37.7 13.9 15.9 5.1 30.4 4.3 41.9 2.6 12.8-1.9 38.2-15.5 43.6-30.5 5.5-15 5.5-27.8 3.9-30.5-1.7-2.7-6.2-4.4-12.7-7.7z" />
      </svg>
    </a>
  );
};
