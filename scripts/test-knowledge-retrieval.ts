/**
 * Knowledge Retrieval Test Script
 * 
 * Verifies that the System Brain can correctly read and parse
 * knowledge base files.
 * 
 * Usage: npx tsx scripts/test-knowledge-retrieval.ts
 */

import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment
config({ path: resolve(process.cwd(), '.env.local') });

import {
    readKnowledgeFile,
    getStageRequirements,
    Stage,
    StageNames
} from '../lib/agency/auto-pilot';

async function testKnowledgeRetrieval() {
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║         KNOWLEDGE RETRIEVAL TEST                             ║');
    console.log('╚══════════════════════════════════════════════════════════════╝\n');

    // Test 1: Read workflow file
    console.log('📚 Test 1: Reading IDEA_TO_MVP_WORKFLOW_v2.md...');
    const workflow = readKnowledgeFile('IDEA_TO_MVP_WORKFLOW_v2.md');

    if (workflow) {
        console.log('✅ Successfully read workflow file');
        console.log(`   - Length: ${workflow.length} characters`);
        console.log(`   - Preview: "${workflow.substring(0, 100)}..."\n`);
    } else {
        console.log('❌ Failed to read workflow file\n');
    }

    // Test 2: Read implementation guide
    console.log('📚 Test 2: Reading IMPLEMENTATION_GUIDE.md...');
    const implGuide = readKnowledgeFile('IMPLEMENTATION_GUIDE.md');

    if (implGuide) {
        console.log('✅ Successfully read implementation guide');
        console.log(`   - Length: ${implGuide.length} characters\n`);
    } else {
        console.log('❌ Failed to read implementation guide\n');
    }

    // Test 3: Extract Stage 3 requirements
    console.log('🎯 Test 3: Extracting Stage 3 (BUILD) requirements...');
    const stage3Reqs = getStageRequirements(Stage.BUILD);

    if (stage3Reqs) {
        console.log('✅ Stage 3 requirements extracted:');
        console.log('───────────────────────────────────────');
        console.log(stage3Reqs.substring(0, 500));
        console.log('...\n');
    } else {
        console.log('❌ Failed to extract Stage 3 requirements\n');
    }

    // Test 4: Extract all stage requirements
    console.log('📋 Test 4: Extracting all stage requirements...\n');

    for (let s = Stage.RESEARCH; s <= Stage.DEPLOY; s++) {
        const reqs = getStageRequirements(s as Stage);
        console.log(`Stage ${s} (${StageNames[s as Stage]}):`);
        console.log(`   - Found: ${reqs ? '✅' : '❌'}`);
        console.log(`   - Length: ${reqs.length} characters`);
        console.log('');
    }

    // Test 5: Read human-centered design
    console.log('🎨 Test 5: Reading human-centered-design.md...');
    const hcd = readKnowledgeFile('human-centered-design.md');

    if (hcd) {
        console.log('✅ Successfully read human-centered design');
        console.log(`   - Length: ${hcd.length} characters\n`);
    } else {
        console.log('❌ Failed to read human-centered design\n');
    }

    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║                    TEST COMPLETE                             ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
}

testKnowledgeRetrieval().catch(console.error);
