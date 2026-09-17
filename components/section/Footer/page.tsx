import React from "react";
import { FooterData } from "../../types";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const socialIconMap: Record<string, React.ElementType> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-[#05192c] text-[#aebfd0] pt-8 pb-4 px-4 sm:px-8 lg:px-16 relative z-10 font-sans">
      
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-x-8 gap-y-8 mb-8">
        
        {/* Logo and Description */}
        <div className="pr-0 lg:pr-8">
          <div className="mb-2">
            <Link href="/">
              <Image 
                src="/logo/footerlogo.png" 
                alt="EduLearn Logo" 
                width={280} 
                height={90} 
                className="w-auto h-20 object-contain"
              />
            </Link>
          </div>
          <p className="mb-6 leading-relaxed text-[15px] max-w-[320px]">
            {data.description}
          </p>
          <div className="flex items-center gap-3">
            {data.socialLinks.map((social, idx) => {
              const Icon = socialIconMap[social.icon] || FacebookIcon;
              return (
                <a key={idx} href={social.href} className="w-[38px] h-[38px] rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ff5e14] hover:border-[#ff5e14] text-white transition-all duration-300">
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Link Groups */}
        {data.linkGroups.map((group, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-white text-[18px] font-bold mb-3">{group.title}</h3>
            <div className="w-10 h-[2px] bg-[#ff5e14] mb-6"></div>
            <ul className="flex flex-col gap-4">
              {group.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link href={link.href} className="hover:text-white transition-colors flex items-center gap-3 text-[15px] group">
                    <ChevronRight size={14} className="text-white group-hover:text-[#ff5e14] transition-colors" /> 
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        {/* Contact Info */}
        <div>
          <h3 className="text-white text-[18px] font-bold mb-3">Contact Us</h3>
          <div className="w-10 h-[2px] bg-[#ff5e14] mb-6"></div>
          
          <ul className="flex flex-col gap-5">
            {/* Phone */}
            <li className="flex items-center gap-5">
              <div className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ff5e14" stroke="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-[15px] leading-tight">{data.contactInfo.phone}</p>
                {data.contactInfo.phoneSubText && (
                  <p className="text-[#aebfd0] text-[14px]">{data.contactInfo.phoneSubText}</p>
                )}
              </div>
            </li>
            
            {/* Email */}
            <li className="flex items-center gap-5">
              <div className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ff5e14" stroke="none">
                  <path d="M2 5.5l10 6 10-6v-1a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1z" />
                  <path d="M2 8.5v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8l-10 6-10-6z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-[15px] leading-tight">{data.contactInfo.email}</p>
                {data.contactInfo.emailSubText && (
                  <p className="text-[#aebfd0] text-[14px]">{data.contactInfo.emailSubText}</p>
                )}
              </div>
            </li>
            
            {/* Location */}
            <li className="flex items-center gap-5">
              <div className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ff5e14" stroke="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-[15px] leading-tight">
                  {data.contactInfo.address.split('\n').map((item, key, arr) => (
                    <React.Fragment key={key}>
                      {item}
                      {key !== arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
      
      {/* Copyright */}
      <div className="max-w-[1400px] mx-auto border-t border-white/10 pt-6 pb-2 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 text-[11px] sm:text-[14px] text-[#aebfd0]">
        <p className="text-center md:text-left leading-relaxed">Copyright © {new Date().getFullYear()}. All rights reserved. Powered by <span className="text-white font-medium">Lestow</span></p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
      </div>
      
    </footer>
  );
}
