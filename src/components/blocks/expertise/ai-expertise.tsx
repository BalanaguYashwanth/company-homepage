"use client"

import { motion, useInView } from 'motion/react'
import { useRef, useMemo } from 'react'
import { Brain, Database, Zap, GitBranch, Bot, TrendingUp } from 'lucide-react'

// Seeded random number generator for consistent values
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export default function AIExpertiseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Generate deterministic positions for nodes and connections
  const nodePositions = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      cx: seededRandom(i) * 1200,
      cy: seededRandom(i + 100) * 800,
    }))
  }, [])

  const connectionPositions = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      x1: seededRandom(i + 200) * 1200,
      y1: seededRandom(i + 300) * 800,
      x2: seededRandom(i + 400) * 1200,
      y2: seededRandom(i + 500) * 800,
    }))
  }, [])

  const expertiseAreas = [
    {
      title: "RAG Systems",
      description: "Retrieval-augmented generation with intelligent knowledge bases for accurate, contextual AI responses",
      icon: Database,
      capabilities: ["Vector Databases", "Semantic Search", "Knowledge Graphs", "Context Retrieval"]
    },
    {
      title: "LLM Fine-tuning", 
      description: "Custom model training and domain-specific optimization for specialized AI applications",
      icon: Brain,
      capabilities: ["Model Adaptation", "Domain Training", "Parameter Tuning", "Performance Optimization"]
    },
    {
      title: "AI Applications",
      description: "End-to-end AI solutions from intelligent chatbots to predictive analytics systems",
      icon: Bot,
      capabilities: ["Conversational AI", "Automation", "Predictive Analytics", "ML Pipelines"]
    }
  ]

  return (
    <section ref={ref} className="relative bg-background py-24 overflow-hidden">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Neural nodes */}
          {nodePositions.map((pos, i) => (
            <circle
              key={`node-${i}`}
              cx={pos.cx}
              cy={pos.cy}
              r="3"
              fill="currentColor"
              className="text-primary"
            />
          ))}
          {/* Neural connections */}
          {connectionPositions.map((pos, i) => (
            <motion.line
              key={`connection-${i}`}
              x1={pos.x1}
              y1={pos.y1}
              x2={pos.x2}
              y2={pos.y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6" id="solutions">
            Artificial Intelligence Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI technologies that transform data into intelligent insights and automated solutions
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                className="relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Animated border highlight */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-accent"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  style={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{area.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-3">
                    {area.capabilities.map((capability, capIndex) => (
                      <motion.div
                        key={capability}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + capIndex * 0.1 + 0.8 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + capIndex * 0.1 + 1 }}
                        />
                        <span className="text-sm text-foreground font-medium">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Data Flow Visualization */}
        <motion.div
          className="relative bg-card border border-border rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            AI Development Pipeline
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {/* Pipeline Steps */}
            {[
              { icon: Database, label: "Data Ingestion", desc: "Multi-source data collection" },
              { icon: GitBranch, label: "Processing", desc: "Feature engineering" },
              { icon: Brain, label: "Model Training", desc: "AI/ML model development" },
              { icon: TrendingUp, label: "Deployment", desc: "Production optimization" }
            ].map((step, index) => {
              const StepIcon = step.icon
              return (
                <div key={step.label} className="flex flex-col items-center relative">
                  <motion.div
                    className="p-4 bg-accent/10 rounded-full mb-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  >
                    <StepIcon className="h-8 w-8 text-accent" />
                  </motion.div>
                  <h4 className="font-semibold text-primary mb-2">{step.label}</h4>
                  <p className="text-sm text-muted-foreground text-center max-w-32">
                    {step.desc}
                  </p>

                  {/* Connecting Arrow */}
                  {index < 3 && (
                    <motion.div
                      className="hidden md:block absolute top-8 left-full w-16 h-0.5 bg-accent"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Animated Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {[
            { number: "99%", label: "Model Accuracy" },
            { number: "50%", label: "Cost Reduction" },
            { number: "10x", label: "Faster Processing" },
            { number: "24/7", label: "Automated Operations" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-accent mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}