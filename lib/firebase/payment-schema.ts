// Firebase Schema Extensions for Payment System
// Based on FLEXIBLE_PAYMENT_SYSTEM.md reference

import { Timestamp } from "firebase/firestore";

// Extended User with Payment Info
export interface UserProfile {
    id: string;
    email: string;
    displayName: string;
    photoURL?: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    businessInfo?: {
        businessName: string;
        taxId?: string;
        address: string;
    };
}

// Payment Methods Collection
export interface PaymentMethod {
    id: string;
    userId: string;
    type: "paypal" | "stripe" | "venmo" | "square";
    connectedAt: Timestamp;
    isDefault: boolean;
    connectedAccount: string; // PayPal email, Stripe ID, etc.
    last4?: string; // Last 4 digits if card
    lastUsed?: Timestamp;
    status: "active" | "inactive" | "reconnect_required";
}

// Invoice Line Item
export interface LineItem {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number; // In cents
}

// Invoices Collection
export interface Invoice {
    id: string;
    userId: string;
    invoiceNumber: string;
    clientName: string;
    clientEmail: string;
    amount: number; // Total in cents
    currency: "USD";
    description: string;
    items: LineItem[];
    taxRate: number;
    dueDate: Timestamp;
    status: "draft" | "sent" | "viewed" | "paid" | "overdue" | "cancelled";
    paymentMethodId?: string;
    createdAt: Timestamp;
    sentAt?: Timestamp;
    viewedAt?: Timestamp;
    paidAt?: Timestamp;
    paidAmount?: number;
    transactionId?: string;
    notes: string;
}

// Payments Collection
export interface Payment {
    id: string;
    userId: string;
    invoiceId: string;
    amount: number; // In cents
    transactionId: string;
    paymentMethodId: string;
    status: "pending" | "processing" | "completed" | "failed" | "refunded";
    processedAt: Timestamp;
    completedAt?: Timestamp;
    processor: "paypal" | "stripe" | "venmo" | "square";
    fee: number; // Processing fee in cents
    netAmount: number; // amount - fee
    receiptUrl?: string;
}

// Bank Statement for Reconciliation
export interface BankStatement {
    id: string;
    userId: string;
    uploadedAt: Timestamp;
    fileName: string;
    fileUrl: string;
    fileType: "csv" | "pdf" | "image";
    bank: string;
    periodStart: Timestamp;
    periodEnd: Timestamp;
    reconciled: boolean;
    matchedPayments: string[]; // payment IDs
    unmatchedDeposits: DepositLine[];
}

export interface DepositLine {
    date: Timestamp;
    amount: number;
    description: string;
    suggestedMatch?: string;
}

// Audit Log
export interface AuditLog {
    id: string;
    userId: string;
    action: string;
    timestamp: Timestamp;
    changes: Record<string, unknown>;
    ipAddress?: string;
    userAgent?: string;
}

// API Request/Response Types
export interface CreateInvoiceRequest {
    clientName: string;
    clientEmail: string;
    amount: number;
    description: string;
    items?: LineItem[];
    taxRate?: number;
    dueDate: string; // ISO date string
    notes?: string;
}

export interface PaymentSummary {
    totalUnpaid: number;
    totalPaidThisMonth: number;
    overdue: number;
    averagePaymentTime: number; // in days
    invoiceCount: number;
}
