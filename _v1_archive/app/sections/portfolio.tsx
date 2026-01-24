"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, FileText, Mail, UserMinus, Timer, Target } from "lucide-react";

const portfolioData = [
    {
        metric: "Lead Response Time",
        before: "24-48 hours",
        after: "< 2 minutes",
        improvement: "99.8%",
        icon: Clock,
    },
    {
        metric: "Leads Qualified/Month",
        before: "80-120",
        after: "250-350",
        improvement: "200-300%",
        icon: Users,
    },
    {
        metric: "Sales Team Size",
        before: "5-8 people",
        after: "1-2 people",
        improvement: "75-80% reduction",
        icon: UserMinus,
    },
    {
        metric: "Content Pieces/Month",
        before: "12-20",
        after: "180-250",
        improvement: "900-1200%",
        icon: FileText,
    },
    {
        metric: "Email Processing Time",
        before: "2-3 hours/day",
        after: "15 min/day",
        improvement: "85%",
        icon: Mail,
    },
    {
        metric: "Sales Cycle Duration",
        before: "45-60 days",
        after: "15-20 days",
        improvement: "65% faster",
        icon: Timer,
    },
    {
        metric: "Win Rate",
        before: "35-45%",
        after: "55-70%",
        improvement: "+25-30%",
        icon: Target,
    },
    {
        metric: "Account Churn Rate",
        before: "6-8%",
        after: "2-3%",
        improvement: "65% reduction",
        icon: TrendingUp,
    },
];

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CEO, TechScale Inc",
        quote: "Response time went from 24 hours to instant. We closed 3 deals in the first week.",
        results: "+192% qualified leads, 60% faster sales cycle",
        industry: "B2B SaaS",
    },
    {
        name: "Marcus Johnson",
        role: "Founder, GrowthLabs",
        quote: "I went from managing a team of 5 to 1 coordinator. The AI handles everything.",
        results: "80% payroll reduction, +1400% content output",
        industry: "Digital Agency",
    },
    {
        name: "Elena Rodriguez",
        role: "VP Sales, DataFlow",
        quote: "We went from reactive to proactive. AI identified 12 churn risks we would have missed.",
        results: "74% churn reduction, 35% improvement in retention",
        industry: "Data Analytics",
    },
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="w-full py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
                        Real Results
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Before & After uBuild
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        See the transformational results our clients achieve within 30 days of deployment.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {portfolioData.map((item, index) => (
                        <Card
                            key={index}
                            className="bg-slate-800/50 border-slate-700 hover:border-primary/50 transition-all duration-300 group"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-white text-sm">{item.metric}</h3>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-400">Before:</span>
                                        <span className="text-red-400 line-through">{item.before}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-400">After:</span>
                                        <span className="text-emerald-400 font-semibold">{item.after}</span>
                                    </div>
                                    <div className="pt-2 border-t border-slate-700">
                                        <span className="text-xs text-primary font-bold">
                                            ↑ {item.improvement} Improvement
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-white mb-2">Client Success Stories</h3>
                    <p className="text-slate-400">Verified results from companies using uBuild</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-slate-800 border-slate-700 hover:border-primary/30 transition-colors"
                        >
                            <CardContent className="p-8">
                                <div className="mb-6">
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400">★</span>
                                        ))}
                                    </div>
                                    <p className="text-slate-300 italic">"{testimonial.quote}"</p>
                                </div>

                                <div className="pt-4 border-t border-slate-700">
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                    <Badge
                                        variant="secondary"
                                        className="mt-3 text-xs bg-slate-700 text-slate-300"
                                    >
                                        {testimonial.industry}
                                    </Badge>
                                </div>

                                <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                                    <p className="text-xs font-semibold text-primary">{testimonial.results}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* ROI Highlight */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-cyan-900/20 border border-primary/30">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-white">$110k+</p>
                            <p className="text-sm text-slate-300">Annual Savings</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white">221%</p>
                            <p className="text-sm text-slate-300">Average ROI (Year 1)</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white">4 weeks</p>
                            <p className="text-sm text-slate-300">Time to Value</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white">50+</p>
                            <p className="text-sm text-slate-300">Companies Deployed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
