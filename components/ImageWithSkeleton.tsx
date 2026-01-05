import React, { useState } from 'react';

interface ImageWithSkeletonProps {
    src: string;
    alt: string;
    className?: string;
    skeletonClassName?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
    src,
    alt,
    className = '',
    skeletonClassName = '',
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="relative w-full h-full">
            {/* Skeleton Loader */}
            {!isLoaded && !hasError && (
                <div
                    className={`absolute inset-0 bg-saper-border animate-pulse ${skeletonClassName}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
                </div>
            )}

            {/* Actual Image */}
            <img
                src={src}
                alt={alt}
                className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
            />

            {/* Error State */}
            {hasError && (
                <div className="absolute inset-0 bg-saper-border flex items-center justify-center">
                    <span className="text-saper-muted text-sm font-medium">Image not available</span>
                </div>
            )}

            <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .skeleton-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
        </div>
    );
};

export default ImageWithSkeleton;
