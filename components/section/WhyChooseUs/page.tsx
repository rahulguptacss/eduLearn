import React from "react";
import { WhyChooseData } from "../../types";
import { Laptop, Users, Building, Clock, UserCheck, Network, Star } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  laptop: Laptop,
  users: Users,
  building: Building,
  clock: Clock,
  "user-check": UserCheck,
  network: Network,
  star: Star,
};

export default function WhyChooseUs({ data }: { data: WhyChooseData }) {
  return (
    <section className="bg-white py-24 px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-16 items-center">
      
      {/* Left Content */}
      <div className="lg:w-1/2">
        <p className="text-primary font-bold tracking-wider text-sm mb-4 uppercase flex items-center gap-2">
          <span className="w-10 h-0.5 bg-primary"></span>
          {data.subtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight mb-10">
          {data.title.split('a Brighter Tomorrow')[0]}
          <span className="text-primary">a Brighter Tomorrow</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Laptop;
            return (
              <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className={`${feature.bgColor} ${feature.iconColor} p-3 rounded-full h-fit flex-shrink-0`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Right Image Content */}
      <div className="lg:w-1/2 relative w-full h-[500px]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full z-0"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-50 rounded-full z-0"></div>
        
        {/* Main Image */}
        <div className="absolute top-0 right-0 w-3/4 h-[400px] rounded-bl-[100px] rounded-tr-[100px] overflow-hidden border-8 border-white shadow-2xl z-10">
          <Image 
            src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&q=80" 
            alt="Student Learning" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Secondary Image */}
        <div className="absolute bottom-0 left-0 w-1/2 h-[250px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-8 border-white shadow-2xl z-20">
          <Image 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" 
            alt="Student Learning" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Floating Badge */}
        <div className="absolute bottom-20 right-10 bg-white p-4 rounded-xl shadow-xl z-30 flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-full text-yellow-500">
            {React.createElement(iconMap[data.floatingBadge.icon] || Star, { size: 24, fill: "currentColor" })}
          </div>
          <div>
            <p className="font-black text-xl text-secondary">{data.floatingBadge.value}</p>
            <p className="text-sm font-semibold text-gray-500">{data.floatingBadge.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
