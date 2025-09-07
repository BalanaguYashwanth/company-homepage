"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { Shield, Cpu, TrendingUp, Code, Layers, Zap, ArrowRight } from 'lucide-react'

const BlockchainExpertise = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform values for animations
  const yTransform = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const expertise = [
    {
      id: 'smart-contracts',
      title: 'Smart Contracts',
      icon: Shield,
      description: 'Enterprise-grade smart contract development with security and efficiency at the core',
      technologies: ['Ethereum', 'Solana', 'Polygon', 'Arbitrum'],
      codeSnippet: `contract SafeVault {
  mapping(address => uint256) public balances;
  
  function deposit() external payable {
    balances[msg.sender] += msg.value;
    emit Deposit(msg.sender, msg.value);
  }
}`,
      color: '#3b82f6'
    },
    {
      id: 'nft-platforms',
      title: 'NFT Platforms',
      icon: Cpu,
      description: 'Full-stack NFT marketplaces, gaming platforms, and enterprise token solutions',
      technologies: ['IPFS', 'Metadata', 'Royalties', 'Gaming'],
      codeSnippet: `function mint(address to, string memory tokenURI) 
  public onlyOwner returns (uint256) {
  _tokenIds.increment();
  uint256 newItemId = _tokenIds.current();
  _mint(to, newItemId);
  _setTokenURI(newItemId, tokenURI);
  return newItemId;
}`,
      color: '#8b5cf6'
    },
    {
      id: 'defi-solutions',
      title: 'DeFi Solutions',
      icon: TrendingUp,
      description: 'Advanced DeFi protocols, yield farming strategies, and tokenomics design',
      technologies: ['DEX', 'AMM', 'Staking', 'Governance'],
      codeSnippet: `function calculateReward(address user) 
  public view returns (uint256) {
  uint256 stakingPeriod = block.timestamp - 
    stakingStartTime[user];
  return (stakedAmount[user] * APY * stakingPeriod) 
    / (365 days * 100);
}`,
      color: '#10b981'
    }
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen bg-slate-900 py-24 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Floating blockchain elements */}
      <motion.div
        style={{ y: yTransform }}
        className="absolute top-20 right-20 w-24 h-24 border-2 border-accent/30 rounded-lg transform rotate-12"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
        className="absolute bottom-32 left-16 w-16 h-16 border border-accent/20 rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Blockchain Expertise</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cutting-edge blockchain development across smart contracts, NFT platforms, and DeFi solutions
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {expertise.map((item, index) => (
            <ExpertiseCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Connecting Lines Animation */}
        <ConnectingLines />

        {/* Technology Showcase */}
        <TechnologyShowcase />
      </div>
    </section>
  )
}

const ExpertiseCard = ({ item, index }: { item: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 group cursor-pointer"
    >
      {/* Card glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-6"
          animate={isHovered ? { rotate: 5, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <item.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
        <p className="text-slate-300 mb-6 leading-relaxed">{item.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-700/50 text-accent text-sm rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Code Snippet */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
            <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap">
              <code>{item.codeSnippet}</code>
            </pre>
          </div>
        </motion.div>

        {/* Action Button */}
        {/* <motion.div 
          className="mt-6 flex items-center text-accent group-hover:text-white transition-colors duration-300"
          animate={isHovered ? { x: 10 } : { x: 0 }}
        >
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </motion.div> */}
      </div>
    </motion.div>
  )
}

const ConnectingLines = () => {
  const lineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(lineRef, { once: true })

  return (
    <div ref={lineRef} className="relative mb-20">
      <svg className="w-full h-32" viewBox="0 0 800 128">
        <motion.path
          d="M 50 64 Q 200 20 400 64 T 750 64"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Pulsing dots */}
        {[150, 400, 650].map((x, index) => (
          <motion.circle
            key={index}
            cx={x}
            cy="64"
            r="4"
            fill="#10b981"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { 
              scale: [0, 1.2, 1], 
              opacity: [0, 1, 0.8] 
            } : { scale: 0, opacity: 0 }}
            transition={{ 
              duration: 1, 
              delay: index * 0.3 + 1,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </svg>
    </div>
  )
}

const TechnologyShowcase = () => {
  const technologies = [
    { name: 'Ethereum', icon: Code, description: 'Smart contract platform' },
    { name: 'Solana', icon: Zap, description: 'High-performance blockchain' },
    { name: 'IPFS', icon: Layers, description: 'Decentralized storage' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-3 gap-8"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm"
        >
          <tech.icon className="w-12 h-12 text-accent mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">{tech.name}</h4>
          <p className="text-slate-400 text-sm">{tech.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default BlockchainExpertise