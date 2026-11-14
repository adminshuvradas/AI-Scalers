import Layout from "@/components/layout/Layout";
import TeamMemberCards from "@/components/sections/TeamMemberCards";

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
		</Layout>
	);
}
