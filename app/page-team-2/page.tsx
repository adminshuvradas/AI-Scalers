'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from "react-countup"
export default function PageTeam2() {

	return (
		<>

			<Layout >

				{/*Team 2*/}
				<section className="section-team-1 section-padding position-relative overflow-hidden">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={200}>Meet Our Team</h3>
								<p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>Meet the talented and passionate team members who drive our company forward every day. <br className="d-none d-lg-block" /> company forward every day.</p>
							</div>
						</div>
						<div className="row mt-6 justify-content-center">
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-1.png" alt="infinia" />
									</div>
									<Link href="/team/michael-anderson" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Michael Anderson</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Co-Founder</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-2.png" alt="infinia" />
									</div>
									<Link href="/team/daniel-martinez" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Daniel Martinez</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Software Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={0}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-3.png" alt="infinia" />
									</div>
									<Link href="/team/sarah-brown" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Sarah Brown</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Product Manager</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-4.png" alt="infinia" />
									</div>
									<Link href="/team/david-clark" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>David Clark</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">UX/UI Designer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-5.png" alt="infinia" />
									</div>
									<Link href="/team/jessica-carter" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Jessica Carter</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">DevOps Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-6.png" alt="infinia" />
									</div>
									<Link href="/team/lauren-graham" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Lauren Graham</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Data Analyst</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={400}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-7.png" alt="infinia" />
									</div>
									<Link href="/team/james-bennett" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>James Bennett</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Sales Executive</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={500}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-8.png" alt="infinia" />
									</div>
									<Link href="/team/william-foster" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>William Foster</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Marketing Specialist</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
				</section>
				{/* cta 8 */}
				<section className="section-cta-8 bg-4">
					<div className="container-fluid position-relative section-padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Recent work</span>
									</div>
									<h5 className="ds-5 mt-2">Doing the successful thing, at the right time.</h5>
									<p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Research planning</h6>
											<p>Separating your work from your home life can <br /> improve work-life balance.</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Investment</h6>
											<p>A business consultant provides expert advice and <br /> guidance to businesses.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
									<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" />
										<div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
											<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /> <CountUp end={25} enableScrollSpy={true} />+</span>
											<p className="text-white text-nowrap mb-0">Years of Experience</p>
										</div>
										<div className="position-absolute tag-dots z-0 pt-5">
											<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="container pt-120 pb-120">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="banner bg-primary-light rounded-3 position-relative p-8">
								<div className="d-flex flex-column flex-lg-row align-items-end position-relative z-1">
									<div className="me-auto">
										<h6 className="fw-regular ds-6 text-white">
											We are<span className="fw-bold"> Looking to <br />Expand </span> Our Team
										</h6>
										<Link href="#" className="btn btn-success d-inline-block mt-3">
											Explore Now
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									</div>
									<div className="position-relative mt-lg-0 mt-8">
										<img className="rounded-2" src="/assets/imgs/banner-3/img-1.png" alt="infinia" />
										<div className="position-absolute rectangle-banner3 bg-primary rounded-2" />
									</div>
								</div>
								<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/services-details/bg-line-1.png" alt="infinia" />
								<img className="position-absolute bottom-0 start-0 z-0" src="/assets/imgs/services-details/bg-line-2.png" alt="infinia" />
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}