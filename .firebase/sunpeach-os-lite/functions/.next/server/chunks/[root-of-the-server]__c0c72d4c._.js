module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},22734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},46786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},10761,e=>{e.v({name:"dotenv",version:"17.2.3",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard",pretest:"npm run lint && npm run dts-check",test:"tap run tests/**/*.js --allow-empty-coverage --disable-coverage --timeout=60000","test:coverage":"tap run tests/**/*.js --show-full-coverage --timeout=60000 --coverage-report=text --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},homepage:"https://github.com/motdotla/dotenv#readme",funding:"https://dotenvx.com",keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@types/node":"^18.11.3",decache:"^4.6.2",sinon:"^14.0.1",standard:"^17.0.0","standard-version":"^9.5.0",tap:"^19.2.0",typescript:"^4.8.4"},engines:{node:">=12"},browser:{fs:!1}})},88274,(e,t,r)=>{let a=e.r(22734),s=e.r(14747),o=e.r(46786),n=e.r(54799),i=e.r(10761).version,c=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function l(e){return"string"==typeof e?!["false","0","no","off",""].includes(e.toLowerCase()):!!e}let u=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function p(e){console.log(`[dotenv@${i}][DEBUG] ${e}`)}function d(e){console.log(`[dotenv@${i}] ${e}`)}function m(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function g(e){let t=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(let r of e.path)a.existsSync(r)&&(t=r.endsWith(".vault")?r:`${r}.vault`);else t=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else t=s.resolve(process.cwd(),".env.vault");return a.existsSync(t)?t:null}function h(e){return"~"===e[0]?s.join(o.homedir(),e.slice(1)):e}let f={configDotenv:function(e){let t,r=s.resolve(process.cwd(),".env"),o="utf8",n=process.env;e&&null!=e.processEnv&&(n=e.processEnv);let i=l(n.DOTENV_CONFIG_DEBUG||e&&e.debug),u=l(n.DOTENV_CONFIG_QUIET||e&&e.quiet);e&&e.encoding?o=e.encoding:i&&p("No encoding is specified. UTF-8 is used by default");let m=[r];if(e&&e.path)if(Array.isArray(e.path))for(let t of(m=[],e.path))m.push(h(t));else m=[h(e.path)];let g={};for(let r of m)try{let t=f.parse(a.readFileSync(r,{encoding:o}));f.populate(g,t,e)}catch(e){i&&p(`Failed to load ${r} ${e.message}`),t=e}let v=f.populate(n,g,e);if(i=l(n.DOTENV_CONFIG_DEBUG||i),u=l(n.DOTENV_CONFIG_QUIET||u),i||!u){var y;let e=Object.keys(v).length,r=[];for(let e of m)try{let t=s.relative(process.cwd(),e);r.push(t)}catch(r){i&&p(`Failed to load ${e} ${r.message}`),t=r}d(`injecting env (${e}) from ${r.join(",")} ${(y=`-- tip: ${c[Math.floor(Math.random()*c.length)]}`,process.stdout.isTTY?`\x1b[2m${y}\x1b[0m`:y)}`)}return t?{parsed:g,error:t}:{parsed:g}},_configVault:function(e){let t=l(process.env.DOTENV_CONFIG_DEBUG||e&&e.debug),r=l(process.env.DOTENV_CONFIG_QUIET||e&&e.quiet);(t||!r)&&d("Loading env from encrypted .env.vault");let a=f._parseVault(e),s=process.env;return e&&null!=e.processEnv&&(s=e.processEnv),f.populate(s,a,e),{parsed:a}},_parseVault:function(e){let t,r=g(e=e||{});e.path=r;let a=f.configDotenv(e);if(!a.parsed){let e=Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);throw e.code="MISSING_DATA",e}let s=m(e).split(","),o=s.length;for(let e=0;e<o;e++)try{let r=s[e].trim(),o=function(e,t){let r;try{r=new URL(t)}catch(e){if("ERR_INVALID_URL"===e.code){let e=Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw e.code="INVALID_DOTENV_KEY",e}throw e}let a=r.password;if(!a){let e=Error("INVALID_DOTENV_KEY: Missing key part");throw e.code="INVALID_DOTENV_KEY",e}let s=r.searchParams.get("environment");if(!s){let e=Error("INVALID_DOTENV_KEY: Missing environment part");throw e.code="INVALID_DOTENV_KEY",e}let o=`DOTENV_VAULT_${s.toUpperCase()}`,n=e.parsed[o];if(!n){let e=Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);throw e.code="NOT_FOUND_DOTENV_ENVIRONMENT",e}return{ciphertext:n,key:a}}(a,r);t=f.decrypt(o.ciphertext,o.key);break}catch(t){if(e+1>=o)throw t}return f.parse(t)},config:function(e){if(0===m(e).length)return f.configDotenv(e);let t=g(e);if(!t){var r;return r=`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`,console.error(`[dotenv@${i}][WARN] ${r}`),f.configDotenv(e)}return f._configVault(e)},decrypt:function(e,t){let r=Buffer.from(t.slice(-64),"hex"),a=Buffer.from(e,"base64"),s=a.subarray(0,12),o=a.subarray(-16);a=a.subarray(12,-16);try{let e=n.createDecipheriv("aes-256-gcm",r,s);return e.setAuthTag(o),`${e.update(a)}${e.final()}`}catch(a){let e=a instanceof RangeError,t="Invalid key length"===a.message,r="Unsupported state or unable to authenticate data"===a.message;if(e||t){let e=Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw e.code="INVALID_DOTENV_KEY",e}if(r){let e=Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw e.code="DECRYPTION_FAILED",e}throw a}},parse:function(e){let t,r={},a=e.toString();for(a=a.replace(/\r\n?/mg,"\n");null!=(t=u.exec(a));){let e=t[1],a=t[2]||"",s=(a=a.trim())[0];a=a.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),'"'===s&&(a=(a=a.replace(/\\n/g,"\n")).replace(/\\r/g,"\r")),r[e]=a}return r},populate:function(e,t,r={}){let a=!!(r&&r.debug),s=!!(r&&r.override),o={};if("object"!=typeof t){let e=Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw e.code="OBJECT_REQUIRED",e}for(let r of Object.keys(t))Object.prototype.hasOwnProperty.call(e,r)?(!0===s&&(e[r]=t[r],o[r]=t[r]),a&&(!0===s?p(`"${r}" is already defined and WAS overwritten`):p(`"${r}" is already defined and was NOT overwritten`))):(e[r]=t[r],o[r]=t[r]);return o}};t.exports.configDotenv=f.configDotenv,t.exports._configVault=f._configVault,t.exports._parseVault=f._parseVault,t.exports.config=f.config,t.exports.decrypt=f.decrypt,t.exports.parse=f.parse,t.exports.populate=f.populate,t.exports=f},51660,e=>e.a(async(t,r)=>{try{let t=await e.y("firebase-admin-4a8d579ee9768f64/app");e.n(t),r()}catch(e){r(e)}},!0),87375,e=>e.a(async(t,r)=>{try{let t=await e.y("firebase-admin-4a8d579ee9768f64/firestore");e.n(t),r()}catch(e){r(e)}},!0),18608,e=>e.a(async(t,r)=>{try{var a=e.i(14747),s=e.i(88274),o=e.i(51660),n=e.i(87375),i=t([o,n]);[o,n]=i.then?(await i)():i,s.default.config({path:a.default.resolve(process.cwd(),".env.local")});let c={projectId:process.env.FIREBASE_PROJECT_ID,clientEmail:process.env.FIREBASE_CLIENT_EMAIL,privateKey:process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,"\n")},l=(0===(0,o.getApps)().length&&(0,o.initializeApp)({credential:(0,o.cert)(c)}),(0,n.getFirestore)()),u={projects:l.collection("projects"),agencyLogs:l.collection("agency_logs"),researchReports:l.collection("research_reports"),blueprints:l.collection("blueprints"),buildTasks:l.collection("build_tasks"),issues:l.collection("issues"),logs:l.collection("logs")};e.s(["collections",0,u,"db",0,l]),r()}catch(e){r(e)}},!1),33958,e=>e.a(async(t,r)=>{try{var a,s=e.i(22734),o=e.i(14747),n=e.i(18608),i=e.i(87375),c=t([n,i]);[n,i]=c.then?(await c)():c;var l=((a={})[a.RESEARCH=1]="RESEARCH",a[a.ARCHITECT=2]="ARCHITECT",a[a.BUILD=3]="BUILD",a[a.OPTIMIZE=4]="OPTIMIZE",a[a.DEPLOY=5]="DEPLOY",a[a.COMPLETED=6]="COMPLETED",a);let v={1:"Research",2:"Architecture",3:"Build",4:"Optimize",5:"Deploy",6:"Completed"},y={1:"@researcher",2:"@architect",3:"@builder",4:"@improver",5:"@deployer",6:"none"},E=(0,o.join)(process.cwd(),".agent","knowledge","framework");function u(e){try{let t=(0,o.join)(E,e);return(0,s.readFileSync)(t,"utf-8")}catch(t){return console.error(`Failed to read knowledge file: ${e}`,t),""}}function p(e){let t=u("IDEA_TO_MVP_WORKFLOW_v2.md"),r={1:["Stage 1","RESEARCH","Intelligence Gathering"],2:["Stage 2","ARCHITECT","Blueprint"],3:["Stage 3","BUILD","Construction"],4:["Stage 4","OPTIMIZE","Polish"],5:["Stage 5","DEPLOY","Launch"],6:[]},a=r[e];if(!a.length)return"";let s="",o=t.split("\n"),n=!1,i=e+1;for(let e of o){let t=a.some(t=>e.toLowerCase().includes(t.toLowerCase())),o=i<=5&&r[i]?.some(t=>e.toLowerCase().includes(t.toLowerCase()));if(t&&(n=!0),o&&n)break;n&&(s+=e+"\n")}return s.trim()||`Requirements for Stage ${e} (${v[e]})`}async function d(e){let t=await n.collections.projects.doc(e).get();if(!t.exists)throw Error(`Project ${e} not found`);let r=t.data();return{id:t.id,currentStage:r?.currentStage||1,status:r?.status||"pending",idea:r?.idea||"",lastOutput:r?.lastOutput||null,createdAt:r?.createdAt,updatedAt:r?.updatedAt}}function m(e,t){let r=y[e],a=p(e);return({1:`
Act as ${r} within the uBuild System.

## Task
Conduct comprehensive market research for the following idea:
"${t.idea}"

## Requirements from Knowledge Base
${a}

## Required Outputs
1. Competitor Analysis (top 5 competitors)
2. Market Size Estimation
3. Technology Stack Recommendations
4. User Pain Points
5. Viability Score (1-10)

## Instructions
- Use Perplexity MCP for real-time research
- Return structured JSON
- DO NOT hallucinate data - if MCP fails, report the error
- Save results to Firebase projects/{id}/research
`,2:`
Act as ${r} within the uBuild System.

## Task
Design the system architecture based on Stage 1 research.

## Input (Previous Stage Output)
${JSON.stringify(t.lastOutput,null,2)}

## Requirements from Knowledge Base
${a}

## Required Outputs
1. System Architecture Diagram (Mermaid)
2. Database Schema (TypeScript interfaces)
3. API Endpoint Specifications
4. Component Tree
5. Technology Decisions

## Instructions
- Read research from Firestore
- Use Gemini AI for design generation
- Save to Firebase projects/{id}/architecture
`,3:`
Act as ${r} within the uBuild System.

## Task
Generate the MVP codebase based on Stage 2 architecture.

## Input (Previous Stage Output)
${JSON.stringify(t.lastOutput,null,2)}

## Requirements from Knowledge Base
${a}

## Required Outputs
1. Generated React components
2. API routes
3. Database models
4. Test files

## Instructions
- Execute @frontend, @backend, @database agents in parallel
- Run @tester agent for validation
- Auto-fix errors (max 3 attempts)
- If errors persist, PAUSE and alert user
- Save to Firebase projects/{id}/build
`,4:`
Act as ${r} within the uBuild System.

## Task
Optimize the generated codebase for production.

## Input (Previous Stage Output)
${JSON.stringify(t.lastOutput,null,2)}

## Requirements from Knowledge Base
${a}

## Required Outputs
1. Performance optimizations
2. SEO improvements
3. Accessibility fixes
4. Security audit results

## Instructions
- Analyze code from Stage 3
- Apply optimizations
- Run Lighthouse audit
- Save to Firebase projects/{id}/optimizations
`,5:`
Act as ${r} within the uBuild System.

## Task
Deploy the MVP to production.

## Input (Previous Stage Output)
${JSON.stringify(t.lastOutput,null,2)}

## Requirements from Knowledge Base
${a}

## Required Outputs
1. Production build
2. Live deployment URL
3. Monitoring setup
4. Documentation

## Instructions
- Build production bundle
- Deploy via Cloud Run MCP or Vercel
- Configure monitoring
- Return live URLs
- Save to Firebase projects/{id}/deployment
`,6:"Project completed. No further actions required."})[e]}async function g(e){try{let t=await d(e);if(t.currentStage>=6)return{success:!0,stage:6,prompt:"Project already completed"};let r=m(t.currentStage,{idea:t.idea,lastOutput:t.lastOutput});return await n.db.collection("agent_queue").add({projectId:e,stage:t.currentStage,stageName:v[t.currentStage],agent:y[t.currentStage],prompt:r,status:"pending",createdAt:i.Timestamp.now()}),await n.collections.projects.doc(e).update({status:"processing",updatedAt:i.Timestamp.now()}),{success:!0,stage:t.currentStage,prompt:r}}catch(r){let t=r instanceof Error?r.message:"Unknown error";return await n.db.collection("issues").add({projectId:e,type:"auto-pilot-error",message:t,createdAt:i.Timestamp.now()}),{success:!1,stage:1,prompt:"",error:t}}}async function h(e,t){let r=await d(e),a=Math.min(r.currentStage+1,6);return await n.collections.projects.doc(e).update({currentStage:a,lastOutput:t,status:6===a?"completed":"ready",updatedAt:i.Timestamp.now()}),{success:!0,nextStage:a}}async function f(e,t){await n.collections.projects.doc(e).update({status:"paused",pauseReason:t,updatedAt:i.Timestamp.now()}),await n.db.collection("issues").add({projectId:e,type:"workflow-paused",message:t,requiresUserInput:!0,createdAt:i.Timestamp.now()})}e.s(["Stage",()=>l,"StageAgents",0,y,"StageNames",0,v,"advanceStage",()=>h,"executeNextStage",()=>g,"generateStagePrompt",()=>m,"getProjectStatus",()=>d,"getStageRequirements",()=>p,"pauseWorkflow",()=>f,"readKnowledgeFile",()=>u]),r()}catch(e){r(e)}},!1),4958,e=>e.a(async(t,r)=>{try{var a=e.i(4543),s=e.i(18608),o=e.i(87375),n=e.i(40821),i=e.i(33958),c=t([s,o,i]);[s,o,i]=c.then?(await c)():c;let p=process.env.GEMINI_API_KEY,d=`You are a Venture Capital Market Research Analyst for a software development agency.
Your task is to analyze startup/product ideas and provide actionable market intelligence.

IMPORTANT: You MUST respond with ONLY valid JSON. No markdown, no explanations, just pure JSON.

The JSON must have this exact structure:
{
  "score": <number 1-10 representing market viability>,
  "competitors": ["competitor1", "competitor2", "competitor3"],
  "techStack": ["technology1", "technology2", "technology3"],
  "summary": "<2-3 sentence market analysis>",
  "marketSize": "<estimated TAM>",
  "userPainPoints": ["pain1", "pain2", "pain3"]
}`,m=!!process.env.PERPLEXITY_API_KEY;async function l(e,t){return m||console.log("[Research] Perplexity MCP not configured - using Gemini fallback"),null}async function u(e){try{let t=await e.json(),{projectId:r,idea:c,audience:u}=t,m=t.useMCP??!0;if(!r||!c)return a.NextResponse.json({success:!1,error:"Missing required fields: projectId, idea"},{status:400});if(!p)return a.NextResponse.json({success:!1,error:"Gemini API key not configured"},{status:500});let g=null,h="gemini";if(m&&(g=await l(c,u||""))&&(h="perplexity-mcp"),!g){let e=`Analyze this software product idea for market viability:

IDEA: ${c}
TARGET AUDIENCE: ${u||"General consumers"}

Provide your analysis as a JSON object with score (1-10), competitors (list of 3-5), techStack (recommended technologies), summary (2-3 sentences), marketSize, and userPainPoints (list of 3).`,t=new n.GoogleGenerativeAI(p).getGenerativeModel({model:"gemini-2.0-flash"});try{let r=await t.generateContent([d,e]),a=(await r.response).text(),s=a,o=a.match(/```(?:json)?\s*([\s\S]*?)```/);o&&(s=o[1].trim()),g=JSON.parse(s)}catch(e){return console.error("[Research] AI call failed:",e),await (0,i.pauseWorkflow)(r,"Research API failed - requires user intervention"),a.NextResponse.json({success:!1,error:"Research failed - workflow paused",requiresIntervention:!0},{status:500})}}if(!g)return await (0,i.pauseWorkflow)(r,"Failed to generate research - no valid response"),a.NextResponse.json({success:!1,error:"Research generation failed"},{status:500});let f=`report_${r}_${Date.now()}`,v={projectId:r,viabilityScore:g.score,competitors:g.competitors,techStack:g.techStack||[],marketSummary:g.summary,createdAt:new Date};await s.collections.researchReports.doc(f).set({id:f,...v,rawResult:g,source:h,createdAt:o.FieldValue.serverTimestamp()}),await s.db.collection("projects").doc(r).collection("research").doc("latest").set({...g,reportId:f,source:h,createdAt:o.Timestamp.now()});let y={projectId:r,agentName:"@researcher",stage:1,input:{idea:c,audience:u,useMCP:m},output:g,timestamp:new Date,success:!0};return await s.collections.agencyLogs.add({...y,timestamp:o.FieldValue.serverTimestamp()}),await s.collections.projects.doc(r).update({currentStage:2,lastOutput:g,status:"ready",updatedAt:o.FieldValue.serverTimestamp()}),a.NextResponse.json({success:!0,report:{id:f,...v},source:h,mcpNote:"gemini"===h?"Perplexity MCP not available - used Gemini for research":"Used Perplexity MCP for real-time research"})}catch(e){return console.error("Research Engine Error:",e),a.NextResponse.json({success:!1,error:e instanceof Error?e.message:"Unknown error occurred"},{status:500})}}e.s(["POST",()=>u]),r()}catch(e){r(e)}},!1),60915,e=>e.a(async(t,r)=>{try{var a=e.i(36320),s=e.i(92876),o=e.i(78501),n=e.i(18402),i=e.i(93092),c=e.i(19298),l=e.i(48413),u=e.i(72981),p=e.i(50508),d=e.i(83957),m=e.i(59530),g=e.i(11345),h=e.i(18787),f=e.i(94201),v=e.i(49440),y=e.i(93695);e.i(61407);var E=e.i(28654),w=e.i(4958),R=t([w]);[w]=R.then?(await R)():R;let O=new a.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/agency/research/route",pathname:"/api/agency/research",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Documents/Active Projects/ubuild/ubuild-portal/app/api/agency/research/route.ts",nextConfigOutput:"",userland:w}),{workAsyncStorage:T,workUnitAsyncStorage:A,serverHooks:S}=O;function x(){return(0,o.patchFetch)({workAsyncStorage:T,workUnitAsyncStorage:A})}async function b(e,t,r){O.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let a="/api/agency/research/route";a=a.replace(/\/index$/,"")||"/";let o=await O.prepare(e,t,{srcPage:a,multiZoneDraftMode:!1});if(!o)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:w,params:R,nextConfig:x,parsedUrl:b,isDraftMode:T,prerenderManifest:A,routerServerContext:S,isOnDemandRevalidate:N,revalidateOnlyGenerated:I,resolvedPathname:_,clientReferenceManifest:D,serverActionsManifest:C}=o,P=(0,l.normalizeAppPath)(a),k=!!(A.dynamicRoutes[P]||A.routes[_]),j=async()=>((null==S?void 0:S.render404)?await S.render404(e,t,b,!1):t.end("This page could not be found"),null);if(k&&!T){let e=!!A.routes[_],t=A.dynamicRoutes[P];if(t&&!1===t.fallback&&!e){if(x.experimental.adapterPath)return await j();throw new y.NoFallbackError}}let $=null;!k||O.isDev||T||($=_,$="/index"===$?"/":$);let V=!0===O.isDev||!k,M=k&&!V;C&&D&&(0,c.setManifestsSingleton)({page:a,clientReferenceManifest:D,serverActionsManifest:C});let U=e.method||"GET",L=(0,i.getTracer)(),q=L.getActiveScopeSpan(),F={params:R,prerenderManifest:A,renderOpts:{experimental:{authInterrupts:!!x.experimental.authInterrupts},cacheComponents:!!x.cacheComponents,supportsDynamicResponse:V,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:x.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,s)=>O.onRequestError(e,t,a,s,S)},sharedContext:{buildId:w}},K=new u.NodeNextRequest(e),B=new u.NodeNextResponse(t),Y=p.NextRequestAdapter.fromNodeNextRequest(K,(0,p.signalFromNodeResponse)(t));try{let o=async e=>O.handle(Y,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=L.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let s=r.get("next.route");if(s){let t=`${U} ${s}`;e.setAttributes({"next.route":s,"http.route":s,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${a}`)}),c=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var i,l;let u=async({previousCacheEntry:s})=>{try{if(!c&&N&&I&&!s)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await o(n);e.fetchMetrics=F.renderOpts.fetchMetrics;let i=F.renderOpts.pendingWaitUntil;i&&r.waitUntil&&(r.waitUntil(i),i=void 0);let l=F.renderOpts.collectedTags;if(!k)return await (0,g.sendResponse)(K,B,a,F.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(a.headers);l&&(t[v.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=v.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,s=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=v.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:E.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:s}}}}catch(t){throw(null==s?void 0:s.isStale)&&await O.onRequestError(e,t,{routerKind:"App Router",routePath:a,routeType:"route",revalidateReason:(0,m.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:N})},!1,S),t}},p=await O.handleResponse({req:e,nextConfig:x,cacheKey:$,routeKind:s.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:N,revalidateOnlyGenerated:I,responseGenerator:u,waitUntil:r.waitUntil,isMinimalMode:c});if(!k)return null;if((null==p||null==(i=p.value)?void 0:i.kind)!==E.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});c||t.setHeader("x-nextjs-cache",N?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let d=(0,h.fromNodeOutgoingHttpHeaders)(p.value.headers);return c&&k||d.delete(v.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||d.get("Cache-Control")||d.set("Cache-Control",(0,f.getCacheControlHeader)(p.cacheControl)),await (0,g.sendResponse)(K,B,new Response(p.value.body,{headers:d,status:p.value.status||200})),null};q?await l(q):await L.withPropagatedContext(e.headers,()=>L.trace(d.BaseServerSpan.handleRequest,{spanName:`${U} ${a}`,kind:i.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof y.NoFallbackError||await O.onRequestError(e,t,{routerKind:"App Router",routePath:P,routeType:"route",revalidateReason:(0,m.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:N})},!1,S),k)throw t;return await (0,g.sendResponse)(K,B,new Response(null,{status:500})),null}}e.s(["handler",()=>b,"patchFetch",()=>x,"routeModule",()=>O,"serverHooks",()=>S,"workAsyncStorage",()=>T,"workUnitAsyncStorage",()=>A]),r()}catch(e){r(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__c0c72d4c._.js.map