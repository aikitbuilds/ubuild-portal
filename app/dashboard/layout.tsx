import { Sidebar } from "@/components/agency-dashboard/Sidebar";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { AdminTools } from "@/components/admin/AdminTools";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50/50">
            <AuthGuard>
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-8 relative">
                    {children}
                    {/* Dev/Admin Tools Overlay */}
                    <div className="fixed bottom-8 right-8 z-50">
                        <AdminTools />
                    </div>
                </main>
            </AuthGuard>
        </div>
    );
}
