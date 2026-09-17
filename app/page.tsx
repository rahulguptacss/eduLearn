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
import data from "@/components/data/data.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Topbar data={data.topbar} />
      <Header data={data.header} />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <PopularCourses data={data.popularCourses} />
        <Stats data={data.stats} />
        <WhyChooseUs data={data.whyChooseUs} />
        <Testimonials data={data.testimonials} />
        <BlogList data={data.blog} />
      </main>
      <CTABanner data={data.ctaBanner} />
      <Footer data={data.footer} />
    </div>
  );
}
