"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FacultyPageData } from "../../types";
import { FaFacebookF as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedinIn as Linkedin } from "react-icons/fa";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Faculty({ data }: { data: FacultyPageData }) {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-12 sm:mb-16 text-center"
        >
          <div className="text-[#ff5e14] font-bold tracking-[2px] text-[13px] uppercase flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-[1.5px] bg-[#ff5e14]"></span>
            <div className="flex items-center gap-1.5">
              <Users size={18} strokeWidth={2.5} />
              {data.subtitle}
            </div>
            <span className="w-10 h-[1.5px] bg-[#ff5e14]"></span>
          </div>
          
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#021d38] leading-[1.2]">
            {data.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-8">
          {data.members.slice(0, 6).map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col relative pt-[80px]"
            >
              {/* Blue Background Box */}
              <div className="bg-[#021d38] rounded-b-[20px] rounded-tl-[20px] absolute top-[80px] bottom-0 left-0 right-0 z-0 shadow-lg"></div>
              
              <div className="flex relative z-10 w-full">
                {/* Left Social Icons */}
                <div className="w-[85px] shrink-0 flex flex-col items-center gap-5 pt-8">
                  {member.socials.map((social, i) => {
                    let Icon = Facebook;
                    if (social.icon === 'twitter') Icon = Twitter;
                    if (social.icon === 'instagram') Icon = Instagram;
                    if (social.icon === 'linkedin') Icon = Linkedin;
                    
                    return (
                      <a 
                        key={i} 
                        href={social.url} 
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#021d38] hover:border-white transition-all shadow-sm"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
                
                {/* Image */}
                <Link href={`/faculty/${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex-1 -mt-[80px] bg-[#e4e6eb] relative aspect-[3/3.8] shadow-md rounded-tr-[20px] overflow-hidden group/img">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500" 
                  />
                </Link>
              </div>
              
              {/* Bottom Text */}
              <div className="relative z-10 pt-6 pb-7 text-center w-full">
                <Link href={`/faculty/${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="inline-block">
                  <h3 className="text-[#ff5e14] font-bold text-[22px] mb-1 hover:text-white transition-colors">{member.name}</h3>
                  <p className="text-gray-200 text-[15px] font-medium tracking-wide">{member.role}</p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
