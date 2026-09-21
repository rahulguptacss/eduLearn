"use client";

import React from "react";
import { LegalPageContent } from "../../types";
import { motion } from "framer-motion";

export default function LegalContent({ data }: { data: LegalPageContent }) {
  return (
    <section className="bg-white pt-10 pb-12 lg:pt-14 lg:pb-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="block text-[13px] sm:text-[14px] font-bold text-[#ff5e14] tracking-[2.5px] uppercase mb-3">
            {data.subtitle}
          </span>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#0e2a46] leading-[1.15] mb-4">
            {data.title}
          </h1>
          <div className="w-[52px] h-[4px] bg-[#ff5e14] rounded-full mx-auto mb-6"></div>
          <p className="text-[#6b7c8d] text-[15px] sm:text-[17px] leading-[1.8] max-w-[780px] mx-auto">
            {data.intro}
          </p>
        </motion.div>

        <div className="divide-y divide-[#e6ebf0]">
          {data.sections.map((section, idx) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(idx * 0.04, 0.24), duration: 0.45 }}
              className="py-7 first:pt-0 last:pb-0"
            >
              <h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#0e2a46] mb-2">
                {section.heading}
              </h2>
              <p className="text-[14px] sm:text-[15px] font-medium text-[#5a6b82] leading-[1.85]">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[13px] text-[#8a97a8] mt-10"
        >
          {data.lastUpdated}
        </motion.p>
      </div>
    </section>
  );
}
