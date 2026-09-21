import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import NewsDetails from "@/components/section/NewsDetails/page";
import data from "@/components/data/data.json";
import CTABanner from "@/components/section/CTABanner/page";

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

  const breadcrumbData = {
    ...pages.newsDetailsPage.breadcrumb,
    paths: [...pages.newsDetailsPage.breadcrumb.paths]
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
