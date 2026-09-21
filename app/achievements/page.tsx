import type { Metadata } from "next";
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
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("achievements");

export default function AchievementsPage() {
  const pages = data.categories.Education.templateComponents["template-1"].pages;
  const sections = data.categories.Education.templateComponents["template-1"].sections;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      <main>
        <Breadcrumb data={pages.achievements.breadcrumb} />
        <OurAchievements data={sections.ourAchievements} />
        <AwardsRecognition data={sections.awardsRecognition} />
        <StudentSuccess data={sections.studentSuccess} />
        <CTABanner data={sections.ctaBanner} />
      </main>
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
