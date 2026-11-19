import Layout from "@/components/layout/Layout";
import Cta8 from "@/components/sections/Cta8";
import TeamMemberCards from "@/components/sections/TeamMemberCards";
import Link from "next/link";

export default function TeamPage() {
	return (
		<Layout>
			<section className="section-team-1 section-padding position-relative overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2">
								<img src="/assets/imgs/features-1/dots.png" alt="" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
									Our Team Members
								</span>
							</div>
							<h1 className="ds-3 my-3">Meet Our Team</h1>
							<p className="fs-5">
								Meet the talented and passionate team members who drive our
								company forward every day.
							</p>
						</div>
					</div>
					<div className="row mt-6 justify-content-center">
						<TeamMemberCards imageVariant="modern" />
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/team-1/bg-line.png" alt="" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
			</section>
			<Cta8 />
			<div className="container pt-120 pb-120">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="banner bg-primary-light rounded-3 position-relative p-8">
							<div className="d-flex flex-column flex-lg-row align-items-end position-relative z-1">
								<div className="me-auto">
									<h2 className="fw-regular ds-6 text-white">
										We are <span className="fw-bold">Looking to <br />Expand</span> Our Team
									</h2>
									<Link href="/contact" className="btn btn-success d-inline-block mt-3">
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden="true">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
								<div className="position-relative mt-lg-0 mt-8">
									<img className="rounded-2" src="/assets/imgs/banner-3/img-1.png" alt="Our team collaborating" />
									<div className="position-absolute rectangle-banner3 bg-primary rounded-2" />
								</div>
							</div>
							<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/services-details/bg-line-1.png" alt="" />
							<img className="position-absolute bottom-0 start-0 z-0" src="/assets/imgs/services-details/bg-line-2.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
