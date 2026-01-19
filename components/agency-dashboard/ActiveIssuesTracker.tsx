"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, Wrench } from "lucide-react";
import type { Issue } from "@/lib/firebase/schema";

interface ActiveIssuesTrackerProps {
    issues: Issue[];
    onAutoFix: (issueId: string, description: string) => void;
    isFixing?: string | null; // ID of issue currently being fixed
}

export function ActiveIssuesTracker({ issues, onAutoFix, isFixing }: ActiveIssuesTrackerProps) {
    return (
        <Card className="h-full border-r-4 border-r-destructive/50 shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    Active Issues
                    <Badge variant="secondary" className="ml-auto">
                        {issues.length} Open
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {issues.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[200px] text-muted-foreground text-sm">
                        <CheckCircle2 className="h-8 w-8 mb-2 text-primary opacity-50" />
                        <p>All systems operational</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {issues.map((issue) => (
                            <div
                                key={issue.id}
                                className="p-3 border rounded-md bg-card hover:bg-slate-50 transition-colors space-y-2 group"
                            >
                                <div className="flex justify-between items-start gap-2">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <Badge variant={issue.severity === 'critical' ? 'destructive' : 'outline'} className="text-[10px] h-5 px-1.5 uppercase">
                                                {issue.severity}
                                            </Badge>
                                            <span className="font-medium text-sm line-clamp-1">{issue.description}</span>
                                        </div>
                                        {issue.suggestedFix && (
                                            <div className="text-xs bg-slate-100 p-2 rounded border-l-2 border-primary mt-2 font-mono text-slate-700">
                                                Attempting Fix: {issue.suggestedFix.substring(0, 60)}...
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end pt-2">
                                    <Button
                                        size="sm"
                                        variant="default"
                                        className="h-7 text-xs gap-1.5"
                                        onClick={() => onAutoFix(issue.id, issue.description)}
                                        disabled={isFixing === issue.id || !!issue.suggestedFix}
                                    >
                                        {isFixing === issue.id ? (
                                            <><span className="animate-spin">⏳</span> Analyzing...</>
                                        ) : issue.suggestedFix ? (
                                            <><CheckCircle2 className="h-3 w-3" /> Fix Deployed</>
                                        ) : (
                                            <><Wrench className="h-3 w-3" /> Auto-Fix</>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
