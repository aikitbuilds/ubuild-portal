"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AgencyStatusCenterProps {
  currentStage: number;
  isLoading?: boolean;
  statusMessage?: string;
}

const STAGES = [
  { id: 1, name: "Intake", label: "Intake & Research" },
  { id: 2, name: "Architecture", label: "Agency Architecture" },
  { id: 3, name: "Build", label: "Construction" },
  { id: 4, name: "Optimize", label: "Optimization" },
  { id: 5, name: "Handoff", label: "Handoff" },
];

export function AgencyStatusCenter({
  currentStage = 1,
  isLoading = false,
  statusMessage
}: AgencyStatusCenterProps) {
  // Calculate progress percentage (each stage is 20%)
  const progress = Math.min(currentStage * 20, 100);
  const currentStageInfo = STAGES.find(s => s.id === currentStage) || STAGES[0];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Agency Build Status</CardTitle>
        <Badge
          variant={isLoading ? "default" : "outline"}
          className={`text-sm ${isLoading ? 'animate-pulse' : ''}`}
        >
          {isLoading ? "Agent Active" : `Stage ${currentStage}: ${currentStageInfo.label}`}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {statusMessage && (
            <p className="text-sm text-muted-foreground italic mb-3">
              {statusMessage}
            </p>
          )}
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="w-full h-2" />
          <div className="grid grid-cols-5 text-xs text-center mt-2 text-muted-foreground">
            {STAGES.map((stage) => (
              <div
                key={stage.id}
                className={`${stage.id <= currentStage
                    ? "font-medium text-foreground"
                    : "opacity-50"
                  } ${stage.id === currentStage && isLoading ? "animate-pulse" : ""}`}
              >
                {stage.name}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
