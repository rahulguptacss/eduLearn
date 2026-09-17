import React from "react";
import { PopularCoursesData } from "../../types";
import { Star, Clock, ArrowRight, Bookmark } from "lucide-react";
import Image from "next/image";

export default function PopularCourses({ data }: { data: PopularCoursesData }) {
  return (
    <section className="bg-white py-24 px-4 sm:px-8 lg:px-16 text-center">
      <p className="text-primary font-bold tracking-wider text-sm mb-4 uppercase flex items-center justify-center gap-2">
        <span className="w-10 h-0.5 bg-primary"></span>
        {data.subtitle}
        <span className="w-10 h-0.5 bg-primary"></span>
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight mb-16">
        {data.title.split('Popular Courses')[0]}
        <span className="text-primary">Popular Courses</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.courses.map((course, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow text-left group">
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={course.image} 
                alt={course.title} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                <Bookmark size={12} className="text-primary" /> {course.category}
              </div>
            </div>
            
            {/* Content Container */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-3 text-sm">
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock size={14} className="text-primary" /> {course.duration}
                </div>
                <div className="flex items-center gap-1 font-bold text-secondary">
                  <Star size={14} className="text-yellow-400" fill="currentColor" /> {course.rating} <span className="text-gray-400 font-normal">({course.reviews} Reviews)</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-secondary mb-4 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                {course.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image src={`https://ui-avatars.com/api/?name=${course.author}&background=random`} alt={course.author} fill className="object-cover" />
                </div>
                <span className="text-sm font-semibold text-gray-600">{course.author}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-primary">${course.price}</span>
                  <span className="text-sm text-gray-400 line-through">${course.originalPrice}</span>
                </div>
                <button className="text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1">
                  Enroll Now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
