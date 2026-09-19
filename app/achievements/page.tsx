"use client";

import React from "react";
import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import OurAchievements from "@/components/section/OurAchievements/page";
import AwardsRecognition from "@/components/section/AwardsRecognition/page";
import StudentSuccess from "@/components/section/StudentSuccess/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";
import { motion } from "framer-motion";

export default function AchievementsPage() {
  const pages = data.categories.Education.templateComponents["template-1"].pages;
  const sections = data.categories.Education.templateComponents["template-1"].sections;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* We use the achievements breadcrumb from pages */}
        <Breadcrumb data={(pages as any).achievements?.breadcrumb || { title: "Achievements", paths: [{ label: "Home", href: "/" }, { label: "Achievements" }], bgImage: "/img/coverbc.png" }} />
        
        {/* Section 1: Our Achievements */}
        <OurAchievements data={sections.ourAchievements} />
        
        {/* Section 2: Awards & Recognition */}
        <AwardsRecognition data={sections.awardsRecognition} />
        
        {/* Section 3: Student Success */}
        <StudentSuccess data={sections.studentSuccess} />
      </motion.main>

      {/* Reusing the CTA Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CTABanner data={sections.ctaBanner} />
      </motion.div>
      
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
