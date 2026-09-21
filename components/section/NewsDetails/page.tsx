"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaSearch, 
  FaChevronRight, 
  FaRegCalendarAlt,
  FaUser,
  FaRegFileAlt,
  FaUsers,
  FaInfoCircle,
  FaQuoteLeft
} from "react-icons/fa";

export default function NewsDetails({ data, latestNews }: { data: any, latestNews: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaRegFileAlt': return <FaRegFileAlt />;
      case 'FaRegCalendarAlt': return <FaRegCalendarAlt />;
      case 'FaUsers': return <FaUsers />;
      case 'FaInfoCircle': return <FaInfoCircle />;
      default: return <FaInfoCircle />;
    }
  };

  return (
    <section className="pt-10 pb-12 px-4 sm:px-8 lg:px-16 bg-[#fafbfc]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header / Title area */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-[3px] bg-[#ff5e14]"></div>
                <span className="text-[#5b6b7a] font-bold text-[13px] uppercase tracking-wider">
                  {data.dynamic.category}
                </span>
              </div>
              
              <h1 className="text-[26px] md:text-[34px] font-extrabold text-[#021d38] leading-snug mb-3">
                {data.dynamic.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[14px] font-bold text-[#5b6b7a]">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-[#ff5e14]" size={16} />
                  <span>{data.dynamic.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#ff5e14]" size={16} />
                  <span>By {data.dynamic.author || 'Admin'}</span>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full h-[300px] relative rounded-[12px] overflow-hidden mb-6">
              <img 
                src={data.dynamic.image} 
                alt={data.dynamic.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Paragraph 1 (Simulated from actual news list description) */}
            <p className="text-[15px] leading-relaxed text-[#5b6b7a] mb-8">
              {data.dynamic.description}
            </p>

            {/* Key Information Box */}
            {data.content && data.content.keyInfoItems && (
              <div className="bg-[#eef3fb] border border-[#dde9f7] rounded-[12px] p-6 sm:p-8 mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[5px] h-7 bg-[#021d38] rounded-sm"></div>
                  <h3 className="text-[20px] font-bold text-[#021d38]">{data.content.keyInfoTitle}</h3>
                </div>
                
                <ul className="space-y-3 pl-2">
                  {data.content.keyInfoItems.map((item: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-[8px] bg-[#021d38] flex items-center justify-center text-white shrink-0 text-[15px] mt-0.5">
                        {getIcon(item.icon)}
                      </div>
                      <p className="text-[14px] leading-relaxed">
                        <span className="font-bold text-[#021d38]">{item.label}</span>
                        <span className="text-[#5b6b7a] ml-1">{item.value}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content Paragraphs */}
            {data.content && data.content.paragraphs && data.content.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-[15px] leading-relaxed text-[#5b6b7a] mb-6">
                {p}
              </p>
            ))}

            {/* Blockquote */}
            {data.content && data.content.quote && (
              <div className="bg-[#f8faff] border-l-4 border-[#ff5e14] rounded-r-[8px] p-6 sm:p-8 flex items-start gap-4 mt-8 mb-8">
                <FaQuoteLeft className="text-[#ff5e14] shrink-0 text-[24px] opacity-40 mt-1" />
                <p className="text-[18px] font-medium italic text-[#ff5e14] leading-relaxed">
                  {data.content.quote}
                </p>
              </div>
            )}

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              
              {/* Search Widget */}
              <div className="bg-[#021d38] rounded-[12px] p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-[4px] h-5 bg-[#ff5e14] rounded-full"></div>
                  <h3 className="font-bold text-[18px] text-white">Search Notices</h3>
                </div>
                
                <div className="relative flex">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={data.sidebar.searchPlaceholder || "Enter keyword..."}
                    className="w-full bg-white text-[#021d38] text-[14px] py-3 pl-4 pr-4 rounded-l-[6px] outline-none border-none"
                  />
                  <button className="bg-[#ff5e14] text-white font-bold px-5 text-[14px] rounded-r-[6px] hover:bg-[#e04f0f] transition-colors flex items-center justify-center shrink-0">
                    <FaSearch size={14} />
                  </button>
                </div>
              </div>

              {/* Latest Notices */}
              <div className="bg-[#f8faff] rounded-[12px] border border-[#eaf4ff] p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#021d38] flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"></path></svg>
                  </span>
                  <h3 className="font-bold text-[18px] text-[#021d38]">Latest Notices</h3>
                </div>
                
                <div className="space-y-5">
                  {latestNews.slice(0, 4).map((notice, idx) => {
                    const noticeDate = typeof notice.date === 'string' 
                      ? `${notice.date} ${notice.month} ${notice.year}`
                      : `${notice.date?.day} ${notice.date?.month} ${notice.year}`;
                      
                    return (
                      <Link href={`/news/${notice.id}`} key={idx} className="flex gap-4 group">
                        <div className="w-[80px] h-[70px] rounded-[6px] overflow-hidden shrink-0 relative">
                          <img src={notice.image} alt={notice.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="text-[14px] font-bold text-[#021d38] leading-tight mb-1 group-hover:text-[#ff5e14] transition-colors line-clamp-2">
                            {notice.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[12px] text-[#5b6b7a] font-medium">
                            <FaRegCalendarAlt className="text-[#ff5e14]" size={10} />
                            <span>{noticeDate}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                
                <div className="mt-6">
                  <Link href="/news" className="text-[13px] font-bold text-[#ff5e14] flex items-center gap-2 hover:text-[#021d38] transition-colors">
                    View All Notices <FaChevronRight size={10} />
                  </Link>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-[#f8faff] rounded-[12px] border border-[#eaf4ff] p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#021d38] flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>
                  </span>
                  <h3 className="font-bold text-[18px] text-[#021d38]">Notice Categories</h3>
                </div>
                
                <ul className="space-y-0">
                  {data.sidebar.categories.map((cat: any, index: number) => {
                    const isAll = index === 0 || cat.label === "All Notices";
                    // Using latestNews length since this is the global news list
                    const realCount = isAll ? (latestNews?.length || 0) : (latestNews?.filter((n: any) => n.category === cat.label).length || 0);
                    const displayCount = realCount < 10 ? `0${realCount}` : `${realCount}`;
                    
                    return (
                      <li key={index}>
                        <Link href="#" className="flex items-center justify-between py-2 group hover:opacity-80 transition-opacity">
                          <span className={`text-[15px] ${isAll ? 'text-[#021d38] font-bold' : 'text-[#4b5563] font-medium'}`}>
                            {cat.label}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className={`px-2.5 py-0.5 rounded-full text-[12px] font-medium text-white ${isAll ? 'bg-[#021d38]' : 'bg-[#9ca3af]'}`}>
                              {displayCount}
                            </span>
                            <FaChevronRight className="text-[#021d38]" size={12} />
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
