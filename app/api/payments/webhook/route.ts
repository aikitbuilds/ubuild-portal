import { NextResponse } from "next/server";

// POST - Handle payment webhook from PayPal/Stripe
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { event_type, resource } = body;

        // TODO: Verify webhook signature (PayPal/Stripe)
        // For now, log the event

        console.log(`[Webhook] Received event: ${event_type}`);

        if (event_type === "CHECKOUT.ORDER.COMPLETED" || event_type === "payment_intent.succeeded") {
            const orderId = resource?.id || resource?.payment_intent;
            const customId = resource?.purchase_units?.[0]?.custom_id || resource?.metadata?.invoiceId;

            // TODO: Update invoice status in Firestore
            // TODO: Create payment record
            // TODO: Send notification email

            console.log(`[Webhook] Payment completed for order: ${orderId}, invoice: ${customId}`);
        }

        if (event_type === "PAYMENT.CAPTURE.REFUNDED" || event_type === "charge.refunded") {
            // TODO: Handle refund
            console.log(`[Webhook] Payment refunded`);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json(
            { error: "Webhook processing failed" },
            { status: 500 }
        );
    }
}
