"use client";

import React from "react";
import { MissionVisionData } from "../../types";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function MissionVision({ data }: { data: MissionVisionData }) {
  if (!data) return null;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16 bg-white font-sans max-w-[1400px] mx-auto overflow-hidden">
      
      {/* Top Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center max-w-[800px] mx-auto mb-12 lg:mb-20"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
          <div className="w-8 sm:w-12 h-[2px] bg-[#ff5e14]"></div>
          <span className="text-[#ff5e14] font-bold text-sm sm:text-base lg:text-lg tracking-wider uppercase">
            {data.topSubtitle}
          </span>
          <div className="w-8 sm:w-12 h-[2px] bg-[#ff5e14]"></div>
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-[#05192c] text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          {data.topTitleHighlight ? (
            <>
              {data.topTitle.split(data.topTitleHighlight)[0]}
              <span className="text-[#ff5e14]">{data.topTitleHighlight}</span>
              {data.topTitle.split(data.topTitleHighlight).slice(1).join(data.topTitleHighlight)}
            </>
          ) : (
            data.topTitle
          )}
        </motion.h2>
        <motion.p variants={itemVariants} className="text-[#5b6a7a] text-sm sm:text-base lg:text-lg leading-relaxed max-w-[700px] mx-auto px-2">
          {data.topDescription}
        </motion.p>
      </motion.div>

      {/* Blocks */}
      <div className="flex flex-col gap-16 lg:gap-24">
        {data.blocks.map((block, index) => (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            key={index} 
            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
              block.imagePosition === "left" ? "lg:flex-row-reverse" : ""
            }`}
          >
            
            {/* Text Content */}
            <motion.div variants={itemVariants} className="flex-1 w-full flex flex-col items-start text-left order-2 lg:order-none">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className="text-[#ff5e14] font-bold text-sm sm:text-base lg:text-lg tracking-wider uppercase">
                  {block.subtitle}
                </span>
                <div className="w-8 sm:w-12 h-[2px] bg-[#ff5e14]"></div>
              </div>
              <h3 className="text-[#05192c] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight whitespace-pre-line">
                {block.titleHighlight ? (
                  <>
                    {block.title.split(block.titleHighlight)[0]}
                    <span className="text-[#ff5e14]">{block.titleHighlight}</span>
                    {block.title.split(block.titleHighlight).slice(1).join(block.titleHighlight)}
                  </>
                ) : (
                  block.title
                )}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                {block.description}
              </p>
            </motion.div>
            
            {/* Image Content */}
            <motion.div variants={itemVariants} className="w-full lg:w-1/2 max-w-[600px] relative mx-auto lg:mx-0 order-1 lg:order-none px-4 sm:px-0">
              <div 
                className={`absolute rounded-[30px] sm:rounded-[40px] top-4 bottom-4 sm:top-6 sm:bottom-6 ${
                  block.imagePosition === 'left' ? '-right-4 left-4 sm:-right-8 sm:left-8' : '-left-4 right-4 sm:-left-8 sm:right-8'
                }`}
                style={{ backgroundColor: block.shapeBgColor || "#f4f4f4" }}
              ></div>
              <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-xl aspect-[16/10] w-full transform transition-transform duration-700 hover:scale-[1.03]">
                <Image 
                  src={block.image} 
                  alt={block.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
