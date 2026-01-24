import React from "react";

export default function CheckInLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-200">
            {children}
        </div>
    );
}
