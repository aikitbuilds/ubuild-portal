/**
 * Gemini API Test Script
 * 
 * Usage: npx tsx scripts/test-gemini.ts
 * 
 * This script validates the Google Gemini API connection using the specific
 * key provided in .env.local.
 */

import path from 'path';
import dotenv from 'dotenv';

// Explicitly load .env.local from the current directory
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('❌ ERROR: GEMINI_API_KEY is not set in .env.local');
    process.exit(1);
}

async function testGeminiAPI() {
    console.log('🔍 Testing Google Gemini API connection...\n');

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = "Explain the concept of 'Agentic AI' in one sentence.";
        console.log(`📤 Sending prompt: "${prompt}"...`);

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log('✅ Gemini API Connection Successful!\n');
        console.log('─'.repeat(50));
        console.log('📝 Response:');
        console.log(text);
        console.log('─'.repeat(50));
        console.log('\n✅ Intelligence provider validated.');

    } catch (error) {
        console.error('❌ Connection Error:', error);
        process.exit(1);
    }
}

testGeminiAPI();
