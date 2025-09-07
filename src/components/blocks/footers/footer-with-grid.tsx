"use client";

import { cn, isValidEmail } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Mail, Linkedin, Twitter, Github, Shield, Award, CheckCircle } from "lucide-react";
import { subscribeUser } from "@/lib/subscribe";

export function FooterWithGrid() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !isValidEmail(email)) {
      setStatus("Please enter a valid email address.");
      setTimeout(() => setStatus(null), 4000);
      return;
    }

    setLoading(true);
    const res = await subscribeUser(email);
    setStatus(res.message);
    setLoading(false);

    if (res.success) setEmail("");
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        {/* Company Info Section */}
        <div className="border-b border-slate-700 pb-12 mb-12">
          <div className="max-w-2xl">
            <LogoFooter className="justify-start" />
            <p className="mb-6 text-base text-slate-300 leading-relaxed">
              Leading enterprise technology solutions provider specializing in AI, blockchain, and digital transformation. 
              We help Fortune 500 companies modernize their operations with cutting-edge technology and strategic consulting.
            </p>
            
            {/* Certifications and Compliance */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Award className="h-4 w-4 text-emerald-400" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>GDPR Compliant</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* TODO: Add newsletter signup */}
            {/* <div className="max-w-md">
              <h4 className="text-sm font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button 
                  onClick={handleSubscribe}
                  disabled={loading}
                  className={cn(
                    "px-4 py-2 text-white text-sm font-medium rounded-md transition-colors",
                    loading ? "bg-emerald-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
                  )}
                >
                  {loading ? "Sending..." : "Subscribe"}
                </button>
              </div>
              {status && <p className="mt-2 text-sm text-emerald-400">{status}</p>}
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Cognito Innovations. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SERVICES = [
  { title: "AI Solutions", href: "/services/ai-solutions" },
  { title: "Blockchain Development", href: "/services/blockchain" },
  { title: "Technical Consulting", href: "/services/consulting" },
  { title: "Cloud Migration", href: "/services/cloud-migration" },
  { title: "DevOps & Automation", href: "/services/devops" },
];

const PRODUCTS = [
  { title: "ReezoAI", href: "/products/reezo-ai" },
  { title: "Solstrom", href: "/products/solstrom" },
  { title: "PayLLM", href: "/products/pay-llm" },
  { title: "Enterprise Suite", href: "/products/enterprise-suite" },
];

const INDUSTRIES = [
  { title: "Finance", href: "/industries/finance" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "Retail", href: "/industries/retail" },
  { title: "Manufacturing", href: "/industries/manufacturing" },
  { title: "Technology", href: "/industries/technology" },
];

const COMPANY = [
  { title: "About", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Contact", href: "/contact" },
  { title: "Partners", href: "/partners" },
  { title: "News", href: "/news" },
];

const LogoFooter = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-shrink-0 items-center justify-start space-x-3 py-6 text-center text-2xl font-bold text-white",
        className
      )}
    >
      <Logo />
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-white">Cognito Innovations</span>
        <div className="rounded-full border border-emerald-600 bg-emerald-600/10 px-2 py-0.5 text-xs font-semibold text-emerald-400">
          Enterprise
        </div>
      </div>
    </Link>
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