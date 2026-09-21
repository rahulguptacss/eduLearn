"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  GraduationCap,
  MessageCircle,
  Minus,
  Plus,
  Search,
  Users,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  graduation: GraduationCap,
  book: ClipboardList,
  headset: Users,
  chat: MessageCircle,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

export default function FAQ({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return data.items;
    return data.items.filter(
      (item: { question: string; answer: string }) =>
        item.question.toLowerCase().includes(value) || item.answer.toLowerCase().includes(value)
    );
  }, [data.items, query]);

  return (
    <section className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-8 h-[3px] bg-[#ff5e14] rounded-full origin-right"
            />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#0e2a46] tracking-[2px] uppercase">
              {data.subtitle}
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-8 h-[3px] bg-[#ff5e14] rounded-full origin-left"
            />
          </div>
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#0e2a46] leading-tight mb-3">
            {data.title} <span className="text-[#ff5e14]">{data.titleHighlight}</span>
          </h2>
          <p className="text-[#5a6b82] text-[14px] sm:text-[16px] max-w-[700px] mx-auto leading-[1.7]">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-5 space-y-5"
          >
            <motion.div
              variants={fadeUp}
              className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] p-5 sm:p-8 group"
            >
              <Image
                src="/img/faqbg.png"
                alt=""
                fill
                className="object-cover object-right-bottom transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-10 max-w-[220px] sm:max-w-[230px]">
                <h3 className="text-[22px] sm:text-[28px] font-extrabold leading-[1.15] mb-3">
                  <span className="text-[#0e2a46]">Still Have</span>
                  <br />
                  <span className="text-[#ff5e14]">Questions?</span>
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#5a6b82] leading-[1.7] mb-5">
                  {data.help.description}
                </p>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-max">
                  <Link
                    href={data.help.buttonHref}
                    className="inline-flex items-center gap-2 bg-[#ff5e14] hover:bg-[#e04f0d] text-white rounded-full pl-5 pr-1.5 py-1.5 text-[13px] sm:text-[14px] font-semibold shadow-sm transition-colors"
                  >
                    {data.help.buttonText}
                    <span className="w-8 h-8 rounded-full bg-white text-[#ff5e14] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {data.categories.map((category: { icon: string; title: string; description: string }, idx: number) => {
              const Icon = categoryIcons[category.icon] || MessageCircle;
              const isOrange = idx % 2 === 1;
              return (
                <motion.div
                  key={category.title}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 sm:gap-4 py-0.5"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className={`w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full flex items-center justify-center shrink-0 text-white ${
                      isOrange ? "bg-[#ff5e14]" : "bg-[#0e2a46]"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h4 className="text-[15px] sm:text-[16px] font-extrabold text-[#0e2a46] mb-0.5">{category.title}</h4>
                    <p className="text-[12px] sm:text-[13px] text-[#5a6b82] leading-relaxed">{category.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <motion.form
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mb-4 sm:mb-5"
            >
              <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a97a8]" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenIndex(0);
                }}
                placeholder={data.searchPlaceholder}
                className="w-full bg-white border border-[#e6edf4] rounded-full py-3 sm:py-3.5 pl-11 sm:pl-12 pr-[92px] sm:pr-28 text-[13px] sm:text-[14px] outline-none focus:border-[#0e2a46]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#ff5e14] hover:bg-[#e04f0d] text-white rounded-full px-3.5 sm:px-5 py-2 text-[13px] sm:text-[14px] font-semibold"
              >
                Search
              </motion.button>
            </motion.form>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-1.5">
              {filteredItems.map((item: { question: string; answer: string }, idx: number) => {
                const isOpen = openIndex === idx;
                const number = String(idx + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={item.question}
                    variants={fadeUp}
                    className={`rounded-[14px] sm:rounded-[16px] border overflow-hidden ${
                      isOpen ? "bg-[#f4f9fd] border-[#d7e6f3]" : "bg-white border-[#eef2f6]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full flex items-start sm:items-center gap-2.5 sm:gap-3 px-3.5 sm:px-5 py-3 sm:py-4 text-left"
                    >
                      <span className="text-[13px] sm:text-[14px] font-bold text-[#0e2a46] shrink-0 mt-0.5 sm:mt-0">
                        {number}
                      </span>
                      <span className="flex-1 text-[13px] sm:text-[15px] font-semibold text-[#0e2a46] leading-snug">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 ${
                          isOpen ? "bg-[#0e2a46] text-white border-[#0e2a46]" : "border-[#cfd8e3] text-[#0e2a46]"
                        }`}
                      >
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-3.5 sm:px-5 pb-3.5 sm:pb-4 pl-10 sm:pl-14 text-[13px] sm:text-[14px] text-[#5a6b82] leading-[1.7]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
