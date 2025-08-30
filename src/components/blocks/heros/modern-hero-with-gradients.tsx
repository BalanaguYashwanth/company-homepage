"use client";
import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { TYPEFORM_LINK } from "@/lib/constants";

export function ModernHeroWithGradients() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="relative h-full min-h-[40rem] w-full bg-slate-900" onMouseMove={handleMouseMove}>
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95 z-10" />
        <div className="absolute inset-0 bg-slate-900 opacity-90 z-10" />
        {/* Animated geometric elements */}
        <FloatingElements mouseX={mouseX} mouseY={mouseY} />
      </div>
      
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-4">
        <Navbar />
        <div className="relative my-12 overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 py-10 md:py-40">
          <TopLines />
          <BottomLines />
          <SideLines />
          <VideoBackgroundPattern />

          <div className="relative z-20 flex flex-col items-center justify-center overflow-hidden rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="#"
                className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 px-6 py-2 text-center text-sm text-emerald-400 hover:from-emerald-500/20 hover:to-emerald-400/20 transition-all duration-300"
              >
                <span className="font-[var(--font-inter)]">Enterprise Solutions</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </Link>
            </motion.div>
            
            <motion.h1 
              className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text py-6 text-center text-3xl font-bold text-transparent md:text-5xl lg:text-7xl font-[var(--font-inter)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading Enterprise AI &<br />Blockchain Solutions
            </motion.h1>
            
            <motion.p 
              className="mx-auto max-w-3xl py-6 text-center text-lg text-slate-300 md:text-xl font-[var(--font-inter)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We partner with Fortune 500 companies to deliver cutting-edge artificial intelligence and blockchain technologies that drive digital transformation and competitive advantage.
            </motion.p>
            
            <motion.div 
              className="flex flex-col items-center gap-4 py-6 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="#"
                className="group relative overflow-hidden rounded-full bg-emerald-500 px-8 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 font-[var(--font-inter)]"
              >
                <span className="relative z-10">Explore Our Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FloatingElements = ({ mouseX, mouseY }: { mouseX: any; mouseY: any }) => {
  const x1 = useTransform(mouseX, [0, 1000], [0, 50]);
  const y1 = useTransform(mouseY, [0, 1000], [0, 30]);
  const x2 = useTransform(mouseX, [0, 1000], [0, -30]);
  const y2 = useTransform(mouseY, [0, 1000], [0, 50]);
  const x3 = useTransform(mouseX, [0, 1000], [0, 40]);
  const y3 = useTransform(mouseY, [0, 1000], [0, -20]);

  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"
        style={{ x: x1, y: y1 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl"
        style={{ x: x2, y: y2 }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-40 h-40 bg-slate-400/5 rounded-full blur-xl"
        style={{ x: x3, y: y3 }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );
};

const VideoBackgroundPattern = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-400/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
    </div>
  );
};

const Navbar = () => {
  const links = [
    { label: "Solutions", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Resources", href: "#" }
  ];
  
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="hidden items-center gap-8 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-md px-6 py-3 lg:flex">
        {links.map((link, idx) => (
          <Link
            key={link.href + idx}
            href={link.href}
            className="text-sm font-medium text-slate-300 transition duration-200 hover:text-emerald-400 font-[var(--font-inter)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href={TYPEFORM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-2 text-sm font-medium text-emerald-400 transition duration-200 hover:bg-emerald-500/20 font-[var(--font-inter)]"
      >
        Get Started
      </Link>
    </nav>
  );
};

const TopLines = () => {
  return (
    <svg
      width="166"
      height="298"
      viewBox="0 0 166 298"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-x-0 top-0 aspect-square h-[100px] w-full md:h-[200px]"
    >
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 1 -108)"
        stroke="url(#paint0_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 34 -108)"
        stroke="url(#paint1_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 67 -108)"
        stroke="url(#paint2_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 100 -108)"
        stroke="url(#paint3_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 133 -108)"
        stroke="url(#paint4_linear_254_143)"
      />
      <line
        y1="-0.5"
        x2="406"
        y2="-0.5"
        transform="matrix(0 1 1 0 166 -108)"
        stroke="url(#paint5_linear_254_143)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_254_143"
          x1="-7.42412e-06"
          y1="0.500009"
          x2="405"
          y2="0.500009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const BottomLines = () => {
  return (
    <svg
      width="445"
      height="418"
      viewBox="0 0 445 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-x-0 -bottom-20 z-20 aspect-square h-[150px] w-full md:h-[300px]"
    >
      <line
        x1="139.5"
        y1="418"
        x2="139.5"
        y2="12"
        stroke="url(#paint0_linear_0_1)"
      />
      <line
        x1="172.5"
        y1="418"
        x2="172.5"
        y2="12"
        stroke="url(#paint1_linear_0_1)"
      />
      <line
        x1="205.5"
        y1="418"
        x2="205.5"
        y2="12"
        stroke="url(#paint2_linear_0_1)"
      />
      <line
        x1="238.5"
        y1="418"
        x2="238.5"
        y2="12"
        stroke="url(#paint3_linear_0_1)"
      />
      <line
        x1="271.5"
        y1="418"
        x2="271.5"
        y2="12"
        stroke="url(#paint4_linear_0_1)"
      />
      <line
        x1="304.5"
        y1="418"
        x2="304.5"
        y2="12"
        stroke="url(#paint5_linear_0_1)"
      />
      <path
        d="M1 149L109.028 235.894C112.804 238.931 115 243.515 115 248.361V417"
        stroke="url(#paint6_linear_0_1)"
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <path
        d="M444 149L335.972 235.894C332.196 238.931 330 243.515 330 248.361V417"
        stroke="url(#paint7_linear_0_1)"
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="140.5"
          y1="418"
          x2="140.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="173.5"
          y1="418"
          x2="173.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1="206.5"
          y1="418"
          x2="206.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_1"
          x1="239.5"
          y1="418"
          x2="239.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_0_1"
          x1="272.5"
          y1="418"
          x2="272.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_0_1"
          x1="305.5"
          y1="418"
          x2="305.5"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_0_1"
          x1="115"
          y1="390.591"
          x2="-59.1703"
          y2="205.673"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
          <stop offset="1" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_0_1"
          x1="330"
          y1="390.591"
          x2="504.17"
          y2="205.673"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
          <stop offset="1" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const SideLines = () => {
  return (
    <svg
      width="1382"
      height="370"
      viewBox="0 0 1382 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 z-30 h-full w-full"
    >
      <path
        d="M268 115L181.106 6.97176C178.069 3.19599 173.485 1 168.639 1H0"
        stroke="url(#paint0_linear_337_46)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <path
        d="M1114 115L1200.89 6.97176C1203.93 3.19599 1208.52 1 1213.36 1H1382"
        stroke="url(#paint1_linear_337_46)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <path
        d="M268 255L181.106 363.028C178.069 366.804 173.485 369 168.639 369H0"
        stroke="url(#paint2_linear_337_46)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <path
        d="M1114 255L1200.89 363.028C1203.93 366.804 1208.52 369 1213.36 369H1382"
        stroke="url(#paint3_linear_337_46)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_337_46"
          x1="26.4087"
          y1="1.00001"
          x2="211.327"
          y2="175.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_337_46"
          x1="1355.59"
          y1="1.00001"
          x2="1170.67"
          y2="175.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_337_46"
          x1="26.4087"
          y1="369"
          x2="211.327"
          y2="194.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_337_46"
          x1="1355.59"
          y1="369"
          x2="1170.67"
          y2="194.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.481613" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          <stop offset="1" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Logo = () => {
  return (
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 object-contain"
    >
      <path
        d="M23.0384 38H14.4499L23.0384 16.0387H30.4115L39 38H30.4115L26.6844 27.2581L23.0384 38Z"
        fill="url(#paint0_linear_254_127)"
      />
      <path
        d="M10.5608 38H1L14.936 1H25.226L29.1962 12.2989H20.2836L10.5608 38Z"
        fill="url(#paint1_linear_254_127)"
      />
      <path
        d="M23.0384 38H14.4499L23.0384 16.0387H30.4115L39 38H30.4115L26.6844 27.2581L23.0384 38Z"
        stroke="url(#paint2_linear_254_127)"
      />
      <path
        d="M10.5608 38H1L14.936 1H25.226L29.1962 12.2989H20.2836L10.5608 38Z"
        stroke="url(#paint3_linear_254_127)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_254_127"
          x1="5.27928"
          y1="4.36364"
          x2="31.5269"
          y2="52.4504"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" />
          <stop offset="1" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_254_127"
          x1="5.27928"
          y1="4.36364"
          x2="31.5269"
          y2="52.4504"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(16, 185, 129)" />
          <stop offset="1" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_254_127"
          x1="8.27241"
          y1="32.7052"
          x2="32.6629"
          y2="18.9511"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_254_127"
          x1="8.27241"
          y1="32.7052"
          x2="32.6629"
          y2="18.9511"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};