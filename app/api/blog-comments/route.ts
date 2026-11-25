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

	const nameValue = "name" in payload ? payload.name : undefined;
	const emailValue = "email" in payload ? payload.email : undefined;
	const commentValue = "comment" in payload ? payload.comment : undefined;
	const postTitleValue = "postTitle" in payload ? payload.postTitle : undefined;
	const name = typeof nameValue === "string" ? nameValue.trim() : "";
	const email = typeof emailValue === "string" ? emailValue.trim() : "";
	const comment = typeof commentValue === "string" ? commentValue.trim() : "";
	const postTitle = typeof postTitleValue === "string" ? postTitleValue.trim() : "";

	if (
		!name ||
		!email ||
		!comment ||
		!postTitle ||
		name.length > 150 ||
		email.length > 254 ||
		comment.length > 5000 ||
		postTitle.length > 200
	) {
		return NextResponse.json({ error: "Complete all fields using the allowed lengths." }, { status: 400 });
	}

	if (!emailPattern.test(email)) {
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
			replyTo: { name, address: email },
			subject: `Blog comment: ${postTitle.replace(/[\r\n]+/g, " ")}`,
			text: [`Post: ${postTitle}`, `Name: ${name}`, `Email: ${email}`, "", comment].join("\n"),
		});
	} catch (error) {
		console.error(
			"Blog comment email delivery failed:",
			error instanceof Error ? error.message : "Unknown SMTP error",
		);
		return NextResponse.json(
			{ error: "We couldn't submit your comment. Please try again later." },
			{ status: 502 },
		);
	}

	return NextResponse.json({ message: "Your comment has been sent for review." });
}
