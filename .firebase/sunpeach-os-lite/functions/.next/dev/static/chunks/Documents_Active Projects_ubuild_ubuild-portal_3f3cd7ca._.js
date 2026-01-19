(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
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
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalesAssistant",
    ()=>SalesAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
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
function SalesAssistant() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: "agent",
            content: "Hi! I'm the uBuild Sales Agent. Ask me about our 5-Stage Construction Engine!"
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
            const res = await fetch("/api/agency/chat/public", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMsg
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
                            content: "I encountered an error. Please try again."
                        }
                    ]);
            }
        } catch (err) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "agent",
                        content: "Connection failed."
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>setIsOpen(true),
                className: "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg border-2 border-white z-50 animate-bounce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                    lineNumber: 60,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "fixed bottom-6 right-6 w-80 sm:w-96 shadow-xl border-primary z-50 animate-in slide-in-from-bottom-10 fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "bg-primary text-primary-foreground p-4 rounded-t-lg flex flex-row items-center justify-between space-y-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/20 p-1.5 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                            lineNumber: 70,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                        lineNumber: 69,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-bold",
                                                children: "uBuild Sales Agent"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                                lineNumber: 73,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] opacity-80",
                                                children: "Online • AI Powered"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                                lineNumber: 74,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-6 w-6 text-white hover:bg-white/20",
                                onClick: ()=>setIsOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                lineNumber: 77,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "h-72 p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm", msg.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"),
                                            children: msg.content
                                        }, i, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                            lineNumber: 85,
                                            columnNumber: 37
                                        }, this)),
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-muted w-max rounded-lg px-3 py-2 text-xs italic text-muted-foreground animate-pulse",
                                        children: "Typing..."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                        lineNumber: 98,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                lineNumber: 83,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                            lineNumber: 82,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                        lineNumber: 81,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                        className: "p-3 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>{
                                e.preventDefault();
                                handleSend();
                            },
                            className: "flex w-full items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Ask about pricing...",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    className: "flex-1 h-9 text-xs"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                    lineNumber: 113,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    size: "sm",
                                    className: "h-9 px-3",
                                    disabled: isLoading,
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx",
                lineNumber: 66,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(SalesAssistant, "6U0JV1fwTwdk1nClxicz4+/CK0U=");
