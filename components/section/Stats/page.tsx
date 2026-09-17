import React from "react";
import { StatsData } from "../../types";
import { Users, GraduationCap, BookOpen, Award } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  award: Award,
};

export default function Stats({ data }: { data: StatsData }) {
  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-16 text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80" 
          alt="Graduation Background" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-primary font-bold tracking-wider text-sm mb-4 uppercase flex items-center justify-center gap-2">
          <span className="w-10 h-0.5 bg-primary"></span>
          OUR COMMITMENT
          <span className="w-10 h-0.5 bg-primary"></span>
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-16">
          Numbers That Reflect <span className="text-primary">Our Commitment</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-500 group-hover:border-primary flex items-center justify-center mb-6 transition-colors">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
