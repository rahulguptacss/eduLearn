"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

export default function Events({ data }: { data: any }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const filteredEvents = activeFilter === "All"
    ? data.list
    : data.list.filter((event: any) => event.category === activeFilter);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const displayedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="pt-16 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-16 bg-[#fafbfc]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[#021d38] font-extrabold tracking-[1.5px] text-[16px] sm:text-[18px] uppercase flex items-center justify-center gap-3 mb-1 sm:mb-2">
            <span className="w-8 h-[3px] bg-[#ff5e14] rounded-full"></span>
            {data.header.subtitle}
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#021d38] leading-[1.15] mb-5 tracking-tight">
            {data.header.title} <span className="text-[#ff5e14]">{data.header.titleHighlight}</span>
          </h2>
          <p className="text-[#5b6b7a] font-medium text-[15px] sm:text-[17px] max-w-[700px] mx-auto leading-[1.7]">
            {data.header.description}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {data.filters.map((filter: string, idx: number) => (
            <button
              key={idx}
              onClick={() => handleFilterChange(filter)}
              className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[14px] sm:text-[15px] font-semibold transition-colors border shadow-sm ${
                activeFilter === filter
                  ? "bg-[#ff5e14] text-white border-[#ff5e14]"
                  : "bg-white text-[#2a3c54] border-[#e4e9ef] hover:border-[#ff5e14] hover:text-[#ff5e14]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
          <AnimatePresence mode="popLayout">
            {displayedEvents.map((event: any) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#eff2f6] group flex flex-col hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#ff5e14] text-white text-[13px] font-semibold px-3.5 py-1.5 rounded-[6px] flex items-center gap-2 shadow-sm">
                    <FaCalendarAlt /> {event.date}
                  </div>
                </div>
                
                <div className="p-6 sm:p-7 flex-grow flex flex-col">
                  <h4 className="text-[18px] font-bold text-[#021d38] mb-3 leading-[1.4] group-hover:text-[#ff5e14] transition-colors line-clamp-2">
                    {event.title}
                  </h4>
                  <p className="text-[#5b6b7a] text-[15px] mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-[#f0f3f6] pt-4 mt-auto">
                    <div className="flex items-center gap-1.5 text-[#5b6b7a] font-medium text-[14px]">
                      <FaMapMarkerAlt className="text-[#2563eb]" /> {event.location}
                    </div>
                    <Link href={`/events/${event.id}`} className="bg-[#ff5e14] hover:bg-[#e04f0d] text-white px-4 py-2 rounded-[6px] flex items-center gap-2 text-[14px] font-semibold transition-colors">
                      Go To Event <FiArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination (Static UI matching screenshot style, made somewhat functional) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 rounded-[6px] flex items-center justify-center text-[15px] font-bold border transition-colors ${
                  currentPage === idx + 1
                    ? "bg-[#ff5e14] text-white border-[#ff5e14]"
                    : "bg-white text-[#2a3c54] border-[#e4e9ef] hover:border-[#ff5e14] hover:text-[#ff5e14]"
                }`}
              >
                {idx + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button 
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="w-10 h-10 rounded-[6px] bg-white text-[#2a3c54] border border-[#e4e9ef] flex items-center justify-center hover:border-[#ff5e14] hover:text-[#ff5e14] transition-colors"
              >
                <FaChevronRight size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
