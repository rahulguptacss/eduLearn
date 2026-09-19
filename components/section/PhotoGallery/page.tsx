"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaImage } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function PhotoGallery({ data }: { data: any }) {
  const [activePhotoFilter, setActivePhotoFilter] = useState("All");

  const filteredPhotos = activePhotoFilter === "All" 
    ? data.photos 
    : data.photos.filter((p: any) => p.category === activePhotoFilter);

  return (
    <div className="mb-10 md:mb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-[#eef5fc] rounded-full flex items-center justify-center text-[#021d38] flex-shrink-0">
            <FaImage size={32} />
          </div>
          <div>
            <h3 className="text-[26px] sm:text-[32px] font-extrabold text-[#021d38] mb-1 leading-tight tracking-tight">{data.title}</h3>
            <p className="text-[#5b6b7a] text-[14px] sm:text-[15px]">{data.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0" style={{ scrollbarWidth: 'none' }}>
          {data.filters.map((filter: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setActivePhotoFilter(filter)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-[6px] text-[14px] sm:text-[15px] font-medium transition-colors border whitespace-nowrap flex-shrink-0 ${
                activePhotoFilter === filter
                  ? "bg-[#ff5e14] text-white border-[#ff5e14]"
                  : "bg-white text-[#2a3c54] border-[#dce4ec] hover:border-[#ff5e14] hover:text-[#ff5e14]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo: any) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="rounded-[12px] overflow-hidden group cursor-pointer aspect-[4/3] relative"
            >
              <Image 
                src={photo.image} 
                alt={`Gallery Image ${photo.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-[12px]" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-10">
        <button className="px-8 py-2.5 rounded-full bg-white border border-[#1e2a47] text-[#1e2a47] font-semibold text-[15px] flex items-center gap-2 hover:bg-[#1e2a47] hover:text-white transition-colors shadow-sm">
          View More Photos <FiArrowRight size={18} className="stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
