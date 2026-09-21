import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import NewsDetails from "@/components/section/NewsDetails/page";
import type { Metadata } from "next";
import { getDynamicMetadata } from "@/lib/seo";
import data from "@/components/data/data.json";
import CTABanner from "@/components/section/CTABanner/page";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const newsId = Number(id);
  const item = data.categories.Education.templateComponents["template-1"].sections.news.list.find((n: { id: number }) => n.id === newsId);
  return getDynamicMetadata({
    title: item?.title || "Notice Details",
    description: item?.description || "Read this EduLearn notice.",
    path: `/news/${id}`,
    image: item?.image,
  });
}

export default async function NewsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const newsId = Number(resolvedParams.id);

  const templateData = data.categories.Education.templateComponents["template-1"];
  const pages = templateData.pages;
  const sections = templateData.sections;

  const allNews = sections.news.list;
  const currentNews = allNews.find((n: any) => n.id === newsId);

  // Deep copy so we don't mutate the imported JSON data object
  const newsDetailData = { 
    ...sections.newsDetails,
    dynamic: {
      title: "",
      date: "",
      author: "",
      image: "",
      category: "",
      description: ""
    }
  };
  
  if (currentNews) {
    const newsDate = currentNews.date as any;
    const formattedDate = typeof newsDate === 'string'
      ? `${newsDate} ${currentNews.month} ${currentNews.year}`
      : `${newsDate?.day || ''} ${newsDate?.month || ''} ${currentNews.year || ''}`;

    newsDetailData.dynamic = {
      title: currentNews.title,
      date: formattedDate,
      author: "Admin",
      image: currentNews.image,
      category: currentNews.category,
      description: currentNews.description
    };
  }

  const breadcrumb = pages.newsDetailsPage.breadcrumb || {
    title: "Notice Details",
    paths: [{ label: "Home", href: "/" }, { label: "Notice Details" }],
  };
  const breadcrumbData = {
    ...breadcrumb,
    paths: [...breadcrumb.paths],
  };
  
  if (currentNews) {
    breadcrumbData.title = currentNews.title;
  }

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />
      
      <main>
        <Breadcrumb data={breadcrumbData} />
        <NewsDetails data={newsDetailData} latestNews={allNews} />
        <CTABanner data={sections.ctaBanner} />
      </main>

      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
