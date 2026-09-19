"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, FileText } from "lucide-react";

export default function AdmissionProcess({ data }: { data: any }) {
  return (
    <section className="py-10 md:py-24 px-4 sm:px-8 lg:px-12 bg-white relative z-10 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Title Section */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-[30px] md:text-[50px] lg:text-[54px] font-extrabold leading-tight mb-3 tracking-tight">
            <span className="text-[#021d38]">{data.title}</span> <span className="text-[#ff5e14]">{data.titleHighlight}</span>
          </h2>
          <p className="text-[#5b6b7a] text-[15px] md:text-[18px] mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6 md:gap-8">
          {data.steps.map((step: any, index: number) => {
            const isEven = index % 2 === 0; // 0, 2, 4
            const isBlue = isEven;
            const numberBgColor = isBlue ? "bg-[#f0f4fa]" : "bg-[#fff5f0]";
            const numberTextColor = isBlue ? "text-[#021d38]" : "text-[#ff5e14]";
            const lineColor = isBlue ? "bg-[#021d38]" : "bg-[#ff5e14]";

            return (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                
                {/* Left/Right Text Block */}
                <div className={`w-full lg:w-[45%] flex gap-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  
                  {/* Number & Line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center font-bold text-[24px] ${numberBgColor} ${numberTextColor}`}>
                      {step.number}
                    </div>
                    <div className="flex flex-col items-center mt-3">
                      <div className={`w-[1px] h-6 ${lineColor} opacity-30`}></div>
                      <div className={`w-2.5 h-2.5 rounded-full ${lineColor} my-1`}></div>
                      <div className={`w-[1px] h-12 ${lineColor} opacity-30`}></div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col pt-2 md:pt-3">
                    <h3 className="text-[22px] md:text-[32px] font-extrabold text-[#021d38] mb-2 md:mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#5b6b7a] text-[15px] md:text-[16px] leading-[1.7] max-w-md pr-4">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Left/Right Image Block */}
                <div className={`w-full lg:w-[55%] relative ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="relative w-full rounded-[16px] overflow-hidden">
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      width={1000}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
