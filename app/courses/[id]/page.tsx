import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import CourseDetail from "@/components/section/CourseDetail/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const courseId = resolvedParams.id;

  const pages = data.categories.Education.templateComponents["template-1"].pages;
  const sections = data.categories.Education.templateComponents["template-1"].sections;

  // Find course in either list
  const allCourses = [
    ...sections.coursesPage.courses,
    ...sections.popularCourses.courses
  ];
  
  const currentCourse = allCourses.find(c => c.id === courseId);

  // Use the static courseDetail as a template, but override key details with the found course
  const courseDetailData = { ...sections.courseDetail };
  
  if (currentCourse) {
    courseDetailData.title = currentCourse.title;
    courseDetailData.category = currentCourse.category;
    courseDetailData.rating = currentCourse.rating;
    if (currentCourse.description) {
      courseDetailData.description = currentCourse.description;
    }
    courseDetailData.videoPreviewImage = currentCourse.image;
    courseDetailData.price = currentCourse.price;
    courseDetailData.originalPrice = currentCourse.originalPrice;
    
    // Also update breadcrumb title
    pages.courseDetail.breadcrumb.paths[1].label = currentCourse.title;
  }

  return (
    <div className="min-h-screen bg-[#f8fbfd] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <main>
        <Breadcrumb data={pages.courseDetail.breadcrumb} waveColor="#f8fbfd" />
        <CourseDetail data={courseDetailData} />
      </main>

      <CTABanner data={sections.ctaBanner} />
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
