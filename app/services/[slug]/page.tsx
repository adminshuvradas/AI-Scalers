import Link from "next/link";
import { notFound } from "next/navigation";
import BouncingBlobsWrapper from "@/components/elements/BouncingBlobsWrapper";
import Layout from "@/components/layout/Layout";
import ServiceQuestions from "@/components/sections/ServiceQuestions";
import { services } from "@/util/services";

interface ServicePageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return services.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function ServiceDetailPage({ params }: ServicePageProps) {
	const { slug } = await params;
	const service = services.find((item) => item.slug === slug);

	if (!service) {
		notFound();
	}

	return (
		<Layout>
			<section className="section-page-header py-10 fix position-relative">
				<div className="container position-relative z-1">
					<div className="text-start">
						<h3>{service.title}</h3>
						<div className="d-flex align-items-center">
							<Link href="/">
								<p className="mb-0 text-900">Home</p>
							</Link>
							<svg
								className="mx-3"
								xmlns="http://www.w3.org/2000/svg"
								width={8}
								height={13}
								viewBox="0 0 8 13"
								fill="none"
							>
								<path
									className="stroke-dark"
									d="M1 1.5L6.5 6.75L1 12"
									stroke="#111827"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<Link href="/services">
								<p className="mb-0 text-900">Services</p>
							</Link>
							<svg
								className="mx-3"
								xmlns="http://www.w3.org/2000/svg"
								width={8}
								height={13}
								viewBox="0 0 8 13"
								fill="none"
							>
								<path
									className="stroke-dark"
									d="M1 1.5L6.5 6.75L1 12"
									stroke="#111827"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<p className="text-primary mb-0">Service Details</p>
						</div>
					</div>
				</div>
				<img
					className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
					src="/assets/imgs/page-header/bg-line.png"
					alt=""
				/>
				<div className="bouncing-blobs-container">
					<div className="bouncing-blobs-glass" />
					<BouncingBlobsWrapper className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--green" />
						<div className="bouncing-blob bouncing-blob--primary" />
					</BouncingBlobsWrapper>
				</div>
			</section>

			<section className="section-services-details pt-80px pb-120">
				<div className="container">
					<div className="row pt-8">
						<div className="col-lg-8 ps-lg-4 mt-lg-0 mt-8 content">
							<img
								className="rounded-3 w-100"
								src="/assets/imgs/services-details-2/img-1.png"
								alt={service.title}
							/>
							<h4 className="my-3">{service.title}</h4>
							<p className="mb-3">{service.description}</p>
							<p className="mb-0">{service.details}</p>

							<h5 className="pt-4 border-top mb-3 mt-5">
								How we support your business
							</h5>
							<div className="row mt-4">
								{service.highlights.map((highlight, index) => (
									<div className="col-md-4 mb-4" key={highlight}>
										<div className="d-flex align-items-start">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 flex-shrink-0">
												<div className="icon">
													<img
														src={`/assets/imgs/services-details/icon-${index + 5}.svg`}
														alt=""
													/>
												</div>
											</div>
											<div className="ps-4">
												<h6>{highlight}</h6>
												<p className="mb-0">{service.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>

							<div className="row align-items-center mt-4">
								<div className="col-lg-7">
									<h4 className="mt-3 pt-3 border-top mb-3">
										A practical approach to {service.title.toLowerCase()}
									</h4>
									<p className="mb-3">{service.details}</p>
									<Link href="/contact" className="btn btn-primary hover-up mt-3">
										Talk to our team
									</Link>
								</div>
								<div className="col-lg-5 mt-lg-0 mt-5">
									<img
										className="rounded-3 w-100"
										src="/assets/imgs/services-details/img-2.png"
										alt=""
									/>
								</div>
							</div>

							<ServiceQuestions serviceTitle={service.title} />
						</div>

						<aside className="col-lg-4 sidebar mt-lg-0 mt-5">
							{services.map((item) => (
								<Link
									href={`/services/${item.slug}`}
									key={item.slug}
									aria-current={item.slug === service.slug ? "page" : undefined}
									className={`btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${
										item.slug === service.slug
											? "btn-primary"
											: "btn-outline-secondary-2"
									}`}
								>
									{item.title}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											className="fill-neutral-100"
											d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
											fill="#f3f4f6"
										/>
									</svg>
								</Link>
							))}

							<div className="position-relative mt-7">
								<div className="zoom-img rounded-4 fix">
									<img
										className="w-100"
										src="/assets/imgs/services-details-2/img-2.png"
										alt=""
									/>
								</div>
							</div>

							<div className="bg-primary rounded-4 mt-7 position-relative overflow-hidden">
								<div className="p-7 position-relative z-1">
									<h4 className="text-white">
										Let&apos;s plan your next step
									</h4>
									<p className="text-white mt-3">
										Find out how {service.title.toLowerCase()} can help your
										business move forward.
									</p>
									<Link
										href="/contact"
										className="fw-bold btn text-start bg-white fs-6 d-flex align-items-center justify-content-between text-primary hover-up w-100 mt-5"
									>
										<span>Contact Us</span>
										<span aria-hidden="true">&rarr;</span>
									</Link>
								</div>
								<img
									className="position-absolute top-0 end-0"
									src="/assets/imgs/services-details/bg-line-3.png"
									alt=""
								/>
							</div>
						</aside>
					</div>
				</div>
			</section>

			<section className="section-contact-2 position-relative section-padding bg-5">
				<div className="container position-relative z-1">
					<div className="text-center">
						<h2 className="ds-5 mt-3 mb-3">
							Thinking about a project?
							<br className="d-md-block d-none" /> Get in touch with us.
						</h2>
						<p className="fs-5 fw-medium">
							Ask us about {service.title} and how we can help your business.
						</p>
					</div>
					<div className="row mt-8">
						<div className="col-lg-10 mx-lg-auto">
							<div className="row">
								<div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
									<h4>Leave a message</h4>
									<form action="#">
										<div className="row mt-5">
											<div className="col-md-6">
												<input
													type="text"
													className="form-control rounded-2"
													name="name"
													placeholder="Your name *"
													aria-label="Your name"
													required
												/>
											</div>
											<div className="col-md-6">
												<input
													type="email"
													className="form-control rounded-2 mt-4 mt-md-0"
													name="email"
													placeholder="Email address *"
													aria-label="Email address"
													required
												/>
											</div>
											<div className="col-md-6">
												<input
													type="tel"
													className="form-control rounded-2 mt-4"
													name="phone"
													placeholder="Phone"
													aria-label="Phone"
												/>
											</div>
											<div className="col-md-6">
												<input
													type="text"
													className="form-control rounded-2 mt-4"
													name="subject"
													placeholder="Subject"
													aria-label="Subject"
													defaultValue={service.title}
												/>
											</div>
											<div className="col-12">
												<textarea
													className="form-control rounded-2 mt-4 pb-10"
													name="message"
													placeholder="Describe your project"
													aria-label="Describe your project"
													required
												/>
											</div>
											<div className="col-12">
												<button
													type="submit"
													className="btn btn-primary hover-up mt-4"
												>
													Send Message
													<svg
														className="ms-2"
														xmlns="http://www.w3.org/2000/svg"
														width={24}
														height={24}
														viewBox="0 0 24 24"
														fill="none"
														aria-hidden="true"
													>
														<path
															className="stroke-white"
															d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z"
															fill="black"
															stroke="white"
														/>
													</svg>
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-lg-6">
									<div className="ps-lg-6">
										<h5>Chat with us</h5>
										<p className="text-500">
											Our team is ready to talk through your service needs.
										</p>
										<div className="d-flex align-items-center mb-3">
											<img
												src="/assets/imgs/contact-2/icon-4.svg"
												alt=""
											/>
											<a
												className="ms-2 text-decoration-underline text-900 fs-7"
												href="mailto:contact@infinia.com"
											>
												contact@infinia.com
											</a>
										</div>
										<h5 className="mt-5">For more inquiry</h5>
										<p className="text-500">
											Reach out to discuss {service.title.toLowerCase()}.
										</p>
										<Link href="/contact" className="btn btn-outline-secondary">
											Visit our contact page
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
