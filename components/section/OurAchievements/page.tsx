"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants, useInView, animate } from "framer-motion";
import { Users, GraduationCap, Award, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "users": Users,
  "graduation-cap": GraduationCap,
  "award": Award,
  "briefcase": Briefcase,
};

function Counter({ value }: { value: string }) {
  const numericString = value.replace(/[^0-9]/g, "");
  const targetNumber = parseInt(numericString, 10);
  const suffix = value.replace(/[0-9,]/g, "");

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current && !isNaN(targetNumber)) {
      const controls = animate(0, targetNumber, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
            ref.current.textContent = Math.round(val).toLocaleString() + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, targetNumber, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function OurAchievements({ data }: { data: any }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-white pt-16 lg:pt-24 pb-10 lg:pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[60%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-0 lg:mb-12 text-center lg:text-left"
            >
              <p className="text-black font-bold tracking-[1px] text-[13px] sm:text-[15px] uppercase flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-5">
                <span className="w-6 h-[3px] bg-[#ff5e14]"></span>
                {data.subtitle}
              </p>
              <h2 className="text-[44px] sm:text-[60px] lg:text-[75px] font-black text-[#021d38] leading-[1.05] mb-4 sm:mb-6 tracking-tight">
                {data.title} <br className="hidden lg:block" />
                {data.titleHighlight && <span className="text-[#ff5e14]">{data.titleHighlight}</span>}
              </h2>
              <p className="text-[#5b6b7a] font-medium text-[16px] sm:text-[18px] leading-[1.6] max-w-[600px] mx-auto lg:mx-0">
                {data.description}
              </p>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end relative mt-0 lg:-mt-4 xl:-mt-12">
            {/* Orange Blurred Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#fff0e6] rounded-full blur-[60px] z-0"></div>

            {/* Decorative Dot Patterns */}
            <div className="absolute top-1/4 -left-6 sm:left-4 grid grid-cols-4 gap-2.5 opacity-40 z-10 hidden sm:grid">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#82a4c8]" />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-20 w-full max-w-[450px] sm:max-w-[550px] aspect-square"
            >
              <Image 
                src={data.image}
                alt="Achievements Trophy"
                fill
                className="object-contain object-right"
              />
            </motion.div>
          </div>
        </div>

        {/* Full-width Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-12 lg:-mt-16 xl:-mt-24"
        >
          {data.stats.map((stat: any, idx: number) => {
            const Icon = iconMap[stat.icon] || Users;
            const isOrange = stat.color === "orange";
            const bgColor = isOrange ? "bg-[#ff5e14]" : "bg-[#021d38]";
            const iconColor = "text-white";

            return (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="relative mt-10 bg-white rounded-[16px] px-6 pb-8 pt-14 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#eef2f6] flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`absolute -top-10 w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-lg ${bgColor}`}>
                  <Icon size={36} className={iconColor} strokeWidth={2.5} />
                </div>
                <h3 className="text-[36px] sm:text-[42px] font-black text-[#021d38] leading-none mb-3">
                  <Counter value={stat.value} />
                </h3>
                <h4 className="text-[17px] sm:text-[18px] font-bold text-[#021d38] mb-3">
                  {stat.label}
                </h4>
                <p className="text-[#64748b] text-[14px] sm:text-[15px] leading-relaxed max-w-[90%]">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
