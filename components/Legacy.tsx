import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LEGACY_CONTENT } from '../constants';
import ImageWithSkeleton from './ImageWithSkeleton';

const Legacy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-48 bg-saper-bg px-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-center">

        {/* Left: Text with Parallax */}
        <motion.div style={{ y: titleY }} className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-6xl font-extrabold leading-[0.95] mb-6 md:mb-10 text-saper-black tracking-tighter">
            {LEGACY_CONTENT.title.line1} <br /> {LEGACY_CONTENT.title.line2}
          </h2>
          <p className="text-saper-gray text-base md:text-xl leading-relaxed mb-8 md:mb-12 font-medium">
            {LEGACY_CONTENT.description}
          </p>
        </motion.div>

        {/* Right: Image with Parallax */}
        <div className="w-full md:w-2/3">
          <motion.div style={{ y: imageY }} className="w-full h-[300px] md:h-[500px] bg-saper-border overflow-hidden relative rounded-lg">
            <ImageWithSkeleton
              src={LEGACY_CONTENT.image.url}
              alt={LEGACY_CONTENT.image.alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-saper-surface px-6 py-3 text-sm font-bold rounded-full shadow-lg">
              {LEGACY_CONTENT.foundedBadge}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Legacy;