"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbData } from "../../types";
import { motion } from "framer-motion";

export default function Breadcrumb({ data, waveColor = "#ffffff" }: { data: BreadcrumbData, waveColor?: string }) {
  const { title, paths, bgImage = "/img/coverbc.png" } = data;
  return (
    <div 
      className="relative w-full py-16 md:py-20 lg:py-28 bg-cover bg-center bg-no-repeat flex items-center justify-center font-sans"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#05192c]/80"></div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <h1 className="text-white text-5xl sm:text-6xl font-bold tracking-wide mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{title}</h1>
        <div className="flex items-center space-x-2 text-sm sm:text-base font-medium tracking-wide" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1;
            return (
              <React.Fragment key={index}>
                {path.href ? (
                  <Link href={path.href} className="text-white hover:text-[#ff5e14] transition-colors">
                    {path.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-[#ff5e14]" : "text-white"}>
                    {path.label}
                  </span>
                )}
                
                {!isLast && (
                  <span className="text-white mx-2.5">/</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,80 C200,110 300,105 400,90 C500,75 600,70 700,95 C800,120 1000,110 1200,80 C1300,65 1400,90 1440,100 L1440,120 L0,120 Z" 
            fill={waveColor}
          ></path>
        </svg>
      </div>
    </div>
  );
}
