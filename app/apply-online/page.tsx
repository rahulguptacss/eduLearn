import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import ApplyOnline from "@/components/section/ApplyOnline/page";
import Footer from "@/components/section/Footer/page";
import data from "@/components/data/data.json";

export default function ApplyOnlinePage() {
  const applyOnlineData = data.categories.Education.templateComponents["template-1"].sections.applyOnline;
  
  return (
    <main>
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <Breadcrumb data={applyOnlineData.breadcrumb} waveColor="#ffffff" />
      <ApplyOnline data={applyOnlineData} />
      
      <Footer data={data.common.Footer} />
    </main>
  );
}
