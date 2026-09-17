import React from "react";
import { BlogData } from "../../types";
import { User, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BlogList({ data }: { data: BlogData }) {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-8 lg:px-16 text-center">
      <p className="text-primary font-bold tracking-wider text-sm mb-4 uppercase flex items-center justify-center gap-2">
        <span className="w-10 h-0.5 bg-primary"></span>
        {data.subtitle}
        <span className="w-10 h-0.5 bg-primary"></span>
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight mb-6">
        Latest News & <span className="text-primary">Articles</span>
      </h2>
      <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
        {data.description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow text-left group">
            <div className="relative h-60 w-full overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                  <User size={14} className="text-primary" /> {post.author}
                </div>
                <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                  <Calendar size={14} className="text-primary" /> {post.date}
                </div>
                <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                  <MessageSquare size={14} className="text-primary" /> {post.comments} Comments
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-6 line-clamp-2 hover:text-primary transition-colors cursor-pointer leading-tight">
                {post.title}
              </h3>
              
              <button className="bg-secondary text-white hover:bg-primary px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination (Static as per design) */}
      <div className="flex justify-center items-center gap-2 mt-16">
        <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
          <ArrowLeftIcon />
        </button>
        <button className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">
          1
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 font-bold flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
          2
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 font-bold flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
          3
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"/>
    </svg>
  );
}
