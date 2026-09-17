import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Hero from "@/components/section/Hero/page";
import About from "@/components/section/About/page";
import PopularCourses from "@/components/section/PopularCourses/page";
import Stats from "@/components/section/Stats/page";
import WhyChooseUs from "@/components/section/WhyChooseUs/page";
import Testimonials from "@/components/section/Testimonials/page";
import BlogList from "@/components/section/BlogList/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";

export default function Home() {
  const sections = data.categories.Education.templateComponents["template-1"].sections;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      <main>
        <Hero data={sections.hero} />
        <About data={sections.about} />
        <PopularCourses data={sections.popularCourses} />
        <Stats data={sections.stats} />
        <WhyChooseUs data={sections.whyChooseUs} />
        <Testimonials data={sections.testimonials} />
        <BlogList data={sections.blog} />
      </main>
      <CTABanner data={sections.ctaBanner} />
      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
