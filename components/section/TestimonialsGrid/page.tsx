"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";



const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-[#ff5e14]" size={22} />);
  }
  
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-[#ff5e14]" size={22} />);
  }

  const remaining = 5 - Math.ceil(rating);
  for (let i = 0; i < remaining; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-[#ff5e14]" size={22} />);
  }

  return stars;
};

export default function TestimonialsGrid({ data }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  if (!data) return null;

  const itemsPerPage = 9;
  const testimonials = data.testimonials || [];
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const currentTestimonials = testimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: scroll to top of section
  };

  return (
    <section className="pt-8 md:pt-12 pb-0 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[#021d38] font-extrabold tracking-[1.5px] text-[13px] sm:text-[14px] uppercase flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <span className="w-8 h-[3px] bg-[#ff5e14] rounded-full"></span>
            {data.subtitle}
          </p>
          <h2 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold text-[#021d38] leading-[1.15] mb-5 tracking-tight">
            {data.title} <span className="text-[#ff5e14]">{data.titleHighlight}</span>
          </h2>
          <p className="text-[#5b6b7a] font-medium text-[15px] sm:text-[17px] max-w-[750px] mx-auto leading-[1.7]">
            {data.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 min-h-[500px]">
          <AnimatePresence mode="wait">
            {currentTestimonials.map((testimonial: any, idx: number) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-[16px] p-6 sm:px-8 sm:py-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#eef2f6] flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-[#ff5e14] mb-2">
                  <FaQuoteLeft size={30} />
                </div>
                
                <p className="text-[#5b6b7a] text-[13px] sm:text-[14px] leading-[1.5] mb-3">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex gap-1.5 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-[64px] h-[64px] rounded-full overflow-hidden border-[2px] border-[#ff5e14] p-[3px]">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image || "/img/default-avatar.png"} 
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#021d38] font-bold text-[18px] mb-1">{testimonial.author}</h4>
                    <p className="text-[#5b6b7a] text-[15px] font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 md:mt-10 flex items-center justify-center gap-2">
            <button 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-[8px] font-bold border flex items-center justify-center transition-colors ${
                currentPage === 1 
                  ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" 
                  : "bg-white text-[#5b6b7a] border-[#eef2f6] hover:bg-gray-50"
              }`}
            >
              <FaArrowLeft size={12} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-[8px] font-bold flex items-center justify-center transition-colors ${
                  currentPage === page 
                    ? "bg-[#ff5e14] text-white shadow-md border-transparent" 
                    : "bg-white text-[#5b6b7a] border border-[#eef2f6] hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            
            <button 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-[8px] font-bold border flex items-center justify-center transition-colors ${
                currentPage === totalPages 
                  ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" 
                  : "bg-white text-[#5b6b7a] border-[#eef2f6] hover:bg-gray-50"
              }`}
            >
              <FaArrowRight size={12} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
