import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import ApplyOnline from "@/components/section/ApplyOnline/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import data from "@/components/data/data.json";

export const metadata: Metadata = getPageMetadata("applyOnline");

export default function ApplyOnlinePage() {
  const templateData = data.categories.Education.templateComponents["template-1"];
  const sections = templateData.sections;
  const applyOnlineData = sections.applyOnline;
  
  return (
    <main>
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <Breadcrumb data={templateData.pages.applyOnline.breadcrumb} waveColor="#ffffff" />
      <ApplyOnline data={applyOnlineData} />
      <CTABanner data={sections.ctaBanner} />
      
      <Footer data={data.common.Footer} />
    </main>
  );
}
