import type { Metadata } from "next";
import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import BlogList from "@/components/section/BlogList/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("blogPage");

export default function BlogPage() {
  const templateData = data.categories.Education.templateComponents["template-1"];
  const sections = templateData.sections;
  const pageData = templateData.pages.blogPage;

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      <main>
        <Breadcrumb data={pageData.breadcrumb} waveColor="#f4f9fd" />
        <BlogList data={sections.blog} showPagination />
        <CTABanner data={sections.ctaBanner} />
      </main>
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
