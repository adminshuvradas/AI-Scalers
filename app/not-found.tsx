import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function NotFound() {
	return (
		<Layout>
			<section className="section-team-1 d-flex align-items-center position-relative fix overflow-hidden" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="" />
				</div>
				<div className="container position-relative z-1 py-120">
					<div className="text-center">
						<img src="/assets/imgs/other/404.png" alt="" />
						<h5 className="ds-5 pt-8">
							We Can't Find What <br />
							You're Looking For
						</h5>
						<p>
							We apologize, but the page you requested seems to be missing. It may <br />
							have been moved, deleted, or there might be a typo in the URL.
						</p>
						<Link href="/" className="btn btn-primary hover-up mt-5">
							Back to Homepage
						</Link>
					</div>
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
			</section>
		</Layout>
	);
}
