"use client";

import React, { useMemo, useState } from "react";
import { SitemapData, SitemapGroup } from "../../types";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  Camera,
  ChevronRight,
  GraduationCap,
  Home,
  Layers,
  MapPin,
  Newspaper,
  Phone,
  Search,
  Send,
  Users,
  UsersRound,
} from "lucide-react";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  about: UsersRound,
  academics: BookOpen,
  admissions: GraduationCap,
  people: Users,
  events: CalendarDays,
  news: Newspaper,
  media: Camera,
  contact: Phone,
  policies: MapPin,
  other: Layers,
};

const iconStyle: Record<string, string> = {
  home: "bg-[#eef3ff] text-[#4f7cff]",
  about: "bg-[#e8faf3] text-[#22c55e]",
  academics: "bg-[#fff4e8] text-[#f97316]",
  admissions: "bg-[#f3e8ff] text-[#a855f7]",
  people: "bg-[#eee8ff] text-[#7c5cfc]",
  events: "bg-[#fce7f3] text-[#ec4899]",
  news: "bg-[#fff7e6] text-[#f59e0b]",
  media: "bg-[#e0f7fa] text-[#06b6d4]",
  contact: "bg-[#eef2ff] text-[#6366f1]",
  policies: "bg-[#e8faf3] text-[#10b981]",
  other: "bg-[#fff4e8] text-[#fb923c]",
};

export default function Sitemap({ data }: { data: SitemapData }) {
  const [query, setQuery] = useState("");

  const groups: SitemapGroup[] = data.groups;

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return groups;
    return groups
      .map((group) => ({
        ...group,
        links: group.links.filter(
          (link) =>
            link.label.toLowerCase().includes(value) || group.title.toLowerCase().includes(value)
        ),
      }))
      .filter((group) => group.links.length > 0);
  }, [groups, query]);

  return (
    <section className="bg-[#f7f9fc] pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 mb-6"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(15,40,80,0.06)] border border-[#eef2f7] px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3"
          >
            <Search className="w-5 h-5 text-[#9aa8b8] shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={data.searchPlaceholder}
              className="flex-1 min-w-0 bg-transparent outline-none text-[14px] sm:text-[15px] text-[#0e2a46] placeholder:text-[#9aa8b8]"
            />
            <button
              type="submit"
              className="bg-[#f5c518] hover:bg-[#e8b800] text-[#0e2a46] font-bold text-[14px] px-6 py-2.5 rounded-xl shrink-0"
            >
              {data.searchButton}
            </button>
          </form>

          <div className="bg-[#eef4ff] rounded-[22px] border border-[#dce8ff] px-5 py-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#4f7cff] flex items-center justify-center shadow-sm shrink-0">
              <UsersRound className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[16px] font-extrabold text-[#0e2a46] leading-tight">{data.quickTitle}</h3>
              <p className="text-[12px] text-[#6b7c8d] mt-0.5">{data.quickText}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {filtered.map((group) => {
            const Icon = iconMap[group.icon] || Home;
            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className="bg-white rounded-[22px] border border-[#eef2f7] shadow-[0_8px_28px_rgba(15,40,80,0.05)] p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconStyle[group.icon] || iconStyle.home}`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-[#0e2a46]">{group.title}</h3>
                </div>
                <div>
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between gap-3 py-2.5 border-t border-[#eef2f6] text-[14px] text-[#5a6b82] hover:text-[#ff5e14] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#c5ced8]" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[22px] border-2 border-dashed border-[#c9dbff] bg-[#eef5ff] p-6 min-h-[210px] flex flex-col justify-center"
          >
            <Send className="absolute top-5 right-6 w-10 h-10 text-[#c5d6f5] rotate-12" />
            <p className={`${caveat.className} text-[#4f7cff] text-[28px] sm:text-[30px] leading-[1.15] mb-2`}>
              {data.helpTitle}
            </p>
            <p className="text-[13px] text-[#6b7c8d] mb-5">{data.helpText}</p>
            <Link
              href={data.helpHref}
              className="inline-flex items-center justify-center gap-2 bg-[#0e2a46] hover:bg-[#16385c] text-white text-[13px] font-bold px-5 py-2.5 rounded-full w-fit"
            >
              {data.helpButton} <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
