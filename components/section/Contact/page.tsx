"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { motion, useInView, animate, type Variants } from "framer-motion";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Lock,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const cardIcons: Record<string, React.ElementType> = {
  mail: Mail,
  map: MapPin,
  phone: Phone,
};

const fieldWrap =
  "flex items-center gap-3 bg-[#f4f7fb] border border-[#e8eef5] rounded-2xl px-4 h-[50px] sm:h-[54px] focus-within:border-[#0e2a46] transition-colors";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function Contact({ data }: { data: any }) {
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <section className="bg-[#f6f9fe] pt-8 pb-4 sm:pt-10 lg:pt-14 lg:pb-6 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-8 sm:mb-10"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="w-7 sm:w-8 h-[2px] bg-[#ff5e14] rounded-full origin-right"
              />
              <span className="text-[11px] sm:text-[13px] font-bold text-[#ff5e14] tracking-[2.4px] uppercase">
                {data.subtitle}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="w-7 sm:w-8 h-[2px] bg-[#ff5e14] rounded-full origin-left"
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[28px] sm:text-[42px] lg:text-[52px] font-extrabold text-[#0e2a46] leading-[1.15] mb-3 sm:mb-4"
            >
              {data.title} <span className="text-[#ff5e14]">{data.titleHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6b7c8d] text-[14px] sm:text-[16px] leading-[1.75] max-w-[620px] mx-auto">
              {data.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-12"
          >
            {data.cards.map((card: any) => {
              const Icon = cardIcons[card.icon] || Mail;
              const isOrange = card.icon === "map";
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(14,42,70,0.1)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="bg-white rounded-[20px] shadow-[0_8px_28px_rgba(14,42,70,0.06)] px-5 sm:px-6 py-5 sm:py-6 flex items-center gap-3.5 sm:gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -6 }}
                    className={`w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-full flex items-center justify-center shrink-0 ${
                      isOrange ? "bg-[#ff5e14]" : "bg-[#0e2a46]"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white" strokeWidth={2} />
                  </motion.div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] sm:text-[16px] font-extrabold text-[#0e2a46] leading-tight mb-0.5">{card.title}</h3>
                    <p className="text-[12px] sm:text-[13px] text-[#8a97a8] mb-1">{card.note}</p>
                    {card.lines.map((line: string) => (
                      <p key={line} className="text-[13px] sm:text-[14px] font-semibold text-[#0e2a46] leading-[1.45]">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            <motion.form
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-[22px] sm:rounded-[28px] border border-[#eef2f7] shadow-[0_12px_40px_rgba(14,42,70,0.06)] p-5 sm:p-8"
            >
              <p className="text-[11px] sm:text-[12px] font-bold text-[#ff5e14] tracking-[2px] uppercase mb-2">
                {data.form.subtitle}
              </p>
              <h3 className="text-[24px] sm:text-[34px] font-extrabold text-[#0e2a46] leading-tight mb-2">
                {data.form.title} <span className="text-[#ff5e14]">{data.form.titleHighlight}</span>
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#6b7c8d] mb-5 sm:mb-6">{data.form.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                <label className={fieldWrap}>
                  <User className="w-4 h-4 text-[#0e2a46] shrink-0" />
                  <input required className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-[#0e2a46]" placeholder={`${data.form.fields.name} *`} />
                </label>
                <label className={fieldWrap}>
                  <Mail className="w-4 h-4 text-[#0e2a46] shrink-0" />
                  <input required type="email" className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-[#0e2a46]" placeholder={`${data.form.fields.email} *`} />
                </label>
                <label className={fieldWrap}>
                  <Phone className="w-4 h-4 text-[#0e2a46] shrink-0" />
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={15}
                    pattern="[0-9]{7,15}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 15))}
                    onKeyDown={(e) => {
                      if (e.ctrlKey || e.metaKey) return;
                      if (["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
                      if (!/^\d$/.test(e.key)) e.preventDefault();
                    }}
                    onPaste={(e) => {
                      e.preventDefault();
                      const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 15);
                      setPhone(digits);
                    }}
                    className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-[#0e2a46]"
                    placeholder={data.form.fields.phone}
                  />
                </label>
                <label className={`${fieldWrap} relative`}>
                  <FileSelectIcon />
                  <select
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-[#0e2a46] appearance-none pr-6"
                  >
                    <option value="">{data.form.fields.subject} *</option>
                    {data.form.subjects.map((item: string) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#8a97a8] absolute right-4 pointer-events-none" />
                </label>
              </div>

              <textarea
                rows={5}
                placeholder={data.form.fields.message}
                className="w-full bg-[#f4f7fb] border border-[#e8eef5] rounded-2xl px-4 py-3 text-[14px] outline-none focus:border-[#0e2a46] mb-5 resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#ff5e14] hover:bg-[#e04f0d] text-white font-bold text-[14px] pl-6 pr-1.5 py-1.5 rounded-full shadow-md transition-colors"
              >
                {data.form.buttonText}
                <span className="w-9 h-9 rounded-full bg-white text-[#ff5e14] flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </span>
              </motion.button>

              <p className="flex items-center gap-2 text-[12px] text-[#8a97a8] mt-4">
                <Lock className="w-3.5 h-3.5 shrink-0" />
                {data.form.privacyText}
              </p>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] min-h-[440px] sm:min-h-[500px] lg:min-h-[520px] bg-[#0b2744] text-white"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-8 w-44 sm:w-56 h-44 sm:h-56 rounded-full bg-[#ff5e14]"
              />
              <div className="absolute top-8 right-0 w-[48%] sm:w-[55%] h-full">
                <Image
                  src={data.promo.image}
                  alt={data.promo.titleHighlight}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2744] via-[#0b2744]/50 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-3 sm:top-5 sm:right-5 z-20 bg-white text-[#0e2a46] text-[10px] sm:text-[11px] font-extrabold leading-tight rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-md max-w-[100px] sm:max-w-[118px] text-center"
              >
                {data.promo.badge}
              </motion.div>
              <div className="relative z-10 p-5 sm:p-9 h-full flex flex-col justify-between max-w-[82%] sm:max-w-[58%]">
                <div>
                  <h3 className="text-[24px] sm:text-[34px] font-extrabold leading-[1.15] mb-3">
                    {data.promo.title} <span className="text-[#ff5e14]">{data.promo.titleHighlight}</span>
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-white/80 leading-[1.7] mb-5 sm:mb-6">{data.promo.description}</p>
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-3 sm:space-y-4"
                  >
                    {data.promo.items.map((item: { title: string; text: string }) => (
                      <motion.div variants={fadeUp} key={item.title} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#ff5e14] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </span>
                        <div>
                          <p className="font-extrabold text-[13px] sm:text-[14px]">{item.title}</p>
                          <p className="text-[11px] sm:text-[12px] text-white/75">{item.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <p className={`${caveat.className} text-[22px] sm:text-[28px] leading-tight mt-6 sm:mt-8`}>
                  {data.promo.note}
                  <Send className="inline-block w-5 h-5 sm:w-6 sm:h-6 ml-2 -rotate-12" />
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f6f9fe] overflow-hidden pt-6 sm:pt-8 lg:pt-6 pb-8 px-0">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-6 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="py-2 lg:py-6 flex flex-col justify-center"
          >
            <p className="flex items-center gap-3 text-[11px] sm:text-[12px] font-bold text-[#ff5e14] tracking-[2px] uppercase mb-3">
              {data.map.subtitle}
              <span className="w-8 h-[2px] bg-[#ff5e14] rounded-full" />
            </p>
            <h2 className="text-[28px] sm:text-[42px] font-extrabold text-[#0e2a46] leading-tight mb-3 sm:mb-4">
              Visit Our <span className="text-[#ff5e14]">Campus</span>
            </h2>
            <p className="text-[#6b7c8d] text-[14px] sm:text-[15px] leading-[1.85] mb-5">{data.map.description}</p>
            <p className="flex items-start gap-2.5 text-[13px] sm:text-[14px] font-semibold text-[#0e2a46] mb-6">
              <span className="w-8 h-8 rounded-full bg-[#fff1e9] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#ff5e14]" />
              </span>
              <span className="whitespace-pre-line pt-1">{data.map.address}</span>
            </p>
            <motion.div whileHover={{ x: 4 }} className="w-fit">
              <Link
                href={data.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white hover:bg-[#f8fafc] text-[#0e2a46] font-bold text-[14px] pl-6 pr-2 py-2 rounded-full border border-[#e4ebf2] shadow-sm"
              >
                {data.map.buttonText}
                <span className="w-8 h-8 rounded-full bg-white border border-[#e4ebf2] flex items-center justify-center">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative h-[280px] sm:h-[340px] lg:h-[360px] overflow-hidden rounded-[20px] lg:rounded-l-none lg:rounded-r-[24px]"
          >
            <iframe
              title="Campus map"
              src={data.map.mapUrl}
              className="absolute inset-0 w-[calc(100%+40px)] h-[calc(100%+70px)] -left-2 -top-2 border-0 grayscale-[15%]"
              loading="lazy"
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f6f9fe] to-transparent pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-[18%] left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 pointer-events-none max-w-[90%]"
            >
              <motion.span
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-8 h-8 rounded-full bg-[#ff5e14] shadow-lg flex items-center justify-center shrink-0"
              >
                <MapPin className="w-4 h-4 text-white fill-white" />
              </motion.span>
              <span className="bg-white text-[#0e2a46] text-[12px] sm:text-[13px] font-bold px-3 py-2 rounded-xl shadow-md whitespace-nowrap">
                {data.map.marker}
              </span>
            </motion.div>

            <div className="absolute left-0 right-0 bottom-0 z-20 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 118" preserveAspectRatio="none" aria-hidden>
                <path d="M0 118 C55 118 78 22 168 16 H868 C886 16 900 30 900 48 V118 Z" fill="#0b2744" />
              </svg>
              <div className="relative flex items-center pl-10 xs:pl-14 sm:pl-28 pr-3 sm:pr-8 pt-5 pb-3 sm:pt-5 sm:pb-4 min-h-[84px] sm:min-h-[92px]">
                {data.map.stats.map((stat: { value: string; label: string }, idx: number) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 * idx }}
                    className={`flex-1 min-w-0 ${idx > 0 ? "border-l border-white/20 pl-2.5 sm:pl-6" : ""}`}
                  >
                    <StatCounter value={stat.value} />
                    <p className="text-[9px] sm:text-[12px] text-white/80 truncate">{stat.label}</p>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${caveat.className} hidden sm:block shrink-0 w-[128px] sm:w-[148px] text-white text-[24px] sm:text-[28px] leading-[1.05] text-right`}
                >
                  <span className="block">Education</span>
                  <span className="relative inline-block whitespace-nowrap">
                    Changes Lives
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[3px] rounded-full bg-[#ff5e14]" />
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numMatch = value.replace(/,/g, "").match(/(\d+)/);
  const number = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = value.replace(/[\d,]/g, "");

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, number, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (val) => {
        if (ref.current) {
          ref.current.textContent = Math.floor(val).toLocaleString() + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, number, suffix]);

  return (
    <p ref={ref} className="text-[18px] sm:text-[26px] font-extrabold text-[#ff5e14] leading-none mb-1">
      0{suffix}
    </p>
  );
}

function FileSelectIcon() {
  return (
    <svg className="w-4 h-4 text-[#0e2a46] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}
