"use client";

import React, { useState, useEffect } from "react";
import { TestimonialsData } from "../../types";
import { ArrowLeft, ArrowRight, Phone, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Demo Testimonials Data
const demoTestimonials = [
  {
    text: "Edulax has completely changed the way I learn. The courses are well-structured, the instructors are amazing, and the support team is always there to help. I've gained practical skills and confidence for my career. Highly recommended!",
    name: "MH Hassan",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "The quality of education here is top-notch. The interactive platform makes learning so much easier and fun. I managed to land my dream job after completing the advanced development bootcamp. Thank you Edulax!",
    name: "Sarah Jenkins",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    text: "I was skeptical at first, but the community and the mentors proved me wrong. It's the best investment I've made for my professional growth. The curriculum is up-to-date with industry standards.",
    name: "David Chen",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

export default function Testimonials({ data }: { data: TestimonialsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % demoTestimonials.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % demoTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? demoTestimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = demoTestimonials[currentIndex];

  return (
    <section className="bg-[#f8faff] relative pt-8 lg:pt-16 pb-10 lg:pb-20 px-4 sm:px-8 lg:px-16 z-10 mt-0">
      {/* Background container with overflow-hidden to prevent horizontal scroll from background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] bg-[#eef3f9] rounded-full z-0 blur-3xl"></div>
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0e2a46 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Image & Graphics */}
        <div className="lg:w-1/2 relative w-full flex flex-col mt-4 lg:mt-0">
          
          {/* Top Section Header (TESTIMONIALS) */}
          <div className="flex items-center gap-3 mb-4 lg:mb-4 w-full z-20">
            <div className="w-3 h-3 bg-[#ff5e14]"></div>
            <span className="text-[14px] font-bold text-[#0e2a46] tracking-[1.5px] uppercase whitespace-nowrap">TESTIMONIALS</span>
            <div className="flex-grow h-px bg-gray-300 ml-4"></div>
          </div>

          {/* Graphic Container */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex justify-center items-center mt-2 lg:mt-12">
            
            {/* Main Dark Blue Circular Background with Orange Slice */}
            <div 
              className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-xl"
              style={{ 
                background: 'conic-gradient(from 5deg, #0e2a46 0deg 45deg, #ff5e14 45deg 85deg, #0e2a46 85deg 360deg)' 
              }}
            ></div>

            {/* Dotted Globe pattern behind the main circle */}
            <div className="absolute w-[380px] h-[380px] lg:w-[500px] lg:h-[500px] rounded-full border border-dashed border-gray-300/60 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-dotted border-gray-300/80 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>

            {/* Main Student Image - Object contain so a cutout PNG will perfectly overlap */}
            <div className="relative z-20 w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] lg:w-[420px] lg:h-[550px] mt-4 lg:mt-12">
              <Image 
                src="/testimonails/maintestimonails-removebg.png" 
                alt="Student"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Floating Avatar 1 - Top Left */}
            <div className="absolute top-[15%] left-0 lg:left-[-30px] w-16 h-16 rounded-full border-[3px] border-white shadow-xl z-30 overflow-hidden bg-white">
              <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" fill className="object-cover" />
            </div>

            {/* Floating Avatar 2 - Middle Right */}
            <div className="absolute top-[50%] right-[-10px] lg:right-[-20px] w-14 h-14 rounded-full border-[3px] border-white shadow-xl z-30 overflow-hidden bg-white">
               <Image src="https://randomuser.me/api/portraits/men/68.jpg" alt="User" fill className="object-cover" />
            </div>

            {/* Floating Avatar 3 - Bottom Left */}
            <div className="absolute bottom-[20%] left-[10%] lg:left-[-10px] w-14 h-14 rounded-full border-[3px] border-white shadow-xl z-30 overflow-hidden bg-white">
              <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" fill className="object-cover" />
            </div>

            {/* Decorative Orange/Blue dots matrix */}
            <div className="absolute top-[45%] left-[-50px] z-20 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#ff5e14]' : 'bg-[#0e2a46]'}`}></div>
              ))}
            </div>

            {/* Orange rays (top right) */}
            <div className="absolute top-10 right-20 z-20 flex gap-2 rotate-[15deg]">
               <div className="w-1 h-5 bg-[#ff5e14] rounded-full rotate-[-30deg]"></div>
               <div className="w-1 h-6 bg-[#ff5e14] rounded-full"></div>
               <div className="w-1 h-5 bg-[#ff5e14] rounded-full rotate-[30deg]"></div>
            </div>

          </div>
        </div>

        {/* Right Column: Text & Testimonial Card */}
        <div className="lg:w-1/2 flex flex-col items-start z-10 w-full lg:pl-10">
          
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0e2a46] leading-[1.2] tracking-tight mb-3">
            Real Experiences From Our <br className="hidden lg:block" />
            <span className="text-[#ff5e14]">Dedicated Learners</span>
          </h2>
          
          {/* Orange Underline */}
          <div className="w-[72px] h-[5px] bg-[#ff5e14] rounded-full mb-5"></div>
          
          <p className="text-gray-500 mb-7 text-[14px] sm:text-[15px] leading-[1.6] max-w-[500px]">
            Hear from our students who have transformed their skills and achieved their goals with Edulax.
          </p>
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(14,42,70,0.06)] relative w-full border border-gray-100 min-h-[350px] flex flex-col">
            {/* Quote Icon */}
            <div className="text-[#ff5e14] mb-4">
              <svg width="48" height="36" viewBox="0 0 50 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 40C19.4036 40 25 34.4036 25 27.5C25 20.5964 19.4036 15 12.5 15C9.5 15 7 16.5 5 18.5C5 8 12.5 5 12.5 5L10 0C4 1.5 0 8 0 17.5C0 22 0 40 12.5 40ZM37.5 40C44.4036 40 50 34.4036 50 27.5C50 20.5964 44.4036 15 37.5 15C34.5 15 32 16.5 30 18.5C30 8 37.5 5 37.5 5L35 0C29 1.5 25 8 25 17.5C25 22 25 40 37.5 40Z" />
              </svg>
            </div>

            {/* Testimonial Text with Fade transition container */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <p className="text-[#3b4c68] text-[16px] sm:text-[17px] leading-[1.7] mb-6 font-medium line-clamp-4 min-h-[110px]">
                  &ldquo;{currentTestimonial.text}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex gap-1.5 mb-8">
                  {[...Array(4)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-[#ff5e14] fill-[#ff5e14]" 
                    />
                  ))}
                  <StarHalf size={20} className="text-[#ff5e14] fill-[#ff5e14]" />
                </div>
              </div>

              {/* Author and Nav */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mt-auto border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden relative shadow-sm border-[3px] border-blue-50/50 ring-2 ring-[#ff5e14]">
                    <Image src={currentTestimonial.image} alt={currentTestimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0e2a46] text-[17px] leading-tight">{currentTestimonial.name}</h4>
                    <p className="text-gray-500 text-[14px] mt-0.5">{currentTestimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-[#eef3f9] bg-[#f4f7fb] flex items-center justify-center text-[#0e2a46] hover:bg-[#0e2a46] hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={20} strokeWidth={2.5} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-[#ff5e14] text-white flex items-center justify-center shadow-[0_8px_15px_rgba(255,94,20,0.25)] hover:bg-[#e04f0d] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bottom Banner */}
      <div className="relative z-40 w-full mt-10 lg:mt-24 px-4 sm:px-0">
        <div className="max-w-[1200px] mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.7, ease: "easeOut" }}
             className="bg-[#0e2a46] rounded-[20px] sm:rounded-[16px] flex flex-col lg:flex-row items-center justify-between shadow-2xl p-6 sm:p-8 lg:py-6 lg:px-10 gap-6 sm:gap-8 lg:gap-0 border border-white/10 relative overflow-hidden"
           >
             {/* Animated background flare */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 rounded-[16px] pointer-events-none">
                <div className="absolute top-[-50%] left-[-10%] w-[40%] h-[200%] bg-white/5 rotate-[20deg] blur-3xl rounded-full"></div>
             </div>

             {/* Left Section */}
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5 w-full lg:w-auto relative z-10"
             >
               <div className="w-[72px] h-[72px] bg-[#0e2a46] rounded-full border border-white/10 flex items-center justify-center shrink-0 shadow-[inset_0_4px_20px_rgba(255,255,255,0.05)] relative group cursor-pointer">
                 <div className="absolute inset-0 bg-[#ff5e14] opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                 {/* Graduation Cap */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#ff5e14" stroke="#ff5e14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                 </svg>
               </div>
               <div>
                 <p className="text-white font-bold text-[16px] sm:text-[20px] lg:text-[22px] leading-tight mb-1">Learn Anytime, Anywhere</p>
                 <h3 className="text-[#ff5e14] font-bold text-[18px] sm:text-[22px] lg:text-[24px] leading-tight">Start Your Free Trial!</h3>
               </div>
             </motion.div>

             <div className="hidden lg:block w-px h-16 bg-white/10 mx-4 relative z-10"></div>
             <div className="block lg:hidden w-full h-px bg-white/10 relative z-10"></div>

             {/* Middle Section */}
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5 w-full lg:w-auto relative z-10 cursor-pointer group"
             >
               <div className="w-[64px] h-[64px] rounded-full border border-white/10 flex items-center justify-center text-white shrink-0 shadow-[inset_0_4px_20px_rgba(255,255,255,0.05)] bg-[#0e2a46] relative overflow-hidden">
                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                 <Phone size={24} strokeWidth={2} fill="currentColor" className="group-hover:scale-110 transition-transform duration-300 group-hover:text-[#ff5e14]" />
               </div>
               <div>
                 <p className="text-gray-400 text-[13px] sm:text-[14px] mb-1">Call Anytime</p>
                 <p className="text-white font-bold text-[18px] sm:text-[22px] leading-tight group-hover:text-[#ff5e14] transition-colors duration-300">+123 (4567) 890</p>
               </div>
             </motion.div>

             <div className="hidden lg:block w-px h-16 bg-transparent mx-2 relative z-10"></div>
             <div className="block lg:hidden w-full h-px bg-white/10 relative z-10"></div>

             {/* Right Section (Trustpilot) */}
             <motion.div 
               whileHover={{ y: -5, scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
               className="bg-white rounded-[12px] py-4 px-4 sm:px-8 flex flex-col justify-center items-center w-full lg:w-auto shadow-xl min-w-full sm:min-w-[260px] relative z-10 cursor-pointer hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-shadow duration-300"
             >
               <div className="flex items-center justify-center gap-2 mb-1">
                 <div className="text-[#00b67a] flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
                   <Star className="w-full h-full" fill="currentColor" stroke="none" />
                 </div>
                 <span className="font-extrabold text-[#1c1c1c] text-[20px] sm:text-[24px] leading-none tracking-tight">Trustpilot</span>
               </div>
               <p className="text-[12px] sm:text-[14px] text-[#1c1c1c] text-center font-medium mt-1">
                 <span className="text-[#ff5e14] font-bold">890+</span> <span className="text-[#5a626d]">Trustpilot 4.9 Ratings</span>
               </p>
             </motion.div>

           </motion.div>
        </div>
      </div>
    </section>
  );
}
