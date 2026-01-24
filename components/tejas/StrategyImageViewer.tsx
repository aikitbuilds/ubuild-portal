"use client";

import React, { useState, useEffect } from "react";
import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    ZoomIn,
    ZoomOut,
    RefreshCcw,
    MessageSquare,
    Send,
    User,
    Clock,
    X,
    Maximize2
} from "lucide-react";
import {
    collection,
    addDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    Timestamp
} from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/auth/context";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Comment {
    id: string;
    imageId: string;
    user: string;
    comment: string;
    timestamp: any;
    status: string;
}

interface StrategyImageViewerProps {
    imageId: string;
    title: string;
    src: string;
    isFullPage?: boolean;
}

const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/10 z-10 w-fit">
            <Button size="icon" variant="ghost" onClick={() => zoomIn()} className="w-10 h-10 rounded-xl hover:bg-white/10 text-white">
                <ZoomIn className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => zoomOut()} className="w-10 h-10 rounded-xl hover:bg-white/10 text-white">
                <ZoomOut className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => resetTransform()} className="w-10 h-10 rounded-xl hover:bg-white/10 text-white">
                <RefreshCcw className="w-5 h-5" />
            </Button>
        </div>
    );
};

export function StrategyImageViewer({ imageId, title, src, isFullPage = false }: StrategyImageViewerProps) {
    const { user } = useAuth();
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!imageId) return;

        const q = query(
            collection(db, "strategy_feedback"),
            where("imageId", "==", imageId)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Comment[];

            // Client-side sort to avoid needing a composite index immediately
            docs.sort((a, b) => {
                const timeA = a.timestamp?.seconds || 0;
                const timeB = b.timestamp?.seconds || 0;
                return timeB - timeA;
            });

            setComments(docs);
        });

        return () => unsubscribe();
    }, [imageId]);

    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || isSubmitting) return;

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "strategy_feedback"), {
                imageId,
                user: user?.displayName || "Stakeholder",
                comment: newComment.trim(),
                timestamp: Timestamp.now(),
                status: "New"
            });
            setNewComment("");
        } catch (error) {
            console.error("Error adding comment:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const ViewerContent = (
        <div className="w-full h-full flex flex-col md:flex-row bg-[#0B1120] overflow-hidden">
            <div className="flex-1 relative bg-slate-950 flex flex-col overflow-hidden">
                <div className="flex-1 relative overflow-hidden h-full w-full">
                    <TransformWrapper
                        initialScale={1}
                        initialPositionX={0}
                        initialPositionY={0}
                        minScale={0.5}
                        maxScale={4}
                        centerOnInit
                    >
                        <Controls />
                        <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex items-center justify-center">
                            <img
                                src={src}
                                alt={title}
                                className="max-w-full max-h-full object-contain p-8 select-none"
                            />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </div>

            {/* Sidebar - Comments */}
            <div className="w-full md:w-[400px] border-l border-white/5 flex flex-col bg-[#0B1120] border-t md:border-t-0 h-[40vh] md:h-full">
                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#E67E22]/20 flex items-center justify-center border border-[#E67E22]/30">
                            <MessageSquare className="w-4 h-4 text-[#E67E22]" />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-tight text-sm">Stakeholder Feedback</h4>
                    </div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">
                        {comments.length} Threads
                    </span>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {comments.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                            <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white uppercase tracking-wide">No feedback yet</p>
                                <p className="text-[10px] text-slate-500 max-w-[200px] mx-auto mt-1">Be the first to suggest a feature.</p>
                            </div>
                        </div>
                    ) : (
                        comments.map((c) => (
                            <motion.div
                                key={c.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-md bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                            <User className="w-3 h-3 text-indigo-400" />
                                        </div>
                                        <span className="text-[10px] font-black text-white uppercase tracking-tight">{c.user}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                                        <Clock className="w-2.5 h-2.5" />
                                        {c.timestamp?.toDate ? formatDistanceToNow(c.timestamp.toDate(), { addSuffix: true }) : "just now"}
                                    </div>
                                </div>
                                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                                    {c.comment}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className={cn(
                                        "text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-widest",
                                        c.status === "Implemented" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                                            c.status === "Reviewing" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                                                "bg-[#E67E22]/20 text-[#E67E22] border border-[#E67E22]/30"
                                    )}>
                                        {c.status}
                                    </span>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>

                <div className="p-4 border-t border-white/5 bg-white/5">
                    <form onSubmit={handleSubmitComment} className="relative">
                        <Input
                            placeholder="Add strategic feedback..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full bg-slate-900/50 border-white/10 rounded-xl pl-4 pr-10 text-xs h-10 focus:ring-[#E67E22]/50 focus:border-[#E67E22]/50 transition-all font-medium"
                            disabled={isSubmitting}
                        />
                        <Button
                            type="submit"
                            size="icon"
                            className="absolute right-1 top-1 w-8 h-8 rounded-lg bg-[#E67E22] hover:bg-[#D35400] text-black shadow-lg shadow-[#E67E22]/10"
                            disabled={!newComment.trim() || isSubmitting}
                        >
                            <Send className="w-3 h-3" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );

    if (isFullPage) {
        return ViewerContent;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="relative group cursor-zoom-in rounded-2xl overflow-hidden border border-white/5 bg-slate-900 aspect-video flex items-center justify-center">
                    <img
                        src={src}
                        alt={title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                        <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center mb-3">
                            <Maximize2 className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white font-black uppercase tracking-widest text-xs">Examine Architecture</span>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="max-w-[95vw] w-[1400px] h-[90vh] p-0 bg-[#0B1120] border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl">
                <DialogHeader className="hidden">
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {ViewerContent}
            </DialogContent>
        </Dialog>
    );
}
