"use client";

import React from "react";
import Image from "next/image";
import { FacultyDetailsData } from "../../types";
import { motion } from "framer-motion";
import { 
  Users, Quote, Lightbulb, BookOpen, Target, Check, GraduationCap
} from "lucide-react";
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGraduationCap, FaUserFriends, FaQuoteLeft
} from "react-icons/fa";

export default function FacultyDetails({ data }: { data: FacultyDetailsData }) {
  // Mapping for contact icons
  const contactIcons = {
    email: <FaEnvelope size={20} className="text-[#021d38]" />,
    phone: <FaPhoneAlt size={18} className="text-[#021d38]" />,
    location: <FaMapMarkerAlt size={20} className="text-[#021d38]" />,
    degree: <FaGraduationCap size={22} className="text-[#021d38]" />,
    department: <FaUserFriends size={22} className="text-[#021d38]" />,
  };

  // Mapping for social icons
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook": return <FaFacebook size={16} />;
      case "twitter": return <FaTwitter size={16} />;
      case "instagram": return <FaInstagram size={16} />;
      case "linkedin": return <FaLinkedin size={16} />;
      default: return <FaFacebook size={16} />;
    }
  };

  // Mapping for feature icons
  const getFeatureIcon = (iconName: string, index: number) => {
    const isOrange = index === 1 || index === 3;
    const colorClass = isOrange ? "text-[#ff5e14]" : "text-white";
    
    switch (iconName) {
      case "users": return <Users size={32} className={colorClass} />;
      case "lightbulb": return <Lightbulb size={32} className={colorClass} />;
      case "book-open": return <BookOpen size={32} className={colorClass} />;
      case "target": return <Target size={32} className={colorClass} />;
      default: return <Users size={32} className={colorClass} />;
    }
  };

  return (
    <section className="pt-12 lg:pt-16 pb-8 lg:pb-12 px-4 sm:px-8 lg:px-12 bg-white relative z-10 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Title Section */}
        <div className="mb-6">
          <div className="text-[#021d38] font-extrabold tracking-[3px] text-[15px] uppercase flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#ff5e14]"></span>
            OUR <span className="text-[#ff5e14]">FACULTY</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[60px] font-bold leading-tight">
            <span className="text-[#021d38]">{data.name}</span> <span className="text-[#ff5e14]">{data.role}</span>
          </h2>
          <h3 className="text-[#021d38] text-[20px] md:text-[24px] font-bold mt-2">
            {data.department}
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Profile Sidebar */}
          <div className="w-full lg:w-[35%] flex flex-col">
            {/* Image & Experience Badge */}
            <div className="relative mb-5 flex flex-col items-center w-full">
              <div className="relative aspect-[3/4] w-full rounded-[10px] overflow-hidden bg-[#f5f5f5] shadow-sm">
                <Image 
                  src={data.image} 
                  alt={`${data.name} ${data.role}`} 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="bg-[#021d38] text-white p-5 rounded-[10px] flex items-center gap-5 w-full shadow-lg relative -mt-4 z-10">
                <span className="text-[36px] md:text-[42px] font-bold leading-none">{data.experience.years}</span>
                <span className="text-[14px] leading-tight text-gray-200 whitespace-pre-line font-medium">
                  {data.experience.text}
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#eef2f6] rounded-[10px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-full">
              {/* Contact Info List */}
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center shrink-0 w-6">
                    {contactIcons.email}
                  </div>
                  <a href={`mailto:${data.contactInfo.email}`} className="text-[#4b5563] font-medium hover:text-[#ff5e14] transition-colors text-[16px]">
                    {data.contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center shrink-0 w-6">
                    {contactIcons.phone}
                  </div>
                  <a href={`tel:${data.contactInfo.phone}`} className="text-[#4b5563] font-medium hover:text-[#ff5e14] transition-colors text-[16px]">
                    {data.contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center shrink-0 w-6">
                    {contactIcons.location}
                  </div>
                  <span className="text-[#4b5563] font-medium text-[16px]">
                    {data.contactInfo.location}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center shrink-0 w-6">
                    {contactIcons.degree}
                  </div>
                  <span className="text-[#4b5563] font-medium text-[16px]">
                    {data.contactInfo.degree}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center shrink-0 w-6">
                    {contactIcons.department}
                  </div>
                  <span className="text-[#4b5563] font-medium text-[16px]">
                    {data.contactInfo.department}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#eef2f6]">
                <span className="font-bold text-[#021d38] text-[16px]">Follow Me On</span>
                <div className="flex gap-3">
                  {data.socials.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.url}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform"
                      style={{
                        backgroundColor: 
                          social.icon === 'twitter' ? '#38bdf8' : 
                          social.icon === 'instagram' ? '#f43f5e' : 
                          social.icon === 'linkedin' ? '#0284c7' : '#3b5998'
                      }}
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="w-full lg:w-[65%] flex flex-col">
            
            {/* About Section */}
            <div className="mb-6">
              <h2 className="text-[24px] sm:text-[28px] md:text-[38px] font-extrabold mb-6 tracking-tight">
                <span className="text-[#021d38]">{data.about.title.split(' ')[0]}</span> <span className="text-[#ff5e14]">{data.about.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              {data.about.description.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-[1.8] text-[16px] mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote Block */}
            <div className="bg-[#f4f8fc] border-l-[4px] border-[#ff5e14] rounded-lg overflow-hidden py-4 px-6 md:py-5 md:px-8 mb-12 flex items-start gap-4">
              <div className="text-[#ff5e14] shrink-0 mt-1">
                <FaQuoteLeft size={28} />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-[#021d38] font-normal text-[15px] leading-[1.6] italic mb-1">
                  {data.quote.text}
                </p>
                <p className="text-[#ff5e14] font-normal text-[14px] text-right italic">
                  — {data.quote.author}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-b border-gray-100 pb-8">
              {data.features.map((feature, idx) => {
                const isOrange = idx === 1 || idx === 3;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${isOrange ? 'bg-[#fff5f0]' : 'bg-[#021d38]'}`}>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isOrange ? 'bg-white border-2 border-[#ff5e14]' : 'bg-[#021d38] border-2 border-white/20'}`}>
                          {getFeatureIcon(feature.icon, idx)}
                      </div>
                    </div>
                    <h4 className="font-bold text-[#021d38] text-[16px] leading-tight whitespace-pre-line">
                      {feature.title}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Teaching Philosophy */}
              <div className="bg-[#fcf8f5] rounded-xl p-8 border border-orange-50">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#ff5e14] flex items-center justify-center shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-[#021d38] text-[20px]">{data.teachingPhilosophy.title}</h4>
                </div>
                <p className="text-gray-600 leading-[1.7] text-[15px]">
                  {data.teachingPhilosophy.description}
                </p>
              </div>

              {/* Areas of Interest */}
              <div className="bg-[#f4f8fc] rounded-xl p-8 border border-blue-50">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#021d38] flex items-center justify-center shrink-0">
                    <BookOpen size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-[#021d38] text-[20px]">{data.areasOfInterest.title}</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  {data.areasOfInterest.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-white rounded-full p-0.5 shadow-sm shrink-0">
                        <Check size={14} className="text-[#021d38]" strokeWidth={3} />
                      </div>
                      <span className="text-gray-600 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
