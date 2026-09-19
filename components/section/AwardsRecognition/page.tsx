"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AwardsRecognition({ data }: { data: any }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, duration: 0.6 } }
  };

  return (
    <section className="bg-[#f4f9ff] py-8 lg:py-10 px-4 sm:px-6 lg:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-8">

        {/* Left Content */}
        <div className="w-full lg:w-[45%] text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#111] font-bold tracking-[1.5px] text-[12px] sm:text-[13px] uppercase flex items-center justify-center lg:justify-start gap-3 mb-3">
              <span className="w-8 h-[3px] bg-[#ff5a00]"></span>
              {data.subtitle}
            </p>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[44px] font-black text-[#002147] leading-[1.1] mb-3 tracking-[-1px] lg:whitespace-nowrap">
              {data.title} <span className="text-[#ff5a00]">{data.titleHighlight}</span>
            </h2>
            <p className="text-[#5c6e81] font-medium text-[15px] sm:text-[16px] leading-[1.6] max-w-[550px] mx-auto lg:mx-0">
              {data.description}
            </p>
          </motion.div>
        </div>

        {/* Right Content - Badges */}
        <div className="w-full lg:w-[55%]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-row justify-center lg:justify-end -space-x-2 sm:-space-x-4 lg:-space-x-6"
          >
            {data.badges.map((badge: any, idx: number) => (
              <motion.div
                variants={itemVariants}
                key={idx}
                className="relative w-[110px] h-[110px] min-[400px]:w-[125px] min-[400px]:h-[125px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px] shrink-0 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Image Laurel Wreath */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
                  <img src="/img/achiveicon.png" alt="Award Wreath" className="w-full h-full object-contain" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full pt-1 px-2">
                  <h4 className="text-[#002147] font-semibold sm:font-bold text-[8px] min-[400px]:text-[9px] sm:text-[13px] lg:text-[15px] leading-snug max-w-[55px] min-[400px]:max-w-[70px] sm:max-w-[110px] mx-auto">
                    {badge.title}
                  </h4>
                  <div className="w-4 sm:w-8 h-[2px] bg-[#ff5a00] my-1 sm:my-3"></div>
                  <p className="text-[#002147] font-bold sm:font-extrabold text-[12px] min-[400px]:text-[14px] sm:text-[18px] lg:text-[22px]">
                    {badge.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
