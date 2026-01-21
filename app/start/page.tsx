import { SmartStartWizard } from "@/components/onboarding/SmartStartWizard";

export default function StartPage() {
    return (
        <main className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            {/* Header / Logo */}
            <div className="relative z-10 w-full p-8 flex justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                        uB
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white">uBuild</span>
                </div>
            </div>

            {/* Wizard Container */}
            <div className="relative z-10 flex-1 flex items-center justify-center p-4">
                <SmartStartWizard />
            </div>
        </main>
    );
}
