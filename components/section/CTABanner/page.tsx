import React from "react";
import { CTABannerData } from "../../types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTABanner({ data }: { data: CTABannerData }) {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 relative -mb-24 z-20">
      <div className="bg-secondary rounded-[32px] overflow-hidden relative flex flex-col md:flex-row items-center justify-between shadow-2xl">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
           <Image 
             src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80"
             alt="Background pattern"
             fill
             className="object-cover"
           />
        </div>

        {/* Content */}
        <div className="relative z-10 p-12 md:p-16 md:w-2/3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            {data.title.split('With EduLearn')[0]}
            <span className="text-primary">With EduLearn</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            {data.subtitle}
          </p>
          <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center gap-2">
            {data.buttonText} <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Right side image - decorative group of students */}
        <div className="relative z-10 w-full md:w-1/3 h-64 md:h-auto self-end hidden md:block">
           <div className="absolute bottom-0 right-10 w-80 h-80">
              <Image 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Students"
                fill
                className="object-cover object-top rounded-t-full mask-image-bottom"
              />
           </div>
        </div>
        
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .mask-image-bottom {
          mask-image: linear-gradient(to top, transparent 0%, black 20%);
          -webkit-mask-image: linear-gradient(to top, transparent 0%, black 20%);
        }
      `}} />
    </section>
  );
}