_c = SalesAssistant;
var _c;
__turbopack_context__.k.register(_c, "SalesAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioSection",
    ()=>PortfolioSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserMinus$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/user-minus.js [app-client] (ecmascript) <export default as UserMinus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
"use client";
;
;
;
;
const portfolioData = [
    {
        metric: "Lead Response Time",
        before: "24-48 hours",
        after: "< 2 minutes",
        improvement: "99.8%",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    },
    {
        metric: "Leads Qualified/Month",
        before: "80-120",
        after: "250-350",
        improvement: "200-300%",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        metric: "Sales Team Size",
        before: "5-8 people",
        after: "1-2 people",
        improvement: "75-80% reduction",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserMinus$3e$__["UserMinus"]
    },
    {
        metric: "Content Pieces/Month",
        before: "12-20",
        after: "180-250",
        improvement: "900-1200%",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        metric: "Email Processing Time",
        before: "2-3 hours/day",
        after: "15 min/day",
        improvement: "85%",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"]
    },
    {
        metric: "Sales Cycle Duration",
        before: "45-60 days",
        after: "15-20 days",
        improvement: "65% faster",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"]
    },
    {
        metric: "Win Rate",
        before: "35-45%",
        after: "55-70%",
        improvement: "+25-30%",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    },
    {
        metric: "Account Churn Rate",
        before: "6-8%",
        after: "2-3%",
        improvement: "65% reduction",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
    }
];
const testimonials = [
    {
        name: "Sarah Chen",
        role: "CEO, TechScale Inc",
        quote: "Response time went from 24 hours to instant. We closed 3 deals in the first week.",
        results: "+192% qualified leads, 60% faster sales cycle",
        industry: "B2B SaaS"
    },
    {
        name: "Marcus Johnson",
        role: "Founder, GrowthLabs",
        quote: "I went from managing a team of 5 to 1 coordinator. The AI handles everything.",
        results: "80% payroll reduction, +1400% content output",
        industry: "Digital Agency"
    },
    {
        name: "Elena Rodriguez",
        role: "VP Sales, DataFlow",
        quote: "We went from reactive to proactive. AI identified 12 churn risks we would have missed.",
        results: "74% churn reduction, 35% improvement in retention",
        industry: "Data Analytics"
    }
];
function PortfolioSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        className: "w-full py-20 bg-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4 bg-primary/10 text-primary border-primary/30",
                            children: "Real Results"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-white mb-4",
                            children: "Before & After uBuild"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-300 max-w-2xl mx-auto",
                            children: "See the transformational results our clients achieve within 30 days of deployment."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20",
                    children: portfolioData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-slate-800/50 border-slate-700 hover:border-primary/50 transition-all duration-300 group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: "h-5 w-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 116,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-white text-sm",
                                                children: item.metric
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Before:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-400 line-through",
                                                        children: item.before
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 123,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "After:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-400 font-semibold",
                                                        children: item.after
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 127,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 border-t border-slate-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-primary font-bold",
                                                    children: [
                                                        "↑ ",
                                                        item.improvement,
                                                        " Improvement"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 131,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 122,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                lineNumber: 114,
                                columnNumber: 29
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                            lineNumber: 110,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-white mb-2",
                            children: "Client Success Stories"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400",
                            children: "Verified results from companies using uBuild"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-slate-800 border-slate-700 hover:border-primary/30 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 mb-3",
                                                children: [
                                                    ...Array(5)
                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-yellow-400",
                                                        children: "★"
                                                    }, i, false, {
                                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 156,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-300 italic",
                                                children: [
                                                    '"',
                                                    testimonial.quote,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 161,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 155,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4 border-t border-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-white",
                                                children: testimonial.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 165,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400",
                                                children: testimonial.role
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 166,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "secondary",
                                                className: "mt-3 text-xs bg-slate-700 text-slate-300",
                                                children: testimonial.industry
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                                lineNumber: 167,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-primary",
                                            children: testimonial.results
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                            lineNumber: 176,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 175,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                lineNumber: 154,
                                columnNumber: 29
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                            lineNumber: 150,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-cyan-900/20 border border-primary/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-4 gap-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-bold text-white",
                                        children: "$110k+"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 187,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-300",
                                        children: "Annual Savings"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 188,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                lineNumber: 186,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-bold text-white",
                                        children: "221%"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 191,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-300",
                                        children: "Average ROI (Year 1)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                lineNumber: 190,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-bold text-white",
                                        children: "4 weeks"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 195,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-300",
                                        children: "Time to Value"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                lineNumber: 194,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-bold text-white",
                                        children: "50+"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 199,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-300",
                                        children: "Companies Deployed"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                        lineNumber: 200,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                                lineNumber: 198,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                        lineNumber: 185,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
                    lineNumber: 184,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
            lineNumber: 93,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
_c = PortfolioSection;
var _c;
__turbopack_context__.k.register(_c, "PortfolioSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "LogoAnimated",
    ()=>LogoAnimated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
const sizes = {
    sm: {
        icon: 24,
        text: "text-lg"
    },
    md: {
        icon: 32,
        text: "text-xl"
    },
    lg: {
        icon: 48,
        text: "text-2xl"
    },
    xl: {
        icon: 64,
        text: "text-3xl"
    }
};
function Logo({ size = "md", variant = "full", className }) {
    const { icon, text } = sizes[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: icon,
                height: icon,
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "8",
                        width: "12",
                        height: "24",
                        rx: "2",
                        fill: "url(#teal-gradient)",
                        className: "opacity-90"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "30",
                        y: "8",
                        width: "12",
                        height: "24",
                        rx: "2",
                        fill: "url(#teal-gradient)",
                        className: "opacity-90"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "28",
                        width: "36",
                        height: "12",
                        rx: "2",
                        fill: "url(#cyan-gradient)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "teal-gradient",
                                x1: "0%",
                                y1: "0%",
                                x2: "0%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#14b8a6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#0d9488"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                        lineNumber: 68,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "cyan-gradient",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#0d9488"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#22d3ee"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            variant === "full" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-white tracking-tight", text),
                children: "uBuild"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                lineNumber: 79,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = Logo;
function LogoAnimated({ size = "lg", className }) {
    const { icon, text } = sizes[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: icon,
                height: icon,
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "8",
                        width: "12",
                        height: "24",
                        rx: "2",
                        fill: "url(#teal-gradient-anim)",
                        className: "animate-pulse",
                        style: {
                            animationDelay: "0ms"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "30",
                        y: "8",
                        width: "12",
                        height: "24",
                        rx: "2",
                        fill: "url(#teal-gradient-anim)",
                        className: "animate-pulse",
                        style: {
                            animationDelay: "150ms"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "28",
                        width: "36",
                        height: "12",
                        rx: "2",
                        fill: "url(#cyan-gradient-anim)",
                        className: "animate-pulse",
                        style: {
                            animationDelay: "300ms"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "teal-gradient-anim",
                                x1: "0%",
                                y1: "0%",
                                x2: "0%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#14b8a6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#0d9488"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "cyan-gradient-anim",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#0d9488"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#22d3ee"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-white tracking-tight leading-none", text),
                        children: "uBuild"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400 tracking-widest uppercase",
                        children: "Agentic AI Agency"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
_c1 = LogoAnimated;
var _c, _c1;
__turbopack_context__.k.register(_c, "Logo");
__turbopack_context__.k.register(_c1, "LogoAnimated");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoShowcase",
    ()=>VideoShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function VideoShowcase({ className, videoUrl }) {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative mx-auto max-w-4xl", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-700 rounded-t-xl px-4 py-2 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 rounded-full bg-slate-500"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900 border-x-8 border-b-8 border-slate-700 rounded-b-xl overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-video",
                            children: [
                                isPlaying && videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: videoUrl,
                                    autoPlay: true,
                                    muted: isMuted,
                                    loop: true,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                    lineNumber: 38,
                                    columnNumber: 29
                                }, this) : /* Placeholder with animated gradient */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-20",
                                            children: [
                                                ...Array(8)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full",
                                                    style: {
                                                        top: `${12 + i * 12}%`
                                                    },
                                                    initial: {
                                                        x: "-100%"
                                                    },
                                                    animate: {
                                                        x: "100%"
                                                    },
                                                    transition: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        delay: i * 0.3,
                                                        ease: "linear"
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                            lineNumber: 49,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-6 p-4 rounded-lg bg-slate-950/80 border border-slate-700 font-mono text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full bg-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full bg-yellow-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full bg-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-slate-500",
                                                            children: "uBuild Terminal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        staggerChildren: 0.5
                                                    },
                                                    className: "space-y-2 text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 44
                                                                }, this),
                                                                " Initializing Research Engine..."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 44
                                                                }, this),
                                                                " Market Analysis: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-400",
                                                                    children: "Complete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 101
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 44
                                                                }, this),
                                                                " Architecture Design: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-400",
                                                                    children: "Complete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 105
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 44
                                                                }, this),
                                                                " Deploying 6 AI Agents..."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-amber-400 animate-pulse",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 44
                                                                }, this),
                                                                " Building MVP: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-amber-400",
                                                                    children: "47%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 114
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center bg-slate-950/40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                onClick: ()=>setIsPlaying(true),
                                                className: "group h-20 w-20 rounded-full bg-primary/90 hover:bg-primary hover:scale-110 transition-all shadow-lg shadow-primary/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "h-8 w-8 text-white fill-white ml-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                                lineNumber: 91,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                            lineNumber: 90,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this),
                                !isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 right-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold text-white mb-1",
                                            children: "Watch: How an Idea becomes an MVP in 4 hours"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400",
                                            children: "See the complete workflow from research to deployment"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, this),
                                isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 right-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "icon",
                                        variant: "ghost",
                                        onClick: ()=>setIsMuted(!isMuted),
                                        className: "bg-slate-900/60 hover:bg-slate-900",
                                        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                            className: "h-4 w-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                            lineNumber: 124,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            className: "h-4 w-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                            lineNumber: 126,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                        lineNumber: 117,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-24 h-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-40 h-2 bg-slate-700 rounded-full -mt-1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-sm text-slate-500 mt-6",
                children: "Click play to see uBuild in action"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(VideoShowcase, "s0IKlxAKyXPS+QyoeEgrYEr8CFY=");
