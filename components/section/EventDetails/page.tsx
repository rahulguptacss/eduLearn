"use client";

import React from "react";
import Image from "next/image";
import { 
  FaRegCalendarAlt, 
  FaRegClock, 
  FaGraduationCap, 
  FaUsers, 
  FaMusic, 
  FaUtensils,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaRegCommentDots,
  FaLock,
  FaArrowRight
} from "react-icons/fa";

export interface EventDetailsData {
  header: {
    subtitle: string;
    title: string;
    date: string;
    time: string;
  };
  image: string;
  about: {
    title: string;
    paragraphs: string[];
    quote: string;
  };
  highlights: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  venue: {
    title: string;
    mapImage?: string;
    locationBox: {
      address: string;
      linkText: string;
    };
  };
  sidebar: {
    bookingForm: {
      title: string;
      description: string;
      buttonText: string;
      secureText: string;
    };
    eventInfo: {
      title: string;
      details: {
        icon: string;
        label: string;
        value: string;
      }[];
    };
  };
}

export default function EventDetails({ data: eventData }: { data?: EventDetailsData }) {
  if (!eventData) return null;

  return (
    <section className="pt-16 pb-16 px-4 sm:px-8 lg:px-16 bg-[#fafbfc]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Event Content */}
          <div className="lg:col-span-8">
            
            {/* Header / Meta */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[3px] bg-[#ff5e14] rounded-full"></span>
                <span className="text-[#021d38] font-extrabold tracking-[1.5px] text-[14px] uppercase">
                  {eventData.header.subtitle}
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#021d38] leading-[1.15] mb-5 tracking-tight">
                {eventData.header.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-6 text-[#5b6b7a] font-medium text-[15px]">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-[#ff5e14]" />
                  {eventData.header.date}
                </div>
                <div className="flex items-center gap-2">
                  <FaRegClock className="text-[#ff5e14]" />
                  {eventData.header.time}
                </div>
              </div>
            </div>
            
            {/* Main Image */}
            <div className="relative w-full aspect-[16/8] rounded-[12px] overflow-hidden mb-6 shadow-sm border border-[#f0f3f6]">
              <Image 
                src={eventData.image} 
                alt={eventData.header.title} 
                fill
                className="object-cover"
              />
            </div>
            
            {/* About This Event */}
            <div className="mb-6">
              <h3 className="text-[24px] font-bold text-[#021d38] mb-2">
                {eventData.about.title}
              </h3>
              {eventData.about.paragraphs.map((p, index) => (
                <p key={index} className="text-[#5b6b7a] text-[15px] leading-[1.8] mb-4">
                  {p}
                </p>
              ))}
              <div className="border-l-[4px] border-[#ff5e14] bg-white p-4 sm:p-5 mt-4 rounded-r-[8px] shadow-sm">
                <p className="text-[#021d38] font-medium italic text-[14px]">
                  {eventData.about.quote}
                </p>
              </div>
            </div>
            
            {/* Event Highlights */}
            <div className="mb-6">
              <h3 className="text-[24px] font-bold text-[#021d38] mb-4">
                {eventData.highlights.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {eventData.highlights.items.map((item, index) => {
                  let IconComponent = FaGraduationCap;
                  if (item.icon === "users") IconComponent = FaUsers;
                  if (item.icon === "music") IconComponent = FaMusic;
                  if (item.icon === "food") IconComponent = FaUtensils;
                  
                  return (
                    <div key={index} className="bg-white border border-[#f0f3f6] p-5 rounded-[10px] text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                      <div className="text-[28px] text-[#021d38] mb-3 flex justify-center">
                        <IconComponent />
                      </div>
                      <h4 className="font-bold text-[#021d38] text-[15px] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#5b6b7a] text-[13px] leading-tight">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Venue Location */}
            <div>
              <h3 className="text-[24px] font-bold text-[#021d38] mb-6">
                {eventData.venue.title}
              </h3>
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] rounded-[10px] overflow-hidden shadow-sm border border-[#f0f3f6]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448744572235!3d40.69766374876442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714578161136!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Map"
                ></iframe>
                
                {/* Floating location box to match screenshot */}
                <div className="absolute top-4 left-4 bg-white p-3 rounded shadow-md z-10 max-w-[200px] border border-[#f0f3f6]">
                  <h5 className="font-bold text-[#021d38] text-[13px] mb-0.5">{eventData.venue.locationBox.address}</h5>
                  <a href="#" className="text-[#2563eb] text-[11px] hover:underline">{eventData.venue.locationBox.linkText}</a>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Book Your Seat Form */}
              <div className="bg-[#021d38] rounded-[12px] p-6 sm:p-8 mb-8 text-white relative overflow-hidden shadow-lg">
                <h3 className="text-[22px] font-bold mb-2">
                {eventData.sidebar.bookingForm.title}
              </h3>
              <p className="text-white/70 text-[14px] mb-6 leading-relaxed">
                {eventData.sidebar.bookingForm.description}
              </p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[#5b6b7a]">
                    <FaUser />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Your Full Name *"
                    className="w-full bg-white text-[#021d38] text-[14px] py-3.5 pl-11 pr-4 rounded-[6px] outline-none focus:ring-2 focus:ring-[#ff5e14]/50 placeholder-[#5b6b7a]/70"
                  />
                </div>
                
                <div className="relative">
                  <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[#5b6b7a]">
                    <FaEnvelope />
                  </span>
                  <input 
                    type="email" 
                    placeholder="Your Email Address *"
                    className="w-full bg-white text-[#021d38] text-[14px] py-3.5 pl-11 pr-4 rounded-[6px] outline-none focus:ring-2 focus:ring-[#ff5e14]/50 placeholder-[#5b6b7a]/70"
                  />
                </div>
                
                <div className="relative">
                  <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[#5b6b7a]">
                    <FaPhoneAlt />
                  </span>
                  <input 
                    type="tel" 
                    placeholder="Your Phone Number *"
                    className="w-full bg-white text-[#021d38] text-[14px] py-3.5 pl-11 pr-4 rounded-[6px] outline-none focus:ring-2 focus:ring-[#ff5e14]/50 placeholder-[#5b6b7a]/70"
                  />
                </div>
                
                <div className="relative">
                  <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[#5b6b7a] z-10">
                    <FaUsers />
                  </span>
                  <select defaultValue="" className="w-full bg-white text-[#5b6b7a] text-[14px] py-3.5 pl-11 pr-4 rounded-[6px] outline-none focus:ring-2 focus:ring-[#ff5e14]/50 appearance-none relative">
                    <option value="" disabled>No. of Attendees *</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                  <span className="absolute top-1/2 -translate-y-1/2 right-4 text-[#5b6b7a] pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
                
                <div className="relative">
                  <span className="absolute top-4 left-4 text-[#5b6b7a]">
                    <FaRegCommentDots />
                  </span>
                  <textarea 
                    placeholder="Any Special Message (Optional)"
                    rows={3}
                    className="w-full bg-white text-[#021d38] text-[14px] py-3.5 pl-11 pr-4 rounded-[6px] outline-none focus:ring-2 focus:ring-[#ff5e14]/50 resize-none placeholder-[#5b6b7a]/70"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#ff5e14] text-white font-bold text-[15px] py-3.5 rounded-[6px] hover:bg-[#e04f0f] transition-colors flex justify-center items-center gap-2 mt-2"
                >
                  {eventData.sidebar.bookingForm.buttonText} <FaArrowRight className="text-[12px]" />
                </button>
              </form>
              
              <div className="flex items-center justify-center gap-2 mt-5 text-[12px] text-white/60">
                <FaLock className="text-[#facc15]" />
                {eventData.sidebar.bookingForm.secureText}
              </div>
            </div>
            
            {/* Event Information List */}
            <div className="bg-white rounded-[12px] p-6 sm:p-8 border border-[#f0f3f6] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <h3 className="text-[20px] font-bold text-[#021d38] mb-5 border-b border-[#f0f3f6] pb-4">
                {eventData.sidebar.eventInfo.title}
              </h3>
              
              <ul className="space-y-4">
                {eventData.sidebar.eventInfo.details.map((detail, index) => {
                  let IconComponent = FaRegCalendarAlt;
                  if (detail.icon === "clock") IconComponent = FaRegClock;
                  if (detail.icon === "map") IconComponent = FaMapMarkerAlt;
                  if (detail.icon === "email") IconComponent = FaEnvelope;
                  if (detail.icon === "phone") IconComponent = FaPhoneAlt;
                  
                  return (
                    <li key={index} className="flex justify-between items-center text-[14px]">
                      <div className="flex items-center gap-3 text-[#5b6b7a]">
                        <span className="text-[#ff5e14] bg-[#ff5e14]/10 w-8 h-8 rounded-[6px] flex items-center justify-center">
                          <IconComponent className="text-[14px]" />
                        </span>
                        <span className="font-semibold text-[#021d38]">{detail.label}</span>
                      </div>
                      <div className="font-medium text-[#5b6b7a] text-right max-w-[150px] sm:max-w-none">
                        {detail.value}
                      </div>
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
