"use client";

import { useState } from "react";

interface ServiceQuestionsProps {
	serviceTitle: string;
}

export default function ServiceQuestions({
	serviceTitle,
}: ServiceQuestionsProps) {
	const [activeItem, setActiveItem] = useState(1);
	const questions = [
		{
			title: `What does ${serviceTitle.toLowerCase()} include?`,
			answer: `Our ${serviceTitle.toLowerCase()} service is tailored to your business goals. We begin by understanding your needs, then recommend a practical approach and clear next steps.`,
		},
		{
			title: "How do we get started?",
			answer:
				"Contact our team using the form below. We will discuss your requirements, answer your questions, and outline a suitable way forward.",
		},
		{
			title: "Can this service be tailored to my business?",
			answer:
				"Yes. We adapt the scope and approach to your organization, priorities, and existing workflows.",
		},
		{
			title: "How can I get more information?",
			answer:
				"Send us a message through the contact form below and our team will follow up to discuss your needs.",
		},
	];

	return (
		<>
			<h5 className="pt-3 border-top mb-3 mt-5">Questions about service</h5>
			<div className="accordion">
				{questions.map((question, index) => {
					const item = index + 1;
					const isActive = activeItem === item;

					return (
						<div
							className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0"
							key={question.title}
						>
							<div className="px-0 card-header border-0 bg-gradient-1">
								<a
									href={`#service-question-${item}`}
									className={`pointer text-900 fw-bold d-flex align-items-center ${
										isActive ? "" : "collapsed"
									}`}
									onClick={(event) => {
										event.preventDefault();
										setActiveItem(isActive ? 0 : item);
									}}
									aria-expanded={isActive}
								>
									<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-flex align-items-center justify-content-center me-3 bg-primary text-white">
										{item}
									</span>
									<h6 className="m-0">{question.title}</h6>
									<span className="ms-auto arrow me-2" aria-hidden="true">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={13}
											height={8}
											viewBox="0 0 13 8"
											fill="none"
										>
											<path
												className="stroke-dark"
												d="M11.5 1L6.25 6.5L1 1"
												stroke="#111827"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
							<div
								id={`service-question-${item}`}
								className={`accordion-collapse collapse${isActive ? " show" : ""}`}
							>
								<p className="px-0 card-body fs-6 text-600 mb-0">
									{question.answer}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
