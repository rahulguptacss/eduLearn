import Topbar from "@/components/section/Topbar/page";
import Header from "@/components/section/Header/page";
import Breadcrumb from "@/components/section/Breadcrumb/page";
import BlogDetails from "@/components/section/BlogDetails/page";
import CTABanner from "@/components/section/CTABanner/page";
import Footer from "@/components/section/Footer/page";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";
import { getDynamicMetadata } from "@/lib/seo";
import data from "@/components/data/data.json";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const blogId = Number(id);
  const posts = data.categories.Education.templateComponents["template-1"].sections.blog.posts;
  const post = posts.find((item, index) => (item.id ?? index + 1) === blogId);
  return getDynamicMetadata({
    title: post?.title || "Blog Details",
    description: post?.description || "Read this EduLearn article.",
    path: `/blog/${id}`,
    image: post?.image,
    type: "article",
  });
}

export function generateStaticParams() {
  const posts = data.categories.Education.templateComponents["template-1"].sections.blog.posts;
  return posts.map((post, index) => ({
    id: String(post.id ?? index + 1),
  }));
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogId = Number(id);

  const templateData = data.categories.Education.templateComponents["template-1"];
  const pages = templateData.pages;
  const sections = templateData.sections;
  const allPosts = sections.blog.posts;
  const currentPost = allPosts.find((post, index) => (post.id ?? index + 1) === blogId);

  const breadcrumb = pages.blogDetailsPage.breadcrumb || {
    title: "Blog Details",
    paths: [{ label: "Home", href: "/" }, { label: "Blog Details" }],
  };
  const breadcrumbData = {
    ...breadcrumb,
    paths: [...breadcrumb.paths],
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Topbar data={data.common.Topbar} />
      <Header data={data.common.Header} />

      <main>
        <Breadcrumb data={breadcrumbData} waveColor="#ffffff" />
        <BlogDetails post={currentPost} posts={allPosts} details={sections.blogDetails} />
        <CTABanner data={sections.ctaBanner} />
      </main>

      <Footer data={data.common.Footer} />
      <BackToTop />
    </div>
  );
}
