"use client";

import { ClientIntakeForm, type IntakeFormData } from "@/components/agency-dashboard/ClientIntakeForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewProjectPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleIntakeSubmit = async (data: IntakeFormData) => {
        setIsLoading(true);
        try {
            // 1. Create Project
            const projectRes = await fetch("/api/agency/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    clientId: "demo-client", // utilizing demo client for now
                    idea: {
                        title: data.projectName,
                        description: data.vision,
                        targetAudience: data.audience,
                        techPreferences: data.techPreferences,
                    },
                }),
            });

            const projectData = await projectRes.json();
            if (!projectData.success) throw new Error(projectData.error);

            // 2. Trigger Research (async)
            await fetch("/api/agency/research", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    projectId: projectData.project.id,
                    idea: data.vision,
                    audience: data.audience,
                }),
            });

            // Redirect to Mission Control
            router.push(`/dashboard?new_project=${projectData.project.id}`);

        } catch (error) {
            console.error("Failed to create project:", error);
            alert("Failed to initiate project. See console for details.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Initialize New Build</h1>
                    <p className="text-muted-foreground">Submit a vision to the construction engine.</p>
                </div>
            </div>

            <ClientIntakeForm onSubmit={handleIntakeSubmit} isLoading={isLoading} />
        </div>
    );
}
