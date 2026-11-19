import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL, CONTACT_FORM_SUBJECT } from "@/util/contact";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
    let payload: unknown;
    const contentType = request.headers.get("content-type") ?? "";

    try {
        if (contentType.includes("application/json")) {
            payload = await request.json();
        } else if (
            contentType.includes("application/x-www-form-urlencoded") ||
            contentType.includes("multipart/form-data")
        ) {
            payload = Object.fromEntries((await request.formData()).entries());
        } else {
            return NextResponse.json({ error: "Unsupported form submission." }, { status: 415 });
        }
    } catch {
        return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }

    if (!isRecord(payload)) {
        return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
    const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
    const message = typeof payload.message === "string" ? payload.message.trim() : "";
    const phoneDigits = phone.replace(/\D/g, "");

    if (
        name.length > 150 ||
        email.length > 254 ||
        phone.length > 40 ||
        subject.length > 200 ||
        message.length > 5000
    ) {
        return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
        return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
        return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST?.trim();
    const portValue = process.env.SMTP_PORT?.trim();
    const port = portValue ? Number(portValue) : 0;
    const user = process.env.SMTP_USER?.trim();
    const password = process.env.SMTP_PASSWORD;
    const fromAddress = process.env.SMTP_FROM_EMAIL?.trim() || user;
    const fromName = process.env.SMTP_FROM_NAME?.trim() || "Infinia Website";

    if (
        !host ||
        !user ||
        !password ||
        !fromAddress ||
        !emailPattern.test(fromAddress) ||
        !Number.isInteger(port) ||
        port < 1 ||
        port > 65535
    ) {
        return NextResponse.json(
            { error: "Email delivery is not configured. Please contact the site owner." },
            { status: 503 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass: password },
        });

        await transporter.sendMail({
            from: { name: fromName, address: fromAddress },
            to: CONTACT_EMAIL,
            replyTo: { name: name || email, address: email },
            subject: subject.replace(/[\r\n]+/g, " ") || CONTACT_FORM_SUBJECT,
            text: [
                `Name: ${name || "Not provided"}`,
                `Email: ${email}`,
                `Phone: ${phone}`,
                `Subject: ${subject || "Not provided"}`,
                "",
                message,
            ].join("\n"),
        });
    } catch (error) {
        console.error(
            "Contact email delivery failed:",
            error instanceof Error ? error.message : "Unknown SMTP error"
        );
        return NextResponse.json(
            { error: "We couldn't send your message. Please try again later." },
            { status: 502 }
        );
    }

    return NextResponse.json({ message: "Your message has been sent." });
}
