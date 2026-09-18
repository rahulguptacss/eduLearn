"use client";

import React, { useState } from "react";
import { HeaderData } from "../../types";
import { Send, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header({ data }: { data: HeaderData }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  if (!data) return null;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white py-2.5 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16 flex justify-between items-center shadow-sm sticky top-0 z-50"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src={data.logo || "/logo/logo.png"} 
            alt={data.logoText || "Logo"} 
            width={300} 
            height={90} 
            className="h-12 sm:h-14 lg:h-[60px] w-auto object-contain" 
            priority
          />
        </Link>
      </div>
      
      <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
        {data.menu.map((item, index) => {
          const isActive = pathname === item.href || (item.href !== "/" && item.href !== "#" && pathname.startsWith(item.href));
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="relative group"
            >
              <Link 
                href={item.href} 
                className={`whitespace-nowrap font-semibold text-[15px] transition-all duration-300 pb-1 border-b-2 flex items-center gap-1 ${
                  isActive 
                    ? "text-primary border-primary" 
                    : "text-secondary hover:text-primary border-transparent hover:border-primary/30"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
                )}
              </Link>
              {item.hasDropdown && item.subItems && (
                <div className="absolute top-full left-0 mt-0 pt-5 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                  <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-2xl flex flex-col p-2 border border-gray-100">
                    {item.subItems.map((subItem, subIdx) => (
                      <Link 
                        key={subIdx} 
                        href={subItem.href}
                        className="px-4 py-2.5 text-[14.5px] font-semibold text-[#4b5563] hover:bg-[#fff4ed] hover:text-[#ff5e14] rounded-xl transition-all duration-200 flex items-center gap-2.5 group/sub"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e14] opacity-0 -ml-2 scale-0 group-hover/sub:opacity-100 group-hover/sub:ml-0 group-hover/sub:scale-100 transition-all duration-300"></span>
                        <span className="group-hover/sub:translate-x-1 transition-transform duration-300">{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </nav>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden lg:flex items-center gap-4"
      >
        <Link href="#" className="group whitespace-nowrap bg-secondary hover:bg-gray-800 text-white pl-6 pr-2 py-1.5 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-3">
          {data.contactButtonText}
          <div className="bg-white text-secondary rounded-full p-1.5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <Send size={18} className="-ml-0.5" />
          </div>
        </Link>
        <Link href="#" className="group whitespace-nowrap bg-primary hover:bg-orange-600 text-white pl-6 pr-2 py-1.5 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-3">
          {data.buttonText}
          <div className="bg-white text-primary rounded-full p-1.5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1.5">
            <ArrowRight size={18} />
          </div>
        </Link>
      </motion.div>

      {/* Mobile Menu Toggle */}
      <div className="xl:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-white bg-primary hover:bg-[#e05312] p-2 rounded-lg shadow-sm transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col xl:hidden overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              {data.menu.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <Link 
                      href={item.href} 
                      className={`font-semibold ${pathname === item.href || (item.href !== "/" && item.href !== "#" && pathname.startsWith(item.href)) ? "text-primary" : "text-secondary"}`}
                      onClick={(e) => {
                        if (item.hasDropdown && item.href === "#") {
                          e.preventDefault();
                          toggleSubmenu(item.label);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <button 
                        onClick={() => toggleSubmenu(item.label)}
                        className={`p-1.5 focus:outline-none rounded-md transition-colors ${openSubmenus.includes(item.label) ? "bg-[#fff4ed] text-[#ff5e14]" : "text-secondary hover:bg-gray-50"}`}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className={`transition-transform duration-300 ${openSubmenus.includes(item.label) ? "rotate-180" : ""}`}
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {item.hasDropdown && item.subItems && openSubmenus.includes(item.label) && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 flex flex-col gap-3.5 ml-2 py-2 mt-1">
                          {item.subItems.map((sub, subIdx) => (
                            <motion.div
                              key={subIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIdx * 0.05 }}
                            >
                              <Link 
                                href={sub.href}
                                className="text-[14.5px] font-semibold text-[#4b5563] hover:text-[#ff5e14] transition-all duration-200 flex items-center gap-2.5 group/sub"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e14] opacity-0 -ml-2 scale-0 group-hover/sub:opacity-100 group-hover/sub:ml-0 group-hover/sub:scale-100 transition-all duration-300"></span>
                                <span className="group-hover/sub:translate-x-1 transition-transform duration-300">{sub.label}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <div className="flex flex-row gap-2 sm:gap-4 mt-4 pt-4 border-t border-gray-100">
                <Link href="#" className="flex-1 group bg-secondary hover:bg-gray-800 text-white pl-3 sm:pl-6 pr-1 sm:pr-2 py-1.5 rounded-xl font-semibold text-[13px] sm:text-[15px] transition-all hover:shadow-md flex items-center justify-between w-full sm:w-auto">
                  <span className="whitespace-nowrap truncate">{data.contactButtonText}</span>
                  <div className="bg-white text-secondary rounded-full p-1 sm:p-1.5 ml-1 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                    <Send size={16} className="-ml-0.5" />
                  </div>
                </Link>
                <Link href="#" className="flex-1 group bg-primary hover:bg-orange-600 text-white pl-3 sm:pl-6 pr-1 sm:pr-2 py-1.5 rounded-xl font-semibold text-[13px] sm:text-[15px] transition-all hover:shadow-md flex items-center justify-between w-full sm:w-auto">
                  <span className="whitespace-nowrap truncate">{data.buttonText}</span>
                  <div className="bg-white text-primary rounded-full p-1 sm:p-1.5 ml-1 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