_c = VideoShowcase;
var _c;
__turbopack_context__.k.register(_c, "VideoShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechStack",
    ()=>TechStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const technologies = [
    {
        name: "Next.js",
        category: "Frontend",
        color: "#000000",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-8 h-8",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                lineNumber: 18,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Firebase",
        category: "Backend",
        color: "#FFCA28",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-8 h-8",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Gemini AI",
        category: "Intelligence",
        color: "#8E75FF",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-8 h-8",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 0L2.4 5.4v13.2L12 24l9.6-5.4V5.4L12 0zm0 2.4l7.2 4.05v8.1L12 18.6l-7.2-4.05v-8.1L12 2.4z"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Tailwind",
        category: "Styling",
        color: "#06B6D4",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-8 h-8",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                lineNumber: 48,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
            lineNumber: 47,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Vercel",
        category: "Deployment",
        color: "#000000",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-8 h-8",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 22.525H0l12-21.05 12 21.05z"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                lineNumber: 58,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
            lineNumber: 57,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "TypeScript",
        category: "Language",
        color: "#3178C6",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-8 h-8",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                lineNumber: 68,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
            lineNumber: 67,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function TechStack({ className, animated = true }) {
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    const Container = animated ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div : "div";
    const Item = animated ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", className),
        ...animated && {
            variants: containerVariants,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true
            }
        },
        children: technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                className: "flex flex-col items-center justify-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-primary/50 transition-all group",
                ...animated && {
                    variants: itemVariants
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 text-slate-400 group-hover:text-primary transition-colors",
                        style: {
                            color: tech.color
                        },
                        children: tech.icon
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-white text-sm",
                        children: tech.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                        lineNumber: 115,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500",
                        children: tech.category
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                    }, this)
                ]
            }, tech.name, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
                lineNumber: 104,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx",
        lineNumber: 94,
        columnNumber: 9
    }, this);
}
_c = TechStack;
var _c;
__turbopack_context__.k.register(_c, "TechStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoiChart",
    ()=>RoiChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
"use client";
;
;
;
;
;
;
const roiData = [
    {
        metric: "Lead Response",
        before: 24,
        after: 0.03,
        beforeLabel: "24 hours",
        afterLabel: "2 minutes",
        improvement: "99.8%",
        unit: "hours"
    },
    {
        metric: "Content Output",
        before: 12,
        after: 180,
        beforeLabel: "12 pieces",
        afterLabel: "180 pieces",
        improvement: "1400%",
        unit: "pieces/month"
    },
    {
        metric: "Sales Team Size",
        before: 6,
        after: 1.5,
        beforeLabel: "5-8 people",
        afterLabel: "1-2 people",
        improvement: "75%",
        unit: "people"
    },
    {
        metric: "Sales Cycle",
        before: 52,
        after: 17,
        beforeLabel: "45-60 days",
        afterLabel: "15-20 days",
        improvement: "65%",
        unit: "days"
    }
];
// Transform data for comparative bar chart
const chartData = roiData.map((item)=>({
        name: item.metric,
        before: item.metric === "Content Output" ? item.before : item.before,
        after: item.metric === "Content Output" ? item.after : item.after,
        beforeLabel: item.beforeLabel,
        afterLabel: item.afterLabel,
        improvement: item.improvement
    }));
function RoiChart({ className, showCard = true }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true
                },
                variants: {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                },
                children: roiData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: {
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        },
                        className: "p-4 rounded-lg bg-slate-800 border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mb-2",
                                children: item.metric
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500",
                                                children: "Before:"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                                lineNumber: 92,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-red-400 line-through",
                                                children: item.beforeLabel
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                                lineNumber: 93,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                        lineNumber: 91,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500",
                                                children: "After:"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                                lineNumber: 96,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-emerald-400 font-semibold",
                                                children: item.afterLabel
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                                lineNumber: 97,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                        lineNumber: 95,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "mt-2 w-full justify-center bg-primary/10 text-primary border-primary/30 text-xs",
                                children: [
                                    "↑ ",
                                    item.improvement
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this)
                        ]
                    }, item.metric, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                        lineNumber: 81,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[300px] w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: chartData,
                        layout: "vertical",
                        margin: {
                            top: 20,
                            right: 30,
                            left: 80,
                            bottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                type: "number",
                                hide: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                dataKey: "name",
                                type: "category",
                                axisLine: false,
                                tickLine: false,
                                tick: {
                                    fill: '#94a3b8',
                                    fontSize: 12
                                },
                                width: 80
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 119,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: '#0f172a',
                                    border: '1px solid #334155',
                                    borderRadius: '8px'
                                },
                                formatter: (value, name, props)=>{
                                    const label = name === 'before' ? props.payload.beforeLabel : props.payload.afterLabel;
                                    return [
                                        label,
                                        name === 'before' ? 'Before' : 'After'
                                    ];
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 127,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "before",
                                fill: "#ef4444",
                                radius: [
                                    0,
                                    4,
                                    4,
                                    0
                                ],
                                barSize: 20
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 140,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "after",
                                fill: "#14b8a6",
                                radius: [
                                    0,
                                    4,
                                    4,
                                    0
                                ],
                                barSize: 20
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                        lineNumber: 113,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-8 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded bg-red-500/60"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: "Before uBuild"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded bg-primary"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 163,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: "After uBuild"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
    if (!showCard) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: content
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
        lineNumber: 170,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `bg-slate-900 border-slate-700 ${className || ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg text-white flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                                    lineNumber: 177,
                                    columnNumber: 25
                                }, this),
                                "ROI Comparison"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
                            children: "Verified Results"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                            lineNumber: 180,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: content
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
                lineNumber: 185,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx",
        lineNumber: 173,
        columnNumber: 9
    }, this);
}
_c = RoiChart;
var _c;
__turbopack_context__.k.register(_c, "RoiChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComplexityMap",
    ()=>ComplexityMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ComplexityMap({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid md:grid-cols-2 gap-8", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: true
                },
                className: "relative p-6 rounded-xl bg-slate-800/50 border border-red-500/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-red-400 mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this),
                            " Traditional Development"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 200 150",
                        className: "w-full h-auto",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M20 20 Q60 80 40 120 T80 90 Q120 40 100 100 T140 60",
                                stroke: "#ef4444",
                                strokeWidth: "2",
                                fill: "none",
                                strokeOpacity: "0.6",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1.5,
                                    delay: 0.2
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M30 120 Q90 30 60 80 T120 40 Q180 100 150 60",
                                stroke: "#f97316",
                                strokeWidth: "2",
                                fill: "none",
                                strokeOpacity: "0.5",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1.5,
                                    delay: 0.4
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M180 20 Q100 100 140 40 T60 110 Q20 60 80 30",
                                stroke: "#fbbf24",
                                strokeWidth: "2",
                                fill: "none",
                                strokeOpacity: "0.5",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1.5,
                                    delay: 0.6
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M10 80 Q50 20 90 90 T150 30 Q180 80 160 120",
                                stroke: "#dc2626",
                                strokeWidth: "2",
                                fill: "none",
                                strokeOpacity: "0.4",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1.5,
                                    delay: 0.8
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            [
                                {
                                    x: 30,
                                    y: 40
                                },
                                {
                                    x: 80,
                                    y: 100
                                },
                                {
                                    x: 120,
                                    y: 30
                                },
                                {
                                    x: 60,
                                    y: 70
                                },
                                {
                                    x: 150,
                                    y: 80
                                },
                                {
                                    x: 100,
                                    y: 120
                                },
                                {
                                    x: 170,
                                    y: 50
                                }
                            ].map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                    cx: pos.x,
                                    cy: pos.y,
                                    r: "6",
                                    fill: "#ef4444",
                                    fillOpacity: "0.6",
                                    initial: {
                                        scale: 0
                                    },
                                    whileInView: {
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.3,
                                        delay: 1 + i * 0.1
                                    }
                                }, i, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 space-y-2 text-sm text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400",
                                        children: "✗"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this),
                                    " Multiple vendors to manage"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400",
                                        children: "✗"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, this),
                                    " Disconnected tools"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400",
                                        children: "✗"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 104,
                                        columnNumber: 25
                                    }, this),
                                    " Manual coordination"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 103,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400",
                                        children: "✗"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this),
                                    " 3-6 month timelines"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: 20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: true
                },
                className: "relative p-6 rounded-xl bg-slate-800/50 border border-primary/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-primary mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "✨"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this),
                            " uBuild Intelligence"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 200 150",
                        className: "w-full h-auto",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "teal-glow",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#14b8a6",
                                                stopOpacity: "0.8"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                                lineNumber: 132,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#22d3ee",
                                                stopOpacity: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                                lineNumber: 133,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#14b8a6",
                                                stopOpacity: "0.8"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                                lineNumber: 134,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 131,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                        id: "glow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                stdDeviation: "2",
                                                result: "coloredBlur"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                        in: "coloredBlur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                        in: "SourceGraphic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 130,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M30 75 L60 75 L90 45 L130 45 L170 75",
                                stroke: "url(#teal-glow)",
                                strokeWidth: "3",
                                fill: "none",
                                filter: "url(#glow)",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.2
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M30 75 L60 75 L90 105 L130 105 L170 75",
                                stroke: "url(#teal-glow)",
                                strokeWidth: "3",
                                fill: "none",
                                filter: "url(#glow)",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.4
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M60 75 L90 75 L130 75 L170 75",
                                stroke: "url(#teal-glow)",
                                strokeWidth: "3",
                                fill: "none",
                                filter: "url(#glow)",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.6
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, this),
                            [
                                {
                                    x: 30,
                                    y: 75,
                                    label: "Idea"
                                },
                                {
                                    x: 60,
                                    y: 75,
                                    label: ""
                                },
                                {
                                    x: 90,
                                    y: 45,
                                    label: ""
                                },
                                {
                                    x: 90,
                                    y: 75,
                                    label: ""
                                },
                                {
                                    x: 90,
                                    y: 105,
                                    label: ""
                                },
                                {
                                    x: 130,
                                    y: 45,
                                    label: ""
                                },
                                {
                                    x: 130,
                                    y: 75,
                                    label: ""
                                },
                                {
                                    x: 130,
                                    y: 105,
                                    label: ""
                                },
                                {
                                    x: 170,
                                    y: 75,
                                    label: "MVP"
                                }
                            ].map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                            cx: pos.x,
                                            cy: pos.y,
                                            r: "8",
                                            fill: "#14b8a6",
                                            filter: "url(#glow)",
                                            initial: {
                                                scale: 0
                                            },
                                            whileInView: {
                                                scale: 1
                                            },
                                            transition: {
                                                duration: 0.3,
                                                delay: 1 + i * 0.08
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, this),
                                        pos.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                            x: pos.x,
                                            y: pos.y + 25,
                                            textAnchor: "middle",
                                            fill: "#14b8a6",
                                            fontSize: "10",
                                            initial: {
                                                opacity: 0
                                            },
                                            whileInView: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.3,
                                                delay: 1.5
                                            },
                                            children: pos.label
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                            lineNumber: 201,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                    lineNumber: 189,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 space-y-2 text-sm text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 220,
                                        columnNumber: 25
                                    }, this),
                                    " Single unified system"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this),
                                    " 6 coordinated AI agents"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this),
                                    " Automated orchestration"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 225,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                        lineNumber: 229,
                                        columnNumber: 25
                                    }, this),
                                    " 4-week deployment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                                lineNumber: 228,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = ComplexityMap;
var _c;
__turbopack_context__.k.register(_c, "ComplexityMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentSwarm",
    ()=>AgentSwarm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// The 6 agents from ubuild-deploy.md
const agents = [
    {
        id: "sales",
        label: "Sales",
        icon: "💬",
        angle: 0,
        color: "#14b8a6"
    },
    {
        id: "qual",
        label: "Qualifier",
        icon: "🎯",
        angle: 60,
        color: "#22d3ee"
    },
    {
        id: "content",
        label: "Content",
        icon: "✍️",
        angle: 120,
        color: "#14b8a6"
    },
    {
        id: "email",
        label: "Email",
        icon: "📧",
        angle: 180,
        color: "#22d3ee"
    },
    {
        id: "intel",
        label: "Intel",
        icon: "🔍",
        angle: 240,
        color: "#14b8a6"
    },
    {
        id: "coach",
        label: "Coach",
        icon: "🎓",
        angle: 300,
        color: "#22d3ee"
    }
];
function AgentSwarm({ className }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentSwarm.useEffect": ()=>{
            setMounted(true);
        }
    }["AgentSwarm.useEffect"], []);
    const centerX = 200;
    const centerY = 200;
    const radius = 140;
    // Calculate satellite positions
    const getPosition = (angle)=>{
        const rad = (angle - 90) * (Math.PI / 180);
        return {
            x: centerX + radius * Math.cos(rad),
            y: centerY + radius * Math.sin(rad)
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full max-w-lg mx-auto", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 400",
                className: "w-full h-auto",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "glow-center",
                                x: "-50%",
                                y: "-50%",
                                width: "200%",
                                height: "200%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        stdDeviation: "8",
                                        result: "coloredBlur"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 52,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "coloredBlur"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                                lineNumber: 54,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                                lineNumber: 55,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 53,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "glow-satellite",
                                x: "-50%",
                                y: "-50%",
                                width: "200%",
                                height: "200%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        stdDeviation: "3",
                                        result: "coloredBlur"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "coloredBlur"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                                lineNumber: 63,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                                lineNumber: 64,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: "center-gradient",
                                cx: "50%",
                                cy: "30%",
                                r: "70%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#5eead4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#14b8a6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#0d9488"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "packet-gradient",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#14b8a6",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#22d3ee",
                                        stopOpacity: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#14b8a6",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    agents.map((agent)=>{
                        const pos = getPosition(agent.angle);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: pos.x,
                            y1: pos.y,
                            x2: centerX,
                            y2: centerY,
                            stroke: "#334155",
                            strokeWidth: "1.5",
                            strokeDasharray: "4 4",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: mounted ? 1 : 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            }
                        }, `line-${agent.id}`, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                            lineNumber: 87,
                            columnNumber: 25
                        }, this);
                    }),
                    mounted && agents.map((agent, i)=>{
                        const pos = getPosition(agent.angle);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            r: "4",
                            fill: agent.color,
                            filter: "url(#glow-satellite)",
                            initial: {
                                cx: pos.x,
                                cy: pos.y
                            },
                            animate: {
                                cx: [
                                    pos.x,
                                    centerX
                                ],
                                cy: [
                                    pos.y,
                                    centerY
                                ]
                            },
                            transition: {
                                duration: 2,
                                delay: i * 0.3,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }
                        }, `packet-${agent.id}`, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                            lineNumber: 107,
                            columnNumber: 25
                        }, this);
                    }),
                    agents.map((agent, i)=>{
                        const pos = getPosition(agent.angle);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            initial: {
                                scale: 0,
                                opacity: 0
                            },
                            animate: {
                                scale: mounted ? 1 : 0,
                                opacity: mounted ? 1 : 0
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.1 * i
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: pos.x,
                                    cy: pos.y,
                                    r: "32",
                                    fill: "#0f172a",
                                    stroke: "#334155",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                    lineNumber: 139,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: pos.x,
                                    cy: pos.y,
                                    r: "28",
                                    fill: "none",
                                    stroke: agent.color,
                                    strokeWidth: "1",
                                    strokeOpacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                    lineNumber: 148,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: pos.x,
                                    y: pos.y - 2,
                                    textAnchor: "middle",
                                    dominantBaseline: "middle",
                                    fontSize: "18",
                                    children: agent.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                    lineNumber: 158,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: pos.x,
                                    y: pos.y + 50,
                                    textAnchor: "middle",
                                    fill: "#94a3b8",
                                    fontSize: "11",
                                    fontFamily: "var(--font-geist-mono)",
                                    children: agent.label
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                    lineNumber: 168,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, agent.id, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                            lineNumber: 132,
                            columnNumber: 25
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: mounted ? 1 : 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: centerX,
                                cy: centerY,
                                r: "55",
                                fill: "none",
                                stroke: "#14b8a6",
                                strokeWidth: "2",
                                strokeOpacity: "0.3",
                                animate: {
                                    r: [
                                        55,
                                        65,
                                        55
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                lineNumber: 189,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: centerX,
                                cy: centerY,
                                r: "45",
                                fill: "url(#center-gradient)",
                                filter: "url(#glow-center)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                lineNumber: 202,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: centerX - 10,
                                cy: centerY - 12,
                                r: "12",
                                fill: "#5eead4",
                                fillOpacity: "0.4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                lineNumber: 211,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: centerX,
                                y: centerY + 4,
                                textAnchor: "middle",
                                dominantBaseline: "middle",
                                fontSize: "24",
                                fill: "#fff",
                                children: "🧠"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                        lineNumber: 183,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                        x: centerX,
                        y: centerY + 75,
                        textAnchor: "middle",
                        fill: "#fff",
                        fontSize: "14",
                        fontWeight: "600",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: mounted ? 1 : 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.8
                        },
                        children: "The Orchestrator"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                        lineNumber: 233,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-sm text-slate-500 mt-4",
                children: "6 AI agents working in perfect coordination"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_s(AgentSwarm, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = AgentSwarm;
var _c;
__turbopack_context__.k.register(_c, "AgentSwarm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PipelineFlow",
    ()=>PipelineFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// The 5 stages from IDEA_TO_MVP_WORKFLOW_v2.md
const stages = [
    {
        id: 1,
        name: "Research",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        description: "Market & Tech Validation"
    },
    {
        id: 2,
        name: "Architect",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        description: "System Design & Schema"
    },
    {
        id: 3,
        name: "Build",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
        description: "Parallel Agent Execution"
    },
    {
        id: 4,
        name: "Optimize",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        description: "Performance & Security"
    },
    {
        id: 5,
        name: "Deploy",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        description: "Production & Monitoring"
    }
];
function PipelineFlow({ className }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeStage, setActiveStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipelineFlow.useEffect": ()=>{
            setMounted(true);
            // Animate through stages
            const interval = setInterval({
                "PipelineFlow.useEffect.interval": ()=>{
                    setActiveStage({
                        "PipelineFlow.useEffect.interval": (prev)=>(prev + 1) % 6
                    }["PipelineFlow.useEffect.interval"]);
                }
            }["PipelineFlow.useEffect.interval"], 2000);
            return ({
                "PipelineFlow.useEffect": ()=>clearInterval(interval)
            })["PipelineFlow.useEffect"];
        }
    }["PipelineFlow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 1000 200",
                    className: "w-full h-auto",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "stage-glow",
                                    x: "-50%",
                                    y: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            stdDeviation: "4",
                                            result: "coloredBlur"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                            lineNumber: 48,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                    in: "coloredBlur"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                    in: "SourceGraphic"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                            lineNumber: 49,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "arrow",
                                    markerWidth: "10",
                                    markerHeight: "10",
                                    refX: "9",
                                    refY: "3",
                                    orient: "auto",
                                    markerUnits: "strokeWidth",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L0,6 L9,3 z",
                                        fill: "#334155"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: "50",
                            y1: "100",
                            x2: "950",
                            y2: "100",
                            stroke: "#1e293b",
                            strokeWidth: "8",
                            strokeLinecap: "round",
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: mounted ? 1 : 0
                            },
                            transition: {
                                duration: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: "50",
                            y1: "100",
                            x2: "950",
                            y2: "100",
                            stroke: "url(#progress-gradient)",
                            strokeWidth: "4",
                            strokeLinecap: "round",
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: activeStage / 5
                            },
                            transition: {
                                duration: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "progress-gradient",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#14b8a6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#22d3ee"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        stages.map((stage, i)=>{
                            const x = 100 + i * 200;
                            const isActive = activeStage >= stage.id;
                            const isCurrent = activeStage === stage.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: mounted ? 1 : 0,
                                    y: mounted ? 0 : 20
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: 0.1 * i
                                },
                                children: [
                                    i < stages.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: x + 40,
                                        y1: 100,
                                        x2: x + 160,
                                        y2: 100,
                                        stroke: "#334155",
                                        strokeWidth: "2",
                                        markerEnd: "url(#arrow)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 120,
                                        columnNumber: 37
                                    }, this),
                                    isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: x,
                                        cy: 100,
                                        r: "45",
                                        fill: "none",
                                        stroke: "#14b8a6",
                                        strokeWidth: "2",
                                        strokeOpacity: "0.5",
                                        animate: {
                                            r: [
                                                45,
                                                55,
                                                45
                                            ]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 133,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: x,
                                        cy: 100,
                                        r: "36",
                                        fill: isActive ? "#0f172a" : "#0f172a",
                                        stroke: isActive ? "#14b8a6" : "#334155",
                                        strokeWidth: "2",
                                        filter: isActive ? "url(#stage-glow)" : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 147,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: x,
                                        cy: 100,
                                        r: "28",
                                        fill: isActive ? "#14b8a6" : "#1e293b",
                                        fillOpacity: isActive ? 0.2 : 1
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 158,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: 106,
                                        textAnchor: "middle",
                                        fill: isActive ? "#14b8a6" : "#64748b",
                                        fontSize: "16",
                                        fontWeight: "bold",
                                        fontFamily: "var(--font-geist-mono)",
                                        children: stage.id
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 167,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: 160,
                                        textAnchor: "middle",
                                        fill: isActive ? "#fff" : "#94a3b8",
                                        fontSize: "13",
                                        fontWeight: "600",
                                        children: stage.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 180,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: 178,
                                        textAnchor: "middle",
                                        fill: "#64748b",
                                        fontSize: "10",
                                        children: stage.description
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 192,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, stage.id, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                lineNumber: 112,
                                columnNumber: 29
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden space-y-4",
                children: stages.map((stage, i)=>{
                    const isActive = activeStage >= stage.id;
                    const isCurrent = activeStage === stage.id;
                    const Icon = stage.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: mounted ? 1 : 0,
                            x: mounted ? 0 : -20
                        },
                        transition: {
                            duration: 0.4,
                            delay: 0.1 * i
                        },
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-12 h-12 rounded-lg flex items-center justify-center border-2 transition-colors", isActive ? "border-primary bg-primary/10" : "border-slate-700 bg-slate-800", isCurrent && "animate-pulse"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", isActive ? "text-primary" : "text-slate-500")
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                            lineNumber: 233,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 224,
                                        columnNumber: 33
                                    }, this),
                                    i < stages.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-0.5 h-8 mt-2", isActive ? "bg-primary" : "bg-slate-700")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 236,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                lineNumber: 223,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold", isActive ? "text-white" : "text-slate-400"),
                                        children: [
                                            "Stage ",
                                            stage.id,
                                            ": ",
                                            stage.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 245,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500",
                                        children: stage.description
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                        lineNumber: 251,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                                lineNumber: 244,
                                columnNumber: 29
                            }, this)
                        ]
                    }, stage.id, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                        lineNumber: 215,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-sm text-slate-500 mt-6",
                children: "Fully automated 4-6 hour pipeline from idea to production"
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
                lineNumber: 259,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(PipelineFlow, "Px/wEyXg4cThp/kAuEcKK2UDS7E=");
_c = PipelineFlow;
var _c;
__turbopack_context__.k.register(_c, "PipelineFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$agency$2f$SalesAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/agency/SalesAssistant.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$app$2f$sections$2f$portfolio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/app/sections/portfolio.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/brand/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$landing$2f$VideoShowcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/landing/VideoShowcase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$TechStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/TechStack.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$RoiChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/RoiChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$ComplexityMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/ComplexityMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$AgentSwarm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/AgentSwarm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$PipelineFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/components/visuals/PipelineFlow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Active Projects/ubuild/ubuild-portal/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Scroll Progress Bar Component
function ScrollProgress() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgress.useEffect": ()=>{
            const handleScroll = {
                "ScrollProgress.useEffect.handleScroll": ()=>{
                    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPosition = window.scrollY;
                    setProgress(scrollPosition / totalHeight * 100);
                }
            }["ScrollProgress.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "ScrollProgress.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["ScrollProgress.useEffect"];
        }
    }["ScrollProgress.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 right-0 h-1 bg-slate-800 z-[100]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-150",
            style: {
                width: `${progress}%`
            }
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ScrollProgress, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = ScrollProgress;
// Sticky Navigation
function StickyNav() {
    _s1();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StickyNav.useEffect": ()=>{
            const handleScroll = {
                "StickyNav.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["StickyNav.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "StickyNav.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["StickyNav.useEffect"];
        }
    }["StickyNav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                size: "sm"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#features",
                                    className: "text-sm text-slate-300 hover:text-white transition-colors",
                                    children: "Features"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#portfolio",
                                    className: "text-sm text-slate-300 hover:text-white transition-colors",
                                    children: "Results"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#pricing",
                                    className: "text-sm text-slate-300 hover:text-white transition-colors",
                                    children: "Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#faq",
                                    className: "text-sm text-slate-300 hover:text-white transition-colors",
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        children: "Start Free Trial"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "md:hidden text-white",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 100,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 100,
                                columnNumber: 61
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden py-4 border-t border-slate-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#features",
                                className: "text-sm text-slate-300 hover:text-white",
                                children: "Features"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#portfolio",
                                className: "text-sm text-slate-300 hover:text-white",
                                children: "Results"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#pricing",
                                className: "text-sm text-slate-300 hover:text-white",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    children: "Start Free Trial"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 107,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s1(StickyNav, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c1 = StickyNav;
// Hero Section - Human-Centered Design Pattern
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-screen overflow-hidden pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-2 lg:order-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl p-8 md:p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            "The Future of Sales is Here"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight",
                                        children: [
                                            "Your Personal AI Sales Army",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent",
                                                children: "Working 24/7"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-slate-100 mb-8",
                                        children: "Tired of juggling multiple tools and hiring expensive team members? Meet uBuild—6 AI agents that handle your entire sales operation automatically. No coding required."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dashboard",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    className: "w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-primary to-cyan-500 hover:shadow-lg hover:shadow-primary/30 transition-all",
                                                    children: [
                                                        "Start Your Free Trial ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "ml-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                variant: "outline",
                                                className: "w-full sm:w-auto h-12 px-8 border-slate-600 text-white hover:bg-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Watch Demo (2 min)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            '24/7 Sales Chat',
                                            'Lead Scoring',
                                            'Content Gen',
                                            'Email Pro',
                                            'Intelligence',
                                            'Sales Coach'
                                        ].map((agent, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "secondary",
                                                className: "px-3 py-1.5 bg-slate-800/50 border-slate-700 text-slate-200 text-xs",
                                                children: [
                                                    "✓ ",
                                                    agent
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-1 lg:order-2 flex flex-col items-center lg:items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 w-full max-w-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400 mb-4 font-medium",
                                            children: "Proven Results"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl md:text-3xl font-bold text-primary",
                                                            children: "10x"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: "More Leads"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl md:text-3xl font-bold text-primary",
                                                            children: "90%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Less Work"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl md:text-3xl font-bold text-primary",
                                                            children: "$0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Setup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 text-center text-slate-500 text-sm hidden lg:block"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c2 = HeroSection;
// Problem Section
function ProblemSection() {
    const problems = [
        {
            title: 'Hours Lost to Manual Work',
            description: 'Your team spends countless hours responding to emails, qualifying leads, and managing customer interactions.',
            icon: '⏱️'
        },
        {
            title: 'Expensive Hiring',
            description: 'Hiring salespeople, content creators, and support staff is expensive—often $40-100k+ per employee.',
            icon: '💸'
        },
        {
            title: 'Inconsistent Quality',
            description: 'Different team members = inconsistent messaging, missed follow-ups, and lost opportunities.',
            icon: '⚠️'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-slate-900 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-white mb-4",
                            children: "The Pain You're Experiencing"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-300",
                            children: "Sound familiar? You're not alone."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: problems.map((problem, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-red-500/30 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-4",
                                    children: problem.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-white mb-3",
                                    children: problem.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-300",
                                    children: problem.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
            lineNumber: 225,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_c3 = ProblemSection;
// Solution Section (6 Agents)
function SolutionSection() {
    const solutions = [
        {
            agent: 'Sales Agent',
            what: 'Answers customer questions 24/7',
            impact: '3-5x more conversations'
        },
        {
            agent: 'Lead Qualification',
            what: 'Automatically scores and ranks leads',
            impact: '50% faster sales cycles'
        },
        {
            agent: 'Content Agent',
            what: 'Creates 15-20 variations from 1 piece',
            impact: '10x more content'
        },
        {
            agent: 'Email Agent',
            what: 'Prioritizes inbox, drafts smart responses',
            impact: '5 hours saved/week'
        },
        {
            agent: 'Intelligence Agent',
            what: 'Monitors account health, predicts churn',
            impact: '35% better retention'
        },
        {
            agent: 'Sales Coach',
            what: 'Practice sales scenarios with AI',
            impact: '20% higher win rates'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "w-full bg-slate-950 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "mb-4 bg-primary/10 text-primary border-primary/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                " Meet Your New Team"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-white mb-4",
                            children: "6 AI Agents. One Unified System."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-300",
                            children: "Each agent specializes in one critical function."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: solutions.map((solution, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "mb-4 bg-primary/10 text-primary border-primary/20",
                                    children: solution.agent
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-white mb-3",
                                    children: solution.what
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-primary font-semibold",
                                    children: [
                                        "Result: ",
                                        solution.impact
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
            lineNumber: 257,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_c4 = SolutionSection;
// How It Works (5 Stages)
function HowItWorksSection() {
    const stages = [
        {
            stage: 1,
            title: 'Deep Research',
            description: 'AI analyzes your market and competitors'
        },
        {
            stage: 2,
            title: 'Smart Architecture',
            description: 'AI designs your custom sales engine'
        },
        {
            stage: 3,
            title: 'Agent Deployment',
            description: '6 agents launch and integrate with CRM'
        },
        {
            stage: 4,
            title: 'Optimization',
            description: 'AI learns and improves automatically'
        },
        {
            stage: 5,
            title: 'Live Deployment',
            description: 'Your AI team starts generating revenue'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-slate-900 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-white mb-4",
                            children: "The uBuild 5-Stage Process"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-300",
                            children: "From idea to revenue-generating AI team in 4 weeks."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-5 gap-8",
                    children: stages.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg",
                                    children: item.stage
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-white mb-2",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-sm",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
            lineNumber: 291,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_c5 = HowItWorksSection;
// Pricing Section
function PricingSection() {
    const plans = [
        {
            name: 'Starter',
            price: '$1,997',
            features: [
                '2 AI Agents',
                'Up to 500 leads/month',
                'Basic integrations',
                'Email support'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: '$4,997',
            features: [
                'All 6 AI Agents',
                'Up to 5,000 leads/month',
                'All integrations',
                'Priority support',
                'Custom dashboards'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            features: [
                'Unlimited leads',
                'White-label options',
                'Dedicated account manager',
                '24/7 phone support',
                'SLA guarantee'
            ],
            popular: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pricing",
        className: "w-full bg-slate-950 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-white mb-4",
                            children: "Simple, Transparent Pricing"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-300",
                            children: "No hidden fees. No long contracts. Cancel anytime."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: plans.map((plan, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-xl border p-8 transition-all ${plan.popular ? 'bg-gradient-to-br from-primary/20 to-cyan-900/20 border-primary shadow-2xl shadow-primary/20 md:scale-105' : 'bg-slate-800 border-slate-700 hover:border-slate-600'}`,
                            children: [
                                plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "mb-4 bg-primary/20 text-primary border-primary",
                                    children: "MOST POPULAR"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 32
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-white mb-2",
                                    children: plan.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-4xl font-bold text-white",
                                            children: plan.price
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400",
                                            children: "/month"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: `w-full mb-8 ${plan.popular ? 'bg-white text-primary hover:bg-slate-100' : ''}`,
                                    children: "Start Trial →"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: plan.features.map((feature, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-5 h-5 text-primary flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: feature
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, j, true, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
            lineNumber: 322,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
_c6 = PricingSection;
// FAQ Section
function FAQSection() {
    _s2();
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const faqs = [
        {
            question: 'Do I need to know how to code?',
            answer: 'Not at all! uBuild is designed for non-technical users. You just connect your CRM and email, and the AI handles everything else.'
        },
        {
            question: 'How long does deployment take?',
            answer: 'Full deployment takes 4 weeks. Week 1 is research, weeks 2-3 are configuration, and week 4 is launch.'
        },
        {
            question: 'Can I integrate with my existing CRM?',
            answer: 'Yes! We support Salesforce, HubSpot, Pipedrive, and more. Custom integrations available.'
        },
        {
            question: 'Is there a free trial?',
            answer: 'Yes! You get 14 days free to test all 6 agents with your real data. No credit card required.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "w-full bg-slate-900 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-bold text-white mb-4",
                        children: "Frequently Asked Questions"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 372,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-slate-700 rounded-lg overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setExpandedIndex(expandedIndex === i ? null : i),
                                    className: "w-full px-6 py-4 flex items-center justify-between bg-slate-800 hover:bg-slate-700/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-left font-semibold text-white",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: `w-5 h-5 text-primary transform transition-transform ${expandedIndex === i ? 'rotate-180' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this),
                                expandedIndex === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-4 bg-slate-900 border-t border-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300",
                                        children: faq.answer
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 376,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
            lineNumber: 370,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
_s2(FAQSection, "bzV0X/G6ETLTHnPPQQ2qIqf2BxU=");
_c7 = FAQSection;
// Footer
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-slate-950 py-12 border-t border-slate-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                className: "h-6 w-6 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-white",
                                children: "uBuild Agency"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: "© 2026 uBuild Agency. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-sm text-slate-400 hover:text-white",
                                children: "Terms"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 409,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-sm text-slate-400 hover:text-white",
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 402,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
            lineNumber: 401,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, this);
}
_c8 = Footer;
function LandingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-950 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollProgress, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StickyNav, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$agency$2f$SalesAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalesAssistant"], {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full bg-slate-900 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$landing$2f$VideoShowcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoShowcase"], {}, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 430,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full bg-slate-950 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                    children: "Your AI Agent Swarm"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 max-w-2xl mx-auto",
                                    children: "6 specialized agents coordinated by a central Orchestrator, working in parallel 24/7"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$AgentSwarm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentSwarm"], {}, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemSection, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full bg-slate-950 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                    children: "Traditional vs. uBuild"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400",
                                    children: "See the difference in development approach"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$ComplexityMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComplexityMap"], {}, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SolutionSection, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HowItWorksSection, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full bg-slate-900 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                    children: "The Automated Pipeline"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400",
                                    children: "From idea to production in 5 structured stages"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$PipelineFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PipelineFlow"], {}, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 470,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "tech",
                className: "w-full bg-slate-900 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                    children: "Powered by Modern Tech"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400",
                                    children: "Enterprise-grade stack, no compromise"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 484,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$TechStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechStack"], {}, void 0, false, {
                            fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 483,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$app$2f$sections$2f$portfolio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortfolioSection"], {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full bg-slate-950 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$components$2f$visuals$2f$RoiChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoiChart"], {}, void 0, false, {
                        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                        lineNumber: 499,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQSection, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Active__Projects$2f$ubuild$2f$ubuild$2d$portal$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Active Projects/ubuild/ubuild-portal/app/page.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_c9 = LandingPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "ScrollProgress");
__turbopack_context__.k.register(_c1, "StickyNav");
__turbopack_context__.k.register(_c2, "HeroSection");
__turbopack_context__.k.register(_c3, "ProblemSection");
__turbopack_context__.k.register(_c4, "SolutionSection");
__turbopack_context__.k.register(_c5, "HowItWorksSection");
__turbopack_context__.k.register(_c6, "PricingSection");
__turbopack_context__.k.register(_c7, "FAQSection");
__turbopack_context__.k.register(_c8, "Footer");
__turbopack_context__.k.register(_c9, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Active%20Projects_ubuild_ubuild-portal_3f3cd7ca._.js.map