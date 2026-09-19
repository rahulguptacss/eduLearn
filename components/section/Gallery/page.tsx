"use client";

import React from "react";
import PhotoGallery from "@/components/section/PhotoGallery/page";
import VideoGallery from "@/components/section/VideoGallery/page";

export default function Gallery({ photoData, videoData }: { photoData: any, videoData: any }) {
  if (!photoData || !videoData) return null;

  return (
    <section className="pt-8 md:pt-12 pb-8 md:pb-12 px-4 sm:px-8 lg:px-16 bg-[#fafbfc]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[#021d38] font-extrabold tracking-[1.5px] text-[13px] sm:text-[14px] uppercase flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <span className="w-8 h-[3px] bg-[#ff5e14] rounded-full"></span>
            {photoData.header.subtitle}
          </p>
          <h2 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold text-[#021d38] leading-[1.15] mb-5 tracking-tight">
            {photoData.header.title} <span className="text-[#ff5e14]">{photoData.header.titleHighlight}</span>
          </h2>
          <p className="text-[#5b6b7a] font-medium text-[15px] sm:text-[17px] max-w-[750px] mx-auto leading-[1.7]">
            {photoData.header.description}
          </p>
        </div>

        {/* Photo Gallery Component */}
        <PhotoGallery data={photoData} />

        {/* Video Gallery Component */}
        <VideoGallery data={videoData} />

      </div>
    </section>
  );
}
