"use client";

import React from "react";
import { WhyChooseData } from "../../types";
import { 
  GraduationCap, 
  BarChart2, 
  Video, 
  FileText, 
  Users, 
  Globe, 
  Star 
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  "bar-chart": BarChart2,
  video: Video,
  "file-text": FileText,
  users: Users,
  globe: Globe,
  star: Star,
};

const circleColors = [
  "bg-[#009688]", // teal
  "bg-[#f5a623]", // orange/yellow
  "bg-[#2196f3]", // blue
  "bg-[#ff4081]", // pink/red
  "bg-[#7c4dff]", // purple
  "bg-[#00e676]", // green
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function WhyChooseUs({ data }: { data: WhyChooseData }) {
  return (
    <section className="bg-[#f4f9fd] pt-10 lg:pt-12 pb-16 lg:pb-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:w-[60%] xl:w-[65%] w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <p className="text-primary font-bold tracking-[2px] text-[13px] uppercase flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              {data.subtitle}
            </p>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-secondary leading-[1.1] mb-6">
              {data.title} <br className="hidden sm:block" />
              {data.titleHighlight && <span className="text-primary">{data.titleHighlight}</span>}
            </h2>
            {data.description && (
              <p className="text-gray-500 font-medium text-[15px] sm:text-[16px] leading-relaxed max-w-[90%]">
                {data.description}
              </p>
            )}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mt-10"
          >
            {data.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || Users;
              return (
                <motion.div 
                  variants={itemVariants}
                  key={idx} 
                  className={`flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-[20px] ${feature.bgColor} hover:-translate-y-1 transition-transform duration-300`}
                >
                  <div className={`w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${circleColors[idx % 6]}`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[#0e2a46] font-bold text-[14px] xl:text-[15px] mb-1.5 leading-[1.2]">
                      {feature.title}
                    </h4>
                    <p className="text-[#4a5f73] font-medium text-[11px] xl:text-[12px] leading-snug pr-0.5">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Content - Images */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:w-[40%] xl:w-[35%] w-full relative mt-2 lg:mt-0 flex justify-center"
        >
          {/* Top Left Dots Pattern */}
          <div className="absolute top-10 -left-6 sm:-left-12 grid grid-cols-3 gap-2 opacity-30 z-0 hidden md:grid">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
            ))}
          </div>

          {/* Top Right Dots Pattern */}
          <div className="absolute top-16 -right-4 sm:-right-8 grid grid-cols-3 gap-2 opacity-30 z-0 hidden md:grid">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
            ))}
          </div>

          {/* Bottom Left Dots Pattern */}
          <div className="absolute -bottom-8 left-8 sm:left-16 grid grid-cols-4 gap-2 opacity-30 z-0 hidden md:grid">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative z-10 rounded-[40px] sm:rounded-[60px] rounded-br-[15px] border-[6px] sm:border-[8px] border-white shadow-lg w-full max-w-[320px] sm:max-w-[450px] overflow-hidden">
            <div className="relative h-[320px] sm:h-[480px] w-full">
              <Image 
                src="/whychooseus/1.png"
                alt="Student studying"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Secondary Floating Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -right-2 sm:-right-8 bottom-16 sm:bottom-6 z-20 rounded-[30px] sm:rounded-[50px] rounded-bl-[15px] border-[6px] sm:border-[8px] border-white shadow-xl overflow-hidden bg-white"
          >
            <div className="relative h-[160px] w-[140px] sm:h-[240px] sm:w-[220px]">
              <Image 
                src="/whychooseus/2.png"
                alt="Student with books"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="absolute left-0 sm:left-12 -bottom-2 sm:-bottom-6 z-30 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-[15px] sm:rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-3 sm:gap-4"
          >
            <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-md">
              <Star size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
            </div>
            <div>
              <h3 className="text-[#0e2a46] font-black text-[18px] sm:text-[22px] leading-none mb-1">
                {data.floatingBadge.value}
              </h3>
              <p className="text-[#4a5f73] font-medium text-[11px] sm:text-[13px]">
                {data.floatingBadge.label}
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
