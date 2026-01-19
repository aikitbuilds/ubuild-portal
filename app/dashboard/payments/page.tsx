"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    DollarSign,
    Plus,
    Clock,
    AlertCircle,
    CheckCircle2,
    FileText,
    CreditCard,
    TrendingUp,
    Send
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";

// Mock data for revenue chart
const revenueData = [
    { month: "Oct", revenue: 12500, pending: 3200 },
    { month: "Nov", revenue: 18900, pending: 4100 },
    { month: "Dec", revenue: 22400, pending: 2800 },
    { month: "Jan", revenue: 28750, pending: 5600 },
];

// Mock invoices
const mockInvoices = [
    { id: "INV-001", client: "TechScale Inc", amount: 4997, status: "paid", dueDate: "2026-01-15" },
    { id: "INV-002", client: "GrowthLabs", amount: 4997, status: "sent", dueDate: "2026-01-25" },
    { id: "INV-003", client: "DataFlow", amount: 9994, status: "overdue", dueDate: "2026-01-10" },
    { id: "INV-004", client: "CloudTech", amount: 4997, status: "draft", dueDate: "2026-02-01" },
];

const statusColors: Record<string, string> = {
    paid: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    sent: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    overdue: "bg-red-500/10 text-red-500 border-red-500/20",
    draft: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

const pieData = [
    { name: "Paid", value: 45600, fill: "hsl(142, 76%, 36%)" },
    { name: "Pending", value: 14991, fill: "hsl(48, 96%, 53%)" },
    { name: "Overdue", value: 9994, fill: "hsl(0, 84%, 60%)" },
];

export default function PaymentsPage() {
    const [showInvoiceForm, setShowInvoiceForm] = useState(false);

    const totalRevenue = 45600;
    const pendingAmount = 14991;
    const overdueAmount = 9994;
    const invoiceCount = mockInvoices.length;

    return (
        <div className="space-y-6">
            {/* Header */}
            <header className="flex items-center justify-between pb-4 border-b">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Payments & Invoicing</h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Track revenue, create invoices, and manage payments.
                    </p>
                </div>
                <Button onClick={() => setShowInvoiceForm(!showInvoiceForm)} className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create Invoice
                </Button>
            </header>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="border-emerald-500/20 bg-emerald-500/5">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-500/10">
                                <DollarSign className="h-5 w-5 text-emerald-500" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Total Revenue</p>
                                <p className="text-xl font-bold">${totalRevenue.toLocaleString()}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-amber-500/20 bg-amber-500/5">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-amber-500/10">
                                <Clock className="h-5 w-5 text-amber-500" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Pending</p>
                                <p className="text-xl font-bold">${pendingAmount.toLocaleString()}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-red-500/20 bg-red-500/5">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-red-500/10">
                                <AlertCircle className="h-5 w-5 text-red-500" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Overdue</p>
                                <p className="text-xl font-bold">${overdueAmount.toLocaleString()}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Total Invoices</p>
                                <p className="text-xl font-bold">{invoiceCount}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Invoice Form (Collapsible) */}
            {showInvoiceForm && (
                <Card className="border-primary/30">
                    <CardHeader>
                        <CardTitle className="text-lg">Create New Invoice</CardTitle>
                        <CardDescription>Fill in the details to generate an invoice.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="clientName">Client Name</Label>
                                <Input id="clientName" placeholder="e.g., Acme Corp" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="clientEmail">Client Email</Label>
                                <Input id="clientEmail" type="email" placeholder="client@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="amount">Amount (USD)</Label>
                                <Input id="amount" type="number" placeholder="4997" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dueDate">Due Date</Label>
                                <Input id="dueDate" type="date" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Input id="description" placeholder="Professional Plan - Monthly Subscription" />
                            </div>
                            <div className="md:col-span-2 flex gap-2">
                                <Button className="gap-2">
                                    <Send className="h-4 w-4" />
                                    Send Invoice
                                </Button>
                                <Button variant="outline" onClick={() => setShowInvoiceForm(false)}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <Card className="lg:col-span-2">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Revenue Tracker</CardTitle>
                            <Badge variant="outline" className="gap-1 text-emerald-500 border-emerald-500/30">
                                <TrendingUp className="h-3 w-3" /> +23% this month
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={revenueData}>
                                    <defs>
                                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="pendingGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(48, 96%, 53%)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="hsl(48, 96%, 53%)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '6px' }} />
                                    <Area type="monotone" dataKey="revenue" stroke="hsl(142, 76%, 36%)" strokeWidth={2} fill="url(#revenueGradient)" />
                                    <Area type="monotone" dataKey="pending" stroke="hsl(48, 96%, 53%)" strokeWidth={2} fill="url(#pendingGradient)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Status Breakdown */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Invoice Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative h-[180px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={2} dataKey="value">
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '6px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-4">
                            {pieData.map((item) => (
                                <div key={item.name} className="text-center text-xs">
                                    <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.fill }} />
                                    <span className="text-muted-foreground">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Invoices Table */}
            <Card>
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Recent Invoices</CardTitle>
                        <Button variant="ghost" size="sm">View All</Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <ScrollArea className="h-[300px]">
                        <div className="divide-y divide-border">
                            {mockInvoices.length === 0 ? (
                                <div className="p-8 text-center text-muted-foreground">
                                    <FileText className="h-10 w-10 mx-auto mb-3 opacity-50" />
                                    <p>No invoices yet. Create your first invoice above!</p>
                                </div>
                            ) : (
                                mockInvoices.map((invoice) => (
                                    <div key={invoice.id} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 rounded-lg bg-muted">
                                                <FileText className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{invoice.id}</p>
                                                <p className="text-xs text-muted-foreground">{invoice.client}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">${invoice.amount.toLocaleString()}</p>
                                            <Badge variant="outline" className={`text-[10px] ${statusColors[invoice.status]}`}>
                                                {invoice.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Payment Methods</CardTitle>
                        <Button variant="outline" size="sm" className="gap-2">
                            <CreditCard className="h-4 w-4" />
                            Connect Payment
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4 p-4 rounded-lg border bg-muted/30">
                        <div className="p-3 rounded-lg bg-blue-500/10">
                            <span className="text-2xl">💳</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium">PayPal Connected</p>
                            <p className="text-xs text-muted-foreground">user@example.com • Default</p>
                        </div>
                        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                            <CheckCircle2 className="h-3 w-3 mr-1" /> Active
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
