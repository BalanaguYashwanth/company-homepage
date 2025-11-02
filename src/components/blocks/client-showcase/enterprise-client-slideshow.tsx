"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

interface Client {
  id: string
  name: string
  logo: string
  description: string
  project: string
  metrics: {
    label: string
    value: string
  }[]
}

const clients: Client[] = [
  {
    id: "vitaura",
    name: "Vitaura",
    logo: "VITAURA",
    description: "AI-powered enterprise transformation platform leveraging ML and automation to drive measurable growth for organizations.",
    project: "AI Enterprise Transformation",
    metrics: [
      { label: "Accuracy", value: "97%" },
      { label: "Time Reduced", value: "40%" },
      { label: "Satisfaction", value: "95%" }
    ]
  },
  {
    id: "hungrify",
    name: "Hungrify",
    logo: "HUNGRIFY",
    description: "Revolutionary blockchain-powered food delivery ecosystem with smart contracts and decentralized payments.",
    project: "Blockchain Integration",
    metrics: [
      { label: "Transaction Speed", value: "3x Faster" },
      { label: "Cost Reduction", value: "35%" },
      { label: "User Growth", value: "280%" }
    ]
  },
  {
    id: "sendai",
    name: "SendAI",
    logo: "SENDAI",
    description: "Enterprise-grade AI communication platform automating complex workflows and customer interactions.",
    project: "AI Automation Platform",
    metrics: [
      { label: "Workflow Efficiency", value: "85%" },
      { label: "Response Time", value: "<2s" },
      { label: "Enterprise Adoption", value: "150+" }
    ]
  }
]

export default function EnterpriseClientSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % clients.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <section className="bg-slate-950 py-24 px-6 overflow-hidden" id="clients">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Trusted by Leading Enterprises
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Slideshow Container */}
        <div 
          className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-800"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Client Logo and Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="text-3xl md:text-4xl font-black text-emerald-400 tracking-wider">
                    {clients[currentSlide].logo}
                  </div>
                  <div className="text-emerald-400 font-semibold text-lg">
                    {clients[currentSlide].project}
                  </div>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed">
                  {clients[currentSlide].description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700">
                  {clients[currentSlide].metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-emerald-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-br from-emerald-500/20 to-slate-900/50 rounded-xl p-8 backdrop-blur-sm border border-emerald-500/20"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-slate-400 text-sm font-medium">
                        Case Study Preview
                      </div>
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                      <div className="h-4 bg-emerald-500/40 rounded w-5/6"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">Performance</div>
                        <div className="h-2 bg-slate-700 rounded overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="h-full bg-emerald-500"
                          />
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">Success Rate</div>
                        <div className="h-2 bg-slate-700 rounded overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 2, delay: 0.8 }}
                            className="h-full bg-emerald-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500/20 rounded-full blur-sm"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-emerald-500/10 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
              >
                <div className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-emerald-500' 
                    : 'bg-slate-700 group-hover:bg-slate-600'
                }`}>
                  {index === currentSlide && !isHovered && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      className="h-full bg-emerald-400 rounded-full"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-12 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-emerald-400">500+</div>
            <div className="text-slate-400 text-sm">Projects Delivered</div>
          </div>
          <div className="w-px h-12 bg-slate-700"></div>
          <div>
            <div className="text-3xl font-bold text-emerald-400">98%</div>
            <div className="text-slate-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="w-px h-12 bg-slate-700"></div>
          <div>
            <div className="text-3xl font-bold text-emerald-400">24/7</div>
            <div className="text-slate-400 text-sm">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}