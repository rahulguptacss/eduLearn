"use client";

import React, { useState, useEffect } from "react";
import { HeroData } from "../../types";
import {
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Users,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, any> = {
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  users: Users,
};

export default function Hero({ data }: { data: HeroData }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!data?.slides?.length) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === data.slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? data.slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [data.slides.length]);

  const slide = data.slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-[#f8fbfd]" aria-label="Featured programs">

      {/* =====================================================
          VERY LIGHT BACKGROUND UNIVERSITY IMAGE
      ====================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={data.bgImage || "/hero/bherog.png"}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          quality={50}
          className="object-cover"
        />
      </div>


      {/* =====================================================
          HERO MAIN CONTAINER
      ====================================================== */}
      <div className="relative z-10 h-auto lg:h-[510px] w-full">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}
        <div
          className="
            relative
            z-20
            w-full
            lg:w-[62%]
            h-full
            px-5
            sm:px-8
            lg:pl-[60px]
            lg:pr-10
            pt-12
            pb-4
            lg:py-[62px]
            flex
            flex-col
            justify-center
            lg:justify-between
          "
        >

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.45 }}
            >

              {/* ================= SUBTITLE ================= */}
              <div className="flex items-center gap-4 mb-4">
                <p className="text-primary font-semibold tracking-[1px] text-[13px] uppercase">
                  {slide.subtitle}
                </p>

                <span className="w-12 h-[1.5px] bg-primary" />
              </div>


              {/* ================= TITLE ================= */}
              <h1
                className="
                  text-secondary
                  font-bold
                  tracking-tight
                  leading-[1.15]
                  text-[24px]
                  sm:text-[32px]
                  md:text-[40px]
                  lg:text-[48px]
                  max-w-[600px]
                  mb-3
                  lg:mb-2
                "
              >
                {slide.titleHighlight ? (
                  <>
                    {slide.title.split(slide.titleHighlight)[0]}
                    <span className="text-[#c2410c]">{slide.titleHighlight}</span>
                    {slide.title.split(slide.titleHighlight)[1]}
                  </>
                ) : (
                  slide.title
                )}
              </h1>


              {/* ================= DESCRIPTION ================= */}
              <p
                className="
                  text-[#4b5563]
                  text-[14.5px]
                  lg:text-[16px]
                  leading-[1.6]
                  max-w-[510px]
                  mb-6
                  lg:mb-4
                "
              >
                {slide.description}
              </p>


              {/* ================= BUTTONS ================= */}
              <div className="flex flex-row justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-5 mb-8">

                {/* Primary */}
                <button
                  type="button"
                  className="
                    group
                    bg-primary
                    hover:bg-orange-600
                    text-white
                    pl-4
                    sm:pl-6
                    pr-1
                    sm:pr-1.5
                    py-1
                    sm:py-1.5
                    rounded-full
                    font-semibold
                    text-[12px]
                    sm:text-[14px]
                    flex
                    items-center
                    justify-between
                    gap-2
                    sm:gap-5
                    transition-all
                    duration-300
                    hover:shadow-lg
                    w-fit
                  "
                >
                  <span>{slide.primaryButtonText}</span>

                  <span
                    className="
                      w-8
                      h-8
                      sm:w-10
                      sm:h-10
                      rounded-full
                      bg-white
                      text-primary
                      flex
                      items-center
                      justify-center
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight
                      className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]"
                      strokeWidth={2.5}
                    />
                  </span>
                </button>


                {/* Secondary */}
                <button
                  type="button"
                  className="
                    group
                    bg-transparent
                    border-[1.5px]
                    border-secondary
                    text-secondary
                    hover:bg-secondary
                    hover:text-white
                    pl-4
                    sm:pl-6
                    pr-1
                    sm:pr-1.5
                    py-1
                    sm:py-1.5
                    rounded-full
                    font-semibold
                    text-[12px]
                    sm:text-[14px]
                    flex
                    items-center
                    justify-between
                    gap-2
                    sm:gap-5
                    transition-all
                    duration-300
                    w-fit
                  "
                >
                  <span>{slide.secondaryButtonText}</span>

                  <span
                    className="
                      w-8
                      h-8
                      sm:w-10
                      sm:h-10
                      rounded-full
                      bg-secondary
                      text-white
                      flex
                      items-center
                      justify-center
                      transition-transform
                      group-hover:scale-105
                    "
                  >
                    <Play
                      className="w-[14px] h-[14px] sm:w-[17px] sm:h-[17px] ml-[2px]"
                      fill="currentColor"
                    />
                  </span>
                </button>

              </div>

            </motion.div>
          </AnimatePresence>


          {/* =================================================
              FEATURES
          ================================================== */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-5
              lg:gap-6
              mt-8
              lg:mt-0
            "
          >

            {data.features?.map((feature, idx) => {

              const Icon =
                iconMap[feature.icon] || CheckCircle2;

              return (
                <React.Fragment key={idx}>

                  <div className="flex items-center gap-3">

                    {/* Icon */}
                    <div
                      className={`
                        w-[52px]
                        h-[52px]
                        rounded-full
                        flex
                        items-center
                        justify-center
                        shrink-0
                        ${idx === 1
                          ? "bg-[#e4f1fb] text-secondary"
                          : "bg-[#fff0e9] text-primary"
                        }
                      `}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h4
                        className="
                          font-bold
                          text-secondary
                          text-[13px]
                          lg:text-[14px]
                          leading-tight
                          mb-1
                          whitespace-nowrap
                        "
                      >
                        {feature.title}
                      </h4>

                      <p
                        className="
                          text-[11px]
                          lg:text-[12px]
                          text-[#4b5563]
                          leading-tight
                          whitespace-nowrap
                        "
                      >
                        {feature.subtitle}
                      </p>
                    </div>

                  </div>


                  {/* Divider */}
                  {idx !== data.features.length - 1 && (
                    <div
                      className="
                        w-[1px]
                        h-10
                        bg-gray-300/80
                        shrink-0
                      "
                    />
                  )}

                </React.Fragment>
              );
            })}

          </div>

        </div>


        {/* =================================================
            MOBILE IMAGE
        ================================================== */}
        <div
          className="
            lg:hidden
            relative
            w-[300px]
            h-[300px]
            sm:w-[420px]
            sm:h-[420px]
            mx-auto
            mb-12
            rounded-full
            overflow-hidden
            border-[12px]
            border-white
            shadow-lg
          "
        >
          <AnimatePresence>

            <motion.div
              key={currentSlide}
              initial={{
                opacity: 0,
                scale: 1.05,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 1023px) 80vw, 0px"
                quality={70}
                className="object-cover"
              />
            </motion.div>

          </AnimatePresence>
        </div>


        {/* =================================================
            DESKTOP RIGHT IMAGE DESIGN
        ================================================== */}
        <div
          className="
            hidden
            lg:block
            absolute
            right-0
            top-0
            w-[41%]
            h-full
            z-10
            overflow-hidden
            pointer-events-none
          "
        >

          {/* ORANGE OUTER SHAPE */}
          <div
            className="
              absolute
              w-[650px]
              h-[650px]
              right-[-210px]
              top-[-70px]
              rounded-full
              bg-primary
            "
          />


          {/* WHITE INNER RING */}
          <div
            className="
              absolute
              w-[610px]
              h-[610px]
              right-[-190px]
              top-[-50px]
              rounded-full
              bg-white
            "
          />


          {/* IMAGE */}
          <div
            className="
              absolute
              w-[574px]
              h-[574px]
              right-[-170px]
              top-[-32px]
              rounded-full
              overflow-hidden
              bg-white
              pointer-events-auto
            "
          >

            <AnimatePresence>

              <motion.div
                key={currentSlide}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={currentSlide === 0}
                  sizes="(min-width: 1024px) 41vw, 0px"
                  quality={75}
                  className="object-cover object-center"
                />
              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>


      {/* =====================================================
          LEFT NAVIGATION
      ====================================================== */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="
          absolute
          left-[10px]
          lg:left-[10px]
          top-[65%]
          lg:top-1/2
          -translate-y-1/2
          z-40
          w-11
          h-11
          rounded-full
          bg-secondary
          text-white
          flex
          items-center
          justify-center
          hover:bg-gray-800
          transition
          shadow-md
        "
      >
        <ChevronLeft size={21} />
      </button>


      {/* =====================================================
          RIGHT NAVIGATION
      ====================================================== */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute
          right-[15px]
          lg:right-[15px]
          top-[65%]
          lg:top-1/2
          -translate-y-1/2
          z-40
          w-11
          h-11
          rounded-full
          bg-secondary
          text-white
          flex
          items-center
          justify-center
          hover:bg-gray-800
          transition
          shadow-md
        "
      >
        <ChevronRight size={21} />
      </button>


      {/* =====================================================
          PAGINATION DOTS
      ====================================================== */}
      <div
        className="
          absolute
          bottom-[8px]
          left-1/2
          -translate-x-1/2
          z-40
          flex
          items-center
          gap-2
        "
      >
        {data.slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`
              rounded-full
              transition-all
              duration-300
              ${currentSlide === idx
                ? "w-3 h-3 bg-primary"
                : "w-3 h-3 bg-gray-300"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}