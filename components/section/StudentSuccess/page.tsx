"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaUsers, FaBriefcase, FaTrophy, FaCheckCircle, FaAward } from "react-icons/fa";

const iconMap: Record<string, React.ElementType> = {
  "users": FaUsers,
  "trophy": FaTrophy,
  "briefcase": FaBriefcase,
  "badge-check": FaAward,
};

export default function StudentSuccess({ data }: { data: any }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-white py-8 lg:py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        
        {/* Left Content - Image */}
        <div className="w-full lg:w-[45%] relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] sm:h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-sm"
          >
            <Image 
              src={data.image || "/img/achivestudent.png"}
              alt="Student Achievements"
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>

          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-8 bg-[#021d38] rounded-[16px] p-6 sm:p-8 flex items-center gap-4 sm:gap-6 w-[95%] sm:w-[420px] shadow-2xl"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center text-[#ff5e14]">
              <FaAward size={64} className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[22px] sm:text-[26px] leading-[1.2] mb-2">
                {data.imageBadge?.title} <br /> {data.imageBadge?.titleHighlight}
              </h3>
              <p className="text-[#aebecd] text-[13px] sm:text-[14px] leading-snug">
                {data.imageBadge?.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Text & Features */}
        <div className="w-full lg:w-[55%] mt-8 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-[#000] font-bold tracking-[1px] text-[13px] sm:text-[14px] uppercase flex items-center justify-start gap-3 mb-3">
              <span className="w-8 h-[2px] sm:h-[3px] bg-[#ff5a00]"></span>
              {data.subtitle}
            </p>
            <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] lg:whitespace-nowrap font-extrabold text-[#021d38] leading-[1.1] mb-5 tracking-[-1.5px]">
              {data.title} <span className="text-[#ff5a00]">{data.titleHighlight}</span>
            </h2>
            <p className="text-[#516173] font-normal text-[16px] sm:text-[18px] leading-[1.6]">
              {data.description}
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {data.features?.map((feature: any, idx: number) => {
              const Icon = iconMap[feature.icon] || FaTrophy;
              return (
                <motion.div 
                  variants={itemVariants}
                  key={idx}
                  className="flex items-center gap-4 sm:gap-5 py-3 sm:py-4 border-b border-[#e2e8f0] first:pt-0 last:border-0 last:pb-0"
                >
                  <div className="w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] rounded-full bg-[#f4f9ff] flex items-center justify-center shrink-0">
                    <Icon size={32} className={idx === 0 ? "text-[#ff5a00]" : "text-[#021d38]"} />
                  </div>
                  <div>
                    <h4 className="text-[#021d38] font-bold text-[22px] sm:text-[26px] mb-0.5 sm:mb-1 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-[#516173] text-[16px] sm:text-[18px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
