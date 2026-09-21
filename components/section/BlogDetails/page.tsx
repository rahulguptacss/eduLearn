"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock, Lightbulb, Search, Target, BarChart3, Trophy } from "lucide-react";

const highlightIcons: Record<string, React.ElementType> = {
  book: BookOpen,
  target: Target,
  chart: BarChart3,
  trophy: Trophy,
};

export default function BlogDetails({
  post,
  posts,
  details,
}: {
  post: any;
  posts: any[];
  details: any;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const recentPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return posts
      .filter((item) => item.id !== post?.id)
      .filter((item) =>
        query
          ? `${item.title} ${item.tag} ${item.description}`.toLowerCase().includes(query)
          : true
      )
      .slice(0, 4);
  }, [posts, post, searchQuery]);

  if (!post) return null;

  const authorImage = post.authorImage || details.authorImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=0e2a46&color=fff`;
  const authorRole = post.role || details.authorRole || "Education Consultant";
  const readTime = post.readTime || details.readTime || "8 Min Read";

  return (
    <section className="pt-10 pb-12 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8">
            <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0e2a46] leading-[1.2] mb-5">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 bg-[#f4f9fd] rounded-full px-4 sm:px-6 py-3 mb-6">
              <div className="flex items-center gap-3">
                <Image
                  src={authorImage}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-[#0e2a46] leading-tight">
                    By {post.author}
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-[#5a6b82] mt-0.5">{authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#0e2a46] font-medium">
                <Calendar className="w-4 h-4 text-[#0e2a46]" strokeWidth={1.8} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#0e2a46] font-medium">
                <Clock className="w-4 h-4 text-[#0e2a46]" strokeWidth={1.8} />
                <span>{readTime}</span>
              </div>
            </div>

            <div className="relative w-full h-[240px] sm:h-[340px] lg:h-[420px] rounded-[20px] overflow-hidden mb-8">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>

            <p className="text-[15px] sm:text-[16px] leading-[1.85] text-[#5a6b82] mb-8">
              {details.intro}
            </p>

            <div className="space-y-7">
              {details.sections?.map((section: { title: string; text: string }, idx: number) => (
                <React.Fragment key={section.title}>
                  <div>
                    <h2 className="text-[20px] sm:text-[22px] font-bold mb-2">
                      <span className="text-[#0e2a46]">{idx + 1}.</span>{" "}
                      <span className="text-[#ff5e14]">{section.title}</span>
                    </h2>
                    <p className="text-[15px] sm:text-[16px] leading-[1.85] text-[#5a6b82]">
                      {section.text}
                    </p>
                  </div>
                  {details.midQuote?.after === idx + 1 && (
                    <div className="bg-[#f4f9fd] rounded-full px-5 sm:px-7 py-4 flex items-center gap-4">
                      <Lightbulb className="w-6 h-6 text-[#0e2a46] shrink-0" strokeWidth={1.8} />
                      <p className="text-[15px] sm:text-[16px] italic text-[#0e2a46] font-medium flex-1">
                        “{details.midQuote.text}”
                      </p>
                      <span className="hidden sm:block w-16 h-[3px] bg-[#ff5e14] rounded-full shrink-0"></span>
                    </div>
                  )}
                  {details.highlights?.after === idx + 1 && (
                    <div className="bg-[#f4f9fd] rounded-[20px] py-6 px-3 sm:px-4 grid grid-cols-2 sm:grid-cols-4">
                      {details.highlights.items.map((item: { icon: string; label: string }, itemIdx: number) => {
                        const Icon = highlightIcons[item.icon] || BookOpen;
                        return (
                          <div
                            key={item.label}
                            className={`flex flex-col items-center justify-center text-center gap-2 px-2 ${
                              itemIdx !== details.highlights.items.length - 1
                                ? "sm:border-r border-[#d7e4ef]"
                                : ""
                            } ${itemIdx % 2 === 0 ? "max-sm:border-r border-[#d7e4ef]" : ""} ${
                              itemIdx < 2 ? "max-sm:mb-4" : ""
                            }`}
                          >
                            <Icon className="w-6 h-6 text-[#0e2a46]" strokeWidth={1.8} />
                            <span className="text-[13px] sm:text-[14px] font-semibold text-[#0e2a46]">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-[16px] border border-[#eef2f6] p-5 shadow-[0_10px_30px_rgba(14,42,70,0.04)]">
                <h3 className="text-[18px] font-bold text-[#0e2a46] mb-4">{details.sidebar.searchTitle}</h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={details.sidebar.searchPlaceholder}
                    className="w-full bg-[#f7f9fc] border border-[#e6edf4] rounded-full py-3 pl-4 pr-12 text-[14px] text-[#0e2a46] outline-none focus:border-[#ff5e14]"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#ff5e14] text-white flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-[16px] border border-[#eef2f6] p-5 shadow-[0_10px_30px_rgba(14,42,70,0.04)]">
                <h3 className="text-[18px] font-bold text-[#0e2a46] mb-4">{details.sidebar.recentTitle}</h3>
                <div className="space-y-4">
                  {recentPosts.map((item) => (
                    <Link key={item.id} href={`/blog/${item.id}`} className="flex gap-3 group">
                      <div className="relative w-[72px] h-[64px] rounded-[10px] overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[14px] font-semibold text-[#0e2a46] leading-snug line-clamp-2 group-hover:text-[#ff5e14] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[12px] text-[#5a6b82] mt-1">{item.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[16px] overflow-hidden bg-[#0e2a46] text-white">
                <div className="relative h-[170px]">
                  <Image src={details.sidebar.cta.image} alt={details.sidebar.cta.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-[20px] font-bold leading-snug mb-2">{details.sidebar.cta.title}</h3>
                  <p className="text-[14px] text-white/80 leading-relaxed mb-4">{details.sidebar.cta.description}</p>
                  <Link
                    href={details.sidebar.cta.buttonHref}
                    className="inline-flex items-center gap-2 bg-[#ff5e14] hover:bg-[#e04f0d] text-white rounded-full px-4 py-2 text-[14px] font-semibold transition-colors"
                  >
                    {details.sidebar.cta.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
