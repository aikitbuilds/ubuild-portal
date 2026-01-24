"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { FileText, Loader2, RefreshCw } from "lucide-react";

interface Submission {
    id: string;
    projectId: string;
    intentType: "new" | "update" | "pivot";
    status: string;
    createdAt: string;
    aiAnalysis?: {
        objective: string;
    };
}

export function SubmissionHistory({ userId }: { userId: string }) {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSubmissions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/agency/submit?userId=${userId}`);
            if (res.ok) {
                const data = await res.json();
                setSubmissions(data.submissions || []);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchSubmissions();
        }
    }, [userId]);

    if (!userId) return null;

    return (
        <Card className="bg-slate-950/30 border-slate-800">
            <CardHeader className="border-b border-slate-800/50 pb-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="w-4 h-4 text-cyan-500" />
                        Submission History
                    </CardTitle>
                    <button
                        onClick={fetchSubmissions}
                        className="text-xs text-slate-500 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                    >
                        <RefreshCw className="w-3 h-3" /> Refresh
                    </button>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-slate-800/50">
                            <TableHead className="w-[150px]">Date</TableHead>
                            <TableHead>Intent</TableHead>
                            <TableHead>Objective</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-slate-500" />
                                </TableCell>
                            </TableRow>
                        ) : submissions.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center text-slate-500">
                                    No submissions found. Start a new project above!
                                </TableCell>
                            </TableRow>
                        ) : (
                            submissions.map((sub) => (
                                <TableRow key={sub.id} className="hover:bg-slate-900/50 border-slate-800/50">
                                    <TableCell className="text-slate-400 font-mono text-xs">
                                        {format(new Date(sub.createdAt), "MMM d, yyyy HH:mm")}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="capitalize text-xs">
                                            {sub.intentType}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="max-w-[400px] truncate text-slate-300">
                                        {sub.aiAnalysis?.objective || "No summary available"}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Badge
                                            variant="secondary"
                                            className={
                                                sub.status === 'pending' ? 'bg-amber-500/10 text-amber-500' :
                                                    sub.status === 'approved' ? 'bg-emerald-500/10 text-emerald-500' :
                                                        'bg-slate-800 text-slate-400'
                                            }
                                        >
                                            {sub.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
