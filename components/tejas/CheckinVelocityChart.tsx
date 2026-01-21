"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Volunteer } from "@/lib/tejas/data";

interface CheckinVelocityChartProps {
    volunteers: Volunteer[];
}

export function CheckinVelocityChart({ volunteers }: CheckinVelocityChartProps) {
    const data = React.useMemo(() => {
        // Since we don't have real "check-in timestamps" for everyone in the mock, we stimulate it
        // Generate mock velocity for the last 4 hours
        const now = new Date();
        const currentHour = now.getHours();

        return [
            { time: `${currentHour - 4}:00`, count: 2 },
            { time: `${currentHour - 3}:00`, count: 8 },
            { time: `${currentHour - 2}:00`, count: 15 },
            { time: `${currentHour - 1}:00`, count: 24 },
            { time: `${currentHour}:00`, count: 12 },
        ];
    }, [volunteers]);

    return (
        <ResponsiveContainer width="100%" height={200} minWidth={0}>
            <LineChart data={data}>
                <XAxis
                    dataKey="time"
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
                    contentStyle={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#1E1E1E' }}
                />
                <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#E67E22"
                    strokeWidth={2}
                    dot={{ fill: '#E67E22' }}
                    activeDot={{ r: 6 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
