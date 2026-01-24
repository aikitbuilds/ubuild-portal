import React from "react";

export default function VolunteerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-200">
            {/* No Topbar/Sidebar as requested */}
            <main className="p-4 sm:p-8">
                <div className="max-w-md mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
