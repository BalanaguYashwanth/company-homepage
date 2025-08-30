"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Blocks, DollarSign } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  gradient: string;
  textColor: string;
  Link: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  isLarge?: boolean;
  Link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, isLarge = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`
        group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm
        transition-all duration-300 hover:shadow-xl hover:border-emerald-200
        ${isLarge ? 'lg:row-span-2 p-8' : 'p-6'}
      `}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${product.gradient}`} />
      
      {/* Icon container */}
      <motion.div
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.3 }}
        className={`
          inline-flex items-center justify-center rounded-xl mb-6
          ${product.gradient} ${product.textColor}
          ${isLarge ? 'w-16 h-16' : 'w-12 h-12'}
        `}
      >
        <product.icon size={isLarge ? 32 : 24} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className={`font-bold text-slate-900 mb-3 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
          {product.name}
        </h3>
        <p className={`text-slate-600 leading-relaxed mb-6 ${isLarge ? 'text-lg' : 'text-base'}`}>
          {product.description}
        </p>

        {/* Call to action */}
        <motion.a
          href={product.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-emerald-600 font-semibold group/link cursor-pointer"
        >
          <span>Learn More</span>
          <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
        </motion.a>
      </div>

      {/* Decorative element */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default function InHouseProductsShowcase() {
  const products: Product[] = [
    {
      name: "ReezoAI",
      description: "Advanced RAG Systems & LLM Applications. Cutting-edge retrieval-augmented generation technology that transforms how businesses interact with their data and knowledge bases.",
      icon: Brain,
      Link:"http://reezoai.com",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      textColor: "text-white",
    },
    {
      name: "BuzzAgent",
      description: "Companion Agent adds trending and viral content to their socials autonomously and helps creators to grow visibility",
      icon: DollarSign,
      Link:"http://buzzagent.reezoai.com",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-white"
    },
    {
      name: "Supply Chain Management",
      description: "Blockchain Infrastructure & Smart Contracts. Secure, scalable blockchain solutions powering the next generation of decentralized applications.",
      icon: Blocks,
      Link:"/",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-800",
      textColor: "text-white"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-60 blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-60 blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-100 rounded-full opacity-80 blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Innovation Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Pioneering the future with our cutting-edge in-house products that redefine industry standards
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* ReezoAI - Large card */}
          <ProductCard 
            product={products[0]} 
            index={0} 
            isLarge={true}
            Link={products[0]}
          />

          {/* Solstrom and PayLLM - Smaller cards */}
          <div className="space-y-6 lg:space-y-8">
            <ProductCard 
              product={products[1]} 
              index={1}
              Link={products[1]}
            />
            <ProductCard 
              product={products[2]} 
              index={2} 
            />
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-12 h-px bg-slate-300" />
            <span>Innovating for tomorrow</span>
            <div className="w-12 h-px bg-slate-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}