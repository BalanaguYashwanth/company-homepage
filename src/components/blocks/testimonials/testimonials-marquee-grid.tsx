"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function TestimonialsMarqueeGrid() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 overflow-hidden h-full bg-white rounded-2xl">
      <div className="pb-20">
        <h1 className="pt-4 font-bold text-primary text-lg md:text-2xl">
          Trusted by Enterprise Leaders
        </h1>
        <p className="text-base mt-4 text-muted-foreground">
          CTOs and technical leaders share how our platform transforms their organizations through AI innovation and blockchain excellence.
        </p>
      </div>

      <div className="relative">
        <div className="h-full overflow-hidden w-full bg-slate-50">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-slate-50 to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]">
      <Marquee direction="right" pauseOnHover speed={50}>
        {first.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="flex gap-3 items-center mt-8">
              <div className="relative">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-accent/20"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <QuoteDescription className="text-primary font-semibold">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-muted-foreground font-medium">
                  {testimonial.designation}
                </QuoteDescription>
                {testimonial.company && (
                  <QuoteDescription className="text-accent text-xs mt-1">
                    {testimonial.company}
                  </QuoteDescription>
                )}
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
      <Marquee className="mt-10" direction="left" pauseOnHover speed={70}>
        {second.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="flex gap-3 items-center mt-8">
              <div className="relative">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-accent/20"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <QuoteDescription className="text-primary font-semibold">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-muted-foreground font-medium">
                  {testimonial.designation}
                </QuoteDescription>
                {testimonial.company && (
                  <QuoteDescription className="text-accent text-xs mt-1">
                    {testimonial.company}
                  </QuoteDescription>
                )}
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-6 md:p-8 rounded-xl min-h-[280px] h-full max-w-md md:max-w-lg mx-4 bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-accent/30",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-sm md:text-base font-medium text-primary leading-relaxed",
        className
      )}
    >
      &ldquo;{children}&rdquo;
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs md:text-sm font-normal max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    quote:
      "The AI transformation platform exceeded our expectations. We achieved 40% faster deployment cycles and reduced operational costs by $2.3M annually. The technical excellence is unmatched.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Chief Technology Officer",
    company: "Fortune 500 Finance Company",
  },
  {
    name: "Marcus Rodriguez",
    quote:
      "Our blockchain implementation with this platform was seamless. We migrated our entire supply chain infrastructure with zero downtime and improved transparency by 95%.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Head of Innovation",
    company: "Global Retailer",
  },
  {
    name: "Jennifer Walsh",
    quote:
      "The AI-driven analytics have revolutionized our decision-making process. We're processing 10x more data with 70% improved accuracy in fraud detection.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "VP of Engineering",
    company: "Fintech Unicorn",
  },
  {
    name: "David Kim",
    quote:
      "Implementation was flawless. The platform integrated with our legacy systems without disruption and delivered ROI within 6 months. Exceptional technical support throughout.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Chief Digital Officer",
    company: "Healthcare Enterprise",
  },
  {
    name: "Rachel Thompson",
    quote:
      "Our blockchain smart contracts deployment reduced processing time from days to minutes. The platform's scalability handles our 50M+ daily transactions effortlessly.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Head of Blockchain",
    company: "Insurance Leader",
  },
  {
    name: "Alex Patel",
    quote:
      "The AI orchestration capabilities are game-changing. We've automated 80% of our infrastructure management and achieved 99.9% uptime across all services.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Technical Director",
    company: "Cloud Infrastructure Firm",
  },
  {
    name: "Lisa Chang",
    quote:
      "Security and compliance features are enterprise-grade. We passed SOC 2 certification seamlessly and enhanced our data protection by 300%.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "CISO",
    company: "Government Contractor",
  },
  {
    name: "Michael Foster",
    quote:
      "The platform's machine learning models helped us identify new revenue streams worth $15M. Performance optimization reduced server costs by 45%.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Head of Data Science",
    company: "E-commerce Giant",
  },
  {
    name: "Amanda Zhou",
    quote:
      "Blockchain immutability features transformed our audit processes. Compliance reporting that took weeks now happens in real-time with complete transparency.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Chief Compliance Officer",
    company: "Banking Institution",
  },
  {
    name: "Robert Singh",
    quote:
      "The AI-powered DevOps integration reduced deployment failures by 90%. Our team productivity increased dramatically with intelligent monitoring and alerts.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "VP of Platform Engineering",
    company: "SaaS Leader",
  },
  {
    name: "Emily Carter",
    quote:
      "Cross-border payments using their blockchain solution cut transaction times from 3 days to 3 minutes. Customer satisfaction scores increased by 85%.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Head of Payments",
    company: "Digital Bank",
  },
  {
    name: "James Liu",
    quote:
      "The AI model training platform accelerated our research by 6 months. Edge deployment capabilities enabled real-time processing for IoT devices worldwide.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Chief AI Officer",
    company: "Manufacturing Corporation",
  },
];