"use client";

import { useState, type FormEvent } from "react";

interface NewsletterFormProps {
	formClassName: string;
	inputClassName: string;
	buttonContainerClassName: string;
	buttonClassName: string;
}

export default function NewsletterForm({
	formClassName,
	inputClassName,
	buttonContainerClassName,
	buttonClassName,
}: NewsletterFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedback, setFeedback] = useState<{ message: string; isError: boolean } | null>(null);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		setFeedback(null);

		try {
			const form = event.currentTarget;
			const formData = new FormData(form);
			const response = await fetch("/api/newsletter", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: formData.get("email") }),
			});
			const result: unknown = await response.json();

			if (!response.ok) {
				const message =
					typeof result === "object" &&
					result !== null &&
					"error" in result &&
					typeof result.error === "string"
						? result.error
						: "We couldn't submit your signup. Please try again.";
				throw new Error(message);
			}

			form.reset();
			setFeedback({ message: "Thanks! Your signup request has been submitted.", isError: false });
		} catch (error) {
			setFeedback({
				message: error instanceof Error ? error.message : "We couldn't submit your signup. Please try again.",
				isError: true,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div>
			<form className={formClassName} onSubmit={handleSubmit}>
				<input
					type="email"
					className={inputClassName}
					name="email"
					placeholder="Enter your mail .."
					aria-label="Email address"
					autoComplete="email"
					maxLength={254}
					required
					disabled={isSubmitting}
				/>
				<div className={buttonContainerClassName}>
					<button className={buttonClassName} type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Joining..." : "Join Now"}
					</button>
				</div>
			</form>
			{feedback && (
				<p className={`mt-2 mb-0 ${feedback.isError ? "text-danger" : "text-success"}`} role={feedback.isError ? "alert" : "status"}>
					{feedback.message}
				</p>
			)}
		</div>
	);
}
