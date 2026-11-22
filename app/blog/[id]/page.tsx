import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Newsletter1 from "@/components/sections/Newsletter1";
import { blogPosts } from "@/util/blog-posts";

interface BlogDetailProps {
	params: Promise<{ id: string }>;
}

export function generateStaticParams() {
	return blogPosts.map(({ id }) => ({ id }));
}

export const dynamicParams = false;

export default async function BlogDetails({ params }: BlogDetailProps) {
	const { id } = await params;
	const post = blogPosts.find((item) => item.id === id);

	if (!post) {
		notFound();
	}

	const relatedPosts = blogPosts.filter((item) => item.id !== post.id).slice(0, 3);

	return (
		<Layout>
			<section className="section-blog-details position-relative fix" style={{ paddingTop: "120px" }}>
				<div className="container mt-10 position-relative z-1">
					<div className="row">
						<div className="col-md-8 mx-auto">
							<div className="d-flex gap-2">
								<span className="bg-primary-soft rounded-pill px-3 fw-bold py-2 text-primary text-uppercase fs-7">
									{post.category}
								</span>
							</div>
							<h1 className="ds-5 mt-3 mb-4">{post.title}</h1>
							<p className="fs-5 text-900 mb-0">{post.intro}</p>
							<div className="d-flex align-items-center justify-content-between mt-7 py-3 border-top border-bottom">
								<div className="d-flex align-items-center">
									<div className="icon-shape rounded-circle border border-2 border-white">
										<img
											className="rounded-circle"
											src="/assets/imgs/blog-4/avatar-1.png"
											alt={post.author}
										/>
									</div>
									<div className="ms-3">
										<h6 className="fs-7 m-0">{post.author}</h6>
										<p className="mb-0 fs-8">{post.date}</p>
									</div>
								</div>
								<span className="fs-7 text-900">{post.readingTime}</span>
							</div>
						</div>
						<div className="col-md-10 mx-auto my-7">
							<img
								className="rounded-4 w-100"
								src={post.image}
								alt={post.title}
								style={{
									height: "clamp(260px, 38vw, 480px)",
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>
						</div>
						<div className="col-md-8 mx-auto">
							{post.sections.map((section) => (
								<section className="mb-5" key={section.heading}>
									<h2 className="h4 mb-3">{section.heading}</h2>
									{section.paragraphs.map((paragraph) => (
										<p key={paragraph}>{paragraph}</p>
									))}
								</section>
							))}
							<div className="d-flex align-items-center justify-content-between mt-5 py-3 border-top border-bottom">
								<div>
									<p className="fw-bold text-500 mb-0">Category</p>
									<span className="text-primary">{post.category}</span>
								</div>
								<div className="d-flex social-icons">
									<a
										href="https://www.facebook.com/"
										aria-label="Share on Facebook"
										className="text-900 border border-end-0 border-opacity-10 icon-shape icon-md"
									>
										<i className="bi bi-facebook" />
									</a>
									<a
										href="https://www.linkedin.com/"
										aria-label="Share on LinkedIn"
										className="text-900 border border-opacity-10 icon-shape icon-md"
									>
										<i className="bi bi-linkedin" />
									</a>
								</div>
							</div>
							<h2 className="h3 mt-7 mb-4 pb-4 border-bottom">Leave a comment</h2>
							<form action="#">
								<div className="row g-3">
									<div className="col-md-6">
										<input
											className="form-control"
											type="text"
											name="name"
											placeholder="Your name *"
											aria-label="Your name"
											required
										/>
									</div>
									<div className="col-md-6">
										<input
											className="form-control"
											type="email"
											name="email"
											placeholder="Email address *"
											aria-label="Email address"
											required
										/>
									</div>
									<div className="col-12">
										<textarea
											className="form-control pb-10"
											name="comment"
											placeholder="Write your comment"
											aria-label="Write your comment"
											required
										/>
									</div>
									<div className="col-12">
										<button type="submit" className="btn btn-primary mt-3">
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>

			<section className="section-blog-8 section-padding position-relative fix" style={{ marginTop: "120px" }}>
				<div className="container position-relative z-1">
					<h2 className="ds-5 text-center">Related Posts</h2>
					<div className="row">
						{relatedPosts.map((related) => (
							<div className="col-lg-4 text-start" key={related.id}>
								<Link
									href={`/blog/${related.id}`}
									className="card border-0 rounded-3 mt-8 position-relative d-inline-flex"
								>
									<img
										className="rounded-top-3"
										src={related.image}
										alt={related.title}
									/>
									<div className="card-body bg-white p-0">
										<span className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
												{related.category}
											</span>
										</span>
										<h3 className="h6 my-3">{related.title}</h3>
										<p>{related.excerpt}</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>
			<Newsletter1 />
		</Layout>
	);
}
