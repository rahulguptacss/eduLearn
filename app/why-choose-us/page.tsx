import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import WhyChooseUs from "@/components/section/WhyChooseUs/page";
import Stats from "@/components/section/Stats/page";
import Testimonials from "@/components/section/Testimonials/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import data from "@/components/data/data.json";

export const metadata: Metadata = getPageMetadata("whyChooseUs");

export default function WhyChooseUsPage() {
  const pages = data.categories.Education.templateComponents["template-1"].pages;
  const sections = data.categories.Education.templateComponents["template-1"].sections;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <main>
        <Breadcrumb data={pages.whyChooseUs.breadcrumb} />
        
        <WhyChooseUs data={sections.whyChooseUs} />
        <Stats data={sections.stats} />
        <Testimonials data={sections.testimonials} />
      </main>

      <CTABanner data={sections.ctaBanner} />
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
