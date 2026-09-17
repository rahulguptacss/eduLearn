import React from "react";
import { Mail, MapPin } from "lucide-react";
import { TopbarData } from "../../types";

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

export default function Topbar({ data }: { data: TopbarData }) {
  if (!data) return null;

  return (
    <div className="hidden md:flex bg-secondary text-white py-2 sm:py-3 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16 flex-col md:flex-row justify-between items-center text-[13px] sm:text-[14px] border-b border-gray-800">
      
      {/* Left side: Contact Info */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-x-5 gap-y-1.5 mb-2.5 md:mb-0 font-medium w-full md:w-auto text-center sm:text-left">
        <div className="flex items-start sm:items-center justify-center gap-2">
          <MapPin size={16} className="text-primary fill-transparent shrink-0 mt-0.5 sm:mt-0" />
          <span className="tracking-wide leading-tight">{data.address}</span>
        </div>
        <span className="text-gray-500 hidden sm:inline">|</span>
        <div className="flex items-center justify-center gap-2">
          <Mail size={16} className="text-primary shrink-0" />
          <span className="tracking-wide">{data.email}</span>
        </div>
      </div>

      {/* Right side: Social Links */}
      <div className="flex items-center justify-center gap-3 font-medium w-full md:w-auto">
        <span>{data.followText}</span>
        <div className="flex items-center gap-3 sm:gap-4">
          {data.socialLinks.map((social, index) => {
            const Icon = socialIconMap[social.icon] || FacebookIcon;
            return (
              <React.Fragment key={index}>
                <a 
                  href={social.href} 
                  className="hover:text-primary transition-colors text-white flex items-center justify-center"
                  aria-label={social.icon}
                >
                  <Icon size={15} />
                </a>
                {index < data.socialLinks.length - 1 && (
                  <span className="text-gray-500 font-light hidden sm:inline">|</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

    </div>
  );
}
