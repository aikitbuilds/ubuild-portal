"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface BuildProgressWidgetProps {
    completedTasks: number;
    totalTasks: number;
}

export function BuildProgressWidget({ completedTasks, totalTasks }: BuildProgressWidgetProps) {
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg flex justify-between items-center">
                    <span>Build Progress</span>
                    <Badge variant="outline" className="text-primary border-primary">
                        {completedTasks} / {totalTasks} Tasks
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <Progress value={progress} className="h-3 bg-muted" />
                    <p className="text-sm text-muted-foreground text-right">{Math.round(progress)}% Complete</p>
                </div>
            </CardContent>
        </Card>
    );
}
