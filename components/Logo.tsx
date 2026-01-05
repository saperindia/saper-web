import React from 'react';
import { SITE_INFO } from '../constants';

interface LogoProps {
    className?: string;
    showText?: boolean;
    textClassName?: string;
    color?: string;
}

const Logo: React.FC<LogoProps> = ({
    className = "w-6 h-6 md:w-8 md:h-8",
    showText = true,
    textClassName = "text-base md:text-xl font-bold tracking-tight text-saper-light hidden sm:block",
    color = "text-saper-light"
}) => {
    return (
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Render image if imageUrl is provided, otherwise render SVG paths */}
            {SITE_INFO.logo.imageUrl ? (
                <img
                    src={SITE_INFO.logo.imageUrl}
                    alt={SITE_INFO.logo.alt}
                    className={`${className} object-contain`}
                />
            ) : (
                <svg className={`${className} ${color}`} viewBox={SITE_INFO.logo.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                    {SITE_INFO.logo.paths.map((path, index) => (
                        <path key={index} d={path} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    ))}
                </svg>
            )}
            {showText && (
                <span className={textClassName}>{SITE_INFO.brandName.toLowerCase()}.</span>
            )}
        </div>
    );
};

export default Logo;
