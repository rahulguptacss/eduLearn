"use client";

import React, { useEffect, useRef } from "react";
import { StatsData } from "../../types";
import { Users, GraduationCap, BookOpen, Award } from "lucide-react";
import Image from "next/image";
import { useInView, animate, motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  award: Award,
};

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix. E.g. "12,500+" -> number: 12500, suffix: "+"
  const numMatch = value.replace(/,/g, '').match(/(\d+)/);
  const number = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = value.replace(/[\d,]/g, '');
  
  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, number, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(val).toLocaleString() + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [inView, number, suffix]);

  return (
    <h3 
      ref={ref} 
      className="text-3xl sm:text-[40px] font-extrabold text-white mb-2 leading-none"
    >
      0{suffix}
    </h3>
  );
};

export default function Stats({ data }: { data: StatsData }) {
  return (
    <section className="relative pt-12 pb-28 px-4 sm:px-8 lg:px-16 text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={data.bgImage || "/img/bgcounter.png"} 
          alt="Graduation Background" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0e2a46]/90 mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-6 text-center"
        >
          <div className="text-white font-bold tracking-[2px] text-[13px] uppercase flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[1.5px] bg-white"></span>
            <div className="flex items-center gap-1.5">
              <GraduationCap size={18} strokeWidth={2.5} />
              {data.subtitle}
            </div>
            <span className="w-10 h-[1.5px] bg-white"></span>
          </div>
          
          <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-white leading-[1.2] mb-4">
            {data.title} {data.titleHighlight && <span className="text-[#ff5e14]">{data.titleHighlight}</span>}
          </h2>

          <p className="text-gray-300 max-w-[700px] mx-auto text-[14px] sm:text-[15px] leading-relaxed">
            {data.description}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-500/30 pt-4"
        >
          {data.stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-6">
                <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center mb-6">
                  {/* SVG Circular Progress Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background grey track */}
                    <circle cx="50" cy="50" r="47" fill="none" stroke="#4b5563" strokeWidth="4" />
                    {/* Orange progress stroke */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="47" 
                      fill="none" 
                      stroke="#ff5e14" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      strokeDasharray="295" 
                      strokeDashoffset="45" 
                    />
                  </svg>
                  <Icon size={32} className="text-[#ff5e14]" />
                </div>
                <AnimatedCounter value={stat.value} />
                <p className="text-gray-300 font-medium text-[15px]">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Wavy Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
        <svg 
          className="relative block w-full h-[50px] sm:h-[80px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* White wave fill */}
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
            fill="#ffffff" 
          />
          {/* Orange wave border */}
          <path 
            d="M0,0c0,0,0,46.29,0,46.29,47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47" 
            fill="none" 
            stroke="#ff5e14" 
            strokeWidth="4" 
          />
        </svg>
      </div>
    </section>
  );
}
