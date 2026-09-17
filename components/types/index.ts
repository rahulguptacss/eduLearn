export interface MenuItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface TopbarData {
  address: string;
  email: string;
  followText: string;
  socialLinks: { icon: string; href: string }[];
}

export interface HeaderData {
  logoText: string;
  menu: MenuItem[];
  contactButtonText: string;
  buttonText: string;
}

export interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  image: string;
}

export interface HeroFeature {
  title: string;
  subtitle: string;
  icon: string;
}

export interface HeroData {
  slides: HeroSlide[];
  features: HeroFeature[];
}

export interface AboutFeature {
  title: string;
  icon: string;
}

export interface AboutData {
  subtitle: string;
  title: string;
  description1: string;
  description2: string;
  features: AboutFeature[];
  buttonText: string;
}

export interface Course {
  image: string;
  category: string;
  rating: number;
  reviews: number;
  title: string;
  author: string;
  duration: string;
  price: number;
  originalPrice: number;
}

export interface PopularCoursesData {
  subtitle: string;
  title: string;
  courses: Course[];
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface StatsData {
  items: StatItem[];
}

export interface WhyChooseFeature {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

export interface WhyChooseData {
  subtitle: string;
  title: string;
  features: WhyChooseFeature[];
  floatingBadge: {
    icon: string;
    value: string;
    label: string;
  };
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

export interface TestimonialsData {
  subtitle: string;
  title: string;
  description: string;
  testimonials: Testimonial[];
  ctaText: string;
  ctaSubText: string;
}

export interface BlogPost {
  image: string;
  author: string;
  date: string;
  comments: number;
  title: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  description: string;
  posts: BlogPost[];
}

export interface CTABannerData {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterData {
  logoText: string;
  description: string;
  linkGroups: FooterLinkGroup[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks: { icon: string; href: string }[];
}

export interface PageData {
  topbar: TopbarData;
  header: HeaderData;
  hero: HeroData;
  about: AboutData;
  popularCourses: PopularCoursesData;
  stats: StatsData;
  whyChooseUs: WhyChooseData;
  testimonials: TestimonialsData;
  blog: BlogData;
  ctaBanner: CTABannerData;
  footer: FooterData;
}
