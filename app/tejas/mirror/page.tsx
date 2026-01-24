import { fetchVolunteers, SheetVolunteer } from '@/lib/google-sheets';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Network, RefreshCw, PenSquare, LayoutDashboard } from 'lucide-react';
import { OpsStats } from '@/components/tejas/OpsStats';
import { StationCard } from '@/components/tejas/StationCard';
import { DashboardClient } from '@/components/tejas/DashboardClient';

export const revalidate = 60; // Refresh every 60s

export default async function MirrorDashboard() {
    let volunteers: SheetVolunteer[] = [];
    let error = "";

    try {
        volunteers = await fetchVolunteers();
    } catch (e: any) {
        error = e.message;
        console.error("Fetch Error", e);
    }

    // --- Data Processing for Ops View ---

    // 1. Stats
    const totalShifts = volunteers.length;
    const uniqueEmails = new Set(volunteers.map(v => v.email?.toLowerCase()).filter(Boolean));
    const uniqueCount = uniqueEmails.size || volunteers.length;

    const emailCounts: Record<string, number> = {};
    volunteers.forEach(v => {
        if (v.email) emailCounts[v.email] = (emailCounts[v.email] || 0) + 1;
    });
    const conflictCount = Object.values(emailCounts).filter(c => c > 1).length;

    const checkedInCount = volunteers.filter(v =>
        v.status?.toLowerCase().includes('check') || v.status?.toLowerCase().includes('here')
    ).length;

    // 2. Index Assignments (To filter "Unassigned" correctly)
    const assignedEmails = new Set<string>();
    const assignedNames = new Set<string>();

    volunteers.forEach(v => {
        const role = (v.role || "").toLowerCase();
        // Identify "Real" Assignments (Not Unassigned, Not General Pool)
        if (role && !role.includes('volunteer') && role !== "unassigned" && role !== "general pool") {
            if (v.email) assignedEmails.add(v.email.toLowerCase());
            if (v.firstName) assignedNames.add(v.firstName.toLowerCase());
            if (v.lastName) assignedNames.add(v.lastName.toLowerCase());
            // For safety, add specific "Packet Pick Up" names if they are in the Name column
            // (Assignment rows often have Name in Col D, which maps to lastName in our struct)
            const nameInColD = v.lastName;
            if (nameInColD && nameInColD.length > 2) assignedNames.add(nameInColD.toLowerCase());
        }
    });

    // 3. Group by Station (Role) & Apply Filters
    // 3. Group by Parent Category and then by Child Station
    const hierarchy: Record<string, Record<string, SheetVolunteer[]>> = {};
    const filteredList: SheetVolunteer[] = [];

    // Staff Keywords to Filter Out (Only from Supply)
    const staffKeywords = ["r.d.", "logistics", "race hub", "captain", "timing", "medical", "store", "ppu", "volunteers brooke", "ass't rd"];

    volunteers.forEach(vol => {
        const roleLower = (vol.role || "").toLowerCase();
        const firstNameLower = (vol.firstName || "").toLowerCase();
        const emailLower = (vol.email || "").toLowerCase();

        // Row filtering logic (Board vs Supply)
        const isBoardRow = vol.rowNumber < 260;

        if (!isBoardRow) {
            // SUPPLY ROW FILTERS
            if (staffKeywords.some(k => roleLower.includes(k) || firstNameLower.includes(k))) return;
            if (emailLower.includes("tejas") || emailLower.includes("admin")) return;
            if (firstNameLower.includes("tejas") && firstNameLower.match(/\d/)) return;

            // Check if already assigned
            if (assignedEmails.has(emailLower)) return;
            const fullName = `${firstNameLower} ${vol.lastName || ""}`.toLowerCase();
            if (Array.from(assignedNames).some(n => n.length > 3 && fullName.includes(n))) return;
        }

        if (!vol.role && isBoardRow) return;

        const parent = vol.parentCategory || 'UNASSIGNED';
        const child = vol.childStation || 'General Pool';

        if (!hierarchy[parent]) hierarchy[parent] = {};
        if (!hierarchy[parent][child]) hierarchy[parent][child] = [];
        hierarchy[parent][child].push(vol);

        filteredList.push(vol);
    });

    const parentOrder = ['LEADERSHIP', 'AID STATIONS', 'RACE HUB', 'COURSE SAFETY', 'LOGISTICS', 'SPECIALTY', 'UNASSIGNED'];
    const sortedParents = Object.keys(hierarchy).sort((a, b) => {
        const idxA = parentOrder.indexOf(a as any);
        const idxB = parentOrder.indexOf(b as any);
        if (idxA > -1 && idxB > -1) return idxA - idxB;
        if (idxA > -1) return -1;
        if (idxB > -1) return 1;
        return a.localeCompare(b);
    });

    return (
        <div className="container mx-auto p-4 space-y-6 max-w-[1600px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <LayoutDashboard className="h-6 w-6 text-slate-600" />
                        Rocky 100 Command Center <span className="text-sm bg-red-600 text-white px-2 py-0.5 rounded-full">V2 LIVE</span>
                    </h1>
                    <p className="text-sm text-muted-foreground">Real-time Operational View • {new Date().toLocaleTimeString()}</p>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/tejas/strategy">
                            <Network className="h-4 w-4 mr-2" />
                            Strategy
                        </Link>
                    </Button>
                    <Button size="sm" variant="default" className="bg-slate-900 text-white">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Refresh
                    </Button>
                </div>
            </div>

            {/* Top Stats */}
            <OpsStats
                uniqueCount={uniqueCount}
                totalShifts={totalShifts}
                conflictCount={conflictCount}
                checkedInCount={checkedInCount}
            />

            {/* Interactive Client Dashboard */}
            <DashboardClient
                hierarchy={hierarchy}
                sortedParents={sortedParents}
                uniqueCount={uniqueCount}
                totalShifts={totalShifts}
                conflictCount={conflictCount}
                checkedInCount={checkedInCount}
                allVolunteers={filteredList}
            />
        </div>
    );
}
