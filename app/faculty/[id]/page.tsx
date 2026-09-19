import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import FacultyDetails from "@/components/section/FacultyDetails/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import data from "@/components/data/data.json";

// For static site generation
export function generateStaticParams() {
  const sections = data.categories.Education.templateComponents["template-1"].sections;
  return sections.facultyPage.members.map((member) => ({
    id: member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  }));
}

export default async function FacultyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const pages = data.categories.Education.templateComponents["template-1"].pages;
  const sections = data.categories.Education.templateComponents["template-1"].sections;

  const { id } = await params;

  // Find the clicked faculty member based on URL param
  const member = sections.facultyPage.members.find(
    (m) => m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === id
  );

  // Use the default data for structure but override with the specific member's info
  const defaultFacultyData = sections.facultyDetails;
  
  // Split name for styling (first part blue, last part orange)
  const fullName = member?.name || "Faculty Member";
  const nameParts = fullName.split(' ');
  const lastName = nameParts.length > 1 ? nameParts.pop() : '';
  const firstName = nameParts.join(' ');
  const emailName = fullName.toLowerCase().replace(/[^a-z0-9]+/g, '.');

  const facultyData = {
    ...defaultFacultyData,
    name: firstName || defaultFacultyData.name,
    role: lastName || defaultFacultyData.role,
    department: member?.role || defaultFacultyData.department,
    image: member?.image || defaultFacultyData.image,
    socials: member?.socials || defaultFacultyData.socials,
    contactInfo: {
      ...defaultFacultyData.contactInfo,
      email: `${emailName}@edulearn.com`,
      department: `Department of ${member?.role?.split(' ')[0] || 'Science'}`,
    },
    about: {
      title: `About ${fullName}`,
      description: [
        `${fullName} is a dedicated and passionate ${member?.role || 'Educator'} with years of teaching experience. They believe in making complex concepts simple and engaging for students through practical examples, interactive learning, and real-world applications.`,
        `Their goal is to create a positive and inclusive learning environment where every student feels confident to explore, question, and innovate. They are committed to guiding students not only in academics but also in developing critical thinking and problem-solving skills for their future careers.`
      ]
    },
    quote: {
      ...defaultFacultyData.quote,
      author: fullName
    }
  };

  const breadcrumbData = {
    ...pages.facultyDetails.breadcrumb,
    title: facultyData.name,
  };
  
  const ctaBannerData = sections.ctaBanner;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <main>
        <Breadcrumb data={breadcrumbData} waveColor="#ffffff" />
        <FacultyDetails data={facultyData} />
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
