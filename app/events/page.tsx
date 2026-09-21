"use client";

import React from "react";
import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import Events from "@/components/section/Events/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";
import { motion } from "framer-motion";
import CTABanner from "@/components/section/CTABanner/page";

export default function EventsPage() {
  const templateData = data.categories.Education.templateComponents["template-1"];
  const sections = templateData.sections;
  const pageData = templateData.pages.eventsPage;

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Breadcrumb data={pageData.breadcrumb} />
        
        <Events data={sections.events} />
        <CTABanner data={sections.ctaBanner} />
      </motion.main>

      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
