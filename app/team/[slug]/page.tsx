import Link from "next/link";
import { notFound } from "next/navigation";
import BouncingBlobsWrapper from "@/components/elements/BouncingBlobsWrapper";
import Layout from "@/components/layout/Layout";
import { teamMembers } from "@/util/team";

interface TeamMemberPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return teamMembers.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
	const { slug } = await params;
	const member = teamMembers.find((item) => item.slug === slug);

	if (!member) {
		notFound();
	}

	return (
		<Layout>
			<section className="section-page-header py-10 fix position-relative">
				<div className="container position-relative z-1">
					<div className="text-start">
						<h3>{member.name}</h3>
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
								aria-hidden="true"
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
							<Link href="/team">
								<p className="mb-0 text-900">Team</p>
							</Link>
							<svg
								className="mx-3"
								xmlns="http://www.w3.org/2000/svg"
								width={8}
								height={13}
								viewBox="0 0 8 13"
								fill="none"
								aria-hidden="true"
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
							<p className="text-primary mb-0">Team Details</p>
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

			<section className="section-team-detail-1 pt-80px pb-120">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="d-flex flex-lg-row flex-column align-items-center p-5 rounded-4 bg-white shadow-2">
								<img
									className="rounded-3 mb-lg-0 mb-5"
									src={member.image}
									alt={member.name}
								/>
								<div className="mx-lg-8">
									<h3>{member.name}</h3>
									<p className="fs-5 mb-4">{member.role}</p>
									<p className="fs-5 text-900 mb-5">&ldquo;{member.quote}&rdquo;</p>
									<img
										src="/assets/imgs/team-detail-1/name-author.svg"
										alt=""
									/>
									<div className="pt-5 mt-4 border-top d-flex flex-md-row flex-column align-items-center">
										<div>
											<div className="d-flex mb-3">
												<img src="/assets/imgs/contact-2/icon-4.svg" alt="" />
												<a
													className="ms-2 text-decoration-underline text-900 fs-7"
													href="mailto:contact@infinia.com"
												>
													contact@infinia.com
												</a>
											</div>
											<div className="d-flex">
												<img src="/assets/imgs/contact-2/icon-1.svg" alt="" />
												<Link
													className="ms-2 text-decoration-underline text-900 fs-7"
													href="/contact"
												>
													Contact our team
												</Link>
											</div>
										</div>
										<div className="ps-md-10 ms-md-10 mt-md-0 mt-5">
											<p className="fw-bold text-900">Social network:</p>
											<div className="d-flex social-icons">
												<a
													href="https://www.facebook.com/"
													aria-label={`${member.name} on Facebook`}
													className="text-900 border border-end-0 border-opacity-10 icon-shape icon-md"
												>
													<i className="bi bi-facebook" />
												</a>
												<a
													href="https://www.linkedin.com/"
													aria-label={`${member.name} on LinkedIn`}
													className="text-900 border border-opacity-10 icon-shape icon-md"
												>
													<i className="bi bi-linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row pt-8">
						<div className="col-lg-7 pe-lg-5 content-left">
							<p className="mb-4 pb-4 border-bottom">{member.bio}</p>
							<h5 className="mb-3">About {member.name.split(" ")[0]}</h5>
							<p>{member.quote}</p>
							<h5 className="pt-4 border-top mb-3 mt-5">Areas of expertise</h5>
							<p className="mb-4">
								{member.name} contributes as {member.role.toLowerCase()}, working
								collaboratively to support the team and its clients.
							</p>
							<ul className="ps-3">
								{member.skills.map((skill) => (
									<li key={skill}>
										<p className="text-900 fw-bold">{skill}</p>
									</li>
								))}
							</ul>
						</div>
						<div className="col-lg-5 ps-lg-8 content-right mt-lg-0 mt-5">
							<h5 className="mb-5">Skills Experience</h5>
							{member.skills.map((skill, index) => (
								<div className="d-flex pt-3" key={skill}>
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 flex-shrink-0">
										<div className="icon">
											<img
												src={`/assets/imgs/team-detail-1/icon-${(index % 5) + 1}.svg`}
												alt=""
											/>
										</div>
									</div>
									<div className="ps-5">
										<h6>{skill}</h6>
										<p>{member.bio}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="section-cta-8 bg-4">
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2">
									<img src="/assets/imgs/features-1/dots.png" alt="" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
										Recent work
									</span>
								</div>
								<h5 className="ds-5 mt-2">
									Doing the successful thing, at the right time.
								</h5>
								<p>
									We strive to build long-lasting partnerships with our
									clients, understanding their unique challenges and
									opportunities, and providing tailored strategies that lead to
									measurable success.
								</p>
								<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/service-4/icon-1.svg" alt="" />
										</div>
									</div>
									<div className="ps-5">
										<h6>Research planning</h6>
										<p>
											Separating your work from your home life can <br />
											improve work-life balance.
										</p>
									</div>
								</div>
								<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/service-4/icon-2.svg" alt="" />
										</div>
									</div>
									<div className="ps-5">
										<h6>Investment</h6>
										<p>
											A business consultant provides expert advice and <br />
											guidance to businesses.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
								<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
									<img
										className="rounded-4 position-relative z-1"
										src="/assets/imgs/cta-5/img-1.png"
										alt=""
									/>
									<div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
										<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
											25+
										</span>
										<p className="text-white text-nowrap mb-0">
											Years of Experience
										</p>
									</div>
									<div className="position-absolute tag-dots z-0 pt-5">
										<img
											className="alltuchtopdown"
											src="/assets/imgs/cta-4/vector.svg"
											alt=""
										/>
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
