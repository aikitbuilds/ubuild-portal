"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface VelocityDataPoint {
    date: string;
    actions: number;
}

interface VelocityChartProps {
    data: VelocityDataPoint[];
}

export function VelocityChart({ data }: VelocityChartProps) {
    return (
        <Card className="col-span-full lg:col-span-2">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Build Velocity</CardTitle>
                    <span className="text-xs text-muted-foreground">Agent Actions / Day (30d)</span>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="velocityGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(173, 80%, 40%)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="hsl(173, 80%, 40%)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                                interval="preserveStartEnd"
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--card))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '6px',
                                }}
                                labelStyle={{ color: 'hsl(var(--foreground))' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="actions"
                                stroke="hsl(173, 80%, 40%)"
                                strokeWidth={2}
                                fill="url(#velocityGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
