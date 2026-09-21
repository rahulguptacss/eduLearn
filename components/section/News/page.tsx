"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaSearch, 
  FaChevronRight, 
  FaChevronLeft,
  FaBell,
  FaHeadset,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function News({ data }: { data: any }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("Latest First");
  const itemsPerPage = 5;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  let filteredNotices = activeFilter === "All"
    ? [...data.list]
    : data.list.filter((notice: any) => notice.category === activeFilter);

  if (sortOrder === "Oldest First") {
    filteredNotices.reverse();
  }

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const displayedNotices = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="pt-16 pb-4 px-4 sm:px-8 lg:px-16 bg-[#fafbfc]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-8">
            
            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {data.filters.map((filter: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleFilterChange(filter)}
                    className={`px-4 py-2 rounded-full text-[14px] font-bold transition-colors ${
                      activeFilter === filter
                        ? "bg-[#021d38] text-white"
                        : "bg-white text-[#5b6b7a] border border-[#e4e9ef] hover:border-[#021d38] hover:text-[#021d38]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <select 
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="appearance-none bg-white border border-[#e4e9ef] rounded-[6px] px-4 py-2 pr-10 text-[14px] font-medium text-[#5b6b7a] focus:outline-none focus:border-[#ff5e14] cursor-pointer"
                >
                  <option value="Latest First">Latest First</option>
                  <option value="Oldest First">Oldest First</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5b6b7a] pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* Notices List */}
            <div className="space-y-4 mb-4">
              {displayedNotices.map((notice: any, index: number) => (
                <Link href={`/news/${notice.id}`} key={index} className="bg-white rounded-[12px] py-3 px-5 shadow-sm border border-[#f0f3f6] flex flex-col md:flex-row gap-5 items-start md:items-center group transition-all hover:shadow-md cursor-pointer">
                  
                  {/* Date Block */}
                  <div className="flex flex-col items-center justify-center w-[80px] h-[100px] bg-[#f4f7fa] rounded-[8px] shrink-0">
                    <span className="text-[32px] font-extrabold text-[#021d38] leading-none mb-1">{notice.date}</span>
                    <span className="text-[14px] font-bold text-[#021d38] leading-none mb-1">{notice.month}</span>
                    <span className="text-[13px] text-[#5b6b7a]">{notice.year}</span>
                  </div>

                  {/* Image */}
                  <div className="relative w-full md:w-[170px] h-[130px] rounded-[10px] overflow-hidden shrink-0">
                    <Image 
                      src={notice.image} 
                      alt={notice.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <span className="inline-block bg-[#eaf4ff] text-[#2563eb] text-[12px] font-bold px-3 py-1 rounded-full mb-2">
                      {notice.category}
                    </span>
                    <h3 className="text-[18px] font-bold text-[#021d38] mb-2 group-hover:text-[#ff5e14] transition-colors line-clamp-1">
                      {notice.title}
                    </h3>
                    <p className="text-[#5b6b7a] text-[14px] leading-relaxed mb-3 line-clamp-2">
                      {notice.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#2563eb] text-[14px] font-bold group-hover:gap-3 transition-all">
                      Read More <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.91666 6.99996H11.0833M11.0833 6.99996L6.99999 2.91663M11.0833 6.99996L6.99999 11.0833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[#f4f7fa] items-center justify-center shrink-0 group-hover:bg-[#ff5e14] group-hover:text-white transition-colors">
                    <FaChevronRight size={14} />
                  </div>
                  
                </Link>
              ))}
            </div>

            {/* Pagination & Illustration */}
            <div className="flex flex-col sm:flex-row items-center justify-center pt-2 pb-0 relative">

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center gap-2 z-10">
                  {currentPage > 1 && (
                    <button 
                      onClick={() => setCurrentPage(prev => prev - 1)}
                      className="w-10 h-10 rounded-[6px] bg-white text-[#5b6b7a] border border-[#e4e9ef] flex items-center justify-center hover:border-[#021d38] hover:text-[#021d38] transition-colors shadow-sm"
                    >
                      <FaChevronLeft size={14} />
                    </button>
                  )}
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`w-10 h-10 rounded-[6px] flex items-center justify-center text-[15px] font-bold border transition-colors shadow-sm ${
                        currentPage === idx + 1
                          ? "bg-[#021d38] text-white border-[#021d38]"
                          : "bg-white text-[#5b6b7a] border-[#e4e9ef] hover:border-[#021d38] hover:text-[#021d38]"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  {currentPage < totalPages && (
                    <button 
                      onClick={() => setCurrentPage(prev => prev + 1)}
                      className="w-10 h-10 rounded-[6px] bg-white text-[#5b6b7a] border border-[#e4e9ef] flex items-center justify-center hover:border-[#021d38] hover:text-[#021d38] transition-colors shadow-sm"
                    >
                      <FaChevronRight size={14} />
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Search Widget */}
              <div className="bg-white rounded-[12px] border border-[#f0f3f6] overflow-hidden shadow-sm">
                <div className="bg-[#021d38] p-5 text-white flex items-center gap-3">
                  <FaSearch />
                  <h3 className="font-bold text-[18px]">Search Notices</h3>
                </div>
                <div className="p-6">
                  <div className="relative flex">
                    <input 
                      type="text" 
                      placeholder={data.sidebar.searchPlaceholder}
                      className="w-full bg-[#f4f7fa] text-[#021d38] text-[14px] py-3 pl-10 pr-4 rounded-l-[6px] outline-none border border-[#e4e9ef] focus:border-[#ff5e14]"
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 left-3 text-[#5b6b7a]">
                      <FaSearch size={14} />
                    </span>
                    <button className="bg-[#ffb606] text-[#021d38] font-bold px-5 text-[14px] rounded-r-[6px] hover:bg-[#ffc233] transition-colors">
                      Search
                    </button>
                  </div>
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
                    const realCount = isAll ? (data.list?.length || 0) : (data.list?.filter((n: any) => n.category === cat.label).length || 0);
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

              {/* Subscribe Widget */}
              <div className="bg-[#fdf9f1] rounded-[12px] py-6 px-6 text-center shadow-sm relative overflow-hidden">
                <div className="w-12 h-12 bg-[#ffc233] rounded-full flex items-center justify-center mx-auto mb-3 text-[#021d38] text-[18px]">
                  <FaBell />
                </div>
                <h3 className="font-bold text-[22px] text-[#021d38] mb-1">
                  {data.sidebar.subscribe.title}
                </h3>
                <p className="text-[#5b6b7a] text-[14px] leading-relaxed mb-4">
                  {data.sidebar.subscribe.description}
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <div className="relative">
                    <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[#021d38]">
                      <HiOutlineMail size={20} />
                    </span>
                    <input 
                      type="email" 
                      placeholder={data.sidebar.subscribe.placeholder}
                      className="w-full bg-white text-[#021d38] text-[14px] py-3 pl-12 pr-4 rounded-[8px] outline-none border border-[#e4e9ef] focus:border-[#ff5e14]"
                    />
                  </div>
                  <button type="submit" className="w-full bg-[#021d38] text-white font-bold py-3 rounded-[8px] hover:opacity-90 transition-opacity">
                    {data.sidebar.subscribe.buttonText}
                  </button>
                </form>
              </div>

              {/* Need Help Widget */}
              <div className="bg-[#f5f9fc] rounded-[12px] pt-4 pb-6 px-6 relative overflow-hidden">
                {/* Decorative background shapes */}
                <svg className="absolute bottom-0 right-0 pointer-events-none" width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 100C50 60 120 40 180 0V100H0Z" fill="#e2f0fb" fillOpacity="0.6"/>
                  <path d="M50 100C90 75 140 60 180 30V100H50Z" fill="#d0e5f7" fillOpacity="0.6"/>
                </svg>

                <div className="flex items-start gap-4 mb-3 relative z-10">
                  <div className="w-14 h-14 bg-white rounded-full border-2 border-[#d6e5f3] text-[#021d38] flex items-center justify-center shrink-0 text-[22px] shadow-sm relative">
                    {/* Darker arc accent (simulated) */}
                    <svg className="absolute inset-0 w-full h-full -rotate-45" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#2563eb" strokeWidth="4" strokeDasharray="30 270" strokeLinecap="round" />
                    </svg>
                    <FaHeadset className="relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px] text-[#021d38] mb-1">
                      {data.sidebar.contact.title}
                    </h3>
                    <p className="text-[#5b6b7a] text-[13px] leading-relaxed pr-2">
                      {data.sidebar.contact.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 relative z-10 pl-2">
                  <a href={`tel:${data.sidebar.contact.phone}`} className="flex items-center gap-4 text-[#021d38] font-bold text-[16px] hover:text-[#ff5e14] transition-colors">
                    <FaPhoneAlt size={16} />
                    {data.sidebar.contact.phone}
                  </a>
                  <a href={`mailto:${data.sidebar.contact.email}`} className="flex items-center gap-4 text-[#021d38] font-bold text-[16px] hover:text-[#ff5e14] transition-colors">
                    <FaEnvelope size={16} />
                    {data.sidebar.contact.email}
                  </a>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}
