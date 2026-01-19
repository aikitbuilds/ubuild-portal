"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface RoiChartProps {
    className?: string;
    showCard?: boolean;
}

const roiData = [
    {
        metric: "Lead Response",
        before: 24,
        after: 0.03, // 2 minutes = 0.03 hours
        beforeLabel: "24 hours",
        afterLabel: "2 minutes",
        improvement: "99.8%",
        unit: "hours",
    },
    {
        metric: "Content Output",
        before: 12,
        after: 180,
        beforeLabel: "12 pieces",
        afterLabel: "180 pieces",
        improvement: "1400%",
        unit: "pieces/month",
    },
    {
        metric: "Sales Team Size",
        before: 6,
        after: 1.5,
        beforeLabel: "5-8 people",
        afterLabel: "1-2 people",
        improvement: "75%",
        unit: "people",
    },
    {
        metric: "Sales Cycle",
        before: 52,
        after: 17,
        beforeLabel: "45-60 days",
        afterLabel: "15-20 days",
        improvement: "65%",
        unit: "days",
    },
];

// Transform data for comparative bar chart
const chartData = roiData.map((item) => ({
    name: item.metric,
    before: item.metric === "Content Output" ? item.before : item.before,
    after: item.metric === "Content Output" ? item.after : item.after,
    beforeLabel: item.beforeLabel,
    afterLabel: item.afterLabel,
    improvement: item.improvement,
}));

export function RoiChart({ className, showCard = true }: RoiChartProps) {
    const content = (
        <div className="space-y-8">
            {/* Before/After Comparison Cards */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                    },
                }}
            >
                {roiData.map((item, index) => (
                    <motion.div
                        key={item.metric}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="p-4 rounded-lg bg-slate-800 border border-slate-700"
                    >
                        <p className="text-xs text-slate-400 mb-2">{item.metric}</p>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-500">Before:</span>
                                <span className="text-sm text-red-400 line-through">{item.beforeLabel}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-500">After:</span>
                                <span className="text-sm text-emerald-400 font-semibold">{item.afterLabel}</span>
                            </div>
                        </div>
                        <Badge
                            variant="outline"
                            className="mt-2 w-full justify-center bg-primary/10 text-primary border-primary/30 text-xs"
                        >
                            ↑ {item.improvement}
                        </Badge>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bar Chart Visualization */}
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
                    >
                        <XAxis type="number" hide />
                        <YAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            width={80}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#0f172a',
                                border: '1px solid #334155',
                                borderRadius: '8px',
                            }}
                            formatter={(value, name, props) => {
                                const label = name === 'before'
                                    ? props.payload.beforeLabel
                                    : props.payload.afterLabel;
                                return [label, name === 'before' ? 'Before' : 'After'];
                            }}
                        />
                        <Bar
                            dataKey="before"
                            fill="#ef4444"
                            radius={[0, 4, 4, 0]}
                            barSize={20}
                        />
                        <Bar
                            dataKey="after"
                            fill="#14b8a6"
                            radius={[0, 4, 4, 0]}
                            barSize={20}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-500/60" />
                    <span className="text-slate-400">Before uBuild</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-primary" />
                    <span className="text-slate-400">After uBuild</span>
                </div>
            </div>
        </div>
    );

    if (!showCard) return <div className={className}>{content}</div>;

    return (
        <Card className={`bg-slate-900 border-slate-700 ${className || ""}`}>
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        ROI Comparison
                    </CardTitle>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
                        Verified Results
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                {content}
            </CardContent>
        </Card>
    );
}
