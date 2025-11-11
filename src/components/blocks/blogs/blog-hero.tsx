"use client";

import { motion } from "motion/react";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-4 bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl font-[var(--font-inter)]">
            Insights & Innovation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl font-[var(--font-inter)]">
            Explore our latest thoughts on artificial intelligence, blockchain technology, and enterprise solutions that drive digital transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

