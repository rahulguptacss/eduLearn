"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Building2,
  Bus,
  FlaskConical,
  Mic2,
  Monitor,
  Trophy,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  monitor: Monitor,
  book: BookOpen,
  flask: FlaskConical,
  mic: Mic2,
  trophy: Trophy,
  utensils: UtensilsCrossed,
  building: Building2,
  bus: Bus,
};

export default function Facilities({ data }: { data: any }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-[#f4f9fd] pt-10 pb-10 lg:pt-14 lg:pb-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-10 h-[2px] bg-[#ff5e14] origin-right"
            />
            <span className="text-[14px] sm:text-[16px] font-bold text-[#0e2a46] tracking-[2px] uppercase">
              {data.subtitle}
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-10 h-[2px] bg-[#ff5e14] origin-left"
            />
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold text-[#0e2a46] leading-[1.15] tracking-tight mb-4">
            {data.title}{" "}
            {data.titleHighlight && <span className="text-[#ff5e14]">{data.titleHighlight}</span>}
          </h2>
          <p className="text-[#5a6b82] text-[16px] sm:text-[17px] max-w-[720px] mx-auto leading-[1.7]">
            {data.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {data.items.map((item: { image: string; icon?: string; title: string; description: string }) => {
            const Icon = iconMap[item.icon || "users"] || Users;
            return (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_12px_32px_rgba(14,42,70,0.06)] hover:shadow-[0_22px_50px_rgba(14,42,70,0.14)] cursor-pointer"
            >
              <div className="relative h-[210px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0e2a46]/0 group-hover:bg-[#0e2a46]/10 transition-colors duration-500" />
              </div>
              <div className="px-6 py-5">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-7 h-7 text-[#0e2a46] shrink-0 group-hover:text-[#ff5e14] transition-colors duration-300" strokeWidth={1.7} />
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0e2a46] leading-snug group-hover:text-[#ff5e14] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#5a6b82] leading-[1.7]">
                  {item.description}
                </p>
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
