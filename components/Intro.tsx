import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { INTRO_CONTENT, SITE_INFO } from '../constants';

const Intro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Different parallax speeds for each line (subtle movement)
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y4 = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section ref={sectionRef} id="about" className="w-full min-h-[auto] md:min-h-screen py-24 md:py-0 flex flex-col justify-center px-6 md:px-12 bg-saper-bg border-t border-saper-black/10 overflow-hidden snap-start">
      <div className="max-w-[95%] mx-auto w-full">

        {/* Massive Headline - Editorial Style with Parallax */}
        <h2 className="font-sans text-5xl md:text-[5vw] leading-[0.85] font-extrabold text-saper-black tracking-tighter mb-16 md:mb-20">
          <motion.span style={{ y: y1 }} className="block text-saper-gray/40">{INTRO_CONTENT.headline.prefix}</motion.span>
          <motion.span style={{ y: y2 }} className="block">{INTRO_CONTENT.headline.line1}</motion.span>
          <motion.span style={{ y: y3 }} className="block">
            <span className="text-saper-primary inline-block">{INTRO_CONTENT.headline.highlight}</span> {INTRO_CONTENT.headline.line2}
          </motion.span>
          <motion.span style={{ y: y4 }} className="block">{INTRO_CONTENT.headline.line3}</motion.span>
        </h2>

        {/* Secondary Content - Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-saper-black/10 pt-8 md:pt-12">

          <div className="md:col-span-4 hidden md:block">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-saper-gray/60 block mb-2">
              {INTRO_CONTENT.established}
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-saper-black block">
              {SITE_INFO.location}
            </span>
          </div>

          <div className="md:col-span-5">
            <p className="text-lg md:text-2xl text-saper-black/80 leading-relaxed font-medium tracking-tight">
              {INTRO_CONTENT.description}
            </p>
          </div>



        </div>

        {/* Vision & Mission Section - Refined Design */}
        <div className="w-full border-t border-saper-black/10 pt-20 md:pt-32 mt-20 md:mt-32 mb-20 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Mission - Left */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-xs text-saper-primary font-bold">{INTRO_CONTENT.mission.index}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-saper-black tracking-tight">
                  {INTRO_CONTENT.mission.title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-saper-black/70 leading-relaxed font-normal">
                {INTRO_CONTENT.mission.text}
              </p>
            </div>

            {/* Vision - Right */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-xs text-saper-primary font-bold">{INTRO_CONTENT.vision.index}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-saper-black tracking-tight">
                  {INTRO_CONTENT.vision.title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-saper-black/70 leading-relaxed font-normal">
                {INTRO_CONTENT.vision.text}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;