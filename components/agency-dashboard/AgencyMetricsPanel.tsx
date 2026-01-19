import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ShieldCheck, BarChart3 } from "lucide-react";

interface AgencyMetricsPanelProps {
    viabilityScore?: number;
    competitors?: string[];
    techStack?: string[];
}

export function AgencyMetricsPanel({
    viabilityScore,
    competitors,
    techStack
}: AgencyMetricsPanelProps) {
    const hasData = viabilityScore !== undefined;

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Code Quality</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">A+</div>
                    <p className="text-xs text-muted-foreground">Maintained via ESLint</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Market Viability</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        {hasData ? `${viabilityScore}/10` : "Pending..."}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {hasData ? "Analysis complete" : "Awaiting Stage 1"}
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Competitors</CardTitle>
                    <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    {hasData && competitors && competitors.length > 0 ? (
                        <ul className="text-sm space-y-1">
                            {competitors.slice(0, 3).map((c, i) => (
                                <li key={i} className="text-muted-foreground truncate">• {c}</li>
                            ))}
                        </ul>
                    ) : (
                        <>
                            <div className="text-2xl font-bold">--</div>
                            <p className="text-xs text-muted-foreground">Awaiting research</p>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
