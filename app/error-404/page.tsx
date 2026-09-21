import type { Metadata } from "next";
import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Error404 from "@/components/section/Error404/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("error404");

export default function Error404Page() {
  const templateData = data.categories.Education.templateComponents["template-1"];

  return (
    <div className="min-h-screen bg-[#f4f8fc] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      <main>
        <Error404 data={templateData.sections.error404} />
      </main>
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
