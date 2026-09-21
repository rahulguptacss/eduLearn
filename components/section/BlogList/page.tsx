"use client";

import React, { useState } from "react";
import { BlogData } from "../../types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function BlogList({
  data,
  previewLimit,
  showPagination = false,
  itemsPerPage = 6,
}: {
  data: BlogData;
  previewLimit?: number;
  showPagination?: boolean;
  itemsPerPage?: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const sourcePosts = previewLimit ? data.posts.slice(0, previewLimit) : data.posts;
  const totalPages = showPagination ? Math.ceil(data.posts.length / itemsPerPage) : 1;
  const displayedPosts = showPagination
    ? data.posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : sourcePosts;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("blog-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "ellipsis")[] = [1];
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) pages.push("ellipsis");
    for (let page = start; page <= end; page++) pages.push(page);
    if (end < totalPages - 1) pages.push("ellipsis");
    pages.push(totalPages);
    return pages;
  };
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="blog-list" className="bg-[#f4f9fd] pt-8 pb-8 lg:pt-12 lg:pb-10 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      
      {/* Background Dots Pattern */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10 opacity-20 pointer-events-none hidden lg:block"
      >
        <div className="grid grid-cols-4 gap-3">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-40 right-10 opacity-20 pointer-events-none hidden lg:block"
      >
        <div className="grid grid-cols-4 gap-3">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-[2px] bg-[#ff5e14]"></div>
            <span className="text-[14px] sm:text-[16px] font-bold text-[#0e2a46] tracking-[2px] uppercase">{data.subtitle}</span>
            <div className="w-10 h-[2px] bg-[#ff5e14]"></div>
          </div>
          
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-bold text-[#0e2a46] leading-[1.15] tracking-tight mb-4">
            {data.title} {data.titleHighlight && <span className="text-[#ff5e14]">{data.titleHighlight}</span>}
          </h2>
          
          <p className="text-[#5a6b82] text-[16px] sm:text-[17px] lg:text-[18px] max-w-[800px] mx-auto leading-[1.6]">
            {data.description}
          </p>
        </motion.div>
        
        {/* Blog Cards Grid */}
        <motion.div 
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {displayedPosts.map((post, idx) => {
            const postId = post.id ?? (showPagination ? (currentPage - 1) * itemsPerPage + idx + 1 : idx + 1);
            return (
            <motion.div variants={itemVariants} key={`${currentPage}-${postId}`} className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(14,42,70,0.06)] hover:shadow-[0_20px_50px_rgba(14,42,70,0.1)] transition-all duration-300 group flex flex-col border border-gray-100">
              
              {/* Image Container */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Card Body */}
              <div className="px-7 py-4 flex flex-col flex-grow">
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-[13px] sm:text-[14px] font-medium text-[#0e2a46] mb-2">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z" stroke="#0071ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3V7" stroke="#ff5e14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 3V7" stroke="#ff5e14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 11H20" stroke="#0071ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="8" y="15" width="2" height="2" fill="#0071ff"/>
                      <rect x="12" y="15" width="2" height="2" fill="#0071ff"/>
                      <rect x="16" y="15" width="2" height="2" fill="#0071ff"/>
                    </svg>
                    {post.date}
                  </div>
                  <div className="text-gray-300 font-light">/</div>
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0071ff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.58579 16.5858L7.41421 21.4142C8.19526 22.1953 9.46159 22.1953 10.2426 21.4142L20.8284 10.8284C21.6095 10.0474 22 8.98816 22 7.88457V4C22 2.89543 21.1046 2 20 2H16.1154C15.0118 2 13.9526 2.43929 13.1716 3.22033L2.58579 13.8061C1.80474 14.5872 1.80474 15.8047 2.58579 16.5858Z" stroke="#0071ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="16.5" cy="7.5" r="1.5" fill="white"/>
                    </svg>
                    {post.tag}
                  </div>
                </div>
                
                {/* Title */}
                <Link href={`/blog/${postId}`}>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0e2a46] mb-2 leading-[1.4] group-hover:text-[#ff5e14] transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                {/* Description */}
                <p className="text-[#5a6b82] text-[13px] sm:text-[14px] leading-[1.6] mb-3 flex-grow">
                  {post.description}
                </p>
                
                {/* Read More Button */}
                <Link
                  href={`/blog/${postId}`}
                  className="bg-[#0e2a46] text-white rounded-full p-[4px] pl-5 sm:p-[5px] sm:pl-6 flex items-center gap-3 sm:gap-4 hover:bg-[#1a3652] transition-colors w-max mt-auto group/btn cursor-pointer"
                >
                  <span className="font-medium text-[13px] sm:text-[15px]">Read More</span>
                  <div className="bg-[#ff5e14] w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[38px] md:h-[38px] rounded-full flex items-center justify-center group-hover/btn:rotate-[-45deg] transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
                  </div>
                </Link>

              </div>
            </motion.div>
            );
          })}
        </motion.div>
        
        {showPagination && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 lg:mt-10 flex justify-center items-center gap-2.5"
          >
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="w-11 h-11 rounded-full bg-white text-[#0e2a46] border border-gray-200 flex items-center justify-center hover:border-[#ff5e14] hover:text-[#ff5e14] transition-colors cursor-pointer"
                aria-label="Previous page"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              </button>
            )}

            {getPageNumbers().map((page, idx) =>
              page === "ellipsis" ? (
                <span key={`ellipsis-${idx}`} className="w-11 h-11 rounded-full bg-white text-[#0e2a46] border border-gray-200 flex items-center justify-center font-semibold">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-11 h-11 rounded-full text-[15px] font-semibold border transition-colors cursor-pointer ${
                    currentPage === page
                      ? "bg-[#ff5e14] text-white border-[#ff5e14] shadow-[0_8px_20px_rgba(255,94,20,0.25)]"
                      : "bg-white text-[#0e2a46] border-gray-200 hover:border-[#ff5e14] hover:text-[#ff5e14]"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className="w-11 h-11 rounded-full bg-white text-[#0e2a46] border border-gray-200 flex items-center justify-center hover:border-[#ff5e14] hover:text-[#ff5e14] transition-colors cursor-pointer"
                aria-label="Next page"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            )}
          </motion.div>
        )}

        {!showPagination && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 lg:mt-6 flex justify-center"
          >
            <Link
              href="/blog"
              className="bg-[#ff5e14] text-white rounded-full p-[4px] pl-6 sm:p-[5px] sm:pl-8 flex items-center gap-4 sm:gap-5 hover:bg-[#e04f0d] hover:shadow-[0_10px_30px_rgba(255,94,20,0.3)] transition-all duration-300 group/btn cursor-pointer"
            >
              <span className="font-semibold text-[14px] sm:text-[16px]">{data.buttonText || "View All"}</span>
              <div className="bg-white text-[#ff5e14] w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
              </div>
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}
