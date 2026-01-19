"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

interface PipelineData {
    stage: string;
    count: number;
    fill: string;
}

interface PipelineOverviewProps {
    data: PipelineData[];
    totalMRR: number;
    activeBuilds: number;
    criticalIssues: number;
}

export function PipelineOverview({ data, totalMRR, activeBuilds, criticalIssues }: PipelineOverviewProps) {
    return (
        <Card className="col-span-full">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Pipeline Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* KPI Cards */}
                    <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted/50 border">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Total MRR</p>
                            <p className="text-2xl font-bold text-primary">${totalMRR.toLocaleString()}</p>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50 border">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Active Builds</p>
                            <p className="text-2xl font-bold">{activeBuilds}</p>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50 border">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Critical Issues</p>
                            <p className="text-2xl font-bold text-destructive">{criticalIssues}</p>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="lg:col-span-3 h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
                                <XAxis type="number" hide />
                                <YAxis
                                    dataKey="stage"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                                    width={90}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--card))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '6px',
                                    }}
                                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                                />
                                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={24}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
