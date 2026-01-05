import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import { SITE_INFO } from '../constants';

interface HeaderProps {
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const difference = Math.abs(latest - previous);

    // Ignore very small scroll movements (reduces flickering)
    if (difference < 5) {
      return;
    }

    // Always show header when at the top
    if (latest < 100) {
      setHidden(false);
      lastScrollY.current = latest;
      return;
    }

    // Only change state if scrolled enough and past threshold
    if (latest > previous && latest > 150) {
      // Scrolling down - hide
      setHidden(true);
    } else if (latest < previous) {
      // Scrolling up - show
      setHidden(false);
    }

    lastScrollY.current = latest;
  });

  return (
    <>
      <div className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none px-3">
        <motion.header
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -120, opacity: 0 },
          }}
          initial="visible"
          animate={hidden ? "hidden" : "visible"}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="pointer-events-auto bg-saper-black/90 backdrop-blur-xl px-4 py-3 md:px-8 md:py-4 flex items-center justify-between w-full max-w-5xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10"
        >

          {/* Left: Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-base md:text-xl font-bold tracking-tight text-saper-light">
              {SITE_INFO.brandName.toLowerCase()}.
            </span>
          </div>

          {/* Center: Navigation (Desktop Only) */}
          <Navbar />

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={onOpenContact}
              className="bg-saper-light text-saper-black px-4 py-2.5 md:px-8 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-saper-primary hover:text-saper-light transition-all shadow-lg active:scale-95 hover:shadow-xl"
            >
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-saper-light p-2.5 bg-saper-light/10 rounded-full hover:bg-saper-light/20 transition-all active:scale-95"
            >
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>

        </motion.header>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenContact={onOpenContact}
      />
    </>
  );
};

export default Header;
