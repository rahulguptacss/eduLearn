"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CourseDetailData } from "../../types";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Heart,
  Monitor,
  Clock,
  Infinity,
  Award,
  Video,
  Download,
  Smartphone,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Users,
  FileText,
  Hourglass,
  PlusCircle,
  MinusCircle,
  Globe,
  BookOpen,
  RefreshCw,
  Calendar,
  PlaySquare
} from "lucide-react";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const getIconForInclude = (text: string) => {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("lecture")) return <Monitor size={18} className="text-[#0e2a46]" />;
  if (lowerText.includes("duration") || lowerText.includes("week")) return <Calendar size={18} className="text-[#0e2a46]" />;
  if (lowerText.includes("lifetime")) return <Infinity size={18} className="text-[#0e2a46]" />;
  if (lowerText.includes("certificate")) return <FileText size={18} className="text-[#0e2a46]" />;
  if (lowerText.includes("video")) return <PlaySquare size={18} className="text-[#0e2a46]" />;
  if (lowerText.includes("resource") || lowerText.includes("download")) return <Download size={18} className="text-[#0e2a46]" />;
  if (lowerText.includes("mobile") || lowerText.includes("tv")) return <Smartphone size={18} className="text-[#0e2a46]" />;
  return <CheckCircle2 size={18} className="text-[#0e2a46]" />;
};

