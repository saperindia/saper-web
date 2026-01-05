import React from 'react';
import { FOOTER_CONTENT, CONTACT_INFO, SITE_INFO } from '../constants';
import Logo from './Logo';

interface FooterProps {
   onOpenContact: () => void;
   onOpenLegal: (tab: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenLegal }) => {
   return (
      <footer id="contact" className="bg-saper-surface pt-24 md:pt-48 pb-16 md:pb-24 px-6 md:px-12 border-t border-saper-border">
         <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-48 gap-12 md:gap-16">

            <div className="max-w-xl">
               <p className="text-xl md:text-4xl font-medium leading-tight mb-8 md:mb-12 text-saper-black tracking-tight">
                  {FOOTER_CONTENT.description}
               </p>
               <div className="flex gap-4">
                  <button
                     onClick={onOpenContact}
                     className="w-full md:w-auto bg-saper-black text-saper-light px-8 py-4 rounded-full text-sm font-bold hover:bg-saper-primary transition-colors shadow-lg"
                  >
                     Contact Us
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 text-lg font-medium">
               <div>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="block mb-3 hover:text-saper-primary transition-colors">{CONTACT_INFO.phoneFormatted}</a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="block mb-6 hover:text-saper-primary transition-colors">{CONTACT_INFO.email}</a>
                  <address className="not-italic text-saper-gray text-base leading-relaxed">
                     {CONTACT_INFO.address.line1}<br />
                     {CONTACT_INFO.address.line2}<br />
                     {CONTACT_INFO.address.line3}
                  </address>
               </div>
               <div className="flex flex-col gap-3 text-base">
                  <a href={CONTACT_INFO.socialMedia.facebook} className="hover:text-saper-primary transition-colors">Facebook</a>
                  <a href={CONTACT_INFO.socialMedia.linkedin} className="hover:text-saper-primary transition-colors">LinkedIn</a>
                  <a href={CONTACT_INFO.socialMedia.instagram} className="hover:text-saper-primary transition-colors">Instagram</a>
               </div>
            </div>
         </div>

         {/* Massive Footer Logo + Brand Name */}
         <div className="w-full border-t border-saper-border pt-12 md:pt-20 pb-6 md:pb-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
               <Logo
                  className="max-w-[200px] md:max-w-[280px] h-auto"
                  showText={false}
                  color="text-saper-black"
               />
               <h1 className="text-[18vw] md:text-[14vw] font-extrabold leading-[0.9] tracking-tighter select-none text-saper-black text-center md:text-left">
                  {SITE_INFO.brandName}
               </h1>
            </div>
         </div>

         <div className="flex flex-col gap-6 md:flex-row justify-between items-center md:items-center mt-8 md:mt-12 text-xs font-bold text-saper-muted text-center md:text-left">
            <span>Saper Ind Projects & Resources</span>
            <div className="flex flex-row gap-4 items-center">
               <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-saper-primary transition-colors cursor-pointer text-left"
               >
                  Privacy Policy
               </button>
               <span className="text-saper-muted/50">•</span>
               <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-saper-primary transition-colors cursor-pointer text-left"
               >
                  Terms of Use
               </button>
            </div>
         </div>
      </footer>
   );
};

export default Footer;