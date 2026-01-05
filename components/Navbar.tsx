import React from 'react';
import { NAVBAR_LINKS } from '../constants';

const Navbar: React.FC = () => {
    return (
        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-8 lg:gap-12">
                {NAVBAR_LINKS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="group relative flex flex-col items-center gap-1.5 py-2"
                    >
                        <span className="text-xs font-bold text-saper-light/70 group-hover:text-white transition-colors duration-300 uppercase tracking-[0.2em] leading-none">
                            {item.label}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-saper-primary scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
