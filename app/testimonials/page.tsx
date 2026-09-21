import type { Metadata } from "next";
import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import TestimonialsGrid from "@/components/section/TestimonialsGrid/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("testimonials");

export default function TestimonialsPage() {
  const templateData = data.categories.Education.templateComponents["template-1"];
  const pages = templateData.pages;
  const sections = templateData.sections;

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      <main>
        <Breadcrumb data={pages.testimonials.breadcrumb} />
        <TestimonialsGrid data={sections.testimonialsGrid} />
        <CTABanner data={sections.ctaBanner} />
      </main>
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
