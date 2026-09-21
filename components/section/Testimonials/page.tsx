"use client";

import React, { useState, useEffect } from "react";
import { TestimonialsData } from "../../types";
import { ArrowLeft, ArrowRight, Phone, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";



export default function Testimonials({ data }: { data: TestimonialsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.testimonials.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, [data.testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.testimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = data.testimonials[currentIndex];

  return (
    <section className="bg-[#f8faff] relative pt-8 lg:pt-16 pb-10 lg:pb-20 px-4 sm:px-8 lg:px-16 z-10 mt-0">
      {/* Background container with overflow-hidden to prevent horizontal scroll from background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] bg-[#eef3f9] rounded-full z-0 blur-3xl"></div>
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0e2a46 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Image & Graphics */}
        <div className="lg:w-1/2 relative w-full flex flex-col mt-4 lg:mt-0">
          
          {/* Top Section Header (TESTIMONIALS) */}
          <div className="flex items-center gap-3 mb-4 lg:mb-4 w-full z-20">
            <div className="w-3 h-3 bg-[#ff5e14]"></div>
            <span className="text-[14px] font-bold text-[#0e2a46] tracking-[1.5px] uppercase whitespace-nowrap">{data.subtitle}</span>
            <div className="flex-grow h-px bg-gray-300 ml-4"></div>
          </div>

          {/* Graphic Container */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex justify-center items-center mt-2 lg:mt-12">
            
            {/* Main Dark Blue Circular Background with Orange Slice */}
            <div 
              className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-xl"
              style={{ 
                background: 'conic-gradient(from 5deg, #0e2a46 0deg 45deg, #ff5e14 45deg 85deg, #0e2a46 85deg 360deg)' 
              }}
            ></div>

            {/* Dotted Globe pattern behind the main circle */}
            <div className="absolute w-[380px] h-[380px] lg:w-[500px] lg:h-[500px] rounded-full border border-dashed border-gray-300/60 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-dotted border-gray-300/80 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>

            {/* Main Student Image - Object contain so a cutout PNG will perfectly overlap */}
            <div className="relative z-20 w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] lg:w-[420px] lg:h-[550px] mt-4 lg:mt-12">
              <Image 
                src="/testimonails/maintestimonails-removebg.png" 
                alt="Student"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Floating Avatar 1 - Top Left */}
            <div className="absolute top-[15%] left-0 lg:left-[-30px] w-16 h-16 rounded-full border-[3px] border-white shadow-xl z-30 overflow-hidden bg-white">
              <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" fill className="object-cover" />
            </div>

            {/* Floating Avatar 2 - Middle Right */}
            <div className="absolute top-[50%] right-[-10px] lg:right-[-20px] w-14 h-14 rounded-full border-[3px] border-white shadow-xl z-30 overflow-hidden bg-white">
               <Image src="https://randomuser.me/api/portraits/men/68.jpg" alt="User" fill className="object-cover" />
            </div>

            {/* Floating Avatar 3 - Bottom Left */}
            <div className="absolute bottom-[20%] left-[10%] lg:left-[-10px] w-14 h-14 rounded-full border-[3px] border-white shadow-xl z-30 overflow-hidden bg-white">
              <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" fill className="object-cover" />
            </div>

            {/* Decorative Orange/Blue dots matrix */}
            <div className="absolute top-[45%] left-[-50px] z-20 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#ff5e14]' : 'bg-[#0e2a46]'}`}></div>
              ))}
            </div>

            {/* Orange rays (top right) */}
            <div className="absolute top-10 right-20 z-20 flex gap-2 rotate-[15deg]">
               <div className="w-1 h-5 bg-[#ff5e14] rounded-full rotate-[-30deg]"></div>
               <div className="w-1 h-6 bg-[#ff5e14] rounded-full"></div>
               <div className="w-1 h-5 bg-[#ff5e14] rounded-full rotate-[30deg]"></div>
            </div>

          </div>
        </div>

        {/* Right Column: Text & Testimonial Card */}
        <div className="lg:w-1/2 flex flex-col items-start z-10 w-full lg:pl-10">
          
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0e2a46] leading-[1.2] tracking-tight mb-3">
            {data.title} <br className="hidden lg:block" />
            {data.titleHighlight && <span className="text-[#c2410c]">{data.titleHighlight}</span>}
          </h2>
          
          {/* Orange Underline */}
          <div className="w-[72px] h-[5px] bg-[#ff5e14] rounded-full mb-5"></div>
          
          <p className="text-[#4b5563] mb-7 text-[14px] sm:text-[15px] leading-[1.6] max-w-[500px]">
            {data.description}
          </p>
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(14,42,70,0.06)] relative w-full border border-gray-100 min-h-[350px] flex flex-col">
            {/* Quote Icon */}
            <div className="text-[#ff5e14] mb-4">
              <svg width="48" height="36" viewBox="0 0 50 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 40C19.4036 40 25 34.4036 25 27.5C25 20.5964 19.4036 15 12.5 15C9.5 15 7 16.5 5 18.5C5 8 12.5 5 12.5 5L10 0C4 1.5 0 8 0 17.5C0 22 0 40 12.5 40ZM37.5 40C44.4036 40 50 34.4036 50 27.5C50 20.5964 44.4036 15 37.5 15C34.5 15 32 16.5 30 18.5C30 8 37.5 5 37.5 5L35 0C29 1.5 25 8 25 17.5C25 22 25 40 37.5 40Z" />
              </svg>
            </div>

            {/* Testimonial Text with Fade transition container */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <p className="text-[#3b4c68] text-[16px] sm:text-[17px] leading-[1.7] mb-6 font-medium line-clamp-4 min-h-[110px]">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex gap-1.5 mb-8">
                  {[...Array(Math.floor(currentTestimonial.rating || 5))].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-[#ff5e14] fill-[#ff5e14]" 
                    />
                  ))}
                  {(currentTestimonial.rating % 1 !== 0) && (
                    <StarHalf size={20} className="text-[#ff5e14] fill-[#ff5e14]" />
                  )}
                </div>
              </div>

              {/* Author and Nav */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mt-auto border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden relative shadow-sm border-[3px] border-blue-50/50 ring-2 ring-[#ff5e14]">
                    <Image src={currentTestimonial.image} alt={currentTestimonial.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0e2a46] text-[17px] leading-tight">{currentTestimonial.author}</h4>
                    <p className="text-[#4b5563] text-[14px] mt-0.5">{currentTestimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-[#eef3f9] bg-[#f4f7fb] flex items-center justify-center text-[#0e2a46] hover:bg-[#0e2a46] hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={20} strokeWidth={2.5} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-[#ff5e14] text-white flex items-center justify-center shadow-[0_8px_15px_rgba(255,94,20,0.25)] hover:bg-[#e04f0d] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
