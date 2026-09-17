"use client";

import React, { useState } from "react";
import { HeaderData } from "../../types";
import { Send, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ data }: { data: HeaderData }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!data) return null;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white py-3 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16 flex justify-between items-center shadow-sm sticky top-0 z-50"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/logo/logo.png" 
            alt={data.logoText || "Logo"} 
            width={300} 
            height={90} 
            className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain" 
            priority
          />
        </Link>
      </div>
      
      <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
        {data.menu.map((item, index) => {
          const isActive = item.label === "Home";
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Link 
                href={item.href} 
                className={`whitespace-nowrap font-semibold text-[15px] transition-colors pb-1 border-b-2 ${
                  isActive 
                    ? "text-primary border-primary" 
                    : "text-secondary hover:text-primary border-transparent"
                }`}
              >
                {item.label}
              </Link>
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
                <Link 
                  key={index}
                  href={item.href} 
                  className={`font-semibold ${item.label === "Home" ? "text-primary" : "text-secondary"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
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
