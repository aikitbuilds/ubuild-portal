import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/data/blog-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronLeft, User, Share2 } from "lucide-react";
import { format } from "date-fns";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: post.seo.title,
        description: post.seo.description,
        keywords: post.seo.keywords,
        openGraph: {
            title: post.seo.title,
            description: post.seo.description,
            type: "article",
            images: [post.image],
        },
    };
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const slug = (await params).slug;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background">
            {/* Immersive Hero */}
            <section className="relative h-[50vh] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-950/80 to-slate-950/40" />

                <div className="absolute top-8 left-4 md:left-8 z-20">
                    <Link href="/blog">
                        <Button variant="ghost" className="text-white hover:text-teal-400 hover:bg-white/10 group">
                            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
                    <div className="container mx-auto max-w-4xl space-y-4">
                        <div className="flex gap-2 mb-4">
                            {post.tags.map(tag => (
                                <Badge key={tag} className="bg-teal-500/80 hover:bg-teal-500 text-white border-none">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm md:text-base pt-2">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-teal-400" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-teal-400" />
                                {format(new Date(post.date), "MMMM d, yyyy")}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-teal-400" />
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <div className="container mx-auto max-w-3xl px-6 py-16">
                <div
                    className="prose prose-invert prose-lg md:prose-xl max-w-none 
                    prose-headings:font-bold prose-headings:text-slate-100 
                    prose-p:text-slate-300 prose-p:leading-relaxed
                    prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-teal-200
                    prose-li:text-slate-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="border-t border-slate-800 mt-16 pt-8 flex justify-between items-center">
                    <div className="text-slate-500 text-sm">
                        Share this article
                    </div>
                    <div className="flex gap-2">
                        <Button size="icon" variant="outline" className="rounded-full border-slate-700 hover:bg-slate-800">
                            <Share2 className="w-4 h-4 text-teal-400" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <section className="bg-slate-900 border-y border-slate-800 py-16 mt-8">
                <div className="container mx-auto px-4 text-center space-y-6">
                    <h2 className="text-2xl font-bold">Ready to build your own idea?</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Turn your concept into a reality with uBuild's automated agency. No coding required.
                    </p>
                    <Link href="/dashboard/submission">
                        <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-600">
                            Start Building Now
                        </Button>
                    </Link>
                </div>
            </section>
        </article>
    );
}
