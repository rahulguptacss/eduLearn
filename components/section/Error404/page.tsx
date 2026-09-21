"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Error404Data } from "../../types";

function SadZero() {
  return (
    <span className="relative mx-1 sm:mx-2 inline-flex items-center justify-center">
      <span className="relative w-[92px] h-[92px] sm:w-[120px] sm:h-[120px] lg:w-[148px] lg:h-[148px] rounded-full border-[8px] sm:border-[10px] lg:border-[12px] border-[#ff5e14] flex items-center justify-center bg-transparent">
        <svg viewBox="0 0 64 64" className="w-10 h-10 sm:w-14 sm:h-14 lg:w-[68px] lg:h-[68px]" fill="none">
          <circle cx="22" cy="24" r="4.2" fill="#0e2a46" />
          <circle cx="42" cy="24" r="4.2" fill="#0e2a46" />
          <path d="M22 42c4.5-6 15.5-6 20 0" stroke="#0e2a46" strokeWidth="4.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="absolute -bottom-1 -right-3 sm:-bottom-2 sm:-right-5 w-8 sm:w-11 h-[10px] sm:h-[14px] bg-[#ff5e14] rounded-full rotate-[42deg]" />
    </span>
  );
}

export default function Error404({ data }: { data: Error404Data }) {
  return (
    <section className="bg-[#f4f8fc] pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-4 lg:pb-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.15fr] items-center gap-4 lg:gap-0 min-h-[480px] lg:min-h-[560px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="lg:pl-8 xl:pl-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[3px] bg-[#ff5e14] rounded-full" />
            <span className="text-[13px] sm:text-[14px] font-bold text-[#ff5e14] tracking-[2px] uppercase">
              {data.subtitle}
            </span>
          </div>

          <div className="flex items-center leading-none mb-2 sm:mb-3">
            <span className="text-[86px] sm:text-[120px] lg:text-[150px] font-extrabold text-[#0e2a46] tracking-tight">
              4
            </span>
            <SadZero />
            <span className="text-[86px] sm:text-[120px] lg:text-[150px] font-extrabold text-[#0e2a46] tracking-tight">
              4
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0e2a46] leading-tight mb-3">
            {data.title}
          </h1>
          <p className="text-[#6b7c8d] text-[15px] sm:text-[17px] leading-[1.75] max-w-[460px] mb-7">
            {data.description}
          </p>

          <Link
            href={data.buttonHref || "/"}
            className="group inline-flex items-center bg-[#ff5e14] hover:bg-[#e45410] text-white font-bold text-[14px] sm:text-[15px] pl-6 pr-1.5 py-1.5 rounded-full shadow-md transition-colors"
          >
            {data.buttonText}
            <span className="ml-3 w-9 h-9 rounded-full bg-white text-[#ff5e14] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full h-[340px] sm:h-[460px] lg:h-[580px] overflow-hidden"
        >
          <Image
            src={data.image || "/img/404.png"}
            alt={data.imageAlt || "Page not found"}
            fill
            priority
            className="object-contain object-right scale-[1.55] origin-right lg:scale-[1.7]"
          />
        </motion.div>
      </div>
    </section>
  );
}
