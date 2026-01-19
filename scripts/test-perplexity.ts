/**
 * Perplexity API Test Script
 * 
 * Usage: npx tsx scripts/test-perplexity.ts
 * 
 * This script validates the Perplexity API connection before integrating
 * into the uBuild Agency workflow.
 */

import 'dotenv/config';

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

if (!PERPLEXITY_API_KEY || PERPLEXITY_API_KEY === 'your-perplexity-api-key') {
    console.error('❌ ERROR: PERPLEXITY_API_KEY is not set or is a placeholder.');
    console.error('   Please update your .env.local file with a valid API key.');
    process.exit(1);
}

async function testPerplexityAPI() {
    console.log('🔍 Testing Perplexity API connection...\n');

    const testQuery = "Analyze the market for a heated coffee mug";

    try {
        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'sonar',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a market research analyst. Provide concise analysis.'
                    },
                    {
                        role: 'user',
                        content: testQuery
                    }
                ],
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`❌ API Error: ${response.status} ${response.statusText}`);
            console.error(`   Response: ${errorText}`);
            process.exit(1);
        }

        const data = await response.json();

        console.log('✅ Perplexity API Connection Successful!\n');
        console.log('📊 Test Query:', testQuery);
        console.log('─'.repeat(50));
        console.log('📝 Response:');
        console.log(data.choices?.[0]?.message?.content || 'No content in response');
        console.log('─'.repeat(50));
        console.log('\n✅ API validation complete. Ready for integration.');

    } catch (error) {
        console.error('❌ Connection Error:', error);
        process.exit(1);
    }
}

testPerplexityAPI();
