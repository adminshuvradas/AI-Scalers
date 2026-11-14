"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import blogPosts from "@/util/blog.json";

interface SearchResult {
	href: string;
	title: string;
	description: string;
}

interface SearchProps {
	isSearch: boolean;
	handleSearch: () => void;
}

const pages: SearchResult[] = [
	{ href: "/", title: "Home", description: "Infinia homepage" },
	{ href: "/about-us", title: "About Us", description: "About our company" },
	{ href: "/services", title: "Services", description: "Our services" },
	{ href: "/team", title: "Team", description: "Meet our team" },
	{ href: "/blog", title: "Blog", description: "Latest articles and news" },
	{ href: "/contact", title: "Contact", description: "Get in touch with us" },
	{ href: "/page-pricing-01", title: "Pricing", description: "Plans and pricing" },
	{ href: "/page-features-1", title: "Features", description: "Explore our features" },
];

const suggestions = ["About", "Services", "Team", "Tech", "Gaming", "Pricing"];

export default function Search({ isSearch, handleSearch }: SearchProps) {
	const [query, setQuery] = useState("");
	const normalizedQuery = query.trim().toLocaleLowerCase();
	const results: SearchResult[] = normalizedQuery
		? [
				...pages.filter(({ title, description }) =>
					`${title} ${description}`.toLocaleLowerCase().includes(normalizedQuery),
				),
				...blogPosts
					.filter(({ title, category, author }) =>
						`${title} ${category} ${author}`.toLocaleLowerCase().includes(normalizedQuery),
					)
					.map(({ id, title, category }) => ({
						href: `/blog/${id}`,
						title,
						description: `${category} article`,
					})),
			]
		: [];

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className={`offcanvas offcanvas-top offcanvasTop h-50 ${isSearch ? "show" : ""}`} tabIndex={-1}>
			<div className="offcanvas-header">
				<button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleSearch} />
			</div>
			<div className="offcanvas-body">
				<div className="container">
					<div className="row py-md-5 py-2">
						<div className="col-12 col-lg-8 mx-auto">
							<h4 className="mb-2 fs-sm-5">What are you looking for?</h4>
							<p className="text-500 fs-6 mb-5">Explore our services and discover how we can help you achieve your goals</p>
							<form className="input-group" data-aos="zoom-in" onSubmit={handleSubmit} role="search">
								<input
									type="search"
									className="form-control ps-5 rounded-start-pill"
									name="search"
									placeholder="Enter Your Keywords"
									aria-label="Search pages and articles"
									value={query}
									onChange={(event) => setQuery(event.target.value)}
								/>
								<button className="btn btn-primary rounded-end-pill" type="submit" aria-label="Search">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</button>
							</form>
							{normalizedQuery ? (
								<div className="mt-4" aria-live="polite">
									{results.length ? (
										<ul className="list-unstyled mb-0">
											{results.map((result) => (
												<li key={result.href} className="py-2 border-bottom">
													<Link href={result.href} onClick={handleSearch}>
														<span className="d-block fw-bold">{result.title}</span>
														<span className="text-500 fs-7">{result.description}</span>
													</Link>
												</li>
											))}
										</ul>
									) : (
										<p className="text-500 mb-0">No results found for “{query.trim()}”.</p>
									)}
								</div>
							) : (
								<div className="d-flex flex-column flex-lg-row mt-5">
									<h6 className="d-inline me-2">Suggest:</h6>
									<div className="d-flex flex-wrap gap-2">
										{suggestions.map((suggestion) => (
											<button
												key={suggestion}
												type="button"
												className="btn btn-link p-0"
												onClick={() => setQuery(suggestion)}
											>
												{suggestion}
											</button>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
