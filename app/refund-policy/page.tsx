import type { Metadata } from "next";
import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import LegalContent from "@/components/section/LegalContent/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("refundPolicy");

export default function RefundPolicyPage() {
  const templateData = data.categories.Education.templateComponents["template-1"];
  const sections = templateData.sections;
  const pageData = templateData.pages.refundPolicy;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      <main>
        <Breadcrumb data={pageData.breadcrumb} waveColor="#ffffff" />
        <LegalContent data={sections.legal.refundPolicy} />
        <CTABanner data={sections.ctaBanner} />
      </main>
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
