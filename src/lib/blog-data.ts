export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  fullContent?: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Enterprise AI: Transforming Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing enterprise operations, from automated workflows to intelligent decision-making systems that drive competitive advantage.",
    content: "Artificial intelligence is no longer a futuristic concept—it's a present-day reality transforming how enterprises operate. From predictive analytics to natural language processing, AI technologies are enabling businesses to automate complex processes, gain deeper insights from data, and deliver personalized customer experiences at scale.",
    author: "Sarah Chen",
    authorRole: "AI Solutions Architect",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&q=80",
    slug: "future-of-enterprise-ai",
    tags: ["AI", "Enterprise", "Technology"],
  },
  {
    id: "2",
    title: "Blockchain Beyond Cryptocurrency: Enterprise Applications",
    excerpt: "Explore how blockchain technology is being leveraged beyond digital currencies to create transparent, secure, and efficient enterprise solutions across various industries.",
    content: "While blockchain technology gained initial fame through cryptocurrencies, its potential extends far beyond digital assets. Enterprise blockchain solutions are creating unprecedented levels of transparency, security, and efficiency in supply chain management, financial services, healthcare, and more.",
    author: "Michael Rodriguez",
    authorRole: "Blockchain Technology Lead",
    date: "2024-01-10",
    readTime: "10 min",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&q=80",
    slug: "blockchain-enterprise-applications",
    tags: ["Blockchain", "Enterprise", "Innovation"],
  },
  {
    id: "3",
    title: "Digital Transformation: A Strategic Guide for Fortune 500 Companies",
    excerpt: "Learn how leading enterprises are navigating digital transformation challenges and implementing technology strategies that drive sustainable growth and innovation.",
    content: "Digital transformation is not just about adopting new technologies—it's about fundamentally reimagining how businesses operate, deliver value, and engage with customers. For Fortune 500 companies, this journey requires strategic vision, cultural change, and the right technology partnerships.",
    author: "Emily Watson",
    authorRole: "Digital Strategy Director",
    date: "2024-01-05",
    readTime: "12 min",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
    slug: "digital-transformation-guide",
    tags: ["Digital Transformation", "Strategy", "Enterprise"],
  },
  {
    id: "4",
    title: "Machine Learning in Production: Best Practices and Challenges",
    excerpt: "Dive into the practical aspects of deploying machine learning models in production environments, including scalability, monitoring, and maintaining model performance.",
    content: "Moving machine learning models from development to production presents unique challenges. This article explores best practices for model deployment, monitoring, versioning, and maintaining performance at scale in enterprise environments.",
    author: "David Kim",
    authorRole: "ML Engineering Lead",
    date: "2023-12-28",
    readTime: "9 min",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop&q=80",
    slug: "machine-learning-production",
    tags: ["Machine Learning", "AI", "Engineering"],
  },
  {
    id: "5",
    title: "Smart Contracts: Revolutionizing Business Agreements",
    excerpt: "Understand how smart contracts are automating business processes, reducing costs, and eliminating intermediaries in various industries from finance to real estate.",
    content: "Smart contracts represent a paradigm shift in how business agreements are executed. These self-executing contracts with terms directly written into code are revolutionizing industries by automating processes, reducing costs, and increasing trust through transparency.",
    author: "Michael Rodriguez",
    authorRole: "Blockchain Technology Lead",
    date: "2023-12-20",
    readTime: "7 min",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a59?w=1200&h=600&fit=crop&q=80",
    slug: "smart-contracts-revolution",
    tags: ["Blockchain", "Smart Contracts", "Automation"],
  },
  {
    id: "6",
    title: "AI-Powered Analytics: Unlocking Business Intelligence",
    excerpt: "Discover how AI-powered analytics platforms are helping enterprises extract actionable insights from vast amounts of data, enabling data-driven decision making.",
    content: "In today's data-driven world, enterprises generate massive amounts of information daily. AI-powered analytics platforms are transforming this data into actionable insights, enabling businesses to make faster, more informed decisions and identify opportunities that were previously invisible.",
    author: "Sarah Chen",
    authorRole: "AI Solutions Architect",
    date: "2023-12-15",
    readTime: "6 min",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
    slug: "ai-powered-analytics",
    tags: ["AI", "Analytics", "Business Intelligence"],
  },
];

