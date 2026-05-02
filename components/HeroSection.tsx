"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES, HeroSlide } from "./heroData";

/**
 * Hero Section — Image-driven layout.
 * Text is baked into the images. Code only adds CTA buttons + auto-slide.
 *
 * The image IS the hero: uses w-full h-auto so the image's natural
 * aspect ratio controls the section height. ZERO cropping.
 *
 * Image ratios:
 *   Desktop: 1672×941  (1.78:1, 16:9)
 *   Tablet:  1619×971  (1.67:1, 5:3)
 *   Mobile:  1498×1050 (1.43:1, 10:7)
 */
export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    if (HERO_SLIDES.length <= 1) return;
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % HERO_SLIDES.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const goToSlide = useCallback((index: number) => setCurrent(index), []);

  const encodeImageName = (name: string) => encodeURIComponent(name);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 mt-20">
      {/* ─── Hero Image (controls section height naturally) ─────── */}
      <div className="relative w-full">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className={`w-full ${isActive ? "relative" : "absolute inset-0"}`}
              style={{ pointerEvents: isActive ? "auto" : "none" }}
            >
              <picture className="block w-full">
                {/* Desktop ≥1024px: 16:9 image */}
                <source
                  media="(min-width: 1024px)"
                  srcSet={`/images/hero/laptop/${encodeImageName(slide.image)}.webp`}
                  type="image/webp"
                />
                {/* Tablet 768-1023px: 5:3 image */}
                <source
                  media="(min-width: 768px)"
                  srcSet={`/images/hero/tablet/${encodeImageName(slide.image)}.webp`}
                  type="image/webp"
                />
                {/* Mobile <768px: 10:7 image */}
                <img
                  src={`/images/hero/mobile/${encodeImageName(slide.image)}.webp`}
                  alt={slide.title}
                  className="w-full h-auto block"
                />
              </picture>
            </motion.div>
          );
        })}

        {/* ─── CTA Buttons (positioned at bottom of image) ──────── */}
        <div className="absolute z-10 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-6 left-0 right-0">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="flex flex-row gap-2 sm:gap-3">
              <a
                href="/contact"
                className="h-9 sm:h-10 md:h-12 lg:h-14 px-4 sm:px-5 md:px-6 lg:px-8 text-xs sm:text-sm md:text-base bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-sm inline-flex items-center justify-center transition-colors shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="/contact?type=consultation"
                className="h-9 sm:h-10 md:h-12 lg:h-14 px-4 sm:px-5 md:px-6 lg:px-8 text-xs sm:text-sm md:text-base border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 font-bold uppercase rounded-sm inline-flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* ─── Slide Indicators ─────────────────────────────────── */}
        {HERO_SLIDES.length > 1 && (
          <div className="absolute z-20 flex justify-center gap-2 bottom-2 md:bottom-4 left-0 right-0">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-orange-500"
                    : "w-4 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ─── Decorative Bottom Bar ─────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 to-red-600 z-20" />
    </section>
  );
}
