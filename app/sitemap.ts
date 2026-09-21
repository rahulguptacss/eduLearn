import type { MetadataRoute } from "next";
import data from "@/components/data/data.json";
import { absUrl, staticRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absUrl(route.path),
    lastModified: now,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : 0.7,
  }));

  const template = data.categories.Education.templateComponents["template-1"].sections;
  template.blog.posts.forEach((post) => {
    pages.push({
      url: absUrl(`/blog/${post.id}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });
  template.coursesPage.courses.forEach((course) => {
    if (course.id) {
      pages.push({
        url: absUrl(`/courses/${course.id}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  });
  template.events.list.forEach((event: { id: number }) => {
    pages.push({
      url: absUrl(`/events/${event.id}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });
  template.news.list.forEach((item: { id: number }) => {
    pages.push({
      url: absUrl(`/news/${item.id}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    });
  });
  template.facultyPage.members.forEach((member) => {
    pages.push({
      url: absUrl(`/faculty/${member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });

  return pages;
}
