import type { Metadata } from "next";
import data from "@/components/data/data.json";
import type { PageData, TemplatePages } from "@/components/types";

const site = data as PageData;
const template = site.categories.Education.templateComponents["template-1"];

export const siteSeo = site.common.seo;
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || siteSeo.siteUrl).replace(/\/$/, "");

export function absUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getPageMetadata(pageKey: keyof TemplatePages): Metadata {
  const page = template.pages[pageKey];
  const seo = page.seo;
  const title = seo?.title || page.breadcrumb.title;
  const description = seo?.description || siteSeo.defaultDescription;
  const keywords = seo?.keywords || siteSeo.keywords;
  const image = absUrl(seo?.ogImage || siteSeo.ogImage);
  const canonical = absUrl(seo?.canonical || "/");
  const noIndex = seo?.noIndex;
  const isHome = pageKey === "home";

  return {
    title: isHome ? { absolute: `${title} | ${siteSeo.siteName}` } : title,
    description,
    keywords,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteSeo.locale,
      url: canonical,
      siteName: siteSeo.siteName,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function getDynamicMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string;
  type?: "article" | "website";
}): Metadata {
  const title = opts.title;
  const description = opts.description;
  const canonical = absUrl(opts.path);
  const image = absUrl(opts.image || siteSeo.ogImage);

  return {
    title,
    description,
    keywords: opts.keywords || siteSeo.keywords,
    alternates: { canonical },
    openGraph: {
      type: opts.type || "article",
      locale: siteSeo.locale,
      url: canonical,
      siteName: siteSeo.siteName,
      title,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const staticRoutes = [
  { path: "/", key: "home" as const },
  { path: "/about", key: "about" as const },
  { path: "/courses", key: "courses" as const },
  { path: "/why-choose-us", key: "whyChooseUs" as const },
  { path: "/mission-vision", key: "missionVision" as const },
  { path: "/faculty", key: "facultyPage" as const },
  { path: "/admission-process", key: "admissionProcess" as const },
  { path: "/apply-online", key: "applyOnline" as const },
  { path: "/achievements", key: "achievements" as const },
  { path: "/testimonials", key: "testimonials" as const },
  { path: "/gallery", key: "gallery" as const },
  { path: "/events", key: "eventsPage" as const },
  { path: "/news", key: "newsPage" as const },
  { path: "/blog", key: "blogPage" as const },
  { path: "/facilities", key: "facilities" as const },
  { path: "/enquiry", key: "enquiry" as const },
  { path: "/contact", key: "contact" as const },
  { path: "/faq", key: "faq" as const },
  { path: "/privacy-policy", key: "privacyPolicy" as const },
  { path: "/terms-conditions", key: "termsConditions" as const },
  { path: "/refund-policy", key: "refundPolicy" as const },
  { path: "/sitemap", key: "sitemap" as const },
];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteSeo.siteName,
    url: siteUrl,
    logo: absUrl("/logo/logo.png"),
    email: site.common.Topbar.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.common.Topbar.address,
      addressCountry: "IN",
    },
    telephone: site.common.Footer.contactInfo.phone,
    sameAs: site.common.Topbar.socialLinks.map((item) => item.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSeo.siteName,
    url: siteUrl,
    description: siteSeo.defaultDescription,
    publisher: {
      "@type": "EducationalOrganization",
      name: siteSeo.siteName,
    },
  };
}
