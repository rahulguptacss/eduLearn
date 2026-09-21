"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaVideo, FaPlay, FaTimes } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function VideoGallery({ data }: { data: any }) {
  const [activeVideoFilter, setActiveVideoFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleFilterChange = (filter: string) => {
    setActiveVideoFilter(filter);
    setVisibleCount(8);
  };

  const filteredVideos = activeVideoFilter === "All"
    ? data.videos
    : data.videos.filter((v: any) => v.category === activeVideoFilter);
    
  const displayedVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-[#fff0ea] rounded-full flex items-center justify-center text-[#ff5e14] flex-shrink-0">
            <FaVideo size={32} />
          </div>
          <div>
            <h3 className="text-[26px] sm:text-[32px] font-extrabold text-[#021d38] mb-1 leading-tight tracking-tight">{data.title}</h3>
            <p className="text-[#5b6b7a] text-[14px] sm:text-[15px]">{data.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0" style={{ scrollbarWidth: 'none' }}>
          {data.filters.map((filter: string, idx: number) => (
            <button
              key={idx}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-[6px] text-[14px] sm:text-[15px] font-medium transition-colors border whitespace-nowrap flex-shrink-0 ${
                activeVideoFilter === filter
                  ? "bg-[#ff5e14] text-white border-[#ff5e14]"
                  : "bg-white text-[#2a3c54] border-[#dce4ec] hover:border-[#ff5e14] hover:text-[#ff5e14]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {displayedVideos.map((video: any) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="rounded-[12px] overflow-hidden aspect-[4/3] relative mb-4">
                <Image 
                  src={video.thumbnail} 
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-[12px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-[2px] border-white flex items-center justify-center text-white bg-black/30 group-hover:bg-[#ff5e14] group-hover:border-[#ff5e14] transition-colors duration-300">
                    <FaPlay size={14} className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#111111] text-white text-[12px] font-bold px-2 py-1 rounded-[6px] shadow-sm">
                  {video.duration}
                </div>
              </div>
              <h4 className="text-[#021d38] font-bold text-[16px] mb-1 group-hover:text-[#ff5e14] transition-colors">{video.title}</h4>
              <p className="text-[#5b6b7a] text-[13px]">{video.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button 
            onClick={() => setVisibleCount(prev => prev + 8)}
            className="px-8 py-2.5 rounded-full bg-white border border-[#1e2a47] text-[#1e2a47] font-semibold text-[15px] flex items-center gap-2 hover:bg-[#1e2a47] hover:text-white transition-colors shadow-sm"
          >
            View More Videos <FiArrowRight size={18} className="stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* Video Popup Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-[#ff5e14] text-white rounded-full flex items-center justify-center transition-colors"
              >
                <FaTimes size={18} />
              </button>
              <iframe
                src={selectedVideo.url || "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
