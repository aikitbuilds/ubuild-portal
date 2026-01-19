"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SalesAssistant } from "@/components/agency/SalesAssistant";
import { PortfolioSection } from "./sections/portfolio";
import { Logo, LogoAnimated } from "@/components/brand/Logo";
import { VideoShowcase } from "@/components/landing/VideoShowcase";
import { TechStack } from "@/components/visuals/TechStack";
import { RoiChart } from "@/components/visuals/RoiChart";
import { ComplexityMap } from "@/components/visuals/ComplexityMap";
import { AgentSwarm } from "@/components/visuals/AgentSwarm";
import { PipelineFlow } from "@/components/visuals/PipelineFlow";
import {
  ArrowRight,
  Bot,
  Cpu,
  Layers,
  Rocket,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Play,
  Mail,
  Star,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

// Scroll Progress Bar Component
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setProgress((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Sticky Navigation
function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Logo size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#portfolio" className="text-sm text-slate-300 hover:text-white transition-colors">Results</a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-slate-300 hover:text-white transition-colors">FAQ</a>
            <Link href="/dashboard">
              <Button size="sm">Start Free Trial</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm text-slate-300 hover:text-white">Features</a>
              <a href="#portfolio" className="text-sm text-slate-300 hover:text-white">Results</a>
              <a href="#pricing" className="text-sm text-slate-300 hover:text-white">Pricing</a>
              <Link href="/dashboard">
                <Button className="w-full">Start Free Trial</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section - Human-Centered Design Pattern
function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-16">
      {/* Background: Human-focused imagery placeholder with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* In production: Replace with actual human photography */}
        {/* <Image src="/images/hero-team.jpg" alt="Team using uBuild" fill className="object-cover opacity-40" priority /> */}

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left: Glass Card with Text Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl p-8 md:p-10">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                The Future of Sales is Here
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Personal AI Sales Army
                <br />
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Working 24/7
                </span>
              </h1>

              <p className="text-lg text-slate-100 mb-8">
                Tired of juggling multiple tools and hiring expensive team members? Meet uBuild—6 AI agents that handle your entire sales operation automatically. No coding required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-primary to-cyan-500 hover:shadow-lg hover:shadow-primary/30 transition-all">
                    Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-slate-600 text-white hover:bg-slate-800">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo (2 min)
                </Button>
              </div>

              {/* Agent Pills */}
              <div className="flex flex-wrap gap-2">
                {['24/7 Sales Chat', 'Lead Scoring', 'Content Gen', 'Email Pro', 'Intelligence', 'Sales Coach'].map((agent, i) => (
                  <Badge key={i} variant="secondary" className="px-3 py-1.5 bg-slate-800/50 border-slate-700 text-slate-200 text-xs">
                    ✓ {agent}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats + Visual Space (for future human imagery) */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            {/* Hero Stats - Glass Card */}
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 w-full max-w-sm">
              <p className="text-sm text-slate-400 mb-4 font-medium">Proven Results</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">10x</div>
                  <div className="text-xs text-slate-400">More Leads</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">90%</div>
                  <div className="text-xs text-slate-400">Less Work</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">$0</div>
                  <div className="text-xs text-slate-400">Setup</div>
                </div>
              </div>
            </div>

            {/* Placeholder for human imagery - add your photo here */}
            <div className="mt-8 text-center text-slate-500 text-sm hidden lg:block">
              {/* Replace this with an actual human photo */}
              {/* <Image src="/images/founder.jpg" alt="Founder" width={300} height={400} className="rounded-xl" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  const problems = [
    { title: 'Hours Lost to Manual Work', description: 'Your team spends countless hours responding to emails, qualifying leads, and managing customer interactions.', icon: '⏱️' },
    { title: 'Expensive Hiring', description: 'Hiring salespeople, content creators, and support staff is expensive—often $40-100k+ per employee.', icon: '💸' },
    { title: 'Inconsistent Quality', description: 'Different team members = inconsistent messaging, missed follow-ups, and lost opportunities.', icon: '⚠️' },
  ];

  return (
    <section className="w-full bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Pain You're Experiencing</h2>
          <p className="text-lg text-slate-300">Sound familiar? You're not alone.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-red-500/30 transition-colors">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-300">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solution Section (6 Agents)
function SolutionSection() {
  const solutions = [
    { agent: 'Sales Agent', what: 'Answers customer questions 24/7', impact: '3-5x more conversations' },
    { agent: 'Lead Qualification', what: 'Automatically scores and ranks leads', impact: '50% faster sales cycles' },
    { agent: 'Content Agent', what: 'Creates 15-20 variations from 1 piece', impact: '10x more content' },
    { agent: 'Email Agent', what: 'Prioritizes inbox, drafts smart responses', impact: '5 hours saved/week' },
    { agent: 'Intelligence Agent', what: 'Monitors account health, predicts churn', impact: '35% better retention' },
    { agent: 'Sales Coach', what: 'Practice sales scenarios with AI', impact: '20% higher win rates' },
  ];

  return (
    <section id="features" className="w-full bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <CheckCircle className="w-4 h-4 mr-2" /> Meet Your New Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">6 AI Agents. One Unified System.</h2>
          <p className="text-lg text-slate-300">Each agent specializes in one critical function.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/10">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{solution.agent}</Badge>
              <h3 className="text-lg font-bold text-white mb-3">{solution.what}</h3>
              <p className="text-sm text-primary font-semibold">Result: {solution.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works (5 Stages)
function HowItWorksSection() {
  const stages = [
    { stage: 1, title: 'Deep Research', description: 'AI analyzes your market and competitors' },
    { stage: 2, title: 'Smart Architecture', description: 'AI designs your custom sales engine' },
    { stage: 3, title: 'Agent Deployment', description: '6 agents launch and integrate with CRM' },
    { stage: 4, title: 'Optimization', description: 'AI learns and improves automatically' },
    { stage: 5, title: 'Live Deployment', description: 'Your AI team starts generating revenue' },
  ];

  return (
    <section className="w-full bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The uBuild 5-Stage Process</h2>
          <p className="text-lg text-slate-300">From idea to revenue-generating AI team in 4 weeks.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          {stages.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                {item.stage}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    { name: 'Starter', price: '$1,997', features: ['2 AI Agents', 'Up to 500 leads/month', 'Basic integrations', 'Email support'], popular: false },
    { name: 'Professional', price: '$4,997', features: ['All 6 AI Agents', 'Up to 5,000 leads/month', 'All integrations', 'Priority support', 'Custom dashboards'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited leads', 'White-label options', 'Dedicated account manager', '24/7 phone support', 'SLA guarantee'], popular: false },
  ];

  return (
    <section id="pricing" className="w-full bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-300">No hidden fees. No long contracts. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-xl border p-8 transition-all ${plan.popular
              ? 'bg-gradient-to-br from-primary/20 to-cyan-900/20 border-primary shadow-2xl shadow-primary/20 md:scale-105'
              : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}>
              {plan.popular && <Badge className="mb-4 bg-primary/20 text-primary border-primary">MOST POPULAR</Badge>}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">/month</span>
              </div>
              <Button className={`w-full mb-8 ${plan.popular ? 'bg-white text-primary hover:bg-slate-100' : ''}`}>
                Start Trial →
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const faqs = [
    { question: 'Do I need to know how to code?', answer: 'Not at all! uBuild is designed for non-technical users. You just connect your CRM and email, and the AI handles everything else.' },
    { question: 'How long does deployment take?', answer: 'Full deployment takes 4 weeks. Week 1 is research, weeks 2-3 are configuration, and week 4 is launch.' },
    { question: 'Can I integrate with my existing CRM?', answer: 'Yes! We support Salesforce, HubSpot, Pipedrive, and more. Custom integrations available.' },
    { question: 'Is there a free trial?', answer: 'Yes! You get 14 days free to test all 6 agents with your real data. No credit card required.' },
  ];

  return (
    <section id="faq" className="w-full bg-slate-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-800 hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-left font-semibold text-white">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary transform transition-transform ${expandedIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {expandedIndex === i && (
                <div className="px-6 py-4 bg-slate-900 border-t border-slate-700">
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold text-white">uBuild Agency</span>
          </div>
          <p className="text-sm text-slate-400">© 2026 uBuild Agency. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-slate-400 hover:text-white">Terms</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ScrollProgress />
      <StickyNav />
      <SalesAssistant />

      <HeroSection />

      {/* Video Showcase - After Hero */}
      <section className="w-full bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoShowcase />
        </div>
      </section>

      {/* Agent Swarm Visual - The Orchestrator Brain */}
      <section className="w-full bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your AI Agent Swarm
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              6 specialized agents coordinated by a central Orchestrator, working in parallel 24/7
            </p>
          </div>
          <AgentSwarm />
        </div>
      </section>

      <ProblemSection />

      {/* Complexity Map - After Problem */}
      <section className="w-full bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Traditional vs. uBuild
            </h2>
            <p className="text-slate-400">See the difference in development approach</p>
          </div>
          <ComplexityMap />
        </div>
      </section>

      <SolutionSection />
      <HowItWorksSection />

      {/* Pipeline Flow Visual - The 5-Stage Process */}
      <section className="w-full bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Automated Pipeline
            </h2>
            <p className="text-slate-400">From idea to production in 5 structured stages</p>
          </div>
          <PipelineFlow />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="w-full bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Modern Tech
            </h2>
            <p className="text-slate-400">Enterprise-grade stack, no compromise</p>
          </div>
          <TechStack />
        </div>
      </section>

      <PortfolioSection />

      {/* ROI Chart Section */}
      <section className="w-full bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiChart />
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

