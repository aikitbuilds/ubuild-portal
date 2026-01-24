
export interface SheetVolunteer {
    rowNumber: number;
    slotIndex?: number; // Added slotIndex
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    shiftTime: string;
    notes: string;
    status: string;
    startTime?: string;
    endTime?: string;
    parentCategory?: string;
    childStation?: string;
    isHeader?: boolean;
    volunteerId?: string;
}

const API_BASE = "https://us-central1-sps-leadscleandb.cloudfunctions.net";

export async function getVolunteersClient(): Promise<{ success: boolean; data: SheetVolunteer[]; error?: string }> {
    try {
        const res = await fetch(`${API_BASE}/getVolunteers`);
        if (!res.ok) {
            throw new Error(`API Error: ${res.statusText}`);
        }
        return await res.json();
    } catch (e: any) {
        console.error("Failed to fetch volunteers:", e);
        return { success: false, data: [], error: e.message };
    }
}

export async function updateAssignmentClient(rowNumber: number, status: string, slotIndex?: number): Promise<{ success: boolean; error?: string }> {
    try {
        const res = await fetch(`${API_BASE}/updateVolunteerAssignment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rowNumber, newStatus: status, slotIndex })
        });
        if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
        return await res.json();
    } catch (e: any) {
        console.error("Failed to update volunteer:", e);
        return { success: false, error: e.message };
    }
}
