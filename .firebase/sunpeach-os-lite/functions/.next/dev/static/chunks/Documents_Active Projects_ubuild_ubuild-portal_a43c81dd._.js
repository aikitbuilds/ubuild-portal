(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PipelineOverview",
    ()=>PipelineOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
"use client";
;
;
;
function PipelineOverview({ data, totalMRR, activeBuilds, criticalIssues }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "col-span-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-lg font-semibold",
                    children: "Pipeline Overview"
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-lg bg-muted/50 border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground uppercase tracking-wide",
                                            children: "Total MRR"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-primary",
                                            children: [
                                                "$",
                                                totalMRR.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-lg bg-muted/50 border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground uppercase tracking-wide",
                                            children: "Active Builds"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 34,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold",
                                            children: activeBuilds
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-lg bg-muted/50 border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground uppercase tracking-wide",
                                            children: "Critical Issues"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-destructive",
                                            children: criticalIssues
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 39,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 h-[200px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: data,
                                    layout: "vertical",
                                    margin: {
                                        left: 20,
                                        right: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            type: "number",
                                            hide: true
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 47,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            dataKey: "stage",
                                            type: "category",
                                            axisLine: false,
                                            tickLine: false,
                                            tick: {
                                                fontSize: 12,
                                                fill: 'hsl(var(--muted-foreground))'
                                            },
                                            width: 90
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                backgroundColor: 'hsl(var(--card))',
                                                border: '1px solid hsl(var(--border))',
                                                borderRadius: '6px'
                                            },
                                            labelStyle: {
                                                color: 'hsl(var(--foreground))'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "count",
                                            radius: [
                                                0,
                                                4,
                                                4,
                                                0
                                            ],
                                            barSize: 24,
                                            children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: entry.fill
                                                }, `cell-${index}`, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_c = PipelineOverview;
var _c;
__turbopack_context__.k.register(_c, "PipelineOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VelocityChart",
    ()=>VelocityChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
"use client";
;
;
;
function VelocityChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "col-span-full lg:col-span-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg font-semibold",
                            children: "Build Velocity"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-muted-foreground",
                            children: "Agent Actions / Day (30d)"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[250px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: "100%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                            data: data,
                            margin: {
                                top: 10,
                                right: 10,
                                left: -20,
                                bottom: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "velocityGradient",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "5%",
                                                stopColor: "hsl(173, 80%, 40%)",
                                                stopOpacity: 0.3
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                                                lineNumber: 30,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "95%",
                                                stopColor: "hsl(173, 80%, 40%)",
                                                stopOpacity: 0
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                                                lineNumber: 31,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                                        lineNumber: 29,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "date",
                                    axisLine: false,
                                    tickLine: false,
                                    tick: {
                                        fontSize: 10,
                                        fill: 'hsl(var(--muted-foreground))'
                                    },
                                    interval: "preserveStartEnd"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    axisLine: false,
                                    tickLine: false,
                                    tick: {
                                        fontSize: 10,
                                        fill: 'hsl(var(--muted-foreground))'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                                    lineNumber: 41,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    contentStyle: {
                                        backgroundColor: 'hsl(var(--card))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '6px'
                                    },
                                    labelStyle: {
                                        color: 'hsl(var(--foreground))'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                    type: "monotone",
                                    dataKey: "actions",
                                    stroke: "hsl(173, 80%, 40%)",
                                    strokeWidth: 2,
                                    fill: "url(#velocityGradient)"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = VelocityChart;
var _c;
__turbopack_context__.k.register(_c, "VelocityChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemHealth",
    ()=>SystemHealth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
"use client";
;
;
;
function SystemHealth({ data, healthPercent }) {
    const total = data.reduce((sum, d)=>sum + d.count, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "lg:col-span-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-lg font-semibold",
                    children: "System Health"
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[200px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                            data: data,
                                            cx: "50%",
                                            cy: "50%",
                                            innerRadius: 50,
                                            outerRadius: 80,
                                            paddingAngle: 2,
                                            dataKey: "count",
                                            children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: entry.fill
                                                }, `cell-${index}`, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                backgroundColor: 'hsl(var(--card))',
                                                border: '1px solid hsl(var(--border))',
                                                borderRadius: '6px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                            lineNumber: 43,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold text-primary",
                                            children: [
                                                healthPercent,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                            lineNumber: 55,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Healthy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                            lineNumber: 56,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 mt-4",
                        children: data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full",
                                        style: {
                                            backgroundColor: item.fill
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                        lineNumber: 64,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: [
                                            item.severity,
                                            ": ",
                                            item.count
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, item.severity, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                                lineNumber: 63,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = SystemHealth;
var _c;
__turbopack_context__.k.register(_c, "SystemHealth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsTable",
    ()=>ProjectsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const stageBadgeVariants = {
    1: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    2: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    3: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    4: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    5: "bg-slate-500/10 text-slate-600 border-slate-500/20"
};
const statusStyles = {
    building: "text-emerald-500",
    paused: "text-amber-500",
    complete: "text-slate-400",
    error: "text-red-500"
};
function ProjectsTable({ projects }) {
    const sortedProjects = [
        ...projects
    ].sort((a, b)=>b.lastActionTime.getTime() - a.lastActionTime.getTime()).slice(0, 15);
    const formatTime = (date)=>{
        const mins = Math.round((Date.now() - date.getTime()) / 60000);
        if (mins < 60) return `${mins}m ago`;
        return `${Math.round(mins / 60)}h ago`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "lg:col-span-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg font-semibold",
                            children: "Active Projects"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "secondary",
                            className: "text-xs",
                            children: [
                                projects.length,
                                " Total"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-[280px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-border",
                        children: sortedProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/project/${project.id}`,
                                className: "block px-4 py-3 hover:bg-muted/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-sm truncate max-w-[120px]",
                                                children: project.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                                                lineNumber: 58,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: `text-[10px] px-1.5 py-0 ${stageBadgeVariants[project.stage]}`,
                                                children: project.stageName
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                                                lineNumber: 59,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                                        lineNumber: 57,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate max-w-[100px]",
                                                children: project.clientName
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                                                lineNumber: 67,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: statusStyles[project.status],
                                                children: project.status === "building" ? "● Building" : project.status
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                                                lineNumber: 68,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground mt-1 truncate",
                                        children: [
                                            project.lastAction,
                                            " • ",
                                            formatTime(project.lastActionTime)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                                        lineNumber: 72,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                                lineNumber: 52,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_c = ProjectsTable;
var _c;
__turbopack_context__.k.register(_c, "ProjectsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildCoPilot",
    ()=>BuildCoPilot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function BuildCoPilot({ projectId, currentStage }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: "agent",
            content: `System Online. I am analyzing Project: ${projectId}. How can I assist with Stage ${currentStage}?`
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSend = async ()=>{
        if (!input.trim()) return;
        const userMsg = input;
        setMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    content: userMsg
                }
            ]);
        setInput("");
        setIsLoading(true);
        try {
            const res = await fetch("/api/agency/chat/private", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMsg,
                    projectId,
                    currentStage
                })
            });
            const data = await res.json();
            if (data.response) {
                setMessages((prev)=>[
                        ...prev,
                        {
                            role: "agent",
                            content: data.response
                        }
                    ]);
            } else {
                setMessages((prev)=>[
                        ...prev,
                        {
                            role: "agent",
                            content: "Error: Protocol Failure."
                        }
                    ]);
            }
        } catch (err) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "agent",
                        content: "Connection Lost."
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "h-[400px] flex flex-col border-slate-300 dark:border-slate-700 shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "py-3 px-4 border-b bg-slate-50/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                    className: "h-4 w-4 text-emerald-600"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-mono font-bold text-slate-700",
                                    children: "Build Co-Pilot"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200",
                            children: "Active: @architect"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 p-0 overflow-hidden relative bg-slate-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "h-full p-4 font-mono text-xs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1 max-w-[90%]", msg.role === "user" ? "ml-auto items-end" : "items-start"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase opacity-50 text-slate-400",
                                                children: msg.role === "user" ? "USER" : "SYSTEM"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                                lineNumber: 83,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 rounded-sm border", msg.role === "user" ? "bg-slate-800 border-slate-700 text-slate-200" : "bg-emerald-950/30 border-emerald-900/50 text-emerald-400"),
                                                children: msg.content
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                                lineNumber: 86,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this)),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-emerald-500 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                            lineNumber: 100,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Processing Directive..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                            lineNumber: 101,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 bg-slate-50 border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        handleSend();
                    },
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: input,
                            onChange: (e)=>setInput(e.target.value),
                            className: "h-8 text-xs font-mono border-slate-300 focus-visible:ring-emerald-500",
                            placeholder: "Input command...",
                            disabled: isLoading
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            size: "icon",
                            className: "h-8 w-8 bg-slate-900 hover:bg-slate-800",
                            disabled: isLoading,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
_s(BuildCoPilot, "O4Iy+mXgPJ/b1DKdjzwV7BcZOkA=");
_c = BuildCoPilot;
var _c;
__turbopack_context__.k.register(_c, "BuildCoPilot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/simulation/agency-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Agency Simulation Engine
// Generates mock data for 20 clients and 40 projects across 5 stages
__turbopack_context__.s([
    "generateAgencyMetrics",
    ()=>generateAgencyMetrics,
    "generateClients",
    ()=>generateClients,
    "generateIssueSeverity",
    ()=>generateIssueSeverity,
    "generateProjects",
    ()=>generateProjects,
    "generateVelocityData",
    ()=>generateVelocityData,
    "useAgencyData",
    ()=>useAgencyData
]);
const CLIENT_NAMES = [
    "Acme SaaS",
    "FinTech Flow",
    "HealthSync Pro",
    "EduLearn AI",
    "RetailEdge",
    "LogiTrack",
    "HomeNest",
    "FoodieHub",
    "TravelMate",
    "FitLife Pro",
    "MediaStream",
    "SecureVault",
    "GreenEnergy",
    "AutoDrive",
    "PetCare Plus",
    "StyleBox",
    "WorkFlow AI",
    "GameForge",
    "MusicMix",
    "CloudNine"
];
const INDUSTRIES = [
    "SaaS",
    "FinTech",
    "HealthTech",
    "EdTech",
    "Retail",
    "Logistics",
    "PropTech",
    "FoodTech",
    "Travel",
    "Fitness",
    "Media",
    "Security",
    "Energy",
    "Automotive",
    "PetTech",
    "Fashion",
    "Productivity",
    "Gaming",
    "Entertainment",
    "Cloud"
];
const PROJECT_PREFIXES = [
    "Portal",
    "Dashboard",
    "App",
    "Platform",
    "System",
    "Hub",
    "Engine",
    "Suite"
];
const STAGE_NAMES = [
    "Research",
    "Architecture",
    "Building",
    "Optimization",
    "Deployed"
];
const LAST_ACTIONS = [
    "Schema migration complete",
    "API endpoint created",
    "Component library updated",
    "Database seeded",
    "Auth flow implemented",
    "Tests passing",
    "Build optimization",
    "Security audit",
    "Performance tuning",
    "Deploy initiated"
];
function randomDate(daysAgo) {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
    return date;
}
function randomMinutesAgo() {
    const date = new Date();
    date.setMinutes(date.getMinutes() - Math.floor(Math.random() * 120));
    return date;
}
function generateClients(count = 20) {
    return Array.from({
        length: count
    }, (_, i)=>({
            id: `client_${i + 1}`,
            name: CLIENT_NAMES[i] || `Client ${i + 1}`,
            industry: INDUSTRIES[i] || "Technology",
            mrr: Math.floor(Math.random() * 5000) + 500,
            joinedDate: randomDate(365)
        }));
}
function generateProjects(clients, count = 40) {
    // Distribution: 5 Research, 10 Architecture, 15 Building, 5 Optimization, 5 Deployed
    const stageDistribution = [
        5,
        10,
        15,
        5,
        5
    ];
    const projects = [];
    let projectIndex = 0;
    stageDistribution.forEach((stageCount, stageIndex)=>{
        for(let i = 0; i < stageCount; i++){
            const client = clients[projectIndex % clients.length];
            const prefix = PROJECT_PREFIXES[Math.floor(Math.random() * PROJECT_PREFIXES.length)];
            const stage = stageIndex + 1;
            let status = "building";
            if (stage === 5) status = "complete";
            else if (Math.random() < 0.1) status = "paused";
            else if (Math.random() < 0.05) status = "error";
            const totalTasks = 20 + Math.floor(Math.random() * 30);
            const stageProgress = stage / 5;
            const tasksCompleted = Math.floor(totalTasks * stageProgress * (0.7 + Math.random() * 0.3));
            projects.push({
                id: `proj_${projectIndex + 1}`,
                name: `${client.name.split(" ")[0]} ${prefix}`,
                clientId: client.id,
                clientName: client.name,
                stage,
                stageName: STAGE_NAMES[stageIndex],
                status,
                lastAction: LAST_ACTIONS[Math.floor(Math.random() * LAST_ACTIONS.length)],
                lastActionTime: randomMinutesAgo(),
                tasksCompleted,
                totalTasks
            });
            projectIndex++;
        }
    });
    return projects;
}
function generateVelocityData(days = 30) {
    const data = [];
    const baseActions = 50;
    for(let i = days - 1; i >= 0; i--){
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dayOfWeek = date.getDay();
        const weekendFactor = dayOfWeek === 0 || dayOfWeek === 6 ? 0.3 : 1;
        const trendFactor = 1 + (days - i) * 0.02; // Increasing trend
        const randomFactor = 0.7 + Math.random() * 0.6;
        data.push({
            date: date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
            }),
            actions: Math.floor(baseActions * weekendFactor * trendFactor * randomFactor)
        });
    }
    return data;
}
function generateIssueSeverity() {
    return [
        {
            severity: "Critical",
            count: 3,
            fill: "hsl(0, 84%, 60%)"
        },
        {
            severity: "High",
            count: 8,
            fill: "hsl(25, 95%, 53%)"
        },
        {
            severity: "Medium",
            count: 15,
            fill: "hsl(48, 96%, 53%)"
        },
        {
            severity: "Low",
            count: 24,
            fill: "hsl(142, 76%, 36%)"
        }
    ];
}
function generateAgencyMetrics(clients, projects) {
    const activeBuilds = projects.filter((p)=>p.status === "building" && p.stage === 3).length;
    const criticalIssues = 3; // From issue severity
    const totalMRR = clients.reduce((sum, c)=>sum + c.mrr, 0);
    const issueTotal = 50;
    const systemHealth = Math.round((issueTotal - criticalIssues * 5) / issueTotal * 100);
    return {
        totalClients: clients.length,
        totalProjects: projects.length,
        activeBuilds,
        criticalIssues,
        totalMRR,
        systemHealth: Math.min(systemHealth, 97)
    };
}
function useAgencyData(useDemoData = true) {
    if (!useDemoData) {
        // Return empty/placeholder for Firebase integration
        return {
            clients: [],
            projects: [],
            metrics: {
                totalClients: 0,
                totalProjects: 0,
                activeBuilds: 0,
                criticalIssues: 0,
                totalMRR: 0,
                systemHealth: 0
            },
            velocityData: [],
            issueSeverity: [],
            pipelineData: []
        };
    }
    const clients = generateClients(20);
    const projects = generateProjects(clients, 40);
    const metrics = generateAgencyMetrics(clients, projects);
    const velocityData = generateVelocityData(30);
    const issueSeverity = generateIssueSeverity();
    // Pipeline data for funnel/bar chart
    const pipelineData = STAGE_NAMES.map((name, i)=>({
            stage: name,
            count: projects.filter((p)=>p.stage === i + 1).length,
            fill: `hsl(${173 - i * 20}, 80%, ${40 + i * 5}%)`
        }));
    return {
        clients,
        projects,
        metrics,
        velocityData,
        issueSeverity,
        pipelineData
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$analytics$2f$PipelineOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/PipelineOverview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$analytics$2f$VelocityChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/VelocityChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$analytics$2f$SystemHealth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/SystemHealth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$analytics$2f$ProjectsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/analytics/ProjectsTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$agency$2f$BuildCoPilot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/BuildCoPilot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$simulation$2f$agency$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/simulation/agency-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function DashboardHome() {
    _s();
    const { metrics, pipelineData, velocityData, issueSeverity, projects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$simulation$2f$agency$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgencyData"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between pb-4 border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold tracking-tight",
                                children: "Agency Command Center"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm mt-1",
                                children: [
                                    "Real-time overview of ",
                                    metrics.totalClients,
                                    " clients and ",
                                    metrics.totalProjects,
                                    " active projects."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        className: "gap-1.5 py-1.5 px-3 bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium",
                                children: "Demo Mode"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$analytics$2f$PipelineOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PipelineOverview"], {
                        data: pipelineData,
                        totalMRR: metrics.totalMRR,
                        activeBuilds: metrics.activeBuilds,
                        criticalIssues: metrics.criticalIssues
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$analytics$2f$VelocityChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VelocityChart"], {
                        data: velocityData
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$agency$2f$BuildCoPilot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildCoPilot"], {
                        projectId: "agency-overview",
                        currentStage: "All"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$analytics$2f$SystemHealth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemHealth"], {
                        data: issueSeverity,
                        healthPercent: metrics.systemHealth
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$analytics$2f$ProjectsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectsTable"], {
                            projects: projects
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/dashboard/page.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_s(DashboardHome, "gT6UJsZVf6jTWD60LwD3zdYvrto=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$simulation$2f$agency$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgencyData"]
    ];
});
_c = DashboardHome;
var _c;
__turbopack_context__.k.register(_c, "DashboardHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Active%20Projects_ubuild_ubuild-portal_a43c81dd._.js.map