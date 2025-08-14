"use client";
import React from "react";
import { Mail } from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export function ContactFormGridWithDetails() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">
        <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
          <div className="flex items-start justify-start">
            <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
              <Mail className="h-6 w-6 text-emerald-500" />
            </FeatureIconContainer>
          </div>
          <h2 className="mt-9 bg-gradient-to-b from-slate-900 to-slate-800 bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl dark:from-slate-100 dark:to-slate-200">
            Start Your Digital Transformation
          </h2>
          <p className="mt-8 max-w-lg text-center text-base text-slate-600 md:text-left dark:text-slate-400">
            Schedule a strategic consultation with our enterprise technology experts. We'll assess your current infrastructure, identify optimization opportunities, and design a tailored solution architecture for your digital transformation journey.
          </p>

          <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              enterprise@formpilot.org
            </p>

            <div className="h-1 w-1 rounded-full bg-slate-500 dark:bg-slate-400" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              +1 (555) 247-8900
            </p>
            <div className="h-1 w-1 rounded-full bg-slate-500 dark:bg-slate-400" />

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Bengaluru, IN 560001
            </p>
          </div>

          <div className="mt-8 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <p><strong>Business Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM EST</p>
            <p><strong>Response Time:</strong> Technical inquiries within 4 hours</p>
          </div>

          <div className="relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
            <Pin className="top-0 right-1" />

            <Image
              src="/globe.svg"
              width={500}
              height={500}
              alt="global reach"
              className="[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter"
            />
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 p-4 sm:p-10 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
          <Grid size={20} />
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="name"
            >
              Executive Contact Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Smith"
              className="shadow-input h-10 w-full rounded-md border border-slate-200 bg-white pl-4 text-sm text-slate-700 placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
            />
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="email"
            >
              Business Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john.smith@company.com"
              className="shadow-input h-10 w-full rounded-md border border-slate-200 bg-white pl-4 text-sm text-slate-700 placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
            />
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="company"
            >
              Company Name
            </label>
            <input
              id="company"
              type="text"
              placeholder="Your Enterprise"
              className="shadow-input h-10 w-full rounded-md border border-slate-200 bg-white pl-4 text-sm text-slate-700 placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
            />
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="company-size"
            >
              Company Size
            </label>
            <select
              id="company-size"
              className="shadow-input h-10 w-full rounded-md border border-slate-200 bg-white pl-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <option value="">Select company size</option>
              <option value="50-199">50-199 employees</option>
              <option value="200-999">200-999 employees</option>
              <option value="1000-4999">1,000-4,999 employees</option>
              <option value="5000+">5,000+ employees</option>
            </select>
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="project-type"
            >
              Primary Technology Interest
            </label>
            <select
              id="project-type"
              className="shadow-input h-10 w-full rounded-md border border-slate-200 bg-white pl-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <option value="">Select primary focus</option>
              <option value="ai-ml">AI & Machine Learning</option>
              <option value="blockchain">Blockchain & Web3</option>
              <option value="cloud-migration">Cloud Migration</option>
              <option value="digital-transformation">Digital Transformation</option>
              <option value="automation">Process Automation</option>
              <option value="other">Other/Multiple Areas</option>
            </select>
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="timeline"
            >
              Project Timeline
            </label>
            <select
              id="timeline"
              className="shadow-input h-10 w-full rounded-md border border-slate-200 bg-white pl-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate (0-3 months)</option>
              <option value="short-term">Short-term (3-6 months)</option>
              <option value="medium-term">Medium-term (6-12 months)</option>
              <option value="long-term">Long-term (12+ months)</option>
            </select>
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Please describe your current technology challenges, objectives, and any specific requirements for your digital transformation initiative..."
              className="shadow-input w-full rounded-md border border-slate-200 bg-white pt-4 pl-4 text-sm text-slate-700 placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
            />
          </div>
          <button className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition duration-200 hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 md:text-sm">
            Request Consultation
          </button>
          <p className="relative z-10 text-xs text-slate-500 dark:text-slate-400">
            By submitting this form, you agree to our technical discovery process and confidentiality terms.
          </p>
        </div>
      </div>
    </div>
  );
}

const Pin = ({ className }: { className?: string }) => {
  return (
    <motion.div
      style={{ transform: "translateZ(1px)" }}
      className={cn(
        "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="h-full w-full">
        <motion.div 
          className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-slate-100 px-2 py-1 text-xs font-normal text-slate-700 dark:bg-slate-800 dark:text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Global Reach
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500"></span>
        </motion.div>

        <div
          style={{
            perspective: "800px",
            transform: "rotateX(70deg) translateZ(0px)",
          }}
          className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: [0, 1.2, 1, 1.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-emerald-500/[0.12] shadow-[0_8px_16px_rgb(16_185_129/0.4)] dark:bg-emerald-500/[0.25]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: [0, 1.2, 1, 1.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.3, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-emerald-500/[0.12] shadow-[0_8px_16px_rgb(16_185_129/0.4)] dark:bg-emerald-500/[0.25]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: [0, 1.2, 1, 1.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2.6, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-emerald-500/[0.12] shadow-[0_8px_16px_rgb(16_185_129/0.4)] dark:bg-emerald-500/[0.25]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div 
            className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-emerald-500 blur-[2px]"
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          <motion.div 
            className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-emerald-500"
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          <motion.div 
            className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-emerald-600 blur-[3px]"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1.5, 1],
              boxShadow: [
                "0 0 0px rgb(16 185 129 / 0.5)",
                "0 0 20px rgb(16 185 129 / 0.8)",
                "0 0 10px rgb(16 185 129 / 0.6)"
              ]
            }}
            transition={{ duration: 2, delay: 1.8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-emerald-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />
        </>
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-md bg-gradient-to-b from-slate-50 to-slate-200 p-[4px] dark:from-slate-800 dark:to-slate-950",
        className
      )}
    >
      <div
        className={cn(
          "relative z-20 h-full w-full rounded-[5px] bg-slate-50 dark:bg-slate-800",
          className
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-slate-600 opacity-50 blur-lg"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-emerald-600 to-transparent dark:h-[8px] dark:blur-sm"></div>
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-slate-900/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-slate-900/30 dark:to-slate-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay dark:fill-white/100 dark:stroke-white/100"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, idx: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}