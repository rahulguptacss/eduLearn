import type { Metadata } from "next";
import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import News from "@/components/section/News/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("newsPage");

export default function NewsPage() {
  const templateData = data.categories.Education.templateComponents["template-1"];
  const sections = templateData.sections;
  const pageData = templateData.pages.newsPage;

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      <main>
        <Breadcrumb data={pageData.breadcrumb} />
        <News data={sections.news} />
        <CTABanner data={sections.ctaBanner} />
      </main>
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
