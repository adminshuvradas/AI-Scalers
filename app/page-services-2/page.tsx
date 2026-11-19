"use client";
import BouncingBlobsWrapper from "@/components/elements/BouncingBlobsWrapper";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ServiceCards from "@/components/sections/ServiceCards";
import ServiceContactForm from "@/components/sections/ServiceContactForm";
import CountUp from "react-countup";
export default function PageServices2() {
    return (
        <>
            <Layout>
                {/*Services 2*/}
                <section className="section-team-1 position-relative fix section-padding">
                    <div className="container position-relative z-2">
                        <div className="text-center">
                            <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
                            </div>
                            <h3 className="ds-3 my-3 fw-regular">
                                Let’s Discover Our Service
                                <span className=" fw-bold">
                                    Our Service <br className="d-none d-lg-inline" />
                                    Features
                                </span>
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
                {/*cta 1 */}
                <section className="section-cta-1 position-relative section-padding fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="text-start mb-lg-0 mb-5">
                                    <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                                        <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                        <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Download Mobile App</span>
                                    </div>
                                    <h3 className="ds-3 my-3">
                                        Manage all <br />
                                        from anywhere
                                    </h3>
                                    <p className="fs-5 mb-0">⚡Don't miss any contact. Stay connected.</p>
                                    <ul className="list-unstyled my-6">
                                        <li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={0}>
                                            <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                            <span className="mb-0 ms-2 fs-5 fw-bold">Beautiful and awesome interface</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={100}>
                                            <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                            <span className="mb-0 ms-2 fs-5 fw-bold">Online collaborative anytime, anywhere.</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={200}>
                                            <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                            <span className="mb-0 ms-2 fs-5 fw-bold">Real-time updates</span>
                                        </li>
                                    </ul>
                                    <div className="d-flex align-items-center mb-8 gap-2">
                                        <Link href="#">
                                            <img src="/assets/imgs/cta-1/app-1.png" alt="infinia" />
                                        </Link>
                                        <Link href="#">
                                            <img src="/assets/imgs/cta-1/app-2.png" alt="infinia" />
                                        </Link>
                                        <Link href="#">
                                            <img src="/assets/imgs/cta-1/app-3.png" alt="infinia" />
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex">
                                            <img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
                                            <img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
                                            <img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
                                        </div>
                                        <div>
                                            <p className="text-900 mb-0 fs-8 fw-bold">Trusted by 1M+ customers</p>
                                            <span className="fs-6 fw-bold">
                                                4.8/5{" "}
                                                <span className="text-secondary fw-medium">
                                                    (<span className="odometer" />
                                                    <CountUp end={26} enableScrollSpy={true} />k Reviews)
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-lg-end text-center">
                                <img src="/assets/imgs/cta-1/img-1.png" alt="infinia" />
                            </div>
                        </div>
                    </div>
                    <div className="bouncing-blobs-container">
                        <div className="bouncing-blobs-glass" />
                        <BouncingBlobsWrapper className="bouncing-blobs">
                            <div className="bouncing-blob bouncing-blob--blue" />
                            <div className="bouncing-blob bouncing-blob--primary" />
                        </BouncingBlobsWrapper>
                    </div>
                </section>
                {/*Static 1*/}
                <section className="section-static-1 position-relative bg-primary fix z-0 section-padding">
                    <div className="container position-relative z-3">
                        <div className="row border-bottom border-primary-light pb-8">
                            <div className="col-lg-6 me-lg-auto">
                                <h5 className="ds-5 text-100 m-0">Numbers Speaking for Themselves</h5>
                            </div>
                            <div className="col-auto align-self-end mt-lg-0 mt-5">
                                <Link href="#" className="btn btn-outline-secondary hover-up bg-transparent text-100">
                                    Get a Quote
                                    <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-8">
                        <div className="inner">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content text-center mx-auto">
                                            <span className="fw-bold lh-sm count ds-2 text-100">
                                                +<span className="odometer" />
                                                <CountUp end={500} enableScrollSpy={true} />
                                                <span>k</span>
                                            </span>
                                            <p className="fs-5 text-100">Users Active / Month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content text-center mx-auto">
                                            <span className="count lh-sm ds-2 fw-bold text-100">
                                                +<span className="odometer" />
                                                <CountUp end={38} enableScrollSpy={true} />k
                                            </span>
                                            <p className="fs-5 text-100">New Download / Month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content text-center mx-auto">
                                            <span className="count lh-sm ds-2 fw-bold text-100">
                                                <span className="odometer" />
                                                <CountUp end={150} enableScrollSpy={true} />
                                            </span>
                                            <p className="fs-5 text-100">Operating countries</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content text-center mx-auto">
                                            <span className="count lh-sm ds-2 fw-bold text-100">
                                                <span className="odometer" />
                                                <CountUp end={4000} enableScrollSpy={true} />
                                            </span>
                                            <p className="fs-5 text-100">Businesses trust on the world</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-decorate position-absolute top-0 start-0">
                        <img src="/assets/imgs/static-1/img-decorate.png" alt="infinia" />
                    </div>
                    <div className="bouncing-blobs-container">
                        <div className="bouncing-blobs-glass bg-transparent" />
                        <BouncingBlobsWrapper className="bouncing-blobs">
                            <div className="bouncing-blob bouncing-blob--white" />
                        </BouncingBlobsWrapper>
                    </div>
                    {/* <div class="img-decorate-2 position-absolute top-100 start-50 translate-middle z-0">
    </div> */}
                </section>
                {/*Testimonial 1*/}
                <section className="section-testimonial-1 pb-120 pt-120 position-relative">
                    <div className="container position-relative z-1">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="pe-8 mt-10">
                                    <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                                        <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                        <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
                                    </div>
                                    <h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>
                                        What our clients say
                                    </h3>
                                    <span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={300}>
                                        Access top-tier group mentoring plans and exclusive professional benefits for your team. 🔥
                                    </span>
                                    <div className="d-flex flex-wrap align-items-center mt-8">
                                        <Link href="/page-contact-1" className="btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Contact Us
                                        </Link>
                                        <Link href="#" className="ms-5 ms-md-5 mt-5 mt-md-0 fw-bold" data-aos="fade-zoom-in" data-aos-delay={300}>
                                            Help Center
                                            <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
                                                <path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={100}>
                                    <p className="text-900">
                                        The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.
                                    </p>
                                    <div className="d-flex align-items-center mt-5">
                                        <img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
                                        <div className="d-flex flex-column">
                                            <h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
                                            <div className="flag ms-3">
                                                <img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
                                                <span className="fs-8">CEO of Tech Innovators Inc</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
                                </div>
                                <div className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={200}>
                                    <p className="text-900">
                                        Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.
                                    </p>
                                    <div className="d-flex align-items-center mt-5">
                                        <img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
                                        <div className="d-flex flex-column">
                                            <h6 className="ms-3 fs-6 mb-0">Emily Davis</h6>
                                            <div className="flag ms-3">
                                                <img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
                                                <span className="fs-8">Software Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={300}>
                                    <p className="text-900">
                                        The individual email account feature has improved internal communication clarity and professionalism. Moreover, the premium support team's responsiveness and expertise have ensured minimal <span className="fw-bold">disruptions and quick resolutions</span> to any technical challenges we've faced. I highly recommend their services for any enterprise seeking robust SaaS solutions,
                                    </p>
                                    <div className="d-flex align-items-center mt-5">
                                        <img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
                                        <div className="d-flex flex-column">
                                            <h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
                                            <div className="flag ms-3">
                                                <img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
                                                <span className="fs-8">Marketing Director</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
                                </div>
                                <div className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={400}>
                                    <p className="text-900">
                                        Our experience with this team has surpassed our expectations on every front. <span className="fw-bold">The comprehensive suite of over 1200 UI blocks has enabled us to craft highly functional</span> and aesthetically pleasing user interfaces that resonate with our target audience. Equally impressive is the premium support team's proactive approach.
                                    </p>
                                    <div className="d-flex align-items-center mt-5">
                                        <img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
                                        <div className="d-flex flex-column">
                                            <h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
                                            <div className="flag ms-3">
                                                <img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
                                                <span className="fs-8">Software Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute top-0 start-0 z-0">
                        <img src="/assets/imgs/testimonial-1/bg-line.png" alt="infinia" />
                    </div>
                </section>
                {/* Contact 2*/}
                <section className="section-contact-2 position-relative section-padding bg-5">
                    <div className="container position-relative z-1">
                        <div className="text-center">
                            <h5 className="ds-5 mt-3 mb-3">
                                Thinking about a project? <br className="d-md-block d-none" />
                                Get in touch with us.
                            </h5>
                            <span className="fs-5 fw-medium">
                                Connect with Us Today through the Details Below or Fill <br className="d-md-block d-none" />
                                Out the Form for a Prompt Response
                            </span>
                        </div>
                        <div className="row mt-8">
                            <div className="col-lg-10 mx-lg-auto">
                                <div className="row">
                                    <div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
                                        <h4>Leave a message</h4>
                                        <ServiceContactForm />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ps-lg-6">
                                            <h6>Chat with us</h6>
                                            <p className="text-500">The support team is always available 24/7</p>
                                            <div className="d-flex mb-2">
                                                <img src="/assets/imgs/contact-2/icon-1.svg" alt="infinia" />
                                                <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                                                    Chat via Whatsapp
                                                </Link>
                                            </div>
                                            <div className="d-flex mb-2">
                                                <img src="/assets/imgs/contact-2/icon-2.svg" alt="infinia" />
                                                <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                                                    Chat via Viber
                                                </Link>
                                            </div>
                                            <div className="d-flex mb-2 mb-5">
                                                <img src="/assets/imgs/contact-2/icon-3.svg" alt="infinia" />
                                                <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                                                    Chat via Messager
                                                </Link>
                                            </div>
                                            <h6>Send us an email</h6>
                                            <p className="text-500">Our team will respond promptly to your inquiries</p>
                                            <div className="d-flex mb-2">
                                                <img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
                                                <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                                                    support@infinia.com
                                                </Link>
                                            </div>
                                            <div className="d-flex mb-2 mb-5">
                                                <img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
                                                <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                                                    sale@infinia.com
                                                </Link>
                                            </div>
                                            <h6>For more inquiry</h6>
                                            <p className="text-500">Reach out for immediate assistance</p>
                                            <div className="d-flex mb-2">
                                                <img src="/assets/imgs/contact-2/icon-5.svg" alt="infinia" />
                                                <Link className="ms-2 text-decoration-underline text-900 fs-7" href="tel:+0124568900">
                                                    +01 (24) 568 900
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
