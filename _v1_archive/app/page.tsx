"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { Menu, X } from "lucide-react";

// New "Ultra" Components
import { UltraHero } from "@/components/landing/UltraHero";
import { UltraProblems } from "@/components/landing/UltraProblems";
import { UltraAgents } from "@/components/landing/UltraAgents";
import { UltraCredibility } from "@/components/landing/UltraCredibility";
import { EcosystemHub } from "@/components/landing/EcosystemHub";

// Existing Components (Retained for Tech validation)
import { FieldReady } from "@/components/landing/FieldReady";
import { TechStack } from "@/components/visuals/TechStack";
import { RoiChart } from "@/components/visuals/RoiChart";
import { PipelineFlow } from "@/components/visuals/PipelineFlow";
import { PortfolioSection } from "./sections/portfolio";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <Logo size="lg" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 font-mono uppercase tracking-widest text-sm">
            <a href="#agents" className="text-white hover:text-[#E67E22] transition-colors font-semibold drop-shadow-md">The Crew</a>
            <a href="#process" className="text-white hover:text-[#E67E22] transition-colors font-semibold drop-shadow-md">The Route</a>
            <a href="#tech" className="text-white hover:text-[#E67E22] transition-colors font-semibold drop-shadow-md">Tech</a>
            <Link href="/login">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold backdrop-blur-sm">
                Basecamp (Login)
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" className="bg-[#E67E22] hover:bg-[#D35400] text-white font-bold border-0 shadow-lg hover:shadow-[#E67E22]/50">
                Start Trial
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-800 bg-[#0a0a0a]/95 backdrop-blur-xl font-mono">
            <nav className="flex flex-col gap-6 px-4 text-center">
              <a href="#agents" className="text-lg text-white font-bold hover:text-[#E67E22]" onClick={() => setIsMobileMenuOpen(false)}>THE CREW</a>
              <a href="#process" className="text-lg text-white font-bold hover:text-[#E67E22]" onClick={() => setIsMobileMenuOpen(false)}>THE ROUTE</a>
              <a href="#tech" className="text-lg text-white font-bold hover:text-[#E67E22]" onClick={() => setIsMobileMenuOpen(false)}>TECH</a>
              <Link href="/login">
                <Button className="w-full bg-white/10 text-white border border-white/10 h-12 text-lg">Basecamp (Login)</Button>
              </Link>
              <Link href="/login">
                <Button className="w-full bg-[#E67E22] text-white hover:bg-[#D35400] border-0 h-12 text-lg font-bold">Start Trial</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Main Landing Page
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#E67E22]/30 font-sans">
      <StickyNav />

      <main>
        {/* PHASE 1: Hero */}
        <UltraHero />

        {/* PHASE 2: Problems */}
        <UltraProblems />

        {/* PHASE 3: Agents (Solution) */}
        <UltraAgents />

        {/* PHASE 4: Credibility */}
        <UltraCredibility />

        {/* PHASE 1.5: Ecosystem Hub */}
        <EcosystemHub />

        {/* Process Flow */}
        <section id="process" className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden">
          {/* Background Image for Section */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/finish_line_ultra.png"
              alt="Finish Line"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                From Idea to the <span className="text-[#E67E22]">Finish Line</span>
              </h2>
              <p className="font-mono text-gray-400 max-w-2xl mx-auto text-lg">
                Our 5-stage automated pipeline takes you from route planning to the podium without hitting the wall.
              </p>
            </div>
            <PipelineFlow />
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="w-full py-20 bg-[#0D1217] border-y border-white/5">
          <TechStack />
        </section>

        {/* Field Ready / Showcase */}
        <FieldReady />

        <PortfolioSection />

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-montserrat text-3xl font-bold text-white uppercase">Projected ROI</h2>
            </div>
            <RoiChart />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0a0a0a] py-12 border-t border-white/10 font-mono text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="text-gray-500 ml-4">© 2026 uBuild Agency</span>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-[#E67E22] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#E67E22] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#E67E22] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
