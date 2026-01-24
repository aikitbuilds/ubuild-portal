"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { MOCK_STATIONS, Assignment } from "@/lib/tejas/data";

interface StationHealthChartProps {
    assignments: Assignment[];
}

export function StationHealthChart({ assignments }: StationHealthChartProps) {
    const data = React.useMemo(() => {
        // Mock targets for demo
        const TARGETS: Record<string, number> = {
            "Packet Pickup": 8,
            "Dam Nation (AS1)": 5,
            "Gate (AS2)": 5,
            "Overnight Loop": 10,
            "Course Marking": 4,
            "Start/Finish": 12
        };

        return MOCK_STATIONS.map(station => {
            const actual = assignments.filter(a => a.station === station).length;
            const target = TARGETS[station] || 5;
            const percentage = (actual / target) * 100;

            return {
                name: station.split(' ')[0], // Short name
                fullName: station,
                actual,
                target,
                percentage
            };
        });
    }, [assignments]);

    return (
        <ResponsiveContainer width="100%" height={300} minWidth={0}>
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#1E1E1E' }}
                />
                <Bar dataKey="actual" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.percentage < 50 ? '#EF4444' : entry.percentage > 80 ? '#10B981' : '#EAB308'}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
