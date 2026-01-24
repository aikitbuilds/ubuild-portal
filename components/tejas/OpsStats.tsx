import { Card, CardContent } from "@/components/ui/card";
import { Users2, Layers, AlertCircle, CheckCircle2 } from "lucide-react";

interface OpsStatsProps {
    uniqueCount: number;
    totalShifts: number;
    conflictCount: number;
    checkedInCount: number;
}

export function OpsStats({ uniqueCount, totalShifts, conflictCount, checkedInCount }: OpsStatsProps) {
    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <Card>
                <CardContent className="p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-muted-foreground">Volunteers</p>
                        <div className="text-2xl font-bold">{uniqueCount}</div>
                    </div>
                    <Users2 className="h-4 w-4 text-slate-400" />
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-muted-foreground">Shifts Filled</p>
                        <div className="text-2xl font-bold">{totalShifts}</div>
                    </div>
                    <Layers className="h-4 w-4 text-slate-400" />
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-muted-foreground">On Site</p>
                        <div className="text-2xl font-bold text-green-600">{checkedInCount}</div>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                </CardContent>
            </Card>
            <Card className={conflictCount > 0 ? "border-red-200 bg-red-50" : ""}>
                <CardContent className="p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-muted-foreground">Conflicts</p>
                        <div className={conflictCount > 0 ? "text-2xl font-bold text-red-600" : "text-2xl font-bold"}>
                            {conflictCount}
                        </div>
                    </div>
                    <AlertCircle className={conflictCount > 0 ? "h-4 w-4 text-red-500" : "h-4 w-4 text-slate-400"} />
                </CardContent>
            </Card>
        </div>
    );
}
