
import Link from "next/link"
import ServiceCards from "@/components/sections/ServiceCards";

export default function Services2() {
	return (
		<>
			<section className="section-team-1 position-relative fix section-padding">
				<div className="container position-relative z-2">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular">
							Let’s Discover Our Service
							<span className=" fw-bold">Our Service <br className="d-none d-lg-inline" />
								Features</span>
							Charter
						</h3>
					</div>
					<div className="row mt-6 position-relative">
					    <ServiceCards />
					<svg className="position-absolute top-50 start-50 translate-middle z-0" xmlns="http://www.w3.org/2000/svg" width={828} height={699} viewBox="0 0 828 699" fill="none">
							<path className="fill-primary-soft" d="M0 130.481C0 110.236 15.1267 93.1822 35.2276 90.7667L783.228 0.880261C807.04 -1.98124 828 16.611 828 40.5945V533.155C828 552.691 813.888 569.369 794.622 572.603L46.6224 698.173C22.2271 702.269 0 683.462 0 658.725V130.481Z" fill="#F5EEFF" />
						</svg>
					</div>
					<div className="text-center mt-6 d-flex flex-wrap justify-content-center align-items-center gap-3">
						<Link href="/services" className="btn btn-gradient">
							Explore Now
							<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
						<Link href="/contact" className="btn btn-outline-secondary hover-up">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Contact Us
						</Link>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>
		</>
	)
}
