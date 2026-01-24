import nodemailer from "nodemailer";

interface EmailPayload {
    to: string;
    subject: string;
    html: string;
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export const sendEmail = async ({ to, subject, html }: EmailPayload) => {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.warn("Missing Gmail credentials. Skipping email send.");
        console.log(`[Email Simulation] To: ${to}, Subject: ${subject}`);
        return;
    }

    try {
        await transporter.sendMail({
            from: `"uBuild Agency" <${process.env.GMAIL_USER}>`,
            to,
            subject,
            html,
        });
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error("Failed to send email:", error);
    }
};

export const sendAdminAlert = async (project: string, userEmail: string, summary: string) => {
    await sendEmail({
        to: process.env.GMAIL_USER || "", // Admin is usually the sender
        subject: `🚀 New uBuild Submission: ${project}`,
        html: `
            <h2>New Project Submission</h2>
            <p><strong>User:</strong> ${userEmail}</p>
            <p><strong>Project:</strong> ${project}</p>
            <h3>AI Summary</h3>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${summary}</pre>
            <p><a href="https://ubuild.pro/dashboard/admin">Review Now</a></p>
        `,
    });
};

export const sendUserConfirmation = async (userEmail: string, summary: string) => {
    await sendEmail({
        to: userEmail,
        subject: "We received your request - uBuild Agency",
        html: `
            <h2>Submission Received</h2>
            <p>Thanks! Our AI Agents have processed your request.</p>
            <h3>Your Brief</h3>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${summary}</pre>
            <p>We will now begin the architecture phase. Track progress in your portal.</p>
        `,
    });
};
