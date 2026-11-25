import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/util/contact";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
	let payload: unknown;

	try {
		payload = await request.json();
	} catch {
		return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
	}

	if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
		return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
	}

	const emailValue = "email" in payload ? payload.email : undefined;
	const email = typeof emailValue === "string" ? emailValue.trim() : "";

	if (email.length > 254 || !emailPattern.test(email)) {
		return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
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
			{ status: 503 },
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
			replyTo: email,
			subject: "Newsletter subscription request",
			text: `A visitor requested to join the newsletter with this email address: ${email}`,
		});
	} catch (error) {
		console.error(
			"Newsletter signup email delivery failed:",
			error instanceof Error ? error.message : "Unknown SMTP error",
		);
		return NextResponse.json(
			{ error: "We couldn't submit your signup. Please try again later." },
			{ status: 502 },
		);
	}

	return NextResponse.json({ message: "Your signup request has been submitted." });
}
