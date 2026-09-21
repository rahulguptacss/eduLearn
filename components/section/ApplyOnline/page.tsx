"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Send,
  User,
  BookOpen,
  FileText,
  UploadCloud,
  Upload,
  ArrowRight,
  GraduationCap,
  Headset
} from "lucide-react";
import { FaGraduationCap, FaFileAlt, FaClock, FaUsers, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function ApplyOnline({ data }: { data: any }) {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const iconMap: any = {
    "graduation-cap": <FaGraduationCap size={28} />,
    "shield-check": <FaFileAlt size={24} />,
    "clock": <FaClock size={24} />,
    "users": <FaUsers size={28} />
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-[#fafbfc] relative z-10 font-sans overflow-hidden">

      {/* Background Decorative Elements */}
      {/* Top Right Circles */}
      <div className="absolute top-[-150px] right-[-150px] w-[700px] h-[700px] rounded-full border-[60px] border-[#eff5fb] opacity-80 z-0 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-[-50px] right-[-50px] w-[500px] h-[500px] rounded-full border-[40px] border-[#e6f2fc] opacity-60 z-0 pointer-events-none hidden lg:block"></div>

      {/* Dotted Pattern */}
      <div
        className="absolute top-12 left-1/2 lg:left-[42%] w-[220px] h-[220px] z-0 opacity-40 pointer-events-none hidden md:block"
        style={{ backgroundImage: 'radial-gradient(#a3c3e3 2.5px, transparent 2.5px)', backgroundSize: '18px 18px' }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* LEFT COLUMN - Information */}
          <motion.div
            className="w-full lg:w-[45%] flex flex-col gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-[3px] bg-[#ff5e14] rounded-full"></div>
                <span className="font-bold text-[#021d38] tracking-widest text-[14px] md:text-[15px] uppercase">
                  {data.subtitle}
                </span>
              </div>
              <h2 className="text-[36px] sm:text-[42px] md:text-[68px] font-black leading-[1.05] mb-6 tracking-tight text-[#021d38]">
                {data.title} <br className="hidden md:block" />
                <span className="text-[#ff5e14]">{data.titleHighlight}</span>
              </h2>
              <p className="text-[#5b6b7a] text-[16px] md:text-[19px] leading-[1.6] font-medium pr-4">
                {data.description}
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="flex flex-wrap md:flex-nowrap gap-y-8 md:gap-y-0 mt-2">
              {data.features.map((feature: any, idx: number) => (
                <div key={idx} className={`w-1/2 md:w-1/4 flex flex-col items-center text-center group ${idx !== data.features.length - 1 ? 'md:border-r border-gray-200/80' : ''} px-2`}>
                  <div className="w-16 h-16 rounded-full bg-[#e8f2fc] text-[#021d38] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                    {iconMap[feature.icon]}
                  </div>
                  <h4 className="font-extrabold text-[#021d38] text-[16px] leading-[1.2] mb-1.5">{feature.title}</h4>
                  <p className="text-[#64768c] text-[14px] leading-[1.4] px-1">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Image Block */}
            <motion.div variants={itemVariants} className="relative mt-2">
              <div className="relative w-full aspect-[10/9] sm:aspect-[10/11] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src={data.image}
                  alt="Student applying"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#021d38]/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl max-w-[85%] sm:max-w-[260px] border border-white/10"
              >
                <div className="text-[#ff5e14] mb-3">
                  <GraduationCap size={32} />
                </div>
                <p className="text-white font-semibold text-[17px] leading-snug italic mb-3">
                  {data.imageBadge}
                </p>
                <div className="w-10 h-1 bg-[#ff5e14]"></div>
              </motion.div>
            </motion.div>

            {/* Contact Box */}
            <motion.div variants={itemVariants} className="bg-[#f0f6fc] rounded-[16px] p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-row items-center justify-between w-full overflow-hidden">
              <div className="flex flex-col gap-5 xl:gap-6 shrink-1">
                <div className="flex items-center gap-3">
                  <div className="text-[#ff5e14]">
                    <Headset size={42} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#021d38] text-[19px] sm:text-[21px] mb-0.5">
                      {data.contactBlock.title}
                    </h3>
                    <p className="text-[#5b6b7a] text-[13px] sm:text-[14px]">{data.contactBlock.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white text-[#021d38] flex items-center justify-center shrink-0">
                      <FaPhoneAlt size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-[#021d38] text-[14px] sm:text-[15px]">{data.contactBlock.phone}</p>
                      <p className="text-[#5b6b7a] text-[12px] sm:text-[13px]">{data.contactBlock.phoneTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white text-[#021d38] flex items-center justify-center shrink-0">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-[#021d38] text-[14px] sm:text-[15px]">{data.contactBlock.email}</p>
                      <p className="text-[#5b6b7a] text-[12px] sm:text-[13px]">{data.contactBlock.emailTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white text-[#021d38] flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-[#021d38] text-[14px] sm:text-[15px] max-w-[180px] leading-snug">{data.contactBlock.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-[200px] bg-[#dce5ef] mx-2 sm:mx-4 shrink-0"></div>

              {/* Action Box */}
              <div className="flex flex-col items-center text-center shrink-0 w-[130px] sm:w-[150px]">
                <div className="text-[#021d38] mb-3">
                  <FaPaperPlane size={34} />
                </div>
                <h4 className="font-bold text-[#021d38] text-[17px] sm:text-[19px] leading-[1.25] mb-2">
                  {data.contactBlock.actionBox.title}
                </h4>
                <p className="text-[#5b6b7a] text-[13px] sm:text-[14px] leading-[1.4]">
                  {data.contactBlock.actionBox.subtitle}
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN - Application Form */}
          <motion.div
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-[24px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col h-full">

              {/* Form Header */}
              <div className="bg-[#021d38] px-8 py-5 md:px-10 md:py-6 text-white relative overflow-hidden">
                {/* Decorative shape */}
                <div className="absolute top-[-50%] right-[-10%] w-64 h-64 border-[30px] border-white/5 rounded-lg rotate-45 pointer-events-none"></div>
                <div className="absolute top-[20%] right-[-20%] w-48 h-48 border-[20px] border-white/5 rounded-lg rotate-45 pointer-events-none"></div>

                <h2 className="text-[28px] md:text-[34px] font-extrabold mb-3 relative z-10">
                  Online <span className="text-[#ff5e14]">Admission Form</span>
                </h2>
                <div className="w-12 h-1 bg-[#ff5e14] mb-4 relative z-10"></div>
                <p className="text-gray-300 text-[15px] max-w-md relative z-10">
                  Fill in your details below to apply for admission. Our team will get back to you shortly.
                </p>
              </div>

              {/* Form Body */}
              <form className="p-6 md:p-10 flex flex-col gap-10">

                {/* Section 1: Personal Information */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <User className="text-[#021d38]" size={22} />
                    <h3 className="font-bold text-[#021d38] text-[18px]">Personal Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter your full name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Date of Birth <span className="text-red-500">*</span></label>
                      <input type="date" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all text-gray-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Gender <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all text-gray-500">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Nationality <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all text-gray-500">
                        <option>Select Nationality</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                        <option>Canada</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" placeholder="Enter your email address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" placeholder="Enter your phone number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Alternate Phone Number</label>
                      <input type="tel" placeholder="Enter alternate phone number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Address <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter your complete address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all" />
                    </div>
                  </div>
                </div>

                {/* Section 2: Academic Information */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <GraduationCap className="text-[#021d38]" size={22} />
                    <h3 className="font-bold text-[#021d38] text-[18px]">Academic Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Select Course <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all text-gray-500">
                        <option>Select Course</option>
                        <option>Computer Science</option>
                        <option>Business Administration</option>
                        <option>Mechanical Engineering</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Select Program <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all text-gray-500">
                        <option>Select Program</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                        <option>Diploma</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Year of Admission <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all text-gray-500">
                        <option>Select Year</option>
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Last Qualification <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all text-gray-500">
                        <option>Select Qualification</option>
                        <option>High School</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Additional Information */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <FaFileAlt className="text-[#021d38]" size={22} />
                    <h3 className="font-bold text-[#021d38] text-[18px]">Additional Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Upload Documents</label>
                      <div className="w-full flex items-center border border-[#e2e8f0] rounded-md overflow-hidden bg-white h-[46px]">
                        <div className="bg-[#f0f4fa] h-full w-[52px] flex items-center justify-center border-r border-[#e2e8f0] text-[#021d38] shrink-0">
                          <Upload size={18} strokeWidth={2.5} />
                        </div>
                        <div
                          className="flex-1 flex items-center px-2.5 h-full cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={(e) => {
                            const target = e.currentTarget.nextElementSibling as HTMLInputElement;
                            if (target) target.click();
                          }}
                        >
                          <div className="bg-[#f0f4fa] text-[#021d38] text-[12px] font-semibold px-3 py-1.5 rounded mr-3">
                            Choose Files
                          </div>
                          <span className="text-[13px] text-[#8a99a8]">No file chosen</span>
                        </div>
                        <input type="file" className="hidden" />
                      </div>
                      <p className="text-[13px] text-[#8a99a8] mt-1.5">You can upload multiple files (PDF, JPG, PNG)</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">How did you hear about us?</label>
                      <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all text-gray-500">
                        <option>Select Option</option>
                        <option>Social Media</option>
                        <option>Friend / Family</option>
                        <option>Advertisement</option>
                        <option>Search Engine</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-[14px] font-semibold text-[#021d38]">Message (Optional)</label>
                      <textarea rows={4} placeholder="Write any additional information here..." className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#021d38] focus:ring-1 focus:ring-[#021d38] transition-all resize-none"></textarea>
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="flex flex-col gap-6 mt-2 pt-6 border-t border-gray-100">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded appearance-none checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer peer" defaultChecked />
                      <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-[14px] text-gray-600 leading-snug">
                      I agree to the <Link href="/terms-conditions" className="text-[#1d4ed8] hover:underline font-semibold">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-[#1d4ed8] hover:underline font-semibold">Privacy Policy</Link>.
                    </span>
                  </label>

                  <button
                    type="button"
                    className="w-full bg-[#ff5e14] hover:bg-[#e05312] text-white font-bold text-[16px] md:text-[18px] py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#ff5e14]/20 hover:shadow-xl hover:shadow-[#ff5e14]/30 transform hover:-translate-y-0.5"
                  >
                    Submit Application
                    <ArrowRight size={20} />
                  </button>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
