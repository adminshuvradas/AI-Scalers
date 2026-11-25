"use client";

import { useState, type FormEvent } from "react";

interface BlogCommentFormProps {
	postTitle: string;
}

export default function BlogCommentForm({ postTitle }: BlogCommentFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedback, setFeedback] = useState<{ message: string; isError: boolean } | null>(null);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);

		setIsSubmitting(true);
		setFeedback(null);

		try {
			const response = await fetch("/api/blog-comments", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					postTitle,
					name: formData.get("name"),
					email: formData.get("email"),
					comment: formData.get("comment"),
				}),
			});
			const result: unknown = await response.json();

			if (!response.ok) {
				const message =
					typeof result === "object" &&
					result !== null &&
					"error" in result &&
					typeof result.error === "string"
						? result.error
						: "We couldn't submit your comment. Please try again.";
				throw new Error(message);
			}

			form.reset();
			setFeedback({ message: "Thanks! Your comment has been sent for review.", isError: false });
		} catch (error) {
			setFeedback({
				message: error instanceof Error ? error.message : "We couldn't submit your comment. Please try again.",
				isError: true,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="row g-3">
				<div className="col-md-6">
					<input
						className="form-control"
						type="text"
						name="name"
						placeholder="Your name *"
						aria-label="Your name"
						autoComplete="name"
						maxLength={150}
						required
						disabled={isSubmitting}
					/>
				</div>
				<div className="col-md-6">
					<input
						className="form-control"
						type="email"
						name="email"
						placeholder="Email address *"
						aria-label="Email address"
						autoComplete="email"
						maxLength={254}
						required
						disabled={isSubmitting}
					/>
				</div>
				<div className="col-12">
					<textarea
						className="form-control pb-10"
						name="comment"
						placeholder="Write your comment"
						aria-label="Write your comment"
						maxLength={5000}
						required
						disabled={isSubmitting}
					/>
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
						{isSubmitting ? "Sending..." : "Send Message"}
					</button>
				</div>
			</div>
			{feedback && (
				<p className={`mt-3 mb-0 ${feedback.isError ? "text-danger" : "text-success"}`} role={feedback.isError ? "alert" : "status"}>
					{feedback.message}
				</p>
			)}
		</form>
	);
}
