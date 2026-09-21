import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import CourseDetail from "@/components/section/CourseDetail/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";
import { getDynamicMetadata } from "@/lib/seo";
import data from "@/components/data/data.json";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const sections = data.categories.Education.templateComponents["template-1"].sections;
  const course = [...sections.coursesPage.courses, ...sections.popularCourses.courses].find((item) => item.id === id);
  return getDynamicMetadata({
    title: course?.title || "Course Details",
    description: course?.description || "View this EduLearn course and enroll online.",
    path: `/courses/${id}`,
    image: course?.image,
  });
}

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
  
    if (currentCourse && pages.courseDetail.breadcrumb) {
    courseDetailData.title = currentCourse.title;
    courseDetailData.category = currentCourse.category;
    courseDetailData.rating = currentCourse.rating;
    if (currentCourse.description) {
      courseDetailData.description = currentCourse.description;
    }
    courseDetailData.videoPreviewImage = currentCourse.image;
    courseDetailData.price = currentCourse.price;
    courseDetailData.originalPrice = currentCourse.originalPrice;
  }

  const breadcrumbData = pages.courseDetail.breadcrumb
    ? {
        ...pages.courseDetail.breadcrumb,
        title: currentCourse?.title || pages.courseDetail.breadcrumb.title,
        paths: pages.courseDetail.breadcrumb.paths.map((path, index) =>
          index === 1 && currentCourse ? { ...path, label: currentCourse.title } : path
        ),
      }
    : { title: currentCourse?.title || "Course Detail", paths: [{ label: "Home", href: "/" }] };

  return (
    <div className="min-h-screen bg-[#f8fbfd] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <main>
        <Breadcrumb data={breadcrumbData} waveColor="#f8fbfd" />
        <CourseDetail data={courseDetailData} />
      </main>

      <CTABanner data={sections.ctaBanner} />
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
