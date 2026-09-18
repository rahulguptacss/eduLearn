"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CoursesPageData } from "../../types";
import {
  Star,
  Clock,
  ArrowRight,
  Bookmark,
  Code,
  BarChart,
  Stethoscope,
  Camera,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web Development": return <Code size={13} />;
    case "Finance": return <BarChart size={13} />;
    case "Medical": return <Stethoscope size={13} />;
    case "Photography": return <Camera size={13} />;
    default: return <Bookmark size={13} />;
  }
};

const getCategoryColor = (idx: number) => {
  return idx % 2 === 0 ? "bg-[#0e2a46]" : "bg-[#ff5e14]";
};

export default function Courses({ data }: { data: CoursesPageData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 9;

  // Filtering States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(data.sidebar.priceRange.max);
  const [sortBy, setSortBy] = useState("Most Popular");

  const handleToggle = (
    currentList: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setList(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLevels([]);
    setSelectedDurations([]);
    setMaxPrice(data.sidebar.priceRange.max);
    setSortBy("Most Popular");
    setCurrentPage(1);
  };

  // Dynamic Counts Calculation
  const categoryCounts = data.courses.reduce((acc, course) => {
    acc[course.category] = (acc[course.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const levelCounts = data.courses.reduce((acc, course) => {
    if (course.level) acc[course.level] = (acc[course.level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const durationCounts = data.courses.reduce((acc, course) => {
    acc[course.duration] = (acc[course.duration] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Filter Logic
  let filteredCourses = data.courses.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const matchLevel = selectedLevels.length === 0 || (course.level && selectedLevels.includes(course.level));
    const matchDuration = selectedDurations.length === 0 || selectedDurations.includes(course.duration);
    const matchPrice = course.price <= maxPrice;

    return matchSearch && matchCategory && matchLevel && matchDuration && matchPrice;
  });

  // Sort Logic
  filteredCourses = filteredCourses.sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    if (sortBy === "Newest") return b.rating - a.rating; // mock newest by rating
    return 0; // Most Popular (default order)
  });

  // Pagination Logic
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / itemsPerPage));
  const currentCourses = filteredCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="bg-[#f8fbfd] pt-2 pb-4 lg:pt-4 lg:pb-6 px-4 sm:px-8 lg:px-12 font-sans relative">


      <div className="max-w-[1400px] mx-auto relative z-20">

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-4 lg:mb-8 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#ff5e14] font-bold tracking-[2px] text-[13px] uppercase flex items-center justify-center gap-4 mb-3"
          >
            <span className="w-12 h-[1.5px] bg-[#ff5e14]"></span>
            {data.subtitle}
            <span className="w-12 h-[1.5px] bg-[#ff5e14]"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0e2a46] leading-[1.2] mb-3"
          >
            {data.title.replace(data.titleHighlight || "", "")}
            <span className="text-[#ff5e14]">{data.titleHighlight}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-[#6b7280] text-[13px] sm:text-[14px] max-w-[700px] mx-auto font-medium"
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start">

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-[300px] shrink-0 bg-white rounded-xl shadow-[0_5px_30px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden lg:sticky lg:top-24 z-10"
          >
            <div 
              className="bg-[#0e2a46] p-4 flex items-center justify-between text-white cursor-pointer lg:cursor-default"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className="flex items-center gap-3">
                <Filter size={18} />
                <h3 className="font-bold text-[16px]">{data.sidebar.title}</h3>
              </div>
              <div className="lg:hidden">
                {isFilterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            <div className={`p-6 flex-col gap-6 ${isFilterOpen ? 'flex' : 'hidden lg:flex'}`}>
              {/* Search */}
              <div>
                <h4 className="font-bold text-[#0e2a46] text-[15px] mb-3">Search Course</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full border border-gray-200 rounded-lg pl-3 pr-10 py-2.5 text-[13px] focus:outline-none focus:border-[#ff5e14] transition-colors"
                  />
                  <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-bold text-[#0e2a46] text-[15px] mb-3">Course Category</h4>
                <div className="flex flex-col gap-2.5">
                  {data.sidebar.categories
                    .filter(cat => categoryCounts[cat.label] > 0)
                    .map((cat, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.label)}
                          onChange={() => { handleToggle(selectedCategories, setSelectedCategories, cat.label); setCurrentPage(1); }}
                          className="w-4 h-4 rounded border-gray-300 text-[#ff5e14] focus:ring-[#ff5e14] cursor-pointer"
                        />
                        <span className="text-[13px] text-gray-600 font-medium group-hover:text-[#ff5e14] transition-colors flex-1">{cat.label}</span>
                        <span className="text-[12px] text-gray-400 font-bold">({String(categoryCounts[cat.label]).padStart(2, '0')})</span>
                      </label>
                    ))}
                </div>
              </div>

              {/* Course Level */}
              <div>
                <h4 className="font-bold text-[#0e2a46] text-[15px] mb-3">Course Level</h4>
                <div className="flex flex-col gap-2.5">
                  {data.sidebar.levels
                    .filter(level => levelCounts[level.label] > 0)
                    .map((level, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedLevels.includes(level.label)}
                          onChange={() => { handleToggle(selectedLevels, setSelectedLevels, level.label); setCurrentPage(1); }}
                          className="w-4 h-4 rounded border-gray-300 text-[#ff5e14] focus:ring-[#ff5e14] cursor-pointer"
                        />
                        <span className="text-[13px] text-gray-600 font-medium group-hover:text-[#ff5e14] transition-colors flex-1">{level.label}</span>
                        <span className="text-[12px] text-gray-400 font-bold">({String(levelCounts[level.label]).padStart(2, '0')})</span>
                      </label>
                    ))}
                </div>
              </div>

              {/* Course Duration */}
              <div>
                <h4 className="font-bold text-[#0e2a46] text-[15px] mb-3">Course Duration</h4>
                <div className="flex flex-col gap-2.5">
                  {data.sidebar.durations
                    .filter(dur => durationCounts[dur.label] > 0)
                    .map((dur, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedDurations.includes(dur.label)}
                          onChange={() => { handleToggle(selectedDurations, setSelectedDurations, dur.label); setCurrentPage(1); }}
                          className="w-4 h-4 rounded border-gray-300 text-[#ff5e14] focus:ring-[#ff5e14] cursor-pointer"
                        />
                        <span className="text-[13px] text-gray-600 font-medium group-hover:text-[#ff5e14] transition-colors flex-1">{dur.label}</span>
                        <span className="text-[12px] text-gray-400 font-bold">({String(durationCounts[dur.label]).padStart(2, '0')})</span>
                      </label>
                    ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-[#0e2a46] text-[15px]">Max Price</h4>
                  <span className="text-[14px] font-bold text-[#ff5e14]">${maxPrice}</span>
                </div>

                <input
                  type="range"
                  min={data.sidebar.priceRange.min}
                  max={data.sidebar.priceRange.max}
                  value={maxPrice}
                  onChange={(e) => { setMaxPrice(parseInt(e.target.value)); setCurrentPage(1); }}
                  className="w-full h-1.5 bg-gray-200 rounded-full appearance-none outline-none focus:outline-none accent-[#ff5e14] cursor-pointer"
                />
                <div className="flex justify-between items-center text-[12px] font-bold text-gray-500 mt-2">
                  <span>${data.sidebar.priceRange.min}</span>
                  <span>${data.sidebar.priceRange.max}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="w-full bg-transparent hover:bg-gray-50 text-gray-500 hover:text-[#ff5e14] border border-gray-200 font-bold text-[14px] py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </motion.div>

          {/* Grid Area */}
          <div className="flex-1 w-full flex flex-col">
            {/* Top Bar for Grid */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 border-b border-gray-200 pb-4">
              <p className="text-[14px] text-gray-600 font-medium">
                Showing <span className="font-bold text-[#0e2a46]">
                  {filteredCourses.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}-
                  {Math.min(currentPage * itemsPerPage, filteredCourses.length)}
                </span> of {filteredCourses.length} courses
              </p>
              <div className="flex items-center gap-2 text-[13px] font-bold text-gray-600">
                <span>Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-md py-1.5 px-3 focus:outline-none focus:border-[#ff5e14] text-[#0e2a46] font-bold cursor-pointer"
                >
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Courses Grid */}
            {currentCourses.length > 0 ? (
              <motion.div
                key={currentPage + searchQuery + selectedCategories.join() + maxPrice + sortBy}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {currentCourses.map((course, idx) => (
                  <Link href={`/courses/${course.id}`} key={idx} className="block h-full">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                      }}
                      className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 text-left flex flex-col h-full group"
                    >
                      <div className="p-3 pb-0">
                        <div className="relative h-[180px] w-full rounded-[16px] overflow-hidden">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
  
                          <div className="absolute top-3 left-3 z-10">
                            <div className={`text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm ${getCategoryColor(idx)}`}>
                              {getCategoryIcon(course.category)}
                              {course.category}
                            </div>
                          </div>
  
                          <div className="absolute top-3 right-3 z-10">
                            <div className="bg-white text-[#0e2a46] text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                              <Clock size={12} className="text-[#0e2a46]" strokeWidth={2.5} />
                              {course.duration}
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="p-5 pb-4 flex flex-col flex-1">
                        <div className="flex justify-between items-start gap-3 mb-1">
                          <h3 className="text-[15px] font-bold text-[#0e2a46] leading-[1.3] flex-1 line-clamp-2 hover:text-[#ff5e14] transition-colors cursor-pointer">
                            {course.title}
                          </h3>
                          <div className="flex flex-col items-end shrink-0 pt-0.5">
                            <div className="flex items-center gap-1 font-bold text-[#0e2a46] text-[14px]">
                              <Star size={14} className="text-[#ff5e14]" fill="currentColor" /> {course.rating}
                            </div>
                            <span className="text-[10px] font-medium text-gray-500 mt-0.5">({course.reviews})</span>
                          </div>
                        </div>
  
                        <p className="text-[12px] font-medium text-gray-500 leading-relaxed mb-2 line-clamp-2 pr-2">
                          {course.description}
                        </p>
  
                        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
                          <div className="flex items-end gap-1.5">
                            <span className="text-[22px] font-extrabold text-[#ff5e14] leading-none">${course.price}</span>
                            <span className="text-[13px] font-bold text-gray-400 line-through leading-none pb-[2px]">${course.originalPrice}</span>
                          </div>
                          <button className="bg-[#ff5e14] hover:bg-[#e04f0d] text-white text-[12px] font-bold pl-4 pr-1.5 py-1.5 rounded-full flex items-center gap-2.5 transition-all">
                            Read More
                            <span className="bg-white rounded-full text-[#ff5e14] w-[22px] h-[22px] flex items-center justify-center shrink-0">
                              <ArrowRight size={13} strokeWidth={3} />
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100">
                <Search size={48} className="text-gray-300 mb-4" />
                <h3 className="text-[18px] font-bold text-[#0e2a46] mb-2">No Courses Found</h3>
                <p className="text-gray-500 text-[14px]">Try adjusting your search or filters to find what you're looking for.</p>
                <button onClick={handleReset} className="mt-6 text-[#ff5e14] font-bold text-[14px] hover:underline">
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0e2a46] hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} strokeWidth={3} />
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-colors ${currentPage === i + 1 ? 'bg-[#ff5e14] text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0e2a46] hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} strokeWidth={3} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
