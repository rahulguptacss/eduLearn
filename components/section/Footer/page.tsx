import React from "react";
import { FooterData } from "../../types";
import { GraduationCap, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

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

const socialIconMap: Record<string, React.ElementType> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
};

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-secondary text-gray-300 pt-32 pb-8 px-4 sm:px-8 lg:px-16 relative z-10">
      
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 border-b border-gray-700 pb-16">
        
        {/* Logo and Description */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary text-white p-2 rounded-lg">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{data.logoText}</h2>
          </div>
          <p className="mb-8 leading-relaxed max-w-sm">
            {data.description}
          </p>
          <div className="flex items-center gap-4">
            {data.socialLinks.map((social, idx) => {
              const Icon = socialIconMap[social.icon] || FacebookIcon;
              return (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Link Groups */}
        {data.linkGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-white text-xl font-bold mb-6">{group.title}</h3>
            <ul className="flex flex-col gap-4">
              {group.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight size={14} className="text-primary" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        {/* Contact Info (In design it might be part of the grid, let's treat it as the last column) */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-4">
              <div className="bg-gray-800 p-3 rounded-full text-primary shrink-0 h-fit">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                <p className="text-white font-semibold">{data.contactInfo.phone}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="bg-gray-800 p-3 rounded-full text-primary shrink-0 h-fit">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email Address</p>
                <p className="text-white font-semibold">{data.contactInfo.email}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="bg-gray-800 p-3 rounded-full text-primary shrink-0 h-fit">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-white font-semibold">{data.contactInfo.address}</p>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
      
      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} <span className="text-white font-bold">{data.logoText}</span>. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
      </div>
      
    </footer>
  );
}
