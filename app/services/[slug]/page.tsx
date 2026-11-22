import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ServiceQuestions from "@/components/sections/ServiceQuestions";
import Newsletter1 from "@/components/sections/Newsletter1";
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
			<section className="section-services-details pt-80px pb-120 position-relative fix" style={{ paddingTop: "160px" }}>
				<div className="container position-relative z-1">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-4 py-2">
							<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
								Service Information
							</span>
						</div>
					</div>
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

							<h5 className="pt-4 border-top mb-4 mt-5">
								How we support your business
							</h5>
							<div className="row g-3">
								{service.highlights.map((highlight, index) => (
									<div className="col-md-4" key={highlight}>
										<div className="h-100 bg-white border rounded-3 p-4 hover-up">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
												<div className="icon">
													<img
														src={`/assets/imgs/services-details/icon-${index + 5}.svg`}
														alt=""
													/>
												</div>
											</div>
											<h6 className="mb-0 lh-base">{highlight}</h6>
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
