import React from "react";
import { AboutData } from "../../types";
import { GraduationCap, Users, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  users: Users,
  "book-open": BookOpen,
};

export default function About({ data }: { data: AboutData }) {
  return (
    <section className="relative bg-[#f8fbfd] py-12 lg:py-[60px] overflow-hidden">
      {/* Background Dots Pattern (Decorative) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#94a3b8" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-5 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-8 relative z-10">
        
        {/* =================================================
            LEFT CONTENT (Text & Features)
        ================================================== */}
        <div className="lg:w-[50%] flex flex-col pt-4">
          
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-primary font-semibold tracking-[1px] text-[13px] uppercase">
              {data.subtitle}
            </p>
            <span className="w-12 h-[1.5px] bg-primary" />
          </div>

          {/* Title */}
          <h2 className="text-[36px] sm:text-[44px] lg:text-[50px] font-extrabold text-secondary leading-[1.15] mb-6 tracking-tight">
            50 Years of Experience <br className="hidden lg:block" />
            <span className="text-primary">in Education</span>
          </h2>

          {/* Descriptions */}
          <p className="text-[#4b5563] text-[15px] lg:text-[16px] leading-[1.6] mb-4 max-w-[550px]">
            {data.description1}
          </p>
          <p className="text-[#4b5563] text-[15px] lg:text-[16px] leading-[1.6] mb-6 max-w-[550px]">
            {data.description2}
          </p>

          {/* Features Row */}
          <div className="flex flex-row items-center justify-between sm:justify-start gap-1 sm:gap-8 lg:gap-10 mb-8 w-full">
            {data.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || CheckCircle2;
              const words = feature.title.split(" ");
              return (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-1.5 sm:gap-3">
                    <div
                      className={`w-[34px] h-[34px] sm:w-[46px] sm:h-[46px] rounded-full flex items-center justify-center shrink-0 ${
                        idx === 1 ? "bg-[#e4f1fb] text-secondary" : "bg-[#fff0e9] text-primary"
                      }`}
                    >
                      <Icon className="w-[16px] h-[16px] sm:w-[22px] sm:h-[22px]" fill="currentColor" strokeWidth={1} />
                    </div>
                    <div className="flex flex-col">
                      {words.map((word, i) => (
                        <span key={i} className="font-bold text-secondary text-[11px] sm:text-[14px] leading-[1.2]">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                  {idx !== data.features.length - 1 && (
                    <div className="w-[1px] h-6 sm:h-10 bg-gray-300/80 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Button */}
          <button
            className="
              group
              bg-primary
              hover:bg-orange-600
              text-white
              pl-7
              pr-1.5
              py-1.5
              rounded-full
              font-semibold
              text-[14px]
              flex
              items-center
              justify-between
              gap-5
              transition-all
              duration-300
              hover:shadow-lg
              w-fit
            "
          >
            <span>{data.buttonText}</span>
            <span
              className="
                w-10
                h-10
                rounded-full
                bg-white
                text-primary
                flex
                items-center
                justify-center
                transition-transform
                group-hover:translate-x-1
              "
            >
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </button>
        </div>


        {/* =================================================
            RIGHT CONTENT (Images & Badges)
        ================================================== */}
        <div className="lg:w-[50%] relative h-[500px] lg:h-[600px] w-full flex">
          
          {/* Decorative Blobs */}
          <div className="absolute top-[-30px] right-[-30px] w-72 h-72 bg-[#fff0e9] rounded-full opacity-60 pointer-events-none -z-10 blur-3xl" />
          <div className="absolute bottom-[-30px] left-[-30px] w-72 h-72 bg-[#e4f1fb] rounded-full opacity-60 pointer-events-none -z-10 blur-3xl" />

          {/* CSS Grid for Images: 2x2 */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:gap-5 w-full h-full relative z-10 p-2 lg:p-4">
            
            {/* Image 1 (Top Left) */}
            <div className="relative rounded-[20px] lg:rounded-[28px] overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              <Image 
                src="/about/1.png" 
                alt="Student 1" 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* Image 2 (Top Right) */}
            <div className="relative rounded-[20px] lg:rounded-[28px] overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              <Image 
                src="/about/2.png" 
                alt="Student 2" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Image 3 (Bottom Left) */}
            <div className="relative rounded-[20px] lg:rounded-[28px] overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              <Image 
                src="/about/3.png" 
                alt="Student 3" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Image 4 (Bottom Right) */}
            <div className="relative rounded-[20px] lg:rounded-[28px] overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              <Image 
                src="/about/4.png" 
                alt="Student 4" 
                fill 
                className="object-cover" 
              />
            </div>

          </div>

          {/* Floating Center Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[20px] p-3 lg:py-4 lg:pl-4 lg:pr-6 flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20">
            <div className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full bg-primary text-white flex items-center justify-center shrink-0">
              <GraduationCap size={28} fill="currentColor" strokeWidth={1} />
            </div>
            <div>
              <p className="font-extrabold text-secondary text-[26px] lg:text-[30px] leading-none mb-1">50+</p>
              <p className="text-[#6b7280] text-[12px] lg:text-[13px] leading-snug font-medium">Years of Experience <br/> in Education</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
