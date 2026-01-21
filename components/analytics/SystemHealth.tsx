"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface IssueSeverity {
    severity: string;
    count: number;
    fill: string;
    [key: string]: string | number;
}

interface SystemHealthProps {
    data: IssueSeverity[];
    healthPercent: number;
}

export function SystemHealth({ data, healthPercent }: SystemHealthProps) {
    const total = data.reduce((sum, d) => sum + d.count, 0);

    return (
        <Card className="lg:col-span-1">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">System Health</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative h-[200px] w-full min-w-0">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="count"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--card))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '6px',
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{healthPercent}%</p>
                            <p className="text-xs text-muted-foreground">Healthy</p>
                        </div>
                    </div>
                </div>
                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                    {data.map((item) => (
                        <div key={item.severity} className="flex items-center gap-2 text-xs">
                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                            <span className="text-muted-foreground">{item.severity}: {item.count}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
