"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { PopularCoursesData } from "../../types";
import { 
  Star, 
  Clock, 
  ArrowRight, 
  Bookmark, 
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Code,
  BarChart,
  Stethoscope,
  Camera
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web Development": return <Code size={13} />;
    case "Finance": return <BarChart size={13} />;
    case "Medical": return <Stethoscope size={13} />;
    case "Photography": return <Camera size={13} />;
    default: return <Bookmark size={13} />;
  }
};

const getCategoryColor = (idx: number) => {
  return idx % 2 === 0 ? "bg-[#0e2a46]" : "bg-[#ff5e14]";
};

export default function PopularCourses({ data }: { data: PopularCoursesData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Duplicate courses to have 8 items for continuous sliding effect demonstration
  const displayCourses = [...data.courses, ...data.courses];

  // Handle responsive layout and measure card width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }

      if (cardRef.current) {
        // card width + gap (gap-2 is 8px)
        setCardWidth(cardRef.current.offsetWidth + 8); 
      }
    };
    
    // Slight delay for initial measurement to ensure DOM is fully painted
    const timeout = setTimeout(handleResize, 100); 
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = displayCourses.length - itemsPerPage;
  const totalDots = Math.ceil(displayCourses.length / itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="relative bg-[#f8fbfd] pt-4 pb-2 lg:pt-6 lg:pb-4 px-4 sm:px-8 lg:px-12 overflow-hidden">
      
      {/* Decorative Background Blob */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-white opacity-60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-6 sm:mb-8 text-center"
        >
          <div className="text-primary font-bold tracking-[2px] text-[13px] uppercase flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-[1.5px] bg-primary"></span>
            <div className="flex items-center gap-1.5">
              <GraduationCap size={18} strokeWidth={2.5} />
              {data.subtitle}
            </div>
            <span className="w-10 h-[1.5px] bg-primary"></span>
          </div>
          
          <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-secondary leading-[1.2] mb-2">
            {data.title} {data.titleHighlight && <span className="text-primary">{data.titleHighlight}</span>}
          </h2>

          {data.description && (
            <p className="text-[#6b7280] text-[13px] sm:text-[14px] max-w-[650px] mx-auto font-medium">
              {data.description}
            </p>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Left Arrow (Desktop Only) */}
          <button 
            onClick={handlePrev}
            className="hidden xl:flex absolute -left-6 top-[45%] -translate-y-1/2 w-[46px] h-[46px] bg-white rounded-full items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.06)] text-secondary hover:bg-gray-50 z-20 transition-all cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden w-full py-4">
            <motion.div 
              className="flex gap-2"
              initial={false}
              animate={{ x: -(currentIndex * cardWidth) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {displayCourses.map((course, idx) => (
                <div 
                  key={idx}
                  ref={idx === 0 ? cardRef : null} 
                  className="shrink-0 w-full md:w-[calc(50%-0.25rem)] lg:w-[calc(25%-0.375rem)]"
                >
                  <Link href={`/courses/${course.id}`} className="block h-full">
                    <div className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 text-left flex flex-col h-full group">
                      
                      {/* Image Container with inner padding */}
                      <div className="p-3 pb-0">
                        <div className="relative h-[180px] w-full rounded-[16px] overflow-hidden">
                          <Image 
                            src={course.image} 
                            alt={course.title} 
                            fill
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Top Left Badge */}
                          <div className="absolute top-3 left-3 z-10">
                            <div className={`text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm ${getCategoryColor(idx)}`}>
                              {getCategoryIcon(course.category)} 
                              {course.category}
                            </div>
                          </div>
                          
                          {/* Top Right Badge */}
                          <div className="absolute top-3 right-3 z-10">
                            <div className="bg-white text-secondary text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                              <Clock size={12} className="text-secondary" strokeWidth={2.5} /> 
                              {course.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Container */}
                      <div className="p-5 pb-4 flex flex-col flex-1">
                        
                        {/* Title and Rating Row */}
                        <div className="flex justify-between items-start gap-3 mb-1">
                          <h3 className="text-[15px] font-bold text-secondary leading-[1.3] flex-1 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                            {course.title}
                          </h3>
                          <div className="flex flex-col items-end shrink-0 pt-0.5">
                            <div className="flex items-center gap-1 font-bold text-secondary text-[14px]">
                              <Star size={14} className="text-[#ff5e14]" fill="currentColor" /> {course.rating}
                            </div>
                            <span className="text-[10px] font-medium text-gray-500 mt-0.5">({course.reviews} Students)</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-[12px] font-medium text-gray-500 leading-relaxed mb-2 line-clamp-2 pr-2">
                          {course.description}
                        </p>
                        
                        {/* Price and Action Button Row */}
                        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
                          <div className="flex items-end gap-1.5">
                            <span className="text-[22px] font-extrabold text-[#ff5e14] leading-none">${course.price}</span>
                            <span className="text-[13px] font-bold text-gray-400 line-through leading-none pb-[2px]">${course.originalPrice}</span>
                          </div>
                          <button className="bg-[#ff5e14] hover:bg-[#e04f0d] text-white text-[12px] font-bold pl-4 pr-1.5 py-1.5 rounded-full flex items-center gap-2.5 transition-all">
                            {data.buttonText || "Read More"}
                            <span className="bg-white rounded-full text-[#ff5e14] w-[22px] h-[22px] flex items-center justify-center shrink-0">
                              <ArrowRight size={13} strokeWidth={3} />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow (Desktop Only) */}
          <button 
            onClick={handleNext}
            className="hidden xl:flex absolute -right-6 top-[45%] -translate-y-1/2 w-[46px] h-[46px] bg-white rounded-full items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.06)] text-secondary hover:bg-gray-50 z-20 transition-all cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
        
        {/* Pagination Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-2 mt-4"
        >
          {Array.from({ length: totalDots }).map((_, i) => (
            <span 
              key={i} 
              onClick={() => setCurrentIndex(Math.min(i * itemsPerPage, maxIndex))}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerPage) === i 
                  ? 'bg-[#ff5e14] w-4 sm:w-5' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            ></span>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
