import type { Metadata } from "next";
import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import Contact from "@/components/section/Contact/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("contact");

export default function ContactPage() {
  const templateData = data.categories.Education.templateComponents["template-1"];
  const sections = templateData.sections;
  const pageData = templateData.pages.contact;

  return (
    <div className="min-h-screen bg-[#f6f9fe] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      <main>
        <Breadcrumb data={pageData.breadcrumb} waveColor="#f6f9fe" />
        <Contact data={sections.contact} />
      </main>
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
