"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Sparkles } from "lucide-react";

export function ClientIntakeForm({ onSubmit, isLoading }: { onSubmit: (data: any) => void; isLoading: boolean }) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        onSubmit({
            projectName: formData.get("projectName"),
            vision: formData.get("vision"),
            audience: formData.get("audience"),
            techPreferences: formData.get("techPreferences"),
        });
    };

    return (
        <Card className="border-t-4 border-t-primary shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    New Project Intake
                </CardTitle>
                <CardDescription>
                    Submit a new idea to the Research Engine (Stage 1).
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="projectName">Project Name</Label>
                        <Input id="projectName" name="projectName" placeholder="e.g. uBuild Portal" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="vision">Core Vision / Problem</Label>
                        <Textarea
                            id="vision"
                            name="vision"
                            placeholder="Describe what you want to build..."
                            className="min-h-[100px]"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="audience">Target Audience</Label>
                            <Input id="audience" name="audience" placeholder="e.g. Freelancers" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="techPreferences">Tech Stack (Optional)</Label>
                            <Input id="techPreferences" name="techPreferences" placeholder="e.g. Next.js" />
                        </div>
                    </div>

                    <Separator />

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Agents Analyzing..." : <><span className="mr-2">Initiate Research</span> <ArrowRight className="h-4 w-4" /></>}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export interface IntakeFormData {
    projectName: string;
    vision: string;
    audience: string;
    techPreferences: string;
}
