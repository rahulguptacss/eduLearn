import React from "react";
import { TestimonialsData } from "../../types";
import { Quote, Star, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export default function Testimonials({ data }: { data: TestimonialsData }) {
  const testimonial = data.testimonials[0]; // Assuming one for now as per design

  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-16 items-center">
      
      {/* Left Image */}
      <div className="lg:w-1/2 relative w-full h-[600px] flex justify-center">
        <div className="relative w-[400px] h-full z-10">
          <Image 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
            alt="Dedicated Learner" 
            fill
            className="object-cover rounded-t-full rounded-bl-full"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-primary opacity-50 z-0">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="4" cy="4" r="4" fill="currentColor"/>
            <circle cx="20" cy="4" r="4" fill="currentColor"/>
            <circle cx="36" cy="4" r="4" fill="currentColor"/>
            <circle cx="4" cy="20" r="4" fill="currentColor"/>
            <circle cx="20" cy="20" r="4" fill="currentColor"/>
            <circle cx="36" cy="20" r="4" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Floating Avatars */}
        <div className="absolute bottom-32 left-0 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
          <Image src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" fill className="object-cover" />
        </div>
        <div className="absolute top-40 right-10 w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
          <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" fill className="object-cover" />
        </div>
      </div>
      
      {/* Right Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight mb-4">
          Real Experiences From Our <span className="text-primary">Dedicated Learners</span>
        </h2>
        <p className="text-gray-600 mb-12">
          {data.description}
        </p>
        
        {/* Testimonial Card */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl relative mb-12 border-l-4 border-primary">
          <Quote size={64} className="text-orange-100 absolute top-8 left-8 z-0" />
          <p className="relative z-10 text-lg sm:text-xl text-gray-700 font-medium italic mb-8 leading-relaxed">
            "{testimonial.quote}"
          </p>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 relative z-10">
              <button className="w-12 h-12 rounded-full bg-blue-50 text-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full bg-primary text-white hover:bg-orange-600 flex items-center justify-center transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* CTA Banner inside section */}
        <div className="bg-secondary rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-4 rounded-xl text-primary">
              <GraduationCapIcon />
            </div>
            <div>
              <p className="text-white font-medium">{data.ctaText}</p>
              <h3 className="text-primary font-bold text-xl">{data.ctaSubText}</h3>
            </div>
          </div>
          
          <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
          
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full text-white">
              <Phone size={20} />
            </div>
            <div className="text-white">
              <p className="text-sm text-gray-400">Call Us Anytime</p>
              <p className="font-bold">+1 234 567 890</p>
            </div>
          </div>
          
          <div className="h-12 w-px bg-white/20 hidden lg:block"></div>
          
          <div className="bg-white py-2 px-4 rounded-lg flex items-center gap-2 hidden lg:flex">
            <Star size={24} className="text-green-500" fill="currentColor" />
            <div>
              <p className="font-black text-secondary leading-tight">Trustpilot</p>
              <p className="text-xs text-gray-500 font-bold">5M+ Trusted US Ratings</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

// Temporary icon component if lucide's GraduationCap isn't exactly what we want
function GraduationCapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}
