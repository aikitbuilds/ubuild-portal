import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { volunteersRef, assignmentsRef } from "@/lib/tejas/db";
import { Volunteer, Assignment } from "@/lib/tejas/schema";

export function useRealtimeRoster() {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to Volunteers
        const unsubscribeVolunteers = onSnapshot(volunteersRef, (snapshot) => {
            const vData = snapshot.docs.map(doc => doc.data());
            setVolunteers(vData);
        }, (error) => {
            console.error("Error fetching volunteers:", error);
        });

        // Subscribe to Assignments
        const unsubscribeAssignments = onSnapshot(assignmentsRef, (snapshot) => {
            const aData = snapshot.docs.map(doc => doc.data());
            setAssignments(aData);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching assignments:", error);
            setLoading(false);
        });

        return () => {
            unsubscribeVolunteers();
            unsubscribeAssignments();
        };
    }, []);

    // Derived Stats
    const stats = {
        totalVolunteers: volunteers.length,
        checkedIn: assignments.filter(a => a.status === 'checkedIn').length,
        pending: assignments.filter(a => a.status === 'confirmed').length,
        issues: assignments.filter(a => a.status === 'noShow' || a.status === 'late').length,
        activeRisk: volunteers.filter(v => (v.aiMetrics?.riskScore || 0) > 50).length
    };

    return { volunteers, assignments, stats, loading };
}
