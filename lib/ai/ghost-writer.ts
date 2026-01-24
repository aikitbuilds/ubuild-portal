import { GoogleGenerativeAI } from '@google/generative-ai';

export interface AiSuggestion {
    suggested_station: string;
    suggested_role: string;
    reasoning: string;
}

export async function getVolunteerSuggestion(
    name: string,
    notes: string,
    existingAssignment: string
): Promise<AiSuggestion | null> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.warn('GEMINI_API_KEY missing, skipping AI suggestion');
        return null;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    if (!notes || notes.trim().length < 5) return null;

    // "Smart Mirror" logic: Suggest even if assigned, to catch mismatch or maximize utilization.

    const prompt = `
    Context: You are the Race Director for the Rocky 100 Mile Trail Race.
    Task: Suggest a volunteer station and role based on the volunteer's notes.
    
    Volunteer: ${name}
    Notes: "${notes}"
    Current Assignment: "${existingAssignment}"

    Stations:
    - Start/Finish (Busy, loud, seeing runners finish)
    - Packet Pickup (Friday only, seated, administrative)
    - Aid Station 1 (Dam Nation) - busy, energetic
    - Aid Station 2 (Gate) - remote
    - Course Marking (Physical, hiking)
    - Medical (Requires credentials)

    Directives:
    - IF note mentions "grandson", "family", "friend finishing", SUGGEST 'Start/Finish' or the specific Aid Station they requested closer to finish.
    - IF note mentions "injury", "hurt knee", "can't stand", SUGGEST 'Packet Pickup' or 'Seated Role'.
    - IF note mentions specific person "Susie", SUGGEST 'Same as Susie' (Role: Pairing Request).
    - If unsure, return SUGGEST 'Float / General'.

    Output JSON ONLY:
    { "suggested_station": "...", "suggested_role": "...", "reasoning": "..." }
    `;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (e) {
        console.error('AI Suggestion Error:', e);
        return null;
    }
}
