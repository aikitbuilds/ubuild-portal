import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/data/blog-content";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "uBuild Blog | AI Insights for Everyone",
    description: "Simple, practical guides on using Artificial Intelligence to build your future. No tech jargon, just results.",
};

export default function BlogIndexPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Human Centered Design: Face + Overlay */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                    alt="Team working together on AI"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-950/70" /> {/* Dark Overlay */}

                <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6">
                    <Badge variant="outline" className="border-teal-400 text-teal-400 px-4 py-1 text-sm uppercase tracking-widest">
                        The Knowledge Base
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
                        Democratizing AI for <span className="text-teal-400">Everyone</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                        You don't need a PhD to use the world's most powerful tools. We break down Artificial Intelligence into simple, actionable guides.
                    </p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                            <Card className="h-full border-slate-800 bg-slate-900/50 overflow-hidden hover:border-teal-500/50 transition-all hover:shadow-2xl hover:shadow-teal-900/20">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardHeader className="space-y-4">
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs bg-slate-800 text-teal-400">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="line-clamp-2 text-xl group-hover:text-teal-400 transition-colors">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-400 line-clamp-3 text-sm">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex justify-between text-xs text-slate-500 border-t border-slate-800/50 pt-4 mt-auto">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {format(new Date(post.date), "MMM d, yyyy")}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-teal-500" />
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
