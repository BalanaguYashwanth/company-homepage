"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function StatsWithNumberTicker() {
  const items = [
    {
      description: "Enterprise clients trust our blockchain infrastructure solutions",
      value: 50,
      suffix: "+",
      label: "Enterprise Clients"
    },
    {
      description: "Blockchain transactions processed securely and efficiently",
      value: 200,
      suffix: "M+",
      label: "Blockchain Transactions Processed"
    },
    {
      description: "Client retention rate demonstrates our commitment to excellence",
      value: 95,
      suffix: "%",
      label: "Client Retention Rate"
    },
    {
      description: "Round-the-clock technical support for mission-critical systems",
      value: 24,
      suffix: "/7",
      label: "Technical Support"
    },
  ];

  return (
    <section className="group/container relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl p-10 py-20">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-lg rotate-12" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-lg -rotate-6" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full" />
      </div>

      <div className="relative z-20">
        <h2 className="text-center text-xl font-bold text-white md:text-3xl font-[var(--font-inter)]">
          Trusted by Enterprise Leaders Worldwide
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-300 md:text-base font-[var(--font-inter)]">
          Our enterprise-grade blockchain infrastructure powers mission-critical applications 
          for leading organizations across the globe.
        </p>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={"card" + index}
              className={cn("group/card relative overflow-hidden rounded-lg bg-slate-900/50 backdrop-blur border border-slate-800 p-6 hover:bg-slate-900/70 transition-all duration-300")}
            >
              <div className="flex items-center gap-2 mb-4">
                <p className="text-4xl font-bold text-emerald-400 font-[var(--font-inter)]">
                  <AnimatedNumber value={item.value} />
                  <span className="text-emerald-400">{item.suffix}</span>
                </p>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-[var(--font-inter)]">
                {item.label}
              </h3>
              <p className="text-balance text-sm text-slate-400 font-[var(--font-inter)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(initial);
    }
  }, [isInView, spring, value, initial]);

  return <motion.span ref={ref}>{display}</motion.span>;
}