export interface MenuItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: { label: string; href: string }[];
}

export interface TopbarData {
  address: string;
  email: string;
  followText: string;
  socialLinks: { icon: string; href: string }[];
}

export interface HeaderData {
  logo: string;
  logoText: string;
  menu: MenuItem[];
  contactButtonText: string;
  buttonText: string;
  buttonHref?: string;
}

export interface HeroSlide {
  subtitle: string;
  title: string;
  titleHighlight?: string;
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
  bgImage?: string;
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
  titleHighlight?: string;
  description1: string;
  description2: string;
  features: AboutFeature[];
  buttonText: string;
  images: string[];
  badge: {
    value: string;
    label: string;
  };
}

export interface Course {
  id?: string;
  image: string;
  category: string;
  rating: number;
  reviews: string | number;
  title: string;
  author: string;
  duration: string;
  price: number;
  originalPrice: number;
  description?: string;
  level?: string;
}

export interface PopularCoursesData {
  subtitle: string;
  title: string;
  titleHighlight?: string;
  description: string;
  buttonText?: string;
  courses: Course[];
}

export interface CourseCategoryCount {
  label: string;
  count: number;
}

export interface CoursesPageData {
  title: string;
  subtitle: string;
  titleHighlight?: string;
  description: string;
  sidebar: {
    title: string;
    categories: CourseCategoryCount[];
    levels: CourseCategoryCount[];
    durations: CourseCategoryCount[];
    priceRange: { min: number; max: number };
  };
  courses: Course[];
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface StatsData {
  bgImage?: string;
  subtitle: string;
  title: string;
  titleHighlight?: string;
  description: string;
  stats: StatItem[];
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
  titleHighlight?: string;
  description?: string;
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
  titleHighlight?: string;
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
  description: string;
  tag: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  titleHighlight?: string;
  description: string;
  buttonText?: string;
  posts: BlogPost[];
}

export interface CTABannerData {
  title: string;
  highlightWordCount?: number;
  subtitle: string;
  buttonText: string;
  image: string;
}

export interface MissionVisionBlock {
  subtitle: string;
  title: string;
  titleHighlight?: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  shapeBgColor?: string;
}

export interface MissionVisionData {
  topSubtitle: string;
  topTitle: string;
  topTitleHighlight?: string;
  topDescription: string;
  blocks: MissionVisionBlock[];
}

export interface BreadcrumbData {
  title: string;
  paths: { label: string; href?: string }[];
  bgImage?: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterData {
  logo?: string;
  logoText: string;
  description: string;
  linkGroups: FooterLinkGroup[];
  contactInfo: {
    phone: string;
    phoneSubText?: string;
    email: string;
    emailSubText?: string;
    address: string;
  };
  socialLinks: { icon: string; href: string }[];
  copyright: string;
  poweredBy: string;
  bottomLinks: { label: string; href: string }[];
}

export interface CourseCurriculumItem {
  title: string;
  subtitle?: string;
  lectures: number;
  weeks?: string;
  isOpen?: boolean;
  lessons: { title: string; duration: string }[];
}

export interface CourseDetailReview {
  name: string;
  date: string;
  rating: number;
  comment: string;
  image: string;
}

export interface CourseDetailFAQ {
  question: string;
  answer: string;
}

export interface CourseDetailData {
  category: string;
  title: string;
  description: string;
  rating: number;
  students: number;
  level: string;
  duration: string;
  certifications: string;
  videoPreviewImage: string;
  price: number;
  originalPrice: number;
  discount: string;
  includes: string[];
  details: {
    category: string;
    level: string;
    duration: string;
    students: string;
    language: string;
    lastUpdated: string;
  };
  overview: {
    about: string;
    whoIsThisFor: string;
    whatYouWillLearn: string[];
    requirements: string;
    certification: string;
  };
  curriculum: {
    totalLectures: number;
    totalWeeks: number;
    modules: CourseCurriculumItem[];
  };
  instructor: {
    name: string;
    role: string;
    rating: number;
    students: string;
    courses: number;
    experience: string;
    about: string;
    areasOfExpertise: string[];
    image: string;
    social: { icon: string; url: string }[];
  };
  reviewsData: {
    average: number;
    total: number;
    breakdown: { star: number; percentage: number }[];
    reviewsList: CourseDetailReview[];
  };
  faqs: CourseDetailFAQ[];
}

export interface FacultyMember {
  name: string;
  role: string;
  image: string;
  socials: { icon: string; url: string }[];
}

export interface FacultyPageData {
  title: string;
  subtitle: string;
  titleHighlight?: string;
  members: FacultyMember[];
}

export interface FacultyDetailsContact {
  email: string;
  phone: string;
  location: string;
  degree: string;
  department: string;
}

export interface FacultyDetailsFeature {
  icon: string;
  title: string;
}

export interface FacultyDetailsData {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  experience: {
    years: string;
    text: string;
  };
  contactInfo: FacultyDetailsContact;
  socials: { icon: string; url: string }[];
  about: {
    title: string;
    description: string[];
  };
  quote: {
    text: string;
    author: string;
  };
  features: FacultyDetailsFeature[];
  teachingPhilosophy: {
    title: string;
    description: string;
  };
  areasOfInterest: {
    title: string;
    items: string[];
  };
}

export interface TemplateSections {
  hero: HeroData;
  about: AboutData;
  popularCourses: PopularCoursesData;
  stats: StatsData;
  whyChooseUs: WhyChooseData;
  testimonials: TestimonialsData;
  testimonialsGrid: any;
  blog: BlogData;
  ctaBanner: CTABannerData;
  missionVision: MissionVisionData;
  coursesPage: CoursesPageData;
  courseDetail: CourseDetailData;
  facultyPage: FacultyPageData;
  facultyDetails: FacultyDetailsData;
  ourAchievements: any;
  awardsRecognition: any;
  studentSuccess: any;
}

export interface TemplateComponents {
  "template-1": {
    pages: Record<string, any>;
    sections: TemplateSections;
  };
}

export interface PageData {
  common: {
    Topbar: TopbarData;
    Header: HeaderData;
    Footer: FooterData;
  };
  categories: {
    Education: {
      templateComponents: TemplateComponents;
    };
  };
}
