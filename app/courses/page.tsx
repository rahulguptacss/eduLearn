import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import Courses from "@/components/section/Courses/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";

export default function CoursesPage() {
  const pages = data.categories.Education.templateComponents["template-1"].pages;
  const sections = data.categories.Education.templateComponents["template-1"].sections;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <main>
        <Breadcrumb data={pages.courses.breadcrumb} waveColor="#f8fbfd" />
        <Courses data={sections.coursesPage} />
      </main>

      <CTABanner data={sections.ctaBanner} />
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
