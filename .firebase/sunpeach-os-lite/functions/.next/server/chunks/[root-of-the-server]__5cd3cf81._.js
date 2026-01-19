module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},22734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},46786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},10761,e=>{e.v({name:"dotenv",version:"17.2.3",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard",pretest:"npm run lint && npm run dts-check",test:"tap run tests/**/*.js --allow-empty-coverage --disable-coverage --timeout=60000","test:coverage":"tap run tests/**/*.js --show-full-coverage --timeout=60000 --coverage-report=text --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},homepage:"https://github.com/motdotla/dotenv#readme",funding:"https://dotenvx.com",keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@types/node":"^18.11.3",decache:"^4.6.2",sinon:"^14.0.1",standard:"^17.0.0","standard-version":"^9.5.0",tap:"^19.2.0",typescript:"^4.8.4"},engines:{node:">=12"},browser:{fs:!1}})},88274,(e,t,r)=>{let a=e.r(22734),s=e.r(14747),o=e.r(46786),n=e.r(54799),i=e.r(10761).version,c=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function l(e){return"string"==typeof e?!["false","0","no","off",""].includes(e.toLowerCase()):!!e}let u=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function p(e){console.log(`[dotenv@${i}][DEBUG] ${e}`)}function d(e){console.log(`[dotenv@${i}] ${e}`)}function g(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function m(e){let t=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(let r of e.path)a.existsSync(r)&&(t=r.endsWith(".vault")?r:`${r}.vault`);else t=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else t=s.resolve(process.cwd(),".env.vault");return a.existsSync(t)?t:null}function f(e){return"~"===e[0]?s.join(o.homedir(),e.slice(1)):e}let h={configDotenv:function(e){let t,r=s.resolve(process.cwd(),".env"),o="utf8",n=process.env;e&&null!=e.processEnv&&(n=e.processEnv);let i=l(n.DOTENV_CONFIG_DEBUG||e&&e.debug),u=l(n.DOTENV_CONFIG_QUIET||e&&e.quiet);e&&e.encoding?o=e.encoding:i&&p("No encoding is specified. UTF-8 is used by default");let g=[r];if(e&&e.path)if(Array.isArray(e.path))for(let t of(g=[],e.path))g.push(f(t));else g=[f(e.path)];let m={};for(let r of g)try{let t=h.parse(a.readFileSync(r,{encoding:o}));h.populate(m,t,e)}catch(e){i&&p(`Failed to load ${r} ${e.message}`),t=e}let v=h.populate(n,m,e);if(i=l(n.DOTENV_CONFIG_DEBUG||i),u=l(n.DOTENV_CONFIG_QUIET||u),i||!u){var E;let e=Object.keys(v).length,r=[];for(let e of g)try{let t=s.relative(process.cwd(),e);r.push(t)}catch(r){i&&p(`Failed to load ${e} ${r.message}`),t=r}d(`injecting env (${e}) from ${r.join(",")} ${(E=`-- tip: ${c[Math.floor(Math.random()*c.length)]}`,process.stdout.isTTY?`\x1b[2m${E}\x1b[0m`:E)}`)}return t?{parsed:m,error:t}:{parsed:m}},_configVault:function(e){let t=l(process.env.DOTENV_CONFIG_DEBUG||e&&e.debug),r=l(process.env.DOTENV_CONFIG_QUIET||e&&e.quiet);(t||!r)&&d("Loading env from encrypted .env.vault");let a=h._parseVault(e),s=process.env;return e&&null!=e.processEnv&&(s=e.processEnv),h.populate(s,a,e),{parsed:a}},_parseVault:function(e){let t,r=m(e=e||{});e.path=r;let a=h.configDotenv(e);if(!a.parsed){let e=Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);throw e.code="MISSING_DATA",e}let s=g(e).split(","),o=s.length;for(let e=0;e<o;e++)try{let r=s[e].trim(),o=function(e,t){let r;try{r=new URL(t)}catch(e){if("ERR_INVALID_URL"===e.code){let e=Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw e.code="INVALID_DOTENV_KEY",e}throw e}let a=r.password;if(!a){let e=Error("INVALID_DOTENV_KEY: Missing key part");throw e.code="INVALID_DOTENV_KEY",e}let s=r.searchParams.get("environment");if(!s){let e=Error("INVALID_DOTENV_KEY: Missing environment part");throw e.code="INVALID_DOTENV_KEY",e}let o=`DOTENV_VAULT_${s.toUpperCase()}`,n=e.parsed[o];if(!n){let e=Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);throw e.code="NOT_FOUND_DOTENV_ENVIRONMENT",e}return{ciphertext:n,key:a}}(a,r);t=h.decrypt(o.ciphertext,o.key);break}catch(t){if(e+1>=o)throw t}return h.parse(t)},config:function(e){if(0===g(e).length)return h.configDotenv(e);let t=m(e);if(!t){var r;return r=`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`,console.error(`[dotenv@${i}][WARN] ${r}`),h.configDotenv(e)}return h._configVault(e)},decrypt:function(e,t){let r=Buffer.from(t.slice(-64),"hex"),a=Buffer.from(e,"base64"),s=a.subarray(0,12),o=a.subarray(-16);a=a.subarray(12,-16);try{let e=n.createDecipheriv("aes-256-gcm",r,s);return e.setAuthTag(o),`${e.update(a)}${e.final()}`}catch(a){let e=a instanceof RangeError,t="Invalid key length"===a.message,r="Unsupported state or unable to authenticate data"===a.message;if(e||t){let e=Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw e.code="INVALID_DOTENV_KEY",e}if(r){let e=Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw e.code="DECRYPTION_FAILED",e}throw a}},parse:function(e){let t,r={},a=e.toString();for(a=a.replace(/\r\n?/mg,"\n");null!=(t=u.exec(a));){let e=t[1],a=t[2]||"",s=(a=a.trim())[0];a=a.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),'"'===s&&(a=(a=a.replace(/\\n/g,"\n")).replace(/\\r/g,"\r")),r[e]=a}return r},populate:function(e,t,r={}){let a=!!(r&&r.debug),s=!!(r&&r.override),o={};if("object"!=typeof t){let e=Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw e.code="OBJECT_REQUIRED",e}for(let r of Object.keys(t))Object.prototype.hasOwnProperty.call(e,r)?(!0===s&&(e[r]=t[r],o[r]=t[r]),a&&(!0===s?p(`"${r}" is already defined and WAS overwritten`):p(`"${r}" is already defined and was NOT overwritten`))):(e[r]=t[r],o[r]=t[r]);return o}};t.exports.configDotenv=h.configDotenv,t.exports._configVault=h._configVault,t.exports._parseVault=h._parseVault,t.exports.config=h.config,t.exports.decrypt=h.decrypt,t.exports.parse=h.parse,t.exports.populate=h.populate,t.exports=h},51660,e=>e.a(async(t,r)=>{try{let t=await e.y("firebase-admin-4a8d579ee9768f64/app");e.n(t),r()}catch(e){r(e)}},!0),87375,e=>e.a(async(t,r)=>{try{let t=await e.y("firebase-admin-4a8d579ee9768f64/firestore");e.n(t),r()}catch(e){r(e)}},!0),18608,e=>e.a(async(t,r)=>{try{var a=e.i(14747),s=e.i(88274),o=e.i(51660),n=e.i(87375),i=t([o,n]);[o,n]=i.then?(await i)():i,s.default.config({path:a.default.resolve(process.cwd(),".env.local")});let c={projectId:process.env.FIREBASE_PROJECT_ID,clientEmail:process.env.FIREBASE_CLIENT_EMAIL,privateKey:process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,"\n")},l=(0===(0,o.getApps)().length&&(0,o.initializeApp)({credential:(0,o.cert)(c)}),(0,n.getFirestore)()),u={projects:l.collection("projects"),agencyLogs:l.collection("agency_logs"),researchReports:l.collection("research_reports"),blueprints:l.collection("blueprints"),buildTasks:l.collection("build_tasks"),issues:l.collection("issues"),logs:l.collection("logs")};e.s(["collections",0,u,"db",0,l]),r()}catch(e){r(e)}},!1),33958,e=>e.a(async(t,r)=>{try{var a,s=e.i(22734),o=e.i(14747),n=e.i(18608),i=e.i(87375),c=t([n,i]);[n,i]=c.then?(await c)():c;var l=((a={})[a.RESEARCH=1]="RESEARCH",a[a.ARCHITECT=2]="ARCHITECT",a[a.BUILD=3]="BUILD",a[a.OPTIMIZE=4]="OPTIMIZE",a[a.DEPLOY=5]="DEPLOY",a[a.COMPLETED=6]="COMPLETED",a);let v={1:"Research",2:"Architecture",3:"Build",4:"Optimize",5:"Deploy",6:"Completed"},E={1:"@researcher",2:"@architect",3:"@builder",4:"@improver",5:"@deployer",6:"none"},y=(0,o.join)(process.cwd(),".agent","knowledge","framework");function u(e){try{let t=(0,o.join)(y,e);return(0,s.readFileSync)(t,"utf-8")}catch(t){return console.error(`Failed to read knowledge file: ${e}`,t),""}}function p(e){let t=u("IDEA_TO_MVP_WORKFLOW_v2.md"),r={1:["Stage 1","RESEARCH","Intelligence Gathering"],2:["Stage 2","ARCHITECT","Blueprint"],3:["Stage 3","BUILD","Construction"],4:["Stage 4","OPTIMIZE","Polish"],5:["Stage 5","DEPLOY","Launch"],6:[]},a=r[e];if(!a.length)return"";let s="",o=t.split("\n"),n=!1,i=e+1;for(let e of o){let t=a.some(t=>e.toLowerCase().includes(t.toLowerCase())),o=i<=5&&r[i]?.some(t=>e.toLowerCase().includes(t.toLowerCase()));if(t&&(n=!0),o&&n)break;n&&(s+=e+"\n")}return s.trim()||`Requirements for Stage ${e} (${v[e]})`}async function d(e){let t=await n.collections.projects.doc(e).get();if(!t.exists)throw Error(`Project ${e} not found`);let r=t.data();return{id:t.id,currentStage:r?.currentStage||1,status:r?.status||"pending",idea:r?.idea||"",lastOutput:r?.lastOutput||null,createdAt:r?.createdAt,updatedAt:r?.updatedAt}}function g(e,t){let r=E[e],a=p(e);return({1:`
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
`,6:"Project completed. No further actions required."})[e]}async function m(e){try{let t=await d(e);if(t.currentStage>=6)return{success:!0,stage:6,prompt:"Project already completed"};let r=g(t.currentStage,{idea:t.idea,lastOutput:t.lastOutput});return await n.db.collection("agent_queue").add({projectId:e,stage:t.currentStage,stageName:v[t.currentStage],agent:E[t.currentStage],prompt:r,status:"pending",createdAt:i.Timestamp.now()}),await n.collections.projects.doc(e).update({status:"processing",updatedAt:i.Timestamp.now()}),{success:!0,stage:t.currentStage,prompt:r}}catch(r){let t=r instanceof Error?r.message:"Unknown error";return await n.db.collection("issues").add({projectId:e,type:"auto-pilot-error",message:t,createdAt:i.Timestamp.now()}),{success:!1,stage:1,prompt:"",error:t}}}async function f(e,t){let r=await d(e),a=Math.min(r.currentStage+1,6);return await n.collections.projects.doc(e).update({currentStage:a,lastOutput:t,status:6===a?"completed":"ready",updatedAt:i.Timestamp.now()}),{success:!0,nextStage:a}}async function h(e,t){await n.collections.projects.doc(e).update({status:"paused",pauseReason:t,updatedAt:i.Timestamp.now()}),await n.db.collection("issues").add({projectId:e,type:"workflow-paused",message:t,requiresUserInput:!0,createdAt:i.Timestamp.now()})}e.s(["Stage",()=>l,"StageAgents",0,E,"StageNames",0,v,"advanceStage",()=>f,"executeNextStage",()=>m,"generateStagePrompt",()=>g,"getProjectStatus",()=>d,"getStageRequirements",()=>p,"pauseWorkflow",()=>h,"readKnowledgeFile",()=>u]),r()}catch(e){r(e)}},!1),7269,e=>e.a(async(t,r)=>{try{var a=e.i(4543),s=e.i(33958),o=t([s]);async function n(e){try{let{projectId:t,action:r,output:o,reason:n}=await e.json();if(!t)return a.NextResponse.json({error:"projectId is required"},{status:400});switch(r){case"execute":let i=await (0,s.executeNextStage)(t);if(!i.success)return a.NextResponse.json({error:i.error,stage:i.stage},{status:500});return a.NextResponse.json({success:!0,stage:i.stage,stageName:s.StageNames[i.stage],message:`Stage ${i.stage} (${s.StageNames[i.stage]}) queued for execution`,prompt:i.prompt});case"advance":if(!o)return a.NextResponse.json({error:"output is required for advance action"},{status:400});let c=await (0,s.advanceStage)(t,o);return a.NextResponse.json({success:!0,nextStage:c.nextStage,stageName:s.StageNames[c.nextStage],message:`Advanced to Stage ${c.nextStage}`});case"pause":return await (0,s.pauseWorkflow)(t,n||"User requested pause"),a.NextResponse.json({success:!0,message:"Workflow paused"});default:let l=await (0,s.executeNextStage)(t);return a.NextResponse.json({success:l.success,stage:l.stage,stageName:s.StageNames[l.stage],error:l.error})}}catch(e){return console.error("Auto-pilot error:",e),a.NextResponse.json({error:e instanceof Error?e.message:"Auto-pilot execution failed"},{status:500})}}async function i(t){let{searchParams:r}=new URL(t.url),o=r.get("projectId");if(!o)return a.NextResponse.json({error:"projectId query parameter is required"},{status:400});try{let{getProjectStatus:t}=await e.A(15146),r=await t(o);return a.NextResponse.json({success:!0,project:{id:r.id,currentStage:r.currentStage,stageName:s.StageNames[r.currentStage],status:r.status,idea:r.idea}})}catch(e){return a.NextResponse.json({error:e instanceof Error?e.message:"Failed to get status"},{status:500})}}[s]=o.then?(await o)():o,e.s(["GET",()=>i,"POST",()=>n]),r()}catch(e){r(e)}},!1),85e3,e=>e.a(async(t,r)=>{try{var a=e.i(36320),s=e.i(92876),o=e.i(78501),n=e.i(18402),i=e.i(93092),c=e.i(19298),l=e.i(48413),u=e.i(72981),p=e.i(50508),d=e.i(83957),g=e.i(59530),m=e.i(11345),f=e.i(18787),h=e.i(94201),v=e.i(49440),E=e.i(93695);e.i(61407);var y=e.i(28654),w=e.i(7269),x=t([w]);[w]=x.then?(await x)():x;let S=new a.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/agency/auto-pilot/route",pathname:"/api/agency/auto-pilot",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Documents/Active Projects/ubuild/ubuild-portal/app/api/agency/auto-pilot/route.ts",nextConfigOutput:"",userland:w}),{workAsyncStorage:b,workUnitAsyncStorage:O,serverHooks:T}=S;function R(){return(0,o.patchFetch)({workAsyncStorage:b,workUnitAsyncStorage:O})}async function N(e,t,r){S.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let a="/api/agency/auto-pilot/route";a=a.replace(/\/index$/,"")||"/";let o=await S.prepare(e,t,{srcPage:a,multiZoneDraftMode:!1});if(!o)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:w,params:x,nextConfig:R,parsedUrl:N,isDraftMode:b,prerenderManifest:O,routerServerContext:T,isOnDemandRevalidate:A,revalidateOnlyGenerated:I,resolvedPathname:_,clientReferenceManifest:D,serverActionsManifest:j}=o,C=(0,l.normalizeAppPath)(a),P=!!(O.dynamicRoutes[C]||O.routes[_]),k=async()=>((null==T?void 0:T.render404)?await T.render404(e,t,N,!1):t.end("This page could not be found"),null);if(P&&!b){let e=!!O.routes[_],t=O.dynamicRoutes[C];if(t&&!1===t.fallback&&!e){if(R.experimental.adapterPath)return await k();throw new E.NoFallbackError}}let $=null;!P||S.isDev||b||($=_,$="/index"===$?"/":$);let V=!0===S.isDev||!P,q=P&&!V;j&&D&&(0,c.setManifestsSingleton)({page:a,clientReferenceManifest:D,serverActionsManifest:j});let U=e.method||"GET",L=(0,i.getTracer)(),F=L.getActiveScopeSpan(),M={params:x,prerenderManifest:O,renderOpts:{experimental:{authInterrupts:!!R.experimental.authInterrupts},cacheComponents:!!R.cacheComponents,supportsDynamicResponse:V,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:R.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,s)=>S.onRequestError(e,t,a,s,T)},sharedContext:{buildId:w}},B=new u.NodeNextRequest(e),K=new u.NodeNextResponse(t),Y=p.NextRequestAdapter.fromNodeNextRequest(B,(0,p.signalFromNodeResponse)(t));try{let o=async e=>S.handle(Y,M).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=L.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let s=r.get("next.route");if(s){let t=`${U} ${s}`;e.setAttributes({"next.route":s,"http.route":s,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${a}`)}),c=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var i,l;let u=async({previousCacheEntry:s})=>{try{if(!c&&A&&I&&!s)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await o(n);e.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&r.waitUntil&&(r.waitUntil(i),i=void 0);let l=M.renderOpts.collectedTags;if(!P)return await (0,m.sendResponse)(B,K,a,M.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(a.headers);l&&(t[v.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=v.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,s=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=v.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:s}}}}catch(t){throw(null==s?void 0:s.isStale)&&await S.onRequestError(e,t,{routerKind:"App Router",routePath:a,routeType:"route",revalidateReason:(0,g.getRevalidateReason)({isStaticGeneration:q,isOnDemandRevalidate:A})},!1,T),t}},p=await S.handleResponse({req:e,nextConfig:R,cacheKey:$,routeKind:s.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:O,isRoutePPREnabled:!1,isOnDemandRevalidate:A,revalidateOnlyGenerated:I,responseGenerator:u,waitUntil:r.waitUntil,isMinimalMode:c});if(!P)return null;if((null==p||null==(i=p.value)?void 0:i.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});c||t.setHeader("x-nextjs-cache",A?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),b&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let d=(0,f.fromNodeOutgoingHttpHeaders)(p.value.headers);return c&&P||d.delete(v.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||d.get("Cache-Control")||d.set("Cache-Control",(0,h.getCacheControlHeader)(p.cacheControl)),await (0,m.sendResponse)(B,K,new Response(p.value.body,{headers:d,status:p.value.status||200})),null};F?await l(F):await L.withPropagatedContext(e.headers,()=>L.trace(d.BaseServerSpan.handleRequest,{spanName:`${U} ${a}`,kind:i.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof E.NoFallbackError||await S.onRequestError(e,t,{routerKind:"App Router",routePath:C,routeType:"route",revalidateReason:(0,g.getRevalidateReason)({isStaticGeneration:q,isOnDemandRevalidate:A})},!1,T),P)throw t;return await (0,m.sendResponse)(B,K,new Response(null,{status:500})),null}}e.s(["handler",()=>N,"patchFetch",()=>R,"routeModule",()=>S,"serverHooks",()=>T,"workAsyncStorage",()=>b,"workUnitAsyncStorage",()=>O]),r()}catch(e){r(e)}},!1),15146,e=>{e.v(e=>Promise.resolve().then(()=>e(33958)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__5cd3cf81._.js.map