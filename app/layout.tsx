import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { siteSeo, absUrl } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0e2a46",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteSeo.siteUrl),
  title: {
    default: siteSeo.defaultTitle,
    template: `%s | ${siteSeo.siteName}`,
  },
  description: siteSeo.defaultDescription,
  keywords: siteSeo.keywords,
  applicationName: siteSeo.siteName,
  authors: [{ name: siteSeo.siteName, url: siteSeo.siteUrl }],
  creator: siteSeo.siteName,
  publisher: siteSeo.siteName,
  category: "education",
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  openGraph: {
    type: "website",
    locale: siteSeo.locale,
    url: siteSeo.siteUrl,
    siteName: siteSeo.siteName,
    title: siteSeo.defaultTitle,
    description: siteSeo.defaultDescription,
    images: [{ url: absUrl(siteSeo.ogImage), width: 1200, height: 630, alt: siteSeo.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.defaultTitle,
    description: siteSeo.defaultDescription,
    images: [absUrl(siteSeo.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} font-sans antialiased h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
