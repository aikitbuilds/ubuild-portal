import dotenv from 'dotenv';
import path from 'path';
import { getVolunteerSuggestion } from '../lib/ai/ghost-writer';

// Load env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function testGhostWriter() {
    console.log('👻 Testing Ghost Writer AI Logic...\n');

    const testCases = [
        {
            name: "Michael Cong",
            notes: "I want to see my grandson finish the race.",
            current: ""
        },
        {
            name: "Susie Queue",
            notes: "Hurt knee, can't stand for long.",
            current: ""
        },
        {
            name: "Dave Smithey",
            notes: "No preference.",
            current: "Race Director"
        }
    ];

    for (const test of testCases) {
        console.log(`👤 Analyzing ${test.name}: "${test.notes}"`);
        const result = await getVolunteerSuggestion(test.name, test.notes, test.current);

        if (result) {
            console.log(`   ✨ Suggestion: ${result.suggested_station} (${result.suggested_role})`);
            console.log(`   📝 Reasoning: ${result.reasoning}\n`);
        } else {
            console.log(`   ❌ No suggestion returned (or skipped).\n`);
        }
    }
}

testGhostWriter();
