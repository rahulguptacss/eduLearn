import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import AdmissionProcess from "@/components/section/AdmissionProcess/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";

export default function AdmissionProcessPage() {
  const pages = data.categories.Education.templateComponents["template-1"].pages;
  const sections = data.categories.Education.templateComponents["template-1"].sections;

  const breadcrumbData = pages.admissionProcess.breadcrumb;
  const admissionData = sections.admissionProcess;
  const ctaBannerData = sections.ctaBanner;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <main>
        <Breadcrumb data={breadcrumbData} waveColor="#ffffff" />
        <AdmissionProcess data={admissionData} />
        {ctaBannerData && (
           <div className="mb-0">
               <CTABanner data={ctaBannerData} />
           </div>
        )}
      </main>

      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
