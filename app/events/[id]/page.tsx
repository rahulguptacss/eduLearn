import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import EventDetails from "@/components/section/EventDetails/page";
import type { Metadata } from "next";
import { getDynamicMetadata } from "@/lib/seo";
import data from "@/components/data/data.json";
import CTABanner from "@/components/section/CTABanner/page";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const eventId = Number(id);
  const item = data.categories.Education.templateComponents["template-1"].sections.events.list.find((e: { id: number }) => e.id === eventId);
  return getDynamicMetadata({
    title: item?.title || "Event Details",
    description: item?.description || "View this EduLearn event.",
    path: `/events/${id}`,
    image: item?.image,
  });
}

export default async function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const eventId = Number(resolvedParams.id);

  const templateData = data.categories.Education.templateComponents["template-1"];
  const pages = templateData.pages;
  const sections = templateData.sections;

  const allEvents = sections.events.list;
  const currentEvent = allEvents.find((e: any) => e.id === eventId);

  const eventDetailData = { ...sections.eventDetails };
  
  eventDetailData.header = { ...eventDetailData.header };
  eventDetailData.venue = { ...eventDetailData.venue };
  eventDetailData.venue.locationBox = { ...eventDetailData.venue.locationBox };
  
  if (currentEvent) {
    eventDetailData.header.title = currentEvent.title;
    eventDetailData.header.date = currentEvent.date;
    eventDetailData.image = currentEvent.image;
    eventDetailData.venue.locationBox.address = currentEvent.location;
  }

  const breadcrumb = pages.eventDetailsPage.breadcrumb || {
    title: "Event Details",
    paths: [{ label: "Home", href: "/" }, { label: "Event Details" }],
  };
  const breadcrumbData = {
    ...breadcrumb,
    paths: [...breadcrumb.paths],
  };
  
  if (currentEvent) {
    breadcrumbData.paths[1] = { ...breadcrumbData.paths[1], label: currentEvent.title };
    breadcrumbData.title = currentEvent.title;
  }

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <main>
        <Breadcrumb data={breadcrumbData} />
        <EventDetails data={eventDetailData} />
        <CTABanner data={sections.ctaBanner} />
      </main>

      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
