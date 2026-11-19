
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Page404() {

	return (
		<>

			<Layout>
				<section className="section-team-1 min-vh-100 d-flex align-items-center position-relative overflow-hidden">
					<img
						className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0"
						src="/assets/imgs/team-1/bg-line.png"
						alt=""
					/>
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
								<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
									<path className="stroke-white" d="M2.89413 7.25597H23.5V6.74404H2.89413H1.68704L2.54058 5.89049L6.94422 1.4868L6.58227 1.12484L0.707108 6.99996L6.58228 12.8751L6.94422 12.5132L2.54058 8.10952L1.68703 7.25597H2.89413Z" stroke="white" />
								</svg>
								Back to Homepage
							</Link>
						</div>
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
				</section>
			</Layout>
		</>
	)
}