import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import ImageWithSkeleton from './ImageWithSkeleton';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative w-full pt-48 md:pt-80 pb-20 overflow-hidden">
      {/* Massive Brand Name */}
      <div className="px-4 md:px-8">
        <h1 className="text-huge font-extrabold leading-[0.8] tracking-tighter text-saper-black text-left select-none">
          {HERO_CONTENT.title}
        </h1>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh] mt-20 md:mt-24 overflow-hidden mx-auto max-w-[98%]">
        <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%] relative">
          <ImageWithSkeleton
            src={HERO_CONTENT.image.url}
            alt={HERO_CONTENT.image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-saper-dark/10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;