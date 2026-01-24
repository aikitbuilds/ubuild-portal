import { db } from "@/lib/firebase/client";
import { collection, CollectionReference, DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { Volunteer, Assignment, CheckIn, SupportTicket, CommandAlert } from "./schema";

// Generic Converter Builder
const createConverter = <T>() => ({
    toFirestore(data: T): DocumentData {
        return data as DocumentData;
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): T {
        const data = snapshot.data(options)!;
        return {
            id: snapshot.id,
            ...data
        } as T;
    }
});

// --- COLLECTION REFERENCES ---

export const volunteersRef = collection(db, "volunteers").withConverter(
    createConverter<Volunteer>()
);

export const assignmentsRef = collection(db, "assignments").withConverter(
    createConverter<Assignment>()
);

export const checkinsRef = collection(db, "checkins").withConverter(
    createConverter<CheckIn>()
);

export const ticketsRef = collection(db, "tickets").withConverter(
    createConverter<SupportTicket>()
);

export const alertsRef = collection(db, "alerts").withConverter(
    createConverter<CommandAlert>()
);