export default function CourseDetail({ data }: { data: CourseDetailData }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = ["Overview", "Curriculum", "Instructor", "Reviews", "FAQs"];

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-[#f8fbfd] pt-12 pb-4 lg:pt-20 lg:pb-4 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full flex flex-col"
        >
          {/* Breadcrumb Tag */}
          <div className="bg-[#0e2a46] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full w-fit mb-4 sm:mb-5">
            {data.category}
          </div>

          <h2 className="text-[24px] sm:text-[36px] font-extrabold text-[#0e2a46] leading-[1.2] mb-3 sm:mb-4">
            {data.title}
          </h2>

          <p className="text-[#415e79] text-[13px] sm:text-[15px] font-medium mb-5 sm:mb-6 leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-6 text-[12px] sm:text-[14px] font-bold text-[#0e2a46] mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 w-full sm:w-auto mb-1 sm:mb-0">
              <Star size={16} className="text-[#ff5e14]" fill="currentColor" />
              <span>{data.rating}</span>
              <span className="text-[#415e79] font-medium">({data.students} Students)</span>
            </div>
            <span className="text-gray-300 font-medium">|</span>
            <span>{data.level}</span>
            <span className="text-gray-300 font-medium">|</span>
            <span>{data.duration}</span>
            <span className="text-gray-300 font-medium">|</span>
            <span>{data.certifications}</span>
          </div>

          {/* Video Preview */}
          <div className="relative w-full h-[250px] sm:h-[400px] rounded-2xl overflow-hidden mb-6 sm:mb-10 shadow-lg group bg-black">
            {!isPlaying ? (
              <>
                <Image 
                  src={data.videoPreviewImage} 
                  alt="Course Preview" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform"
                  >
                    <Play size={24} className="text-[#ff5e14] ml-1" fill="currentColor" />
                  </button>
                </div>
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[12px] font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#ff5e14] transition-colors"
                >
                  <Play size={14} fill="currentColor" /> Preview This Course
                </button>
              </>
            ) : (
              <video
                className="w-full h-full object-cover sm:object-contain"
                controls
                autoPlay
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              >
                Your browser does not support HTML video.
              </video>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 sm:gap-0 mb-5 sm:mb-8 bg-[#f2f8fc] p-2 rounded-2xl w-full sm:w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-[13.5px] sm:text-[15px] font-bold transition-all duration-300 ${
                  activeTab === tab 
                  ? "bg-[#ff5e14] text-white shadow-sm" 
                  : "bg-transparent text-[#0e2a46] hover:bg-white/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-6 sm:py-10 px-4 sm:px-8">
            
            {/* Overview Tab */}
            {activeTab === "Overview" && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col">
                
                {/* About This Course */}
                <div className="mb-10">
                  <h3 className="text-[20px] font-extrabold text-[#0e2a46] mb-5 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#ff5e14]">About This Course</h3>
                  <p className="text-[#415e79] text-[14px] leading-[1.8] whitespace-pre-line font-medium">
                    {data.overview.about}
                  </p>
                </div>

                {/* Who is this course for? */}
                <div className="bg-[#f2f8fc] p-6 rounded-xl mb-10">
                  <h3 className="text-[17px] font-extrabold text-[#0e2a46] mb-2">Who is this course for?</h3>
                  <p className="text-[#415e79] text-[14px] font-medium leading-relaxed">
                    {data.overview.whoIsThisFor}
                  </p>
                </div>

                {/* What You'll Learn */}
                <div className="mb-10">
                  <h3 className="text-[20px] font-extrabold text-[#0e2a46] mb-5 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#ff5e14]">What You'll Learn</h3>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    {data.overview.whatYouWillLearn.map((item, idx) => (
                      <div key={idx} className={`p-4 text-[#415e79] text-[14px] font-medium ${idx !== data.overview.whatYouWillLearn.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Requirements */}
                <div className="mb-10">
                  <h3 className="text-[20px] font-extrabold text-[#0e2a46] mb-5 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#ff5e14]">Course Requirements</h3>
                  <p className="text-[#415e79] text-[14px] font-medium leading-relaxed">
                    {data.overview.requirements}
                  </p>
                </div>

                {/* Certification */}
                <div className="mb-2">
                  <h3 className="text-[20px] font-extrabold text-[#0e2a46] mb-5 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#ff5e14]">Certification</h3>
                  <p className="text-[#415e79] text-[14px] font-medium leading-relaxed">
                    {data.overview.certification}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Curriculum Tab */}
            {activeTab === "Curriculum" && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 pb-4 relative gap-4">
                    <div className="flex flex-col gap-2 relative pb-4 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 sm:after:w-16 after:h-[2px] after:bg-[#ff5e14]">
                      <h3 className="text-[22px] sm:text-[26px] font-extrabold text-[#0e2a46] leading-none">
                        Course <span className="text-[#ff5e14]">Curriculum</span>
                      </h3>
                      <p className="text-[#415e79] text-[13px] sm:text-[14px] font-medium leading-snug">
                        A step-by-step learning path designed to take you from beginner to job-ready.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-[13px] sm:text-[14px] font-bold text-[#0e2a46]">
                      <div className="flex items-center gap-2">
                        <Monitor size={16} className="text-[#415e79]" /> {data.curriculum.totalLectures} Lectures
                      </div>
                      <span className="text-gray-300 font-medium hidden sm:block">|</span>
                      <div className="flex items-center gap-2">
                        <Hourglass size={16} className="text-[#415e79]" /> {data.curriculum.totalWeeks} Weeks
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {data.curriculum.modules.map((module, idx) => {
                      const isOpen = openModule === idx;
                      const num = String(idx + 1).padStart(2, '0');
                      return (
                        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-[#f8fbfd]">
                          <button 
                            onClick={() => toggleModule(idx)}
                            className="w-full hover:bg-gray-50 p-3.5 sm:p-5 flex items-center justify-between transition-colors"
                          >
                            <div className="flex items-center gap-3 sm:gap-5 text-left">
                              <ChevronRight size={16} className={`text-[#0e2a46] transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0e2a46] text-white flex items-center justify-center font-extrabold text-[13px] sm:text-[15px] shrink-0">
                                {num}
                              </div>
                              <div className="flex flex-col gap-0.5 sm:gap-1">
                                <span className="font-extrabold text-[#0e2a46] text-[14.5px] sm:text-[16px] leading-tight">{module.title}</span>
                                {module.subtitle && (
                                  <span className="text-[#415e79] font-medium text-[12px] sm:text-[13px] leading-tight">{module.subtitle}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-6 text-[13px] sm:text-[14px] font-bold text-[#415e79]">
                              <div className="hidden sm:flex items-center gap-2">
                                <FileText size={16} />
                                <span>{module.lectures} Lectures</span>
                              </div>
                              <div className="hidden sm:flex items-center gap-2">
                                <Clock size={16} />
                                <span>{module.weeks}</span>
                              </div>
                              <ChevronDown size={18} className={`text-[#0e2a46] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </div>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: "auto", opacity: 1 }} 
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-white"
                              >
                                <div className="p-4 border-t border-gray-100 flex flex-col gap-3">
                                  {/* Lessons inside module */}
                                  {module.lessons?.map((lesson, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 px-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                                      <div className="flex items-center gap-3">
                                        <Video size={16} className="text-[#0e2a46]" />
                                        <span className="text-[14px] font-medium text-gray-600">{lesson.title}</span>
                                      </div>
                                      <div className="text-[12px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">{lesson.duration}</div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Instructor Tab */}
            {activeTab === "Instructor" && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="flex flex-col md:flex-row gap-6 items-stretch">
                  <div className="hidden md:block w-full md:w-[260px] shrink-0">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                      <Image src="/course-detail/instructor/rahul.png" alt={data.instructor.name} fill className="object-cover" />
                      <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-[#0e2a46]/90 to-transparent flex flex-col justify-end p-6">
                        <span className="text-white font-extrabold text-[16px] leading-[1.4]">Passionate About<br/>Teaching & Technology</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-[26px] font-extrabold text-[#0e2a46] leading-none mb-2">
                      Meet Your <span className="text-[#ff5e14]">Instructor</span>
                    </h3>
                    <h4 className="text-[24px] font-extrabold text-[#0e2a46] mb-1">{data.instructor.name}</h4>
                    <p className="text-[#415e79] font-medium text-[16px] mb-3">{data.instructor.role}</p>

                    <div className="flex flex-wrap items-center justify-between gap-y-6 mb-1 pb-1 border-b border-gray-100 w-full">
                      <div className="flex items-center gap-2">
                        <Star size={24} className="text-[#ff5e14]" fill="#ff5e14" />
                        <div className="flex flex-col">
                          <span className="text-[18px] font-extrabold text-[#0e2a46] leading-none mb-1">{data.instructor.rating}</span>
                          <span className="text-[12px] font-medium text-[#415e79]">Instructor Rating</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Users size={24} className="text-[#0e2a46]" fill="#0e2a46" />
                        <div className="flex flex-col">
                          <span className="text-[18px] font-extrabold text-[#0e2a46] leading-none mb-1">{data.instructor.students}</span>
                          <span className="text-[12px] font-medium text-[#415e79]">Students Trained</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <BookOpen size={24} className="text-[#0e2a46]" />
                        <div className="flex flex-col">
                          <span className="text-[18px] font-extrabold text-[#0e2a46] leading-none mb-1">{data.instructor.courses}</span>
                          <span className="text-[12px] font-medium text-[#415e79]">Courses</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Award size={24} className="text-[#0e2a46]" />
                        <div className="flex flex-col">
                          <span className="text-[18px] font-extrabold text-[#0e2a46] leading-none mb-1">{data.instructor.experience}</span>
                          <span className="text-[12px] font-medium text-[#415e79]">Experience</span>
                        </div>
                      </div>
                    </div>

                    <h5 className="font-extrabold text-[#0e2a46] text-[18px] mb-1">About {data.instructor.name}</h5>
                    <p className="text-[#415e79] text-[13px] leading-relaxed font-medium mb-2">
                      {data.instructor.about}
                    </p>

                    <h5 className="font-extrabold text-[#0e2a46] text-[18px] mb-1">Areas of Expertise</h5>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {data.instructor.areasOfExpertise.map((skill, i) => (
                        <span key={i} className="px-2 py-1 border border-[#b8d4e3] text-[#415e79] rounded-full text-[11px] font-bold bg-white">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {data.instructor.social.map((social, i) => {
                          let Icon: React.ElementType = FacebookIcon;
                          let bgClass = "bg-[#0e2a46]";
                          if (social.icon === 'twitter') { Icon = TwitterIcon; bgClass = "bg-black"; }
                          if (social.icon === 'linkedin') { Icon = LinkedinIcon; bgClass = "bg-[#0077b5]"; }
                          if (social.icon === 'youtube') { Icon = YoutubeIcon; bgClass = "bg-[#ff0000]"; }
                          if (social.icon === 'website') { Icon = Globe; bgClass = "bg-[#4e88d4]"; }
                          
                          return (
                            <a key={i} href={social.url} className={`w-10 h-10 rounded-full ${bgClass} flex items-center justify-center text-white hover:opacity-80 transition-opacity`}>
                              <Icon size={18} />
                            </a>
                          )
                        })}
                      </div>
                      
                      <button className="bg-[#ff5e14] text-white px-6 py-2.5 rounded-full font-extrabold text-[15px] flex items-center gap-3 hover:bg-[#e04f0d] transition-colors">
                        View All Courses
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#ff5e14]">
                          <ArrowRight size={16} strokeWidth={3} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Reviews Tab */}
            {activeTab === "Reviews" && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                  <div className="relative">
                    <h3 className="text-[28px] font-extrabold text-[#0e2a46] leading-none">
                      Student <span className="text-[#ff5e14]">Reviews</span>
                    </h3>
                    <div className="absolute left-0 -bottom-2 w-10 h-1 bg-[#ff5e14] rounded-full"></div>
                  </div>
                  
                  <button className="flex items-center gap-3 bg-[#ff5e14] hover:bg-[#e65512] text-white px-5 py-3 rounded-full font-bold text-[15px] transition-colors">
                    Write a Review
                    <div className="bg-white text-[#ff5e14] rounded-full p-1">
                      <ArrowRight size={16} strokeWidth={3} />
                    </div>
                  </button>
                </div>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4 mb-2">
                  
                  {/* Left Column (Rating Overview) */}
                  <div className="flex flex-col gap-6">
                    <div className="flex items-end gap-3">
                      <span className="text-[52px] font-extrabold text-[#0e2a46] leading-[0.8]">{data.reviewsData.average}</span>
                      <div className="flex flex-col gap-1 pb-1">
                        <div className="flex items-center gap-1 text-[#ff5e14]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={16} fill={i < Math.floor(data.reviewsData.average) ? "currentColor" : "none"} className={i >= Math.floor(data.reviewsData.average) ? "text-gray-300" : ""} />
                          ))}
                        </div>
                        <span className="text-[12px] font-medium text-gray-500">
                          ({data.reviewsData.total > 1000 ? (data.reviewsData.total/1000).toFixed(1) + 'K' : data.reviewsData.total} Students)
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      {data.reviewsData.breakdown.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="text-[13px] font-medium text-gray-500 w-[40px] shrink-0">{item.star} Star</span>
                          <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.percentage}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-[#ff5e14] rounded-full"
                            ></motion.div>
                          </div>
                          <span className="text-[13px] font-medium text-gray-500 w-[30px] text-right">
                            {item.percentage}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (Review Cards) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                    {data.reviewsData.reviewsList.map((review, idx) => (
                      <div key={idx} className="pt-6 pb-4 px-3 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative mb-4">
                          <Image src={review.image} alt={review.name} fill className="object-cover" />
                        </div>
                        <h4 className="font-extrabold text-[#0e2a46] text-[13px] mb-2">{review.name}</h4>
                        <div className="flex items-center gap-1 text-[#ff5e14] mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-300" : ""} />
                          ))}
                        </div>
                        <span className="text-[10px] font-medium text-gray-400 mb-4">{review.date}</span>
                        <p className="text-[#415e79] text-[11px] font-medium leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>


              </motion.div>
            )}

            {/* FAQs Tab */}
            {activeTab === "FAQs" && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <h3 className="text-[26px] font-extrabold text-[#0e2a46] leading-none mb-6">
                  Frequently Asked <span className="text-[#ff5e14]">Questions</span>
                </h3>
                <div className="flex flex-col gap-3">
                  {data.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                        <button 
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between transition-colors"
                        >
                          <span className="font-bold text-[#0e2a46] text-[15px] pr-8">{faq.question}</span>
                          <div className="shrink-0">
                            {isOpen ? (
                              <MinusCircle size={24} className="text-[#ff5e14]" fill="#ff5e14" color="white" strokeWidth={1.5} />
                            ) : (
                              <PlusCircle size={24} className="text-[#ff5e14]" strokeWidth={1.5} />
                            )}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }} 
                              animate={{ height: "auto", opacity: 1 }} 
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 sm:p-5 pt-0 text-[14px] text-[#415e79] font-medium leading-[1.8]">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>

        {/* Right Sticky Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[350px] shrink-0 flex flex-col gap-6 sticky top-24"
        >
          
          <div className="bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-50 overflow-hidden">
            <div className="p-6 pb-0">
              <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-6">
                <Image src={data.videoPreviewImage} alt={data.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-[#0e2a46] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {data.category}
                </div>
                <div className="absolute top-3 right-3 bg-white text-[#0e2a46] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                  <Clock size={12} strokeWidth={3} /> {data.duration}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[32px] font-extrabold text-[#ff5e14] leading-none">${data.price}</span>
                <span className="text-[20px] font-bold text-gray-400 line-through leading-none">${data.originalPrice}</span>
                <span className="bg-[#fff2ed] text-[#ff5e14] text-[12px] font-bold px-2.5 py-1 rounded-md ml-auto">
                  {data.discount}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#ff5e14] hover:bg-[#e04b07] text-white font-bold text-[15px] py-4 rounded-xl shadow-md shadow-[#ff5e14]/20 transition-all flex items-center justify-center gap-2 group"
                >
                  Enroll Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white hover:bg-gray-50 border-2 border-[#0e2a46] text-[#0e2a46] font-bold text-[15px] py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Heart size={18} /> Add to Wishlist
                </motion.button>
              </div>

            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-50">
            <h4 className="font-extrabold text-[#0e2a46] text-[18px] mb-2">This Course Includes</h4>
                <div className="flex flex-col">
                  {data.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      {getIconForInclude(item)}
                      <div className={`flex-1 text-[13.5px] font-medium text-[#0e2a46] py-3.5 ${idx !== data.includes.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-50">
                <h4 className="font-extrabold text-[#0e2a46] text-[18px] mb-2">Course Details</h4>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center text-[13.5px] border-b border-gray-100 py-3.5">
                    <span className="text-[#415e79] font-medium">Category</span>
                    <span className="font-bold text-[#0e2a46]">{data.details.category}</span>
                  </div>
                  <div className="flex justify-between items-center text-[13.5px] border-b border-gray-100 py-3.5">
                    <span className="text-[#415e79] font-medium">Level</span>
                    <span className="font-bold text-[#0e2a46]">{data.details.level}</span>
                  </div>
                  <div className="flex justify-between items-center text-[13.5px] border-b border-gray-100 py-3.5">
                    <span className="text-[#415e79] font-medium">Duration</span>
                    <span className="font-bold text-[#0e2a46]">{data.details.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-[13.5px] border-b border-gray-100 py-3.5">
                    <span className="text-[#415e79] font-medium">Students</span>
                    <span className="font-bold text-[#0e2a46]">{data.details.students}</span>
                  </div>
                  <div className="flex justify-between items-center text-[13.5px] border-b border-gray-100 py-3.5">
                    <span className="text-[#415e79] font-medium">Language</span>
                    <span className="font-bold text-[#0e2a46]">{data.details.language}</span>
                  </div>
                  <div className="flex justify-between items-center text-[13.5px] py-3.5">
                    <span className="text-[#415e79] font-medium">Last Updated</span>
                    <span className="font-bold text-[#0e2a46]">{data.details.lastUpdated}</span>
                  </div>
                </div>
              </div>

        </motion.div>

      </div>
    </section>
  );
}
