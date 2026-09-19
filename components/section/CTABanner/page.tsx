"use client";

import React from "react";
import { CTABannerData } from "../../types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTABanner({ data }: { data: CTABannerData }) {
  const words = data.title.split(" ");
  const highlightWordCount = data.highlightWordCount || 2; // Default to 2 if not provided
  const normalText = words.slice(0, words.length - highlightWordCount).join(" ");
  const highlightText = words.slice(words.length - highlightWordCount).join(" ");

  return (
    <section className="px-4 sm:px-8 lg:px-16 pt-4 pb-4 lg:pt-4 lg:pb-6 relative z-20 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#05192c] rounded-[24px] overflow-hidden relative flex flex-col md:flex-row shadow-2xl"
      >
        
        {/* Background Image on Right */}
        <div className="absolute inset-0 z-0 flex justify-end">
           <div className="relative w-full md:w-[70%] lg:w-[65%] h-full">
             <Image 
               src={data.image || "/img/ctabanner.png"}
               alt="Students studying"
               fill
               className="object-cover object-center"
             />
             {/* Gradient overlay for mobile text readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#05192c] via-[#05192c]/80 to-[#05192c]/30 md:hidden z-10"></div>
             {/* Smooth gradient blend from left for desktop */}
             <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-[#05192c] via-[#05192c]/90 to-transparent hidden md:block z-10"></div>
          </div>
        </div>

        {/* Faint curves on the left */}
        <div className="absolute top-[-20%] left-[-5%] w-[400px] h-[500px] bg-white/5 rounded-[100%] blur-3xl pointer-events-none z-0"></div>
        <div className="absolute -left-[50px] top-1/2 -translate-y-1/2 w-[150px] h-[300px] rounded-full border border-white/5 bg-white/5 blur-2xl pointer-events-none z-0"></div>

        {/* Content */}
        <div className="relative z-20 py-8 px-6 sm:py-10 sm:px-10 lg:py-12 lg:px-12 flex flex-col justify-center w-full md:w-[65%] lg:w-[55%]">
          
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold text-white leading-[1.25] mb-3 sm:mb-4 tracking-tight">
            {normalText}{" "}
            <span className="text-[#00cbf7] relative whitespace-nowrap inline-block">
              {highlightText}
              {/* Orange curvy underline SVG */}
              <svg 
                className="absolute -bottom-1 left-[5%] w-[90%] h-[10px] text-[#fca311]" 
                viewBox="0 0 200 12" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path d="M5 10C50 2 150 2 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-300 text-[13px] sm:text-[15px] md:text-[16px] leading-[1.6] mb-6 max-w-[450px]">
            {data.subtitle}
          </p>
          
          <button className="bg-[#ff8c00] hover:bg-[#e67e00] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all duration-300 inline-flex items-center justify-center gap-2 w-max shadow-[0_8px_20px_rgba(255,140,0,0.3)] hover:shadow-[0_10px_25px_rgba(255,140,0,0.4)] hover:-translate-y-1 cursor-pointer">
            {data.buttonText} <ArrowRight size={18} strokeWidth={2.5} />
          </button>

        </div>
        
      </motion.div>
    </section>
  );
}
