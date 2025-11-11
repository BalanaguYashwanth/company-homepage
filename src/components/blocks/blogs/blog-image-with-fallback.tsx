"use client";

import { useState, useRef, useEffect } from "react";

interface BlogImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

const DEFAULT_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23064748;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECognito Innovations%3C/text%3E%3C/svg%3E";

export function BlogImageWithFallback({
  src,
  alt,
  fill,
  className,
  priority,
  sizes,
  width,
  height,
}: BlogImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [useFallback, setUseFallback] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset when src changes
    setUseFallback(false);
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (!useFallback) {
      setUseFallback(true);
      setImgSrc(DEFAULT_IMAGE);
    }
  };

  // Use regular img for reliable error handling
  if (fill) {
    return (
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        className={className}
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover",
          position: "absolute",
          inset: 0
        }}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  return (
    <img
      ref={imgRef}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
    />
  );
}

