"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};
import {
  ArrowRight,
  ClipboardList,
  FileText,
  GraduationCap,
  Heart,
  Headphones,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  User,
  Users,
} from "lucide-react";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const featureIcons: Record<string, React.ElementType> = {
  message: MessageCircle,
  users: Users,
  file: ClipboardList,
  heart: Heart,
};

const contactIcons: Record<string, React.ElementType> = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  headset: Headphones,
};

const fieldClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#0e2a46] bg-white";

function FieldLabel({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-2 text-[13px] font-semibold text-[#0e2a46] mb-1.5">
      <Icon className="w-4 h-4 text-[#0e2a46]" strokeWidth={2} />
      {children}
      <span className="text-red-500">*</span>
    </label>
  );
}

export default function Enquiry({ data }: { data: any }) {
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="bg-white pt-10 pb-8 lg:pt-14 lg:pb-10 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[3px] bg-[#ff5e14] rounded-full"></div>
              <span className="text-[13px] font-bold text-[#0e2a46] tracking-[2px] uppercase">
                {data.subtitle}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="relative mb-4">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#0e2a46] leading-[1.2] pr-12">
                {data.title}
                <br />
                {data.titleHighlight}
              </h2>
              <motion.div
                className="absolute top-2 right-2 hidden sm:block"
                animate={{ y: [0, -8, 0], rotate: [-20, -8, -20] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Send className="w-9 h-9 text-[#0e2a46]" strokeWidth={1.6} />
              </motion.div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[#5a6b82] text-[15px] sm:text-[16px] leading-[1.75] mb-8 max-w-[540px]">
              {data.description}
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-3 mb-8">
              {data.features.map((feature: { icon: string; title: string; description: string }) => {
                const Icon = featureIcons[feature.icon] || MessageCircle;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center text-center px-1"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="w-[58px] h-[58px] rounded-full bg-[#e8f1f8] text-[#0e2a46] flex items-center justify-center mb-3"
                    >
                      <Icon className="w-[22px] h-[22px]" strokeWidth={1.7} />
                    </motion.div>
                    <h4 className="text-[14px] sm:text-[15px] font-extrabold text-[#0e2a46] leading-[1.2] mb-1 max-w-[110px]">
                      {feature.title}
                    </h4>
                    <p className="text-[12px] text-[#6b7c8d] leading-[1.4] max-w-[120px]">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="relative w-full h-[250px] sm:h-[320px] rounded-[20px] overflow-hidden group">
              <Image
                src={data.image}
                alt={data.imageBadge}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`${caveat.className} absolute right-5 bottom-8 sm:right-8 sm:bottom-10 text-white text-[28px] sm:text-[34px] leading-[1.15] text-right max-w-[220px] drop-shadow-md`}
              >
                {data.imageBadge}
                <span className="block w-24 h-[3px] bg-[#ffc107] ml-auto mt-2 rounded-full"></span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(14,42,70,0.08)] border border-gray-100"
          >
            <div className="bg-[#0e2a46] px-6 sm:px-8 py-7 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[3px] bg-[#ff5e14] rounded-full"></div>
                <p className="text-[12px] font-bold tracking-[1.5px] uppercase">
                  {data.form.subtitle}
                </p>
              </div>
              <h3 className="text-[26px] sm:text-[32px] font-bold leading-tight mb-2">{data.form.title}</h3>
              <p className="text-[14px] text-white/75">{data.form.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <FieldLabel icon={User}>Full Name</FieldLabel>
                  <input required type="text" placeholder="Enter your full name" className={fieldClass} />
                </div>
                <div>
                  <FieldLabel icon={Mail}>Email Address</FieldLabel>
                  <input required type="email" placeholder="Enter your email address" className={fieldClass} />
                </div>
                <div>
                  <FieldLabel icon={Phone}>Phone Number</FieldLabel>
                  <input required type="tel" placeholder="Enter your phone number" className={fieldClass} />
                </div>
                <div>
                  <FieldLabel icon={GraduationCap}>Interested In</FieldLabel>
                  <select required className={`${fieldClass} text-gray-500`}>
                    <option value="">Select option</option>
                    {data.form.interests.map((option: string) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <FieldLabel icon={FileText}>Your Query Subject</FieldLabel>
                <select required className={`${fieldClass} text-gray-500`}>
                  <option value="">Select subject</option>
                  {data.form.subjects.map((option: string) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel icon={MessageSquare}>Your Message</FieldLabel>
                <textarea
                  required
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className={`${fieldClass} min-h-[120px] resize-none`}
                />
                <p className="text-right text-[12px] text-[#8a97a8] mt-1">{message.length}/500</p>
              </div>

              <label className="flex items-start gap-2.5 text-[13px] text-[#5a6b82] cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 accent-[#0e2a46]"
                  required
                />
                <span>
                  I agree to the <span className="font-semibold text-[#0e2a46]">Terms & Conditions</span> and{" "}
                  <span className="font-semibold text-[#0e2a46]">Privacy Policy</span>.
                </span>
              </label>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#ffc107] hover:bg-[#f0b400] text-[#0e2a46] font-bold rounded-full py-3.5 px-6 flex items-center justify-center gap-2 transition-colors"
              >
                {data.form.buttonText}
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <p className="flex items-center justify-center gap-2 text-[12px] text-[#8a97a8]">
                <Lock className="w-3.5 h-3.5" />
                {data.form.secureText}
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7fafc] pt-8 pb-14 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[3px] bg-[#ff5e14] rounded-full"></div>
              <span className="text-[13px] font-bold text-[#0e2a46] tracking-[1.5px] uppercase">
                {data.contact.subtitle}
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] font-extrabold text-[#0e2a46] mb-3">{data.contact.title}</h2>
            <p className="text-[#6b7c8d] text-[15px] max-w-[620px] mx-auto">{data.contact.description}</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {data.contact.items.map((item: any) => {
              const Icon = contactIcons[item.icon] || Phone;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="bg-white rounded-[20px] px-6 py-8 text-center shadow-[0_8px_30px_rgba(14,42,70,0.05)] hover:shadow-[0_16px_40px_rgba(14,42,70,0.1)] cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -6 }}
                    className="w-[52px] h-[52px] rounded-full bg-[#e8f1f8] text-[#0e2a46] flex items-center justify-center mx-auto mb-5"
                  >
                    <Icon className="w-[22px] h-[22px]" strokeWidth={2} />
                  </motion.div>
                  <h4 className="text-[18px] font-extrabold text-[#0e2a46] mb-2">{item.title}</h4>
                  <p className="text-[14px] font-semibold text-[#0e2a46] leading-snug">{item.line1}</p>
                  {item.line2 && <p className="text-[13px] text-[#6b7c8d] mt-1.5 leading-relaxed">{item.line2}</p>}
                  {item.buttonText && (
                    <button className="mt-3 inline-flex items-center gap-1.5 text-[#ff5e14] font-semibold text-[14px]">
                      {item.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
